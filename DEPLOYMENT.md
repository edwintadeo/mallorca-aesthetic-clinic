# 🚀 Guía de Despliegue en Vercel

## 📋 Prerrequisitos

1. **Cuenta de GitHub** con tu repositorio
2. **Cuenta de Vercel** (gratuita en [vercel.com](https://vercel.com))
3. **Node.js 18+** instalado localmente
4. **Git** configurado en tu máquina

## 🔗 Paso 1: Conectar con GitHub

### Opción A: Desde Vercel Dashboard
1. Ve a [vercel.com](https://vercel.com) y inicia sesión
2. Haz clic en **"New Project"**
3. Selecciona **"Import Git Repository"**
4. Conecta tu cuenta de GitHub si no lo has hecho
5. Busca y selecciona tu repositorio: `mallorca-aesthetic-clinic`

### Opción B: Desde GitHub
1. Ve a tu repositorio en GitHub
2. Haz clic en **"Deploy to Vercel"** (si tienes el botón)
3. Sigue las instrucciones de Vercel

## ⚙️ Paso 2: Configuración del Proyecto

### Configuración Automática
Vercel detectará automáticamente que es un proyecto React + Node.js gracias a:
- `vercel.json` - Configuración de despliegue
- `client/package.json` - Scripts del frontend
- `server/index.ts` - Backend Node.js

### Variables de Entorno (Opcional)
Si tu aplicación usa variables de entorno, agrégalas en Vercel:
1. En la configuración del proyecto, ve a **"Environment Variables"**
2. Agrega las variables necesarias:
   ```
   NODE_ENV=production
   DATABASE_URL=tu_url_de_base_de_datos
   CORS_ORIGIN=https://tu-dominio.vercel.app
   ```

## 🏗️ Paso 3: Despliegue

### Despliegue Automático
1. Vercel detectará automáticamente la configuración
2. El frontend se construirá usando `npm run build`
3. El backend se desplegará como función serverless
4. Las rutas se configurarán según `vercel.json`

### Configuración de Build
- **Framework Preset**: Vite
- **Build Command**: `npm run build` (en la raíz del proyecto)
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

## 🌐 Paso 4: Dominio y URLs

### URL de Despliegue
Vercel te proporcionará automáticamente:
- **URL de producción**: `https://tu-proyecto.vercel.app`
- **URL de preview**: Para cada pull request

### Dominio Personalizado (Opcional)
1. Ve a **"Domains"** en la configuración del proyecto
2. Agrega tu dominio personalizado (ej: `mac-mallorca.com`)
3. Configura los registros DNS según las instrucciones de Vercel

## 📊 Paso 5: Monitoreo y Analytics

### Vercel Analytics
- **Performance**: Métricas de Core Web Vitals
- **Real User Monitoring**: Datos reales de usuarios
- **Error Tracking**: Monitoreo de errores en producción

### Logs y Debugging
- **Function Logs**: Para el backend serverless
- **Build Logs**: Para el proceso de construcción
- **Deployment Logs**: Para el despliegue

## 🔄 Paso 6: Despliegues Continuos

### Automático
- Cada push a `main` se despliega automáticamente
- Cada pull request genera un preview deployment

### Manual
- Puedes hacer redeploy desde el dashboard de Vercel
- Botón **"Redeploy"** en la configuración del proyecto

## 🚨 Solución de Problemas Comunes

### Error de Build
```bash
# Verificar build localmente
npm run build

# Verificar dependencias
npm install
```

### Error de Rutas
- Verificar `vercel.json` está en la raíz
- Confirmar que las rutas API apuntan a `/api/*`

### Error de Variables de Entorno
- Verificar que estén configuradas en Vercel
- Confirmar que `NODE_ENV=production`

## 📱 Verificación del Despliegue

### Frontend
1. Visita tu URL de Vercel
2. Verifica que la página principal cargue
3. Navega por las diferentes secciones
4. Verifica que los assets (imágenes, videos) se carguen

### Backend
1. Verifica que las rutas API funcionen
2. Prueba endpoints como `/api/health` si los tienes
3. Verifica logs en Vercel Functions

## 🔧 Configuración Avanzada

### Headers de Seguridad
Ya configurados en `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### Caché y Performance
- Assets estáticos: Cache-Control con max-age 1 año
- HTML: No cache para contenido dinámico
- API: Sin caché por defecto

### Rate Limiting
- Configurado en el servidor Express
- Protección contra ataques DDoS

## 📈 Optimizaciones Post-Despliegue

### Performance
1. **Lighthouse Audit**: Ejecuta en tu URL de Vercel
2. **Core Web Vitals**: Monitorea en Google Search Console
3. **Image Optimization**: Verifica que las imágenes se optimicen

### SEO
1. **Google Search Console**: Agrega tu dominio
2. **Sitemap**: Verifica que `/sitemap.xml` funcione
3. **Meta Tags**: Confirma que se generen correctamente

## 🎯 Próximos Pasos

### Después del Despliegue
1. **Configurar Analytics**: Google Analytics, Vercel Analytics
2. **Monitoreo**: Configurar alertas de uptime
3. **Backup**: Configurar backup de base de datos
4. **SSL**: Verificar certificado HTTPS (automático en Vercel)

### Mejoras Continuas
1. **A/B Testing**: Implementar con Vercel
2. **Edge Functions**: Para mejor performance global
3. **CDN**: Optimizar distribución de contenido

## 🆘 Soporte

### Vercel Support
- [Documentación oficial](https://vercel.com/docs)
- [Comunidad](https://github.com/vercel/vercel/discussions)
- [Soporte por email](https://vercel.com/support)

### Recursos Útiles
- [Vercel CLI](https://vercel.com/docs/cli)
- [Vercel Examples](https://github.com/vercel/examples)
- [Vercel Blog](https://vercel.com/blog)

---

**¡Tu clínica estética está lista para conquistar el mundo digital! 🎉**

Para cualquier duda o problema, consulta la documentación de Vercel o contacta con el equipo de soporte.
