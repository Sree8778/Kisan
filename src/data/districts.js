// lat/lon are the real coordinates of each district's administrative hub,
// used to fetch live weather (Open-Meteo) tied to the actual place.
// apiDistrict is the exact district name the data.gov.in Agmarknet mandi
// price dataset expects as a filter value (verified against live records —
// "Malwa" isn't a district itself, so it maps to Indore, its largest hub).
export const regionalDistricts = [
  { id: 'guntur', name: 'Guntur & Krishna (Andhra Pradesh)', soil: 'Alluvial & Black Soil', defaultSeason: 'Kharif', lat: 16.3067, lon: 80.4365, apiDistrict: 'Guntur' },
  { id: 'nashik', name: 'Nashik Region (Maharashtra)', soil: 'Black Clay Soil', defaultSeason: 'Kharif', lat: 19.9975, lon: 73.7898, apiDistrict: 'Nashik' },
  { id: 'malwa', name: 'Malwa Belt (Madhya Pradesh)', soil: 'Black Cotton Soil', defaultSeason: 'Rabi', lat: 22.7196, lon: 75.8577, apiDistrict: 'Indore' },
  { id: 'ludhiana', name: 'Ludhiana Region (Punjab)', soil: 'Alluvial Loam Soil', defaultSeason: 'Rabi', lat: 30.9010, lon: 75.8573, apiDistrict: 'Ludhiana' },
  { id: 'tanjavur', name: 'Tanjavur Delta (Tamil Nadu)', soil: 'Alluvial Clay', defaultSeason: 'Kharif', lat: 10.7870, lon: 79.1378, apiDistrict: 'Thanjavur' },
  { id: 'warangal', name: 'Warangal (Telangana Deccan)', soil: 'Red Sandy Loam', defaultSeason: 'Kharif', lat: 17.9689, lon: 79.5941, apiDistrict: 'Warangal' }
];

export const soilTypes = [
  { id: 'alluvial', name: 'Alluvial Loam', fertility: 'Very High', bestFor: 'Paddy, Wheat, Sugarcane' },
  { id: 'black', name: 'Black Cotton / Clay', fertility: 'High', bestFor: 'Cotton, Soybeans, Chickpeas' },
  { id: 'red', name: 'Red Sandy Loam', fertility: 'Medium', bestFor: 'Millets, Maize, Groundnut, Sheep' },
  { id: 'coastal', name: 'Coastal Alluvial / Clay', fertility: 'High', bestFor: 'Aquaculture (Prawns/Fish), Coconut' }
];
