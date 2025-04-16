// App.js
import { useState } from 'react';
import Search from './components/Search';
import { fetchCurrentWeather, fetchForecastWeather } from './utils/fetchWeather';
import CurrentWeather from './components/CurrentWeather';
import UpcomingWeather from './components/UpcomingWeather';
import { convertToCelsius, convertToFahrenheit } from './components/convertToCelsius';

export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('celsius'); // "celsius" or "fahrenheit"

  const handleSearch = async (cityName) => {
    setCity(cityName);
    setError('');
    setLoading(true);
    try {
      const current = await fetchCurrentWeather(cityName);
      const forecast = await fetchForecastWeather(cityName);
      setWeatherData(current);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'celsius' ? 'fahrenheit' : 'celsius'));
  };

  const formatTemp = (k) =>
    unit === 'celsius' ? convertToCelsius(k) : convertToFahrenheit(k);

  return (
    <div className="bg-blue-300 min-h-screen">
      <Search onSearch={handleSearch} />

      <div className="text-center mt-4">
        <p className="text-xl">Selected City: {city}</p>
        <button
          onClick={toggleUnit}
          className="mt-2 px-4 py-2 bg-[#5879c7] text-white rounded shadow hover:bg-[#4a68b5]"
        >
          Switch to {unit === 'celsius' ? '°F' : '°C'}
        </button>
      </div>

      {loading && <p className="text-center text-xl mt-4">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">Error: {error}</p>}

      {weatherData && (
        <CurrentWeather
          id={weatherData.weather[0].id}
          desc={weatherData.weather[0].description}
          minTemp={formatTemp(weatherData.main.temp_min)}
          maxTemp={formatTemp(weatherData.main.temp_max)}
          humidity={weatherData.main.humidity}
          pressure={weatherData.main.pressure}
          unit={unit}
        />
      )}

      {forecastData?.list && (
        <UpcomingWeather weatherData={forecastData.list} unit={unit} />
      )}
    </div>
  );
}
