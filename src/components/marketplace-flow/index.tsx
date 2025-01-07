import { motion } from "framer-motion";
import { Coffee, Store, Users } from "lucide-react";

export const MarketplaceFlow = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 relative h-[400px] overflow-x-hidden w-full">
      {/* Orbiting Elements Container */}
      <div className="relative w-full max-w-md aspect-square">
        {/* Roasters Orbit */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute -top-24 left-1/2 -translate-x-1/2 text-center"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Store className="h-8 w-8 text-espresso" />
            </div>
            <h3 className="text-xl font-semibold text-espresso mb-2">Roasters</h3>
            <p className="text-slate max-w-[200px] leading-relaxed text-sm">
              Showcase your artisanal coffee beans
            </p>
          </motion.div>
        </motion.div>

        {/* Coffee Lovers Orbit */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: -10,
          }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-center"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: -10,
            }}
          >
            <div className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-espresso" />
            </div>
            <h3 className="text-xl font-semibold text-espresso mb-2">Coffee Lovers</h3>
            <p className="text-slate max-w-[200px] leading-relaxed text-sm">
              Find exceptional coffee beans
            </p>
          </motion.div>
        </motion.div>

        {/* Orbital Paths */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(111, 78, 55, 0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Central Grano Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="bg-cream rounded-full p-6 border-2 border-espresso/20 shadow-lg"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
              alt="Grano Logo" 
              className="h-12 w-12 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};