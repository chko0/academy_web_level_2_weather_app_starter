// components/fetchWeather.js
const API_KEY = '0f8a028284d5c98e589dcfa417d5fdd0';
const URL = 'https://api.openweathermap.org/data/2.5/forecast';


export async function fetchCurrentWeather(city) {
  if (!city || typeof city !== 'string' || city.trim() === '') {
    throw new Error('Please provide a valid city name!');
  }
  
  try {
    const res = await fetch(`${URL}?q=${encodeURIComponent(city)}&cnt=42&appid=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    
    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch weather data');
    }
    
    console.log(data.list[0].weather[0].main);

    return data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw new Error(`Could not fetch weather for ${city}: ${error.message}`);
  }
}


// export async function fetchForecastWeather(city) {
//   if (!city || typeof city !== 'string' || city.trim() === '') {
//     throw new Error('Please provide a valid city name');
//   }
  
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}`
//     );
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to fetch forecast data');
//     }
    
//     return data;
//   } catch (error) {
//     console.error('Error fetching forecast:', error);
//     throw new Error(`Could not fetch forecast for ${city}: ${error.message}`);
//   }
// }