import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Store, Coffee } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { RoasterForm } from "./RoasterForm";
import { ConsumerForm } from "./ConsumerForm";

type UserType = "roaster" | "consumer" | null;

export const WelcomeScreen = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");
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

  return (
    <div className="min-h-screen bg-white">
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
              className="p-8 rounded-xl border-2 border-espresso/20 hover:border-espresso transition-colors bg-white group"
            >
              <Store className="w-12 h-12 text-espresso mb-4 mx-auto" />
              <h2 className="font-playfair text-2xl text-espresso mb-2">I'm a Roaster</h2>
              <p className="text-slate">Join our marketplace and showcase your specialty beans</p>
            </button>

            <button
              onClick={() => setUserType("consumer")}
              className="p-8 rounded-xl border-2 border-espresso/20 hover:border-espresso transition-colors bg-white group"
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
        <div className="container mx-auto px-4 py-16 bg-white">
          {userType === "roaster" ? <RoasterForm /> : <ConsumerForm />}
        </div>
      )}

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="bg-white">
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