import { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/UI/Skeleton";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  onLoad?: () => void;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export default function LazyImage({ 
  src, 
  alt, 
  className = "", 
  placeholderClassName = "bg-gray-200 animate-pulse",
  onLoad,
  srcSet,
  sizes,
  width,
  height,
  loading = "lazy"
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === "eager");
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === "eager" || !imgRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: "100px"
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      data-testid={`lazy-image-${alt.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Skeleton loader */}
      {!isLoaded && !error && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Error al cargar imagen</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && !error && (
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          sizes={sizes}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          onLoad={() => {
            setIsLoaded(true);
            onLoad?.();
          }}
          onError={() => {
            setError(true);
            setIsLoaded(true);
          }}
          loading={loading}
          decoding="async"
        />
      )}
    </div>
  );
}