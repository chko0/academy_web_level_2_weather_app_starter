// components/fetchWeather.js
const API_KEY = '0f8a028284d5c98e589dcfa417d5fdd0'; // Replace with your actual OpenWeatherMap API key

export async function fetchCurrentWeather(city) {
  if (!city || typeof city !== 'string' || city.trim() === '') {
    throw new Error('Please provide a valid city name');
  }
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch weather data');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw new Error(`Could not fetch weather for ${city}: ${error.message}`);
  }
}

export async function fetchForecastWeather(city) {
  if (!city || typeof city !== 'string' || city.trim() === '') {
    throw new Error('Please provide a valid city name');
  }
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}`
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch forecast data');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw new Error(`Could not fetch forecast for ${city}: ${error.message}`);
  }
}