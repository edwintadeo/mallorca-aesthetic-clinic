import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { Link } from "wouter";
import { Search, ClipboardList, Wand2, TrendingUp, CheckCircle, Clock, Users, Award } from "lucide-react";

// Import method images
import perfectSkinPortrait from "@assets/perfect-skin-portrait.jpg";
import facialMaskTreatment from "@assets/facial-mask-treatment.jpg";
import spaTreatment from "@assets/spa-treatment.jpg";
import heroBeautyModel from "@assets/hero-beauty-model.jpg";
import spaDeviceTreatment from "@assets/spa-device-treatment.jpg";
import whiteFacialMask from "@assets/white-facial-mask.jpg";

export default function Metodo() {
  const methodPhases = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico 360°",
      description: "Evaluación integral que incluye análisis facial, corporal, historial médico y objetivos personales.",
      details: [
        "Análisis de estructura facial y asimetrías",
        "Evaluación de calidad de piel y elasticidad",
        "Historial médico y tratamientos previos",
        "Definición de objetivos y expectativas",
        "Estudio fotográfico profesional"
      ],
      duration: "60-90 minutos",
      image: perfectSkinPortrait
    },
    {
      icon: ClipboardList,
      number: "02", 
      title: "Plan Personalizado",
      description: "Diseño de protocolo único adaptado a tu estilo de vida, presupuesto y cronograma.",
      details: [
        "Selección de tratamientos óptimos",
        "Cronograma personalizado de sesiones",
        "Integración con rutina diaria",
        "Presupuesto detallado y opciones",
        "Plan de cuidados en casa"
      ],
      duration: "30 minutos",
      image: facialMaskTreatment
    },
    {
      icon: Wand2,
      number: "03",
      title: "Acción Integrada", 
      description: "Ejecución de tratamientos con tecnología avanzada y seguimiento médico constante.",
      details: [
        "Tratamientos con equipos de última generación",
        "Seguimiento médico en cada sesión",
        "Ajustes según evolución",
        "Protocolos de seguridad máxima",
        "Resultados documentados fotográficamente"
      ],
      duration: "Variable según tratamiento",
      image: spaDeviceTreatment
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Seguimiento Estratégico",
      description: "Monitoreo continuo por 12 meses para optimizar y mantener resultados duraderos.",
      details: [
        "Revisiones mensuales programadas",
        "Ajustes de tratamiento si necesario",
        "Rutinas de mantenimiento personalizadas",
        "Acceso prioritario a nuevas tecnologías",
        "Garantía de satisfacción extendida"
      ],
      duration: "12 meses",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Resultados Garantizados",
      description: "Transformación visible en 90 días con seguimiento de 12 meses incluido."
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada plan se diseña específicamente para tus necesidades y estilo de vida."
    },
    {
      icon: Award,
      title: "Tecnología Avanzada",
      description: "Equipos de última generación y técnicas innovadoras para resultados óptimos."
    },
    {
      icon: Clock,
      title: "Eficiencia Temporal",
      description: "Optimización de tiempo con tratamientos integrados y cronogramas flexibles."
    }
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
            <h1 className="text-5xl lg:text-7xl title-luxury gold-accent-prominent mb-6">
              Método MAC
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto body-refined leading-relaxed mb-4">
              Un enfoque revolucionario de 4 fases que combina diagnóstico científico avanzado, planificación personalizada, 
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
                <span>15 años experiencia</span>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                alt="Método MAC - El Arte de Ganar Tiempo"
                className="rounded-2xl shadow-xl w-full"
                data-testid="img-metodo-hero"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fundamento Científico */}
      <section className="py-20 bg-white/95 backdrop-blur-sm" data-testid="scientific-foundation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Base Científica
              </div>
              <h2 className="text-4xl lg:text-6xl title-luxury gold-accent-prominent mb-6">
                Fundamento del Método MAC
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto body-refined">
                Nuestro enfoque se basa en investigación científica avanzada y 15 años de experiencia clínica
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.1}>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover-lift border border-gold-light/30 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-turquoise-medium rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Search className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl title-luxury gold-accent-prominent mb-4">Medicina Basada en Evidencia</h3>
                  <p className="text-muted-foreground body-refined leading-relaxed">
                    Cada protocolo se fundamenta en estudios clínicos publicados en revistas médicas internacionales de prestigio.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover-lift border border-gold-light/30 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-deep to-gold-light rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl title-luxury gold-accent-prominent mb-4">Enfoque Multidisciplinario</h3>
                  <p className="text-muted-foreground body-refined leading-relaxed">
                    Integración de dermatología, medicina anti-aging, nutrición y psicología para resultados holísticos.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover-lift border border-gold-light/30 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-turquoise-medium to-gold-champagne rounded-full flex items-center justify-center mb-6 mx-auto">
                    <TrendingUp className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl title-luxury gold-accent-prominent mb-4">Tecnología Avanzada</h3>
                  <p className="text-muted-foreground body-refined leading-relaxed">
                    Equipos de última generación certificados FDA y CE para máxima seguridad y eficacia comprobada.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Method Phases Detail */}
      <section className="py-20 bg-pearl/30 backdrop-blur-sm" data-testid="method-phases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {methodPhases.map((phase, index) => (
              <AnimatedSection key={phase.number} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-gold-light/30 p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-turquoise to-turquoise-medium rounded-full flex items-center justify-center mr-6 shadow-lg">
                          <phase.icon className="text-white text-3xl" />
                        </div>
                        <div className="text-4xl title-luxury gold-accent-prominent font-bold">{phase.number}</div>
                      </div>
                      
                      <h2 className="text-3xl lg:text-4xl title-luxury text-foreground mb-4">{phase.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6 body-refined leading-relaxed">
                        {phase.description}
                      </p>
                    
                    <div className="space-y-3 mb-6">
                      {phase.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-turquoise mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Duración: {phase.duration}</span>
                      </div>
                    </Card>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <img 
                      src={phase.image}
                      alt={phase.title}
                      className="rounded-2xl shadow-lg w-full h-auto object-cover"
                      data-testid={`img-phase-${phase.number}`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-pearl/50 backdrop-blur-sm" data-testid="method-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Ventajas Exclusivas
              </div>
              <h2 className="text-4xl lg:text-6xl title-luxury gold-accent-prominent mb-6">
                ¿Por qué elegir el Método MAC?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto body-refined">
                Nuestro enfoque integral garantiza resultados excepcionales, seguros y duraderos con el respaldo de la ciencia.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <Card className="bg-white/90 backdrop-blur-sm text-center h-full hover-lift transition-all duration-300 shadow-lg border border-gold-light/30" data-testid={`benefit-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-turquoise-medium rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <benefit.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl title-luxury gold-accent-prominent font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground body-refined leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white/95 backdrop-blur-sm" data-testid="method-timeline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Cronograma Detallado
              </div>
              <h2 className="text-4xl lg:text-6xl title-luxury gold-accent-prominent mb-6">
                Tu Cronograma de Transformación
              </h2>
              <p className="text-xl text-muted-foreground body-refined leading-relaxed">
                Un viaje estructurado desde la primera consulta hasta los resultados definitivos y su mantenimiento
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-turquoise"></div>
            
            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-xl font-subtitle font-semibold mb-2">Día 1 - Consulta Inicial</h3>
                    <p className="text-muted-foreground">Diagnóstico completo y diseño de tu plan personalizado</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">30</span>
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-xl font-subtitle font-semibold mb-2">Día 30 - Primeros Resultados</h3>
                    <p className="text-muted-foreground">Evaluación inicial y ajustes del protocolo</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">90</span>
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-xl font-subtitle font-semibold mb-2">Día 90 - Transformación Visible</h3>
                    <p className="text-muted-foreground">Resultados significativos y documentación fotográfica</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold">365</span>
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-xl font-subtitle font-semibold mb-2">12 Meses - Mantenimiento Óptimo</h3>
                    <p className="text-muted-foreground">Consolidación de resultados y plan de mantenimiento</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pearl to-beige backdrop-blur-sm" data-testid="method-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
              Primera Consulta Gratuita
            </div>
            <h2 className="text-4xl lg:text-6xl title-luxury gold-accent-prominent mb-6">
              Comienza tu transformación hoy
            </h2>
            <p className="text-xl text-muted-foreground mb-4 body-refined leading-relaxed">
              La primera consulta es completamente gratuita e incluye tu diagnóstico integral 360° y propuesta personalizada.
            </p>
            <div className="flex justify-center items-center space-x-6 mb-8 text-sm text-turquoise">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>90 minutos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                <span>Valorado en 150€</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-turquoise text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep button-premium transition-all duration-300 px-8 py-4 text-lg"
                  data-testid="button-method-cta-contact"
                >
                  Agenda tu consulta gratuita
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 px-8 py-4 text-lg"
                data-testid="button-method-cta-whatsapp"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Consulta por WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
