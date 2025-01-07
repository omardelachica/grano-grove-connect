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

type Props = {
  onComplete?: () => void;
};

export const WelcomeScreen = ({ onComplete }: Props) => {
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
      if (onComplete) onComplete();
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
        <div 
          className="relative min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1447933601403-0c6688de566e)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container mx-auto px-4 py-32 md:py-48 relative z-10">
            <h1 className="font-playfair text-4xl md:text-6xl text-white text-center mb-8 animate-fadeIn">
              Building A Global Coffee Community
            </h1>
            <p className="text-cream text-center mb-12 max-w-2xl mx-auto text-lg md:text-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Connecting Roasters, Producers, and Coffee Aficionados worldwide. 
              Are you interested? Join our waiting list below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => setUserType("roaster")}
                className="p-8 rounded-xl border-2 border-cream/20 hover:border-cream transition-colors bg-espresso/40 backdrop-blur-sm group"
              >
                <Store className="w-12 h-12 text-gold mb-4 mx-auto" />
                <h2 className="font-playfair text-2xl text-gold mb-2">I'm a Roaster</h2>
                <p className="text-cream/80">Join our marketplace and showcase your specialty beans</p>
              </button>

              <button
                onClick={() => setUserType("consumer")}
                className="p-8 rounded-xl border-2 border-cream/20 hover:border-cream transition-colors bg-espresso/40 backdrop-blur-sm group"
              >
                <Coffee className="w-12 h-12 text-gold mb-4 mx-auto" />
                <h2 className="font-playfair text-2xl text-gold mb-2">I'm a Coffee Lover</h2>
                <p className="text-cream/80">Discover and purchase exceptional coffee beans</p>
              </button>
            </div>

            <button
              onClick={() => setShowPasswordDialog(true)}
              className="mt-8 text-cream/60 hover:text-cream text-sm block mx-auto"
            >
              I have a password
            </button>
          </div>
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