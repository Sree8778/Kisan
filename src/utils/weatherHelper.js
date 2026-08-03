// Live weather via Open-Meteo (https://open-meteo.com) — free, no API key
// required. Real current conditions + forecast for real coordinates.

// WMO weather interpretation codes (Open-Meteo docs), mapped to a short
// label used in the UI.
const WMO_LABELS = {
  0: 'Clear Sky',
  1: 'Mainly Clear',
  2: 'Partly Cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing Fog',
  51: 'Light Drizzle',
  53: 'Drizzle',
  55: 'Dense Drizzle',
  56: 'Freezing Drizzle',
  57: 'Freezing Drizzle',
  61: 'Light Rain',
  63: 'Rain',
  65: 'Heavy Rain',
  66: 'Freezing Rain',
  67: 'Freezing Rain',
  71: 'Light Snow',
  73: 'Snow',
  75: 'Heavy Snow',
  77: 'Snow Grains',
  80: 'Light Showers',
  81: 'Showers',
  82: 'Violent Showers',
  85: 'Snow Showers',
  86: 'Heavy Snow Showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm w/ Hail',
  99: 'Severe Thunderstorm'
};

export function weatherLabel(code) {
  return WMO_LABELS[code] || 'Unknown Conditions';
}

export async function fetchDistrictWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=precipitation_probability_max,temperature_2m_max,temperature_2m_min&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Weather request failed (${res.status})`);
  }
  const data = await res.json();

  return {
    tempC: Math.round(data.current.temperature_2m),
    humidity: data.current.relative_humidity_2m,
    windKmh: Math.round(data.current.wind_speed_10m),
    weatherCode: data.current.weather_code,
    conditions: weatherLabel(data.current.weather_code),
    rainChanceToday: data.daily.precipitation_probability_max?.[0] ?? 0,
    tempMaxToday: Math.round(data.daily.temperature_2m_max?.[0]),
    tempMinToday: Math.round(data.daily.temperature_2m_min?.[0]),
    fetchedAt: new Date()
  };
}

// Derives a real, non-hardcoded farming tip from the actual fetched values
// instead of a fixed sentence.
export function actionableTip(weather) {
  if (!weather) return null;

  if (weather.humidity >= 85 && weather.tempC >= 22 && weather.tempC <= 32) {
    return 'High humidity with warm temperatures — ideal conditions for fungal leaf blast. Postpone nitrogen fertilizer on paddy and inspect leaves closely.';
  }
  if (weather.rainChanceToday >= 70) {
    return `${weather.rainChanceToday}% rain chance today — delay pesticide/fertilizer spraying to avoid it washing off before absorption.`;
  }
  if (weather.tempC >= 38) {
    return 'Extreme heat — increase irrigation frequency for young crops and provide shade cover for livestock during peak afternoon hours.';
  }
  if (weather.windKmh >= 30) {
    return `Strong winds (${weather.windKmh} km/h) — secure any standing tall crops (maize, sugarcane) and delay aerial spraying.`;
  }
  if (weather.humidity <= 30) {
    return 'Low humidity — monitor soil moisture closely and consider drip irrigation to reduce evaporation loss.';
  }
  return 'Conditions are stable — a good window for routine field operations and spraying.';
}
