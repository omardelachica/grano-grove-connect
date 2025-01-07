import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoasterForm } from "./RoasterForm";
import { ConsumerForm } from "./ConsumerForm";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { BenefitsSection } from "./sections/BenefitsSection";

type UserType = "roaster" | "consumer" | null;

type Props = {
  onComplete?: () => void;
};

export const WelcomeScreen = ({ onComplete }: Props) => {
  const [userType, setUserType] = useState<UserType>(null);

  if (userType) {
    return (
      <div className="container mx-auto px-4 py-16 bg-white">
        {userType === "roaster" ? <RoasterForm /> : <ConsumerForm />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-[80vh] flex items-center w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1447933601403-0c6688de566e)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-32 md:py-48 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img 
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
              alt="Grano Logo" 
              className="h-32 mx-auto mb-8"
            />
            <h1 className="font-playfair text-4xl md:text-6xl text-cream mb-8 animate-fadeIn">
              Building A Global Coffee Community
            </h1>
            <p className="text-cream/90 mb-12 max-w-2xl mx-auto text-lg md:text-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Connecting Roasters, Producers, and Coffee Aficionados worldwide. 
              Are you interested? Join our waiting list below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => setUserType("roaster")}
                className="p-8 rounded-xl border-2 border-cream/20 hover:border-cream transition-colors bg-espresso/40 backdrop-blur-sm group"
              >
                <Coffee className="w-12 h-12 text-gold mb-4 mx-auto" />
                <h2 className="font-playfair text-2xl text-gold mb-2">I'm a Roaster</h2>
                <p className="text-cream/80">Join our marketplace and showcase your specialty beans</p>
              </button>

              <button
                onClick={() => setUserType("consumer")}
                className="p-8 rounded-xl border-2 border-cream/20 hover:border-cream transition-colors bg-espresso/40 backdrop-blur-sm group"
              >
                <Coffee className="w-12 h-12 text-gold mb-4 mx-auto" />
                <h2 className="font-playfair text-2xl text-gold mb-2">I'm a Coffee Lover</h2>
                <p className="text-cream/80">Discover and purchase exceptional coffee beans</p>
              </button>
            </div>

            <button
              onClick={() => {
                if (onComplete) onComplete();
              }}
              className="mt-8 text-cream/60 hover:text-cream text-sm block mx-auto"
            >
              Skip for now
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <p className="text-cream/80 mb-2 text-sm">Discover more about Grano</p>
            <div className="flex flex-col items-center justify-center gap-1">
              <ChevronDown className="w-6 h-6 text-cream/80" />
              <ChevronDown className="w-6 h-6 text-cream/80 -mt-4" />
            </div>
          </motion.div>
        </div>
      </div>

      <HowItWorksSection />
      <BenefitsSection />
    </div>
  );
};