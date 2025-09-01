import { useState } from 'react';
import { Play, Star, Calendar, MapPin, Award } from 'lucide-react';
import VerificationBadge from './VerificationBadge';
import { OptimizedVideo } from './OptimizedVideo';
import LuxuryHoverCard from './LuxuryHoverCard';
import ScrollAnimations from './ScrollAnimations';

interface PremiumTestimonialProps {
  testimonial: {
    id: string;
    name: string;
    age: number;
    location: string;
    treatment: string;
    doctor: string;
    rating: number;
    comment: string;
    imageUrl: string;
    videoUrl?: string;
    beforeAfterImages?: {
      before: string;
      after: string;
    };
    verification: {
      verified: boolean;
      documented: boolean;
      premium: boolean;
    };
    results: {
      timeframe: string;
      improvement: string;
      satisfaction: number;
    };
    demographics: {
      age: number;
      profession: string;
      lifestyle: string;
    };
  };
  className?: string;
}

export default function PremiumTestimonial({ testimonial, className = '' }: PremiumTestimonialProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-gold-light fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <ScrollAnimations animation="fadeIn" delay={100}>
      <LuxuryHoverCard 
        className={`premium-testimonial ${className}`}
        shimmerOnHover={true}
        particlesOnHover={true}
        particlesIntensity="low"
        particlesColor="gold"
      >
      {/* Verification Badges */}
      <div className="testimonial-badges">
        {testimonial.verification.verified && (
          <VerificationBadge type="verified" />
        )}
        {testimonial.verification.documented && (
          <VerificationBadge type="documented" />
        )}
        {testimonial.verification.premium && (
          <VerificationBadge type="premium" />
        )}
      </div>

      {/* Testimonial Header */}
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img
            src={testimonial.imageUrl}
            alt={testimonial.name}
            className="avatar-image"
          />
          {testimonial.videoUrl && (
            <button
              className="video-play-button"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Ver video testimonio"
            >
              <Play className="play-icon" />
            </button>
          )}
        </div>

        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <div className="testimonial-details">
            <div className="detail-item">
              <Calendar className="detail-icon" />
              <span>{testimonial.age} años</span>
            </div>
            <div className="detail-item">
              <MapPin className="detail-icon" />
              <span>{testimonial.location}</span>
            </div>
            <div className="detail-item">
              <Award className="detail-icon" />
              <span>{testimonial.profession}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="testimonial-rating">
        <div className="stars">
          {renderStars(testimonial.rating)}
        </div>
        <span className="rating-text">{testimonial.rating}/5</span>
      </div>

      {/* Testimonial Content */}
      <div className="testimonial-content">
        <blockquote className="testimonial-quote">
          "{testimonial.comment}"
        </blockquote>
      </div>

      {/* Treatment Information */}
      <div className="treatment-info">
        <div className="treatment-details">
          <h4 className="treatment-title">Tratamiento</h4>
          <p className="treatment-name">{testimonial.treatment}</p>
          <p className="treatment-doctor">Dra. {testimonial.doctor}</p>
        </div>

        <div className="results-summary">
          <h4 className="results-title">Resultados</h4>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-label">Tiempo</span>
              <span className="result-value">{testimonial.results.timeframe}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Mejora</span>
              <span className="result-value">{testimonial.results.improvement}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Satisfacción</span>
              <span className="result-value">{testimonial.results.satisfaction}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Section */}
      {testimonial.beforeAfterImages && (
        <div className="before-after-section">
          <button
            className="before-after-toggle"
            onClick={() => setShowBeforeAfter(!showBeforeAfter)}
          >
            {showBeforeAfter ? 'Ocultar' : 'Ver'} Antes/Después
          </button>

          {showBeforeAfter && (
            <div className="before-after-images">
              <div className="before-after-item">
                <img
                  src={testimonial.beforeAfterImages.before}
                  alt="Antes del tratamiento"
                  className="before-after-image"
                />
                <span className="before-after-label">Antes</span>
              </div>
              <div className="before-after-item">
                <img
                  src={testimonial.beforeAfterImages.after}
                  alt="Después del tratamiento"
                  className="before-after-image"
                />
                <span className="before-after-label">Después</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && testimonial.videoUrl && (
        <div className="video-modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Cerrar video"
            >
              ×
            </button>
            <OptimizedVideo
              src={testimonial.videoUrl}
              controls
              autoPlay
              className="video-modal-player"
            />
          </div>
        </div>
      )}
      </LuxuryHoverCard>
    </ScrollAnimations>
  );
}
