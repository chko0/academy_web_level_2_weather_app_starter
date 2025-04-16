// UpcomingWeather.jsx
import PropTypes from "prop-types";
import Upcomings from "./Upcomings";
import { convertToCelsius, convertToFahrenheit } from './convertToCelsius';

export default function UpcomingWeather({ weatherData, unit }) {
  // Filter data to get one forecast per day
  const getFilteredForecastData = () => {
    if (!Array.isArray(weatherData) || weatherData.length === 0) {
      return [];
    }

    const dailyForecasts = [];
    const dateSet = new Set();

    weatherData.forEach(item => {
      if (!item.dt_txt) return;
      
      // Get the date part only (without time)
      const date = item.dt_txt.split(' ')[0];
      
      // If we don't have this date yet and it's a noon forecast (close to 12:00)
      if (!dateSet.has(date) && item.dt_txt.includes('12:00')) {
        dateSet.add(date);
        dailyForecasts.push(item);
      }
    });

    // Return the first 7 days or less
    return dailyForecasts.slice(0, 7);
  };

  const filteredData = getFilteredForecastData();

  const convertTemp = (kelvin) => {
    return unit === 'C' ? convertToCelsius(kelvin) : convertToFahrenheit(kelvin);
  };

  // Format the date to be more user-friendly
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  };

  if (filteredData.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center pt-12 space-x-2 md:space-x-10 flex-wrap upcoming-wrapper">
      {filteredData.map((data, i) => (
        <Upcomings
          key={i}
          time={formatDate(data.dt_txt)}
          temperature={convertTemp(data.main.temp)}
          id={data.weather[0].id}
          unit={unit}
        />
      ))}
    </div>
  );
}

UpcomingWeather.propTypes = {
  weatherData: PropTypes.array,
  unit: PropTypes.string.isRequired,
};

UpcomingWeather.defaultProps = {
  weatherData: [],
  unit: 'C',
};