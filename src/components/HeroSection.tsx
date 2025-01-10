import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { HeroContent } from "./hero/HeroContent";

const coffeeImages = [
  { src: "/lovable-uploads/df3cfd9f-0fb9-4829-893e-764820a16105.png", alt: "Grano's Vertical Logo", isLogo: true },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee beans drying in sun" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee cherries on branch" },
  { src: "https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee plantation valley" },
  { src: "/lovable-uploads/a5c6a898-0ae3-4750-837f-1858fba060bc.png", alt: "Grano's Vertical Logo", isLogo: true },
  { src: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Fresh roasted coffee beans" },
  { src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee cupping session" },
  { src: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=2940&auto=format&fit=crop&ar=4:3", alt: "Coffee farm aerial view" },
  { src: "/lovable-uploads/df3cfd9f-0fb9-4829-893e-764820a16105.png", alt: "Grano's Vertical Logo", isLogo: true },
];

export const HeroSection = () => {
  return (
    <section 
      className="h-[90vh] relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=3456&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <div className="relative w-full">
          <ImageCarousel images={coffeeImages}>
            <HeroContent />
          </ImageCarousel>
        </div>
      </div>

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
  );
};