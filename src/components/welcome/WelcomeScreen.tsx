import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Store, Coffee, Users, ArrowRight, Star, ShoppingBag, Truck, Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { RoasterForm } from "./RoasterForm";
import { ConsumerForm } from "./ConsumerForm";
import { MarketplaceFlow } from "../marketplace-flow";

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
        <div className="space-y-20">
          {/* Hero Section */}
          <div 
            className="relative min-h-[80vh]"
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

          {/* What is Grano Section */}
          <section className="py-20 bg-cream">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">
                  What is Grano and How Does it Work?
                </h2>
                <p className="text-slate max-w-2xl mx-auto text-lg">
                  Grano is a revolutionary platform connecting coffee roasters directly with coffee enthusiasts,
                  creating a vibrant community centered around exceptional coffee experiences.
                </p>
              </motion.div>

              <MarketplaceFlow />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">
                  Benefits of Joining Grano
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* For Roasters */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-cream p-6 rounded-xl"
                >
                  <Store className="h-8 w-8 text-espresso mb-4" />
                  <h3 className="text-xl font-semibold text-espresso mb-4">For Roasters</h3>
                  <ul className="space-y-3 text-slate">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Showcase your unique coffees
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Connect with passionate customers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Manage orders efficiently
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Build your brand presence
                    </li>
                  </ul>
                </motion.div>

                {/* For Coffee Lovers */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-cream p-6 rounded-xl"
                >
                  <Users className="h-8 w-8 text-espresso mb-4" />
                  <h3 className="text-xl font-semibold text-espresso mb-4">For Coffee Lovers</h3>
                  <ul className="space-y-3 text-slate">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Discover premium coffees
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Follow favorite roasters
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Order directly from source
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Join the coffee community
                    </li>
                  </ul>
                </motion.div>

                {/* Platform Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-cream p-6 rounded-xl"
                >
                  <Coffee className="h-8 w-8 text-espresso mb-4" />
                  <h3 className="text-xl font-semibold text-espresso mb-4">Platform Features</h3>
                  <ul className="space-y-3 text-slate">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Secure transactions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Quality assurance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Community reviews
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-espresso" />
                      Educational resources
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
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