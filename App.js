// App.js
import { useState } from 'react';
import Search from './componets/Search';
import { fetchCurrentWeather } from './utils/fetchWeather';
import CurrentWeather from './components/CurrentWeather';
import UpcomingWeather from './components/UpcomingWeather';
import convertToCelsius from './components/convertToCelsius';



export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function that handles the search from the Search component
  const handleSearch = async (cityName) => {
    setCity(cityName);
    setError('');
    setLoading(true);
    try {
      const data = await fetchCurrentWeather(cityName);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const currentWeather = weatherData;

  return (
    <div className="bg-blue-300 min-h-screen">
      <Search onSearch={handleSearch} />
      <p className="text-center text-xl mt-4">Selected City: {city}</p>

      {loading && <p className="text-center text-xl mt-4">Loading...</p>}
      {error && (
        <p className="text-center text-red-600 mt-4">Error: {error}</p>
      )}

      {currentWeather && (
        <CurrentWeather
          id={currentWeather.weather[0].id}
          desc={currentWeather.weather[0].description}
          minTemp={convertToCelsius(currentWeather.main.temp_min)}
          maxTemp={convertToCelsius(currentWeather.main.temp_max)}
          humidity={currentWeather.main.humidity}
          pressure={currentWeather.main.pressure}
        />
      )}

      <UpcomingWeather />
    </div>
  );
}
