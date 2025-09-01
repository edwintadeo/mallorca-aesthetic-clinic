import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimations({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = ''
}: ScrollAnimationsProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      opacity: isVisible ? 1 : 0
    };

    switch (animation) {
      case 'fadeIn':
        return baseStyle;
      
      case 'slideUp':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        };
      
      case 'slideLeft':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateX(0)' : 'translateX(30px)'
        };
      
      case 'slideRight':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
        };
      
      case 'scaleIn':
        return {
          ...baseStyle,
          transform: isVisible ? 'scale(1)' : 'scale(0.9)'
        };
      
      case 'rotateIn':
        return {
          ...baseStyle,
          transform: isVisible ? 'rotate(0deg) scale(1)' : 'rotate(5deg) scale(0.9)'
        };
      
      default:
        return baseStyle;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${className}`}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
}
