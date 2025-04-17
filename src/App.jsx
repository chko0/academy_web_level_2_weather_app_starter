import { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import UpcomingWeather from './components/Forecast';
import { convertToCelsius, convertToFahrenheit } from './components/convertToCelsius';
import Search from "./components/Search";
// import { fetchCurrentWeather, /*fetchForecastWeather*/ } from './components/fetchWeather';


export default function App() {
  // const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("bg-[#90BEFF]");
  // const [forecastData, setForecastData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('C'); // 'C' or 'F'


  useEffect(() => {
    if (!weatherData) return;

    if (weatherData?.list?.[0]?.weather?.[0]?.main) {
      const weatherState = weatherData.list[0].weather[0].main.toLowerCase();
      console.log("Weather state: " + weatherState);
      switch (weatherState) {
        case "clear":
          setBackgroundColor("bg-[#2490E7]");
          break;
        case "rain":
          setBackgroundColor("bg-[#A7B4C6]");
          break;
        case "clouds":
        default:
          setBackgroundColor("bg-[#90BEFF]");
          break;
      }
      console.log("Background Color:", backgroundColor);
    } else {
      console.log("Weather data or its structure is not yet available.");
      setBackgroundColor("bg-[#90BEFF]");
    }
  }, [weatherData]);


  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  const convertTemp = (kelvin) => {
    return unit === 'C' ? convertToCelsius(kelvin) : convertToFahrenheit(kelvin);
  };

  return (
    <div className={`min-h-screen ${backgroundColor} transition-color duration-2000`}>
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
          <UpcomingWeather className="pt-8"
            weatherData={weatherData}
            unit={unit}
            convertTemp={convertTemp}
          />
        </div>
      ) : (<></>)}
    </div>
  );
}