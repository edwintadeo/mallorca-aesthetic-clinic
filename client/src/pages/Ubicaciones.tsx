import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Ubicaciones() {
  const { data: locations, isLoading } = useQuery({
    queryKey: ["/api/locations"],
  });

  const fallbackLocations = [
    {
      id: "1",
      name: "Mallorca Aesthetic Clinic - Centro",
      address: "Carrer de la Paz, 15, 07001 Palma, Mallorca",
      phone: "+34 971 123 456",
      email: "info@mallorcaaesthetic.com",
      hours: {
        monday: "9:00 - 19:00",
        tuesday: "9:00 - 19:00", 
        wednesday: "9:00 - 19:00",
        thursday: "9:00 - 19:00",
        friday: "9:00 - 19:00",
        saturday: "9:00 - 14:00",
        sunday: "Cerrado"
      },
      services: ["Consultas médicas", "Tratamientos faciales", "Medicina regenerativa"],
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "2", 
      name: "MAC - Clínica Avanzada",
      address: "Avinguda Gabriel Roca, 27, 07014 Palma, Mallorca",
      phone: "+34 971 789 012",
      email: "avanzada@mallorcaaesthetic.com",
      hours: {
        monday: "8:00 - 20:00",
        tuesday: "8:00 - 20:00",
        wednesday: "8:00 - 20:00", 
        thursday: "8:00 - 20:00",
        friday: "8:00 - 20:00",
        saturday: "9:00 - 15:00",
        sunday: "Cerrado"
      },
      services: ["Cirugía estética", "Tratamientos láser", "Nutrición integral"],
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const displayLocations = Array.isArray(locations) ? locations : fallbackLocations;

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-turquoise border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="pt-16 font-body antialiased">
      {/* Hero Section */}
      <section className="py-20 hero-gradient" data-testid="ubicaciones-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
              Nuestras Clínicas
            </div>
            <h1 className="text-5xl lg:text-7xl font-title gold-accent mb-6">
              Ubicaciones
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Encuentra la clínica MAC más cercana y descubre espacios diseñados para tu bienestar. 
              Tecnología de vanguardia en entornos únicos en Mallorca.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white" data-testid="locations-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {displayLocations.map((location: any, index: number) => (
              <AnimatedSection key={location.id} delay={index * 0.2}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300" data-testid={`location-${index}`}>
                  <div className="relative">
                    <img 
                      src={location.imageUrl}
                      alt={location.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-title gold-accent mb-4">{location.name}</h3>
                    
                    {/* Address */}
                    <div className="flex items-start gap-3 mb-4" data-testid={`address-${index}`}>
                      <MapPin className="w-5 h-5 text-turquoise mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Dirección</p>
                        <p className="text-muted-foreground">{location.address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 mb-4" data-testid={`phone-${index}`}>
                      <Phone className="w-5 h-5 text-turquoise mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-turquoise transition-colors">
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 mb-6" data-testid={`email-${index}`}>
                      <Mail className="w-5 h-5 text-turquoise mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-turquoise transition-colors">
                          {location.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 mb-6" data-testid={`hours-${index}`}>
                      <Clock className="w-5 h-5 text-turquoise mt-1 flex-shrink-0" />
                      <div className="w-full">
                        <p className="font-medium text-foreground mb-2">Horarios</p>
                        <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                          <div>Lun - Vie: {location.hours.monday}</div>
                          <div>Sábado: {location.hours.saturday}</div>
                          <div className="col-span-2">Domingo: {location.hours.sunday}</div>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <p className="font-medium text-foreground mb-3">Servicios destacados</p>
                      <div className="flex flex-wrap gap-2">
                        {location.services?.map((service: string, serviceIndex: number) => (
                          <span 
                            key={serviceIndex}
                            className="px-3 py-1 bg-pearl text-gold-deep text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="flex-1 bg-turquoise text-white hover:bg-gold-light hover:text-gold-deep transition-all duration-300"
                        data-testid={`button-reserve-${index}`}
                      >
                        Reservar Cita
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-turquoise text-turquoise hover:bg-turquoise-medium hover:text-turquoise"
                        data-testid={`button-directions-${index}`}
                      >
                        Cómo Llegar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-pearl" data-testid="contact-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
              ¿Necesitas más información?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo está disponible para ayudarte a elegir la ubicación 
              y los tratamientos que mejor se adapten a tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-turquoise text-white px-8 py-4 text-lg hover:bg-gold-light hover:text-gold-deep transition-all duration-300"
                data-testid="button-general-contact"
              >
                Contactar Ahora
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gold-deep text-gold-deep px-8 py-4 text-lg hover:bg-gold-deep hover:text-white transition-all duration-300"
                data-testid="button-virtual-tour"
              >
                Tour Virtual
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}