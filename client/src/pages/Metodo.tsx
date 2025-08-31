import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { Link } from "wouter";
import { Search, ClipboardList, Wand2, TrendingUp, CheckCircle, Clock, Users, Award } from "lucide-react";

// Import method images
import perfectSkinPortrait from "@assets/perfect-skin-portrait.jpg";
import facialMaskTreatment from "@assets/mascarilla verde_1756671415152.jpg";
import spaTreatment from "@assets/masal toalla turquesa grande_1756671403149.jpg";
import heroBeautyModel from "@assets/ojo mujer verde_1756671431969.jpg";
import spaDeviceTreatment from "@assets/laser piel_1756671407999.jpg";
import whiteFacialMask from "@assets/mascarilla perla_1756671424839.jpg";

// Import video for dynamic content
import boldBrushVideo from "@assets/Bold Brush Strokes_simple_compose_01k40ny60dfpka9sghp6zqaakq_1756669574524.mp4";

export default function Metodo() {
  const methodPhases = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico 360° - El Lienzo en Blanco",
      subtitle: "No se puede crear una obra maestra sin entender primero el lienzo. Un diagnóstico completo es la base para un enfoque que respeta tu individualidad, con datos precisos que nos permiten diseñar tu plan con precisión artística.",
      includes: [
        {
          title: "Mapeo facial y corporal 3D (VISIA 7 y VECTRA)",
          description: "Revela arrugas, manchas y daño UV no visible al ojo humano."
        },
        {
          title: "Análisis avanzado",
          description: "Algoritmos basados en IA para evaluar tu salud integral."
        },
        {
          title: "Evaluación de bienestar mental",
          description: "Cuestionarios validados (DASS-21, SF-36) que cuantifican estrés, ansiedad y calidad de sueño."
        }
      ],
      benefit: "máxima precisión desde el inicio y base sólida para un tratamiento realmente personalizado.",
      image: perfectSkinPortrait
    },
    {
      icon: ClipboardList,
      number: "02", 
      title: "Plan Personalizado - El Boceto Maestro",
      subtitle: "Cada boceto maestro es único e irrepetible. Tu situación merece un enfoque tan individual como tu huella digital, respaldado por datos científicos.",
      includes: [
        {
          title: "Análisis sanguíneo de precisión",
          description: "Medimos marcadores de subclinical inflammation (PCR-us, IL-6), perfil hormonal completo y cortisol para evaluar estrés crónico."
        },
        {
          title: "Evaluaciones funcionales",
          description: "Test de esfuerzo cardiopulmonar, calorimetría indirecta y monitorización Holter para conocer tu capacidad real, en colaboración con aliados estratégicos."
        },
        {
          title: "Estudio de nutrigenética",
          description: "Identificamos tus necesidades nutricionales según tu perfil genético."
        },
        {
          title: "Diseño de estrategia integral",
          description: "Priorizamos y escalonamos objetivos para resultados visibles y sostenibles."
        }
      ],
      benefit: "un plan tan exclusivo como tu ADN, creado para acompañar tu transformación de forma segura y efectiva.",
      image: facialMaskTreatment,
      video: "/public-objects/gotas perfumista.mp4"
    },
    {
      icon: Wand2,
      number: "03",
      title: "Acción Integrada - Las Pinceladas Precisas", 
      subtitle: "Toda gran obra necesita pinceladas magistrales. Aquí fusionamos medicina estética, prevención y bienestar para dar vida a tu transformación integral.",
      medicalProcedures: [
        "Neuromoduladores (Botox®): Aplicación con microinyección para expresividad natural",
        "Rellenos dérmicos: Ácido hialurónico de última generación para restauración volumétrica",
        "Bioestimulación: PRGF autólogo para regeneración tisular avanzada",
        "Tratamientos personalizados: Seleccionados según tus necesidades específicas"
      ],
      wellnessPrevention: [
        "Suplementación dirigida: Ajustada a deficiencias específicas",
        "Optimización hormonal biosimilar: Cuando sea necesario",
        "Protocolos de equilibrio microbiónico: Para un sistema interno balanceado"
      ],
      integratedWellnessTechniques: [
        "Mindfulness personalizado",
        "Terapia de coherencia cardíaca", 
        "Coaching nutricional adaptado a tu cronobiología"
      ],
      specializedCoordination: [
        "Trabajo sincronizado con especialistas si tu caso lo requiere"
      ],
      benefit: "resultados visibles, naturales y sostenibles en tu cuerpo, mente y energía.",
      image: spaDeviceTreatment,
      video: "/public-objects/maestro perfumero.mp4"
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Seguimiento Estratégico - Preservando la Obra Maestra",
      subtitle: "Toda obra maestra requiere una preservación continua. Con un seguimiento estratégico, el tiempo ganado se convierte en un activo permanente en tu vida.",
      includes: [
        {
          title: "Sistema de evaluación progresiva",
          description: "Valoraciones completas a los 30, 60 y 90 días, con reevaluaciones trimestrales y comparación de biomarcadores"
        },
        {
          title: "Ajustes preventivos estratégicos",
          description: "Adaptamos tu protocolo según cambios estacionales, eventos vitales y avances científicos relevantes"
        }
      ],
      benefit: "tu transformación se mantiene viva, adaptada y evolucionando contigo.",
      image: whiteFacialMask,
      video: "/public-objects/goata de agua.mp4"
    },
  ];

  return (
    <div className="pt-16 font-body antialiased">
      {/* Hero Section */}
      <section className="py-20 hero-gradient" data-testid="metodo-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
              Metodología Exclusiva
            </div>
            <h1 className="text-5xl lg:text-7xl font-title gold-accent mb-6">
              Las Cuatro Fases del Método MAC
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
              Un enfoque revolucionario que combina diagnóstico científico avanzado, planificación personalizada, 
              ejecución experta y seguimiento estratégico para garantizar tu transformación integral.
            </p>
            <div className="flex justify-center items-center space-x-8 mb-8 text-sm text-turquoise">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Más de 10,000 pacientes</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>97% satisfacción</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>90 días transformación</span>
              </div>
            </div>
            <Link href="/contacto">
              <Button 
                size="lg" 
                className="bg-turquoise hover:bg-turquoise-medium text-white px-8 py-4 text-lg font-medium rounded-full hover:shadow-xl transition-all duration-300 hover-lift"
                data-testid="button-cta-consulta"
              >
                Agenda tu Diagnóstico 360°
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Method Introduction */}
      <section className="py-16 bg-white" data-testid="method-introduction">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-title text-foreground mb-8">
              El Método MAC
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Entendemos que ganar tiempo es un arte que no consiste en detener el reloj, sino en{" "}
                <strong className="text-foreground">transformar el envejecimiento en una vivencia holística</strong>, donde la salud es el punto de 
                partida para una belleza auténtica.
              </p>
              
              <p>
                En consecuencia, en MAC, cada intervención se concibe como una{" "}
                <strong className="text-foreground">obra de arte personalizada</strong>, uniendo salud integral, bienestar y estética natural para honrar la 
                singularidad de cada persona.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Method Phases */}
      <section className="py-20 bg-pearl/30" data-testid="method-phases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {methodPhases.map((phase, index) => (
            <div key={phase.number} className={`mb-24 ${index === methodPhases.length - 1 ? 'mb-0' : ''}`}>
              <AnimatedSection delay={index * 0.1}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {(index === 0 || phase.video) ? (
                      <video 
                        className="rounded-2xl shadow-lg w-full h-auto object-cover hover-lift transition-all duration-300"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        poster={phase.image}
                        data-testid={`video-phase-${phase.number}`}
                      >
                        <source src={index === 0 ? boldBrushVideo : phase.video} type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                      </video>
                    ) : (
                      <img 
                        src={phase.image} 
                        alt={phase.title}
                        className="rounded-2xl shadow-lg w-full h-auto object-cover hover-lift transition-all duration-300"
                        data-testid={`img-phase-${phase.number}`}
                      />
                    )}
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="text-4xl font-title gold-accent font-bold mb-4">{phase.number}</div>
                    <h2 className="text-3xl lg:text-4xl font-title text-foreground mb-4">{phase.title}</h2>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {phase.subtitle}
                    </p>

                    {/* Includes Section */}
                    {phase.includes && (
                      <div className="mb-6">
                        <h4 className="text-lg font-subtitle font-semibold gold-accent mb-4">Incluye:</h4>
                        <ul className="space-y-3">
                          {phase.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-turquoise mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-medium text-foreground">{item.title}:</span>
                                <span className="text-muted-foreground ml-1">{item.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Medical Procedures for Phase 03 */}
                    {phase.medicalProcedures && (
                      <div className="mb-6">
                        <h4 className="text-lg font-subtitle font-semibold gold-accent mb-4">Procedimientos médico-estéticos:</h4>
                        <ul className="space-y-2">
                          {phase.medicalProcedures.map((procedure, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-turquoise mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{procedure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Wellness Prevention for Phase 03 */}
                    {phase.wellnessPrevention && (
                      <div className="mb-6">
                        <h4 className="text-lg font-subtitle font-semibold gold-accent mb-4">Bienestar y Medicina Preventiva:</h4>
                        <ul className="space-y-2">
                          {phase.wellnessPrevention.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-turquoise mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Integrated Wellness Techniques for Phase 03 */}
                    {phase.integratedWellnessTechniques && (
                      <div className="mb-6">
                        <h4 className="text-lg font-subtitle font-semibold gold-accent mb-4">Técnicas de bienestar integrado:</h4>
                        <ul className="space-y-2">
                          {phase.integratedWellnessTechniques.map((technique, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-turquoise mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{technique}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Specialized Coordination for Phase 03 */}
                    {phase.specializedCoordination && (
                      <div className="mb-6">
                        <h4 className="text-lg font-subtitle font-semibold gold-accent mb-4">Coordinación especializada:</h4>
                        <ul className="space-y-2">
                          {phase.specializedCoordination.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-turquoise mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Benefit */}
                    <div className="bg-turquoise/5 border-l-4 border-turquoise p-4 rounded-r-lg">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-turquoise mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Beneficio: </span>
                          <span className="text-muted-foreground">{phase.benefit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 hero-gradient" data-testid="metodo-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-6xl font-title gold-accent mb-6">
              El Método MAC es más que estética
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Es un método que honra tu biología, tu belleza natural y tu bienestar completo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Una forma nueva de vivir tu proceso estético: con precisión médica, propósito y arte.
            </p>
            <div className="flex justify-center">
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-foreground px-12 py-4 text-lg font-medium rounded-none uppercase tracking-wider transition-all duration-300 hover-lift"
                  data-testid="button-cta-agenda-personalizada"
                >
                  Agenda tu Consulta Personalizada
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}