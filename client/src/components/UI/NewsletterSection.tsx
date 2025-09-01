import { useState } from "react";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Mail, Star, Heart } from "lucide-react";
import AnimatedSection from "@/components/UI/AnimatedSection";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se conectaría con la API para el newsletter
    console.log("Newsletter subscription:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pearl to-beige relative z-[1]" data-testid="newsletter-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-gold-deep">
              <Star className="w-6 h-6 fill-current" />
              <Heart className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl title-luxury gold-accent-prominent mb-6">
            Club MAC Exclusivo
          </h2>
          
          <p className="text-xl text-white mb-8 body-refined max-w-3xl mx-auto text-shadow-dark">
            Únete a nuestra comunidad premium y recibe contenido exclusivo sobre medicina estética, well-aging, 
            eventos especiales y acceso anticipado a nuevos tratamientos del Método MAC.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-gold-light/30 hover-lift">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Tu email para acceso exclusivo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-lg border-gold-light focus:border-turquoise"
                      data-testid="newsletter-email-input"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-turquoise text-white hover:bg-gold-light hover:text-gold-deep button-premium px-8 py-3 text-lg"
                    data-testid="newsletter-submit-button"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Unirme al Club
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="text-green-600 mb-4">
                  <Heart className="w-12 h-12 mx-auto fill-current" />
                </div>
                <h3 className="text-2xl title-luxury text-gold-deep mb-2">¡Bienvenido al Club MAC!</h3>
                <p className="text-dark-neutral">
                  Pronto recibirás contenido exclusivo y acceso prioritario a nuestros tratamientos.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-turquoise mb-2">
                <Mail className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-gold-deep mb-1">Contenido Exclusivo</h4>
              <p className="text-sm text-white text-shadow-light">Artículos y tips de medicina estética</p>
            </div>
            <div className="text-center">
              <div className="text-turquoise mb-2">
                <Star className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-gold-deep mb-1">Eventos VIP</h4>
              <p className="text-sm text-white text-shadow-light">Acceso prioritario a masterclasses</p>
            </div>
            <div className="text-center">
              <div className="text-turquoise mb-2">
                <Heart className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-gold-deep mb-1">Ofertas Especiales</h4>
              <p className="text-sm text-white text-shadow-light">Descuentos exclusivos en tratamientos</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}