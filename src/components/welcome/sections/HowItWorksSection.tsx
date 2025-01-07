import { motion } from "framer-motion";
import { Coffee, Store, Users, ArrowRight } from 'lucide-react';
import { MarketplaceFlow } from '@/components/marketplace-flow';

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
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
                <h3 className="font-playfair text-2xl text-espresso mb-2">Direct Connection</h3>
                <p className="text-slate">No middlemen. Pure coffee passion connecting roasters and enthusiasts.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 shadow-lg border border-espresso/10">
              <MarketplaceFlow />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};