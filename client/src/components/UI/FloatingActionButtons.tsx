import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, MapPin, ArrowUp } from 'lucide-react';
import LuxuryHoverCard from './LuxuryHoverCard';
import ScrollAnimations from './ScrollAnimations';

interface FloatingActionButtonsProps {
  className?: string;
}

export default function FloatingActionButtons({ className = '' }: FloatingActionButtonsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.open('tel:+34971763787', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/34620449271?text=Hola, me interesa conocer más sobre los tratamientos de MAC', '_blank');
  };

  const handleBooking = () => {
    // This would open the booking modal
    console.log('Open booking modal');
  };

  const handleLocation = () => {
    window.open('https://maps.google.com/?q=Mallorca+Aesthetic+Clinic', '_blank');
  };

  const actionButtons = [
    {
      icon: Phone,
      label: 'Llamar',
      action: handleCall,
      color: 'bg-green-500',
      delay: 0
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: handleWhatsApp,
      color: 'bg-green-600',
      delay: 100
    },
    {
      icon: Calendar,
      label: 'Reservar',
      action: handleBooking,
      color: 'bg-turquoise',
      delay: 200
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      action: handleLocation,
      color: 'bg-gold-deep',
      delay: 300
    }
  ];

  if (!isVisible) return null;

  return (
    <div className={`floating-action-buttons ${className}`}>
      {/* Action Buttons */}
      <div className={`fab-container ${isExpanded ? 'expanded' : ''}`}>
        {actionButtons.map((button, index) => (
          <ScrollAnimations
            key={button.label}
            animation="scaleIn"
            delay={button.delay}
          >
            <LuxuryHoverCard
              className={`fab-button ${button.color} ${isExpanded ? 'visible' : ''}`}
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: isExpanded ? 'scale(1)' : 'scale(0)',
                opacity: isExpanded ? 1 : 0
              }}
            >
              <button
                onClick={button.action}
                className="fab-button-content"
                aria-label={button.label}
              >
                <button.icon className="fab-icon" />
                <span className="fab-label">{button.label}</span>
              </button>
            </LuxuryHoverCard>
          </ScrollAnimations>
        ))}
      </div>

      {/* Main Toggle Button */}
      <LuxuryHoverCard className="fab-main">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`fab-main-button ${isExpanded ? 'expanded' : ''}`}
          aria-label={isExpanded ? 'Cerrar menú' : 'Abrir menú'}
        >
          <div className="fab-main-icon">
            <div className={`fab-line ${isExpanded ? 'line-1-expanded' : ''}`} />
            <div className={`fab-line ${isExpanded ? 'line-2-expanded' : ''}`} />
            <div className={`fab-line ${isExpanded ? 'line-3-expanded' : ''}`} />
          </div>
        </button>
      </LuxuryHoverCard>

      {/* Back to Top Button */}
      {isScrolled && (
        <ScrollAnimations animation="fadeIn" delay={400}>
          <LuxuryHoverCard className="fab-back-to-top">
            <button
              onClick={scrollToTop}
              className="fab-back-to-top-button"
              aria-label="Volver arriba"
            >
              <ArrowUp className="fab-back-to-top-icon" />
            </button>
          </LuxuryHoverCard>
        </ScrollAnimations>
      )}
    </div>
  );
}
