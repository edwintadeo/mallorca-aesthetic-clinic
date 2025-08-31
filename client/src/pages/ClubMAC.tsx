import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { LazyVideo } from "@/components/UI/LazyVideo";
import { Crown, Gift, Calendar, Star, Users, Sparkles, Heart, Shield } from "lucide-react";

// Import video for hero background
import heroVideo from "@assets/primed_cotton_canvas_1756676868691.mp4";

export default function ClubMAC() {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const membershipPlans = [
    {
      id: "premium",
      name: "MAC Premium",
      price: "299",
      period: "mes",
      badge: "Más Popular",
      color: "bg-turquoise",
      icon: Crown,
      benefits: [
        "20% descuento en todos los tratamientos",
        "Consulta mensual gratuita",
        "Acceso prioritario a nuevos tratamientos",
        "Kit de productos MAC exclusivo trimestral",
        "Invitaciones a eventos VIP",
        "Seguimiento personalizado 24/7"
      ]
    },
    {
      id: "elite",
      name: "MAC Elite",
      price: "599", 
      period: "mes",
      badge: "Exclusivo",
      color: "bg-gold-deep",
      icon: Sparkles,
      benefits: [
        "35% descuento en todos los tratamientos",
        "Consultas ilimitadas",
        "Acceso exclusivo a tratamientos experimentales",
        "Kit mensual de productos premium",
        "Concierge médico personal",
        "Eventos privados y retiros wellness",
        "Telemedicina 24/7",
        "Plan nutricional personalizado incluido"
      ]
    },
    {
      id: "diamond",
      name: "MAC Diamond",
      price: "1299",
      period: "mes", 
      badge: "Ultra Exclusivo",
      color: "bg-black",
      icon: Shield,
      benefits: [
        "50% descuento en todos los tratamientos",
        "Acceso completo a toda la clínica",
        "Tratamientos experimentales sin costo",
        "Productos personalizados formulados exclusivamente",
        "Médico dedicado y equipo personal",
        "Acceso a clínicas internacionales MAC",
        "Retiros anuales de bienestar",
        "Garantía de resultados premium"
      ]
    }
  ];

  const exclusiveBenefits = [
    {
      icon: Gift,
      title: "Productos Exclusivos",
      description: "Acceso a línea de productos MAC formulada por nuestros especialistas"
    },
    {
      icon: Calendar,
      title: "Agenda Prioritaria",
      description: "Reserva tus citas con prioridad y flexibilidad total de horarios"
    },
    {
      icon: Star,
      title: "Tratamientos Innovadores",
      description: "Primero en acceder a las últimas tecnologías y procedimientos"
    },
    {
      icon: Users,
      title: "Comunidad Exclusiva",
      description: "Conecta con otros miembros en eventos y experiencias únicas"
    },
    {
      icon: Heart,
      title: "Bienestar Integral",
      description: "Seguimiento completo de tu progreso y bienestar a largo plazo"
    },
    {
      icon: Shield,
      title: "Garantía Premium",
      description: "Satisfacción garantizada en todos nuestros servicios y tratamientos"
    }
  ];

  return (
    <div className="pt-16 font-body antialiased">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" data-testid="club-mac-hero">
        {/* Video Background */}
        <LazyVideo
          sources={[
            { src: heroVideo, type: "video/mp4" }
          ]}
          className="absolute inset-0 w-full h-full opacity-30"
          priority={true}
          preload="auto"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gold-deep/20 to-turquoise/20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
              Membresía Exclusiva
            </div>
            <h1 className="hero-main-title gold-accent-prominent mb-6">
              Club MAC
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Únete a la experiencia más exclusiva en medicina estética. Acceso privilegiado a tratamientos, 
              productos únicos y una comunidad de bienestar excepcional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-white" data-testid="membership-plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent-prominent mb-6">
                Planes de Membresía
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Elige el nivel de exclusividad que mejor se adapte a tu estilo de vida
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <AnimatedSection key={plan.id} delay={index * 0.1}>
                  <Card 
                    className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                      selectedPlan === plan.id ? 'ring-2 ring-turquoise scale-105' : ''
                    } ${plan.id === 'elite' ? 'transform lg:-translate-y-4' : ''}`}
                    data-testid={`membership-plan-${plan.id}`}
                  >
                    {plan.badge && (
                      <div className={`absolute top-0 right-0 ${plan.color} text-white px-4 py-2 text-sm font-medium`}>
                        {plan.badge}
                      </div>
                    )}
                    
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${plan.color} text-white mb-4`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-title gold-accent mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-foreground mb-1">
                          €{plan.price}
                          <span className="text-lg font-normal text-muted-foreground">/{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Star className="w-3 h-3 text-turquoise" />
                            </div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        className={`w-full ${
                          selectedPlan === plan.id 
                            ? 'bg-turquoise text-white hover:bg-gold-light hover:text-gold-deep' 
                            : 'bg-pearl text-foreground hover:bg-turquoise hover:text-white'
                        } transition-all duration-300`}
                        onClick={() => setSelectedPlan(plan.id)}
                        data-testid={`button-select-${plan.id}`}
                      >
                        {selectedPlan === plan.id ? 'Plan Seleccionado' : 'Seleccionar Plan'}
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-20 bg-pearl" data-testid="exclusive-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent-prominent mb-6">
                Beneficios Exclusivos
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experiencias diseñadas especialmente para nuestros miembros
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exclusiveBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300" data-testid={`benefit-${index}`}>
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-turquoise/10 text-turquoise mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-subtitle font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 bg-gradient-to-r from-turquoise/20 to-gold-deep/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-title mb-6 gold-light">
              ¿Listo para una experiencia única?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Forma parte del círculo más exclusivo de bienestar y medicina estética en Mallorca. 
              Tu transformación de lujo te espera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-turquoise text-white px-8 py-4 text-lg hover:bg-gold-light hover:text-gold-deep transition-all duration-300"
                data-testid="button-join-club"
              >
                Unirse al Club MAC
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-black transition-all duration-300"
                data-testid="button-more-info"
              >
                Más Información
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}