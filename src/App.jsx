import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentWeather from './components/CurrentWeather'
import UpcomingWeather from './components/UpcomingWeather'
import FakeWeather from "./data/FakeWeather.json";

function App() {
  var jsonMain = FakeWeather.list[0].main;
  var jsonWeather = FakeWeather.list[0].weather[0];
  console.log(jsonWeather

  );

  return (
    <body class="bg-blue-300">
      <CurrentWeather
        id={jsonWeather.id}
        desc={jsonWeather.description}
        minTemp={jsonMain.temp_min}
        maxTemp={jsonMain.temp_max}
        humidity={jsonMain.humidity}
        pressure={jsonMain.pressure}
      />
      <UpcomingWeather />
    </body>
  )
}

export default App
