import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error, status } = await supabase.from('leads').insert({
        email,
        source: 'hero_section',
        type: 'newsletter',
        created_at: new Date().toISOString()
      });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // If we reach here, the insert was successful (status 201)
      if (status === 201) {
        toast({
          title: "Welcome to Grano!",
          description: "Thank you for joining our coffee community.",
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
          </form>

          <p className="text-cream/70 text-sm mt-4">
            Join our community of coffee enthusiasts, roasters, and connoisseurs.
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