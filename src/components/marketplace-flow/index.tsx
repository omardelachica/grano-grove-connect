import { motion } from "framer-motion";
import { Coffee, Store, Users, Building, Factory } from "lucide-react";

export const MarketplaceFlow = () => {
  const orbitItems = [
    { icon: Store, label: "Roasters", delay: 0 },
    { icon: Users, label: "Coffee Lovers", delay: -8 },
    { icon: Building, label: "Coffee Shops", delay: -4 },
    { icon: Factory, label: "Producers", delay: -12 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="relative w-full h-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(111, 78, 55, 0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>

        {orbitItems.map((item, index) => (
          <motion.div
            key={item.label}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
            className="absolute inset-0"
          >
            <motion.div
              className={`absolute ${
                index === 0
                  ? "-top-16"
                  : index === 1
                  ? "-bottom-16"
                  : index === 2
                  ? "-right-16"
                  : "-left-16"
              } ${
                index === 2 || index === 3 ? "top-1/2 -translate-y-1/2" : ""
              } ${
                index === 0 || index === 1 ? "left-1/2 -translate-x-1/2" : ""
              } text-center`}
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay,
              }}
            >
              <div className="bg-cream p-3 rounded-full inline-flex items-center justify-center mb-2">
                <item.icon className="h-6 w-6 text-espresso" />
              </div>
              <h3 className="text-lg font-semibold text-espresso">{item.label}</h3>
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream rounded-full p-4 border-2 border-espresso/20 shadow-lg"
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
            className="h-10 w-10 object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};