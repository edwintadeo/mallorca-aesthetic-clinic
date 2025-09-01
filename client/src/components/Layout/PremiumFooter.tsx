import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Heart,
  Crown
} from 'lucide-react';

export default function PremiumFooter() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsBackToTopVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 relative overflow-hidden">
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-deep/10 via-transparent to-turquoise/10" />
      </div>
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/attached_assets/logo mallorca aesthetic_1756658404427.png" 
                alt="MAC Mallorca Aesthetic Clinic" 
                className="h-12 mb-4"
              />
              <p className="text-luxury-body text-sm leading-relaxed">
                Medicina estética avanzada con visión integral. Transformación visible en 90 días con el Método MAC.
              </p>
            </div>
            
            {/* Social Links Luxury */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="luxury-card p-3 rounded-full text-gray-400 hover:text-[#008578] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Clínica Section */}
          <div>
            <h3 className="text-lg font-luxury-serif text-gold-deep mb-4">Clínica</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#metodo", label: "Método MAC" },
                { href: "#tratamientos", label: "Tratamientos" },
                { href: "#nosotros", label: "Sobre Nosotros" },
                { href: "#ubicaciones", label: "Ubicaciones" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-luxury-body hover:text-[#008578] transition-colors duration-200 luxury-focus"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tratamientos Section */}
          <div>
            <h3 className="text-lg font-luxury-serif text-gold-deep mb-4">Tratamientos</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#", label: "Facial" },
                { href: "#", label: "Corporal" },
                { href: "#", label: "Cirugía" },
                { href: "#", label: "Well-Aging" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-luxury-body hover:text-[#008578] transition-colors duration-200 luxury-focus"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-luxury-serif text-gold-deep mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              {[
                { icon: MapPin, content: "Palma de Mallorca", href: null },
                { icon: Phone, content: "+34 900 XXX XXX", href: "tel:+34900123456" },
                { icon: Mail, content: "concierge@mac.clinic", href: "mailto:concierge@mac.clinic" },
                { icon: Clock, content: "Lun-Vie: 10:00-20:00\nSábado: 10:00-14:00", href: null }
              ].map((item, index) => {
                const Icon = item.icon;
                const content = item.content.split('\n');
                
                return (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon className="h-4 w-4 text-gold-deep mt-0.5 flex-shrink-0" />
                    <div className="text-luxury-body">
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="hover:text-[#008578] transition-colors duration-200 luxury-focus"
                        >
                          {content[0]}
                        </a>
                      ) : (
                        content.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter VIP Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-md luxury-card p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200">
            <div className="flex items-center mb-3">
              <Crown className="h-5 w-5 text-gold-deep mr-2" />
              <h3 className="text-lg font-luxury-serif text-gold-deep">Newsletter VIP</h3>
            </div>
            <p className="text-luxury-body text-sm mb-4">
              Recibe contenido exclusivo y ofertas especiales
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full text-sm font-luxury-sans focus:outline-none focus:ring-2 focus:ring-[#008578] focus:border-transparent transition-all duration-200"
              />
              <button className="luxury-btn px-6 py-3 bg-[#008578] text-white rounded-full text-sm font-luxury-cta hover:bg-[#006b5f] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 MAC Mallorca Aesthetic Clinic. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button Luxury */}
      {isBackToTopVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 luxury-btn bg-[#008578] text-white p-4 rounded-full shadow-luxury hover:bg-[#006b5f] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2 z-50"
          aria-label="Volver arriba"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </footer>
  );
}