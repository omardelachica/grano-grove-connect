import { motion } from "framer-motion";
import { Coffee, Store, Users, ArrowRight } from "lucide-react";

export const MarketplaceFlow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-12">
      {/* Roasters */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4">
          <Store className="h-8 w-8 text-espresso" />
        </div>
        <h3 className="text-xl font-semibold text-espresso mb-2">Roasters</h3>
        <p className="text-slate max-w-xs">List your specialty coffees and connect with enthusiasts</p>
      </motion.div>

      {/* Arrows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-row md:flex-col gap-4"
      >
        <ArrowRight className="h-6 w-6 text-espresso rotate-90 md:rotate-0" />
        <ArrowRight className="h-6 w-6 text-espresso -rotate-90 md:rotate-0" />
      </motion.div>

      {/* Grano Platform */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center"
      >
        <div className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4">
          <Coffee className="h-8 w-8 text-espresso" />
        </div>
        <h3 className="text-xl font-semibold text-espresso mb-2">Grano Platform</h3>
        <p className="text-slate max-w-xs">Seamless marketplace connecting coffee communities</p>
      </motion.div>

      {/* Arrows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-row md:flex-col gap-4"
      >
        <ArrowRight className="h-6 w-6 text-espresso rotate-90 md:rotate-0" />
        <ArrowRight className="h-6 w-6 text-espresso -rotate-90 md:rotate-0" />
      </motion.div>

      {/* Coffee Lovers */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <div className="bg-cream p-4 rounded-full inline-flex items-center justify-center mb-4">
          <Users className="h-8 w-8 text-espresso" />
        </div>
        <h3 className="text-xl font-semibold text-espresso mb-2">Coffee Lovers</h3>
        <p className="text-slate max-w-xs">Discover and purchase exceptional coffee beans</p>
      </motion.div>
    </div>
  );
};