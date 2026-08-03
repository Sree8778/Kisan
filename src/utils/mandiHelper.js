// Live government mandi commodity prices via data.gov.in's Agmarknet
// dataset ("Current Daily Price of Various Commodities from Various
// Markets"), resource id 9ef84268-d588-465a-a308-a864a43d0070.
// Ministry of Agriculture & Farmers Welfare, updated daily.

const RESOURCE_ID = '9ef84268-d588-465a-a308-a864a43d0070';
const API_KEY = import.meta.env.VITE_DATA_GOV_API_KEY;
const BASE_URL = `https://api.data.gov.in/resource/${RESOURCE_ID}`;

export async function fetchMandiPrices(districtName, limit = 8) {
  if (!API_KEY) {
    throw new Error('Missing data.gov.in API key (VITE_DATA_GOV_API_KEY)');
  }

  const params = new URLSearchParams({
    'api-key': API_KEY,
    format: 'json',
    limit: String(limit),
    'filters[district]': districtName
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!res.ok) {
    throw new Error(`Mandi price request failed (${res.status})`);
  }

  const data = await res.json();
  const records = data.records || [];

  return records.map(r => ({
    commodity: r.commodity,
    variety: r.variety,
    market: r.market,
    minPrice: Number(r.min_price),
    maxPrice: Number(r.max_price),
    modalPrice: Number(r.modal_price),
    arrivalDate: r.arrival_date
  }));
}
