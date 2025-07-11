import { siteData } from '../../constants/data.js';

export default function Footer() {
  return (
    <footer className="bg-[#ff69b4] text-white py-8 px-8 sm:px-20 relative border-t border-[#ff8dc7]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff69b4] via-[#ff8dc7] to-[#ff69b4]"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-xl font-semibold">{siteData.site.name}</div>
        <div className="text-sm">© {siteData.site.year} {siteData.site.name}. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
} 