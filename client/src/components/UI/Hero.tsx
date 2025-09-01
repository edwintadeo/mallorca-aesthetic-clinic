import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  videoSrc: string;
  posterSrc: string;
  fallbackSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  videoSrc,
  posterSrc,
  fallbackSrc
}: HeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSrc, setCurrentSrc] = useState(videoSrc);

  // Manejo de errores de video con fallback
  const handleVideoError = () => {
    if (fallbackSrc && currentSrc === videoSrc) {
      setCurrentSrc(fallbackSrc);
      setHasVideoError(false);
    } else {
      setHasVideoError(true);
    }
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Intersection Observer para lazy loading del video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.preload = "auto";
          }
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[100svh] overflow-hidden">
      {/* Video Background */}
      {!hasVideoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          poster={posterSrc}
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          onLoadStart={() => setIsVideoLoaded(false)}
        >
          <source src={currentSrc} type="video/webm" />
          <source src={currentSrc} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${posterSrc})` }}
        />
      )}

      {/* Overlay dinámico perla para legibilidad */}
      <div className="absolute inset-0 bg-[rgba(244,241,236,0.28)]" />
      
      {/* Skeleton loader mientras carga el video */}
      {!isVideoLoaded && !hasVideoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-[18vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-serif leading-tight drop-shadow-sm text-white">
            {title}
          </h1>
          
          {subtitle && (
            <motion.p 
              className="mt-6 text-lg md:text-xl text-white/90 drop-shadow-sm max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.a
            href={ctaLink}
            className="mt-8 inline-flex items-center rounded-full bg-[#008578] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#006b5f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator discreto */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="h-8 w-px bg-white/30" />
        <motion.div
          className="h-2 w-px bg-white/60 mt-2"
          animate={{ 
            height: ["0px", "16px", "0px"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .scroll-indicator {
            animation: none !important;
          }
          video {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
