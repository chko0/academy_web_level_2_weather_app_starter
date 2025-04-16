
import getWeatherIcon from './getWeatherIcon';
import PropTypes from 'prop-types';


export default function Upcomings({ id, time, temperature, unit }) {
    const displayTemp = unit === 'F' ? `${temperature} °F` : `${temperature} °C`;
  
    return (
      <div className="flex flex-col items-center justify-center p-4 w-40 h-40 upcoming-card">
        <div>{time}</div>
        <div className="weather-icon flex justify-center">
          <img className="w-30 h-auto pt-5 pb-5" src={getWeatherIcon(id)} alt="weather icon" />
        </div>
        <div>{displayTemp}</div>
      </div>
    );
  }
  
  Upcomings.propTypes = {
    id: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    unit: PropTypes.oneOf(['C', 'F']),
  };
  
  Upcomings.defaultProps = {
    unit: 'C',
  };