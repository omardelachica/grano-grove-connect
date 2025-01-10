import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { HeroContent } from "./hero/HeroContent";
import { WaveDivider } from "./hero/WaveDivider";

const coffeeImages = [
  { src: "/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png", alt: "Grano's Logo", isLogo: true },
  { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=3456&auto=format&fit=crop&ar=4:3", alt: "Coffee roasting process" },
  { src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Sustainable coffee farm" },
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee plantation at sunrise" },
  { src: "/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png", alt: "Grano's Logo", isLogo: true },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee beans drying" },
  { src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee roasting facility" },
  { src: "https://images.unsplash.com/photo-1516407658012-d7428736e4ac?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee farm worker" },
  { src: "https://images.unsplash.com/photo-1518783085045-c383f28f1528?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Sustainable coffee processing" },
];

export const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen relative flex flex-col items-center justify-start overflow-hidden">
        <ImageCarousel images={coffeeImages}>
          <HeroContent />
        </ImageCarousel>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <ChevronDown className="w-6 h-6 text-cream/80" />
        </motion.div>
      </section>
      <WaveDivider />
    </>
  );
};