const API_KEY = "0f8a028284d5c98e589dcfa417d5fdd0";
const URL = `https://api.openweathermap.org/data/2.5/forecast`;

// if (!API_KEY) {
//   console.error(
//     'Please set the REACT_APP_WEATHER_API_KEY in your .env file with your actual OpenWeather API key.'
//   );
// }


export async function fetchCurrentWeather(city, setWeatherData, setErrorMessage) {
  try {
    const res = await fetch(`${URL}?q=${city}&appid=${API_KEY}`);
    if (!res.ok) {
       throw new Error('Weather data not found or API error');
    }
    const data = await res.json();
    console.log(data);
    setWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    setWeatherData(null);
    setErrorMessage(error);
  }
}