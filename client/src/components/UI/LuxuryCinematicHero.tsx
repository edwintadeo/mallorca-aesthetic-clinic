import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface LuxuryCinematicHeroProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  videoSrc: string;
  posterSrc: string;
  fallbackSrc?: string;
}

export default function LuxuryCinematicHero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  videoSrc,
  posterSrc,
  fallbackSrc
}: LuxuryCinematicHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(videoSrc);
  const [typewriterText, setTypewriterText] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const typewriterRef = useRef<NodeJS.Timeout>();

  // Typewriter effect
  useEffect(() => {
    const fullText = title;
    let currentIndex = 0;
    
    const typewriter = () => {
      if (currentIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        typewriterRef.current = setTimeout(typewriter, 100);
      } else {
        // Mostrar scroll indicator después de completar el typewriter
        setTimeout(() => setShowScrollIndicator(true), 1000);
      }
    };

    // Iniciar typewriter después de un delay
    const startDelay = setTimeout(typewriter, 500);

    return () => {
      clearTimeout(startDelay);
      if (typewriterRef.current) {
        clearTimeout(typewriterRef.current);
      }
    };
  }, [title]);

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

  // Control de video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted={isMuted}
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
          
          {/* Video Controls */}
          <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
            <motion.button
              onClick={togglePlayPause}
              className="p-3 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </motion.button>
            
            <motion.button
              onClick={toggleMute}
              className="p-3 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${posterSrc})` }}
        />
      )}

      {/* Overlay dinámico luxury */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(165,125,36,0.1)] via-transparent to-[rgba(0,133,120,0.1)]" />
      
      {/* Skeleton loader mientras carga el video */}
      {!isVideoLoaded && !hasVideoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-[20vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo MAC */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/attached_assets/logo mallorca aesthetic_1756658404427.png" 
              alt="MAC Mallorca Aesthetic Clinic" 
              className="h-16 mx-auto filter drop-shadow-lg"
            />
          </motion.div>

          {/* Título con typewriter */}
          <div className="text-center mb-8">
            <h1 className="text-luxury-h1 text-white drop-shadow-2xl">
              <span className="inline-block">
                {typewriterText}
                <motion.span
                  className="inline-block w-0.5 h-16 bg-white ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </h1>
          </div>
          
          {/* Subtítulo */}
          {subtitle && (
            <motion.p 
              className="text-center text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-4xl mx-auto leading-luxury-relaxed font-luxury-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* CTA Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href={ctaLink}
              className="inline-flex items-center luxury-btn rounded-full bg-[#008578] px-10 py-4 text-white font-luxury-cta text-lg transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator discreto */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/70 text-sm font-luxury-sans mb-2">
              Descubre más
            </div>
            <motion.div
              className="w-px h-12 bg-white/30 mx-auto"
              initial={{ height: 0 }}
              animate={{ height: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="w-1 h-1 bg-white/60 rounded-full mx-auto mt-2"
              animate={{ 
                y: [0, 8, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .scroll-indicator {
            animation: none !important;
          }
          video {
            animation: none !important;
          }
          .typewriter-cursor {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
