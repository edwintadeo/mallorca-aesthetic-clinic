import { Helmet } from "react-helmet-async";
import LuxuryCinematicHero from "../components/UI/LuxuryCinematicHero";
import LuxuryFloatingNavbar from "../components/Layout/LuxuryFloatingNavbar";
import MethodTimeline from "../components/UI/MethodTimeline";
import BeforeAfterSlider from "../components/UI/BeforeAfterSlider";
import LocationCards from "../components/UI/LocationCards";
import PremiumFooter from "../components/Layout/PremiumFooter";

export default function Home() {
  return (
    <div className="font-body antialiased">
      <Helmet>
        <title>Mallorca Aesthetic Clinic | Medicina estética avanzada con visión integral</title>
        <meta
          name="description"
          content="Clínica de medicina estética avanzada en Mallorca. Transformación visible en 90 días con el Método MAC. Consultas en Palma, Cala Millor y Manacor."
        />
        <meta property="og:title" content="Mallorca Aesthetic Clinic - El Arte de Ganar Tiempo" />
        <meta property="og:description" content="Medicina estética integral con seguimiento de 12 meses. Dra. Liliana Ocampo, 18+ años de experiencia." />
      </Helmet>

      {/* Luxury Floating Navigation */}
      <LuxuryFloatingNavbar />

      {/* Luxury Cinematic Hero */}
      <LuxuryCinematicHero
        title="El Arte de Ganar Tiempo"
        subtitle="Medicina estética integral con seguimiento de 12 meses. Transformación visible en 90 días con el Método MAC."
        ctaText="Reserva tu Consulta Privada"
        ctaLink="#contacto"
        videoSrc="/attached_assets/amanecer mallorca_1756709416796.mp4"
        posterSrc="/attached_assets/perfect-skin-portrait.jpg"
        fallbackSrc="/attached_assets/vecteezy_seagull-and-boats-on-a-turquoise-sea_1627124_1756709450734.mp4"
      />

      {/* Method Timeline Section */}
      <section id="metodo" className="section-spacing">
        <MethodTimeline />
      </section>

      {/* Testimonials with Before/After */}
      <section id="testimonios" className="section-spacing bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#A57D24] mb-4">
              Resultados Reales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre las transformaciones auténticas de nuestros pacientes con el Método MAC
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <BeforeAfterSlider
              beforeImage="/attached_assets/image_1756654672314.png"
              afterImage="/attached_assets/image_1756654707673.png"
              treatment="Rejuvenecimiento Facial Integral"
              duration="3 sesiones • 90 días"
              doctor="Dra. Liliana Ocampo"
            />
            
            <BeforeAfterSlider
              beforeImage="/attached_assets/mascarilla verde_1756671415152.jpg"
              afterImage="/attached_assets/perfect-skin-portrait.jpg"
              treatment="Tratamiento Corporal"
              duration="6 sesiones • 120 días"
              doctor="Dra. Liliana Ocampo"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Más de 10,000 pacientes han experimentado transformaciones auténticas con el Método MAC
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-[#008578] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            >
              Ver Más Resultados
            </a>
          </div>
        </div>
      </section>

      {/* Location Cards Section */}
      <section id="ubicaciones" className="section-spacing">
        <LocationCards />
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#A57D24] mb-4">
            Comienza tu Transformación
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva tu consulta de diagnóstico 360° y descubre cómo el Método MAC puede transformar tu apariencia
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-serif text-[#A57D24] mb-2">Consulta Inicial</h3>
              <p className="text-gray-600 text-sm">Evaluación completa y plan personalizado</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-serif text-[#A57D24] mb-2">Seguimiento 12 Meses</h3>
              <p className="text-gray-600 text-sm">Acompañamiento continuo garantizado</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-serif text-[#A57D24] mb-2">Resultados Garantizados</h3>
              <p className="text-gray-600 text-sm">Transformación visible en 90 días</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34900123456"
              className="inline-flex items-center rounded-full bg-[#008578] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/34900123456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#008578] px-8 py-3 text-[#008578] font-medium transition-all duration-300 hover:bg-[#008578] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <PremiumFooter />
    </div>
  );
}