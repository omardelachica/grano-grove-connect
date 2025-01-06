import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

type FormData = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  address: string;
  productionVolume: number;
};

export const RoasterForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    address: "",
    productionVolume: 100,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from('leads').insert({
        type: 'roaster',
        name: formData.name,
        business_name: formData.businessName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        production_volume: formData.productionVolume,
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
        <Store className="w-12 h-12 text-espresso mb-4 mx-auto" />
        <h2 className="font-playfair text-3xl text-espresso mb-2">Register as a Roaster</h2>
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
        <Label>Annual Production Volume (kg/year)</Label>
        <Slider
          value={[formData.productionVolume]}
          onValueChange={(value) => setFormData({ ...formData, productionVolume: value[0] })}
          max={10000}
          step={100}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-slate mb-2">
          <span>0 kg/year</span>
          <span>5,000 kg/year</span>
          <span>>10,000 kg/year</span>
        </div>
        <Progress value={(formData.productionVolume / 10000) * 100} className="h-2" />
        <div className="text-sm text-slate text-right">
          Selected: {formData.productionVolume >= 10000 ? ">10,000" : formData.productionVolume} kg/year
        </div>
      </div>

      <Button type="submit" className="w-full">Join Grano</Button>
    </form>
  );
};