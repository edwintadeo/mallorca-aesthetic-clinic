import { useEffect, useRef } from 'react';

interface ShimmerEffectProps {
  children: React.ReactNode;
  active?: boolean;
  duration?: number;
  className?: string;
}

export default function ShimmerEffect({ 
  children, 
  active = false, 
  duration = 2000,
  className = '' 
}: ShimmerEffectProps) {
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shimmerRef.current) return;

    const shimmerElement = shimmerRef.current;
    
    if (active) {
      shimmerElement.style.animation = `shimmer ${duration}ms ease-in-out infinite`;
    } else {
      shimmerElement.style.animation = 'none';
    }

    return () => {
      shimmerElement.style.animation = 'none';
    };
  }, [active, duration]);

  return (
    <div 
      ref={shimmerRef}
      className={`shimmer-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {children}
      {active && (
        <div className="shimmer-overlay" />
      )}
    </div>
  );
}
