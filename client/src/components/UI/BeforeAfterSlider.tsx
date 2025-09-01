import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  treatment?: string;
  duration?: string;
  doctor?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  treatment,
  duration,
  doctor,
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLImageElement>(null);
  const afterImageRef = useRef<HTMLImageElement>(null);

  // Cargar imágenes
  useEffect(() => {
    const loadImages = async () => {
      try {
        const beforeImg = new Image();
        const afterImg = new Image();
        
        beforeImg.src = beforeImage;
        afterImg.src = afterImage;
        
        await Promise.all([
          new Promise((resolve) => { beforeImg.onload = resolve; }),
          new Promise((resolve) => { afterImg.onload = resolve; })
        ]);
        
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [beforeImage, afterImage]);

  // Manejar drag del slider
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Event listeners para drag
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // Manejar teclado para accesibilidad
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const increment = e.key === 'ArrowLeft' ? -5 : 5;
      setSliderPosition(prev => Math.max(0, Math.min(100, prev + increment)));
    }
  };

  return (
    <motion.div
      className={`before-after-slider luxury-card ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
        {/* Skeleton loader */}
        {!isLoaded && (
          <div className="absolute inset-0 luxury-skeleton rounded-2xl" />
        )}

        {/* Contenedor principal */}
        <div
          ref={containerRef}
          className="relative w-full h-full cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-label="Comparador antes y después"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          aria-valuetext={`${Math.round(sliderPosition)}% después, ${Math.round(100 - sliderPosition)}% antes`}
        >
          {/* Imagen "Antes" */}
          <div className="absolute inset-0">
            <img
              ref={beforeImageRef}
              src={beforeImage}
              alt="Antes del tratamiento"
              className="w-full h-full object-cover"
              style={{ opacity: isLoaded ? 1 : 0 }}
            />
          </div>

          {/* Imagen "Después" con clip-path */}
          <div 
            className="absolute inset-0"
            style={{ 
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              opacity: isLoaded ? 1 : 0
            }}
          >
            <img
              ref={afterImageRef}
              src={afterImage}
              alt="Después del tratamiento"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Línea divisoria luxury */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/80 via-white to-white/80 pointer-events-none z-10 shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Círculo luxury en la línea */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-luxury flex items-center justify-center border-2 border-gold-deep/20">
              <div className="w-3 h-3 bg-gradient-to-br from-[#008578] to-[#006b5f] rounded-full" />
            </div>
          </div>

          {/* Etiquetas luxury */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-luxury-cta border border-white/20">
            ANTES
          </div>
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-luxury-cta border border-white/20">
            DESPUÉS
          </div>

          {/* Indicador de porcentaje luxury */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-luxury-cta border border-white/20">
            {Math.round(sliderPosition)}% DESPUÉS
          </div>
        </div>

        {/* Slider de control */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[80%]">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            style={{
              background: `linear-gradient(to right, rgba(0,133,120,0.3) 0%, rgba(0,133,120,0.3) ${sliderPosition}%, rgba(255,255,255,0.2) ${sliderPosition}%, rgba(255,255,255,0.2) 100%)`
            }}
            aria-label="Control deslizante para comparar antes y después"
          />
        </div>
      </div>

      {/* Información del tratamiento luxury */}
      {(treatment || duration || doctor) && (
        <motion.div
          className="mt-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 luxury-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {treatment && (
            <h3 className="text-xl font-luxury-serif text-gold-deep mb-3">
              {treatment}
            </h3>
          )}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            {duration && (
              <span className="flex items-center font-luxury-sans">
                <svg className="w-4 h-4 mr-2 text-gold-deep" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {duration}
              </span>
            )}
            {doctor && (
              <span className="flex items-center font-luxury-sans">
                <svg className="w-4 h-4 mr-2 text-gold-deep" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {doctor}
              </span>
            )}
          </div>
        </motion.div>
      )}

      {/* Instrucciones de uso luxury */}
      <motion.div
        className="mt-3 text-center text-xs text-gray-500 font-luxury-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Arrastra el control deslizante o usa las flechas del teclado para comparar
      </motion.div>
    </motion.div>
  );
}