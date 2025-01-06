import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Coffee, Store } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type UserType = "roaster" | "consumer" | null;

export const WelcomeScreen = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    address: "",
    productionVolume: 100,
    coffeeCupsPerWeek: 7,
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePasswordSubmit = () => {
    if (password === "GranoBeta123") {
      toast({
        title: "Welcome to Grano!",
        description: "Access granted. Enjoy exploring specialty coffee.",
      });
      navigate("/explore");
    } else {
      toast({
        title: "Incorrect Password",
        description: "Please try again or sign up to continue.",
        variant: "destructive",
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon.",
    });
    navigate("/explore");
  };

  return (
    <div className="min-h-screen bg-cream">
      {!userType ? (
        <div className="container mx-auto px-4 py-16 md:py-32">
          <h1 className="font-playfair text-4xl md:text-6xl text-espresso text-center mb-8">
            Welcome to Grano
          </h1>
          <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
            Join our community of specialty coffee enthusiasts and artisanal roasters
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button
              onClick={() => setUserType("roaster")}
              className="p-8 rounded-xl border-2 border-espresso/20 hover:border-espresso transition-colors group"
            >
              <Store className="w-12 h-12 text-espresso mb-4 mx-auto" />
              <h2 className="font-playfair text-2xl text-espresso mb-2">I'm a Roaster</h2>
              <p className="text-slate">Join our marketplace and showcase your specialty beans</p>
            </button>

            <button
              onClick={() => setUserType("consumer")}
              className="p-8 rounded-xl border-2 border-espresso/20 hover:border-espresso transition-colors group"
            >
              <Coffee className="w-12 h-12 text-espresso mb-4 mx-auto" />
              <h2 className="font-playfair text-2xl text-espresso mb-2">I'm a Coffee Lover</h2>
              <p className="text-slate">Discover and purchase exceptional coffee beans</p>
            </button>
          </div>

          <button
            onClick={() => setShowPasswordDialog(true)}
            className="mt-8 text-espresso/60 hover:text-espresso text-sm block mx-auto"
          >
            I have a password
          </button>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16">
          <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto space-y-6">
            <h2 className="font-playfair text-3xl text-espresso mb-6">
              {userType === "roaster" ? "Register as a Roaster" : "Join as a Coffee Lover"}
            </h2>

            {userType === "roaster" && (
              <>
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                  />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="name">
                {userType === "roaster" ? "Contact Person Name" : "Full Name"}
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number {userType === "consumer" && "(Optional)"}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required={userType === "roaster"}
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

            {userType === "roaster" ? (
              <div>
                <Label>Annual Production Volume (kg)</Label>
                <div className="flex items-center gap-4">
                  <Switch
                    checked={formData.productionVolume >= 1000}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        productionVolume: checked ? 1000 : 100,
                      })
                    }
                  />
                  <span className="text-sm text-slate">
                    {formData.productionVolume >= 1000 ? "1000+ kg/year" : "< 1000 kg/year"}
                  </span>
                </div>
              </div>
            ) : (
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
            )}

            <Button type="submit" className="w-full">
              Join Grano
            </Button>
          </form>
        </div>
      )}

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <Button onClick={handlePasswordSubmit} className="w-full">
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};