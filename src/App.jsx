import { useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import UpcomingWeather from './components/UpcomingWeather';
import { convertToCelsius, convertToFahrenheit } from './components/convertToCelsius';
import Search from "./components/Search";
import { fetchCurrentWeather, fetchForecastWeather } from './components/fetchWeather';

export default function App() {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('C'); // 'C' or 'F'

  const handleSearch = async (cityName) => {
    setCity(cityName);
    setError('');
    setLoading(true);
    
    try {
      // Fetch current weather data
      const currentData = await fetchCurrentWeather(cityName);
      setCurrentWeather(currentData);
      
      // Fetch forecast data
      const forecastData = await fetchForecastWeather(cityName);
      setForecastData(forecastData.list || []);
    } catch (err) {
      console.error("Error in weather fetching:", err);
      setError(err.message);
      setCurrentWeather(null);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  const convertTemp = (kelvin) => {
    return unit === 'C' ? convertToCelsius(kelvin) : convertToFahrenheit(kelvin);
  };

  return (
    <div className="bg-blue-300 min-h-screen">
      <Search onSearch={handleSearch} />
      
      {city && <p className="text-center text-xl mt-4">Selected City: {city}</p>}

      <div className="flex justify-center mt-4">
        <button
          onClick={toggleUnit}
          className="bg-[#5879c7] text-white px-4 py-2 rounded"
        >
          Show °{unit === 'C' ? 'F' : 'C'}
        </button>
      </div>

      {loading && <p className="text-center mt-4 text-xl">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">Error: {error}</p>}

      {currentWeather && currentWeather.weather && currentWeather.main && (
        <div className="mt-8">
          <CurrentWeather
            id={currentWeather.weather[0].id}
            desc={currentWeather.weather[0].description}
            minTemp={convertTemp(currentWeather.main.temp_min)}
            maxTemp={convertTemp(currentWeather.main.temp_max)}
            humidity={currentWeather.main.humidity}
            pressure={currentWeather.main.pressure}
            unit={unit}
          />
        </div>
      )}

      {forecastData.length > 0 && (
        <UpcomingWeather 
          weatherData={forecastData} 
          unit={unit} 
        />
      )}
    </div>
  );
}