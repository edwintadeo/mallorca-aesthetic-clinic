import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CalendarDays, Clock, CheckCircle } from "lucide-react";

const quickBookingSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Debe ser un email válido"),
  phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
  preferredTime: z.string().optional(),
  message: z.string().max(500, "El mensaje es demasiado largo").optional(),
});

type QuickBookingData = z.infer<typeof quickBookingSchema>;

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickBookingModal({ isOpen, onClose }: QuickBookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuickBookingData>({
    resolver: zodResolver(quickBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredTime: "",
      message: "",
    },
  });

  const submitBooking = useMutation({
    mutationFn: (data: QuickBookingData) => apiRequest("POST", "/api/quick-booking", data),
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos en menos de 24 horas para confirmar tu cita.",
      });
    },
    onError: () => {
      toast({
        title: "Error al enviar",
        description: "Por favor intenta nuevamente o llámanos directamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: QuickBookingData) => {
    await submitBooking.mutateAsync(data);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    form.reset();
    onClose();
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-pearl/95 backdrop-blur-md border-gold-light/20">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-title gold-accent mb-2">¡Perfecto!</h3>
            <p className="text-text-medium mb-6">
              Tu solicitud de consulta ha sido enviada. Nuestro equipo te contactará en menos de 24 horas para coordinar tu cita personalizada.
            </p>
            <Button 
              onClick={handleClose}
              className="cta-enhanced bg-turquoise hover:bg-turquoise-medium text-white px-8"
            >
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-pearl/95 backdrop-blur-md border-gold-light/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-title gold-accent text-center">
            Reserva tu Consulta Personalizada
          </DialogTitle>
          <p className="text-text-medium text-center text-sm">
            Completa estos datos y te contactaremos en menos de 24 horas
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    Nombre completo *
                    {fieldState.isDirty && !fieldState.error && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Tu nombre completo" 
                      {...field}
                      className={fieldState.error ? "border-red-500" : fieldState.isDirty && !fieldState.error ? "border-green-500" : ""}
                      data-testid="quick-booking-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      Email *
                      {fieldState.isDirty && !fieldState.error && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="tu@email.com" 
                        {...field}
                        className={fieldState.error ? "border-red-500" : fieldState.isDirty && !fieldState.error ? "border-green-500" : ""}
                        data-testid="quick-booking-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      Teléfono *
                      {fieldState.isDirty && !fieldState.error && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="tel"
                        placeholder="+34 600 000 000" 
                        {...field}
                        className={fieldState.error ? "border-red-500" : fieldState.isDirty && !fieldState.error ? "border-green-500" : ""}
                        data-testid="quick-booking-phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Horario preferido
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ej: Mañanas, Tardes, Fines de semana..." 
                      {...field}
                      data-testid="quick-booking-time"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿En qué podemos ayudarte?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Cuéntanos brevemente qué tratamiento te interesa o qué objetivos tienes..." 
                      className="min-h-[80px]"
                      {...field}
                      data-testid="quick-booking-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClose}
                className="flex-1 border-gold-light/30 hover:bg-pearl/50"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={submitBooking.isPending}
                className="flex-1 cta-enhanced bg-turquoise hover:bg-turquoise-medium text-white"
                data-testid="quick-booking-submit"
              >
                {submitBooking.isPending ? "Enviando..." : (
                  <>
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Solicitar Cita
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>

        <div className="text-xs text-text-medium text-center pt-2 border-t border-gold-light/20">
          <p>Al enviar este formulario, aceptas que contactemos contigo para coordinar tu cita.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}