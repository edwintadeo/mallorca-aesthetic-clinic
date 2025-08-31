import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { Link } from "wouter";
import { useState } from "react";

// Import treatment images
import spaTreatment from "@assets/spa-treatment.jpg";
import facialMaskTreatment from "@assets/facial-mask-treatment.jpg";
import perfectSkinPortrait from "@assets/perfect-skin-portrait.jpg";
import heroBeautyModel from "@assets/hero-beauty-model.jpg";
import spaDeviceTreatment from "@assets/spa-device-treatment.jpg";
import whiteFacialMask from "@assets/white-facial-mask.jpg";

export default function Tratamientos() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: treatments, isLoading } = useQuery({
    queryKey: ["/api/treatments"],
  });

  const categories = [
    { id: "all", name: "Todos", count: Array.isArray(treatments) ? treatments.length : 0 },
    { id: "facial", name: "Estética Facial", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "facial").length : 0 },
    { id: "corporal", name: "Estética Corporal", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "corporal").length : 0 },
    { id: "cirugia", name: "Cirugía Estética", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "cirugia").length : 0 },
    { id: "nutricion", name: "Nutrición Integral", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "nutricion").length : 0 },
    { id: "wellaging", name: "Well-Aging", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "wellaging").length : 0 },
    { id: "laser", name: "Tecnología Láser", count: Array.isArray(treatments) ? treatments.filter((t: any) => t.category === "laser").length : 0 },
  ];

  const fallbackTreatments = [
    {
      id: "1",
      name: "Rejuvenecimiento Facial Integral",
      category: "facial",
      description: "Tratamiento completo que combina múltiples técnicas para revertir los signos del envejecimiento facial.",
      benefits: ["Reducción de arrugas", "Mejora de textura", "Hidratación profunda", "Estimulación de colágeno"],
      technology: "Radiofrecuencia + Ultrasonido microfocalizado + LED",
      imageUrl: spaTreatment,
      featured: true,
    },
    {
      id: "2", 
      name: "Remodelación Corporal CoolSculpting",
      category: "corporal",
      description: "Eliminación no invasiva de grasa localizada mediante criolipólisis avanzada.",
      benefits: ["Reducción de grasa", "Sin cirugía", "Sin tiempo de recuperación", "Resultados permanentes"],
      technology: "CoolSculpting Elite + CoolTone",
      imageUrl: facialMaskTreatment,
      featured: true,
    },
    {
      id: "3",
      name: "Lifting Facial Sin Cirugía",
      category: "facial",
      description: "Tensado y elevación facial utilizando hilos tensores PDO de última generación.",
      benefits: ["Efecto lifting inmediato", "Estimulación de colágeno", "Sin cicatrices", "Resultados duraderos"],
      technology: "Hilos PDO + Radiofrecuencia fraccionada",
      imageUrl: whiteFacialMask,
      featured: false,
    },
    {
      id: "4",
      name: "Programa Nutricional Anti-Aging",
      category: "nutricion", 
      description: "Plan personalizado de nutrición y suplementación para optimizar el envejecimiento celular.",
      benefits: ["Optimización hormonal", "Mejora energética", "Reducción inflamación", "Longevidad celular"],
      technology: "Análisis genético + Bioimpedancia + Micronutrientes",
      imageUrl: heroBeautyModel,
      featured: false,
    },
    {
      id: "5",
      name: "Terapia Regenerativa PRP",
      category: "wellaging",
      description: "Medicina regenerativa con plasma rico en plaquetas para rejuvenecimiento natural.",
      benefits: ["Regeneración celular", "Bioestimulación natural", "Sin efectos secundarios", "Resultados progresivos"],
      technology: "PRP Autólogo + Microagujas + LED terapéutico",
      imageUrl: spaDeviceTreatment,
      featured: true,
    },
    {
      id: "6",
      name: "Depilación Láser Definitiva",
      category: "laser",
      description: "Eliminación permanente del vello con láser de diodo de última generación.",
      benefits: ["Eliminación permanente", "Para todos los tipos de piel", "Sin dolor", "Resultados rápidos"],
      technology: "Láser Diodo 808nm + Cooling System",
      imageUrl: facialMaskTreatment,
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
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-background-tratamientos"
          onError={(e) => {
            console.error("Error loading background video:", e);
            // Si el video no carga, mostrar imagen de respaldo
            e.currentTarget.style.display = 'none';
            const fallbackDiv = e.currentTarget.nextElementSibling;
            if (fallbackDiv) fallbackDiv.style.display = 'block';
          }}
        >
          <source src="/public-objects/amanecer mallorca.mp4" type="video/mp4" />
        </video>
        
        {/* Imagen de respaldo si el video no carga */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${spaTreatment})`,
            display: "none"
          }}
        ></div>
        
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-[1]" data-testid="tratamientos-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-white/80 font-medium mb-4 drop-shadow-md">
              Nuestros Servicios
            </div>
            <h1 className="text-5xl lg:text-7xl font-title text-white mb-6 drop-shadow-lg">
              Tratamientos
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Tecnología de vanguardia y técnicas artesanales para resultados naturales excepcionales. 
              Cada tratamiento se adapta a tus necesidades específicas dentro del Método MAC.
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* Featured Treatments */}
      {featuredTreatments.length > 0 && (
        <section className="py-20 bg-white/50 backdrop-blur-sm relative z-[1]" data-testid="featured-treatments">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
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
                  <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl hover-lift transition-all duration-300 h-full border border-gold-light/30" data-testid={`featured-treatment-${index}`}>
                    <div className="relative">
                      <img 
                        src={treatment.imageUrl}
                        alt={treatment.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-gold-light text-gold-deep">
                        Destacado
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-subtitle font-semibold mb-3">{treatment.name}</h3>
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
      <section className="py-8 bg-white/50 backdrop-blur-sm relative z-[1]" data-testid="category-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-turquoise-medium text-turquoise hover:bg-turquoise-light" 
                    : "border-turquoise text-turquoise hover:bg-turquoise-light hover:text-turquoise"
                  }
                  data-testid={`filter-${category.id}`}
                >
                  {category.name}
                  {category.count > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Treatments */}
      <section className="py-20 bg-white/50 backdrop-blur-sm relative z-[1]" data-testid="all-treatments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-turquoise"></div>
              <p className="mt-4 text-muted-foreground">Cargando tratamientos...</p>
            </div>
          ) : filteredTreatments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment: any, index: number) => (
                <AnimatedSection key={treatment.id} delay={index * 0.1}>
                  <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-xl hover-lift transition-all duration-300 border border-gold-light/30" data-testid={`treatment-${treatment.id}`}>
                    <img 
                      src={treatment.imageUrl}
                      alt={treatment.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-subtitle font-semibold">{treatment.name}</h3>
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
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
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
      <section className="py-20 bg-white/50 backdrop-blur-sm relative z-[1]" data-testid="treatments-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
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
