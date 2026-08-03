export const cropPredictorDatabase = {
  guntur: [
    {
      id: 'tomato-gnt',
      name: 'Tomato (Hybrid)',
      type: 'Vegetable',
      lastYearPrice: '₹55 / kg',
      predictedPrice: '₹9 - ₹12 / kg',
      saturation: 78,
      riskLevel: 'HIGH_RISK_GLUT',
      glutReason: '78% of local farmers are planting Tomato due to last year\'s high price peak of ₹55/kg. Mass harvest will flood local mandis causing severe price slump.',
      recommendation: 'AVOID MASS PLANTING',
      alternativeSuggestion: 'Groundnut or Red Gram',
      projectedNetProfit: '₹14,000 / acre',
      waterNeed: 'Medium-High',
      durationDays: 75
    },
    {
      id: 'groundnut-gnt',
      name: 'Groundnut (K-6)',
      type: 'Oilseed / Legume',
      lastYearPrice: '₹48 / kg',
      predictedPrice: '₹72 - ₹80 / kg',
      saturation: 22,
      riskLevel: 'HIGH_PROFIT_CONTRARIAN',
      glutReason: 'Only 22% of local farmers planting Groundnut this season. Low regional inventory and high oil extraction demand guarantee high price surge at harvest!',
      recommendation: 'HIGHLY RECOMMENDED (CONTRARIAN CHOICE)',
      projectedNetProfit: '₹92,000 / acre',
      waterNeed: 'Low',
      durationDays: 105
    },
    {
      id: 'redchilli-gnt',
      name: 'Teja Red Chilli',
      type: 'Spice Crop',
      lastYearPrice: '₹190 / kg',
      predictedPrice: '₹140 - ₹160 / kg',
      saturation: 62,
      riskLevel: 'MODERATE_RISK',
      glutReason: 'Moderate oversowing. Prices will stabilize slightly lower than last year, but export demand absorbs supply.',
      recommendation: 'GROW WITH INTER-CROPPING',
      projectedNetProfit: '₹75,000 / acre',
      waterNeed: 'Medium',
      durationDays: 140
    }
  ],
  nashik: [
    {
      id: 'onion-nsk',
      name: 'Red Onion (Garwa)',
      type: 'Horticulture',
      lastYearPrice: '₹42 / kg',
      predictedPrice: '₹8 - ₹11 / kg',
      saturation: 84,
      riskLevel: 'HIGH_RISK_GLUT',
      glutReason: '84% oversowing across Nashik belt. Massive arrival expected in November causing severe price slump.',
      recommendation: 'AVOID UNLESS YOU HAVE COLD STORAGE',
      alternativeSuggestion: 'Pomegranate or Maize',
      projectedNetProfit: '₹11,000 / acre',
      waterNeed: 'Medium',
      durationDays: 110
    },
    {
      id: 'maize-nsk',
      name: 'Hybrid Yellow Maize',
      type: 'Cereal / Poultry Feed',
      lastYearPrice: '₹1,900 / Qtl',
      predictedPrice: '₹2,600 / Qtl',
      saturation: 19,
      riskLevel: 'HIGH_PROFIT_CONTRARIAN',
      glutReason: 'Extremely high demand from regional poultry & cattle feed factories. Only 19% farmers sowing yellow maize.',
      recommendation: 'HIGHLY RECOMMENDED',
      projectedNetProfit: '₹68,000 / acre',
      waterNeed: 'Low-Medium',
      durationDays: 90
    }
  ],
  malwa: [
    {
      id: 'soybean-mlw',
      name: 'Soybean (JS-335)',
      type: 'Oilseed / Legume',
      lastYearPrice: '₹5,200 / Qtl',
      predictedPrice: '₹3,400 - ₹3,800 / Qtl',
      saturation: 81,
      riskLevel: 'HIGH_RISK_GLUT',
      glutReason: '81% of Malwa belt farmers repeated Soybean after last year\'s price spike. Regional crushing mills already booked to capacity, guaranteeing a mandi price crash at harvest.',
      recommendation: 'AVOID MASS PLANTING',
      alternativeSuggestion: 'Chickpea (Kabuli Gram) or Coriander',
      projectedNetProfit: '₹9,500 / acre',
      waterNeed: 'Low',
      durationDays: 100
    },
    {
      id: 'chickpea-mlw',
      name: 'Chickpea (Kabuli Gram)',
      type: 'Rabi Pulse',
      lastYearPrice: '₹5,600 / Qtl',
      predictedPrice: '₹7,800 - ₹8,400 / Qtl',
      saturation: 24,
      riskLevel: 'HIGH_PROFIT_CONTRARIAN',
      glutReason: 'Only 24% sowing share in Malwa this Rabi season against strong dal-mill demand. Black soil retention makes chickpea highly profitable with minimal irrigation.',
      recommendation: 'HIGHLY RECOMMENDED (CONTRARIAN CHOICE)',
      projectedNetProfit: '₹58,000 / acre',
      waterNeed: 'Low',
      durationDays: 95
    }
  ],
  ludhiana: [
    {
      id: 'paddy-ldh',
      name: 'Basmati Paddy (PUSA-1121)',
      type: 'Cereal',
      lastYearPrice: '₹4,100 / Qtl',
      predictedPrice: '₹2,600 - ₹3,000 / Qtl',
      saturation: 88,
      riskLevel: 'HIGH_RISK_GLUT',
      glutReason: '88% paddy sowing density across Ludhiana canal belt. Groundwater board warnings plus mandi oversupply expected to crash export basmati rates this harvest.',
      recommendation: 'AVOID UNLESS CONTRACT-FARMED',
      alternativeSuggestion: 'Maize or Moong (Green Gram)',
      projectedNetProfit: '₹12,500 / acre',
      waterNeed: 'Very High',
      durationDays: 130
    },
    {
      id: 'maize-ldh',
      name: 'Hybrid Maize (Spring)',
      type: 'Cereal / Poultry Feed',
      lastYearPrice: '₹1,850 / Qtl',
      predictedPrice: '₹2,450 / Qtl',
      saturation: 17,
      riskLevel: 'HIGH_PROFIT_CONTRARIAN',
      glutReason: 'Punjab crop diversification incentives plus poultry feed demand. Only 17% of farmers switching from paddy to Maize this season despite strong price signals.',
      recommendation: 'HIGHLY RECOMMENDED',
      projectedNetProfit: '₹64,000 / acre',
      waterNeed: 'Medium',
      durationDays: 90
    }
  ],
  tanjavur: [
    {
      id: 'paddy-tnj',
      name: 'Delta Paddy (ADT-45)',
      type: 'Cereal',
      lastYearPrice: '₹2,450 / Qtl',
      predictedPrice: '₹1,800 - ₹2,000 / Qtl',
      saturation: 85,
      riskLevel: 'HIGH_RISK_GLUT',
      glutReason: '85% of the Cauvery delta is under paddy this Kuruvai season. Government procurement centers already flagging storage overflow, signalling a harvest price dip.',
      recommendation: 'AVOID MASS PLANTING',
      alternativeSuggestion: 'Blackgram (Urad) or Sesame',
      projectedNetProfit: '₹10,200 / acre',
      waterNeed: 'Very High',
      durationDays: 105
    },
    {
      id: 'blackgram-tnj',
      name: 'Blackgram (Urad - VBN-8)',
      type: 'Pulse (Post-Paddy Rotation)',
      lastYearPrice: '₹6,800 / Qtl',
      predictedPrice: '₹9,200 - ₹9,800 / Qtl',
      saturation: 21,
      riskLevel: 'HIGH_PROFIT_CONTRARIAN',
      glutReason: 'Traditional post-paddy pulse rotation crop with only 21% coverage this cycle. Delta soil residual moisture cuts irrigation cost while dal demand keeps prices firm.',
      recommendation: 'HIGHLY RECOMMENDED (CONTRARIAN CHOICE)',
      projectedNetProfit: '₹51,000 / acre',
      waterNeed: 'Low (Residual Moisture)',
      durationDays: 70
    }
  ],
  warangal: [
    {
      id: 'cotton-wgl',
      name: 'Bt Cotton (Hybrid)',
      type: 'Cash Crop',
      lastYearPrice: '₹7,800 / Qtl',
      predictedPrice: '₹5,600 - ₹6,000 / Qtl',
      saturation: 74,
      riskLevel: 'HIGH_RISK_GLUT',
      glutReason: '74% of Warangal\'s red sandy loam belt sown with Cotton after last year\'s price rally. Ginning mills report full contracted stock, pointing to a harvest-time price correction.',
      recommendation: 'AVOID MASS PLANTING',
      alternativeSuggestion: 'Red Gram (Tur Dal) or Turmeric',
      projectedNetProfit: '₹16,000 / acre',
      waterNeed: 'Medium',
      durationDays: 160
    },
    {
      id: 'redgram-wgl',
      name: 'Red Gram (Tur Dal - LRG-41)',
      type: 'Pulse / Legume',
      lastYearPrice: '₹7,200 / Qtl',
      predictedPrice: '₹10,500 - ₹11,200 / Qtl',
      saturation: 26,
      riskLevel: 'HIGH_PROFIT_CONTRARIAN',
      glutReason: 'National dal shortage keeps demand strong while only 26% of Warangal district has sown Red Gram this Kharif. Red sandy loam soil is naturally suited to deep-rooted pulses.',
      recommendation: 'HIGHLY RECOMMENDED (CONTRARIAN CHOICE)',
      projectedNetProfit: '₹71,000 / acre',
      waterNeed: 'Low-Medium',
      durationDays: 150
    }
  ]
};
