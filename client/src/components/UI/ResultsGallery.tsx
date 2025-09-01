import { useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

interface Result {
  id: string;
  beforeImage: string;
  afterImage: string;
  treatment: string;
  timeframe: string;
  doctor: string;
  patient: string;
  age: number;
  improvement: string;
  category: 'facial' | 'body' | 'well-aging' | 'surgical';
}

interface ResultsGalleryProps {
  results: Result[];
  className?: string;
}

export default function ResultsGallery({ results, className = '' }: ResultsGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const categories = [
    { id: 'all', label: 'Todos', count: results.length },
    { id: 'facial', label: 'Facial', count: results.filter(r => r.category === 'facial').length },
    { id: 'body', label: 'Corporal', count: results.filter(r => r.category === 'body').length },
    { id: 'well-aging', label: 'Well-Aging', count: results.filter(r => r.category === 'well-aging').length },
    { id: 'surgical', label: 'Quirúrgico', count: results.filter(r => r.category === 'surgical').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResults = activeCategory === 'all' 
    ? results 
    : results.filter(result => result.category === activeCategory);

  const currentResult = filteredResults[currentIndex];

  const nextResult = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredResults.length);
  };

  const prevResult = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-play functionality
  useState(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextResult, 8000);
    }
    return () => clearInterval(interval);
  });

  if (!currentResult) return null;

  return (
    <div className={`results-gallery ${className}`}>
      {/* Gallery Header */}
      <div className="gallery-header">
        <div className="gallery-badge">
          <span>Transformaciones Reales</span>
        </div>
        <h2 className="gallery-title">Resultados Documentados</h2>
        <p className="gallery-subtitle">
          Casos reales de pacientes que han experimentado el Método MAC
        </p>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category.id);
              setCurrentIndex(0);
            }}
          >
            <span className="filter-label">{category.label}</span>
            <span className="filter-count">{category.count}</span>
          </button>
        ))}
      </div>

      {/* Main Slider */}
      <div className="main-slider-container">
        <BeforeAfterSlider
          beforeImage={currentResult.beforeImage}
          afterImage={currentResult.afterImage}
          beforeLabel="Antes"
          afterLabel="Después"
          treatment={currentResult.treatment}
          timeframe={currentResult.timeframe}
          doctor={currentResult.doctor}
          className="main-slider"
        />

        {/* Navigation Controls */}
        <div className="slider-navigation">
          <button
            className="nav-button prev-button"
            onClick={prevResult}
            disabled={filteredResults.length <= 1}
            aria-label="Resultado anterior"
          >
            <ArrowLeft className="nav-icon" />
          </button>

          <div className="slider-info">
            <div className="patient-info">
              <span className="patient-name">{currentResult.patient}</span>
              <span className="patient-age">{currentResult.age} años</span>
            </div>
            <div className="improvement-info">
              <span className="improvement-label">Mejora:</span>
              <span className="improvement-value">{currentResult.improvement}</span>
            </div>
          </div>

          <button
            className="nav-button next-button"
            onClick={nextResult}
            disabled={filteredResults.length <= 1}
            aria-label="Siguiente resultado"
          >
            <ArrowRight className="nav-icon" />
          </button>
        </div>

        {/* Auto-play Control */}
        <div className="autoplay-control">
          <button
            className={`autoplay-button ${isAutoPlaying ? 'playing' : ''}`}
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? 'Pausar' : 'Reproducir automáticamente'}
          >
            {isAutoPlaying ? <Pause className="autoplay-icon" /> : <Play className="autoplay-icon" />}
            <span>{isAutoPlaying ? 'Pausar' : 'Auto'}</span>
          </button>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="thumbnail-navigation">
        <div className="thumbnails-container">
          {filteredResults.map((result, index) => (
            <button
              key={result.id}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={result.afterImage}
                alt={`Resultado ${index + 1}`}
                className="thumbnail-image"
              />
              <div className="thumbnail-overlay">
                <span className="thumbnail-treatment">{result.treatment}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="gallery-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / filteredResults.length) * 100}%` }}
          />
        </div>
        <div className="progress-text">
          {currentIndex + 1} de {filteredResults.length}
        </div>
      </div>

      {/* Gallery Footer */}
      <div className="gallery-footer">
        <div className="gallery-stats">
          <div className="stat-item">
            <div className="stat-number">{results.length}+</div>
            <div className="stat-label">Casos Documentados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Satisfacción</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">90</div>
            <div className="stat-label">Días Promedio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
