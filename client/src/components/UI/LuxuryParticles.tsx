import { useEffect, useRef, useState } from 'react';

interface LuxuryParticlesProps {
  children: React.ReactNode;
  active?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'gold' | 'turquoise' | 'pearl';
  className?: string;
}

export default function LuxuryParticles({ 
  children, 
  active = false, 
  intensity = 'medium',
  color = 'gold',
  className = '' 
}: LuxuryParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const intensityConfig = {
    low: { count: 3, interval: 2000, size: { min: 2, max: 4 } },
    medium: { count: 6, interval: 1000, size: { min: 3, max: 6 } },
    high: { count: 12, interval: 500, size: { min: 4, max: 8 } }
  };

  const colorConfig = {
    gold: {
      primary: 'rgba(165, 125, 36, 0.8)',
      secondary: 'rgba(212, 175, 55, 0.6)',
      gradient: 'linear-gradient(135deg, rgba(165, 125, 36, 0.8), rgba(212, 175, 55, 0.4))'
    },
    turquoise: {
      primary: 'rgba(0, 133, 120, 0.8)',
      secondary: 'rgba(0, 133, 120, 0.6)',
      gradient: 'linear-gradient(135deg, rgba(0, 133, 120, 0.8), rgba(0, 133, 120, 0.4))'
    },
    pearl: {
      primary: 'rgba(255, 255, 255, 0.8)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))'
    }
  };

  const config = intensityConfig[intensity];
  const colors = colorConfig[color];

  useEffect(() => {
    if (!containerRef.current || (!active && !isHovered)) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * (config.size.max - config.size.min) + config.size.min;
      
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.background = colors.gradient;
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.opacity = '0';
      particle.style.transform = 'scale(0)';
      
      containerRef.current?.appendChild(particle);
      particlesRef.current.push(particle);

      const startX = Math.random() * (containerRef.current?.offsetWidth || 0);
      const startY = Math.random() * (containerRef.current?.offsetHeight || 0);
      const endX = startX + (Math.random() - 0.5) * 100;
      const endY = startY + (Math.random() - 0.5) * 100;
      const duration = Math.random() * 1000 + 500;

      particle.animate([
        { 
          transform: `translate(${startX}px, ${startY}px) scale(0)`, 
          opacity: 0 
        },
        { 
          transform: `translate(${endX}px, ${endY}px) scale(1)`, 
          opacity: 1 
        },
        { 
          transform: `translate(${endX}px, ${endY}px) scale(0.5)`, 
          opacity: 0 
        }
      ], {
        duration: duration,
        easing: 'ease-out',
        fill: 'forwards'
      }).onfinish = () => {
        particle.remove();
        particlesRef.current = particlesRef.current.filter(p => p !== particle);
      };
    };

    let interval: NodeJS.Timeout;
    if (active || isHovered) {
      interval = setInterval(createParticle, config.interval);
    }

    return () => {
      clearInterval(interval);
      particlesRef.current.forEach(p => p.remove());
      particlesRef.current = [];
    };
  }, [active, isHovered, config, colors]);

  return (
    <div 
      ref={containerRef}
      className={`luxury-particles-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
}
