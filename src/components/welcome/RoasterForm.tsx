import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { TierDetailsPanel } from "./TierDetailsPanel";
import { TierSelection } from "./TierSelection";
import { FormData, ProductionTier } from "./types";

const TIER_INFO = {
  craft: {
    title: "Craft Coffee Creator",
    description: "Up to 300 kg per week, typically roasting in 5–30 kg batches.",
    details: "Passionate about precision, small batches, and unique, high-quality coffee. You love experimenting with roast profiles and building personal connections.",
    beans: 1,
    image: "/images/craft-roaster.jpg"
  },
  scaling: {
    title: "Scaling Specialist",
    description: "Roasting 300 kg to several tons per week, with a mix of custom and standardized processes.",
    details: "Growing your reach while balancing quality and efficiency. You supply mid-sized cafés, regional markets, or specialty chains with reliable, consistent coffee.",
    beans: 2,
    image: "/images/scaling-roaster.jpg"
  },
  global: {
    title: "Global Coffee Engine",
    description: "Roasting several tons per week or more, often using machines for 60+ kg batches.",
    details: "A large-scale operator supplying national or international markets. Your focus is on mass production, consistency, and efficiency.",
    beans: 3,
    image: "/images/global-roaster.jpg"
  }
};

export const RoasterForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    address: "",
    productionTier: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productionTier) {
      toast({
        title: "Production Tier Required",
        description: "Please select your production tier before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from('leads').insert({
        type: 'roaster',
        name: formData.name,
        business_name: formData.businessName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        production_tier: formData.productionTier,
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
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <Store className="w-12 h-12 text-espresso mb-4 mx-auto" />
        <h2 className="font-playfair text-3xl text-espresso mb-2">
          I'm interested in joining Grano as a Roaster
        </h2>
      </div>

      <div>
        <Label htmlFor="businessName">Business Name</Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="name">Contact Person Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
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

      <div className="space-y-4">
        <Label>Select Your Production Tier</Label>
        <div className="grid grid-cols-[1fr,1fr] gap-6">
          <TierSelection
            selectedTier={formData.productionTier}
            onTierSelect={(tier) => setFormData({ ...formData, productionTier: tier })}
            tierInfo={TIER_INFO}
          />
          <div className="bg-cream rounded-lg p-6">
            <TierDetailsPanel
              selectedTier={formData.productionTier}
              tierInfo={TIER_INFO}
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">Join Grano</Button>
    </form>
  );
};
