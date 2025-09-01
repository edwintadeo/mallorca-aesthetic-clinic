import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function FloatingNavbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/metodo", label: "Método MAC" },
    { href: "/tratamientos", label: "Tratamientos" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/ubicaciones", label: "Ubicaciones" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl backdrop-blur-xl bg-white/90 border border-gold-light/20 rounded-2xl shadow-luxury z-50 transition-all duration-700 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-deep to-gold-light rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">MAC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-title text-gold-deep">Mallorca Aesthetic Clinic</h1>
              <p className="text-xs text-dark-neutral">El Arte de Ganar Tiempo</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium transition-all duration-300 ${
                  location === item.href
                    ? 'text-gold-deep border-b-2 border-gold-deep'
                    : 'text-dark-neutral hover:text-gold-deep'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contacto">
              <button className="px-6 py-2 bg-gradient-to-r from-turquoise to-turquoise-medium text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Consulta Privada
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark-neutral hover:text-gold-deep transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gold-light/20 mt-4 pt-4">
            <div className="flex flex-col space-y-3 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location === item.href
                      ? 'text-gold-deep'
                      : 'text-dark-neutral hover:text-gold-deep'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-turquoise to-turquoise-medium text-white rounded-full text-sm font-medium">
                  Consulta Privada
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}