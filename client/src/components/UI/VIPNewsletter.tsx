import { useState } from 'react';
import { Mail, Send, Check, Crown } from 'lucide-react';
import MorphingButton from './MorphingButton';
import LuxuryHoverCard from './LuxuryHoverCard';

interface VIPNewsletterProps {
  className?: string;
}

export default function VIPNewsletter({ className = '' }: VIPNewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const benefits = [
    'Acceso anticipado a nuevos tratamientos',
    'Descuentos exclusivos para miembros VIP',
    'Contenido premium sobre well-aging',
    'Invitaciones a eventos privados',
    'Consultas virtuales gratuitas'
  ];

  return (
    <LuxuryHoverCard 
      className={`vip-newsletter ${className}`}
      shimmerOnHover={true}
      particlesOnHover={true}
      particlesIntensity="low"
      particlesColor="gold"
    >
      <div className="newsletter-header">
        <div className="newsletter-icon">
          <Crown className="crown-icon" />
        </div>
        <h3 className="newsletter-title">Newsletter VIP</h3>
        <p className="newsletter-subtitle">
          Únete a nuestro círculo exclusivo y recibe contenido premium
        </p>
      </div>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="email-input-container">
          <div className="input-wrapper">
            <Mail className="input-icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="email-input"
              required
              disabled={isLoading}
            />
          </div>
          <MorphingButton
            type="submit"
            variant="luxury"
            size="md"
            loadingText="Suscribiendo..."
            successText="¡Bienvenida VIP!"
            errorText="Error"
            disabled={!email || isLoading}
            className="subscribe-button"
          >
            <Send className="button-icon" />
            <span>Suscribirse</span>
          </MorphingButton>
        </div>
      </form>

      <div className="newsletter-benefits">
        <h4 className="benefits-title">Beneficios Exclusivos</h4>
        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              <Check className="benefit-icon" />
              <span className="benefit-text">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {isSubscribed && (
        <div className="success-message">
          <Check className="success-icon" />
          <span>¡Bienvenida al círculo VIP de MAC!</span>
        </div>
      )}
    </LuxuryHoverCard>
  );
}
