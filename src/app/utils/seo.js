/**
 * Utilidades SEO para Sastrería Beatriz Mesa
 * Funciones y helpers para optimización SEO
 */

import { structuredData } from '../constants/metadata.js';

/**
 * Genera el JSON-LD structured data para el negocio local
 * @returns {string} JSON-LD script tag
 */
export function generateStructuredData() {
  return {
    __html: JSON.stringify(structuredData)
  };
}

/**
 * Genera metadatos optimizados para una página específica
 * @param {Object} options - Opciones de metadatos
 * @param {string} options.title - Título de la página
 * @param {string} options.description - Descripción de la página
 * @param {string} options.keywords - Palabras clave
 * @param {string} options.url - URL de la página
 * @param {string} options.image - Imagen de la página
 * @returns {Object} Metadatos optimizados
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  url,
  image = "/dist/ella.jpg"
}) {
  const baseKeywords = [
    "sastrería envigado",
    "arreglos de ropa envigado",
    "beatriz mesa",
    "costurera envigado"
  ];

  const allKeywords = [...new Set([...baseKeywords, ...keywords])];

  return {
    title: title ? `${title} | Sastrería Beatriz Mesa` : "Sastrería Beatriz Mesa",
    description,
    keywords: allKeywords.join(', '),
    openGraph: {
      title: title ? `${title} | Sastrería Beatriz Mesa` : "Sastrería Beatriz Mesa",
      description,
      url: url || "https://www.beatrizmesasastreria.com",
      images: [{ url: image }],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | Sastrería Beatriz Mesa` : "Sastrería Beatriz Mesa",
      description,
      images: [image],
    },
    alternates: {
      canonical: url || "https://www.beatrizmesasastreria.com",
    }
  };
}

/**
 * Optimiza imágenes para SEO
 * @param {string} src - Ruta de la imagen
 * @param {string} alt - Texto alternativo
 * @param {Object} options - Opciones adicionales
 * @returns {Object} Configuración optimizada de imagen
 */
export function optimizeImage(src, alt, options = {}) {
  return {
    src,
    alt,
    priority: options.priority || false,
    loading: options.priority ? "eager" : "lazy",
    sizes: options.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    quality: options.quality || 85,
    placeholder: options.placeholder || "blur",
    blurDataURL: options.blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTjw2Uj5AS0pLTEr/2wBDAR",
    ...options
  };
}

/**
 * Genera breadcrumbs structured data
 * @param {Array} breadcrumbs - Array de breadcrumbs
 * @returns {Object} JSON-LD para breadcrumbs
 */
export function generateBreadcrumbsData(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Genera FAQ structured data
 * @param {Array} faqs - Array de preguntas frecuentes
 * @returns {Object} JSON-LD para FAQ
 */
export function generateFAQData(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Optimiza URLs para SEO
 * @param {string} url - URL a optimizar
 * @returns {string} URL optimizada
 */
export function optimizeURL(url) {
  return url
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Genera sitemap data
 * @returns {Array} Array de URLs para sitemap
 */
export function generateSitemapData() {
  const baseURL = "https://www.beatrizmesasastreria.com";
  
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseURL}#servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseURL}#nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseURL}#contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }
  ];
}

/**
 * Valida y optimiza metadatos
 * @param {Object} metadata - Metadatos a validar
 * @returns {Object} Metadatos optimizados
 */
export function validateMetadata(metadata) {
  const optimized = { ...metadata };

  // Validar longitud del título
  if (optimized.title && optimized.title.length > 60) {
    console.warn('Title is too long for SEO. Consider shortening it.');
  }

  // Validar longitud de la descripción
  if (optimized.description && optimized.description.length > 160) {
    console.warn('Description is too long for SEO. Consider shortening it.');
  }

  // Asegurar que las keywords no excedan el límite
  if (optimized.keywords && optimized.keywords.length > 200) {
    console.warn('Keywords are too long. Consider reducing them.');
  }

  return optimized;
}

/**
 * Genera robots.txt content
 * @returns {string} Contenido del robots.txt
 */
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: https://www.beatrizmesasastreria.com/sitemap.xml

# Optimización para motores de búsqueda
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Permitir recursos importantes
Allow: /dist/
Allow: /public/
Allow: /*.js
Allow: /*.css
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg`;
} 