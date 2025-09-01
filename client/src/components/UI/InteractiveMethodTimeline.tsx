import { useState, useEffect } from 'react';
import { Search, ClipboardList, Wand2, TrendingUp } from 'lucide-react';
import MethodPhase from './MethodPhase';
import GoldenParticles from './GoldenParticles';

interface MethodPhaseData {
  number: string;
  title: string;
  description: string;
  icon: any;
  details: {
    duration: string;
    process: string[];
    technology: string[];
    results: string[];
  };
}

export default function InteractiveMethodTimeline() {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);
  const [showParticles, setShowParticles] = useState(false);

  const methodPhases: MethodPhaseData[] = [
    {
      number: "01",
      title: "Diagnóstico 360° - El Lienzo en Blanco",
      description: "Mapeo facial y corporal 3D, análisis avanzado con IA y evaluación de bienestar mental. No se puede crear una obra maestra sin entender primero el lienzo.",
      icon: Search,
      details: {
        duration: "2-3 horas",
        process: [
          "Análisis facial 3D con tecnología de última generación",
          "Evaluación corporal completa con escáner corporal",
          "Análisis de bienestar mental y emocional",
          "Estudio de hábitos de vida y rutinas actuales"
        ],
        technology: ["3D Facial Mapping", "IA Analysis", "Body Scanner", "Mental Health Assessment"],
        results: [
          "Mapa completo de tu biología única",
          "Identificación de áreas de mejora",
          "Base científica para el plan personalizado",
          "Comprensión integral de tu bienestar"
        ]
      }
    },
    {
      number: "02",
      title: "Plan Personalizado - Boceto Maestro",
      description: "Análisis sanguíneo de precisión, evaluaciones funcionales y estudio de nutrigenética. Un plan tan único como tu ADN, respaldado por la ciencia.",
      icon: ClipboardList,
      details: {
        duration: "1-2 semanas",
        process: [
          "Análisis sanguíneo completo con 50+ biomarcadores",
          "Evaluación hormonal y metabólica",
          "Estudio de nutrigenética personalizada",
          "Diseño del protocolo de tratamiento"
        ],
        technology: ["Advanced Blood Analysis", "Hormonal Testing", "Nutrigenetics", "AI Protocol Design"],
        results: [
          "Plan de tratamiento 100% personalizado",
          "Optimización nutricional específica",
          "Protocolo de suplementación individual",
          "Cronograma de seguimiento detallado"
        ]
      }
    },
    {
      number: "03",
      title: "Acción Integrada - Pinceladas Precisas",
      description: "Fusionamos medicina estética, medicina preventiva y técnicas de bienestar integrado. Resultados visibles, naturales y multidimensionales.",
      icon: Wand2,
      details: {
        duration: "3-6 meses",
        process: [
          "Implementación del protocolo personalizado",
          "Tratamientos de medicina estética avanzada",
          "Seguimiento nutricional y de suplementación",
          "Sesiones de bienestar mental y emocional"
        ],
        technology: ["Advanced Aesthetics", "Preventive Medicine", "Integrative Wellness", "Real-time Monitoring"],
        results: [
          "Transformación visible en 90 días",
          "Mejora integral de la salud",
          "Optimización del bienestar mental",
          "Resultados naturales y sostenibles"
        ]
      }
    },
    {
      number: "04",
      title: "Seguimiento Estratégico - Preservando la Obra Maestra",
      description: "Sistema de evaluación progresiva y ajustes preventivos estratégicos. El tiempo ganado se convierte en un activo permanente en tu vida.",
      icon: TrendingUp,
      details: {
        duration: "12 meses",
        process: [
          "Evaluaciones trimestrales de progreso",
          "Ajustes del protocolo según resultados",
          "Prevención proactiva del envejecimiento",
          "Mantenimiento de resultados a largo plazo"
        ],
        technology: ["Progress Tracking", "Predictive Analytics", "Preventive Care", "Long-term Monitoring"],
        results: [
          "Mantenimiento de resultados a largo plazo",
          "Prevención proactiva del envejecimiento",
          "Optimización continua del bienestar",
          "Tiempo ganado como activo permanente"
        ]
      }
    }
  ];

  useEffect(() => {
    // Simulate phase completion over time
    const interval = setInterval(() => {
      setCompletedPhases(prev => {
        if (prev.length < methodPhases.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePhaseHover = (phaseIndex: number) => {
    setActivePhase(phaseIndex);
    setShowParticles(true);
  };

  const handlePhaseLeave = () => {
    setActivePhase(null);
    setShowParticles(false);
  };

  return (
    <div className="interactive-method-timeline">
      {/* Golden Particles Background */}
      {showParticles && <GoldenParticles count={15} />}

      {/* Timeline Header */}
      <div className="timeline-header">
        <div className="timeline-badge">
          <span>Metodología Exclusiva</span>
        </div>
        <h2 className="timeline-title">Método MAC</h2>
        <p className="timeline-subtitle">
          Nuestro protocolo de cuatro fases garantiza resultados excepcionales 
          mediante un enfoque científico y personalizado.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="timeline-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(completedPhases.length / methodPhases.length) * 100}%` }}
          />
        </div>
        <div className="progress-text">
          Proceso de {methodPhases.length} fases
        </div>
      </div>

      {/* Timeline Phases */}
      <div className="timeline-phases">
        {methodPhases.map((phase, index) => (
          <MethodPhase
            key={phase.number}
            number={phase.number}
            title={phase.title}
            description={phase.description}
            icon={phase.icon}
            isActive={activePhase === index}
            isCompleted={completedPhases.includes(index)}
            onHover={() => handlePhaseHover(index)}
            onLeave={handlePhaseLeave}
            details={phase.details}
          />
        ))}
      </div>

      {/* Timeline Footer */}
      <div className="timeline-footer">
        <div className="timeline-stats">
          <div className="stat-item">
            <div className="stat-number">90</div>
            <div className="stat-label">Días para resultados visibles</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Meses de seguimiento</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Personalizado</div>
          </div>
        </div>
      </div>
    </div>
  );
}
