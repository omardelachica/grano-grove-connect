import ImageTile from "./ImageTile";
import { ReactNode } from "react";

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string }>;
  children?: ReactNode;
}

const ImageCarousel = ({ images, children }: ImageCarouselProps) => {
  return (
    <div className="relative h-[700px] mb-16 overflow-hidden mx-auto w-full flex items-center justify-center">
      {images.map((image, index) => {
        const totalImages = images.length;
        const angleRange = Math.PI;
        const angle = angleRange - (angleRange / (totalImages - 1)) * index;
        
        const radius = 580;
        const x = Math.cos(angle) * radius;
        const y = -Math.sin(angle) * radius * 0.45;
        
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
        if (index === 0 || index === 8) scale = 0.95;
        else if (index === 1 || index === 7) scale = 1;
        else if (index === 4) scale = 1.1;
        else scale = 1.05;

        const finalRotation = outwardRotation + 90;

        return (
          <ImageTile
            key={index}
            src={image.src}
            alt={image.alt}
            rotation={finalRotation}
            className="absolute transition-all duration-500 hover:scale-110 cursor-pointer w-32 h-24"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${finalRotation}deg) scale(${scale})`,
              transformOrigin: 'center',
              zIndex: index === 4 ? totalImages : index,
            }}
          />
        );
      })}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        {children}
      </div>
    </div>
  );
};

export default ImageCarousel;