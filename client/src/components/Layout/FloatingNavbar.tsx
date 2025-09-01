import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/UI/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/UI/sheet";
import { Menu, X, ChevronRight, Search } from "lucide-react";
import SearchModal from "@/components/UI/SearchModal";
import macLogo from "@assets/logo mallorca aesthetic_1756658404427.png";

export default function FloatingNavbar() {
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
    <>
      {/* Floating Navigation */}
      <nav 
        className={`floating-nav ${isScrolled ? 'scrolled' : ''}`}
        data-testid="floating-navbar"
      >
        <div className="floating-nav-content">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img 
              src={macLogo} 
              alt="Mallorca Aesthetic Clinic" 
              className="floating-nav-logo hover-lift"
              data-testid="mac-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex floating-nav-menu">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`floating-nav-item ${
                  location === item.href ? "text-gold-deep" : ""
                }`}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
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
              <a className="floating-nav-cta" data-testid="button-cta-reserva">
                Consulta Privada
              </a>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden relative"
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
                      Consulta Privada
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
