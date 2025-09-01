# 🏥 Mallorca Aesthetic Clinic (MAC)

**El Arte de Ganar Tiempo** - Clínica de medicina estética avanzada en Mallorca

## ✨ Características

- 🎨 **Diseño Ultra-Luxury** con interfaz moderna y elegante
- 📱 **Responsive Design** optimizado para todos los dispositivos
- 🚀 **Performance** optimizada con Vite y React 18
- 🎯 **SEO Avanzado** con metadatos estructurados
- 🔒 **Seguridad** implementada con Helmet y rate limiting
- 📊 **Analytics** integrado para seguimiento de usuarios

## 🛠️ Tecnologías

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes accesibles y personalizables
- **Framer Motion** - Animaciones fluidas y profesionales
- **Vite** - Build tool ultra-rápido

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web minimalista
- **Drizzle ORM** - ORM moderno para bases de datos
- **PostgreSQL** - Base de datos relacional robusta

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- PostgreSQL (opcional para desarrollo local)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/mallorca-aesthetic-clinic.git
cd mallorca-aesthetic-clinic
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Abrir en navegador**
```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
ClinicSite/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── hooks/         # Custom hooks
│   │   └── utils/         # Utilidades y helpers
│   ├── public/            # Archivos estáticos
│   └── index.html         # HTML principal
├── server/                 # Backend Express
│   ├── routes/            # Rutas de la API
│   ├── middleware/        # Middleware personalizado
│   └── index.ts           # Servidor principal
├── shared/                 # Código compartido
│   └── schema.ts          # Esquemas de base de datos
└── attached_assets/        # Recursos multimedia
```

## 🎯 Funcionalidades Principales

### 🏠 Páginas Principales
- **Home** - Landing page principal
- **Tratamientos** - Catálogo de servicios
- **Método MAC** - Metodología exclusiva
- **Nosotros** - Información de la clínica
- **Contacto** - Formularios de contacto
- **Blog** - Artículos y contenido educativo

### 💎 Características Especiales
- **Sistema de Citas** - Booking inteligente
- **Club MAC** - Programa de fidelización
- **Valoración Personalizada** - Evaluación individual
- **Galería de Resultados** - Antes y después
- **Newsletter** - Suscripción a contenido exclusivo

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio de GitHub
2. Configurar variables de entorno
3. Desplegar automáticamente

### Otros proveedores
- **Netlify** - Para frontend estático
- **Railway** - Para backend Node.js
- **Heroku** - Para aplicaciones full-stack

## 📊 Scripts Disponibles

```bash
npm run dev          # Desarrollo local
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run check        # Verificación TypeScript
npm run db:push      # Sincronizar base de datos
```

## 🔧 Configuración

### Variables de Entorno
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
CORS_ORIGIN=http://localhost:3000
```

### Base de Datos
```bash
# Crear base de datos
createdb mallorca_clinic

# Ejecutar migraciones
npm run db:push
```

## 📱 Responsive Design

- **Mobile First** - Optimizado para dispositivos móviles
- **Tablet** - Adaptación para tablets
- **Desktop** - Experiencia completa en pantallas grandes
- **Touch Friendly** - Interacciones táctiles optimizadas

## 🎨 Personalización

### Temas y Colores
- Paleta de colores luxury (dorado, negro, blanco)
- Tipografías elegantes (Cormorant Garamond, Inter)
- Iconografía profesional y moderna

### Componentes
- Sistema de diseño modular
- Componentes reutilizables
- Variantes de estilo configurables

## 🚀 Performance

- **Lazy Loading** - Carga diferida de componentes
- **Code Splitting** - División inteligente del código
- **Image Optimization** - Optimización automática de imágenes
- **Caching** - Estrategias de caché avanzadas

## 🔒 Seguridad

- **Helmet.js** - Headers de seguridad
- **Rate Limiting** - Protección contra ataques
- **CORS** - Control de acceso entre dominios
- **Input Validation** - Validación de entrada robusta

## 📈 Analytics y SEO

- **Meta Tags** - Optimización para motores de búsqueda
- **Structured Data** - Datos estructurados para Google
- **Performance Monitoring** - Seguimiento de métricas
- **User Tracking** - Análisis de comportamiento

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Equipo

- **Dra. Liliana Ocampo** - Directora Médica
- **Equipo de Desarrollo** - Implementación técnica
- **Equipo de Diseño** - UX/UI y branding

## 📞 Contacto

- **Website**: [mac-mallorca.com](https://mac-mallorca.com)
- **Teléfono**: +34 653 66 44 33
- **Email**: info@mac-mallorca.com
- **Dirección**: Calle Sant Miquel 77, 1C, Palma de Mallorca

## 🙏 Agradecimientos

- Comunidad React y Vite
- Contribuidores de código abierto
- Pacientes y clientes de MAC
- Equipo médico y administrativo

---

**Mallorca Aesthetic Clinic** - Transformando vidas, una sonrisa a la vez ✨
