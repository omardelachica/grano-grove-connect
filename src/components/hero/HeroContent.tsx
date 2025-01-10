import { ArrowRight, Coffee, Wheat } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export const HeroContent = () => {
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

      if (error) throw error;

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
    <div className="max-w-[91rem] w-full mx-auto text-center bg-black/40 backdrop-blur-sm px-8 py-4 rounded-xl z-10 mt-[30%]">
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
  );
};
