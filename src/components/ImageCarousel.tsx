import ImageTile from "./ImageTile";
import { ReactNode } from "react";

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string; isLogo?: boolean }>;
  children?: ReactNode;
}

const ImageCarousel = ({ images, children }: ImageCarouselProps) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        {children}
      </div>
      {images.map((image, index) => {
        const totalImages = images.length;
        const angleRange = Math.PI;
        const angle = angleRange - (angleRange / (totalImages - 1)) * index;
        
        const radius = 580;
        const x = Math.cos(angle) * radius;
        const y = -Math.sin(angle) * radius * 0.45;
        
        const outwardRotation = (() => {
          if (index === 0) return -55;
          if (index === 1) return -45;
          if (index === 2) return -35;
          if (index === 3) return -20;
          if (index === 4) return 0;
          if (index === 5) return 20;
          if (index === 6) return 35;
          if (index === 7) return 45;
          return 55;
        })();
        
        const scale = (() => {
          if (index === 0 || index === 8) return 0.95;
          if (index === 1 || index === 7) return 1;
          if (index === 4) return 1.1;
          return 1.05;
        })();

        return (
          <ImageTile
            key={index}
            src={image.src}
            alt={image.alt}
            isLogo={image.isLogo}
            rotation={outwardRotation + 90}
            className="absolute transition-all duration-500 hover:scale-110 cursor-pointer w-32 h-24"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${outwardRotation + 90}deg) scale(${scale})`,
              transformOrigin: 'center',
              zIndex: 20 + (index === 4 ? totalImages : index),
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageCarousel;