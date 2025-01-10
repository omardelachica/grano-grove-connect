import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { HeroContent } from "./hero/HeroContent";
import { WaveDivider } from "./hero/WaveDivider";

const coffeeImages = [
  { src: "/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png", alt: "Grano's Logo", isLogo: true },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee beans drying in sun" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee cherries on branch" },
  { src: "https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee plantation valley" },
  { src: "/lovable-uploads/a5c6a898-0ae3-4750-837f-1858fba060bc.png", alt: "Grano's Vertical Logo", isLogo: true },
  { src: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Fresh roasted coffee beans" },
  { src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee cupping session" },
  { src: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee farm aerial view" },
  { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Professional coffee roasting" },
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