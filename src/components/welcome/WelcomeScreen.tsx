import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { RoasterForm } from "./RoasterForm";
import { ConsumerForm } from "./ConsumerForm";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { HeroSection } from "@/components/HeroSection";

type UserType = "roaster" | "consumer" | null;

type Props = {
  onComplete?: () => void;
};

export const WelcomeScreen = ({ onComplete }: Props) => {
  const [userType, setUserType] = useState<UserType>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('leads').insert({
        email,
        source: 'welcome_hero',
        type: 'newsletter',
        created_at: new Date().toISOString()
      });

      if (error) throw error;

      toast({
        title: "Welcome to Grano!",
        description: "Thank you for joining our coffee community.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (userType) {
    return (
      <div className="container mx-auto px-4 py-16 bg-white">
        {userType === "roaster" ? <RoasterForm /> : <ConsumerForm />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
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
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..." 
                  className="h-12 bg-white/90 border-cream/20 focus:border-cream text-base"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-cream text-espresso hover:bg-cream/90 h-12 px-6"
                >
                  Join <ArrowRight className="ml-2" />
                </Button>
              </div>
            </form>

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

      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
    </div>
  );
};