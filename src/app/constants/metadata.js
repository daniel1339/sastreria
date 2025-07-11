/**
 * Metadatos SEO para Sastrería Beatriz Mesa
 * Configuración centralizada para SEO
 */

export const siteMetadata = {
  // Metadatos básicos
  title: "Sastrería y Arreglos de Ropa en Envigado | Beatriz Mesa",
  description: "Sastrería Beatriz Mesa en Envigado: Expertos en arreglos de ropa, reformas y tintorería. Más de 20 años arreglando y transformando prendas. Servicio personalizado y entregas rápidas.",
  keywords: [
    "sastrería envigado",
    "arreglos de ropa envigado", 
    "reformas de ropa envigado",
    "tintorería envigado",
    "arreglos de vestidos",
    "ajustes de ropa",
    "costurera envigado",
    "sastrería antioquia",
    "arreglos de pantalones",
    "arreglos de vestidos de fiesta"
  ],
  
  // URLs
  url: "https://www.beatrizmesasastreria.com",
  canonical: "https://www.beatrizmesasastreria.com",
  
  // Configuración de idioma
  locale: "es_ES",
  language: "es",
  
  // Información de contacto
  contact: {
    phone: "+573052905604",
    address: "Carrera 25 # 39 sur 16, El Chingui, Envigado, Antioquia",
    city: "Envigado",
    region: "Antioquia",
    country: "Colombia"
  },
  
  // Horarios de negocio
  businessHours: {
    weekdays: "9:00 - 19:00",
    saturday: "10:00 - 14:00",
    sunday: "Cerrado"
  }
};

/**
 * Configuración Open Graph
 */
export const openGraphConfig = {
  title: "Sastrería y Arreglos de Ropa en Envigado | Beatriz Mesa",
  description: "Expertos en arreglos de ropa, reformas y tintorería en Envigado. Servicio personalizado, calidad garantizada y entregas rápidas. ¡Visítanos!",
  images: [
    {
      url: "https://www.beatrizmesasastreria.com/dist/ella.jpg",
      width: 1200,
      height: 630,
      alt: "Sastrería Beatriz Mesa - Taller de confección profesional"
    }
  ],
  locale: "es_ES",
  type: "website",
  siteName: "Sastrería Beatriz Mesa"
};

/**
 * Configuración Twitter Card
 */
export const twitterConfig = {
  card: "summary_large_image",
  title: "Sastrería y Arreglos de Ropa en Envigado | Beatriz Mesa",
  description: "Expertos en arreglos de ropa, reformas y tintorería en Envigado. Servicio personalizado, calidad garantizada y entregas rápidas. ¡Visítanos!",
  images: ["https://www.beatrizmesasastreria.com/dist/ella.jpg"],
  creator: "@beatrizmesasastreria"
};

/**
 * Configuración de JSON-LD (Structured Data)
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sastrería Beatriz Mesa",
  "description": "Expertos en arreglos de ropa, reformas y tintorería en Envigado",
  "url": "https://www.beatrizmesasastreria.com",
  "telephone": "+573052905604",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrera 25 # 39 sur 16",
    "addressLocality": "Envigado",
    "addressRegion": "Antioquia",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.201727627565455,
    "longitude": -75.57455792474925
  },
  "openingHours": [
    "Mo-Fr 09:00-19:00",
    "Sa 10:00-14:00"
  ],
  "priceRange": "$$",
  "serviceType": [
    "Sastrería",
    "Arreglos de ropa",
    "Reformas de prendas",
    "Tintorería"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Envigado"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Sastrería",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transformación de Prendas",
          "description": "Modificamos tus prendas para darles el estilo que buscas"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Arreglos y Ajustes",
          "description": "Tu ropa a tu medida exacta"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Teñido de Ropa",
          "description": "Teñimos tus prendas con calidad"
        }
      }
    ]
  }
};

/**
 * Configuración de preloads y recursos críticos
 */
export const preloadConfig = {
  images: [
    {
      src: "/dist/ella.jpeg",
      as: "image",
      type: "image/jpeg"
    }
  ],
  fonts: [
    {
      href: "https://fonts.googleapis.com",
      rel: "preconnect"
    },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: "anonymous"
    }
  ]
};

/**
 * Función para generar metadatos dinámicos
 */
export function generateMetadata(page = 'home') {
  const baseMetadata = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: siteMetadata.keywords.join(', '),
    openGraph: openGraphConfig,
    twitter: twitterConfig,
    alternates: {
      canonical: siteMetadata.canonical,
    },
    other: {
      link: [
        ...preloadConfig.images.map(img => ({
          rel: "preload",
          href: img.src,
          as: img.as
        })),
        ...preloadConfig.fonts.map(font => ({
          rel: font.rel,
          href: font.href,
          ...(font.crossOrigin && { crossOrigin: font.crossOrigin })
        }))
      ]
    }
  };

  // Metadatos específicos por página
  const pageSpecificMetadata = {
    home: {
      title: siteMetadata.title,
      description: siteMetadata.description
    },
    services: {
      title: "Servicios de Sastrería en Envigado | Beatriz Mesa",
      description: "Transformación de prendas, arreglos y ajustes, teñido de ropa. Servicios profesionales de sastrería en Envigado."
    },
    contact: {
      title: "Contacto - Sastrería Beatriz Mesa Envigado",
      description: "Visítanos en Carrera 25 # 39 sur 16, El Chingui, Envigado. Teléfono: (604) 271 2000. Horarios de atención."
    }
  };

  return {
    ...baseMetadata,
    ...pageSpecificMetadata[page]
  };
} 