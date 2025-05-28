import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
  variant?: 'default' | 'bordered' | 'minimal' | 'glass' | 'dark';
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className,
  index = 0,
  variant = 'default'
}: FeatureCardProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${(index + 1) * 100}ms`;
  
  // Style variants
  const variantStyles = {
    default: "bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-black/10 hover:-translate-y-1",
    bordered: "bg-white border-2 border-black hover:border-black/90 hover:shadow-lg hover:-translate-y-1",
    minimal: "bg-transparent hover:bg-gray-50 border-b border-gray-200 hover:border-black hover-border",
    glass: "backdrop-filter backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 hover-scale",
    dark: "bg-black text-white border border-gray-800 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1"
  };

  return (
    <div 
      className={cn(
        "relative p-5 sm:p-6 md:p-8 rounded-lg transition-all duration-500 overflow-hidden group h-full", // Added h-full for consistent height in grid layouts
        variantStyles[variant],
        className
      )}
      style={{ animationDelay }}
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-all duration-500"
           style={{
             background: variant === 'dark' 
               ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)' 
               : 'linear-gradient(135deg, rgba(0,0,0,0.03) 0%, transparent 100%)'
           }} />
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-lg blur-sm transition-all duration-500"
           style={{
             background: variant === 'dark' 
               ? 'linear-gradient(to right, #ffffff, transparent)' 
               : 'linear-gradient(to right, #000000, transparent)'
           }} />
      
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 relative z-10 h-full"> 
        {/* Icon with animated hover effect */}
        <div className={cn(
          "text-4xl transition-all duration-500",
          variant === 'dark' ? 'text-white' : 'text-black',
          "transform group-hover:scale-110 group-hover:text-black/90"
        )}>
          {icon}
        </div>
        
        {/* Title */}
        <h3 className={cn(
          "text-xl sm:text-2xl font-bold mt-2 mb-2 transition-all duration-300 relative",
          "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 group-hover:after:w-12 after:transition-all after:duration-500", // Underline animation
          variant === 'dark' ? 'text-white group-hover:text-white' : 'text-black group-hover:text-black'
        )}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={cn(
          "text-sm sm:text-base transition-all duration-300 relative z-10",
          variant === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
        )}>
          {description}
        </p>
      </div>
      
      {/* Corner accent that appears on hover */}
      <div className={cn(
        "absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-l-transparent border-b-transparent opacity-0 group-hover:opacity-15 transition-all duration-500 scale-0 group-hover:scale-100 origin-top-right",
        variant === 'dark' ? 'border-t-white/50 border-r-white/50' : 'border-t-black/30 border-r-black/30'
      )} />
      
      {/* Bottom accent line that animates on hover */}
      <div className={cn(
        "absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700", 
        variant === 'dark' ? 'bg-white/50' : 'bg-black/40'
      )} />

      {/* Subtle highlight effect */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default FeatureCard;
