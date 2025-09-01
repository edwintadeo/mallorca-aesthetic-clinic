import { Helmet } from "react-helmet-async";
import BeforeAfterSlider from "@/components/UI/BeforeAfterSlider";
import ResultsGallery from "@/components/UI/ResultsGallery";

// Import images
import facialMaskTreatment from "@assets/mascarilla verde_1756671415152.jpg";
import perfectSkinPortrait from "@assets/perfect-skin-portrait.jpg";
import whiteFacialMask from "@assets/vecteezy_woman-face-cream-cosmetic-facial-clean-white-mask_57524870_1756656595240.jpg";
import spaDeviceTreatment from "@assets/laser piel_1756671407999.jpg";
import pearlMask from "@assets/mascarilla perla_1756671424839.jpg";
import beautyModel from "@assets/vecteezy_beautiful-perfect-skin-gorgeous-young-woman-portrait-in-studio_5085914_1756656467762.jpg";

export default function Results() {
  // Mock data for results gallery
  const resultsData = [
    {
      id: '1',
      beforeImage: facialMaskTreatment,
      afterImage: perfectSkinPortrait,
      treatment: 'Rejuvenecimiento Facial Integral',
      timeframe: '90 días',
      doctor: 'Liliana Ocampo',
      patient: 'Carmen M.',
      age: 47,
      improvement: 'Visible',
      category: 'facial' as const
    },
    {
      id: '2',
      beforeImage: whiteFacialMask,
      afterImage: spaDeviceTreatment,
      treatment: 'Well-Aging Corporal',
      timeframe: '120 días',
      doctor: 'Liliana Ocampo',
      patient: 'Isabel R.',
      age: 52,
      improvement: 'Excelente',
      category: 'well-aging' as const
    },
    {
      id: '3',
      beforeImage: pearlMask,
      afterImage: beautyModel,
      treatment: 'Método MAC Completo',
      timeframe: '180 días',
      doctor: 'Liliana Ocampo',
      patient: 'María S.',
      age: 39,
      improvement: 'Excepcional',
      category: 'facial' as const
    },
    {
      id: '4',
      beforeImage: facialMaskTreatment,
      afterImage: perfectSkinPortrait,
      treatment: 'Tratamiento Anti-Edad',
      timeframe: '60 días',
      doctor: 'Liliana Ocampo',
      patient: 'Ana L.',
      age: 45,
      improvement: 'Muy buena',
      category: 'well-aging' as const
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resultados - Mallorca Aesthetic Clinic</title>
        <meta name="description" content="Descubre los resultados reales de nuestros tratamientos de medicina estética. Transformaciones documentadas con el Método MAC." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-pearl to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-pearl/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="text-sm uppercase tracking-wider text-turquoise font-medium mb-4">
                Transformaciones Reales
              </div>
              <h1 className="text-4xl lg:text-6xl title-luxury text-gold-deep mb-6">
                Resultados Documentados
              </h1>
              <p className="text-xl text-dark-neutral max-w-3xl mx-auto body-refined">
                Casos reales de pacientes que han experimentado el Método MAC. 
                Resultados verificados y documentados por nuestro equipo médico.
              </p>
            </div>
          </div>
        </section>

        {/* Individual Slider Demo */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl title-luxury text-gold-deep mb-4">
                Slider Interactivo
              </h2>
              <p className="text-lg text-dark-neutral body-refined">
                Arrastra el slider para comparar antes y después
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={facialMaskTreatment}
              afterImage={perfectSkinPortrait}
              beforeLabel="Antes"
              afterLabel="Después"
              treatment="Rejuvenecimiento Facial Integral"
              timeframe="90 días"
              doctor="Liliana Ocampo"
            />
          </div>
        </section>

        {/* Results Gallery */}
        <section className="py-16">
          <ResultsGallery results={resultsData} />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-turquoise to-turquoise/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl title-luxury text-white mb-6">
              ¿Lista para tu Transformación?
            </h2>
            <p className="text-xl text-white/90 mb-8 body-refined">
              Únete a miles de pacientes que han confiado en el Método MAC
            </p>
            <button className="px-8 py-4 bg-gold-deep text-white rounded-full font-medium hover:bg-gold-medium transition-colors duration-300">
              Reserva tu Consulta Personalizada
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
