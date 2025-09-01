import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FloatingNavbar from "../components/Layout/FloatingNavbar";

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

      {/* Floating Navigation */}
      <FloatingNavbar />

      {/* Hero Section Simplificada */}
      <section className="relative h-[100vh] overflow-hidden bg-gradient-to-b from-pearl to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-[20vh] text-center">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight text-white drop-shadow-lg">
            El Arte de Ganar Tiempo
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Medicina estética avanzada con visión integral. Transformación visible en 90 días.
          </p>
          <a
            href="/contacto"
            className="mt-8 inline-flex rounded-full bg-turquoise px-8 py-3 text-white hover:bg-turquoise/90 transition-colors"
          >
            Reserva tu Consulta Personalizada
          </a>
        </div>
      </section>

      {/* Método MAC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-gold-deep mb-6">
              Método MAC
            </h2>
            <p className="text-xl text-dark-neutral max-w-3xl mx-auto">
              Nuestro protocolo de cuatro fases garantiza resultados excepcionales 
              mediante un enfoque científico y personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Diagnóstico 360°",
                description: "Mapeo facial y corporal 3D, análisis avanzado con IA y evaluación integral."
              },
              {
                number: "02",
                title: "Plan Personalizado",
                description: "Análisis sanguíneo de precisión y estudio de nutrigenética personalizada."
              },
              {
                number: "03",
                title: "Acción Integrada",
                description: "Fusión de medicina estética, preventiva y técnicas de bienestar integrado."
              },
              {
                number: "04",
                title: "Seguimiento Estratégico",
                description: "Sistema de evaluación progresiva y ajustes preventivos estratégicos."
              }
            ].map((phase) => (
              <div
                key={phase.number}
                className="text-center p-6 rounded-2xl border border-gold-light/20 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-serif text-gold-deep mb-4">
                  {phase.number}
                </div>
                <h3 className="text-xl font-semibold text-dark-neutral mb-3">
                  {phase.title}
                </h3>
                <p className="text-dark-neutral/80">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-gold-deep mb-6">
              Testimonios & Resultados
            </h2>
            <p className="text-xl text-dark-neutral max-w-3xl mx-auto">
              Más de 10,000 pacientes han experimentado transformaciones auténticas con el Método MAC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carmen M.",
                location: "Palma de Mallorca",
                comment: "En MAC no solo transformaron mi apariencia, sino que me devolvieron la confianza. El Método MAC es revolucionario.",
                treatment: "Método MAC Completo"
              },
              {
                name: "Isabel R.",
                location: "Cala Millor",
                comment: "Después de 3 meses con el Método MAC, me siento 10 años más joven. No es solo estética, es bienestar integral.",
                treatment: "Well-Aging Integral"
              },
              {
                name: "María S.",
                location: "Manacor",
                comment: "El enfoque integral de MAC es único. No solo mejoraron mi piel, sino que me enseñaron a cuidarme mejor.",
                treatment: "Rejuvenecimiento Facial"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gold-light/20"
              >
                <div className="flex text-gold-light mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-dark-neutral mb-4 italic">
                  "{testimonial.comment}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-gold-deep">{testimonial.name}</div>
                  <div className="text-dark-neutral/70">{testimonial.location}</div>
                  <div className="text-turquoise text-xs mt-1">{testimonial.treatment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-dark-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold-light">MAC Mallorca</h3>
              <p className="text-white/80 mb-4">
                El arte de ganar tiempo a través de la medicina estética integral.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className="hover:text-gold-light transition-colors">Inicio</a></li>
                <li><a href="/metodo" className="hover:text-gold-light transition-colors">Método MAC</a></li>
                <li><a href="/tratamientos" className="hover:text-gold-light transition-colors">Tratamientos</a></li>
                <li><a href="/contacto" className="hover:text-gold-light transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-white/80">
                <div>Palma de Mallorca</div>
                <div>+34 971 76 37 87</div>
                <div>concierge@mac.clinic</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horarios</h4>
              <div className="space-y-2 text-white/80">
                <div>Lun-Vie: 10:00-20:00</div>
                <div>Sábado: 10:00-14:00</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            © 2025 MAC Mallorca Aesthetic Clinic. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}