import { useState } from "react";
import { EmailSignupForm } from "./EmailSignupForm";
import { UserTypeToggle } from "./UserTypeToggle";

export const HeroContent = () => {
  const [isProducer, setIsProducer] = useState(false);

  return (
    <div className="max-w-[91rem] w-full mx-auto text-center bg-black/40 backdrop-blur-sm px-4 sm:px-8 py-4 rounded-xl z-10 mt-[30%]">
      <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-cream mb-4 leading-tight">
        Join the Future of <br />Specialty Coffee
      </h1>
      
      <p className="text-cream/90 text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto px-2">
        Connect with artisanal roasters, explore unique beans, and embark on a journey 
        of exceptional coffee experiences.
      </p>
      
      <EmailSignupForm isProducer={isProducer} />
      <UserTypeToggle isProducer={isProducer} setIsProducer={setIsProducer} />

      <p className="text-cream/70 text-xs sm:text-sm mt-4">
        Join our community of coffee {isProducer ? 'producers' : 'enthusiasts'}, roasters, and connoisseurs.
      </p>
    </div>
  );
};