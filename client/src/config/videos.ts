// Configuración centralizada de videos para la aplicación
// Rutas optimizadas y fallbacks para mejor experiencia de usuario

export const videoConfig = {
  // Videos de fondo principales
  background: {
    home: {
      primary: "/attached_assets/vecteezy_seagull-and-boats-on-a-turquoise-sea_1627124_1756709450734.mp4",
      fallback: "/attached_assets/amanecer mallorca_1756709416796.mp4",
      poster: "/attached_assets/ojo mujer verde_1756671431969.jpg"
    },
    blog: {
      primary: "/attached_assets/primed_cotton_canvas_1756676868691.mp4",
      fallback: "/attached_assets/gotas perfumista_1756709394477.mp4",
      poster: "/attached_assets/perfect-skin-portrait.jpg"
    },
    clubMAC: {
      primary: "/attached_assets/ondas de agua magenta_1756709751903.mp4",
      fallback: "/attached_assets/amanecer mallorca_1756709416796.mp4",
      poster: "/attached_assets/mujer joven ropa deportiva_1756669322157.jpg"
    }
  },

  // Videos de tratamientos
  treatments: {
    laser: {
      primary: "/attached_assets/aplicación laser_1756709713591.mp4",
      fallback: "/attached_assets/laser piel_1756671407999.jpg",
      poster: "/attached_assets/laser piel_1756671407999.jpg"
    },
    mask: {
      primary: "/attached_assets/apliación mascarilla_1756709438385.mp4",
      fallback: "/attached_assets/mascarilla verde_1756671415152.jpg",
      poster: "/attached_assets/mascarilla verde_1756671415152.jpg"
    },
    adn: {
      primary: "/attached_assets/ADN convert_1756709792304.mp4",
      fallback: "/attached_assets/ADN convert_1756676832992.mp4",
      poster: "/attached_assets/perfect-skin-portrait.jpg"
    }
  },

  // Videos de método MAC
  method: {
    brushStrokes: {
      primary: "/attached_assets/Bold Brush Strokes_simple_compose_01k40ny60dfpka9sghp6zqaakq_1756669574524.mp4",
      fallback: "/attached_assets/primed_cotton_canvas_1756676868691.mp4",
      poster: "/attached_assets/perfect-skin-portrait.jpg"
    },
    perfumerDrops: {
      primary: "/attached_assets/gotas perfumista_1756709394477.mp4",
      fallback: "/attached_assets/mascarilla perla_1756671424839.jpg",
      poster: "/attached_assets/mascarilla perla_1756671424839.jpg"
    }
  },

  // Videos de contacto y ubicaciones
  contact: {
    tramuntana: {
      primary: "/attached_assets/tramuntana_1756709830659.mp4",
      fallback: "/attached_assets/amanecer mallorca_1756709416796.mp4",
      poster: "/attached_assets/masal toalla turquesa grande_1756671403149.jpg"
    }
  },

  // Videos de valoración
  assessment: {
    personalized: {
      primary: "/attached_assets/valoración personalizada_1756709877077.mp4",
      fallback: "/attached_assets/perfect-skin-portrait.jpg",
      poster: "/attached_assets/perfect-skin-portrait.jpg"
    }
  }
};

// Función helper para obtener configuración de video
export function getVideoConfig(category: keyof typeof videoConfig, subcategory: string) {
  const categoryConfig = videoConfig[category];
  if (!categoryConfig) {
    console.warn(`Video category '${category}' not found`);
    return null;
  }

  const videoConfig = categoryConfig[subcategory as keyof typeof categoryConfig];
  if (!videoConfig) {
    console.warn(`Video subcategory '${subcategory}' not found in category '${category}'`);
    return null;
  }

  return videoConfig;
}

// Función para obtener solo la URL principal del video
export function getVideoUrl(category: keyof typeof videoConfig, subcategory: string) {
  const config = getVideoConfig(category, subcategory);
  return config?.primary || null;
}

// Función para obtener configuración completa del video
export function getVideoConfigComplete(category: keyof typeof videoConfig, subcategory: string) {
  return getVideoConfig(category, subcategory);
}
