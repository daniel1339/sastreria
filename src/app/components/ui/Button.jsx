export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  ...props 
}) {
  const baseClasses = 'inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors';
  
  const variants = {
    primary: 'text-[#ff69b4] border border-[#ff69b4] hover:bg-[#ff69b4] hover:text-white',
    secondary: 'bg-[#ff69b4] text-white hover:bg-[#ff8dc7]',
    outline: 'text-[#ff69b4] border-2 border-[#ff69b4] hover:bg-[#ff69b4] hover:text-white'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
} 