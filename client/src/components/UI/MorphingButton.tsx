import { useState, useRef, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface MorphingButtonProps {
  children: React.ReactNode;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  onClick?: () => Promise<void> | void;
  variant?: 'primary' | 'secondary' | 'luxury';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export default function MorphingButton({
  children,
  loadingText = 'Procesando...',
  successText = '¡Completado!',
  errorText = 'Error',
  onClick,
  variant = 'luxury',
  size = 'md',
  disabled = false,
  className = ''
}: MorphingButtonProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async () => {
    if (disabled || state !== 'idle' || !onClick) return;

    setState('loading');
    
    try {
      await onClick();
      setState('success');
      
      // Reset to idle after 2 seconds
      setTimeout(() => {
        setState('idle');
      }, 2000);
    } catch (error) {
      setState('error');
      
      // Reset to idle after 3 seconds
      setTimeout(() => {
        setState('idle');
      }, 3000);
    }
  };

  const getButtonText = () => {
    switch (state) {
      case 'loading':
        return loadingText;
      case 'success':
        return successText;
      case 'error':
        return errorText;
      default:
        return children;
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'morphing-button-primary';
      case 'secondary':
        return 'morphing-button-secondary';
      case 'luxury':
        return 'morphing-button-luxury';
      default:
        return 'morphing-button-luxury';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'morphing-button-sm';
      case 'md':
        return 'morphing-button-md';
      case 'lg':
        return 'morphing-button-lg';
      default:
        return 'morphing-button-md';
    }
  };

  const getStateClass = () => {
    switch (state) {
      case 'loading':
        return 'morphing-button-loading';
      case 'success':
        return 'morphing-button-success';
      case 'error':
        return 'morphing-button-error';
      default:
        return '';
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`morphing-button ${getVariantClass()} ${getSizeClass()} ${getStateClass()} ${className}`}
      onClick={handleClick}
      disabled={disabled || state === 'loading'}
    >
      <span className="button-content">
        {state === 'loading' && (
          <Loader2 className="button-icon loading-icon" />
        )}
        {state === 'success' && (
          <span className="button-icon success-icon">✓</span>
        )}
        {state === 'error' && (
          <span className="button-icon error-icon">✕</span>
        )}
        <span className="button-text">{getButtonText()}</span>
      </span>
      
      {/* Morphing background */}
      <div className="morphing-background" />
      
      {/* Ripple effect */}
      <div className="ripple-container" />
    </button>
  );
}
