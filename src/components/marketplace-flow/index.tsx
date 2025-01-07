import { motion } from "framer-motion";
import { Coffee, Store, Users, ArrowRight } from "lucide-react";

export const MarketplaceFlow = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 relative">
      {/* Top Row - Roasters */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4">
          <Store className="h-8 w-8 text-espresso" />
        </div>
        <h3 className="text-xl font-semibold text-espresso mb-2">Roasters</h3>
        <p className="text-slate max-w-xs leading-relaxed">
          Showcase your artisanal coffee beans and connect with passionate enthusiasts
        </p>
      </motion.div>

      {/* Connecting Lines */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative w-full max-w-xs h-32 mx-auto"
      >
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-espresso/20"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="bg-cream rounded-full p-6 border-2 border-espresso/20"
          >
            <img 
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
              alt="Grano Logo" 
              className="h-12 w-12 object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Row - Coffee Lovers */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-8"
      >
        <div className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4">
          <Users className="h-8 w-8 text-espresso" />
        </div>
        <h3 className="text-xl font-semibold text-espresso mb-2">Coffee Lovers</h3>
        <p className="text-slate max-w-xs leading-relaxed">
          Find and purchase exceptional coffee beans directly from artisanal roasters
        </p>
      </motion.div>
    </div>
  );
};