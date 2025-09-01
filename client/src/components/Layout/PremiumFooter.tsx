import { useState } from 'react';
import { Link } from 'wouter';
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
import VIPNewsletter from '@/components/UI/VIPNewsletter';
import MedicalCredentials from '@/components/UI/MedicalCredentials';
import ScrollAnimations from '@/components/UI/ScrollAnimations';
import LuxuryHoverCard from '@/components/UI/LuxuryHoverCard';
import macLogo from '@assets/logo mallorca aesthetic_1756658404427.png';

export default function PremiumFooter() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setIsBackToTopVisible(window.scrollY > 300);
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navigationSections = [
    {
      title: 'Clínica',
      links: [
        { href: '/nosotros', label: 'Sobre Nosotros' },
        { href: '/metodo', label: 'Método MAC' },
        { href: '/instalaciones', label: 'Instalaciones' },
        { href: '/equipo', label: 'Nuestro Equipo' }
      ]
    },
    {
      title: 'Tratamientos',
      links: [
        { href: '/tratamientos/facial', label: 'Facial' },
        { href: '/tratamientos/corporal', label: 'Corporal' },
        { href: '/tratamientos/cirugia', label: 'Cirugía' },
        { href: '/tratamientos/well-aging', label: 'Well-Aging' }
      ]
    },
    {
      title: 'Pacientes',
      links: [
        { href: '/portal-cliente', label: 'Portal Cliente' },
        { href: '/testimonios', label: 'Testimonios' },
        { href: '/faq', label: 'FAQ' },
        { href: '/financiacion', label: 'Financiación' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacidad', label: 'Privacidad' },
        { href: '/terminos', label: 'Términos' },
        { href: '/cookies', label: 'Cookies' },
        { href: '/aviso-legal', label: 'Aviso Legal' }
      ]
    }
  ];

  const socialLinks = [
    { href: 'https://instagram.com/macmallorca', icon: Instagram, label: 'Instagram' },
    { href: 'https://facebook.com/macmallorca', icon: Facebook, label: 'Facebook' },
    { href: 'https://linkedin.com/company/macmallorca', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://youtube.com/macmallorca', icon: Youtube, label: 'YouTube' }
  ];

  return (
    <footer className="premium-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Newsletter Section */}
          <ScrollAnimations animation="fadeIn" delay={100}>
            <div className="footer-newsletter">
              <VIPNewsletter />
            </div>
          </ScrollAnimations>

          {/* Navigation Sections */}
          <div className="footer-navigation">
            {navigationSections.map((section, index) => (
              <ScrollAnimations key={section.title} animation="slideUp" delay={200 + index * 100}>
                <div className="nav-section">
                  <h4 className="nav-title">{section.title}</h4>
                  <ul className="nav-links">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="nav-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimations>
            ))}
          </div>

          {/* Contact Information */}
          <ScrollAnimations animation="fadeIn" delay={600}>
            <div className="footer-contact">
              <div className="contact-header">
                <img src={macLogo} alt="MAC Mallorca" className="footer-logo" />
                <h3 className="contact-title">Mallorca Aesthetic Clinic</h3>
                <p className="contact-subtitle">
                  Excelencia en medicina estética y bienestar integral
                </p>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Ubicación</span>
                    <span className="contact-value">Palma de Mallorca, Islas Baleares</span>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Teléfono</span>
                    <span className="contact-value">+34 900 XXX XXX</span>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">concierge@mac.clinic</span>
                  </div>
                </div>

                <div className="contact-item">
                  <Clock className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Horarios</span>
                    <span className="contact-value">Lun-Vie: 10:00-20:00</span>
                    <span className="contact-value">Sábado: 10:00-14:00</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links">
                {socialLinks.map((social) => (
                  <LuxuryHoverCard key={social.label} className="social-link-wrapper">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                    >
                      <social.icon className="social-icon" />
                    </a>
                  </LuxuryHoverCard>
                ))}
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </div>

      {/* Medical Credentials Section */}
      <div className="footer-credentials">
        <div className="footer-container">
          <MedicalCredentials />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © 2025 MAC Mallorca Aesthetic Clinic. Todos los derechos reservados.
              </p>
              <p className="made-with-love">
                Hecho con <Heart className="heart-icon" /> en Mallorca
              </p>
            </div>

            <div className="footer-badges">
              <div className="badge">
                <span className="badge-text">Certificado Médico</span>
              </div>
              <div className="badge">
                <span className="badge-text">ISO 9001</span>
              </div>
              <div className="badge">
                <span className="badge-text">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isBackToTopVisible && (
        <LuxuryHoverCard className="back-to-top-wrapper">
          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Volver arriba"
          >
            <ArrowUp className="back-to-top-icon" />
          </button>
        </LuxuryHoverCard>
      )}
    </footer>
  );
}
