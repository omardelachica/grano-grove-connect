import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoasterForm } from "./RoasterForm";
import { ConsumerForm } from "./ConsumerForm";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

type UserType = "roaster" | "consumer" | null;

type Props = {
  onComplete?: () => void;
};

export const WelcomeScreen = ({ onComplete }: Props) => {
  const [userType, setUserType] = useState<UserType>(null);

  if (userType) {
    return (
      <div className="container mx-auto px-4 py-16 bg-white">
        {userType === "roaster" ? <RoasterForm /> : <ConsumerForm />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};