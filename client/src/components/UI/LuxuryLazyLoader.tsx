import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LuxuryLazyLoaderProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  delay?: number;
}

export default function LuxuryLazyLoader({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  delay = 0
}: LuxuryLazyLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setIsLoaded(true), 100);
          }, delay);
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

    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  const defaultFallback = (
    <div className="luxury-skeleton rounded-2xl w-full h-64 flex items-center justify-center">
      <div className="flex items-center space-x-2 text-gray-400">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-[#008578] rounded-full animate-spin" />
        <span className="text-sm font-luxury-sans">Cargando...</span>
      </div>
    </div>
  );

  return (
    <div ref={elementRef} className={className}>
      <AnimatePresence mode="wait">
        {!isVisible ? (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {fallback || defaultFallback}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Componente especializado para imágenes
interface LuxuryLazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function LuxuryLazyImage({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError
}: LuxuryLazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <LuxuryLazyLoader
      fallback={
        <div className={`luxury-skeleton rounded-2xl ${className}`}>
          {placeholder && (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          )}
        </div>
      }
    >
      <div className="relative overflow-hidden rounded-2xl">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 luxury-skeleton" />
        )}
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {hasError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-luxury-sans">Error al cargar imagen</p>
            </div>
          </div>
        )}
      </div>
    </LuxuryLazyLoader>
  );
}

// Componente especializado para videos
interface LuxuryLazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function LuxuryLazyVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  onLoad,
  onError
}: LuxuryLazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <LuxuryLazyLoader
      fallback={
        <div className={`luxury-skeleton rounded-2xl ${className}`}>
          {poster && (
            <img
              src={poster}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          )}
        </div>
      }
    >
      <div className="relative overflow-hidden rounded-2xl">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 luxury-skeleton" />
        )}
        <motion.video
          src={src}
          poster={poster}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          onLoadedData={handleLoadedData}
          onError={handleError}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {hasError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <p className="text-sm font-luxury-sans">Error al cargar video</p>
            </div>
          </div>
        )}
      </div>
    </LuxuryLazyLoader>
  );
}
