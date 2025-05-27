
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Bot, Users, FileText, BarChart3, Shield, TrendingUp, Zap, ArrowRight, MessageSquare, Eye, Mic } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    "Missing critical meeting notes and action items",
    "Unconscious bias in candidate interviews", 
    "Manual meeting minutes taking hours to compile",
    "Sales opportunities slipping through the cracks"
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Interview Candidate Analysis",
      description: "AI-powered analysis of candidate responses, tone, and engagement patterns in real-time."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Live Meeting Summaries",
      description: "Automatically generate structured meeting minutes and action items as conversations happen."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Powered Sales Coaching",
      description: "Get instant feedback on presentation tone, engagement levels, and missed opportunities."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Team Engagement Insights",
      description: "Track speaking time, participation rates, and collaboration patterns across your team."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Logging",
      description: "Secure recording and documentation for regulated industries with audit trails."
    }
  ];

  const integrations = [
    { name: "Zoom", status: "live", description: "Live Now - Full Integration" },
    { name: "Microsoft Teams", status: "coming", description: "Coming Q2 2024" },
    { name: "Google Meet", status: "coming", description: "Coming Q2 2024" }
  ];

  const useCases = [
    {
      title: "Founders",
      description: "Interview candidates with AI-powered bias detection and comprehensive candidate analysis.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Sales Leaders", 
      description: "Analyze pitch effectiveness, track engagement, and identify missed opportunities in real-time.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "HR Teams",
      description: "Capture compliance evidence and maintain detailed records for regulated discussions.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Product Teams",
      description: "Extract key decisions, track feature discussions, and maintain product development clarity.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Bot Joins",
      description: "EchoPilot seamlessly joins your Zoom meeting as a participant",
      icon: <Bot className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Analyzes Live",
      description: "Real-time AI analysis of audio, video, and conversation patterns",
      icon: <Eye className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Sends AI Summary",
      description: "Detailed insights, summaries, and action items delivered instantly",
      icon: <MessageSquare className="w-8 h-8" />
    }
  ];

  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Yes, EchoPilot uses end-to-end encryption and complies with SOC 2 and GDPR standards. Your meeting data is processed securely and never stored longer than necessary for analysis."
    },
    {
      question: "Can I try a demo?",
      answer: "Absolutely! We offer live demos where you can see EchoPilot in action. Join our waitlist and we'll schedule a personalized demonstration of the platform."
    },
    {
      question: "When will Teams and Google Meet be live?",
      answer: "Microsoft Teams and Google Meet integrations are planned for Q2 2024. Zoom integration is fully live and ready to use today."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI models achieve 95%+ accuracy in speech recognition and sentiment analysis, continuously improving through machine learning and user feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your AI Bot for Zoom,<br />
              <span className="relative">Teams & Google Meet
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full animate-pulse" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              EchoPilot joins your meetings and delivers real-time insights, summaries, and interview analysis with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
                Join the Waitlist
              </Button>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 text-lg">
                See It in Action
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-black rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">The Problem</h2>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600 text-lg">{problem}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">The Solution</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                EchoPilot's AI automatically captures, analyzes, and summarizes every meeting moment that matters.
              </p>
              <div className="flex items-center gap-2 text-black font-semibold">
                <span>Real-time intelligence for better decisions</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform every conversation into valuable intelligence with our advanced AI analysis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-105">
                <CardContent className="p-8">
                  <div className="mb-4 text-black group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Integrations Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Live Integrations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card key={integration.name} className={`transition-all duration-500 hover:scale-105 ${integration.status === 'live' ? 'border-black border-2' : 'border-gray-200'}`}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center items-center mb-4">
                    <h3 className="text-xl font-semibold mr-3">{integration.name}</h3>
                    {integration.status === 'live' ? (
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
                  <p className="text-gray-600">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for teams that value precision, insight, and better decision-making
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={useCase.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center text-black group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your meetings with AI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="flex justify-center text-gray-600 group-hover:text-black transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about EchoPilot
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Meetings?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the early adopters who are already using EchoPilot to make every conversation count.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
              Join the Waitlist
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg">
              See It in Action
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">EchoPilot</h3>
              <p className="text-gray-400 mt-2">Your AI Bot for Zoom, Teams & Google Meet</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:hello@echopilot.ai" className="text-gray-400 hover:text-white transition-colors duration-300">
                Email
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Twitter
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 EchoPilot. Building the future of intelligent meetings.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
