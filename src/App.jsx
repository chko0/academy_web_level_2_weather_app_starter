// App.js
import { useState } from 'react';
import CurrentWeather from './components/CurrentWeather'
import UpcomingWeather from './components/UpcomingWeather'
import convertToCelsius from './components/convertToCelsius'
import Search from "./componets/Search";  


function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className=" bg-blue-300 min-h-screen">
      <header className="flex flex-row bg-[#759eda] p-4">
        <Search setWeatherData={setWeatherData} />
      </header>

      {weatherData && weatherData.list ? (
        <>
          <CurrentWeather
            id={weatherData.list[0].weather[0].id}
            desc={weatherData.list[0].weather[0].description}
            minTemp={convertToCelsius(weatherData.list[0].main.temp_min)}
            maxTemp={convertToCelsius(weatherData.list[0].main.temp_max)}
            humidity={weatherData.list[0].main.humidity}
            pressure={weatherData.list[0].main.pressure}
          />
          <UpcomingWeather weatherData={weatherData} />
        </>)
      : (
        <div className="text-center mt-4">
          {weatherData && weatherData.cod === '404' ? (
            <p className="text-red-500 size-20">{weatherData.message}</p>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}


export default App;
