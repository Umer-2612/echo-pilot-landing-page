import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationCardProps {
  name: string;
  status: 'live' | 'coming';
  description: string;
  className?: string;
}

const IntegrationCard = ({ 
  name, 
  status, 
  description, 
  className 
}: IntegrationCardProps) => {
  const isLive = status === 'live';
  
  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:scale-105 overflow-hidden",
        isLive ? "border-black border-2" : "border-gray-200",
        className
      )}
    >
      <CardContent className="p-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <h3 className="text-xl font-semibold mr-3">{name}</h3>
          {isLive ? (
            <Badge className="bg-black text-white">
              <CheckCircle className="w-3 h-3 mr-1" />
              Live
            </Badge>
          ) : (
            <Badge variant="outline" className="border-gray-400 text-gray-600">
              <Clock className="w-3 h-3 mr-1" />
              Soon
            </Badge>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
