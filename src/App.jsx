// App.js
import { useState } from 'react';
import './index.css';
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/UpcomingWeather'
import convertToCelsius from './components/convertToCelsius'
import Search from "./componets/Search";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  let backgroundClass = 'bg-weather-clouds';

  if (weatherData) {
    const mainWeather = weatherData.list[0].weather[0].main;

    if (mainWeather) {
      switch (mainWeather.toLowerCase()) {
        case 'clear':
          backgroundClass = 'bg-weather-clear';
          break;
        case 'clouds':
          backgroundClass = 'bg-weather-clouds';
          break;
        case 'rain':
          backgroundClass = 'bg-weather-rain';
          break;
        default:
          backgroundClass = 'bg-weather-clear';
      }
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-2000 ease-in-out ${backgroundClass}`}>
      <header className="flex flex-row bg-[#759eda] p-4">
        <Search setWeatherData={setWeatherData} setErrorMessage={setErrorMessage} />
      </header>

      {weatherData ? (
        <>
          <CurrentWeather
            id={weatherData.list[0].weather[0].id}
            desc={weatherData.list[0].weather[0].description}
            minTemp={convertToCelsius(weatherData.list[0].main.temp_min)}
            maxTemp={convertToCelsius(weatherData.list[0].main.temp_max)}
            humidity={weatherData.list[0].main.humidity}
            pressure={weatherData.list[0].main.pressure}
          />
          <Forecast weatherData={weatherData} />
        </>)
      : (
        <div className="text-center mt-4">
          {errorMessage ? (
            <p className="text-red-500 size-20">{errorMessage}</p>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}


export default App;
