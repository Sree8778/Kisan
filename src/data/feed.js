export const multiSpeciesFeedRatios = {
  cattle: {
    title: 'Cattle & Dairy Cow Feed Calculator',
    description: 'Calculates Daily Green Fodder, Dry Straw & Concentrate Feed based on milk yield (L/day).',
    calculate: (bodyWeightKg, milkYieldLiters) => {
      const dryMatter = (bodyWeightKg * 0.03).toFixed(1);
      const concentrate = (1.5 + milkYieldLiters * 0.4).toFixed(1);
      const greenFodder = (bodyWeightKg * 0.05).toFixed(1);
      const dryStraw = (dryMatter - (concentrate * 0.9) - (greenFodder * 0.2)).toFixed(1);
      return {
        dryMatter: `${dryMatter} kg/day`,
        concentrate: `${concentrate} kg concentrate mix`,
        greenFodder: `${greenFodder} kg green Napier/Maize`,
        dryStraw: `${Math.max(2, dryStraw)} kg wheat/paddy straw`,
        estDailyCost: `₹ ${(concentrate * 28 + greenFodder * 2.5 + 10).toFixed(0)} / day`
      };
    }
  },
  sheep: {
    title: 'Sheep & Goat Weight Gain Feed Calculator',
    description: 'Calculates Intensive Stall-Fed / Grazing Feed for fast meat weight gain (Target: 120-150g daily gain).',
    calculate: (flockSize, avgWeightKg) => {
      const totalFlockWeight = flockSize * avgWeightKg;
      const dailyConcentrateFlock = (flockSize * (avgWeightKg * 0.015)).toFixed(1);
      const dailyLegumeFodder = (flockSize * (avgWeightKg * 0.04)).toFixed(1);
      return {
        flockSize: `${flockSize} Animals`,
        dailyConcentrateFlock: `${dailyConcentrateFlock} kg (Maize + Groundnut cake)`,
        dailyLegumeFodder: `${dailyLegumeFodder} kg Green Lucerne / Stylo grass`,
        expectedMonthlyWeightGain: `${(flockSize * 3.8).toFixed(1)} kg total flock gain`,
        estMonthlyProfitMargin: `₹ ${(flockSize * 3.8 * 380 - dailyConcentrateFlock * 30 * 24).toFixed(0)}`
      };
    }
  },
  poultry: {
    title: 'Broiler & Layer Poultry Feed (FCR Optimizer)',
    description: 'Calculates Feed Conversion Ratio (FCR) and total feed required to reach 2.0 kg body weight.',
    calculate: (birdsCount) => {
      const totalFeedKg = (birdsCount * 3.4).toFixed(0);
      const starterFeed = (birdsCount * 0.9).toFixed(0);
      const finisherFeed = (birdsCount * 2.5).toFixed(0);
      return {
        birdsCount: `${birdsCount} Broilers`,
        totalFeedKg: `${totalFeedKg} kg feed (Day 1 to Day 38)`,
        starterFeed: `${starterFeed} kg Crumbs (Day 1-14)`,
        finisherFeed: `${finisherFeed} kg Pellets (Day 15-38)`,
        targetFCR: '1.55 FCR',
        estMeatYield: `${(birdsCount * 2.1).toFixed(0)} kg live weight`
      };
    }
  },
  fish: {
    title: 'Fish Pond Biomass & Feeding Rate (Rohu/Katla)',
    description: 'Calculates daily floating pellet feed based on pond water surface area and fish biomass.',
    calculate: (pondAreaAcres, totalFishCount, avgFishWeightGrams) => {
      const totalBiomassKg = (totalFishCount * (avgFishWeightGrams / 1000)).toFixed(0);
      const feedingRate = avgFishWeightGrams < 100 ? 0.05 : avgFishWeightGrams < 300 ? 0.035 : 0.025;
      const dailyFeedKg = (totalBiomassKg * feedingRate).toFixed(1);
      return {
        totalBiomass: `${totalBiomassKg} kg total fish weight`,
        dailyFeedKg: `${dailyFeedKg} kg floating pellets / day`,
        feedingSchedule: 'Split into 2 meals (8:00 AM & 4:00 PM)',
        proteinRequirement: avgFishWeightGrams < 100 ? '32% Crude Protein' : '28% Crude Protein'
      };
    }
  }
};
