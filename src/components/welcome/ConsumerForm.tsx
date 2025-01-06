import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  coffeeCupsPerWeek: number;
};

export const ConsumerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    coffeeCupsPerWeek: 7,
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
        coffee_cups_per_week: formData.coffeeCupsPerWeek,
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
        <h2 className="font-playfair text-3xl text-espresso mb-2">
          I'm interested in buying specialty coffee from Roasters/Producers using Grano
        </h2>
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
        <Label>Weekly Coffee Consumption</Label>
        <div className="flex items-center gap-4">
          <Switch
            checked={formData.coffeeCupsPerWeek >= 14}
            onCheckedChange={(checked) =>
              setFormData({
                ...formData,
                coffeeCupsPerWeek: checked ? 14 : 7,
              })
            }
          />
          <span className="text-sm text-slate">
            {formData.coffeeCupsPerWeek >= 14 ? "14+ cups/week" : "< 14 cups/week"}
          </span>
        </div>
      </div>

      <Button type="submit" className="w-full">Join Grano</Button>
    </form>
  );
};
