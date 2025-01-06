import { Coffee } from "lucide-react";
import { ConsumerTierInfo, ConsumptionTier } from "./types";

type Props = {
  selectedTier: ConsumptionTier | null;
  setSelectedTier: (tier: ConsumptionTier) => void;
  tierInfo: Record<ConsumptionTier, ConsumerTierInfo>;
};

export const ConsumerTierSelection = ({
  selectedTier,
  setSelectedTier,
  tierInfo,
}: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="font-playfair text-xl text-espresso mb-4 font-bold">
        Select Your Coffee Consumption Level
      </h3>
      <div className="space-y-4">
        {(Object.entries(tierInfo) as [ConsumptionTier, ConsumerTierInfo][]).map(
          ([tier, info]) => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedTier === tier
                  ? "bg-cream border-2 border-espresso"
                  : "bg-white border-2 border-gray-200 hover:border-espresso"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-playfair text-lg text-espresso font-bold">{info.title}</h3>
                <div className="flex gap-1">
                  {[...Array(info.cups)].map((_, i) => (
                    <Coffee key={i} className="w-4 h-4 text-espresso" />
                  ))}
                </div>
                <p className="text-sm text-slate text-center">{info.description}</p>
              </div>
            </button>
          )
        )}
      </div>
    </div>
  );
};