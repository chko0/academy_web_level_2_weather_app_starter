// App.js
import CurrentWeather from './components/CurrentWeather'
import UpcomingWeather from './components/UpcomingWeather'
import convertToCelsius from './components/convertToCelsius'
import Search from "./componets/Search";  
import FakeWeather from "./data/FakeWeather.json";

function App() {
  const jsonMain = FakeWeather.list[0].main;
  const jsonWeather = FakeWeather.list[0].weather[0];

  return (
    <div className=" bg-blue-300 min-h-screen">
      <header className="flex flex-row bg-[#759eda] p-4">
      <Search />
      </header>
      <CurrentWeather
        id={jsonWeather.id}
        desc={jsonWeather.description}
        minTemp={convertToCelsius(jsonMain.temp_min)}
        maxTemp={convertToCelsius(jsonMain.temp_max)}
        humidity={jsonMain.humidity}
        pressure={jsonMain.pressure}
      />
      <UpcomingWeather />
    </div>
  );
}


export default App;
