import ImageTile from "./ImageTile";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string; isLogo?: boolean }>;
  children?: ReactNode;
}

const ImageCarousel = ({ images, children }: ImageCarouselProps) => {
  const isMobile = useIsMobile();
  
  // Adjust radius and scale based on screen size
  const baseRadius = isMobile ? 300 : 580;
  const baseScale = isMobile ? 0.7 : 1;
  
  return (
    <div className="relative w-screen overflow-hidden flex items-center justify-center">
      <div className={`relative h-[400px] sm:h-[600px] ${isMobile ? 'pt-12' : 'pt-24'}`}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          {children}
        </div>
        {images.map((image, index) => {
          const totalImages = images.length;
          const angleRange = Math.PI;
          const angle = angleRange - (angleRange / (totalImages - 1)) * index;
          
          const x = Math.cos(angle) * baseRadius;
          const y = Math.sin(angle) * baseRadius * (isMobile ? 0.35 : 0.45);
          
          let outwardRotation;
          if (index === 0) outwardRotation = -55;
          else if (index === 1) outwardRotation = -45;
          else if (index === 2) outwardRotation = -35;
          else if (index === 3) outwardRotation = -20;
          else if (index === 4) outwardRotation = 0;
          else if (index === 5) outwardRotation = 20;
          else if (index === 6) outwardRotation = 35;
          else if (index === 7) outwardRotation = 45;
          else outwardRotation = 55;
          
          let scale;
          if (index === 0 || index === 8) scale = 0.95 * baseScale;
          else if (index === 1 || index === 7) scale = 1 * baseScale;
          else if (index === 4) scale = 1.1 * baseScale;
          else scale = 1.05 * baseScale;

          const finalRotation = outwardRotation + 90;

          return (
            <ImageTile
              key={index}
              src={image.src}
              alt={image.alt}
              isLogo={image.isLogo}
              rotation={finalRotation}
              className={`absolute transition-all duration-500 hover:scale-110 cursor-pointer ${
                isMobile ? 'w-24 h-16' : 'w-32 h-24'
              }`}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${finalRotation}deg) scale(${scale})`,
                transformOrigin: 'center',
                zIndex: 20 + (index === 4 ? totalImages : index),
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;