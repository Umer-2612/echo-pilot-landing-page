import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'light' | 'dark' | 'gradient';
  fullHeight?: boolean;
  innerClassName?: string;
  noPadding?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ 
  id,
  children, 
  className, 
  variant = 'white',
  fullHeight = false,
  innerClassName,
  noPadding = false,
  ...props 
}, ref) => {
  
  const variantStyles = {
    white: "bg-white text-black",
    light: "bg-gray-50 text-black",
    dark: "bg-black text-white",
    gradient: "gradient-bg text-white"
  };
  
  return (
    <section 
      id={id}
      ref={ref}
      className={cn(
        noPadding ? "" : "py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 relative",
        fullHeight && "min-h-screen flex items-center justify-center",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto w-full", innerClassName)}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
