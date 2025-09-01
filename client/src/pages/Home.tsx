import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/UI/button";
import { Card, CardContent } from "@/components/UI/card";
import AnimatedSection from "@/components/UI/AnimatedSection";
import WhatsAppButton from "@/components/UI/WhatsAppButton";
import NewsletterSection from "@/components/UI/NewsletterSection";
import QuickBookingModal from "@/components/UI/QuickBookingModal";
import { SkeletonTestimonial } from "@/components/UI/Skeleton";
import { Search, ClipboardList, Wand2, TrendingUp, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { OptimizedVideo } from "@/components/UI/OptimizedVideo";
import FloatingNavbar from "@/components/Layout/FloatingNavbar";
import CinematicHero from "@/components/UI/CinematicHero";
import InteractiveMethodTimeline from "@/components/UI/InteractiveMethodTimeline";
import VerifiedTestimonialsSection from "@/components/UI/VerifiedTestimonialsSection";
import BeforeAfterSlider from "@/components/UI/BeforeAfterSlider";
import PremiumFooter from "@/components/Layout/PremiumFooter";

// Import video configuration
import { getVideoConfigComplete } from "@/config/videos";
import heroBeautyModel from "@assets/ojo mujer verde_1756671431969.jpg";
import spaTreatment from "@assets/masal toalla turquesa grande_1756671403149.jpg";
import facialMaskTreatment from "@assets/mascarilla verde_1756671415152.jpg";
import perfectSkinPortrait from "@assets/perfect-skin-portrait.jpg";
import spaDeviceTreatment from "@assets/laser piel_1756671407999.jpg";
import whiteFacialMask from "@assets/mascarilla perla_1756671424839.jpg";
import wellAgingWoman from "@assets/mujer joven ropa deportiva_1756669322157.jpg";
import macLogoBlack from "@assets/mac-logo@2x_1756658468399.png";

export default function Home() {
  const [isQuickBookingOpen, setIsQuickBookingOpen] = useState(false);

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery({
    queryKey: ["/api/testimonials"],
  });

  const { data: locations, isLoading: locationsLoading } = useQuery({
    queryKey: ["/api/locations"],
  });

  const methodPhases = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico 360° - El Lienzo en Blanco",
      description: "Mapeo facial y corporal 3D, análisis avanzado con IA y evaluación de bienestar mental. No se puede crear una obra maestra sin entender primero el lienzo.",
    },
    {
      icon: ClipboardList,
      number: "02", 
      title: "Plan Personalizado - Boceto Maestro",
      description: "Análisis sanguíneo de precisión, evaluaciones funcionales y estudio de nutrigenética. Un plan tan único como tu ADN, respaldado por la ciencia.",
    },
    {
      icon: Wand2,
      number: "03",
      title: "Acción Integrada - Pinceladas Precisas", 
      description: "Fusionamos medicina estética, medicina preventiva y técnicas de bienestar integrado. Resultados visibles, naturales y multidimensionales."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Seguimiento Estratégico - Preservando la Obra Maestra",
      description: "Sistema de evaluación progresiva y ajustes preventivos estratégicos. El tiempo ganado se convierte en un activo permanente en tu vida.",
    },
  ];

  const treatments = [
    {
      title: "Estética Facial",
      description: "Rejuvenecimiento, hidratación profunda, tratamientos anti-edad",
      image: spaTreatment,
    },
    {
      title: "Estética Corporal",
      description: "Remodelación, eliminación de grasa, tonificación",
      image: facialMaskTreatment,
    },
    {
      title: "Cirugía Estética",
      description: "Procedimientos mínimamente invasivos, resultados naturales",
      image: perfectSkinPortrait,
    },
    {
      title: "Nutrición Integral",
      description: "Planes personalizados, suplementación, bienestar digestivo",
      image: heroBeautyModel,
    },
    {
      title: "Well-Aging",
      description: "Longevidad, optimización hormonal, terapias regenerativas",
      image: wellAgingWoman,
    },
    {
      title: "Tecnología Láser",
      description: "Equipos de última generación, resultados precisos",
      image: whiteFacialMask,
    },
  ];

  return (
    <div className="font-body antialiased">
      <Helmet>
        <title>Mallorca Aesthetic Clinic | Medicina estética avanzada con visión integral</title>
        <meta
          name="description"
          content="Clínica de medicina estética avanzada en Mallorca. Transformación visible en 90 días con el Método MAC. Consultas en Palma, Cala Millor y Manacor."
        />
        <meta property="og:title" content="Mallorca Aesthetic Clinic - El Arte de Ganar Tiempo" />
        <meta property="og:description" content="Medicina estética integral con seguimiento de 12 meses. Dra. Liliana Ocampo, 18+ años de experiencia." />
      </Helmet>
      
      {/* Floating Navigation */}
      <FloatingNavbar />
      
      {/* Cinematic Hero Section */}
      <CinematicHero onQuickBookingOpen={() => setIsQuickBookingOpen(true)} />

      {/* Doctor Section */}
      <section className="py-20 section-warm-pearl relative z-[1] gold-border-bottom" data-testid="doctor-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img 
                src={perfectSkinPortrait} 
                alt="Dra. Liliana Ocampo - Directora Médica"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                data-testid="img-doctor"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Directora Médica
              </div>
              <h2 className="text-4xl font-title text-gold-deep mb-6">
                Dra. Liliana Ocampo
              </h2>
              <h3 className="text-xl font-subtitle italic text-dark-neutral mb-8">
                Pionera en Well-Aging Integral
              </h3>

              <div className="space-y-6 text-dark-neutral leading-relaxed">
                <p>
                  Con más de 18 años de experiencia en medicina estética, la Dra. Liliana Ocampo ha desarrollado 
                  el revolucionario Método MAC: "El Arte de Ganar Tiempo", fusionando la precisión de la medicina estética avanzada con un enfoque tridimensional del bienestar.
                </p>
                <p>
                  Nuestro método exclusivo trabaja simultáneamente en tres dimensiones: optimización biológica interna, armonización estética natural y equilibrio mental-emocional, creando una sinfonía perfecta entre ciencia, belleza y consciencia.
                </p>
                <p className="italic">
                  "Cada tratamiento es una obra de arte personalizada. Un maestro pintor no solo ve los colores superficiales, sino que comprende la estructura del lienzo, la química de los pigmentos y la visión completa de la obra."
                </p>
              </div>

              <div className="mt-12 text-center max-w-4xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-title text-gold-deep mb-8">
                  Confianza respaldada por evidencia y excelencia
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="text-left bg-white rounded-2xl p-6 shadow-xl border-2 border-turquoise/20 hover:border-turquoise/40 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-5xl lg:text-6xl font-bold text-turquoise mb-2">18+</div>
                    <p className="text-lg text-gray-800 font-semibold">
                      Años de Experiencia
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Medicina estética avanzada
                    </p>
                  </div>
                  <div className="text-left bg-white rounded-2xl p-6 shadow-xl border-2 border-gold-deep/20 hover:border-gold-deep/40 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-5xl lg:text-6xl font-bold text-gold-deep mb-2">10K+</div>
                    <p className="text-lg text-gray-800 font-semibold">
                      Pacientes Satisfechos
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Resultados comprobados
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="section-separator"></div>

      {/* Pilares de la Clínica */}
      <section className="py-20 section-soft-beige relative z-[1] gold-border-bottom" data-testid="pilares-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Nuestros Fundamentos
              </div>
              <h2 className="text-4xl font-title text-gold-deep mb-6">
                Pilares de MAC
              </h2>
              <p className="text-xl text-dark-neutral max-w-3xl mx-auto">
                Tres pilares fundamentales que definen nuestra filosofía y garantizan resultados excepcionales
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="luxury-card hover:shadow-xl hover-lift transition-all duration-300 h-full" data-testid="pilar-belleza">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-turquoise to-turquoise-medium rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Star className="text-white text-3xl fill-current" />
                  </div>
                  <h3 className="text-2xl font-subtitle text-gold-deep mb-4">
                    Belleza que refleja tu verdad
                  </h3>
                  <p className="text-dark-neutral leading-relaxed">
                    Armonización estética natural diseñada con tecnologías 3D, IA, genómica y biomarcadores de precisión.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="luxury-card hover:shadow-xl hover-lift transition-all duration-300 h-full" data-testid="pilar-salud">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-deep to-gold-light rounded-full flex items-center justify-center mb-6 mx-auto">
                    <TrendingUp className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-subtitle text-gold-deep mb-4">
                    Salud integral como base del resultado
                  </h3>
                  <p className="text-dark-neutral leading-relaxed">
                    Análisis médico profundo (cardiología, endocrinología, nutrigenética) que activa tu energía y longevidad.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="luxury-card hover:shadow-xl hover-lift transition-all duration-300 h-full" data-testid="pilar-bienestar">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-turquoise-medium to-gold-champagne rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Search className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-subtitle text-gold-deep mb-4">
                    Bienestar emocional sostenido
                  </h3>
                  <p className="text-dark-neutral leading-relaxed">
                    Métodos de mindfulness y coaching emocional integrados que transforman tu autocuidado en amor propio.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white relative z-[1] gold-border-bottom" data-testid="quote-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-dark-neutral font-medium mb-8">
                Una experiencia como una obra de arte
              </div>
              
              <blockquote className="text-3xl lg:text-5xl font-title text-gold-deep leading-tight mb-12">
                "Cada tratamiento es como una pincelada maestra. No transformamos, revelamos tu luz."
              </blockquote>
              
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-lg text-dark-neutral leading-relaxed">
                  En MAC no creemos en moldes. Diseñamos contigo tu protocolo ideal, como quien pinta un 
                  cuadro único, respetando tu biología, tu historia y tu ritmo.
                </p>
              </div>
              
              <Link href="/metodo">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-3 text-base font-medium rounded-none uppercase tracking-wider transition-all duration-300"
                  data-testid="button-quote-discover"
                >
                  Descubre Cómo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="section-separator"></div>

      {/* Interactive Method Timeline */}
      <section id="method-section" className="relative z-[1]" data-testid="method-section">
        <InteractiveMethodTimeline />
      </section>

      {/* Treatments Section */}
      <section className="py-20 section-pearl relative z-[1] gold-border-bottom" data-testid="treatments-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                NUESTROS TRATAMIENTOS
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-title text-gold-deep mb-6">
                Tratamientos de Excelencia
              </h2>
              
              <p className="text-xl text-dark-neutral max-w-3xl mx-auto leading-relaxed">
                En MAC no ofrecemos servicios aislados, sino experiencias diseñadas con precisión médica y 
                belleza natural. Cada tratamiento es una pincelada en tu obra maestra personal.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <div className="space-y-8 mb-10">
                
                <div>
                  <p className="text-lg text-foreground mb-6 font-medium">
                    Algunos de nuestros tratamientos estrella:
                  </p>
                  
                  <ul className="space-y-4 text-foreground/80">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-turquoise rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <div>
                        <strong>Armonización facial natural</strong> (neuromoduladores y rellenos de última generación)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-turquoise rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <div>
                        <strong>Bioestimulación regenerativa</strong> con factores de crecimiento
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-turquoise rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <div>
                        <strong>Protocolos de well-aging</strong> hormonal y nutricional
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-turquoise rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <div>
                        Terapias integradas de <strong>mindfulness, coaching emocional y suplementación</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link href="/tratamientos">
                <Button 
                  className="bg-gold-light text-gold-deep hover:bg-gold-deep hover:text-white px-10 py-3 text-base font-medium rounded-none uppercase tracking-wider transition-all duration-300"
                  data-testid="button-treatments-discover"
                >
                  Descubre Nuestros Tratamientos
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <AnimatedSection key={treatment.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" data-testid={`treatment-${treatment.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <img 
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-title text-white font-semibold mb-2">{treatment.title}</h3>
                    <p className="text-white/90 text-sm">{treatment.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/tratamientos">
                <Button 
                  size="lg" 
                  className="btn-turquoise-enhanced btn-enhanced px-8 py-4 text-lg"
                  data-testid="button-treatments-view-all"
                >
                  Ver todos los tratamientos
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="section-separator"></div>

      {/* Verified Testimonials Section */}
      <section className="relative z-[1]" data-testid="testimonials-section">
        <VerifiedTestimonialsSection />
      </section>

      {/* Before/After Slider Section */}
      <section className="py-20 bg-white relative z-[1]" data-testid="before-after-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Transformaciones Visibles
              </div>
              <h2 className="text-4xl lg:text-5xl title-luxury text-gold-deep mb-6">
                Resultados Reales
              </h2>
              <p className="text-xl text-dark-neutral max-w-3xl mx-auto body-refined">
                Descubre las transformaciones auténticas de nuestros pacientes. 
                Arrastra el slider para comparar antes y después.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-12">
              <BeforeAfterSlider
                beforeImage={facialMaskTreatment}
                afterImage={perfectSkinPortrait}
                beforeLabel="Antes"
                afterLabel="Después"
                treatment="Rejuvenecimiento Facial Integral"
                timeframe="90 días"
                doctor="Liliana Ocampo"
                className="shadow-2xl"
              />
              
              <div className="space-y-8">
                <div className="luxury-divider mb-8"></div>
                <h3 className="text-2xl font-subtitle text-gold-deep text-center mb-8">
                  Metodología Documentada
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-turquoise font-bold text-lg">1</span>
                            </div>
                    <div>
                      <h4 className="font-subtitle font-semibold text-lg mb-2">Evaluación Inicial</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        Análisis completo de la piel y evaluación de necesidades específicas.
                      </p>
                          </div>
                        </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-turquoise font-bold text-lg">2</span>
                            </div>
                    <div>
                      <h4 className="font-subtitle font-semibold text-lg mb-2">Protocolo Personalizado</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        Diseño de tratamiento adaptado a cada paciente y sus objetivos.
                      </p>
                        </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-turquoise font-bold text-lg">3</span>
                        </div>
                    <div>
                      <h4 className="font-subtitle font-semibold text-lg mb-2">Seguimiento Continuo</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        Monitoreo del progreso y ajustes del protocolo según resultados.
                      </p>
                        </div>
                      </div>
                      </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-turquoise/5 to-gold-deep/5 rounded-xl border border-turquoise/20">
                  <h4 className="font-subtitle font-semibold text-lg mb-3 text-gold-deep">
                    Resultados Garantizados
                  </h4>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Nuestro compromiso es ofrecer resultados visibles y duraderos. 
                    Cada tratamiento está respaldado por nuestra garantía de satisfacción.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-turquoise">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-turquoise rounded-full mr-2"></span>
                      Resultados en 90 días
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-turquoise rounded-full mr-2"></span>
                      Seguimiento de 12 meses
                    </span>
                      </div>
                </div>
                </div>
              </div>
            </AnimatedSection>
        </div>
      </section>

      {/* Mini-Mapa de Ubicaciones */}
      <section className="py-20 bg-pearl/90 relative z-[1]" data-testid="locations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Nuestras Clínicas
              </div>
              <h2 className="text-4xl lg:text-6xl title-luxury text-gold-deep mb-6">
                Ubicaciones Premium
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto body-refined text-shadow-dark">
                Tres espacios exclusivos diseñados para ofrecerte la máxima comodidad y privacidad en Mallorca
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <AnimatedSection delay={0.1}>
              <Card className="bg-white shadow-lg hover-lift transition-all duration-300 h-full border border-gold-light/30" data-testid="location-palma">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-turquoise-medium rounded-full flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl title-luxury text-gold-deep mb-2">MAC Palma Centro</h3>
                    <div className="text-sm text-turquoise uppercase tracking-wide mb-4">Sede Principal</div>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <div>
                      <p className="font-medium text-foreground">Passeig del Born, 15</p>
                      <p className="text-sm text-dark-neutral">Centre, 07012 Palma</p>
                    </div>
                    <div>
                      <p className="font-medium text-turquoise">+34 660 938 585</p>
                    </div>
                    <div className="text-sm text-dark-neutral">
                      <p>Lun - Vie: 10:00h - 18:00h</p>
                      <p>Sáb - Dom: Cerrado</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gold-light/30">
                    <p className="text-sm text-dark-neutral mb-4">
                      Ubicación céntrica en el corazón histórico de Palma. Instalaciones de última generación.
                    </p>
                    <Link href="/ubicaciones">
                      <Button className="w-full bg-turquoise hover:bg-turquoise-medium text-white button-premium" data-testid="button-location-palma">
                        Ver detalles
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-white shadow-lg hover-lift transition-all duration-300 h-full border border-gold-light/30" data-testid="location-cala-millor">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-deep to-gold-light rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Search className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl title-luxury text-gold-deep mb-2">MAC Cala Millor</h3>
                    <div className="text-sm text-turquoise uppercase tracking-wide mb-4">Costa Este</div>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <div>
                      <p className="font-medium text-foreground">Carrer Sol Naixent, 24</p>
                      <p className="text-sm text-dark-neutral">Cala Millor</p>
                    </div>
                    <div>
                      <p className="font-medium text-turquoise">+34 638 617 650</p>
                    </div>
                    <div className="text-sm text-dark-neutral">
                      <p>Lun - Vie: 10:00h - 18:00h</p>
                      <p>Sáb - Dom: Cerrado</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gold-light/30">
                    <p className="text-sm text-dark-neutral mb-4">
                      Clínica costera especializada en tratamientos de rejuvenecimiento corporal y facial.
                    </p>
                    <Link href="/ubicaciones">
                      <Button className="w-full bg-turquoise hover:bg-turquoise-medium text-white button-premium" data-testid="button-location-cala-millor">
                        Ver detalles
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="bg-white shadow-lg hover-lift transition-all duration-300 h-full border border-gold-light/30" data-testid="location-manacor">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-turquoise-medium to-gold-champagne rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Star className="text-white text-2xl fill-current" />
                    </div>
                    <h3 className="text-2xl title-luxury text-gold-deep mb-2">MAC Manacor</h3>
                    <div className="text-sm text-turquoise uppercase tracking-wide mb-4">Rafa Nadal Club</div>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <div>
                      <p className="font-medium text-foreground">Rafa Nadal Club</p>
                      <p className="text-sm text-dark-neutral">Manacor</p>
                    </div>
                    <div>
                      <p className="font-medium text-turquoise">+34 619 392 675</p>
                    </div>
                    <div className="text-sm text-dark-neutral">
                      <p>Lun - Vie: 10:00h - 18:00h</p>
                      <p>Sáb - Dom: Cerrado</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gold-light/30">
                    <p className="text-sm text-dark-neutral mb-4">
                      Entorno deportivo de élite. Programas de well-aging integrados con actividad física.
                    </p>
                    <Link href="/ubicaciones">
                      <Button className="w-full bg-turquoise hover:bg-turquoise-medium text-white button-premium" data-testid="button-location-manacor">
                        Ver detalles
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gold-light/30">
              <h3 className="text-2xl title-luxury text-gold-deep mb-4">Información General</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-semibold text-turquoise mb-2">Centralita General</h4>
                  <p className="text-dark-neutral">+34 971 76 37 87</p>
                  <p className="text-dark-neutral">+34 620 44 92 71</p>
                </div>
                <div>
                  <h4 className="font-semibold text-turquoise mb-2">Email General</h4>
                  <p className="text-dark-neutral">mallorcaaestheticc@gmail.com</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-white relative z-[1]" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-dark-neutral font-medium mb-8">
                Comienza tu obra maestra
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-title text-foreground leading-tight mb-8">
                Reescribe el tiempo. Vive tu esencia.
              </h2>
              
              <p className="text-lg text-dark-neutral leading-relaxed max-w-2xl mx-auto mb-12">
                Tu cuerpo, tu salud y tu belleza merecen un enfoque que respete quién eres y potencie lo mejor de ti.
              </p>
              
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-foreground text-white hover:bg-foreground/90 px-12 py-4 text-base font-medium rounded-none uppercase tracking-wider transition-all duration-300"
                  data-testid="button-final-cta-contact"
                >
                  Agenda tu Consulta Personalizada
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Premium Footer */}
      <PremiumFooter />
      
      {/* Quick Booking Modal */}
      <QuickBookingModal 
        isOpen={isQuickBookingOpen} 
        onClose={() => setIsQuickBookingOpen(false)} 
      />
    </div>
  );
}
