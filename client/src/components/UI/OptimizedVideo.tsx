import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedVideoProps {
  src: string;
  fallbackSrc?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  priority?: boolean;
  onError?: () => void;
  onLoad?: () => void;
}

export function OptimizedVideo({
  src,
  fallbackSrc,
  poster,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  preload = "metadata",
  priority = false,
  onError,
  onLoad,
}: OptimizedVideoProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(src);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Manejo de errores de video
  const handleError = () => {
    console.log(`Video failed to load: ${currentSrc}`);
    
    if (fallbackSrc && currentSrc === src) {
      console.log('Trying fallback video source');
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    } else {
      console.log('All video sources failed, showing poster image');
      setHasError(true);
      setIsLoading(false);
      onError?.();
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Precargar el video cuando esté visible
            videoRef.current.preload = "auto";
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Control de reproducción automática
  useEffect(() => {
    if (!videoRef.current || !autoPlay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {
              // Silenciar errores de reproducción automática
              console.log('Auto-play prevented by browser');
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlay]);

  // Si hay error y no hay poster, mostrar un placeholder
  if (hasError && !poster) {
    return (
      <div 
        ref={containerRef}
        className={cn("relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200", className)}
        data-testid="video-error-placeholder"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">🎥</div>
            <div className="text-sm">Video no disponible</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {/* Skeleton loader mientras carga */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
      
      {/* Poster image mientras carga o como fallback */}
      {poster && (isLoading || hasError) && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {/* Video element */}
      {!hasError && (
        <video
          ref={videoRef}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          preload={priority ? "auto" : preload}
          controls={controls}
          onError={handleError}
          onLoadedData={handleLoadedData}
          onLoadStart={() => setIsLoading(true)}
          data-testid="optimized-video"
        >
          <source src={currentSrc} type="video/mp4" />
          {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
          Tu navegador no soporta videos HTML5.
        </video>
      )}

      {/* Overlay de carga */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-white text-sm">Cargando...</div>
        </div>
      )}
    </div>
  );
}
