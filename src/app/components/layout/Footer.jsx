import { siteData } from '../../constants/data.js';

export default function Footer() {
  return (
    <footer className="bg-[#ff69b4] text-white py-8 px-8 sm:px-20 relative border-t border-[#ff8dc7]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff69b4] via-[#ff8dc7] to-[#ff69b4]"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-xl font-semibold">{siteData.site.name}</div>
        <div className="text-sm">© {siteData.site.year} {siteData.site.name}. Todos los derechos reservados.</div>
      </div>
      <div className="text-xs text-white opacity-70 mt-2 text-center">
        Desarrollado por <a href="https://arguellesdev.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff8dc7]">Daniel Arguelles</a>
      </div>
    </footer>
  );
} 