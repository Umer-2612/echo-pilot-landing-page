import React from "react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Bot, Users, FileText, BarChart3, Shield, TrendingUp, Zap, ArrowRight, MessageSquare, Eye, Mic, ChevronDown } from "lucide-react";
import "../styles/animations.css";
import AnimatedButton from "@/components/custom/AnimatedButton";
import Section from "@/components/custom/Section";
import SectionHeading from "@/components/custom/SectionHeading";
import FeatureCard from "@/components/custom/FeatureCard";
import IntegrationShowcase from "@/components/custom/IntegrationShowcase";
import HeroSection from "@/components/custom/HeroSection";
import TimelineSection from "@/components/custom/TimelineSection";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sectionsRef.current.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Simplified and more impactful feature descriptions
  const features = [
    {
      icon: (
        <div className="p-3 bg-blue-50 rounded-xl inline-flex items-center justify-center">
          <Users className="w-10 h-10 text-blue-600" />
        </div>
      ),
      title: "Interview Intelligence",
      description: "Analyze candidate responses without bias. Make hiring decisions based on data, not intuition."
    },
    {
      icon: (
        <div className="p-3 bg-purple-50 rounded-xl inline-flex items-center justify-center">
          <FileText className="w-10 h-10 text-purple-600" />
        </div>
      ),
      title: "Instant Meeting Notes",
      description: "Never write meeting notes again. AI-generated summaries delivered to your inbox immediately."
    },
    {
      icon: (
        <div className="p-3 bg-green-50 rounded-xl inline-flex items-center justify-center">
          <TrendingUp className="w-10 h-10 text-green-600" />
        </div>
      ),
      title: "Sales Performance",
      description: "Track engagement, identify missed opportunities, and close more deals with AI insights."
    },
    {
      icon: (
        <div className="p-3 bg-gray-900 rounded-xl inline-flex items-center justify-center">
          <BarChart3 className="w-10 h-10 text-white" />
        </div>
      ),
      title: "Team Analytics",
      description: "Understand team dynamics. Who talks? Who listens? Who drives decisions?"
    }
  ];

  // More concise integrations
  const integrations = [
    { name: "Zoom", status: "live", description: "Available Now" },
    { name: "Microsoft Teams", status: "coming", description: "Coming Soon" },
    { name: "Google Meet", status: "coming", description: "Coming Soon" }
  ];

  // More focused use cases
  const useCases = [
    {
      title: "HR",
      description: "Unbiased candidate assessment. Structured interviews. Better hires.",
      icon: (
        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
      ),
      color: "blue"
    },
    {
      title: "Sales", 
      description: "Client sentiment analysis. Deal opportunity alerts. Revenue acceleration.",
      icon: (
        <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
          <TrendingUp className="w-8 h-8 text-amber-600" />
        </div>
      ),
      color: "amber"
    },
    {
      title: "Leadership",
      description: "Team engagement metrics. Decision tracking. Strategic clarity.",
      icon: (
        <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center">
          <Zap className="w-8 h-8 text-purple-600" />
        </div>
      ),
      color: "purple"
    },
    {
      title: "Remote Teams",
      description: "Real-time insights. Global collaboration. No communication gaps.",
      icon: (
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <MessageSquare className="w-8 h-8 text-green-600" />
        </div>
      ),
      color: "green"
    }
  ];

  // Simpler how it works
  const howItWorks = [
    {
      step: "01",
      title: "Join",
      description: "EchoPilot enters your meetings like any other participant"
    },
    {
      step: "02", 
      title: "Listen",
      description: "AI analyzes conversations, tone, and engagement in real-time"
    },
    {
      step: "03",
      title: "Deliver",
      description: "Instant summaries and insights delivered to your inbox"
    }
  ];

  // More concise FAQs
  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Yes. End-to-end encryption. SOC 2 and GDPR compliant. Your data is never stored longer than necessary."
    },
    {
      question: "Can I see a demo?",
      answer: "Absolutely. Join our waitlist for a personalized demonstration of EchoPilot in action."
    },
    {
      question: "When will Teams and Meet be available?",
      answer: "Coming soon. Zoom integration is already live and ready to use today."
    },
    {
      question: "How accurate is the AI?",
      answer: "Our models achieve 95%+ accuracy in speech recognition and sentiment analysis, with continuous improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-effect py-3 sm:py-4 md:py-5 px-3 sm:px-5 md:px-6 border-b border-gray-100 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-lg sm:text-xl md:text-2xl flex items-center">
            <span className="mr-1 w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full inline-block"></span>
            echo<span className="text-black font-extrabold">pilot</span>
          </div>
          
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {['Features', 'Use Cases', 'Integrations', 'How It Works'].map((item, i) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(i+1)} 
                className={`text-sm font-medium hover-border pb-1 ${activeSection === i+1 ? 'text-black border-b border-black' : 'text-gray-500 hover:text-black border-b border-transparent'} transition-all duration-300`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            <AnimatedButton 
              variant="gradient" 
              size="sm" 
              className="text-xs py-1 px-2 sm:py-1.5 sm:px-3"
            >
              Join Waitlist
            </AnimatedButton>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-1 rounded-md bg-black/5 hover:bg-black/10 text-gray-700 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation overlay - would be toggled in a real application */}
        {/* <div className="md:hidden fixed inset-0 bg-white z-40 p-5 flex flex-col" style={{display: 'none'}}>
          <div className="flex justify-between items-center mb-8">
            <div className="font-bold text-xl">echo<span className="text-black font-extrabold">pilot</span></div>
            <button className="p-1 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {['Features', 'Use Cases', 'Integrations', 'How It Works'].map((item, i) => (
              <button key={item} className="py-3 text-left text-lg font-medium border-b border-gray-100">
                {item}
              </button>
            ))}
          </div>
          <div className="mt-auto pt-8">
            <AnimatedButton variant="gradient" className="w-full py-3">
              Join Waitlist
            </AnimatedButton>
          </div>
        </div> */}
      </nav>

      {/* Hero Section with modern design */}
      <div id="hero" ref={el => sectionsRef.current[0] = el}>
        <HeroSection />
      </div>

      {/* Features Section */}
      <Section 
        variant="white" 
        className="relative overflow-hidden py-16 sm:py-20 md:py-24" 
        id="features"
        ref={el => sectionsRef.current[1] = el}
      >
        {/* Background accent elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-gray-50 to-transparent rounded-full opacity-70 blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-gray-50 to-transparent rounded-full opacity-70 blur-3xl -z-0"></div>
        
        <SectionHeading 
          title="The Meeting Revolution" 
          subtitle="EchoPilot turns every conversation into actionable intelligence"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              variant={index === 3 ? 'dark' : 'default'}
              className={index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}
            />
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section 
        variant="light" 
        className="py-16 sm:py-20 md:py-24 relative overflow-hidden" 
        id="use-cases"
        ref={el => sectionsRef.current[2] = el}
      >
        {/* Background decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-b from-white to-transparent rounded-full opacity-80 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-t from-white to-transparent rounded-full opacity-80 blur-3xl"></div>
        
        <SectionHeading 
          title="Built for Every Team" 
          subtitle="Tailored insights for specific roles and needs"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14 md:mt-16 relative z-10">
          {useCases.map((useCase, index) => {
            // Determine color classes based on the color property
            const borderHoverClass = {
              'hover:border-blue-200': useCase.color === 'blue',
              'hover:border-amber-200': useCase.color === 'amber',
              'hover:border-purple-200': useCase.color === 'purple',
              'hover:border-green-200': useCase.color === 'green'
            };
            
            const titleHoverClass = {
              'group-hover:text-blue-600': useCase.color === 'blue',
              'group-hover:text-amber-600': useCase.color === 'amber',
              'group-hover:text-purple-600': useCase.color === 'purple',
              'group-hover:text-green-600': useCase.color === 'green'
            };
            
            const cornerGradientClass = {
              'from-blue-50': useCase.color === 'blue',
              'from-amber-50': useCase.color === 'amber',
              'from-purple-50': useCase.color === 'purple',
              'from-green-50': useCase.color === 'green'
            };
            
            const bottomAccentClass = {
              'bg-blue-400': useCase.color === 'blue',
              'bg-amber-400': useCase.color === 'amber',
              'bg-purple-400': useCase.color === 'purple',
              'bg-green-400': useCase.color === 'green'
            };
            
            return (
              <div 
                key={useCase.title}
                className={cn(
                  "group relative bg-white rounded-xl p-6 sm:p-8 transition-all duration-500",
                  "shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-100",
                  "overflow-hidden h-full",
                  borderHoverClass
                )}
              >
                {/* Icon */}
                <div className="mb-5">
                  {useCase.icon}
                </div>
                
                {/* Title */}
                <h3 className={cn(
                  "text-xl font-bold mb-3 transition-colors duration-300",
                  titleHoverClass
                )}>
                  {useCase.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                
                {/* Decorative corner accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl to-transparent",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full",
                  cornerGradientClass
                )}></div>
                
                {/* Bottom accent line */}
                <div className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700",
                  bottomAccentClass
                )}></div>
              </div>
            );
          })}
        </div>
        
        {/* Simple. Intelligent. Powerful. */}
        <div className="mt-16 text-center text-gray-500 font-light text-lg mb-6">
          Simple. Intelligent. Powerful.
        </div>
        
        {/* Scroll to explore button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => scrollToSection(3)} 
            className="px-4 py-2 bg-black text-white rounded-full flex items-center gap-2 shadow-lg opacity-80 hover:opacity-100 transition-all duration-300 animate-bounce-slow"
          >
            <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section 
        variant="black" 
        className="py-24" 
        id="how-it-works"
        ref={el => sectionsRef.current[3] = el}
      >
        <SectionHeading 
          title="How It Works" 
          subtitle="Simple. Intelligent. Seamless." 
          variant="dark"
        />
        
        <TimelineSection 
          items={howItWorks.map(item => ({ 
            step: item.step,
            title: item.title,
            description: item.description
          }))}
          variant="dark"
          className="mt-20"
        />
      </Section>

      {/* Integrations Section */}
      <Section 
        variant="white" 
        className="py-24" 
        id="integrations"
        ref={el => sectionsRef.current[4] = el}
      >
        <SectionHeading 
          title="Platform Integrations" 
          subtitle="Seamlessly works with your favorite meeting platforms"
        />
        
        <div className="mt-16">
          <IntegrationShowcase 
            integrations={integrations} 
            variant="grid" 
          />
        </div>
        
        {/* Visual accent */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-1 bg-gradient-to-r from-black to-transparent rounded animate-fade-in" />
          <div className="h-1 bg-gradient-to-r from-transparent via-black to-transparent rounded animate-fade-in delay-200" />
          <div className="h-1 bg-gradient-to-r from-transparent to-black rounded animate-fade-in delay-400" />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="light">
        <SectionHeading 
          title="FAQ" 
          subtitle="Common questions about EchoPilot"
        />
        
        <div className="max-w-3xl mx-auto mt-8 sm:mt-12 md:mt-16 px-2 sm:px-0">
          <Accordion type="single" collapsible className="w-full divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-0 py-3 sm:py-4 group"
              >
                <AccordionTrigger 
                  className="text-left text-base sm:text-lg md:text-xl font-bold hover:no-underline group-hover:text-black data-[state=open]:text-black transition-colors"
                >
                  <div className="flex items-center">
                    <span className="hidden sm:inline-block text-xs sm:text-sm font-mono text-gray-400 mr-2 sm:mr-4 group-hover:text-black transition-colors">0{index + 1}</span>
                    <span className="pr-8">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base md:text-lg sm:pl-10 animate-fade-in-up">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient" className="overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10 px-4 sm:px-6">
          {/* Background effects */}
          <div className="absolute -top-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-white opacity-5 blur-3xl animate-float delay-300" />
          <div className="absolute -bottom-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-white opacity-5 blur-3xl animate-float delay-700" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight animate-fade-in-up">
            Ready to transform <br className="hidden sm:block" />
            <span className="animate-border-glow">your meetings?</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-xl sm:max-w-2xl mx-auto animate-fade-in-up delay-200">
            Join the pioneers already using EchoPilot to supercharge their team communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-400">
            <AnimatedButton 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg shimmer"
              glowEffect
            >
              Join the Waitlist
            </AnimatedButton>
            
            <AnimatedButton 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Request Demo
            </AnimatedButton>
          </div>
          
          <div className="mt-10 sm:mt-16 flex justify-center">
            <div className="inline-flex gap-2 items-center text-gray-400 text-xs sm:text-sm border border-gray-700 rounded-full px-3 py-1 sm:px-4 sm:py-2 animate-fade-in-up delay-600">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live and Ready for Your Meetings
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="font-bold text-3xl mb-3 animate-fade-in-up">echo<span className="text-black">pilot</span></div>
              <p className="text-gray-500 animate-fade-in-up delay-200">Your AI Meeting Assistant</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <a href="mailto:hello@echopilot.ai" className="text-gray-500 hover:text-black transition-colors duration-300 hover-border pb-1 text-lg">
                Email
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300 hover-border pb-1 text-lg">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300 hover-border pb-1 text-lg">
                Twitter
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">© 2024 EchoPilot. Built with ❤️ by a solo founder.</p>
          </div>
          
          {/* Visual accent */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent rounded opacity-30"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
