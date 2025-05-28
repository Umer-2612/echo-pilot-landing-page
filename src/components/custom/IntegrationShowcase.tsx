import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";
import { cn } from '@/lib/utils';

interface Integration {
  name: string;
  status: 'live' | 'coming';
  description: string;
  logo?: React.ReactNode;
}

interface IntegrationShowcaseProps {
  integrations: Integration[];
  className?: string;
  variant?: 'grid' | 'row';
}

const IntegrationShowcase = ({ 
  integrations, 
  className,
  variant = 'grid'
}: IntegrationShowcaseProps) => {
  return (
    <div className={cn(
      "w-full",
      variant === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" : "flex flex-col space-y-4",
      className
    )}>
      {integrations.map((integration, index) => {
        const isLive = integration.status === 'live';
        
        return (
          <div 
            key={integration.name}
            className={cn(
              "relative overflow-hidden group",
              "transition-all duration-500",
              "rounded-lg p-5 sm:p-6 md:p-8", // Responsive padding
              "border",
              isLive ? "border-black animate-border-glow" : "border-gray-200",
              "bg-white",
              "hover-glow h-full", // Added h-full for consistent heights
              variant === 'row' && "flex items-center justify-between"
            )}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Accent line for live integrations */}
            {isLive && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-500 to-transparent" />
            )}
            
            <div className={cn(
              "flex flex-1 h-full", // Added h-full for vertical alignment
              variant === 'row' ? "flex-row items-center" : "flex-col items-center justify-center"
            )}>
              {/* Logo if provided */}
              {integration.logo && (
                <div className="mb-3 sm:mb-4 text-black transition-transform duration-300 group-hover:scale-110">
                  {integration.logo}
                </div>
              )}
              
              {/* Name and status badge */}
              <div className={cn(
                "flex flex-wrap items-center gap-2 sm:gap-3", // Added flex-wrap for small screens
                variant === 'row' ? "" : "mb-3 sm:mb-4"
              )}>
                <h3 className="text-xl sm:text-2xl font-bold">{integration.name}</h3>
                {isLive ? (
                  <Badge className="bg-black text-white text-xs sm:text-sm whitespace-nowrap"> {/* Added whitespace-nowrap */}
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-gray-400 text-gray-600 text-xs sm:text-sm whitespace-nowrap"> {/* Added whitespace-nowrap */}
                    <Clock className="w-3 h-3 mr-1" />
                    Soon
                  </Badge>
                )}
              </div>
              
              {/* Description */}
              <p className={cn(
                "text-sm sm:text-base text-gray-600 text-center transition-all duration-300 group-hover:translate-y-0",
                variant === 'row' ? "ml-4" : ""
              )}>
                {integration.description}
              </p>
            </div>
            
            {/* Hover effect overlay */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-0 group-hover:opacity-20 transition-opacity duration-500",
              isLive ? "from-transparent to-black/5" : ""
            )} />
          </div>
        );
      })}
    </div>
  );
};

export default IntegrationShowcase;
