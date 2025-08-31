import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import macLogo from "@assets/logo mallorca aesthetic_1756658404427.png";
import macLogoWhite from "@assets/C_1756658464253.png";
import macLogoBlack from "@assets/mac-logo@2x_1756658468399.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    { href: "/carrito", label: "Carrito" },
    { href: "/club", label: "Club MAC" },
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
            <Link href="/contacto">
              <Button 
                className="bg-turquoise-medium text-turquoise border-2 border-gold-light hover:bg-gold-light hover:text-gold-deep transition-all duration-300"
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
                  className="md:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg text-foreground hover:text-turquoise transition-colors ${
                        location === item.href ? "text-turquoise font-medium" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
