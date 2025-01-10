import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export const EmailSignupForm = ({ isProducer }: { isProducer: boolean }) => {
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
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
  );
};