import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  googleMapsUrl: string;
  whatsappUrl: string;
  description?: string;
  services?: string[];
}

interface LocationCardsProps {
  locations?: Location[];
}

const defaultLocations: Location[] = [
  {
    id: 'palma-centro',
    name: 'MAC Palma Centro',
    address: 'Pg. del Born 15, 07012 Palma',
    phone: '+34 971 123 456',
    hours: 'L–V 10:00–18:00, S 10:00–14:00',
    image: '/attached_assets/perfect-skin-portrait.jpg',
    googleMapsUrl: 'https://maps.google.com/?q=Pg.+del+Born+15,+07012+Palma',
    whatsappUrl: 'https://wa.me/34971123456',
    description: 'Nuestra clínica principal en el corazón de Palma, con instalaciones de última generación.',
    services: ['Consultas', 'Tratamientos faciales', 'Tratamientos corporales', 'Cirugía estética']
  },
  {
    id: 'cala-millor',
    name: 'MAC Cala Millor',
    address: 'Av. de les Palmeres 45, 07560 Cala Millor',
    phone: '+34 971 234 567',
    hours: 'L–V 10:00–18:00, S 10:00–14:00',
    image: '/attached_assets/mujer joven ropa deportiva_1756669322157.jpg',
    googleMapsUrl: 'https://maps.google.com/?q=Av.+de+les+Palmeres+45,+07560+Cala+Millor',
    whatsappUrl: 'https://wa.me/34971234567',
    description: 'Clínica especializada en tratamientos de bienestar y rejuvenecimiento.',
    services: ['Well-aging', 'Tratamientos faciales', 'Consultas especializadas']
  },
  {
    id: 'manacor',
    name: 'MAC Manacor',
    address: 'Carrer de Sant Jaume 12, 07500 Manacor',
    phone: '+34 971 345 678',
    hours: 'L–V 10:00–18:00, S 10:00–14:00',
    image: '/attached_assets/ojo mujer verde_1756671431969.jpg',
    googleMapsUrl: 'https://maps.google.com/?q=Carrer+de+Sant+Jaume+12,+07500+Manacor',
    whatsappUrl: 'https://wa.me/34971345678',
    description: 'Centro médico estético con enfoque en medicina preventiva y estética.',
    services: ['Medicina preventiva', 'Tratamientos faciales', 'Consultas médicas']
  }
];

export default function LocationCards({ locations = defaultLocations }: LocationCardsProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#A57D24] mb-4">
            Nuestras Ubicaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tres clínicas estratégicamente ubicadas en Mallorca para brindarte la mejor atención médica estética
          </p>
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.article
              key={location.id}
              className="group rounded-2xl border border-black/10 bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Imagen de la clínica */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Badge de ubicación */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  {location.name.split(' ')[1]} {/* Extraer "Palma", "Cala Millor", "Manacor" */}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                {/* Nombre de la clínica */}
                <h3 className="text-2xl font-serif text-gray-900 mb-2">
                  {location.name}
                </h3>

                {/* Dirección */}
                <div className="flex items-start mb-3">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {location.address}
                  </p>
                </div>

                {/* Teléfono */}
                <div className="flex items-center mb-3">
                  <Phone className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                  <a
                    href={`tel:${location.phone}`}
                    className="text-sm text-gray-600 hover:text-[#008578] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2 rounded-sm px-1 py-1"
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Horarios */}
                <div className="flex items-start mb-4">
                  <Clock className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {location.hours}
                  </p>
                </div>

                {/* Descripción */}
                {location.description && (
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {location.description}
                  </p>
                )}

                {/* Servicios */}
                {location.services && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Servicios:</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href="#contacto"
                    className="flex-1 text-center rounded-full bg-[#008578] px-4 py-2 text-white text-sm font-medium transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver detalles
                  </motion.a>
                  
                  <motion.a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-full border border-gray-300 px-4 py-2 text-gray-700 text-sm font-medium transition-all duration-300 hover:border-[#A57D24] hover:text-[#A57D24] focus:outline-none focus:ring-2 focus:ring-[#A57D24] focus:ring-offset-2 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Navigation className="h-4 w-4 mr-1" />
                    Cómo llegar
                  </motion.a>
                </div>

                {/* WhatsApp flotante en móvil */}
                <motion.a
                  href={location.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block sm:hidden w-full text-center rounded-full bg-green-500 px-4 py-2 text-white text-sm font-medium transition-all duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="inline h-4 w-4 mr-1" />
                  WhatsApp
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            ¿No estás seguro de cuál elegir?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo te ayudará a encontrar la ubicación más conveniente para tu consulta
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-[#008578] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#006b5f] focus:outline-none focus:ring-2 focus:ring-[#008578] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-4 w-4 mr-2" />
            Consultar Ubicaciones
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
