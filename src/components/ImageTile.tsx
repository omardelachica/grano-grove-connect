import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface ImageTileProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  style?: CSSProperties;
  isLogo?: boolean;
}

const ImageTile = ({ src, alt, className, rotation = 0, style, isLogo = false }: ImageTileProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-float",
        className
      )}
      style={{ 
        transform: `rotate(${isLogo ? rotation : rotation + 90}deg)`, 
        ...style 
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
    </div>
  );
};

export default ImageTile;