import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  glowEffect?: boolean;
}

const AnimatedButton = ({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  className, 
  animate = true,
  glowEffect = false,
  ...props 
}: AnimatedButtonProps) => {
  
  const baseStyles = cn(
    "relative overflow-hidden transition-all duration-300 font-medium tracking-wide",
    animate && "transform hover:-translate-y-1 active:translate-y-0",
    glowEffect && "hover:animate-neon-pulse",
    className
  );
  
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-900 shadow-sm",
    secondary: "bg-white text-black hover:bg-gray-50 border border-black shadow-sm",
    outline: "bg-transparent text-black hover:bg-black hover:text-white border border-black",
    ghost: "bg-transparent hover:bg-black/5 text-black",
    gradient: "bg-gradient-to-r from-black via-gray-800 to-black text-white bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
  };
  
  const sizeStyles = {
    default: "px-4 py-2",
    sm: "text-sm px-3 py-1.5",
    lg: "text-lg px-6 py-3",
    xl: "text-xl px-8 py-4",
    icon: "p-2"
  };

  return (
    <Button 
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size])}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {animate && (
        <span className="shimmer absolute inset-0 w-full h-full" />
      )}
      
      {variant === 'gradient' && (
        <span className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </Button>
  );
};

export default AnimatedButton;
