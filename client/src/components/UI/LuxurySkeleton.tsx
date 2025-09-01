import { useEffect, useState } from 'react';

interface LuxurySkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
  animation?: 'pulse' | 'wave' | 'shimmer';
  className?: string;
}

export default function LuxurySkeleton({
  width = '100%',
  height = '1rem',
  variant = 'text',
  animation = 'shimmer',
  className = ''
}: LuxurySkeletonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getVariantStyle = () => {
    switch (variant) {
      case 'text':
        return {
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          borderRadius: '4px'
        };
      
      case 'rectangular':
        return {
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          borderRadius: '8px'
        };
      
      case 'circular':
        const size = typeof width === 'number' ? width : 40;
        return {
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%'
        };
      
      case 'card':
        return {
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          borderRadius: '12px',
          padding: '1.5rem'
        };
      
      default:
        return {
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          borderRadius: '4px'
        };
    }
  };

  const getAnimationClass = () => {
    switch (animation) {
      case 'pulse':
        return 'skeleton-pulse';
      case 'wave':
        return 'skeleton-wave';
      case 'shimmer':
        return 'skeleton-shimmer';
      default:
        return 'skeleton-shimmer';
    }
  };

  return (
    <div
      className={`luxury-skeleton ${getAnimationClass()} ${className}`}
      style={{
        ...getVariantStyle(),
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      {variant === 'card' && (
        <div className="skeleton-card-content">
          <div className="skeleton-avatar" />
          <div className="skeleton-text-lines">
            <div className="skeleton-line" />
            <div className="skeleton-line short" />
            <div className="skeleton-line medium" />
          </div>
        </div>
      )}
    </div>
  );
}
