export default function SectionTitle({ 
  children, 
  className = '',
  showLine = true,
  ...props 
}) {
  const baseClasses = 'text-3xl font-light text-[#ff69b4] mb-12 text-center relative';
  const classes = `${baseClasses} ${className}`;
  
  return (
    <h2 className={classes} {...props}>
      <span className="relative inline-block">
        {children}
        {showLine && (
          <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-[#ff8dc7] transform -translate-x-1/2"></span>
        )}
      </span>
    </h2>
  );
} 