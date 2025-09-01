import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/UI/AnimatedSection";
import SkeletonCard from "@/components/UI/SkeletonCard";
import LazyImage from "@/components/UI/LazyImage";
import { TreatmentCardSkeleton } from "@/components/UI/SkeletonLoader";
import Breadcrumb from "@/components/UI/Breadcrumb";
// Videos removed for deployment stability
import { Link } from "wouter";
import { useState } from "react";

// Import treatment images - New authentic MAC photos
import masajeTurquesa from "@assets/masal toalla turquesa grande_1756671403149.jpg";
import laserPiel from "@assets/laser piel_1756671407999.jpg";
import mascarillaVerde from "@assets/mascarilla verde_1756671415152.jpg";
import mascarillaPerla from "@assets/mascarilla perla_1756671424839.jpg";
import ojoMujerVerde from "@assets/ojo mujer verde_1756671431969.jpg";

export default function Tratamientos() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const breadcrumbItems = [
    { title: "Tratamientos", current: true }
  ];

  const { data: treatments, isLoading } = useQuery({
    queryKey: ["/api/treatments"],
  });

  const categories = [
    { id: "all", name: "Todos", icon: "fas fa-th", count: Array.isArray(treatments) ? treatments.length : 0 },
    { id: "facial", name: "Estética Facial", icon: "fas fa-spa", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "facial").length : 0 },
    { id: "corporal", name: "Estética Corporal", icon: "fas fa-user", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "corporal").length : 0 },
    { id: "cirugia", name: "Cirugía Estética", icon: "fas fa-scalpel", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "cirugia").length : 0 },
    { id: "nutricion", name: "Nutrición Integral", icon: "fas fa-apple-alt", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "nutricion").length : 0 },
    { id: "wellaging", name: "Well-Aging", icon: "fas fa-heartbeat", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "wellaging").length : 0 },
    { id: "laser", name: "Tecnología Láser", icon: "fas fa-bolt", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "laser").length : 0 },
  ];

  const fallbackTreatments = [
    {
      id: "1",
      name: "Rejuvenecimiento Facial Integral",
      category: "facial",
      description: "Tratamiento completo que combina múltiples técnicas para revertir los signos del envejecimiento facial.",
      benefits: ["Reducción de arrugas", "Mejora de textura", "Hidratación profunda", "Estimulación de colágeno"],
      technology: "Radiofrecuencia + Ultrasonido microfocalizado + LED",
      imageUrl: mascarillaVerde,
      featured: true,
    },
    {
      id: "2", 
      name: "Remodelación Corporal CoolSculpting",
      category: "corporal",
      description: "Eliminación no invasiva de grasa localizada mediante criolipólisis avanzada.",
      benefits: ["Reducción de grasa", "Sin cirugía", "Sin tiempo de recuperación", "Resultados permanentes"],
      technology: "CoolSculpting Elite + CoolTone",
      imageUrl: masajeTurquesa,
      featured: true,
    },
    {
      id: "3",
      name: "Lifting Facial Sin Cirugía",
      category: "facial",
      description: "Tensado y elevación facial utilizando hilos tensores PDO de última generación.",
      benefits: ["Efecto lifting inmediato", "Estimulación de colágeno", "Sin cicatrices", "Resultados duraderos"],
      technology: "Hilos PDO + Radiofrecuencia fraccionada",
      imageUrl: mascarillaPerla,
      featured: false,
    },
    {
      id: "4",
      name: "Programa Nutricional Anti-Aging",
      category: "nutricion", 
      description: "Plan personalizado de nutrición y suplementación para optimizar el envejecimiento celular.",
      benefits: ["Optimización hormonal", "Mejora energética", "Reducción inflamación", "Longevidad celular"],
      technology: "Análisis genético + Bioimpedancia + Micronutrientes",
      imageUrl: ojoMujerVerde,
      featured: false,
    },
    {
      id: "5",
      name: "Terapia Regenerativa PRP",
      category: "wellaging",
      description: "Medicina regenerativa con plasma rico en plaquetas para rejuvenecimiento natural.",
      benefits: ["Regeneración celular", "Bioestimulación natural", "Sin efectos secundarios", "Resultados progresivos"],
      technology: "PRP Autólogo + Microagujas + LED terapéutico",
      imageUrl: laserPiel,
      featured: true,
    },
    {
      id: "6",
      name: "Depilación Láser Definitiva",
      category: "laser",
      description: "Eliminación permanente del vello con láser de diodo de última generación.",
      benefits: ["Eliminación permanente", "Para todos los tipos de piel", "Sin dolor", "Resultados rápidos"],
      technology: "Láser Diodo 808nm + Cooling System",
      imageUrl: laserPiel,
      featured: false,
    },
  ];

  const displayTreatments = Array.isArray(treatments) ? treatments : fallbackTreatments;
  const filteredTreatments = selectedCategory === "all" 
    ? displayTreatments 
    : displayTreatments.filter((treatment: any) => treatment.category === selectedCategory);

  const featuredTreatments = displayTreatments.filter((treatment: any) => treatment.featured);

  return (
    <div className="font-body antialiased">
      {/* Video de fondo para toda la página */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden">
        <img 
          src={mascarillaVerde} 
          alt="Tratamientos MAC" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay muy ligero para mantener visibilidad del vídeo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
      </div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-[1]" data-testid="tratamientos-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-8 flex justify-center">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-white font-bold mb-4 bg-black/30 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
                Nuestros Servicios
              </div>
              <h1 className="text-5xl lg:text-7xl font-title gold-accent mb-6">
                Tratamientos
              </h1>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium bg-black/25 backdrop-blur-sm p-6 rounded-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                Tecnología de vanguardia y técnicas artesanales para resultados naturales excepcionales. 
                Cada tratamiento se adapta a tus necesidades específicas dentro del Método MAC.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Featured Treatments */}
      {featuredTreatments.length > 0 && (
        <section className="py-20 section-pearl relative z-[1] gold-border-bottom" data-testid="featured-treatments">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-title text-gold-deep mb-6">
                  Tratamientos Destacados
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Los más solicitados por nuestros pacientes
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTreatments.slice(0, 3).map((treatment: any, index: number) => (
                <AnimatedSection key={treatment.id} delay={index * 0.1}>
                  <Card className="group overflow-hidden luxury-card hover:shadow-xl hover-lift transition-all duration-300 h-full" data-testid={`featured-treatment-${index}`}>
                    <div className="relative">
                      <LazyImage 
                        src={treatment.imageUrl}
                        alt={treatment.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <Badge className="absolute top-4 left-4 bg-gold-light text-gold-deep">
                        Destacado
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-title text-gold-deep font-semibold mb-3">{treatment.name}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {treatment.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {treatment.benefits?.slice(0, 2).map((benefit: string, benefitIndex: number) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full border-turquoise text-turquoise hover:bg-turquoise-medium hover:text-turquoise"
                        data-testid={`button-more-info-${index}`}
                      >
                        Más información
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-transparent relative z-[1]" data-testid="category-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-title gold-accent mb-2">Nuestros Tratamientos</h2>
              <p className="text-muted-foreground">Selecciona una categoría para explorar nuestros servicios</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    relative group px-6 py-3 transition-all duration-300
                    ${selectedCategory === category.id 
                      ? "bg-turquoise text-white hover:bg-turquoise-dark backdrop-blur-md shadow-xl border-2 border-turquoise scale-105" 
                      : "bg-white/90 backdrop-blur-md border-2 border-gold-light/30 text-foreground hover:bg-turquoise hover:text-white hover:border-turquoise hover:scale-105"
                    }
                  `}
                  data-testid={`filter-${category.id}`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${category.icon} text-lg`}></i>
                    <span className="font-medium">{category.name}</span>
                    {category.count > 0 && (
                      <Badge 
                        variant="secondary" 
                        className={`
                          ml-2 transition-colors
                          ${selectedCategory === category.id 
                            ? "bg-white/20 text-white border-white/30" 
                            : "bg-turquoise-light text-turquoise border-turquoise/20"}
                        `}
                      >
                        {category.count}
                      </Badge>
                    )}
                  </div>
                  {selectedCategory === category.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 rounded-full" />
                  )}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Treatments */}
      <section className="py-20 section-beige relative z-[1] gold-border-bottom" data-testid="all-treatments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredTreatments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment: any, index: number) => (
                <AnimatedSection key={treatment.id} delay={index * 0.1}>
                  <Card className="h-full luxury-card hover:shadow-xl hover-lift transition-all duration-300 group overflow-hidden" data-testid={`treatment-${treatment.id}`}>
                    <div className="relative overflow-hidden h-48">
                      <LazyImage
                        src={treatment.imageUrl}
                        alt={treatment.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-subtitle gold-accent-subtle font-semibold">{treatment.name}</h3>
                        {treatment.featured && (
                          <Badge className="bg-gold-light text-gold-deep">
                            Destacado
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {treatment.description}
                      </p>
                      
                      {treatment.benefits && (
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Beneficios:</h4>
                          <div className="flex flex-wrap gap-1">
                            {treatment.benefits.slice(0, 3).map((benefit: string, benefitIndex: number) => (
                              <Badge key={benefitIndex} variant="secondary" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                            {treatment.benefits.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{treatment.benefits.length - 3} más
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {treatment.technology && (
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-1">Tecnología:</h4>
                          <p className="text-sm text-muted-foreground">{treatment.technology}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
                          data-testid={`button-info-${treatment.id}`}
                        >
                          Más información
                        </Button>
                        <Link href="/contacto">
                          <Button 
                            size="sm" 
                            className="bg-turquoise text-white hover:bg-turquoise/90"
                            data-testid={`button-consult-${treatment.id}`}
                          >
                            Consultar
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-subtitle mb-4">No hay tratamientos en esta categoría</h3>
              <p className="text-muted-foreground">Pronto añadiremos más opciones en {categories.find(c => c.id === selectedCategory)?.name}.</p>
            </div>
          )}
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-beige" data-testid="technology-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-title gold-accent mb-6">
                Tecnología de Vanguardia
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Equipos de última generación para resultados seguros y efectivos
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-xl hover-lift transition-all duration-300 border border-gold-light/30" data-testid="tech-coolsculpting">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-snowflake text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-subtitle font-semibold mb-2">CoolSculpting Elite</h3>
                  <p className="text-sm text-muted-foreground">Criolipólisis avanzada para eliminación de grasa localizada</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-xl hover-lift transition-all duration-300 border border-gold-light/30" data-testid="tech-ultherapy">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-wifi text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-subtitle font-semibold mb-2">Ultherapy</h3>
                  <p className="text-sm text-muted-foreground">Ultrasonido microfocalizado para lifting facial no invasivo</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-xl hover-lift transition-all duration-300 border border-gold-light/30" data-testid="tech-morpheus">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-bolt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-subtitle font-semibold mb-2">Morpheus8</h3>
                  <p className="text-sm text-muted-foreground">Radiofrecuencia fraccionada para rejuvenecimiento profundo</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-xl hover-lift transition-all duration-300 border border-gold-light/30" data-testid="tech-picosure">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-laser-pointer text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-subtitle font-semibold mb-2">PicoSure Pro</h3>
                  <p className="text-sm text-muted-foreground">Láser picosegundo para rejuvenecimiento y eliminación de manchas</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative z-[1]" data-testid="treatments-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-title gold-accent-prominent mb-6">
              ¿Listo para tu transformación?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Agenda tu consulta gratuita y descubre cuál es el tratamiento ideal para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-turquoise text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300 px-8 py-4 text-lg"
                  data-testid="button-treatments-cta-contact"
                >
                  Agenda tu consulta gratuita
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 px-8 py-4 text-lg"
                data-testid="button-treatments-cta-whatsapp"
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
