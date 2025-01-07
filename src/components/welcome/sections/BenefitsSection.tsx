import { motion } from "framer-motion";
import { Star, ShoppingBag, Heart } from 'lucide-react';

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-espresso mb-6">
            Benefits of Joining Grano
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Join our thriving community and experience the future of coffee commerce
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Quality Assurance",
              description: "Every roaster is carefully vetted to ensure exceptional quality"
            },
            {
              icon: ShoppingBag,
              title: "Direct Trading",
              description: "Connect directly with roasters for the freshest coffee possible"
            },
            {
              icon: Heart,
              title: "Community First",
              description: "Join a passionate community of coffee enthusiasts and experts"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-espresso w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-cream" />
              </div>
              <h3 className="font-playfair text-2xl text-espresso mb-4">{benefit.title}</h3>
              <p className="text-slate">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};