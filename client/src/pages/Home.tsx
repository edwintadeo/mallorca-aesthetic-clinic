import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FloatingNavbar from "@/components/Layout/FloatingNavbar";
import CinematicHero from "@/components/UI/CinematicHero";
import InteractiveMethodTimeline from "@/components/UI/InteractiveMethodTimeline";
import VerifiedTestimonialsSection from "@/components/UI/VerifiedTestimonialsSection";
import BeforeAfterSlider from "@/components/UI/BeforeAfterSlider";
import PremiumFooter from "@/components/Layout/PremiumFooter";
import FloatingActionButtons from "@/components/UI/FloatingActionButtons";
import LuxuryMobileMenu from "@/components/UI/LuxuryMobileMenu";
import MobileOptimizations from "@/components/UI/MobileOptimizations";
import PerformanceMonitor from "@/components/UI/PerformanceMonitor";
import ServiceWorkerManager from "@/components/UI/ServiceWorkerManager";
import CriticalCSS from "@/components/UI/CriticalCSS";

export default function Home() {
  const [isQuickBookingOpen, setIsQuickBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MobileOptimizations>
      <div className="font-body antialiased performance-optimized">
      <Helmet>
        <title>Mallorca Aesthetic Clinic | Medicina estética avanzada con visión integral</title>
        <meta
          name="description"
          content="Clínica de medicina estética avanzada en Mallorca. Transformación visible en 90 días con el Método MAC. Consultas en Palma, Cala Millor y Manacor."
        />
        <meta property="og:title" content="Mallorca Aesthetic Clinic - El Arte de Ganar Tiempo" />
        <meta property="og:description" content="Medicina estética integral con seguimiento de 12 meses. Dra. Liliana Ocampo, 18+ años de experiencia." />
      </Helmet>
        
        {/* Performance Components */}
        <CriticalCSS />
        <PerformanceMonitor />
        <ServiceWorkerManager />
        
        {/* Floating Navigation */}
        <FloatingNavbar />
        
        {/* Cinematic Hero Section */}
        <CinematicHero onQuickBookingOpen={() => setIsQuickBookingOpen(true)} />

        {/* Interactive Method Timeline */}
        <section className="section-spacing bg-gradient-to-b from-pearl to-white">
          <InteractiveMethodTimeline />
      </section>

        {/* Verified Testimonials Section */}
        <section className="section-spacing bg-white">
          <VerifiedTestimonialsSection />
      </section>

        {/* Before/After Results Section */}
        <section className="section-spacing bg-gradient-to-b from-white to-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl title-luxury text-gold-deep mb-6">
                Resultados Reales
              </h2>
              <p className="text-xl body-refined text-dark-neutral max-w-3xl mx-auto">
                Descubre las transformaciones reales de nuestros pacientes con el Método MAC
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage="/attached_assets/image_1756654672314.png"
                afterImage="/attached_assets/image_1756654707673.png"
                treatment="Rejuvenecimiento Facial Integral"
                duration="3 sesiones • 90 días"
                doctor="Dra. Liliana Ocampo"
              />
            </div>
            
            {/* Additional Results */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <BeforeAfterSlider
                beforeImage="/attached_assets/image_1756654672314.png"
                afterImage="/attached_assets/image_1756654707673.png"
                treatment="Tratamiento Corporal"
                duration="6 sesiones • 120 días"
                doctor="Dra. Liliana Ocampo"
              />
              <BeforeAfterSlider
                beforeImage="/attached_assets/image_1756654672314.png"
                afterImage="/attached_assets/image_1756654707673.png"
                treatment="Well-Aging Integral"
                duration="4 sesiones • 100 días"
                doctor="Dra. Liliana Ocampo"
              />
            </div>
        </div>
      </section>

        {/* Premium Footer */}
        <PremiumFooter />
        
        {/* Floating Action Buttons */}
        <FloatingActionButtons />
        
        {/* Luxury Mobile Menu */}
        <LuxuryMobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
    </MobileOptimizations>
  );
}