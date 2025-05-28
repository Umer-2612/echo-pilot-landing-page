import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Your AI Meeting Assistant';
  
  // Animation for hero visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Typewriter effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  return (
    <div className={cn(
      "min-h-screen w-full relative flex flex-col items-center justify-center",
      className
    )}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full gradient-bg opacity-5" />
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full animate-float delay-300" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gray-300 rounded-full animate-float delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gray-800 rounded-full animate-float delay-200" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-gray-500 rounded-full animate-float delay-400" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-transparent to-gray-50 opacity-30 blur-3xl" />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 text-center h-full flex flex-col justify-center">
        {/* Status badge */}
        <div className={cn(
          "inline-block mb-4 sm:mb-6 md:mb-8 transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium animate-border-glow">
            Available for Zoom <span className="ml-2 bg-white text-black px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[10px] sm:text-xs">LIVE</span>
          </span>
        </div>
        
        {/* Main heading with typewriter effect */}
        <h1 className={cn(
          "text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight",
          isVisible ? "opacity-100" : "opacity-0",
          "transition-opacity duration-1000"
        )}>
          <span className="relative">
            <span>{typedText}</span>
            {typedText.length < fullText.length && (
              <span className="typed-cursor" />
            )}
          </span>
        </h1>
        
        {/* Subtitle with staggered animation */}
        <p className={cn(
          "text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          "transition-all duration-1000 delay-300"
        )}>
          EchoPilot joins your calls. Takes notes. Analyzes sentiment. Delivers insights.
        </p>
        
        {/* CTA buttons with animation */}
        <div className={cn(
          "flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          "transition-all duration-1000 delay-500"
        )}>
          <AnimatedButton 
            variant="gradient" 
            size="lg" 
            className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg"
            glowEffect
          >
            Join the Waitlist <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4 md:h-5 md:w-5 inline" />
          </AnimatedButton>
          
          <AnimatedButton 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg"
          >
            Watch Demo
          </AnimatedButton>
        </div>
        
        {/* Scroll indicator - unified for all screen sizes */}
        <div className={cn(
          "fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center",
          isVisible ? "opacity-100" : "opacity-0",
          "transition-opacity duration-1000 delay-700 animate-bounce-slow z-20"
        )}>
          <div className="px-4 py-2 bg-black text-white rounded-full flex items-center gap-2 shadow-lg border border-white/10">
            <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
