
import getWeatherIcon from './getWeatherIcon';
import PropTypes from 'prop-types';

export default function CurrentWeather({id, minTemp, maxTemp, humidity, pressure, desc, unit}) {
    return <div>
        <div className="flex justify-center">
            <img className="max-w-70 max-h-auto" src={ getWeatherIcon(id)} alt={desc} />
        </div>
        <div className="flex justify-center text-3xl font-normal text-white current-weather-text">{desc}</div>
        <div className=" flex justify-center text-2xl pt-9 pb-8 current-weather-text">
            <span className=" font-bold">Temperature</span>
            <span className="font-light pl-4">{minTemp}° to {maxTemp}°  {unit === 'celsius' ? 'C' : 'F'}</span></div>
        <div className="flex justify-center ">
            <span className="font-bold">Humidity</span>
            <span className="font-light pl-4">{humidity}%</span>

            <span className="font-bold pl-5">Pressure</span>
            <span className="font-light pl-4">{pressure}</span>
        </div>
    </div>
}

CurrentWeather.propTypes = {
    id: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
};
  
