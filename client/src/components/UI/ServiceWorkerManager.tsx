import { useEffect, useState } from 'react';

interface ServiceWorkerManagerProps {
  onUpdateAvailable?: () => void;
  onOfflineStatusChange?: (isOffline: boolean) => void;
  className?: string;
}

export default function ServiceWorkerManager({
  onUpdateAvailable,
  onOfflineStatusChange,
  className = ''
}: ServiceWorkerManagerProps) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          setSwRegistration(registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setUpdateAvailable(true);
                  onUpdateAvailable?.();
                }
              });
            }
          });
        })
        .catch((error) => {
          console.warn('Service Worker registration failed:', error);
        });
    }

    // Listen for online/offline status
    const handleOnline = () => {
      setIsOnline(true);
      onOfflineStatusChange?.(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      onOfflineStatusChange?.(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [onUpdateAvailable, onOfflineStatusChange]);

  const handleUpdate = () => {
    if (swRegistration?.waiting) {
      swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  return (
    <div className={`service-worker-manager ${className}`}>
      {/* Offline indicator */}
      {!isOnline && (
        <div className="offline-indicator">
          <div className="offline-content">
            <span className="offline-icon">📡</span>
            <span className="offline-text">Sin conexión</span>
          </div>
        </div>
      )}

      {/* Update available notification */}
      {updateAvailable && (
        <div className="update-notification">
          <div className="update-content">
            <span className="update-text">Nueva versión disponible</span>
            <button 
              onClick={handleUpdate}
              className="update-button"
            >
              Actualizar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Utility function to cache resources
export function cacheResources(urls: string[]) {
  if ('caches' in window) {
    caches.open('mac-clinic-v1').then((cache) => {
      cache.addAll(urls);
    });
  }
}

// Utility function to get cached resource
export async function getCachedResource(url: string): Promise<Response | null> {
  if (!('caches' in window)) return null;
  
  try {
    const cache = await caches.open('mac-clinic-v1');
    return await cache.match(url);
  } catch (error) {
    console.warn('Failed to get cached resource:', error);
    return null;
  }
}
