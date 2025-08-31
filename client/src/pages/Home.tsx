import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { Search, ClipboardList, Wand2, TrendingUp, Star } from "lucide-react";

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
      title: "Diagnóstico 360°",
      description: "Análisis integral de piel, estructura facial, historial médico y objetivos personales.",
    },
    {
      icon: ClipboardList,
      number: "02", 
      title: "Plan Personalizado",
      description: "Diseño de protocolo único combinando tratamientos y cronograma adaptado a tu estilo de vida.",
    },
    {
      icon: Wand2,
      number: "03",
      title: "Acción Integrada", 
      description: "Ejecución de tratamientos con técnicas avanzadas y tecnología de vanguardia.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Seguimiento Estratégico",
      description: "Monitoreo continuo por 12 meses para optimizar y mantener resultados duraderos.",
    },
  ];

  const treatments = [
    {
      title: "Estética Facial",
      description: "Rejuvenecimiento, hidratación profunda, tratamientos anti-edad",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Estética Corporal",
      description: "Remodelación, eliminación de grasa, tonificación",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Cirugía Estética",
      description: "Procedimientos mínimamente invasivos, resultados naturales",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Nutrición Integral",
      description: "Planes personalizados, suplementación, bienestar digestivo",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
      {/* Hero Section */}
      <section className="pt-16 min-h-screen hero-gradient relative overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h1 className="text-5xl lg:text-7xl font-title font-light mb-6">
                <span className="gold-accent">El Arte de</span><br />
                <span className="text-turquoise">Ganar Tiempo</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-subtitle italic text-muted-foreground mb-8">
                Reescribe el tiempo, vive tu esencia
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Transformación visible en 90 días con seguimiento integral de 12 meses. 
                Combina optimización biológica, armonización estética natural y equilibrio mental-emocional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button 
                    size="lg" 
                    className="bg-turquoise text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300 px-8 py-4 text-lg"
                    data-testid="button-hero-reserva"
                  >
                    Reserva tu consulta
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-white transition-all duration-300 px-8 py-4 text-lg"
                  data-testid="button-hero-whatsapp"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Elegant medical spa interior with natural lighting"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-champagne/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-turquoise/10 rounded-full blur-3xl"></div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-white" data-testid="doctor-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
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
                  Con más de 18 años de experiencia en medicina estética, la Dra. Ocampo ha desarrollado 
                  el revolucionario Método MAC, que integra ciencia, estética y bienestar emocional.
                </p>
                <p>
                  Su enfoque holístico trasciende los tratamientos tradicionales, creando transformaciones 
                  auténticas que respetan la esencia natural de cada paciente.
                </p>
                <p className="italic">
                  "Cada tratamiento es una obra de arte personalizada. No solo transformamos la apariencia, 
                  sino que devolvemos la confianza y el tiempo perdido."
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-title gold-accent font-semibold" data-testid="stat-years">18+</div>
                  <div className="text-sm text-muted-foreground">Años experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-title gold-accent font-semibold" data-testid="stat-patients">10K+</div>
                  <div className="text-sm text-muted-foreground">Pacientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-title gold-accent font-semibold" data-testid="stat-treatments">30+</div>
                  <div className="text-sm text-muted-foreground">Tratamientos</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 bg-pearl" data-testid="method-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Metodología Exclusiva
              </div>
              <h2 className="text-4xl lg:text-6xl font-title gold-accent mb-6">
                Método MAC
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                  Conoce más sobre el Método
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white" data-testid="treatments-section">
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
      <section className="py-20 bg-beige" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Historias Reales
              </div>
              <h2 className="text-4xl lg:text-6xl font-title gold-accent mb-6">
                Testimonios
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-20 bg-pearl" data-testid="locations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Nuestras Sedes
              </div>
              <h2 className="text-4xl lg:text-6xl font-title gold-accent mb-6">
                Ubicaciones
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-20 bg-white" data-testid="final-cta-section">
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
                  Reserva tu consulta gratuita
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
