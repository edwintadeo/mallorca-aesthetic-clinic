import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { MapPin, Phone, Mail, Clock, UserCheck, Heart, Microscope, Shield } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Debe ser un email válido"),
  phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos").regex(/^[+]?[0-9\s-()]+$/, "Formato de teléfono inválido"),
  age: z.number().min(18, "Debe ser mayor de edad").max(100, "Edad no válida").optional(),
  treatment: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().max(1000, "El mensaje es demasiado largo").optional(),
  acceptsPrivacy: z.boolean().refine(val => val === true, "Debe aceptar la política de privacidad"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: locations } = useQuery({
    queryKey: ["/api/locations"],
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      treatment: "",
      preferredTime: "",
      message: "",
      acceptsPrivacy: false,
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact-requests", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        age: data.age,
        treatment: data.treatment,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        message: data.message,
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Consulta enviada!",
        description: "Hemos recibido tu solicitud. Te contactaremos pronto para agendar tu cita.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact-requests"] });
    },
    onError: (error) => {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu consulta. Por favor, intenta de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
      console.error("Error submitting contact form:", error);
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await submitContactForm.mutateAsync(data);
    setIsSubmitting(false);
  };

  const treatments = [
    { value: "facial", label: "Estética Facial" },
    { value: "corporal", label: "Estética Corporal" },
    { value: "cirugia", label: "Cirugía Estética" },
    { value: "nutricion", label: "Nutrición Integral" },
    { value: "wellaging", label: "Well-Aging" },
    { value: "laser", label: "Tecnología Láser" },
  ];

  const timeSlots = [
    { value: "morning", label: "Mañana (9:00-12:00)" },
    { value: "afternoon", label: "Tarde (12:00-17:00)" },
    { value: "evening", label: "Fin de tarde (17:00-19:00)" },
  ];

  const whatsappNumber = "+34971123456";
  const whatsappMessage = "Hola, me gustaría obtener más información sobre los tratamientos de MAC.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Fallback locations data
  const fallbackLocations = [
    {
      id: "1",
      name: "MAC Palma Centro",
      address: "Passeig del Born, 15, 07012 Palma",
      phone: "+34 971 123 456",
      hours: "Lun-Vie: 9:00-19:00 | Sáb: 9:00-14:00",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
    },
    {
      id: "2",
      name: "MAC Puerto Portals",
      address: "Local 45, Puerto Portals, 07181 Calvià",
      phone: "+34 971 654 321",
      hours: "Lun-Vie: 10:00-20:00 | Sáb: 10:00-15:00",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
    }
  ];

  const displayLocations = locations || fallbackLocations;

  return (
    <div className="pt-16 font-body antialiased">
      {/* Hero Section */}
      <section className="py-20 hero-gradient" data-testid="contacto-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
              Contacto
            </div>
            <h1 className="text-5xl lg:text-7xl font-title gold-accent mb-6">
              Reserva tu Consulta
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Da el primer paso hacia tu transformación. Nuestro equipo está listo para diseñar 
              tu plan personalizado con el Método MAC.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-title gold-accent mb-6">
                  Agenda tu consulta gratuita
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Completa el formulario y nos pondremos en contacto contigo para agendar 
                  tu consulta inicial sin costo.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre completo *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Tu nombre completo" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Edad</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="Tu edad"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                data-testid="input-age"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="tu@email.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono *</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+34 600 000 000" 
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="treatment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tratamiento de interés</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-treatment">
                                <SelectValue placeholder="Selecciona un tratamiento" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {treatments.map((treatment) => (
                                <SelectItem key={treatment.value} value={treatment.value}>
                                  {treatment.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Fecha preferida</FormLabel>
                            <FormControl>
                              <Input 
                                type="date" 
                                {...field} 
                                min={new Date().toISOString().split('T')[0]}
                                data-testid="input-date"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hora preferida</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-time">
                                  <SelectValue placeholder="Selecciona horario" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot.value} value={slot.value}>
                                    {slot.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje adicional</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntanos sobre tus objetivos y expectativas..."
                              rows={4}
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="acceptsPrivacy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-privacy"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Acepto la{" "}
                              <a href="#" className="text-turquoise hover:underline">
                                política de privacidad
                              </a>{" "}
                              y el tratamiento de mis datos *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1 bg-turquoise text-white border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300 py-3"
                        data-testid="button-submit-form"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar consulta"}
                      </Button>
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          type="button"
                          className="w-full bg-green-600 text-white hover:bg-green-700 transition-all duration-300 py-3"
                          data-testid="button-whatsapp-direct"
                        >
                          <i className="fab fa-whatsapp mr-2"></i>
                          WhatsApp directo
                        </Button>
                      </a>
                    </div>
                  </form>
                </Form>
              </div>
            </AnimatedSection>

            {/* Why Choose MAC */}
            <AnimatedSection delay={0.2}>
              <div className="bg-pearl rounded-2xl p-8 h-fit">
                <h3 className="text-2xl font-title gold-accent font-semibold mb-6">
                  ¿Por qué elegir MAC?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <UserCheck className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-subtitle font-semibold mb-2">Experiencia Comprobada</h4>
                      <p className="text-muted-foreground text-sm">
                        18+ años de experiencia y más de 10,000 pacientes satisfechos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Heart className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-subtitle font-semibold mb-2">Enfoque Integral</h4>
                      <p className="text-muted-foreground text-sm">
                        Método MAC único que combina estética, bienestar y seguimiento personalizado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Microscope className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-subtitle font-semibold mb-2">Tecnología Avanzada</h4>
                      <p className="text-muted-foreground text-sm">
                        Equipos de última generación para resultados seguros y efectivos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-subtitle font-semibold mb-2">Garantía de Calidad</h4>
                      <p className="text-muted-foreground text-sm">
                        Seguimiento de 12 meses incluido en todos nuestros programas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl">
                  <h4 className="font-subtitle font-semibold mb-3">Consulta gratuita</h4>
                  <p className="text-muted-foreground text-sm">
                    Tu primera consulta es completamente gratuita. Incluye análisis 360°, 
                    diagnóstico personalizado y propuesta de tratamiento sin compromiso.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-beige" data-testid="locations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-title gold-accent mb-6">
                Nuestras Ubicaciones
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Visítanos en cualquiera de nuestras clínicas en Mallorca
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {displayLocations.map((location: any, index: number) => (
              <AnimatedSection key={location.id} delay={index * 0.2}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`location-${index}`}>
                  <img 
                    src={location.imageUrl}
                    alt={location.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-title gold-accent font-semibold mb-6">
                      {location.name}
                    </h3>
                    <div className="space-y-4 text-foreground/80">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-turquoise mr-3 mt-0.5 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-turquoise mr-3 mt-0.5 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-turquoise mr-3 mt-0.5 flex-shrink-0" />
                        <a 
                          href={`tel:${location.phone}`}
                          className="text-turquoise hover:underline"
                          data-testid={`phone-${index}`}
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button 
                        variant="outline"
                        className="w-full border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
                        data-testid={`button-directions-${index}`}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Cómo llegar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white" data-testid="contact-info">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-title gold-accent mb-6">
              Otros medios de contacto
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <h4 className="font-subtitle font-semibold mb-2">Teléfono</h4>
                <p className="text-muted-foreground text-sm mb-2">Llámanos directamente</p>
                <a 
                  href="tel:+34971123456" 
                  className="text-turquoise hover:underline"
                  data-testid="phone-main"
                >
                  +34 971 123 456
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <h4 className="font-subtitle font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground text-sm mb-2">Escríbenos un mensaje</p>
                <a 
                  href="mailto:info@mac-mallorca.com" 
                  className="text-turquoise hover:underline"
                  data-testid="email-main"
                >
                  info@mac-mallorca.com
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fab fa-whatsapp text-white text-2xl"></i>
                </div>
                <h4 className="font-subtitle font-semibold mb-2">WhatsApp</h4>
                <p className="text-muted-foreground text-sm mb-2">Respuesta inmediata</p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                  data-testid="whatsapp-main"
                >
                  Enviar mensaje
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
