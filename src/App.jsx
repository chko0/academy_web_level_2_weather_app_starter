// App.js
import { useState } from 'react';
import CurrentWeather from './components/CurrentWeather'
import UpcomingWeather from './components/UpcomingWeather'
import convertToCelsius from './components/convertToCelsius'
import Search from "./componets/Search";  
import FakeWeather from "./data/FakeWeather.json";

function App() {
  const [weatherData, setWeatherData] = useState(null);



  return (
    <div className=" bg-blue-300 min-h-screen">
      <header className="flex flex-row bg-[#759eda] p-4">
        <Search setWeatherData={setWeatherData} />
      </header>

      {weatherData && weatherData.weather && weatherData.main ? (
        <>
          <CurrentWeather
            id={weatherData.weather[0].id}
            desc={weatherData.weather[0].description}
            minTemp={convertToCelsius(weatherData.main.temp_min)}
            maxTemp={convertToCelsius(weatherData.main.temp_max)}
            humidity={weatherData.main.humidity}
            pressure={weatherData.main.pressure}
          />
          <UpcomingWeather />
        </>)
      : (<></>)}
    </div>
  );
}


export default App;
