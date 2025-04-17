import { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import UpcomingWeather from './components/UpcomingWeather';
import { convertToCelsius, convertToFahrenheit } from './components/convertToCelsius';
import Search from "./components/Search";
// import { fetchCurrentWeather, /*fetchForecastWeather*/ } from './components/fetchWeather';


export default function App() {
  // const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#8AC6EA");
  // const [forecastData, setForecastData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('C'); // 'C' or 'F'


  useEffect(() => {
    if (!weatherData) return;

    if (weatherData?.list?.[0]?.weather?.[0]?.main) {
      const weatherState = weatherData.list[0].weather[0].main;
      console.log("Weather state: " + weatherState);
      switch (weatherState.toLowerCase()) {
        case "clouds":
          setBackgroundColor("#A2B6C7");
          break;
        case "clear":
          setBackgroundColor("#2490F9");
          break;
        case "sun":
          setBackgroundColor("#A2B9BF");
          break;
        case "rain":
        default:
          setBackgroundColor("#8AC6EA");
          break;
      }
      console.log("Background Color:", backgroundColor);
    } else {
      console.log("Weather data or its structure is not yet available.");
      setBackgroundColor("#8AC6EA");
    }
  }, [weatherData]);


  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  const convertTemp = (kelvin) => {
    return unit === 'C' ? convertToCelsius(kelvin) : convertToFahrenheit(kelvin);
  };

  return (
    <div className={`min-h-screen transition-color duration-2000 bg-[${backgroundColor}]`}>
      <Search setWeatherData={setWeatherData} setLoading={setLoading} setError={setErrorMessage} />

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
      {errorMessage && <p className="text-center text-red-600 mt-4">Error: {errorMessage}</p>}

      {weatherData ? (
        <div className="mt-8">
          <CurrentWeather
            currentWeatherData={weatherData}
            unit={unit}
            convertTemp={convertTemp}
          />
          <UpcomingWeather
            weatherData={weatherData}
            unit={unit}
            convertTemp={convertTemp}
          />
        </div>
      ) : (<></>)}
    </div>
  );
}