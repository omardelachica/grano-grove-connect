import { Bean } from "lucide-react";
import { ProductionTier, TierInfo } from "./types";

type Props = {
  selectedTier: ProductionTier | null;
  onTierSelect: (tier: ProductionTier) => void;
  tierInfo: Record<string, TierInfo>;
};

export const TierSelection = ({ selectedTier, onTierSelect, tierInfo }: Props) => {
  return (
    <div className="space-y-4">
      {(Object.entries(tierInfo) as [ProductionTier, TierInfo][]).map(([tier, info]) => (
        <div
          key={tier}
          className={`rounded-lg border-2 transition-all ${
            selectedTier === tier
              ? 'border-espresso bg-cream'
              : 'border-espresso/20 hover:border-espresso/40'
          }`}
        >
          <button
            type="button"
            onClick={() => onTierSelect(tier)}
            className="w-full p-4"
          >
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-playfair text-lg text-espresso font-bold">{info.title}</h3>
              <div className="flex gap-1">
                {[...Array(info.beans)].map((_, i) => (
                  <Bean key={i} className="w-4 h-4 text-espresso" />
                ))}
              </div>
            </div>
            <p className="text-sm text-slate mt-2">{info.description}</p>
          </button>
        </div>
      ))}
    </div>
  );
};