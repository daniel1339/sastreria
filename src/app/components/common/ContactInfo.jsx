import IconWrapper from '../ui/IconWrapper.jsx';

export default function ContactInfo({ 
  title, 
  content, 
  icon, 
  className = '' 
}) {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className="flex-shrink-0 w-12 h-12 bg-[#ff69b4] bg-opacity-10 rounded-lg flex items-center justify-center">
        <IconWrapper name={icon} className="text-[#ff69b4] text-2xl" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-[#ff69b4] mb-2">{title}</h3>
        {Array.isArray(content) ? (
          content.map((line, i) => (
            <p key={i} className="text-lg">{line}</p>
          ))
        ) : (
          <p className="text-lg">{content}</p>
        )}
      </div>
    </div>
  );
} 