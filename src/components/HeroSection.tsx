import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export const HeroSection = () => {
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
        source: 'hero_section',
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

  return (
    <section className="min-h-[80vh] relative flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
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
                className="bg-cream text-espresso hover:bg-cream/90 h-12 px-6"
              >
                Join <ArrowRight className="ml-2" />
              </Button>
            </div>
          </form>

          <p className="text-cream/70 text-sm mt-4">
            Join our community of coffee enthusiasts, roasters, and connoisseurs.
          </p>
        </div>
      </div>
    </section>
  );
};