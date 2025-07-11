import { siteData } from '../../constants/data.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import ContactInfo from '../common/ContactInfo.jsx';

export default function Contact() {
  const contactItems = [
    {
      title: siteData.contact.location.title,
      content: siteData.contact.location.address,
      icon: siteData.contact.location.icon
    },
    {
      title: siteData.contact.phone.title,
      content: siteData.contact.phone.numbers.map(phone => (
        <a 
          key={phone.number}
          href={`tel:${phone.number}`} 
          className="hover:text-[#ff69b4] transition-colors block"
        >
          {phone.label}: {phone.display}
        </a>
      )),
      icon: siteData.contact.phone.icon
    },
    {
      title: siteData.contact.schedule.title,
      content: siteData.contact.schedule.hours,
      icon: siteData.contact.schedule.icon
    }
  ];

  return (
    <section id="contacto" className="pt-8 pb-16 bg-white -mx-8 sm:-mx-20 px-8 sm:px-20 rounded-t-3xl relative">
      <div className="absolute top-0 left-1/2 w-32 h-1 bg-gradient-to-r from-[#ff69b4] via-[#ff8dc7] to-[#ff69b4] transform -translate-x-1/2"></div>
      
      <SectionTitle>{siteData.contact.title}</SectionTitle>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-8 bg-[#fff5f9] p-8 rounded-lg shadow-lg">
            {contactItems.map((item, index) => (
              <ContactInfo
                key={index}
                title={item.title}
                content={item.content}
                icon={item.icon}
              />
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-[#fff0f8] rounded-lg transform rotate-2"></div>
            <div className="relative h-[400px] sm:h-full rounded-lg overflow-hidden shadow-xl transform -rotate-2">
              <iframe 
                src={siteData.contact.map.src}
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                loading="lazy"
                fetchPriority="low"
                referrerPolicy="no-referrer-when-downgrade"
                title={siteData.contact.map.title}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 