export const diseaseDiagnosticDB = [
  {
    id: 'd1',
    category: 'Crops',
    cropOrAnimal: 'Paddy / Rice',
    diseaseName: 'Paddy Leaf Blast (Magnaporthe oryzae)',
    symptoms: 'Spindle-shaped lesions on leaves with dark reddish-brown margins and greyish centers.',
    cause: 'High humidity (>90%) with cool night temperatures and excessive nitrogen fertilizer.',
    treatment: 'Spray Tricyclazole 75% WP @ 0.6g/L water. Reduce nitrogenous fertilizer applications and ensure proper water drainage.',
    preventive: 'Use certified resistant seed varieties and balanced NPK fertilization.',
    severity: 'HIGH'
  },
  {
    id: 'd2',
    category: 'Livestock',
    cropOrAnimal: 'Cattle & Cows',
    diseaseName: 'Lumpy Skin Disease (LSD Viral)',
    symptoms: 'Nodular skin lesions (2-5cm diameter) on body, neck, udder. Fever, watery eyes, reduced milk yield.',
    cause: 'Poxviridae virus transmitted by biting flies, mosquitoes, and ticks.',
    treatment: 'Isolate affected animals immediately. Administer supportive antipyretics, antibiotics for secondary infection, and topically apply neem oil + turmeric paste on skin nodules.',
    preventive: 'Vaccinate with Goat Pox Vaccine (LSD strain) annually and maintain fly vector control in shed.',
    severity: 'CRITICAL'
  },
  {
    id: 'd3',
    category: 'Poultry',
    cropOrAnimal: 'Broilers & Layers',
    diseaseName: 'Newcastle Disease (Ranikhet)',
    symptoms: 'Gasping, green watery diarrhea, twisted neck (torticollis), sudden mortality.',
    cause: 'Avian paramyxovirus type 1.',
    treatment: 'No cure once severe. Provide vitamin C + electrolyte support in drinking water to boost flock immunity.',
    preventive: 'Mandatory vaccination with LaSota strain on Day 5 and Day 21.',
    severity: 'CRITICAL'
  },
  {
    id: 'd4',
    category: 'Aquaculture',
    cropOrAnimal: 'Fish (Rohu / Katla)',
    diseaseName: 'Fin & Tail Rot (Bacterial Infections)',
    symptoms: 'Frayed, white edges on fins, sloughing off fin rays, lethargic swimming near pond edges.',
    cause: 'Aeromonas / Pseudomonas bacterial growth due to high ammonia or overcrowding.',
    treatment: 'Apply Potassium Permanganate (KMnO4) @ 2 kg/acre pond water. Maintain aeration.',
    preventive: 'Regular water testing for pH (7.5-8.5) and ammonia levels (<0.05 mg/L).',
    severity: 'MEDIUM'
  }
];
