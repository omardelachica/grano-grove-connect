import { Coffee, Wheat } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

interface UserTypeToggleProps {
  isProducer: boolean;
  setIsProducer: (value: boolean) => void;
}

export const UserTypeToggle = ({ isProducer, setIsProducer }: UserTypeToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 mt-4 flex-wrap">
      <div 
        className={`flex items-center gap-2 transition-colors duration-200 px-4 py-2 rounded-full cursor-pointer ${!isProducer ? 'bg-cream text-espresso font-semibold' : 'text-cream/40'}`}
        onClick={() => setIsProducer(false)}
      >
        <Coffee className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm font-medium">Coffee Lover</span>
      </div>
      <Toggle
        pressed={isProducer}
        onPressedChange={setIsProducer}
        className="relative w-12 sm:w-14 h-6 sm:h-7 rounded-full transition-colors duration-200 ease-in-out
                  bg-cream/20 data-[state=on]:bg-cream
                  before:content-[''] before:absolute before:top-0.5 before:left-0.5
                  before:w-5 sm:before:w-6 before:h-5 sm:before:h-6 before:bg-espresso before:rounded-full
                  before:transition-transform before:duration-200 before:ease-in-out
                  data-[state=on]:before:translate-x-6 sm:data-[state=on]:before:translate-x-7"
        aria-label="Toggle producer mode"
      />
      <div 
        className={`flex items-center gap-2 transition-colors duration-200 px-4 py-2 rounded-full cursor-pointer ${isProducer ? 'bg-cream text-espresso font-semibold' : 'text-cream/40'}`}
        onClick={() => setIsProducer(true)}
      >
        <Wheat className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm font-medium">Producer</span>
      </div>
    </div>
  );
};