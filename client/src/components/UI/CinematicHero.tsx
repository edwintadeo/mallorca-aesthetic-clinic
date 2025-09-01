import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { OptimizedVideo } from './OptimizedVideo';
import TypewriterAnimation from './TypewriterAnimation';
import VideoProgressIndicator from './VideoProgressIndicator';
import ScrollIndicator from './ScrollIndicator';
import { getVideoConfigComplete } from '@/config/videos';
import macLogoBlack from '@assets/mac-logo@2x_1756658468399.png';
import heroBeautyModel from '@assets/ojo mujer verde_1756671431969.jpg';

interface CinematicHeroProps {
  onQuickBookingOpen: () => void;
}

export default function CinematicHero({ onQuickBookingOpen }: CinematicHeroProps) {
  const [currentVideoSegment, setCurrentVideoSegment] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const typewriterTexts = [
    "El Arte de Ganar Tiempo",
    "Medicina Estética Avanzada",
    "Transformación Visible en 90 Días",
    "Belleza Natural y Sostenible"
  ];

  const videoSegments = [
    { id: 'home', label: 'Inicio' },
    { id: 'method', label: 'Método' },
    { id: 'treatments', label: 'Tratamientos' },
    { id: 'results', label: 'Resultados' }
  ];

  useEffect(() => {
    // Simulate video segment progression
    const interval = setInterval(() => {
      setCurrentVideoSegment((prev) => (prev + 1) % videoSegments.length);
    }, 8000); // Change segment every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.log('Hero video failed to load, using fallback');
  };

  return (
    <section className="hero-cinematic" data-testid="cinematic-hero">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBeautyModel})`,
            zIndex: -2
          }}
        />
        
        {/* Video background */}
        <OptimizedVideo
          src={getVideoConfigComplete('background', 'home')?.primary || ''}
          fallbackSrc={getVideoConfigComplete('background', 'home')?.fallback || ''}
          poster={getVideoConfigComplete('background', 'home')?.poster || heroBeautyModel}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          priority={true}
          className="w-full h-full object-cover relative z-[-1]"
          onError={handleVideoError}
          onLoad={handleVideoLoad}
        />
        
        {/* Enhanced overlays for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-pearl/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Logo */}
        <div className="hero-logo">
          <img 
            src={macLogoBlack} 
            alt="Mallorca Aesthetic Clinic" 
            className="hover-lift opacity-95"
            data-testid="hero-mac-logo"
          />
        </div>

        {/* Badge */}
        <div className="hero-badge">
          <span>Excelencia Médica</span>
        </div>

        {/* Main Title with Typewriter */}
        <h1 className="hero-title">
          <TypewriterAnimation 
            texts={typewriterTexts}
            speed={80}
            deleteSpeed={40}
            pauseTime={2500}
            className="block"
          />
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Consigue una transformación que se siente y es visible en solo 90 días y revela tu auténtica belleza natural.
        </p>

        {/* CTA Button */}
        <div className="hero-cta">
          <button 
            onClick={onQuickBookingOpen}
            className="hero-cta-button"
            data-testid="button-hero-reserva"
          >
            Reserva tu Consulta Personalizada
          </button>
        </div>

        {/* Video Progress Indicator */}
        {isVideoLoaded && (
          <VideoProgressIndicator 
            totalDots={videoSegments.length}
            activeDot={currentVideoSegment}
          />
        )}

        {/* Disclaimer */}
        <p className="hero-disclaimer">
          Atención exclusiva por cita previa
        </p>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="method-section" />
    </section>
  );
}
