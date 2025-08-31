import { Link } from "wouter";
import macLogo from "@assets/logo mallorca aesthetic_1756658404427.png";
import macLogoWhite from "@assets/C_1756658464253.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src={macLogoWhite} 
              alt="Mallorca Aesthetic Clinic" 
              className="h-12 w-auto mb-4 hover-lift"
              data-testid="footer-mac-logo"
            />
            <div className="text-sm text-background/70 mb-4">Mallorca Aesthetic Clinic</div>
            <p className="text-background/80 leading-relaxed mb-6">
              El arte de ganar tiempo a través de la medicina estética integral y el bienestar personalizado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-turquoise rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                data-testid="link-social-instagram"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-turquoise rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                data-testid="link-social-facebook"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-turquoise rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                data-testid="link-social-linkedin"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-subtitle font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link href="/" className="hover:text-champagne transition-colors" data-testid="footer-link-inicio">Inicio</Link></li>
              <li><Link href="/metodo" className="hover:text-champagne transition-colors" data-testid="footer-link-metodo">Método MAC</Link></li>
              <li><Link href="/tratamientos" className="hover:text-champagne transition-colors" data-testid="footer-link-tratamientos">Tratamientos</Link></li>
              <li><Link href="/nosotros" className="hover:text-champagne transition-colors" data-testid="footer-link-nosotros">Nosotros</Link></li>
              <li><Link href="/ubicaciones" className="hover:text-champagne transition-colors" data-testid="footer-link-ubicaciones">Ubicaciones</Link></li>
              <li><Link href="/blog" className="hover:text-champagne transition-colors" data-testid="footer-link-blog">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-champagne transition-colors" data-testid="footer-link-contacto">Contacto</Link></li>
              <li><Link href="/club" className="hover:text-champagne transition-colors" data-testid="footer-link-club">Club MAC</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-subtitle font-semibold mb-4">Tratamientos</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-champagne transition-colors" data-testid="footer-link-facial">Estética Facial</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors" data-testid="footer-link-corporal">Estética Corporal</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors" data-testid="footer-link-cirugia">Cirugía Estética</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors" data-testid="footer-link-nutricion">Nutrición Integral</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors" data-testid="footer-link-wellaging">Well-Aging</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors" data-testid="footer-link-laser">Tecnología Láser</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-subtitle font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-background/80">
              <div>
                <div className="font-medium text-background">MAC Palma Centro</div>
                <div className="text-sm">Pg. del Born 15, Centre</div>
                <div className="text-sm">+34 660 938 585</div>
              </div>
              <div>
                <div className="font-medium text-background">MAC Cala Millor</div>
                <div className="text-sm">Carrer Sol Naixent, 24</div>
                <div className="text-sm">+34 638 617 650</div>
              </div>
              <div>
                <div className="font-medium text-background">MAC Manacor</div>
                <div className="text-sm">Rafa Nadal Club</div>
                <div className="text-sm">+34 619 392 675</div>
              </div>
              <div className="mt-4">
                <a 
                  href="mailto:mallorcaaestheticc@gmail.com" 
                  className="text-champagne hover:underline"
                  data-testid="link-email"
                >
                  mallorcaaestheticc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm">
            © 2024 Mallorca Aesthetic Clinic. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-background/60">
            <Link href="/aviso-legal" className="hover:text-champagne transition-colors" data-testid="footer-link-legal">Aviso Legal</Link>
            <Link href="/politica-privacidad" className="hover:text-champagne transition-colors" data-testid="footer-link-privacy">Política de Privacidad</Link>
            <Link href="/cookies" className="hover:text-champagne transition-colors" data-testid="footer-link-cookies">Cookies</Link>
            <Link href="/pagos" className="hover:text-champagne transition-colors" data-testid="footer-link-pagos">Pagos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
