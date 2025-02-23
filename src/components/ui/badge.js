export function Badge({ children, className, variant = "default" }) {
    const baseStyles = "inline-block px-3 py-1 text-sm font-semibold rounded-lg";
    const variants = {
      default: "bg-primary text-white",
      outline: "border border-primary text-primary",
    };
    
    return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>;
  }
  