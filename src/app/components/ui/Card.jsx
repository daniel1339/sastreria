export default function Card({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) {
  const baseClasses = 'bg-white p-8 rounded-lg shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl transform hover:-translate-y-1' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
} 