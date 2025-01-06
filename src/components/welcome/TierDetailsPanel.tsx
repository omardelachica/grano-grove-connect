import { Bean } from "lucide-react";

type TierInfo = {
  title: string;
  description: string;
  details: string;
  beans: number;
  image: string;
};

type Props = {
  selectedTier: string | null;
  tierInfo: Record<string, TierInfo>;
};

export const TierDetailsPanel = ({ selectedTier, tierInfo }: Props) => {
  if (!selectedTier) {
    return (
      <div className="text-center text-slate/60 h-full flex items-center justify-center">
        <p>Select a tier to see more details</p>
      </div>
    );
  }

  const info = tierInfo[selectedTier];

  return (
    <div className="animate-fadeIn space-y-4">
      <h4 className="font-playfair text-xl text-espresso mb-4 font-bold">
        {info.title}
      </h4>
      <div className="aspect-video rounded-lg overflow-hidden mb-4">
        <img
          src={info.image}
          alt={info.title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-slate">{info.details}</p>
    </div>
  );
};