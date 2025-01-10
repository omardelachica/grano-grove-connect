import { useState } from "react";
import { ArrowRight, ChevronDown, Coffee, Wheat } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";
import ImageCarousel from "./ImageCarousel";

const coffeeImages = [
  { src: "/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png", alt: "Grano's Logo", isLogo: true }, // Logo at 12 o'clock
  { src: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0", alt: "Professional coffee roasting process" },
  { src: "https://images.unsplash.com/photo-1520903304654-28bd223f96d7", alt: "Sustainable coffee roasting facility" },
  { src: "https://images.unsplash.com/photo-1591982311839-a174e4c4b682", alt: "Eco-friendly coffee processing" },
  { src: "https://images.unsplash.com/photo-1599639668273-eaa1e1ba0001", alt: "Organic coffee plantation" },
  { src: "https://images.unsplash.com/photo-1621984643811-ba0e5124a0cf", alt: "Coffee cherries in sustainable farm" },
  { src: "https://images.unsplash.com/photo-1628336707631-68c1582b4c84", alt: "Fair trade coffee workers" },
  { src: "https://images.unsplash.com/photo-1524350876685-274059332603", alt: "Coffee plantation sustainability" },
  { src: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe", alt: "Eco-conscious coffee processing" },
];

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
    <section className="min-h-screen relative flex flex-col items-center justify-start overflow-hidden">
      <ImageCarousel images={coffeeImages}>
        <div className="max-w-[91rem] w-full mx-auto text-center bg-black/40 backdrop-blur-sm px-8 py-4 rounded-xl z-10 mt-32">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-6xl text-cream mb-4 leading-tight">
            Join the Future of <br />Specialty Coffee
          </h1>
          <p className="text-cream/90 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
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
            
            <div className="flex items-center justify-center gap-8 mt-4">
              <div 
                className={`flex items-center gap-2 transition-colors duration-200 px-4 py-2 rounded-full cursor-pointer ${!isProducer ? 'bg-cream text-espresso font-semibold' : 'text-cream/40'}`}
                onClick={() => setIsProducer(false)}
              >
                <Coffee className="h-5 w-5" />
                <span className="text-sm font-medium">Coffee Lover</span>
              </div>
              <Toggle
                pressed={isProducer}
                onPressedChange={setIsProducer}
                className="relative w-14 h-7 rounded-full transition-colors duration-200 ease-in-out
                          bg-cream/20 data-[state=on]:bg-cream
                          before:content-[''] before:absolute before:top-0.5 before:left-0.5
                          before:w-6 before:h-6 before:bg-espresso before:rounded-full
                          before:transition-transform before:duration-200 before:ease-in-out
                          data-[state=on]:before:translate-x-7"
                aria-label="Toggle producer mode"
              />
              <div 
                className={`flex items-center gap-2 transition-colors duration-200 px-4 py-2 rounded-full cursor-pointer ${isProducer ? 'bg-cream text-espresso font-semibold' : 'text-cream/40'}`}
                onClick={() => setIsProducer(true)}
              >
                <Wheat className="h-5 w-5" />
                <span className="text-sm font-medium">Producer</span>
              </div>
            </div>
          </form>

          <p className="text-cream/70 text-sm mt-4">
            Join our community of coffee {isProducer ? 'producers' : 'enthusiasts'}, roasters, and connoisseurs.
          </p>
        </div>
      </ImageCarousel>

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
