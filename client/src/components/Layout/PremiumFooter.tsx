import { useState, useEffect } from 'react';
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
  Heart
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
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/attached_assets/logo mallorca aesthetic_1756658404427.png" 
                alt="MAC Mallorca Aesthetic Clinic" 
                className="h-12 mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicina estética avanzada con visión integral. Transformación visible en 90 días con el Método MAC.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#008578] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#008578] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#008578] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#008578] transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Clínica Section */}
          <div>
            <h3 className="text-lg font-serif text-[#A57D24] mb-4">Clínica</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#metodo" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Método MAC</a></li>
              <li><a href="#tratamientos" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Tratamientos</a></li>
              <li><a href="#nosotros" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Sobre Nosotros</a></li>
              <li><a href="#ubicaciones" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Ubicaciones</a></li>
            </ul>
          </div>

          {/* Tratamientos Section */}
          <div>
            <h3 className="text-lg font-serif text-[#A57D24] mb-4">Tratamientos</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Facial</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Corporal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Cirugía</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">Well-Aging</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-serif text-[#A57D24] mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Palma de Mallorca</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a href="tel:+34900123456" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">
                  +34 900 XXX XXX
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a href="mailto:concierge@mac.clinic" className="text-gray-600 hover:text-[#008578] transition-colors duration-200">
                  concierge@mac.clinic
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600">
                  <div>Lun-Vie: 10:00-20:00</div>
                  <div>Sábado: 10:00-14:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-md">
            <h3 className="text-lg font-serif text-[#A57D24] mb-2">Newsletter VIP</h3>
            <p className="text-sm text-gray-600 mb-4">
              Recibe contenido exclusivo y ofertas especiales
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#008578] focus:border-transparent"
              />
              <button className="px-6 py-2 bg-[#008578] text-white rounded-full text-sm font-medium hover:bg-[#006b5f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2">
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

      {/* Back to Top Button */}
      {isBackToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#008578] text-white p-3 rounded-full shadow-lg hover:bg-[#006b5f] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2 z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}