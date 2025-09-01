import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, Users, Target, CheckCircle } from 'lucide-react';

interface MethodPhase {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  details: {
    process: string[];
    technology: string[];
    results: string[];
  };
  icon: React.ComponentType<any>;
}

interface MethodTimelineProps {
  phases?: MethodPhase[];
}

const defaultPhases: MethodPhase[] = [
  {
    id: 'diagnostico',
    number: '01',
    title: 'Diagnóstico 360°',
    description: 'Evaluación integral personalizada con tecnología avanzada para identificar necesidades específicas.',
    duration: '60-90 min',
    details: {
      process: [
        'Consulta médica exhaustiva',
        'Análisis facial 3D',
        'Evaluación de estilo de vida',
        'Historial médico completo'
      ],
      technology: [
        'Sistema de mapeo facial 3D',
        'Análisis de textura de piel',
        'Evaluación de volumen facial'
      ],
      results: [
        'Plan de tratamiento personalizado',
        'Proyección de resultados',
        'Cronograma de sesiones'
      ]
    },
    icon: Target
  },
  {
    id: 'planificacion',
    number: '02',
    title: 'Plan de Acción',
    description: 'Diseño estratégico del tratamiento combinando las mejores técnicas para resultados óptimos.',
    duration: '30-45 min',
    details: {
      process: [
        'Selección de técnicas',
        'Secuencia de tratamientos',
        'Plan de seguimiento',
        'Presupuesto detallado'
      ],
      technology: [
        'Simulación de resultados',
        'Planificación 3D',
        'Análisis de compatibilidad'
      ],
      results: [
        'Protocolo personalizado',
        'Cronograma detallado',
        'Expectativas realistas'
      ]
    },
    icon: CheckCircle
  },
  {
    id: 'tratamiento',
    number: '03',
    title: 'Tratamiento Estratégico',
    description: 'Ejecución del plan con técnicas mínimamente invasivas y tecnología de última generación.',
    duration: '2-4 horas',
    details: {
      process: [
        'Preparación de la piel',
        'Aplicación de técnicas',
        'Monitoreo en tiempo real',
        'Cuidados post-tratamiento'
      ],
      technology: [
        'Láser fraccional',
        'Radiofrecuencia',
        'Tecnología LED',
        'Sistemas de enfriamiento'
      ],
      results: [
        'Mejora inmediata visible',
        'Reducción de líneas',
        'Mejora de textura'
      ]
    },
    icon: Clock
  },
  {
    id: 'seguimiento',
    number: '04',
    title: 'Seguimiento Integral',
    description: 'Acompañamiento continuo durante 12 meses para garantizar resultados duraderos y satisfactorios.',
    duration: '12 meses',
    details: {
      process: [
        'Revisiones programadas',
        'Ajustes de tratamiento',
        'Seguimiento fotográfico',
        'Asesoramiento continuo'
      ],
      technology: [
        'Sistema de seguimiento digital',
        'Análisis comparativo',
        'Comunicación directa'
      ],
      results: [
        'Resultados optimizados',
        'Satisfacción garantizada',
        'Mantenimiento a largo plazo'
      ]
    },
    icon: Users
  }
];

export default function MethodTimeline({ phases = defaultPhases }: MethodTimelineProps) {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Calcular progreso basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / elementHeight));
        setProgress(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={timelineRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#A57D24] mb-4">
            El Método MAC
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un proceso integral de 4 fases diseñado para transformar tu apariencia de forma natural y duradera
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative mb-16">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#A57D24] to-[#008578] rounded-full"
              style={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isActive = activePhase === phase.id;
            
            return (
              <motion.div
                key={phase.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                  whileHover={{ y: -6 }}
                  onClick={() => setActivePhase(isActive ? null : phase.id)}
                >
                  {/* Número de fase */}
                  <div className="text-5xl font-serif text-[#A57D24] mb-4">
                    {phase.number}
                  </div>

                  {/* Icono */}
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-[#008578]" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-serif text-gray-900 mb-2">
                    {phase.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm leading-relaxed text-gray-600 mb-4">
                    {phase.description}
                  </p>

                  {/* Duración */}
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{phase.duration}</span>
                  </div>

                  {/* Botón de detalles */}
                  <button className="text-sm tracking-widest underline underline-offset-4 text-[#A57D24] hover:text-[#008578] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2 rounded-sm px-1 py-1">
                    Ver detalles
                    <ChevronRight className="inline h-3 w-3 ml-1" />
                  </button>

                  {/* Indicador de expansión */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </motion.div>
                </motion.div>

                {/* Panel de detalles expandible */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="mt-4 rounded-2xl border border-[#A57D24]/20 bg-[#A57D24]/5 p-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Proceso */}
                        <div>
                          <h4 className="font-semibold text-[#A57D24] mb-3">Proceso</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            {phase.details.process.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-3 w-3 text-[#008578] mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tecnología */}
                        <div>
                          <h4 className="font-semibold text-[#A57D24] mb-3">Tecnología</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            {phase.details.technology.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-3 w-3 text-[#008578] mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Resultados */}
                        <div>
                          <h4 className="font-semibold text-[#A57D24] mb-3">Resultados</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            {phase.details.results.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-3 w-3 text-[#008578] mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            ¿Lista para comenzar tu transformación?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Reserva tu consulta de diagnóstico 360° y descubre cómo el Método MAC puede transformar tu apariencia
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-[#008578] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar Consulta
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
