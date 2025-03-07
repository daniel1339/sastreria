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
      <header className="py-6 px-8 sm:px-20 border-b border-[#e6e0ed] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5fb4] via-[#a77dd1] to-[#8b5fb4]"></div>
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-semibold text-[#8b5fb4] relative">
            <span className="relative z-10">Beatriz Mesa</span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#a77dd1] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
          </div>
          <ul className="hidden sm:flex gap-8 text-sm">
            {["Servicios", "Nosotros", "Contacto"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="relative group"
                >
                  <span className="relative z-10 hover:text-[#a77dd1] transition-colors">{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a77dd1] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex flex-col gap-8 py-8 px-8 sm:px-20">
        <section className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-light leading-tight">
                <span className="text-[#8b5fb4] block mb-1">Arte y</span>
                <span className="text-[#8b5fb4] block mb-1">elegancia en</span>
                <span className="text-[#a77dd1]">cada puntada</span>
              </h1>
              
              <p className="text-base md:text-lg leading-relaxed max-w-xl text-[#4a4a4a]/80">
                Donde la tradición se encuentra con el estilo contemporáneo para crear prendas que reflejan tu personalidad única.
              </p>

              <a 
                href="#servicios" 
                className="inline-flex items-center px-6 py-3 text-[#8b5fb4] font-medium border border-[#8b5fb4] rounded-lg hover:bg-[#8b5fb4] hover:text-white transition-colors"
              >
                <span>Descubre nuestros servicios</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image 
                  src="/dist/ella.jpeg" 
                  alt="Sastrería Beatriz Mesa - Taller de confección" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                  priority
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-16 relative">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#e6e0ed] rounded-full opacity-10 -z-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl font-light text-[#8b5fb4] mb-12 text-center relative">
            <span className="relative inline-block">
              Nuestros Servicios
              <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-[#a77dd1] transform -translate-x-1/2"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Transformación de Prendas",
                description: "Renovamos y actualizamos tus prendas favoritas dándoles un nuevo estilo y vida.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                )
              },
              {
                title: "Arreglos y Ajustes",
                description: "Adaptamos tus prendas favoritas para un ajuste perfecto y una apariencia renovada.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                )
              },
              {
                title: "Diseños Exclusivos",
                description: "Creamos diseños únicos para ocasiones especiales con telas de la más alta calidad.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                )
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#e6e0ed] rounded-full opacity-20 transform scale-0 group-hover:scale-100 transition-transform"></div>
                  <div className="relative flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#8b5fb4] transform transition-transform group-hover:rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {service.icon}
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#8b5fb4] mb-4 text-center">{service.title}</h3>
                <p className="text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="nosotros" className="py-16 bg-[#e6e0ed] -mx-8 sm:-mx-20 px-8 sm:px-20 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-20 -z-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8b5fb4] rounded-full opacity-10 -z-10 blur-2xl"></div>
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-3xl font-light text-[#8b5fb4] mb-8 relative inline-block">
              Sobre Beatriz Mesa
              <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-[#a77dd1] transform -translate-x-1/2"></span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed">Con más de 20 años de experiencia en el arte de la sastrería, Beatriz Mesa ha perfeccionado el oficio de crear prendas que realzan la belleza y personalidad de cada cliente.</p>
            <p className="text-lg leading-relaxed">Nuestro compromiso es ofrecer un servicio personalizado y de la más alta calidad, utilizando técnicas tradicionales combinadas con innovaciones modernas.</p>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-white -mx-8 sm:-mx-20 px-8 sm:px-20 rounded-t-3xl relative">
          <div className="absolute top-0 left-1/2 w-32 h-1 bg-gradient-to-r from-[#8b5fb4] via-[#a77dd1] to-[#8b5fb4] transform -translate-x-1/2"></div>
          <h2 className="text-3xl font-light text-[#8b5fb4] mb-12 text-center relative">
            <span className="relative inline-block">
              Visítanos
              <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-[#a77dd1] transform -translate-x-1/2"></span>
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-8 bg-[#f8f3ff] p-8 rounded-lg shadow-lg">
                {[
                  {
                    title: "Ubicación",
                    content: "Carrera 25 # 39 sur 16",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Contáctanos",
                    content: [
                      "Teléfono: (604) 271 2002",
                      "Celular: 305 290 5604"
                    ],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )
                  },
                  {
                    title: "Horario",
                    content: [
                      "Lunes a Viernes: 9:00 - 19:00",
                      "Sábados: 10:00 - 14:00"
                    ],
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#8b5fb4] bg-opacity-10 rounded-lg flex items-center justify-center">
                      <span className="text-[#8b5fb4]">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#8b5fb4] mb-2">{item.title}</h3>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <p key={i} className="text-lg">{line}</p>
                        ))
                      ) : (
                        <p className="text-lg">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#e6e0ed] rounded-lg transform rotate-2"></div>
                <div className="relative h-[400px] sm:h-full rounded-lg overflow-hidden shadow-xl transform -rotate-2">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4675763573595!2d-75.57455792474925!3d6.201727627565455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683d0ac6d7857%3A0x3f0368a2575c8d4f!2sCra.%2025%20%2339%20Sur-16%2C%20Envigado%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1710284507090!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#8b5fb4] text-white py-8 px-8 sm:px-20 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5fb4] via-[#a77dd1] to-[#8b5fb4]"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-xl font-semibold">Beatriz Mesa</div>
          <div className="text-sm">© {new Date().getFullYear()} Sastrería Beatriz Mesa. Todos los derechos reservados.</div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573052905604"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#8b5fb4] hover:bg-[#a77dd1] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute right-16 bg-white text-[#8b5fb4] px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Escríbenos por WhatsApp
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
