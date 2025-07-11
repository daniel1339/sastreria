import { siteData } from '../../constants/data.js';
import SectionTitle from '../ui/SectionTitle.jsx';

export default function About() {
  return (
    <section id="nosotros" className="py-8 bg-[#fff0f8] -mx-8 sm:-mx-20 px-8 sm:px-20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-20 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ff69b4] rounded-full opacity-10 -z-10 blur-2xl"></div>
      
      <div className="max-w-3xl mx-auto text-center relative">
        <SectionTitle>{siteData.about.title}</SectionTitle>
        
        {siteData.about.content.map((paragraph, index) => (
          <p key={index} className={`text-lg leading-relaxed ${index === 0 ? 'mb-6' : ''}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
} 