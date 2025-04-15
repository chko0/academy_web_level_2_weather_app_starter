const API_KEY = "0f8a028284d5c98e589dcfa417d5fdd0";
if (!API_KEY) {
  console.error(
    'Please set the REACT_APP_WEATHER_API_KEY in your .env file with your actual OpenWeather API key.'
  );
}

/**
 * Fetch current weather data for a given city.
 * @param {string} city - The city name.
 * @returns {Promise<Object>} - The weather data.
 */
export async function fetchCurrentWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather data not found or API error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
