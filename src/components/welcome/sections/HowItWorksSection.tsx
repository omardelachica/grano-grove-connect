import { motion } from "framer-motion";
import { Coffee, Store, Users, ArrowRight } from 'lucide-react';
import { MarketplaceFlow } from '@/components/marketplace-flow';

export const HowItWorksSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-gradient-to-b from-cream via-cream/50 to-white relative"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-espresso mb-6">
            What is Grano and How Does it Work?
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            A revolutionary platform connecting coffee roasters directly with coffee enthusiasts,
            creating a vibrant community centered around exceptional coffee experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl mx-auto" // Changed from max-w-3xl to max-w-xl
          >
            <div className="bg-gradient-to-br from-cream to-white rounded-2xl p-4 shadow-lg border border-espresso/10"> // Changed p-8 to p-4
              <MarketplaceFlow />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <div className="flex gap-6 items-start group hover:bg-cream/50 p-4 rounded-xl transition-all">
              <div className="bg-espresso p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Store className="h-8 w-8 text-cream" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl text-espresso mb-2">Roasters & Producers</h3>
                <p className="text-slate">Create your store, showcase your coffee, and connect with passionate customers.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group hover:bg-cream/50 p-4 rounded-xl transition-all">
              <div className="bg-espresso p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-cream" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl text-espresso mb-2">Coffee Lovers</h3>
                <p className="text-slate">Discover unique coffees, follow your favorite roasters, and order directly.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group hover:bg-cream/50 p-4 rounded-xl transition-all">
              <div className="bg-espresso p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Coffee className="h-8 w-8 text-cream" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl text-espresso mb-2">Find Your Perfect Coffee</h3>
                <p className="text-slate">Discover your ideal coffee match through our curated selection of premium beans.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};