import Image from "next/image";
import { siteData } from '../../constants/data.js';
import Button from '../ui/Button.jsx';
import { optimizeImage } from '../../utils/seo.js';

export default function Hero() {
  const imageConfig = optimizeImage(
    siteData.hero.image.src,
    siteData.hero.image.alt,
    {
      priority: true,
      sizes: "(max-width: 600px) 90vw, (max-width: 1200px) 50vw, 344px"
    }
  );

  return (
    <section className="relative min-h-[60vh] flex items-center py-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-light leading-tight">
            <span className="text-[#ff69b4] block mb-1">{siteData.hero.title.line1}</span>
            <span className="text-[#ff69b4] block mb-1">{siteData.hero.title.line2}</span>
            <span className="text-[#ff8dc7]">{siteData.hero.title.line3}</span>
          </h1>
          
          <p className="text-base sm:text-lg leading-relaxed max-w-xl text-[#4a4a4a]/80">
            {siteData.hero.description}
          </p>

          <Button 
            href={siteData.hero.cta.href} 
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
          >
            <span>{siteData.hero.cta.text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>

        <div className="relative w-full min-h-[220px] sm:min-h-[300px] lg:min-h-0 lg:w-full lg:max-w-none">
          <div className="relative rounded-lg overflow-hidden aspect-[4/3] w-full h-full border-2 border-[#ff8dc7] shadow-lg">
            <Image 
              {...imageConfig}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center"
              }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 