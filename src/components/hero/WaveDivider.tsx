import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export const WaveDivider = () => {
  const beans = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="relative w-full h-24 bg-espresso overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-around">
        {beans.map((bean, index) => (
          <motion.div
            key={bean}
            initial={{ y: -20, opacity: 0, rotate: 0 }}
            animate={{ 
              y: [20, -20],
              opacity: [0.4, 1, 0.4],
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
            className="text-cream/30"
          >
            <Coffee size={24} />
          </motion.div>
        ))}
      </div>
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};