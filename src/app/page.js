import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppButton from './components/layout/WhatsAppButton.jsx';
import Hero from './components/sections/Hero.jsx';
import Services from './components/sections/Services.jsx';
import About from './components/sections/About.jsx';
import Contact from './components/sections/Contact.jsx';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#fff0f5] text-[#4a4a4a] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="flex flex-col gap-8 py-8 px-8 sm:px-20">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
