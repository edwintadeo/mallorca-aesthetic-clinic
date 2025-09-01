import { useState, useEffect } from 'react';

interface VideoProgressIndicatorProps {
  totalDots?: number;
  activeDot?: number;
  className?: string;
}

export default function VideoProgressIndicator({ 
  totalDots = 4, 
  activeDot = 0,
  className = ''
}: VideoProgressIndicatorProps) {
  const [currentDot, setCurrentDot] = useState(activeDot);

  useEffect(() => {
    setCurrentDot(activeDot);
  }, [activeDot]);

  return (
    <div className={`video-progress-indicator ${className}`}>
      {Array.from({ length: totalDots }, (_, index) => (
        <div
          key={index}
          className={`progress-dot ${index === currentDot ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
