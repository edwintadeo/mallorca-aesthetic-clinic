import { useState, useEffect, useRef } from "react";

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
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className={`absolute inset-0 ${placeholderClassName}`} />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          sizes={sizes}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onLoad={() => {
            setIsLoaded(true);
            onLoad?.();
          }}
          loading={loading}
          decoding="async"
        />
      )}
    </div>
  );
}