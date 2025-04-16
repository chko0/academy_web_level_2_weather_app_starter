import { useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import UpcomingWeather from './components/UpcomingWeather';
import { convertToCelsius, convertToFahrenheit } from './components/convertToCelsius';
import Search from "./components/Search";
import { fetchCurrentWeather, /*fetchForecastWeather*/ } from './components/fetchWeather';


export default function App() {
  // const [city, setCity] = useState('');
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState()
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('C'); // 'C' or 'F'

  const handleSearch = async (cityName) => {
    // setCity(cityName);
    setError('');
    setLoading(true);
    
    try {
      // Fetch current weather data
      const currentData = await fetchCurrentWeather(cityName);
      setCurrentWeatherData(currentData);
      console.log(currentWeatherData);
      
      // // Fetch forecast data
      // const forecastData = await fetchForecastWeather(cityName);
      // setForecastData(forecastData.list || []);
      // console.log(forecastData);

      // Get weather main state (for changign background color)
      const weatherState = currentWeatherData.weather[0].main;
      console.log(weatherState);
      switch(weatherState.toLowerCase()) {
        case "clouds":
          setBackgroundColor("#A2B6C7");
          break;
        case "clear":
          setBackgroundColor("#2490F9");
          break;
        case "sun":
          setBackgroundColor("#A2B9BF");
          break;
        case "rain": default:
          setBackgroundColor("#8AC6EA");
          break;
      }

      console.log(backgroundColor);

    } catch (err) {
      console.error("Error in weather fetching:", err);
      setError(err.message);
      setCurrentWeatherData(null);
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
    <div className={`bg-[${backgroundColor}] min-h-screen`}>
      <Search onSearch={handleSearch} />
      
      {/* {city && <p className="text-center text-xl mt-4">Selected City: {city}</p>} */}

      <div className="flex justify-center mt-4">
        <button
          onClick={toggleUnit}
          className="bg-[#5879c7] text-white px-4 py-2 rounded"
          type="submit"
        >
          Show °{unit === 'C' ? 'F' : 'C'}
        </button>
      </div>

      {loading && <p className="text-center mt-4 text-xl">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">Error: {error}</p>}

      {currentWeatherData && currentWeatherData.weather && currentWeatherData.main && (
        <div className="mt-8">
          <CurrentWeather
            currentWeatherData={currentWeatherData}
            convertTemp={convertTemp}
            unit={unit}
          />
        </div>
      )}

      {forecastData.length > 0 && (
        <UpcomingWeather 
          weatherData={forecastData} 
          unit={unit}
          convertTemp={convertTemp}
        />
      )}
    </div>
  );
}