import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import PremiumTestimonial from './PremiumTestimonial';
import { SkeletonTestimonial } from './Skeleton';

export default function VerifiedTestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);

  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
  });

  // Mock data for premium testimonials
  const premiumTestimonials = [
    {
      id: '1',
      name: 'Carmen M.',
      age: 47,
      location: 'Palma de Mallorca',
      treatment: 'Método MAC Completo',
      doctor: 'Liliana Ocampo',
      rating: 5,
      comment: 'En MAC no solo transformaron mi apariencia, sino que me devolvieron la confianza. El Método MAC es revolucionario: resultados naturales que perduran en el tiempo. La Dra. Ocampo es una profesional excepcional.',
      imageUrl: '/attached_assets/perfect-skin-portrait.jpg',
      videoUrl: '/attached_assets/valoración personalizada_1756709877077.mp4',
      beforeAfterImages: {
        before: '/attached_assets/mascarilla verde_1756671415152.jpg',
        after: '/attached_assets/perfect-skin-portrait.jpg'
      },
      verification: {
        verified: true,
        documented: true,
        premium: true
      },
      results: {
        timeframe: '90 días',
        improvement: 'Visible',
        satisfaction: 100
      },
      demographics: {
        age: 47,
        profession: 'Empresaria',
        lifestyle: 'Activa'
      }
    },
    {
      id: '2',
      name: 'Isabel R.',
      age: 52,
      location: 'Cala Millor',
      treatment: 'Well-Aging Integral',
      doctor: 'Liliana Ocampo',
      rating: 5,
      comment: 'Después de 3 meses con el Método MAC, me siento 10 años más joven. No es solo estética, es bienestar integral. La Dra. Ocampo entiende que la belleza viene de dentro.',
      imageUrl: '/attached_assets/mujer joven ropa deportiva_1756669322157.jpg',
      videoUrl: '/attached_assets/amanecer mallorca_1756709416796.mp4',
      beforeAfterImages: {
        before: '/attached_assets/mascarilla perla_1756671424839.jpg',
        after: '/attached_assets/mujer joven ropa deportiva_1756669322157.jpg'
      },
      verification: {
        verified: true,
        documented: true,
        premium: false
      },
      results: {
        timeframe: '120 días',
        improvement: 'Excelente',
        satisfaction: 95
      },
      demographics: {
        age: 52,
        profession: 'Directiva',
        lifestyle: 'Deportiva'
      }
    },
    {
      id: '3',
      name: 'María S.',
      age: 39,
      location: 'Manacor',
      treatment: 'Rejuvenecimiento Facial',
      doctor: 'Liliana Ocampo',
      rating: 5,
      comment: 'El enfoque integral de MAC es único. No solo mejoraron mi piel, sino que me enseñaron a cuidarme mejor. Los resultados son naturales y duraderos.',
      imageUrl: '/attached_assets/ojo mujer verde_1756671431969.jpg',
      verification: {
        verified: true,
        documented: true,
        premium: true
      },
      results: {
        timeframe: '60 días',
        improvement: 'Muy buena',
        satisfaction: 98
      },
      demographics: {
        age: 39,
        profession: 'Profesional',
        lifestyle: 'Equilibrada'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos', count: premiumTestimonials.length },
    { id: 'premium', label: 'Premium', count: premiumTestimonials.filter(t => t.verification.premium).length },
    { id: 'documented', label: 'Documentados', count: premiumTestimonials.filter(t => t.verification.documented).length },
    { id: 'verified', label: 'Verificados', count: premiumTestimonials.filter(t => t.verification.verified).length }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? premiumTestimonials 
    : premiumTestimonials.filter(testimonial => {
        switch (activeFilter) {
          case 'premium':
            return testimonial.verification.premium;
          case 'documented':
            return testimonial.verification.documented;
          case 'verified':
            return testimonial.verification.verified;
          default:
            return true;
        }
      });

  return (
    <section className="verified-testimonials-section">
      {/* Section Header */}
      <div className="testimonials-header">
        <div className="testimonials-badge">
          <span>Historias Reales de Transformación</span>
        </div>
        <h2 className="testimonials-title">Testimonios & Resultados</h2>
        <p className="testimonials-subtitle">
          Más de 10,000 pacientes han experimentado transformaciones auténticas con el Método MAC
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="trust-indicators">
        <div className="trust-item">
          <div className="trust-number">10,000+</div>
          <div className="trust-label">Pacientes Satisfechos</div>
        </div>
        <div className="trust-item">
          <div className="trust-number">98%</div>
          <div className="trust-label">Satisfacción</div>
        </div>
        <div className="trust-item">
          <div className="trust-number">15+</div>
          <div className="trust-label">Años de Experiencia</div>
        </div>
        <div className="trust-item">
          <div className="trust-number">100%</div>
          <div className="trust-label">Resultados Verificados</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="testimonials-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            <span className="filter-label">{filter.label}</span>
            <span className="filter-count">{filter.count}</span>
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {isLoading ? (
          <>
            <SkeletonTestimonial />
            <SkeletonTestimonial />
            <SkeletonTestimonial />
          </>
        ) : (
          filteredTestimonials.map((testimonial) => (
            <PremiumTestimonial
              key={testimonial.id}
              testimonial={testimonial}
              className={selectedTestimonial === testimonial.id ? 'selected' : ''}
            />
          ))
        )}
      </div>

      {/* Section Footer */}
      <div className="testimonials-footer">
        <div className="testimonials-cta">
          <h3 className="cta-title">¿Lista para tu transformación?</h3>
          <p className="cta-subtitle">
            Únete a miles de pacientes que han confiado en el Método MAC
          </p>
          <button className="cta-button">
            Reserva tu Consulta Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}
