import Upcomings from "./Upcomings";
import convertToCelsius from "./convertToCelsius";

export default function Forecast({weatherData}) {
    var weatherInfo = weatherData.list;
    
    const limitedWeatherInfo = weatherInfo.slice(0, 7);

    return (
    <div className="flex justify-center pt-24 space-x-10">
      {limitedWeatherInfo.map((forecast, index) => (
        <Upcomings
          key={index} // Add a unique key for each mapped element
          time={forecast.dt_txt ? forecast.dt_txt.split(' ')[1].slice(0, 5) : (index * 3 + 6) + ':00'}
          temperature={convertToCelsius(forecast.main.temp)}
          id={forecast.weather[0].id}
        />
      ))}
    </div>
  );
}