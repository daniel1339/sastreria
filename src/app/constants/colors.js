/**
 * Sistema de colores de Sastrería Beatriz Mesa
 * Paleta de colores principal y secundaria
 */

export const colors = {
  // Colores principales
  primary: {
    50: '#fff0f5',   // Rosa muy claro (background principal)
    100: '#fff0f8',  // Rosa claro (background secciones)
    200: '#fff5f9',  // Rosa super claro (background cards)
    300: '#ff8dc7',  // Rosa secundario (accent)
    400: '#ff69b4',  // Rosa principal (primary)
    500: '#ff69b4',  // Rosa principal (variante)
    600: '#e55aa2',  // Rosa oscuro (hover)
    700: '#cc4b90',  // Rosa más oscuro
  },
  
  // Colores de texto
  text: {
    primary: '#4a4a4a',      // Texto principal
    secondary: '#4a4a4a/80', // Texto secundario (con opacidad)
    light: '#ffffff',        // Texto claro (sobre fondos oscuros)
  },
  
  // Colores de fondo
  background: {
    primary: '#ffffff',      // Fondo principal
    secondary: '#fff0f5',    // Fondo secundario
    accent: '#fff0f8',       // Fondo de acento
    card: '#fff5f9',         // Fondo de tarjetas
  },
  
  // Colores de borde
  border: {
    primary: '#ffe6f3',      // Borde principal
    accent: '#ff8dc7',       // Borde de acento
  },
  
  // Gradientes
  gradients: {
    primary: 'from-[#ff69b4] via-[#ff8dc7] to-[#ff69b4]',
    accent: 'from-[#ff69b4] to-[#ff8dc7]',
  }
};

/**
 * Clases de Tailwind para colores
 * Para usar directamente en className
 */
export const colorClasses = {
  // Fondos
  bgPrimary: 'bg-[#ff69b4]',
  bgPrimaryLight: 'bg-[#ff8dc7]',
  bgPrimary50: 'bg-[#fff0f5]',
  bgPrimary100: 'bg-[#fff0f8]',
  bgPrimary200: 'bg-[#fff5f9]',
  bgWhite: 'bg-white',
  
  // Texto
  textPrimary: 'text-[#ff69b4]',
  textPrimaryLight: 'text-[#ff8dc7]',
  textDark: 'text-[#4a4a4a]',
  textDark80: 'text-[#4a4a4a]/80',
  textWhite: 'text-white',
  
  // Bordes
  borderPrimary: 'border-[#ff69b4]',
  borderPrimaryLight: 'border-[#ff8dc7]',
  borderAccent: 'border-[#ffe6f3]',
  
  // Hover states
  hoverBgPrimary: 'hover:bg-[#ff69b4]',
  hoverBgPrimaryLight: 'hover:bg-[#ff8dc7]',
  hoverTextWhite: 'hover:text-white',
  hoverTextPrimary: 'hover:text-[#ff8dc7]',
  
  // Gradientes
  gradientPrimary: 'bg-gradient-to-r from-[#ff69b4] via-[#ff8dc7] to-[#ff69b4]',
  gradientAccent: 'bg-gradient-to-r from-[#ff69b4] to-[#ff8dc7]',
};

/**
 * Variables CSS personalizadas
 * Para usar en archivos CSS
 */
export const cssVariables = {
  '--color-primary': '#ff69b4',
  '--color-primary-light': '#ff8dc7',
  '--color-primary-50': '#fff0f5',
  '--color-primary-100': '#fff0f8',
  '--color-primary-200': '#fff5f9',
  '--color-text-primary': '#4a4a4a',
  '--color-text-secondary': '#4a4a4a/80',
  '--color-border-primary': '#ffe6f3',
  '--color-border-accent': '#ff8dc7',
}; 