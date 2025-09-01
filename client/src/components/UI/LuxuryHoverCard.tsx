import { useState, useRef, useEffect } from 'react';
import ShimmerEffect from './ShimmerEffect';
import LuxuryParticles from './LuxuryParticles';

interface LuxuryHoverCardProps {
  children: React.ReactNode;
  shimmerOnHover?: boolean;
  particlesOnHover?: boolean;
  particlesIntensity?: 'low' | 'medium' | 'high';
  particlesColor?: 'gold' | 'turquoise' | 'pearl';
  hoverScale?: number;
  hoverShadow?: boolean;
  className?: string;
}

export default function LuxuryHoverCard({
  children,
  shimmerOnHover = true,
  particlesOnHover = true,
  particlesIntensity = 'medium',
  particlesColor = 'gold',
  hoverScale = 1.05,
  hoverShadow = true,
  className = ''
}: LuxuryHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <LuxuryParticles
      active={particlesOnHover && isHovered}
      intensity={particlesIntensity}
      color={particlesColor}
      className={className}
    >
      <ShimmerEffect active={shimmerOnHover && isHovered}>
        <div
          ref={cardRef}
          className={`luxury-hover-card ${isHovered ? 'hovered' : ''}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isHovered ? `scale(${hoverScale})` : 'scale(1)',
            boxShadow: hoverShadow && isHovered 
              ? `0 20px 40px rgba(165, 125, 36, 0.15), 0 8px 16px rgba(165, 125, 36, 0.1)` 
              : '0 4px 8px rgba(165, 125, 36, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {children}
          
          {/* Hover glow effect */}
          {isHovered && (
            <div
              className="hover-glow"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(165, 125, 36, 0.1) 0%, transparent 50%)`,
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
          )}
        </div>
      </ShimmerEffect>
    </LuxuryParticles>
  );
}
