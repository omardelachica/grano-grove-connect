import { motion } from "framer-motion";
import { Coffee, Store, Users } from "lucide-react";

export const MarketplaceFlow = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 relative">
      {/* Top Row - Roasters */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4"
        >
          <Store className="h-8 w-8 text-espresso" />
        </motion.div>
        <h3 className="text-xl font-semibold text-espresso mb-2">Roasters</h3>
        <p className="text-slate max-w-xs leading-relaxed">
          Showcase your artisanal coffee beans and connect with passionate enthusiasts
        </p>
      </motion.div>

      {/* Connecting Lines and Logo */}
      <div className="relative w-full max-w-xs h-32 mx-auto">
        {/* Animated connection lines */}
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" viewBox="0 0 200 100">
            {/* Path from Roaster to Grano */}
            <motion.path
              d="M 100,0 L 100,40"
              fill="none"
              stroke="rgba(111, 78, 55, 0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Path from Grano to Coffee Lovers */}
            <motion.path
              d="M 100,60 L 100,100"
              fill="none"
              stroke="rgba(111, 78, 55, 0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Circular paths around Grano */}
            <motion.path
              d="M 70,50 A 30,30 0 0 1 130,50"
              fill="none"
              stroke="rgba(111, 78, 55, 0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ 
                pathLength: { duration: 2, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            />
          </svg>
        </motion.div>

        {/* Central Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-cream rounded-full p-6 border-2 border-espresso/20 shadow-lg"
          >
            <img 
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
              alt="Grano Logo" 
              className="h-12 w-12 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Row - Coffee Lovers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4"
        >
          <Users className="h-8 w-8 text-espresso" />
        </motion.div>
        <h3 className="text-xl font-semibold text-espresso mb-2">Coffee Lovers</h3>
        <p className="text-slate max-w-xs leading-relaxed">
          Find and purchase exceptional coffee beans directly from artisanal roasters
        </p>
      </motion.div>
    </div>
  );
};