# Sastrería Beatriz Mesa

Proyecto web para la sastrería y arreglos de ropa en Envigado, Beatriz Mesa. Desarrollado con Next.js, React y Tailwind CSS, optimizado para SEO, performance y una experiencia de usuario profesional.

---

## 📁 Estructura del Proyecto

```
src/
  app/
    components/
      layout/        # Header, Footer, WhatsAppButton
      sections/      # Hero, Services, About, Contact
      ui/            # Button, Card, SectionTitle, IconWrapper
      common/        # ContactInfo
    constants/       # colors.js, data.js, metadata.js
    utils/           # seo.js
    styles/          # globals.css
    page.js          # Página principal (usa todos los componentes)
    layout.js        # Layout global y metadatos SEO
```

---

## 🎨 Paleta de Colores y Variables

| Nombre                | Color         | Uso principal                |
|-----------------------|--------------|------------------------------|
| Rosa principal        | #ff69b4      | Botones, acentos, títulos    |
| Rosa secundario       | #ff8dc7      | Líneas, detalles, hover      |
| Rosa claro            | #fff0f5      | Fondo general                |
| Rosa muy claro        | #fff0f8      | Fondo secciones/acento       |
| Rosa super claro      | #fff5f9      | Fondo tarjetas/contacto      |
| Texto principal       | #4a4a4a      | Texto general                |
| Blanco                | #ffffff      | Fondos, textos sobre rosa    |

Variables CSS en `globals.css`:
```css
:root {
  --color-primary: #ff69b4;
  --color-primary-light: #ff8dc7;
  --color-primary-50: #fff0f5;
  --color-primary-100: #fff0f8;
  --color-primary-200: #fff5f9;
  --color-text-primary: #4a4a4a;
  --color-border-primary: #ffe6f3;
  --color-border-accent: #ff8dc7;
}
```

---

## 🧩 Componentes

- **Layout**
  - `Header`: Navegación y logo
  - `Footer`: Pie de página
  - `WhatsAppButton`: Botón flotante de WhatsApp
- **Secciones**
  - `Hero`: Portada principal con imagen y CTA
  - `Services`: Servicios ofrecidos
  - `About`: Sobre Beatriz Mesa
  - `Contact`: Información de contacto y mapa
- **UI**
  - `Button`, `Card`, `SectionTitle`, `IconWrapper`
- **Comunes**
  - `ContactInfo`: Bloques reutilizables de contacto

Todos los componentes son **Server Components** para SEO y performance.

---

## 🚀 Buenas Prácticas y Convenciones

- **Componentización**: Todo el contenido está modularizado y reutilizable.
- **Datos centralizados**: Información y textos en `constants/data.js`.
- **Colores y estilos**: Variables y clases en `constants/colors.js` y `globals.css`.
- **SEO**: Metadatos, Open Graph, Twitter Card y JSON-LD en `constants/metadata.js` y `utils/seo.js`.
- **Accesibilidad**: Etiquetas `alt`, `aria-label`, contraste y estructura semántica.
- **Responsive**: Diseño adaptativo con Tailwind y breakpoints.

---

## 🛠️ Instrucciones de Desarrollo

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```
3. Compila para producción:
   ```bash
   npm run build
   npm start
   ```

---

## 📈 SEO y Performance

- **Server Side Rendering** en todas las páginas.
- **Imágenes optimizadas** con Next.js `<Image />` y preload.
- **Metadatos completos**: title, description, canonical, Open Graph, Twitter Card.
- **Structured Data** (JSON-LD) para negocio local.
- **Accesibilidad** y contraste validados.
- **Performance**: Fuentes y recursos críticos pre-cargados.

---

## 📚 Notas
- Si agregas nuevos componentes, sigue la estructura y convenciones.
- Para nuevos colores, agrégalos en `constants/colors.js` y como variables CSS.
- Para nuevos datos o textos, centralízalos en `constants/data.js`.

---

**Desarrollado por Daniel Arguelles**

---
## Licencia

Este proyecto es de uso privado y exclusivo. No está permitido copiar, modificar, distribuir ni reutilizar el código sin autorización expresa de Daniel Arguelles.
