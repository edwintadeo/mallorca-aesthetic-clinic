import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Calendar, MapPin, Award, CheckCircle, Shield, Crown, Video } from 'lucide-react';

interface Testimonial {
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
}

interface LuxuryVerifiedTestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
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

export default function LuxuryVerifiedTestimonials({ testimonials = defaultTestimonials }: LuxuryVerifiedTestimonialsProps) {
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'premium' | 'documented' | 'verified'>('all');

  const filters = [
    { id: 'all', label: 'Todos', count: testimonials.length, icon: Star },
    { id: 'premium', label: 'Premium', count: testimonials.filter(t => t.verification.premium).length, icon: Crown },
    { id: 'documented', label: 'Documentados', count: testimonials.filter(t => t.verification.documented).length, icon: Shield },
    { id: 'verified', label: 'Verificados', count: testimonials.filter(t => t.verification.verified).length, icon: CheckCircle }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => {
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

  const openVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setCurrentVideo(null);
  };

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

  const getVerificationBadge = (type: 'verified' | 'documented' | 'premium') => {
    const badges = {
      verified: { icon: CheckCircle, text: 'Cliente Verificado', color: 'text-turquoise bg-turquoise/10 border-turquoise/30' },
      documented: { icon: Shield, text: 'Resultados Documentados', color: 'text-gold-deep bg-gold-deep/10 border-gold-deep/30' },
      premium: { icon: Crown, text: 'Cliente Premium', color: 'text-champagne bg-champagne/10 border-champagne/30' }
    };

    const badge = badges[type];
    const Icon = badge.icon;

    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {badge.text}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gold-deep/10 text-gold-deep rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Historias Reales de Transformación
          </div>
          <h2 className="text-luxury-h2 mb-4">
            Testimonios & Resultados
          </h2>
          <p className="text-luxury-body max-w-3xl mx-auto">
            Más de 10,000 pacientes han experimentado transformaciones auténticas con el Método MAC
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: '10,000+', label: 'Pacientes Satisfechos' },
            { number: '98%', label: 'Satisfacción' },
            { number: '15+', label: 'Años de Experiencia' },
            { number: '100%', label: 'Resultados Verificados' }
          ].map((item, index) => (
            <div key={index} className="text-center luxury-card p-6 rounded-2xl bg-white border border-gray-200">
              <div className="text-3xl font-luxury-display text-gold-deep mb-2">{item.number}</div>
              <div className="text-sm text-gray-600 font-luxury-sans">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 luxury-focus ${
                  activeFilter === filter.id
                    ? 'bg-gold-deep text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gold-deep/30'
                }`}
                onClick={() => setActiveFilter(filter.id as any)}
              >
                <Icon className="w-4 h-4 mr-2" />
                <span className="font-luxury-sans font-medium">{filter.label}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {filter.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="luxury-card bg-white rounded-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Header con imagen y badges */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gold-deep/20"
                    />
                    {testimonial.videoUrl && (
                      <motion.button
                        onClick={() => openVideo(testimonial.videoUrl!)}
                        className="absolute -bottom-1 -right-1 w-6 h-6 bg-turquoise text-white rounded-full flex items-center justify-center hover:bg-turquoise/80 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Ver video testimonio"
                      >
                        <Play className="w-3 h-3 ml-0.5" />
                      </motion.button>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-luxury-serif text-gray-900 mb-1">{testimonial.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{testimonial.age} años</span>
                      <MapPin className="w-3 h-3 ml-2 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-3 h-3 mr-1" />
                      <span>{testimonial.demographics.profession}</span>
                    </div>
                  </div>
                </div>

                {/* Verification Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {testimonial.verification.verified && getVerificationBadge('verified')}
                  {testimonial.verification.documented && getVerificationBadge('documented')}
                  {testimonial.verification.premium && getVerificationBadge('premium')}
                </div>
              </div>

              {/* Rating */}
              <div className="px-6 py-2">
                <div className="flex items-center space-x-2">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <span className="text-sm text-gray-600">{testimonial.rating}/5</span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="px-6 py-4">
                <blockquote className="text-luxury-body italic">
                  "{testimonial.comment}"
                </blockquote>
              </div>

              {/* Treatment & Results */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600 font-luxury-sans font-medium">Tratamiento</div>
                    <div className="text-gray-900">{testimonial.treatment}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 font-luxury-sans font-medium">Resultado</div>
                    <div className="text-gray-900">{testimonial.results.timeframe}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <span className="font-luxury-sans font-medium">Dra. {testimonial.doctor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-luxury-serif text-gray-900 mb-4">
            ¿Lista para tu transformación?
          </h3>
          <p className="text-luxury-body mb-6 max-w-2xl mx-auto">
            Únete a miles de pacientes que han confiado en el Método MAC
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center luxury-btn rounded-full bg-[#008578] px-8 py-3 text-white font-luxury-cta transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserva tu Consulta Personalizada
          </motion.a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && currentVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/40 transition-colors duration-200"
                aria-label="Cerrar video"
              >
                ×
              </button>
              <video
                src={currentVideo}
                controls
                autoPlay
                className="w-full h-auto"
              >
                Tu navegador no soporta videos HTML5.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
