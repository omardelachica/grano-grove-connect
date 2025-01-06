import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { ConsumerTierSelection } from "./ConsumerTierSelection";
import { ConsumerTierDetailsPanel } from "./ConsumerTierDetailsPanel";
import { ConsumerFormData, ConsumptionTier } from "./types";
import { Textarea } from "@/components/ui/textarea";

export const CONSUMER_TIER_INFO = {
  casual: {
    title: "Casual Sipper",
    description: "Perfect for occasional coffee enthusiasts",
    details: "You enjoy coffee occasionally—socially or as a treat. Coffee isn't part of your daily routine just yet. Consumption: Fewer than 7 cups per week (less than 1 cup a day).",
    cups: 1,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&h=600",
  },
  daily: {
    title: "Daily Drinker",
    description: "For the everyday coffee lover",
    details: "Coffee fuels your day. You're a steady drinker, enjoying 1 to 3 cups to keep your energy flowing. Consumption: Between 7 and 21 cups per week (1–3 cups per day).",
    cups: 2,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&h=600",
  },
  connoisseur: {
    title: "Caffeine Connoisseur",
    description: "For the true coffee aficionado",
    details: "Coffee is life! With more than 3 cups a day, you savor the buzz and love every sip. Consumption: Over 21 cups per week (more than 3 cups per day).",
    cups: 3,
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&h=600",
  },
};

export const ConsumerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ConsumerFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    consumptionTier: null,
    consumptionDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from('leads').insert({
        type: 'consumer',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        consumption_tier: formData.consumptionTier,
        consumption_details: formData.consumptionDetails,
      });

      if (error) throw error;

      toast({
        title: "Thank you for joining!",
        description: "We'll be in touch soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your information.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <Coffee className="w-12 h-12 text-espresso mb-4 mx-auto" />
        <h2 className="font-playfair text-3xl text-espresso mb-2 font-bold">
          I'm interested in buying specialty coffee from Roasters/Producers using Grano
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ConsumerTierSelection
          selectedTier={formData.consumptionTier}
          setSelectedTier={(tier) => setFormData({ ...formData, consumptionTier: tier })}
          tierInfo={CONSUMER_TIER_INFO}
        />
        <ConsumerTierDetailsPanel
          selectedTier={formData.consumptionTier}
          tierInfo={CONSUMER_TIER_INFO}
        />
      </div>

      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="address">Physical Address (Optional)</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="consumptionDetails">Tell us more about your coffee consumption habits</Label>
        <Textarea
          id="consumptionDetails"
          placeholder="What's your favorite brewing method? When do you usually enjoy your coffee? Any specific preferences?"
          value={formData.consumptionDetails}
          onChange={(e) => setFormData({ ...formData, consumptionDetails: e.target.value })}
        />
      </div>

      <Button type="submit" className="w-full">Join Grano</Button>
    </form>
  );
};