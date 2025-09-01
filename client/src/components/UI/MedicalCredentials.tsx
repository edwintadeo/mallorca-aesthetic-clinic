import { Shield, Award, Users, Star, CheckCircle } from 'lucide-react';
import ScrollAnimations from './ScrollAnimations';

interface MedicalCredentialsProps {
  className?: string;
}

export default function MedicalCredentials({ className = '' }: MedicalCredentialsProps) {
  const credentials = [
    {
      icon: Shield,
      title: 'Colegio Médicos',
      subtitle: 'Certificación Oficial',
      description: 'Miembro del Colegio Oficial de Médicos de las Islas Baleares'
    },
    {
      icon: Award,
      title: 'SEME',
      subtitle: 'Sociedad Española',
      description: 'Miembro de la Sociedad Española de Medicina Estética'
    },
    {
      icon: Users,
      title: 'AECEP',
      subtitle: 'Asociación Europea',
      description: 'Miembro de la Asociación Europea de Cirugía Estética'
    },
    {
      icon: Star,
      title: '15+ Años',
      subtitle: 'Experiencia',
      description: 'Más de 15 años de experiencia en medicina estética'
    }
  ];

  const achievements = [
    '10,000+ pacientes satisfechos',
    'Certificación Internacional Anti-Aging',
    'Formadora en congresos internacionales',
    'Especialista en Método MAC'
  ];

  return (
    <div className={`medical-credentials ${className}`}>
      <ScrollAnimations animation="fadeIn" delay={100}>
        <div className="credentials-header">
          <h3 className="credentials-title">Excelencia Médica</h3>
          <p className="credentials-subtitle">
            Credenciales y certificaciones que respaldan nuestra experiencia
          </p>
        </div>
      </ScrollAnimations>

      <div className="credentials-grid">
        {credentials.map((credential, index) => (
          <ScrollAnimations key={credential.title} animation="slideUp" delay={200 + index * 100}>
            <div className="credential-card">
              <div className="credential-icon">
                <credential.icon className="icon" />
              </div>
              <div className="credential-content">
                <h4 className="credential-title">{credential.title}</h4>
                <p className="credential-subtitle">{credential.subtitle}</p>
                <p className="credential-description">{credential.description}</p>
              </div>
            </div>
          </ScrollAnimations>
        ))}
      </div>

      <ScrollAnimations animation="fadeIn" delay={600}>
        <div className="achievements-section">
          <h4 className="achievements-title">Logros Destacados</h4>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <CheckCircle className="achievement-icon" />
                <span className="achievement-text">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimations>
    </div>
  );
}
