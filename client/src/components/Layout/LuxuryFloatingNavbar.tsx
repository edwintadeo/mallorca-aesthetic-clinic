import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';

interface LuxuryFloatingNavbarProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    submenu?: Array<{ label: string; href: string }>;
  }>;
  ctaText?: string;
  ctaLink?: string;
}

export default function LuxuryFloatingNavbar({
  logo = "/attached_assets/logo mallorca aesthetic_1756658404427.png",
  menuItems = [
    { label: "Método MAC", href: "#metodo" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Ubicaciones", href: "#ubicaciones" },
    { label: "Contacto", href: "#contacto" }
  ],
  ctaText = "Consulta Privada",
  ctaLink = "#contacto"
}: LuxuryFloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isShimmerActive, setIsShimmerActive] = useState(false);

  // Detectar scroll para cambiar altura del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto shimmer periódico
  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      setIsShimmerActive(true);
      setTimeout(() => setIsShimmerActive(false), 2000);
    }, 10000);

    return () => clearInterval(shimmerInterval);
  }, []);

  // Cerrar menú móvil con Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative backdrop-blur-xl bg-white/70 border border-[rgba(203,166,76,0.25)] rounded-2xl shadow-luxury overflow-hidden">
          {/* Shimmer Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(165,125,36,0.1)] to-transparent transform -skew-x-12 transition-opacity duration-1000 ${
            isShimmerActive ? 'opacity-100 animate-shimmer' : 'opacity-0'
          }`} />
          
          <div className={`relative flex items-center justify-between px-8 transition-all duration-700 ${
            isScrolled ? 'py-3' : 'py-4'
          }`}>
            {/* Logo con transición */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a href="/" className="block">
                <img 
                  src={logo} 
                  alt="MAC Mallorca Aesthetic Clinic" 
                  className={`transition-all duration-700 ${
                    isScrolled ? 'h-8' : 'h-10'
                  }`}
                />
              </a>
            </motion.div>

            {/* Menú central */}
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-luxury-sans font-medium text-gray-700 hover:text-[#A57D24] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2 rounded-sm px-2 py-1 group"
                  onMouseEnter={() => setActiveItem(item.label)}
                  onMouseLeave={() => setActiveItem(null)}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Subrayado dorado animado */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A57D24] to-[#D4AF37]"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeItem === item.label ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Efecto shimmer en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(165,125,36,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.a>
              ))}
            </div>

            {/* CTA Premium con shimmer */}
            <div className="hidden md:flex items-center">
              <motion.a
                href={ctaLink}
                className="relative px-6 py-3 bg-[#008578] text-white text-sm font-luxury-cta rounded-full overflow-hidden transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{ctaText}</span>
                
                {/* Efecto shimmer en el botón */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Abrir menú"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-[rgba(203,166,76,0.25)] rounded-2xl shadow-luxury z-50 md:hidden overflow-hidden"
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Shimmer effect en menú móvil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(165,125,36,0.1)] to-transparent animate-shimmer" />
              
              <div className="relative px-6 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block text-lg font-luxury-sans font-medium text-gray-700 hover:text-[#A57D24] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2 rounded-sm px-2 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  className="pt-4 border-t border-gray-200"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
                >
                  <a
                    href={ctaLink}
                    className="block w-full text-center rounded-full bg-[#008578] px-6 py-3 text-white font-luxury-cta transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {ctaText}
                  </a>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  className="pt-4 space-y-2 text-sm text-gray-600"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: (menuItems.length + 1) * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+34 900 XXX XXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Palma de Mallorca</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer para el navbar flotante */}
      <div className={`transition-all duration-700 ${isScrolled ? 'h-20' : 'h-24'}`} />
    </>
  );
}
