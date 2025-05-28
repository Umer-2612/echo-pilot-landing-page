import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  variant?: "light" | "dark";
  animated?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  center = true,
  className,
  variant = "light",
  animated = true,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        center && "text-center",
        animated && "opacity-0 animate-fade-in-up",
        className
      )}
    >
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight",
          variant === "dark" ? "text-white" : "text-black",
          animated && "transform transition-all duration-500"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg md:text-xl max-w-sm sm:max-w-xl md:max-w-2xl leading-relaxed",
            center && "mx-auto",
            variant === "dark" ? "text-gray-300" : "text-gray-600",
            animated && "delay-100"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Optional visual accent */}
      {center && (
        <div className="flex justify-center mt-6 opacity-50">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" />
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
