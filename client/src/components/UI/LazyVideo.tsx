import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoSource {
  src: string;
  type: string;
}

interface LazyVideoProps {
  sources: VideoSource[];
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  fallbackImage?: string;
  onError?: () => void;
  preload?: "none" | "metadata" | "auto";
  priority?: boolean;
}

export function LazyVideo({
  sources,
  poster,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  fallbackImage,
  onError,
  preload = "metadata",
  priority = false,
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Precargar cuando esté a 50px de ser visible
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Control de reproducción basado en visibilidad
  useEffect(() => {
    if (!videoRef.current || !autoPlay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {
              // Silenciar errores de reproducción automática
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5, // Video debe estar 50% visible para reproducirse
      }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [autoPlay, isInView]);

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  const handleError = () => {
    console.log(`Video source ${currentSourceIndex + 1}/${sources.length} failed: ${sources[currentSourceIndex]?.src}`);
    
    if (currentSourceIndex < sources.length - 1) {
      setCurrentSourceIndex(prev => prev + 1);
      setIsLoading(true); // Reset loading state for next source
    } else {
      console.log('All video sources failed, showing fallback image');
      setHasError(true);
      setIsLoading(false);
      setShowFallback(true);
      onError?.();
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  // Si hay error o se muestra fallback, mostrar imagen de respaldo
  if (showFallback && fallbackImage) {
    return (
      <div
        ref={containerRef}
        className={cn("relative overflow-hidden", className)}
        style={{ backgroundImage: `url(${fallbackImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        data-testid="video-fallback"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {/* Skeleton loader mientras carga */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Poster image mientras no se ha cargado el video */}
      {poster && isLoading && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {/* Video element - solo renderizar cuando esté en vista */}
      {isInView && !showFallback && (
        <video
          ref={videoRef}
          className={cn("w-full h-full object-cover", isLoading && "opacity-0")}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          preload={preload}
          onError={handleError}
          onLoadedData={handleLoadedData}
          data-testid="lazy-video"
          key={currentSourceIndex} // Force re-render when source changes
        >
          <source src={sources[currentSourceIndex]?.src} type={sources[currentSourceIndex]?.type} />
          Tu navegador no soporta videos HTML5.
        </video>
      )}
    </div>
  );
}