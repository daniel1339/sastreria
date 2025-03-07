import Image from "next/image";

export const metadata = {
  title: "Sastrería Beatriz Mesa | Confección de alta calidad a medida",
  description: "Sastrería Beatriz Mesa ofrece servicios de confección a medida, arreglos y diseños exclusivos con la mejor calidad y atención personalizada.",
  keywords: ["sastrería", "confección a medida", "Beatriz Mesa", "ropa a medida", "sastres", "arreglos de ropa", "alta costura"],
  openGraph: {
    title: "Sastrería Beatriz Mesa | Confección de alta calidad a medida",
    description: "Servicios de sastrería y confección a medida con la mejor calidad y atención personalizada",
    images: [{ url: "/images/beatriz-mesa-sastreria.jpg" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sastrería Beatriz Mesa | Confección de alta calidad a medida",
    description: "Servicios de sastrería y confección a medida con la mejor calidad y atención personalizada",
    images: ["/images/beatriz-mesa-sastreria.jpg"],
  },
  alternates: {
    canonical: "https://beatrizmesa.com",
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f8f3ff] text-[#4a4a4a] font-[family-name:var(--font-geist-sans)]">
      <header className="py-6 px-8 sm:px-20 border-b border-[#e6e0ed]">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-semibold text-[#8b5fb4]">Beatriz Mesa</div>
          <ul className="hidden sm:flex gap-8 text-sm">
            <li><a href="#servicios" className="hover:text-[#a77dd1] transition-colors">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-[#a77dd1] transition-colors">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-[#a77dd1] transition-colors">Contacto</a></li>
          </ul>
          <button className="sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex flex-col gap-12 py-12 px-8 sm:px-20">
        <section className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-light text-[#8b5fb4]">Arte y elegancia en cada puntada</h1>
            <p className="text-lg">Confección a medida con la más alta calidad y atención personalizada para resaltar tu estilo único.</p>
            <button className="bg-[#a77dd1] text-white px-6 py-3 rounded-md hover:bg-[#8b5fb4] transition-colors">Reservar cita</button>
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image 
              src="/dist/ella.jpeg" 
              alt="Sastrería Beatriz Mesa - Taller de confección" 
              fill
              style={{objectFit: "cover"}}
              priority
            />
          </div>
        </section>

        <section id="servicios" className="py-12">
          <h2 className="text-3xl font-light text-[#8b5fb4] mb-8 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#8b5fb4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#8b5fb4] mb-3 text-center">Transformación de Prendas</h3>
              <p className="text-center">Renovamos y actualizamos tus prendas favoritas dándoles un nuevo estilo y vida.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#8b5fb4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#8b5fb4] mb-3 text-center">Arreglos y Ajustes</h3>
              <p className="text-center">Adaptamos tus prendas favoritas para un ajuste perfecto y una apariencia renovada.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#8b5fb4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#8b5fb4] mb-3 text-center">Diseños Exclusivos</h3>
              <p className="text-center">Creamos diseños únicos para ocasiones especiales con telas de la más alta calidad.</p>
            </div>
          </div>
        </section>

        <section id="nosotros" className="py-12 bg-[#e6e0ed] -mx-8 sm:-mx-20 px-8 sm:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-[#8b5fb4] mb-6">Sobre Beatriz Mesa</h2>
            <p className="mb-4">Con más de 20 años de experiencia en el arte de la sastrería, Beatriz Mesa ha perfeccionado el oficio de crear prendas que realzan la belleza y personalidad de cada cliente.</p>
            <p>Nuestro compromiso es ofrecer un servicio personalizado y de la más alta calidad, utilizando técnicas tradicionales combinadas con innovaciones modernas.</p>
          </div>
        </section>

        <section id="contacto" className="py-12 bg-white -mx-8 sm:-mx-20 px-8 sm:px-20 rounded-t-3xl">
          <h2 className="text-3xl font-light text-[#8b5fb4] mb-8 text-center">Contacto</h2>
          <div className="flex flex-col sm:flex-row gap-12">
            <div className="flex-1 space-y-4">
              <p className="font-medium">Información de contacto</p>
              <p>Calle Principal 123, Ciudad</p>
              <p>Tel: +34 123 456 789</p>
              <p>Email: info@beatrizmesa.com</p>
              <div className="pt-4">
                <p className="font-medium mb-2">Horario</p>
                <p>Lunes a Viernes: 9:00 - 19:00</p>
                <p>Sábados: 10:00 - 14:00</p>
              </div>
            </div>
            <form className="flex-1 space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm mb-1">Nombre</label>
                <input type="text" id="nombre" className="w-full p-2 border border-[#e6e0ed] rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-[#e6e0ed] rounded-md" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm mb-1">Mensaje</label>
                <textarea id="mensaje" rows="4" className="w-full p-2 border border-[#e6e0ed] rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-[#a77dd1] text-white px-6 py-3 rounded-md hover:bg-[#8b5fb4] transition-colors">Enviar mensaje</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#8b5fb4] text-white py-8 px-8 sm:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-xl font-semibold">Beatriz Mesa</div>
          <div className="text-sm">© {new Date().getFullYear()} Sastrería Beatriz Mesa. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
