// Configuración centralizada de videos para la aplicación
// Rutas optimizadas y fallbacks para mejor experiencia de usuario

// Helper to resolve assets via Vite
const a = (p: string) => new URL(`@assets/${p}` as unknown as string, import.meta.url).toString();

// Configuración de videos
const videoConfig = {
  // Videos de fondo principales
  background: {
    home: {
      primary: a("vecteezy_seagull-and-boats-on-a-turquoise-sea_1627124_1756709450734.mp4"),
      fallback: a("amanecer mallorca_1756709416796.mp4"),
      poster: a("ojo mujer verde_1756671431969.jpg")
    },
    blog: {
      primary: a("primed_cotton_canvas_1756676868691.mp4"),
      fallback: a("gotas perfumista_1756709394477.mp4"),
      poster: a("perfect-skin-portrait.jpg")
    },
    clubMAC: {
      primary: a("ondas de agua magenta_1756709751903.mp4"),
      fallback: a("amanecer mallorca_1756709416796.mp4"),
      poster: a("mujer joven ropa deportiva_1756669322157.jpg")
    }
  },

  // Videos de tratamientos
  treatments: {
    laser: {
      primary: a("aplicación laser_1756709713591.mp4"),
      fallback: a("laser piel_1756671407999.jpg"),
      poster: a("laser piel_1756671407999.jpg")
    },
    mask: {
      primary: a("apliación mascarilla_1756709438385.mp4"),
      fallback: a("mascarilla verde_1756671415152.jpg"),
      poster: a("mascarilla verde_1756671415152.jpg")
    },
    adn: {
      primary: a("ADN convert_1756709792304.mp4"),
      fallback: a("ADN convert_1756676832992.mp4"),
      poster: a("perfect-skin-portrait.jpg")
    }
  },

  // Videos de método MAC
  method: {
    brushStrokes: {
      primary: a("Bold Brush Strokes_simple_compose_01k40ny60dfpka9sghp6zqaakq_1756669574524.mp4"),
      fallback: a("primed_cotton_canvas_1756676868691.mp4"),
      poster: a("perfect-skin-portrait.jpg")
    },
    perfumerDrops: {
      primary: a("gotas perfumista_1756709394477.mp4"),
      fallback: a("mascarilla perla_1756671424839.jpg"),
      poster: a("mascarilla perla_1756671424839.jpg")
    }
  },

  // Videos de contacto y ubicaciones
  contact: {
    tramuntana: {
      primary: a("tramuntana_1756709830659.mp4"),
      fallback: a("amanecer mallorca_1756709416796.mp4"),
      poster: a("masal toalla turquesa grande_1756671403149.jpg")
    }
  },

  // Videos de valoración
  assessment: {
    personalized: {
      primary: a("valoración personalizada_1756709877077.mp4"),
      fallback: a("perfect-skin-portrait.jpg"),
      poster: a("perfect-skin-portrait.jpg")
    }
  }
};

// Función helper para obtener configuración de video
function getVideoConfig(category: string, subcategory: string) {
  const categoryConfig = videoConfig[category as keyof typeof videoConfig];
  if (!categoryConfig) {
    console.warn(`Video category '${category}' not found`);
    return null;
  }

  const videoConfigItem = categoryConfig[subcategory as keyof typeof categoryConfig];
  if (!videoConfigItem) {
    console.warn(`Video subcategory '${subcategory}' not found in category '${category}'`);
    return null;
  }

  return videoConfigItem;
}

// Función para obtener solo la URL principal del video
export function getVideoUrl(category: string, subcategory: string) {
  const config = getVideoConfig(category, subcategory);
  return config?.primary || null;
}

// Función para obtener configuración completa del video
export function getVideoConfigComplete(category: string, subcategory: string) {
  return getVideoConfig(category, subcategory);
}

// Exportar la configuración
export { videoConfig };
