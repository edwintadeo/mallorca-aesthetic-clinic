import { useState, useRef, useEffect } from 'react';
import LuxurySkeleton from './LuxurySkeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  loading = 'lazy',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src with quality parameter
  const getOptimizedSrc = () => {
    if (src.includes('?')) {
      return `${src}&q=${quality}`;
    }
    return `${src}?q=${quality}`;
  };

  // Generate WebP src if supported
  const getWebPSrc = () => {
    const baseSrc = getOptimizedSrc();
    if (baseSrc.includes('.')) {
      const parts = baseSrc.split('.');
      const extension = parts.pop();
      return `${parts.join('.')}.webp`;
    }
    return baseSrc;
  };

  if (hasError) {
    return (
      <div 
        className={`optimized-image-error ${className}`}
        style={{ width, height }}
      >
        <div className="error-content">
          <p>Error al cargar la imagen</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className={`optimized-image-container ${className}`}
      style={{ width, height }}
    >
      {!isLoaded && (
        <div className="image-placeholder">
          {placeholder === 'blur' && blurDataURL ? (
            <img
              src={blurDataURL}
              alt=""
              className="blur-placeholder"
              style={{ width, height }}
            />
          ) : (
            <LuxurySkeleton className="image-skeleton" />
          )}
        </div>
      )}
      
      {isInView && (
        <picture>
          <source
            srcSet={getWebPSrc()}
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={getOptimizedSrc()}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
          />
        </picture>
      )}
    </div>
  );
}