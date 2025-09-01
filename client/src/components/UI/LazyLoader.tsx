import { useState, useEffect, useRef, ReactNode } from 'react';
import LuxurySkeleton from './LuxurySkeleton';

interface LazyLoaderProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  className?: string;
  priority?: boolean;
}

export default function LazyLoader({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = '50px',
  delay = 0,
  className = '',
  priority = false
}: LazyLoaderProps) {
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
              setIsLoaded(true);
            }, delay);
          } else {
            setIsLoaded(true);
          }
          
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, delay, priority]);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`lazy-loader-error ${className}`}>
        <div className="error-content">
          <p>Error al cargar el contenido</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={elementRef} className={`lazy-loader ${className}`}>
      {isLoaded ? (
        <div onError={handleError}>
          {children}
        </div>
      ) : (
        fallback || <LazyLoaderSkeleton />
      )}
    </div>
  );
}

function LazyLoaderSkeleton() {
  return (
    <div className="lazy-loader-skeleton">
      <LuxurySkeleton className="skeleton-content" />
    </div>
  );
}
