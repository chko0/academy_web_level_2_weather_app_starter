
import CurrentWeather from './components/CurrentWeather'
import UpcomingWeather from './components/UpcomingWeather'
import convertToCelsius from './components/convertToCelsius'
import FakeWeather from "./data/FakeWeather.json";


function App() {
  var jsonMain = FakeWeather.list[0].main;
  var jsonWeather = FakeWeather.list[0].weather[0];
  console.log(jsonWeather

  );

  return (
    <body className="bg-blue-300">
      <CurrentWeather
        id={jsonWeather.id}
        desc={jsonWeather.description}
        minTemp={convertToCelsius(jsonMain.temp_min)}
        maxTemp={convertToCelsius(jsonMain.temp_max)}
        humidity={jsonMain.humidity}
        pressure={jsonMain.pressure}
      />
      <UpcomingWeather />
    </body>
  )
}
export default App;
