import AnimatedSection from "@/components/UI/AnimatedSection";

export default function PoliticaPrivacidad() {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl lg:text-5xl font-title text-center mb-8" data-testid="text-page-title">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="text-2xl font-title mb-4">1. Responsable del Tratamiento</h2>
              <p>
                <strong>Mallorca Aesthetic Clinic (MAC)</strong><br />
                Dra. Liliana Ocampo<br />
                Calle Sant Miquel 77, 1C<br />
                07002 Palma de Mallorca, España<br />
                Email: info@mac-mallorca.com<br />
                Teléfono: +34 653 66 44 33
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">2. Datos que Recopilamos</h2>
              <p>Recopilamos los siguientes datos personales:</p>
              <ul className="list-disc pl-6">
                <li>Nombre y apellidos</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Edad (solo para confirmar mayoría de edad)</li>
                <li>Información sobre tratamientos de interés</li>
                <li>Preferencias de cita</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">3. Finalidad del Tratamiento</h2>
              <p>Los datos personales serán tratados con las siguientes finalidades:</p>
              <ul className="list-disc pl-6">
                <li>Gestión de citas y consultas médicas</li>
                <li>Prestación de servicios de medicina estética</li>
                <li>Envío de comunicaciones sobre su tratamiento</li>
                <li>Cumplimiento de obligaciones legales y fiscales</li>
                <li>Con su consentimiento, envío de información sobre promociones y servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">4. Base Legal</h2>
              <p>
                La base legal para el tratamiento de sus datos es el consentimiento del interesado,
                la ejecución de un contrato de prestación de servicios médicos y el cumplimiento
                de obligaciones legales aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">5. Conservación de Datos</h2>
              <p>
                Los datos personales se conservarán durante el tiempo necesario para cumplir con
                la finalidad para la que se recabaron y para determinar las posibles responsabilidades
                que se pudieran derivar. Los datos médicos se conservarán según lo establecido en
                la legislación sanitaria vigente (mínimo 5 años).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">6. Derechos del Usuario</h2>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la supresión de sus datos</li>
                <li>Oponerse al tratamiento de sus datos</li>
                <li>Solicitar la limitación del tratamiento</li>
                <li>Portabilidad de los datos</li>
                <li>Retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puede contactarnos en info@mac-mallorca.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">7. Seguridad</h2>
              <p>
                MAC implementa medidas técnicas y organizativas apropiadas para garantizar
                un nivel de seguridad adecuado al riesgo, incluyendo la encriptación de datos,
                acceso restringido y formación del personal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">8. Cookies</h2>
              <p>
                Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario.
                Puede configurar su navegador para rechazar todas las cookies, aunque esto
                podría afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">9. Actualizaciones</h2>
              <p>
                Esta política de privacidad puede ser actualizada periódicamente. 
                La fecha de la última actualización se indicará al final del documento.
                Le recomendamos revisar esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-title mb-4">10. Contacto</h2>
              <p>
                Para cualquier consulta sobre esta política de privacidad o sobre el tratamiento
                de sus datos personales, puede contactarnos en:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> info@mac-mallorca.com<br />
                <strong>Teléfono:</strong> +34 653 66 44 33<br />
                <strong>Dirección:</strong> Calle Sant Miquel 77, 1C, 07002 Palma de Mallorca
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8 pt-8 border-t">
              <strong>Última actualización:</strong> Enero 2025
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}