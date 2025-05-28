import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  step: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineSectionProps {
  items: TimelineItem[];
  className?: string;
  variant?: 'light' | 'dark';
}

const TimelineSection = ({ 
  items, 
  className,
  variant = 'light'
}: TimelineSectionProps) => {
  // Style variants based on light/dark mode
  const bgColor = variant === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = variant === 'dark' ? 'text-white' : 'text-black';
  const mutedTextColor = variant === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const lineColor = variant === 'dark' ? 'bg-gray-800' : 'bg-gray-200';
  const accentColor = variant === 'dark' ? 'border-white' : 'border-black';
  const hoverBgColor = variant === 'dark' ? 'group-hover:bg-gray-900' : 'group-hover:bg-gray-50';
  
  return (
    <div className={cn("w-full py-8 sm:py-12 px-4 sm:px-0", bgColor, className)}>
      <div className="container mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className={cn(
            "absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5", 
            lineColor,
            "transform md:translate-x-px"
          )} />
          
          {/* Timeline items */}
          <div className="relative z-10">
            {items.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "relative mb-10 sm:mb-12 group",
                  "md:flex md:justify-between md:even:flex-row-reverse"
                )}
              >
                {/* Step number marker */}
                <div className={cn(
                  "absolute left-6 sm:left-8 md:left-1/2 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center",
                  "transform -translate-x-1/2 md:-translate-x-1/2 z-20",
                  bgColor,
                  "border-2",
                  accentColor,
                  "transition-all duration-300 group-hover:scale-110"
                )}>
                  <span className={cn("text-sm sm:text-base font-bold", textColor)}>{item.step}</span>
                </div>
                
                {/* Content box */}
                <div className={cn(
                  "ml-14 sm:ml-16 md:ml-0 md:w-5/12 p-4 sm:p-6 rounded-lg",
                  bgColor,
                  "border border-transparent",
                  "transition-all duration-300",
                  "group-hover:border-gray-200",
                  hoverBgColor,
                  "group-hover:shadow-lg"
                )}>
                  {/* Icon if provided */}
                  {item.icon && (
                    <div className={cn(
                      "mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                      textColor
                    )}>
                      {item.icon}
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className={cn(
                    "text-xl sm:text-2xl font-bold mb-2 transition-all duration-300 group-hover:translate-x-1",
                    textColor
                  )}>
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={cn(
                    "text-sm sm:text-base transition-all duration-300 group-hover:translate-x-1",
                    mutedTextColor
                  )}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
