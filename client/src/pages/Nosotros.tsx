import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { VideoPlayer } from "@/components/UI/VideoPlayer";
import { Award, Users, Heart, Microscope, Shield, Clock } from "lucide-react";

// Import team images
import perfectSkinPortrait from "@assets/perfect-skin-portrait.jpg";
import heroBeautyModel from "@assets/ojo mujer verde_1756671431969.jpg";
import facialMaskTreatment from "@assets/mascarilla verde_1756671415152.jpg";
import spaTreatment from "@assets/masal toalla turquesa grande_1756671403149.jpg";

// El video de Tramuntana está en object storage

export default function Nosotros() {
  const values = [
    {
      icon: Heart,
      title: "Humanidad",
      description: "Tratamos a cada paciente con calidez, empatía y respeto, creando un ambiente de confianza y bienestar."
    },
    {
      icon: Microscope,
      title: "Excelencia Científica",
      description: "Nos basamos en la evidencia científica más actual y utilizamos tecnología de vanguardia para garantizar resultados óptimos."
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Mantenemos los más altos estándares en todos nuestros procesos, desde la consulta inicial hasta el seguimiento."
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "La seguridad del paciente es nuestra prioridad absoluta en cada procedimiento que realizamos."
    },
    {
      icon: Users,
      title: "Personalización",
      description: "Cada tratamiento se diseña específicamente para las necesidades y objetivos únicos de cada paciente."
    },
    {
      icon: Clock,
      title: "Compromiso",
      description: "Nos comprometemos con el seguimiento a largo plazo para asegurar resultados duraderos y satisfactorios."
    }
  ];

  const teamMembers = [
    {
      id: "1",
      name: "Dra. Liliana Ocampo",
      position: "Directora Médica",
      specialty: "Medicina Estética y Well-Aging",
      experience: "18+ años",
      image: perfectSkinPortrait,
      description: "Pionera en medicina estética integral con más de 18 años de experiencia. Creadora del revolucionario Método MAC.",
      certifications: ["European Board of Aesthetic Medicine", "International Society of Aesthetic Medicine", "Spanish Society of Aesthetic Medicine"]
    },
    {
      id: "2", 
      name: "Dr. Carlos Mendez",
      position: "Cirujano Plástico",
      specialty: "Cirugía Reconstructiva y Estética",
      experience: "15+ años",
      image: heroBeautyModel,
      description: "Especialista en cirugía mínimamente invasiva y técnicas de rejuvenecimiento facial avanzadas.",
      certifications: ["Spanish Board of Plastic Surgery", "European Association of Plastic Surgeons", "International Society of Aesthetic Plastic Surgery"]
    },
    {
      id: "3",
      name: "Dra. Marina López",
      position: "Especialista en Nutrición",
      specialty: "Nutrición Clínica y Anti-Aging",
      experience: "12+ años",
      image: facialMaskTreatment, 
      description: "Experta en nutrición anti-inflamatoria y programas de optimización metabólica para el bienestar integral.",
      certifications: ["Clinical Nutrition Certification", "Anti-Aging Medicine Specialist", "Functional Medicine Practitioner"]
    }
  ];

  const timeline = [
    {
      year: "2006",
      title: "Fundación de MAC",
      description: "La Dra. Liliana Ocampo establece la primera clínica en Palma con la visión de ofrecer medicina estética integral."
    },
    {
      year: "2010",
      title: "Expansión Tecnológica",
      description: "Incorporación de las primeras tecnologías láser de vanguardia y protocolos de seguridad avanzados."
    },
    {
      year: "2015",
      title: "Desarrollo del Método MAC",
      description: "Creación del protocolo exclusivo que integra diagnóstico, tratamiento y seguimiento personalizado."
    },
    {
      year: "2018",
      title: "Segunda Sede",
      description: "Apertura de la clínica en Puerto Portals, expandiendo nuestros servicios a toda la isla."
    },
    {
      year: "2020",
      title: "Well-Aging Integral",
      description: "Incorporación de medicina anti-aging y protocolos de longevidad como parte del enfoque holístico."
    },
    {
      year: "2024",
      title: "Liderazgo en Innovación",
      description: "Reconocidos como referentes en medicina estética integral en las Islas Baleares."
    }
  ];

  return (
    <div className="pt-16 font-body antialiased">
      {/* Hero Section */}
      <section className="py-20 hero-gradient" data-testid="nosotros-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
              Nuestra Historia
            </div>
            <h1 className="text-5xl lg:text-7xl font-title gold-accent mb-6">
              Nosotros
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Más de 18 años dedicados al arte de ganar tiempo, combinando ciencia, estética y bienestar 
              para transformar vidas de manera auténtica y duradera.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Section - Tramuntana */}
      <section className="py-0 bg-black relative overflow-hidden" data-testid="tramuntana-video">
        <div className="relative w-full h-[70vh] min-h-[500px]">
          <VideoPlayer
            src="/public-objects/tramuntana.mp4"
            fallbackSrc="https://storage.googleapis.com/replit-objstore-f50a230b-c239-4fc1-a433-4d78a626a011/public/tramuntana.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={facialMaskTreatment}
          >
            Tu navegador no soporta videos HTML5.
          </VideoPlayer>
          
          {/* Overlay with content */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <AnimatedSection>
                <h2 className="text-4xl lg:text-6xl font-title mb-6 text-gold-light">
                  Inspirados por la belleza natural de Mallorca
                </h2>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  La majestuosidad de la Serra de Tramuntana nos inspira cada día a crear 
                  tratamientos que respeten y realcen la belleza auténtica de cada persona.
                </p>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white" data-testid="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div>
                <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                  Nuestra Misión
                </div>
                <h2 className="text-4xl font-title gold-accent mb-6">
                  El Arte de Ganar Tiempo
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Ayudar a nuestros pacientes a reescribir su relación con el tiempo, ofreciendo 
                  tratamientos de medicina estética integral que respetan la esencia natural de cada persona.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Creemos que la verdadera belleza surge cuando la ciencia, la técnica y el arte 
                  se combinan para potenciar la confianza y el bienestar de quienes confían en nosotros.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                  Nuestra Visión
                </div>
                <h2 className="text-4xl font-title gold-accent mb-6">
                  Referentes en Well-Aging
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Ser la clínica de referencia en medicina estética integral en las Islas Baleares, 
                  reconocida por nuestro enfoque holístico y resultados naturales excepcionales.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Aspiramos a liderar la evolución hacia un concepto de belleza que trascienda 
                  lo superficial, integrando bienestar físico, mental y emocional.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-pearl" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
                Nuestros Valores
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Los principios que guían cada decisión y tratamiento en MAC
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="bg-white text-center h-full hover:shadow-lg transition-shadow duration-300" data-testid={`value-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-turquoise-light rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-subtitle font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Profesionales altamente cualificados comprometidos con la excelencia
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`team-member-${index}`}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-title font-semibold mb-2">{member.name}</h3>
                    <div className="text-turquoise font-medium mb-2">{member.position}</div>
                    <div className="text-sm text-muted-foreground mb-3">{member.specialty}</div>
                    <Badge variant="secondary" className="mb-4">
                      {member.experience} experiencia
                    </Badge>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Certificaciones:</h4>
                      <div className="space-y-1">
                        {member.certifications.map((cert, certIndex) => (
                          <div key={certIndex} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-turquoise rounded-full mr-2"></div>
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-beige" data-testid="timeline-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
                Nuestra Trayectoria
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Más de 18 años de innovación y crecimiento continuo
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-turquoise"></div>
            
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 0.1}>
                  <div className="relative flex items-start" data-testid={`timeline-${index}`}>
                    <div className="w-32 h-16 bg-turquoise rounded-lg flex items-center justify-center relative z-10 mr-8">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-subtitle font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden" data-testid="stats-section">
        {/* Background Video */}
        <div className="absolute inset-0">
          <VideoPlayer
            src="/public-objects/clinica-interior.mp4"
            fallbackSrc="https://storage.googleapis.com/replit-objstore-f50a230b-c239-4fc1-a433-4d78a626a011/public/clinica-interior.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
                Nuestros Números
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Resultados que avalan nuestra experiencia y compromiso
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-title gold-accent font-bold mb-2" data-testid="stat-years-experience">18+</div>
                <div className="text-lg font-medium text-foreground mb-2">Años de Experiencia</div>
                <div className="text-sm text-muted-foreground">Liderando la medicina estética en Mallorca</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-title gold-accent font-bold mb-2" data-testid="stat-patients">10,000+</div>
                <div className="text-lg font-medium text-foreground mb-2">Pacientes Satisfechos</div>
                <div className="text-sm text-muted-foreground">Transformaciones exitosas documentadas</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-title gold-accent font-bold mb-2" data-testid="stat-treatments">30+</div>
                <div className="text-lg font-medium text-foreground mb-2">Tratamientos Diferentes</div>
                <div className="text-sm text-muted-foreground">Opciones personalizadas para cada necesidad</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="text-5xl font-title gold-accent font-bold mb-2" data-testid="stat-satisfaction">98%</div>
                <div className="text-lg font-medium text-foreground mb-2">Satisfacción</div>
                <div className="text-sm text-muted-foreground">Índice de recomendación de nuestros pacientes</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-pearl" data-testid="facilities-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
                Nuestras Instalaciones
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Espacios diseñados para tu comodidad y bienestar
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid="facility-consultation">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                  alt="Salas de consulta"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-subtitle font-semibold mb-3">Salas de Consulta</h3>
                  <p className="text-muted-foreground">Espacios privados y confortables para una atención personalizada y confidencial.</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid="facility-treatment">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                  alt="Salas de tratamiento"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-subtitle font-semibold mb-3">Salas de Tratamiento</h3>
                  <p className="text-muted-foreground">Equipadas con la más avanzada tecnología en un ambiente relajante y seguro.</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid="facility-recovery">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                  alt="Área de recuperación"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-subtitle font-semibold mb-3">Área de Recuperación</h3>
                  <p className="text-muted-foreground">Zona de descanso con todas las comodidades para tu bienestar post-tratamiento.</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Closing Video Section */}
      <section className="py-0 bg-black relative overflow-hidden" data-testid="closing-video">
        <div className="relative w-full h-[60vh] min-h-[400px]">
          <VideoPlayer
            src="/public-objects/tratamiento-premium.mp4"
            fallbackSrc="https://storage.googleapis.com/replit-objstore-f50a230b-c239-4fc1-a433-4d78a626a011/public/tratamiento-premium.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          
          {/* Overlay with content */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-5xl mx-auto px-4">
              <AnimatedSection>
                <h2 className="text-3xl lg:text-5xl font-title mb-6 text-gold-light">
                  Tu transformación comienza ahora
                </h2>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
                  Únete a miles de personas que han confiado en el Método MAC para 
                  revelar su mejor versión y ganar tiempo de calidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contacto"
                    className="bg-turquoise text-white px-8 py-4 rounded-lg font-medium hover:bg-gold-light hover:text-gold-deep transition-all duration-300 inline-block"
                  >
                    Reservar Consulta
                  </a>
                  <a 
                    href="/metodo"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 inline-block"
                  >
                    Conocer Método MAC
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
