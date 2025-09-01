import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { X, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import LuxuryHoverCard from './LuxuryHoverCard';
import ScrollAnimations from './ScrollAnimations';
import MorphingButton from './MorphingButton';

interface LuxuryMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function LuxuryMobileMenu({ isOpen, onClose, className = '' }: LuxuryMobileMenuProps) {
  const [location] = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    {
      label: 'Inicio',
      href: '/',
      icon: '🏠'
    },
    {
      label: 'Método MAC',
      href: '/metodo',
      icon: '✨',
      submenu: [
        { label: 'Diagnóstico 360°', href: '/metodo/diagnostico' },
        { label: 'Plan Personalizado', href: '/metodo/plan' },
        { label: 'Acción Integrada', href: '/metodo/accion' },
        { label: 'Seguimiento', href: '/metodo/seguimiento' }
      ]
    },
    {
      label: 'Tratamientos',
      href: '/tratamientos',
      icon: '💎',
      submenu: [
        { label: 'Facial', href: '/tratamientos/facial' },
        { label: 'Corporal', href: '/tratamientos/corporal' },
        { label: 'Well-Aging', href: '/tratamientos/well-aging' },
        { label: 'Cirugía', href: '/tratamientos/cirugia' }
      ]
    },
    {
      label: 'Nosotros',
      href: '/nosotros',
      icon: '👥'
    },
    {
      label: 'Ubicaciones',
      href: '/ubicaciones',
      icon: '📍'
    },
    {
      label: 'Blog',
      href: '/blog',
      icon: '📝'
    },
    {
      label: 'Contacto',
      href: '/contacto',
      icon: '📞'
    }
  ];

  const handleItemClick = (href: string) => {
    onClose();
    setActiveSubmenu(null);
  };

  const handleSubmenuToggle = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const handleCall = () => {
    window.open('tel:+34971763787', '_self');
    onClose();
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/34620449271?text=Hola, me interesa conocer más sobre los tratamientos de MAC', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`luxury-mobile-menu ${className}`}>
      {/* Backdrop */}
      <div 
        className="mobile-menu-backdrop"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="mobile-menu-content">
        {/* Header */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <span className="logo-text">MAC</span>
            <span className="logo-subtitle">Mallorca Aesthetic Clinic</span>
          </div>
          <button
            onClick={onClose}
            className="mobile-menu-close"
            aria-label="Cerrar menú"
          >
            <X className="close-icon" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobile-menu-nav">
          {menuItems.map((item, index) => (
            <ScrollAnimations
              key={item.label}
              animation="slideLeft"
              delay={index * 100}
            >
              <div className="mobile-menu-item">
                {item.submenu ? (
                  <button
                    onClick={() => handleSubmenuToggle(item.label)}
                    className={`mobile-menu-link ${activeSubmenu === item.label ? 'active' : ''}`}
                  >
                    <span className="menu-item-icon">{item.icon}</span>
                    <span className="menu-item-label">{item.label}</span>
                    <ChevronRight className={`menu-item-arrow ${activeSubmenu === item.label ? 'rotated' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleItemClick(item.href)}
                    className={`mobile-menu-link ${location === item.href ? 'current' : ''}`}
                  >
                    <span className="menu-item-icon">{item.icon}</span>
                    <span className="menu-item-label">{item.label}</span>
                  </Link>
                )}

                {/* Submenu */}
                {item.submenu && (
                  <div className={`mobile-submenu ${activeSubmenu === item.label ? 'open' : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <ScrollAnimations
                        key={subItem.label}
                        animation="fadeIn"
                        delay={subIndex * 50}
                      >
                        <Link
                          href={subItem.href}
                          onClick={() => handleItemClick(subItem.href)}
                          className="mobile-submenu-link"
                        >
                          {subItem.label}
                        </Link>
                      </ScrollAnimations>
                    ))}
                  </div>
                )}
              </div>
            </ScrollAnimations>
          ))}
        </nav>

        {/* Contact Actions */}
        <div className="mobile-menu-actions">
          <ScrollAnimations animation="fadeIn" delay={800}>
            <div className="mobile-contact-buttons">
              <LuxuryHoverCard className="mobile-contact-button">
                <button
                  onClick={handleCall}
                  className="contact-button-content call"
                >
                  <Phone className="contact-button-icon" />
                  <span>Llamar</span>
                </button>
              </LuxuryHoverCard>

              <LuxuryHoverCard className="mobile-contact-button">
                <button
                  onClick={handleWhatsApp}
                  className="contact-button-content whatsapp"
                >
                  <MessageCircle className="contact-button-icon" />
                  <span>WhatsApp</span>
                </button>
              </LuxuryHoverCard>
            </div>
          </ScrollAnimations>

          <ScrollAnimations animation="fadeIn" delay={900}>
            <div className="mobile-cta-section">
              <MorphingButton
                variant="luxury"
                size="lg"
                onClick={() => handleItemClick('/contacto')}
                className="mobile-cta-button"
              >
                Reserva tu Consulta
              </MorphingButton>
            </div>
          </ScrollAnimations>
        </div>

        {/* Footer */}
        <div className="mobile-menu-footer">
          <ScrollAnimations animation="fadeIn" delay={1000}>
            <div className="mobile-menu-info">
              <p className="mobile-menu-phone">+34 971 76 37 87</p>
              <p className="mobile-menu-email">concierge@mac.clinic</p>
              <p className="mobile-menu-hours">Lun-Vie: 10:00-20:00</p>
            </div>
          </ScrollAnimations>
        </div>
      </div>
    </div>
  );
}
