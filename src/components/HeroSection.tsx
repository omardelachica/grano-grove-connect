import { useState } from "react";
import { ArrowRight, ChevronDown, Coffee, Wheat } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProducer, setIsProducer] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error, status } = await supabase.from('leads').insert({
        email,
        source: 'hero_section',
        type: isProducer ? 'producer' : 'consumer',
        created_at: new Date().toISOString(),
        ip_address: await fetch('https://api.ipify.org?format=json').then(res => res.json()).then(data => data.ip),
        user_agent: navigator.userAgent,
        geo_location: null,
      });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      if (status === 201) {
        toast({
          title: `Welcome to Grano${isProducer ? ' Producer' : ''}!`,
          description: `Thank you for joining our coffee ${isProducer ? 'producer' : 'lover'} community.`,
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1447933601403-0c6688de566e)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
            alt="Grano Logo" 
            className="w-32 h-32 mx-auto mb-8"
          />
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-6xl text-cream mb-6 leading-tight">
            Join the Future of <br />Specialty Coffee
          </h1>
          <p className="text-cream/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with artisanal roasters, explore unique beans, and embark on a journey 
            of exceptional coffee experiences.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
                className="bg-forest hover:bg-forest/90 text-cream h-12 px-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Join <ArrowRight className="ml-2 animate-pulse" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className={`flex items-center gap-2 transition-colors duration-200 ${!isProducer ? 'text-cream font-semibold' : 'text-cream/40'}`}>
                <Coffee className="h-5 w-5" />
                <span className="text-sm font-medium">Coffee Lover</span>
              </div>
              <Toggle
                pressed={isProducer}
                onPressedChange={setIsProducer}
                className="relative w-14 h-7 rounded-full transition-colors duration-200 ease-in-out
                          bg-cream/20 data-[state=on]:bg-[#9b87f5]
                          before:content-[''] before:absolute before:top-0.5 before:left-0.5
                          before:w-6 before:h-6 before:bg-cream before:rounded-full
                          before:transition-transform before:duration-200 before:ease-in-out
                          data-[state=on]:before:translate-x-7"
                aria-label="Toggle producer mode"
              />
              <div className={`flex items-center gap-2 transition-colors duration-200 ${isProducer ? 'text-cream font-semibold' : 'text-cream/40'}`}>
                <Wheat className="h-5 w-5" />
                <span className="text-sm font-medium">Producer</span>
              </div>
            </div>
          </form>

          <p className="text-cream/70 text-sm mt-4">
            Join our community of coffee {isProducer ? 'producers' : 'enthusiasts'}, roasters, and connoisseurs.
          </p>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <ChevronDown className="w-6 h-6 text-cream/80" />
      </motion.div>
    </section>
  );
};
