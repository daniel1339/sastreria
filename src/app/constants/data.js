/**
 * Datos del sitio web Sastrería Beatriz Mesa
 * Información organizada por secciones
 */

export const siteData = {
  // Información general del sitio
  site: {
    name: "Sastrería Beatriz Mesa",
    tagline: "Sastrería y arreglos de ropa en Envigado",
    description: "Expertos en arreglos y reformas de ropa en Envigado. Transformamos tus prendas con profesionalismo y atención personalizada.",
    year: new Date().getFullYear(),
  },

  // Datos de la sección Hero
  hero: {
    title: {
      line1: "Sastrería y",
      line2: "arreglos de ropa en",
      line3: "Envigado"
    },
    description: "Expertos en arreglos y reformas de ropa en Envigado. Transformamos tus prendas con profesionalismo y atención personalizada.",
    cta: {
      text: "Descubre nuestros servicios",
      href: "#servicios"
    },
    image: {
      src: "/dist/ella.jpeg",
      alt: "Sastrería Beatriz Mesa - Taller de confección"
    }
  },

  // Datos de servicios
  services: [
    {
      id: "transformacion",
      title: "Transformación de Prendas",
      description: "Modificamos tus prendas para darles el estilo que buscas. Adaptamos tu ropa a las últimas tendencias con un toque profesional.",
      icon: "scissors"
    },
    {
      id: "arreglos",
      title: "Arreglos y Ajustes",
      description: "Tu ropa a tu medida exacta. Ajustamos todo tipo de prendas para que luzcas siempre impecable.",
      icon: "ruler"
    },
    {
      id: "tenido",
      title: "Teñido de Ropa",
      description: "Teñimos tus prendas con calidad.",
      icon: "tshirt"
    }
  ],

  // Datos de la sección About
  about: {
    title: "Sobre Beatriz Mesa",
    content: [
      "Con más de 20 años de experiencia en sastrería y arreglos de ropa en Envigado, Beatriz Mesa ha perfeccionado el arte de transformar y ajustar prendas, garantizando la satisfacción de cada cliente.",
      "Nuestro compromiso es ofrecer el mejor servicio de arreglos y reformas, combinando técnicas tradicionales con métodos modernos para resultados excepcionales."
    ]
  },

  // Datos de contacto
  contact: {
    title: "Visítanos",
    location: {
      title: "Ubicación",
      address: [
        "Carrera 25 # 39 sur 16",
        "frente a Vitta puerta roja al lado de la tienda",
        "El Chingui, Envigado"
      ],
      icon: "location"
    },
    phone: {
      title: "Contáctanos",
      numbers: [
        {
          label: "Teléfono",
          number: "6042712000",
          display: "(604) 271 2000"
        },
        {
          label: "Celular",
          number: "3052905604",
          display: "305 290 5604"
        }
      ],
      icon: "phone"
    },
    schedule: {
      title: "Horario",
      hours: [
        "Lunes a Viernes: 9:00 - 19:00",
        "Sábados: 10:00 - 14:00"
      ],
      icon: "clock"
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4675763573595!2d-75.57455792474925!3d6.201727627565455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683d0ac6d7857%3A0x3f0368a2575c8d4f!2sCra.%2025%20%2339%20Sur-16%2C%20Envigado%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1710284507090!5m2!1ses!2sco",
      title: "Ubicación de Sastrería Beatriz Mesa en Google Maps"
    }
  },

  // Datos de WhatsApp
  whatsapp: {
    number: "573052905604",
    message: "Hola, me gustaría obtener información sobre sus servicios de sastrería.",
    tooltip: "Escríbenos por WhatsApp"
  },

  // Navegación
  navigation: [
    {
      name: "Servicios",
      href: "#servicios"
    },
    {
      name: "Nosotros",
      href: "#nosotros"
    },
    {
      name: "Contacto",
      href: "#contacto"
    }
  ]
};

/**
 * Configuración de iconos
 */
export const iconConfig = {
  scissors: "scissors",
  tshirt: "tshirt", 
  ruler: "ruler",
  location: "location",
  phone: "phone",
  clock: "clock",
  bars: "bars"
}; 