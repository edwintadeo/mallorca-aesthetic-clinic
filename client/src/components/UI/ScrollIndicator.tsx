import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export default function ScrollIndicator({ 
  targetId = 'method-section',
  className = ''
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide indicator when user has scrolled past 20% of the page
      setIsVisible(scrollY < windowHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`scroll-indicator ${className}`} onClick={scrollToTarget}>
      <div className="scroll-indicator-content">
        <span className="scroll-indicator-text">Descubre más</span>
        <ChevronDown className="scroll-indicator-icon" />
      </div>
    </div>
  );
}
