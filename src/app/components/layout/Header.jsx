import Image from "next/image";
import { siteData } from '../../constants/data.js';
import IconWrapper from '../ui/IconWrapper.jsx';

export default function Header() {
  return (
    <header className="py-6 px-8 sm:px-20 border-b border-[#ffe6f3] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff69b4] via-[#ff8dc7] to-[#ff69b4]"></div>
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-semibold text-[#ff69b4] relative">
          <Image 
            src="/dist/beatriz.png" 
            alt="Beatriz Mesa" 
            width={150}
            height={50}
            className="relative z-10"
            priority
          />
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#ff8dc7] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
        </div>
        
        <ul className="hidden sm:flex gap-8 text-sm">
          {siteData.navigation.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="relative group"
              >
                <span className="relative z-10 hover:text-[#ff8dc7] transition-colors">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff8dc7] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <button className="sm:hidden" aria-label="Menú móvil">
          <IconWrapper name="bars" className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
} 