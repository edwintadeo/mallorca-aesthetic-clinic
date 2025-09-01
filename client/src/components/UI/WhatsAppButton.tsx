import { MessageCircle } from "lucide-react";
import { Button } from "@/components/UI/button";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+34971123456"; // Número de teléfono de MAC
    const message = "Hola, me interesa conocer más sobre el Método MAC. ¿Podrían proporcionarme información?";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 lg:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 lg:p-4 shadow-lg hover-lift button-premium opacity-90 hover:opacity-100 transition-opacity"
      size="lg"
      data-testid="whatsapp-button"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  );
}