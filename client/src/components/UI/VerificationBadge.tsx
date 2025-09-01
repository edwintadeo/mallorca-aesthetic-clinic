import { CheckCircle, Shield, Star } from 'lucide-react';

interface VerificationBadgeProps {
  type: 'verified' | 'documented' | 'premium';
  className?: string;
}

export default function VerificationBadge({ type, className = '' }: VerificationBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: CheckCircle,
      text: 'Cliente Verificado',
      color: 'text-turquoise',
      bgColor: 'bg-turquoise/10',
      borderColor: 'border-turquoise/30'
    },
    documented: {
      icon: Shield,
      text: 'Resultados Documentados',
      color: 'text-gold-deep',
      bgColor: 'bg-gold-deep/10',
      borderColor: 'border-gold-deep/30'
    },
    premium: {
      icon: Star,
      text: 'Cliente Premium',
      color: 'text-champagne',
      bgColor: 'bg-champagne/10',
      borderColor: 'border-champagne/30'
    }
  };

  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <div className={`verification-badge ${config.bgColor} ${config.borderColor} ${className}`}>
      <Icon className={`verification-icon ${config.color}`} />
      <span className={`verification-text ${config.color}`}>{config.text}</span>
    </div>
  );
}
