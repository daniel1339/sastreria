import { siteData } from '../../constants/data.js';
import Card from '../ui/Card.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import IconWrapper from '../ui/IconWrapper.jsx';

export default function Services() {
  return (
    <section id="servicios" className="py-8 relative">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#fff0f8] rounded-full opacity-10 -z-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <SectionTitle>Nuestros Servicios</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {siteData.services.map((service, index) => (
          <Card key={service.id} className="group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#fff0f8] rounded-full opacity-20 transform scale-0 group-hover:scale-100 transition-transform"></div>
              <div className="relative flex justify-center">
                <IconWrapper 
                  name={service.icon} 
                  className="h-16 w-16 text-[#ff69b4] transform transition-transform group-hover:rotate-6" 
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#ff69b4] mb-4 text-center">{service.title}</h3>
            <p className="text-center leading-relaxed">{service.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
} 