import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface MethodPhaseProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  isCompleted: boolean;
  onHover: () => void;
  onLeave: () => void;
  details?: {
    duration: string;
    process: string[];
    technology: string[];
    results: string[];
  };
}

export default function MethodPhase({
  number,
  title,
  description,
  icon: Icon,
  isActive,
  isCompleted,
  onHover,
  onLeave,
  details
}: MethodPhaseProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`method-phase ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Phase Number */}
      <div className="phase-number">
        <span className="phase-numeral">{number}</span>
      </div>

      {/* Phase Icon */}
      <div className="phase-icon">
        <Icon className="phase-icon-svg" />
      </div>

      {/* Phase Content */}
      <div className="phase-content">
        <h3 className="phase-title">{title}</h3>
        <p className="phase-description">{description}</p>

        {/* Expanded Details */}
        {isExpanded && details && (
          <div className="phase-details">
            <div className="detail-section">
              <h4 className="detail-title">Duración</h4>
              <p className="detail-text">{details.duration}</p>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">Proceso</h4>
              <ul className="detail-list">
                {details.process.map((step, index) => (
                  <li key={index} className="detail-item">{step}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">Tecnología</h4>
              <div className="tech-tags">
                {details.technology.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">Resultados</h4>
              <ul className="detail-list">
                {details.results.map((result, index) => (
                  <li key={index} className="detail-item">{result}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Phase Connector */}
      <div className="phase-connector">
        <div className="connector-line"></div>
        <div className="connector-dot"></div>
      </div>
    </div>
  );
}
