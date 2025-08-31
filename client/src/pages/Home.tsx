import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { Search, ClipboardList, Wand2, TrendingUp, Star } from "lucide-react";

// Import new images
import heroBeautyModel from "@assets/hero-beauty-model.jpg";
import spaTreatment from "@assets/spa-treatment.jpg";
import facialMaskTreatment from "@assets/facial-mask-treatment.jpg";
import perfectSkinPortrait from "@assets/perfect-skin-portrait.jpg";

export default function Home() {
  const { data: testimonials } = useQuery({
    queryKey: ["/api/testimonials"],
  });

  const { data: locations } = useQuery({
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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Tecnología Láser",
      description: "Equipos de última generación, resultados precisos",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];

  return (
    <div className="font-body antialiased">
      {/* Video de fondo para toda la landing page */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden">
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-background"
          onError={(e) => {
            console.error("Error loading background video:", e);
            // Si el video no carga, mostrar imagen de respaldo
            e.currentTarget.style.display = 'none';
            const fallbackDiv = e.currentTarget.nextElementSibling;
            if (fallbackDiv) fallbackDiv.style.display = 'block';
          }}
        >
          <source src="/public-objects/vecteezy_seagull-and-boats-on-a-turquoise-sea_1627124.mp4" type="video/mp4" />
          <source src="https://storage.googleapis.com/replit-objstore-f50a230b-c239-4fc1-a433-4d78a626a011/public/vecteezy_seagull-and-boats-on-a-turquoise-sea_1627124.mp4" type="video/mp4" />
          <source src="https://storage.googleapis.com/replit-objstore-f50a230b-c239-4fc1-a433-4d78a626a011/vecteezy_seagull-and-boats-on-a-turquoise-sea_1627124.mp4" type="video/mp4" />
        </video>
        
        {/* Imagen de respaldo si el video no carga */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBeautyModel})`,
            display: "none"
          }}
        ></div>
        
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen relative z-[1] flex items-center" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-5xl lg:text-7xl font-title font-light mb-6 text-white drop-shadow-lg">
                <span className="text-gold-light">El Arte de</span><br />
                <span className="text-white">Ganar Tiempo</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-subtitle italic text-white/90 mb-8 drop-shadow-md">
                Donde el tiempo se convierte en arte y tu bienestar en una obra maestra
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                En un mundo obsesionado con detener el reloj, hemos descubierto algo extraordinario: el arte de convertir el tiempo en tu aliado. No se trata solo de lucir más joven, sino de experimentar una transformación integral donde la belleza auténtica emerge naturalmente desde el bienestar más profundo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button 
                    size="lg" 
                    className="bg-turquoise-medium/90 text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
                    data-testid="button-hero-reserva"
                  >
                    Reserva tu consulta
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/70 text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
                  data-testid="button-hero-whatsapp"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm relative z-[1]" data-testid="doctor-section">
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
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
                Dra. Liliana Ocampo
              </h2>
              <h3 className="text-xl font-subtitle italic text-muted-foreground mb-8">
                Pionera en Well-Aging Integral
              </h3>

              <div className="space-y-6 text-foreground/80 leading-relaxed">
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

              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-title gold-accent font-semibold" data-testid="stat-years">18+</div>
                  <div className="text-sm text-muted-foreground">Años experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-title gold-accent font-semibold" data-testid="stat-patients">10K+</div>
                  <div className="text-sm text-muted-foreground">Pacientes transformados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-title gold-accent font-semibold" data-testid="stat-treatments">90</div>
                  <div className="text-sm text-muted-foreground">Días transformación visible</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 bg-transparent relative z-[1]" data-testid="method-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-white font-medium mb-4 drop-shadow-lg">
                Metodología Exclusiva
              </div>
              <h2 className="text-4xl lg:text-6xl font-title text-gold-light mb-6 drop-shadow-lg">
                Método MAC
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Nuestro protocolo de cuatro fases garantiza resultados excepcionales 
                mediante un enfoque científico y personalizado.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodPhases.map((phase, index) => (
              <AnimatedSection key={phase.number} delay={index * 0.1}>
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full" data-testid={`method-phase-${phase.number}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mb-6">
                      <phase.icon className="text-white text-2xl" />
                    </div>
                    <div className="text-2xl font-title gold-accent font-semibold mb-2">{phase.number}</div>
                    <h3 className="text-xl font-subtitle font-semibold mb-4">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/metodo">
                <Button 
                  size="lg" 
                  className="bg-turquoise text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300 px-8 py-4 text-lg"
                  data-testid="button-method-learn-more"
                >
                  Descubre el Método MAC
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm relative z-[1]" data-testid="treatments-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Nuestros Servicios
              </div>
              <h2 className="text-4xl lg:text-6xl font-title gold-accent mb-6">
                Tratamientos
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tecnología de vanguardia y técnicas artesanales para resultados naturales excepcionales.
              </p>
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
                  className="bg-turquoise text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300 px-8 py-4 text-lg"
                  data-testid="button-treatments-view-all"
                >
                  Ver todos los tratamientos
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-transparent relative z-[1]" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-white font-medium mb-4 drop-shadow-lg">
                Historias Reales
              </div>
              <h2 className="text-4xl lg:text-6xl font-title text-gold-light mb-6 drop-shadow-lg">
                Testimonios
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Transformaciones auténticas de pacientes que han vivido la experiencia MAC.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials && Array.isArray(testimonials) && testimonials.length > 0 ? (
              testimonials.slice(0, 3).map((testimonial: any, index: number) => (
                <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                  <Card className="bg-white shadow-lg h-full" data-testid={`testimonial-${index}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.imageUrl || "https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-subtitle font-semibold">{testimonial.name}</h4>
                          <div className="text-sm text-muted-foreground">{testimonial.treatment}</div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex text-gold-light mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground/80 leading-relaxed italic">
                        "{testimonial.comment}"
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))
            ) : (
              // Fallback when no testimonials are loaded
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Los testimonios se cargan desde la base de datos.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-transparent relative z-[1]" data-testid="locations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-white font-medium mb-4 drop-shadow-lg">
                Nuestras Sedes
              </div>
              <h2 className="text-4xl lg:text-6xl font-title text-gold-light mb-6 drop-shadow-lg">
                Ubicaciones
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Espacios diseñados para tu comodidad y bienestar en las mejores zonas de Mallorca.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {locations && Array.isArray(locations) && locations.length > 0 ? (
              locations.map((location: any, index: number) => (
                <AnimatedSection key={location.id} delay={index * 0.2}>
                  <Card className="bg-white overflow-hidden shadow-lg" data-testid={`location-${index}`}>
                    <img 
                      src={location.imageUrl || (index === 0 ? 
                        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" :
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                      )}
                      alt={location.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-title gold-accent font-semibold mb-4">{location.name}</h3>
                      <div className="space-y-3 text-foreground/80">
                        <div className="flex items-center">
                          <i className="fas fa-map-marker-alt text-turquoise mr-3"></i>
                          <span>{location.address}</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-clock text-turquoise mr-3"></i>
                          <span>{location.hours}</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-phone text-turquoise mr-3"></i>
                          <span>{location.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))
            ) : (
              // Fallback locations
              <>
                <AnimatedSection>
                  <Card className="bg-white overflow-hidden shadow-lg" data-testid="location-palma">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                      alt="MAC Palma Centro"
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-title gold-accent font-semibold mb-4">MAC Palma Centro</h3>
                      <div className="space-y-3 text-foreground/80">
                        <div className="flex items-center">
                          <i className="fas fa-map-marker-alt text-turquoise mr-3"></i>
                          <span>Passeig del Born, 15, 07012 Palma</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-clock text-turquoise mr-3"></i>
                          <span>Lun-Vie: 9:00-19:00 | Sáb: 9:00-14:00</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-phone text-turquoise mr-3"></i>
                          <span>+34 971 123 456</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <Card className="bg-white overflow-hidden shadow-lg" data-testid="location-portals">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                      alt="MAC Puerto Portals"
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-title gold-accent font-semibold mb-4">MAC Puerto Portals</h3>
                      <div className="space-y-3 text-foreground/80">
                        <div className="flex items-center">
                          <i className="fas fa-map-marker-alt text-turquoise mr-3"></i>
                          <span>Local 45, Puerto Portals, 07181 Calvià</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-clock text-turquoise mr-3"></i>
                          <span>Lun-Vie: 10:00-20:00 | Sáb: 10:00-15:00</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-phone text-turquoise mr-3"></i>
                          <span>+34 971 654 321</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm relative z-[1]" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
              ¿Listo para reescribir tu tiempo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Da el primer paso hacia tu transformación. Nuestro equipo está listo para diseñar tu plan personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-turquoise text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300 px-8 py-4 text-lg"
                  data-testid="button-final-cta-contact"
                >
                  Agenda tu consulta personalizada
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 px-8 py-4 text-lg"
                data-testid="button-final-cta-whatsapp"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp directo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
