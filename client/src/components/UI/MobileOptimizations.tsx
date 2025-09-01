import { useEffect, useState } from 'react';

interface MobileOptimizationsProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileOptimizations({ children, className = '' }: MobileOptimizationsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast');

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    // Detect low-end device
    const checkLowEndDevice = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const isLowEnd = hardwareConcurrency <= 2 || deviceMemory <= 2;
      setIsLowEndDevice(isLowEnd);
    };

    // Detect connection speed
    const checkConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const effectiveType = connection.effectiveType;
        const isSlow = effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g';
        setConnectionSpeed(isSlow ? 'slow' : 'fast');
      }
    };

    checkMobile();
    checkLowEndDevice();
    checkConnectionSpeed();

    // Add performance optimizations
    const optimizePerformance = () => {
      // Reduce animations on low-end devices
      if (isLowEndDevice) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
        document.documentElement.style.setProperty('--transition-duration', '0.1s');
      }

      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01s');
        document.documentElement.style.setProperty('--transition-duration', '0.01s');
      }

      // Optimize for slow connections
      if (connectionSpeed === 'slow') {
        // Lazy load images more aggressively
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
          img.setAttribute('loading', 'lazy');
        });
      }
    };

    optimizePerformance();

    // Listen for connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', checkConnectionSpeed);
      
      return () => {
        connection.removeEventListener('change', checkConnectionSpeed);
      };
    }
  }, [isLowEndDevice, connectionSpeed]);

  // Add mobile-specific optimizations
  useEffect(() => {
    if (isMobile) {
      // Prevent zoom on input focus
      const preventZoom = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          const viewport = document.querySelector('meta[name="viewport"]');
          if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
          }
        }
      };

      // Restore zoom after input blur
      const restoreZoom = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
      };

      document.addEventListener('focusin', preventZoom);
      document.addEventListener('focusout', restoreZoom);

      return () => {
        document.removeEventListener('focusin', preventZoom);
        document.removeEventListener('focusout', restoreZoom);
      };
    }
  }, [isMobile]);

  return (
    <div 
      className={`mobile-optimizations ${className} ${isMobile ? 'mobile' : ''} ${isLowEndDevice ? 'low-end' : ''} ${connectionSpeed === 'slow' ? 'slow-connection' : ''}`}
      data-mobile={isMobile}
      data-low-end={isLowEndDevice}
      data-connection={connectionSpeed}
    >
      {children}
    </div>
  );
}
