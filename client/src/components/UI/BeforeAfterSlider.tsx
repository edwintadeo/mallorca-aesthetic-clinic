import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import ScrollAnimations from './ScrollAnimations';
import MorphingButton from './MorphingButton';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  treatment?: string;
  timeframe?: string;
  doctor?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  treatment,
  timeframe,
  doctor,
  className = ''
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const resetSlider = useCallback(() => {
    setIsAnimating(true);
    setPosition(50);
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  const animateToPosition = useCallback((targetPosition: number) => {
    setIsAnimating(true);
    setPosition(targetPosition);
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <ScrollAnimations animation="scaleIn" delay={200}>
      <div className={`before-after-slider ${className}`}>
      {/* Treatment Information */}
      {(treatment || timeframe || doctor) && (
        <div className="slider-header">
          {treatment && <h3 className="treatment-title">{treatment}</h3>}
          <div className="treatment-details">
            {timeframe && <span className="timeframe">{timeframe}</span>}
            {doctor && <span className="doctor">Dra. {doctor}</span>}
          </div>
        </div>
      )}

      {/* Slider Container */}
      <div 
        ref={containerRef}
        className="slider-container"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image */}
        <div className="slider-image-container">
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="slider-image before-image"
          />
          <div className="image-label before-label">
            {beforeLabel}
          </div>
        </div>

        {/* After Image */}
        <div 
          className="slider-image-container after-container"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt={afterLabel}
            className="slider-image after-image"
          />
          <div className="image-label after-label">
            {afterLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          ref={sliderRef}
          className={`slider-handle ${isDragging ? 'dragging' : ''} ${isAnimating ? 'animating' : ''}`}
          style={{ left: `${position}%` }}
        >
          <div className="handle-line"></div>
          <div className="handle-circle">
            <div className="handle-arrows">
              <ChevronLeft className="handle-arrow left-arrow" />
              <ChevronRight className="handle-arrow right-arrow" />
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div 
            className="progress-fill"
            style={{ width: `${position}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="slider-controls">
        <MorphingButton
          variant="secondary"
          size="sm"
          onClick={() => animateToPosition(0)}
          className="control-button"
        >
          <ChevronLeft className="control-icon" />
          <span>Antes</span>
        </MorphingButton>

        <MorphingButton
          variant="luxury"
          size="sm"
          onClick={resetSlider}
          className="control-button reset-button"
        >
          <RotateCcw className="control-icon" />
          <span>Comparar</span>
        </MorphingButton>

        <MorphingButton
          variant="secondary"
          size="sm"
          onClick={() => animateToPosition(100)}
          className="control-button"
        >
          <span>Después</span>
          <ChevronRight className="control-icon" />
        </MorphingButton>
      </div>

      {/* Quick Navigation Dots */}
      <div className="quick-nav-dots">
        {[0, 25, 50, 75, 100].map((dotPosition) => (
          <button
            key={dotPosition}
            className={`nav-dot ${Math.abs(position - dotPosition) < 5 ? 'active' : ''}`}
            onClick={() => animateToPosition(dotPosition)}
            aria-label={`Posición ${dotPosition}%`}
          />
        ))}
      </div>
      </div>
    </ScrollAnimations>
  );
}
