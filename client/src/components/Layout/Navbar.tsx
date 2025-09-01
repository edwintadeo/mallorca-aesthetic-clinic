import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/UI/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/UI/sheet";
import { Menu, X, ChevronRight, Search } from "lucide-react";
import SearchModal from "@/components/UI/SearchModal";
import macLogo from "@assets/logo mallorca aesthetic_1756658404427.png";
import macLogoWhite from "@assets/C_1756658464253.png";
import macLogoBlack from "@assets/mac-logo@2x_1756658468399.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { href: "/", label: "Inicio", group: "main" },
    { href: "/metodo", label: "Método MAC", group: "services" },
    { href: "/tratamientos", label: "Tratamientos", group: "services" },
    { href: "/nosotros", label: "Nosotros", group: "about" },
    { href: "/ubicaciones", label: "Ubicaciones", group: "about" },
    { href: "/blog", label: "Blog", group: "about" },
    { href: "/contacto", label: "Contacto", group: "contact" },
    { href: "/carrito", label: "Carrito", group: "account" },
    { href: "/club", label: "Club MAC", group: "account" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      } border-b border-border`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img 
              src={macLogo} 
              alt="Mallorca Aesthetic Clinic" 
              className="h-10 w-auto hover-lift"
              data-testid="mac-logo"
            />
            <div className="hidden sm:block ml-3 text-sm text-muted-foreground">
              Mallorca Aesthetic Clinic
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-foreground hover:text-turquoise transition-colors ${
                  location === item.href ? "text-turquoise font-medium" : ""
                }`}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="relative hover:bg-turquoise-light"
              data-testid="search-button"
            >
              <Search className="w-5 h-5 text-muted-foreground hover:text-turquoise" />
              <span className="sr-only">Buscar</span>
            </Button>
            
            <Link href="/contacto">
              <Button 
                className="cta-enhanced text-white hover:text-gold-deep font-medium"
                data-testid="button-cta-reserva"
              >
                Reserva tu cita
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden relative"
                  data-testid="button-mobile-menu"
                  aria-label="Abrir menú de navegación"
                >
                  <Menu className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
                  <X className={`h-6 w-6 absolute transition-transform duration-300 ${isOpen ? '' : 'rotate-90 opacity-0'}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[400px] bg-white border-l border-gold-light/20">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-2xl font-title gold-accent">Menú</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-6">
                  {/* Servicios */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3 px-4">Servicios</h3>
                    <div className="space-y-1">
                      {navItems.filter(item => item.group === 'services').map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group flex items-center justify-between px-4 py-3 rounded-lg text-lg transition-all duration-200 hover:bg-pearl ${
                            location === item.href 
                              ? "bg-pearl text-turquoise font-medium" 
                              : "text-foreground hover:text-turquoise"
                          }`}
                          onClick={() => setIsOpen(false)}
                          data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sobre Nosotros */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3 px-4">Sobre Nosotros</h3>
                    <div className="space-y-1">
                      {navItems.filter(item => item.group === 'about').map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group flex items-center justify-between px-4 py-3 rounded-lg text-lg transition-all duration-200 hover:bg-pearl ${
                            location === item.href 
                              ? "bg-pearl text-turquoise font-medium" 
                              : "text-foreground hover:text-turquoise"
                          }`}
                          onClick={() => setIsOpen(false)}
                          data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mi Cuenta */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3 px-4">Mi Cuenta</h3>
                    <div className="space-y-1">
                      {navItems.filter(item => item.group === 'account').map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group flex items-center justify-between px-4 py-3 rounded-lg text-lg transition-all duration-200 hover:bg-pearl ${
                            location === item.href 
                              ? "bg-pearl text-turquoise font-medium" 
                              : "text-foreground hover:text-turquoise"
                          }`}
                          onClick={() => setIsOpen(false)}
                          data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
                <div className="mt-8 pt-8 border-t border-gold-light/20">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    <Button 
                      className="w-full cta-enhanced text-white hover:text-gold-deep font-medium"
                      size="lg"
                      data-testid="mobile-cta-reserva"
                    >
                      Reserva tu cita
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
