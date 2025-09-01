import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';

interface PremiumNavbarProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    submenu?: Array<{ label: string; href: string }>;
  }>;
  ctaText?: string;
  ctaLink?: string;
}

export default function PremiumNavbar({
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
}: PremiumNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Detectar scroll para cambiar altura del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/65 border-b border-[rgba(203,166,76,0.25)] transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/" className="block">
              <img 
                src={logo} 
                alt="MAC Mallorca Aesthetic Clinic" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-10'
                }`}
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 hover:text-[#A57D24] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2 rounded-sm px-2 py-1"
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                {/* Indicador activo */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#A57D24]"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: activeItem === item.label ? 1 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href={ctaLink}
              className="rounded-full bg-[#008578] px-6 py-2 text-white text-sm font-medium transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2"
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
              className="mobile-menu-container fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[rgba(203,166,76,0.25)] z-50 md:hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="px-6 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block text-lg font-medium text-gray-700 hover:text-[#A57D24] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2 rounded-sm px-2 py-2"
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
                    className="block w-full text-center rounded-full bg-[#008578] px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
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

      {/* Spacer para el navbar fijo */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`} />
    </>
  );
}
