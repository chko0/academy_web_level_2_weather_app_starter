
import getWeatherIcon from './getWeatherIcon';
import PropTypes from 'prop-types';

export default function CurrentWeather({id, minTemp, maxTemp, humidity, pressure, desc}) {
    return <div>
        <div className="flex justify-center">
            <img className="max-w-70 max-h-auto" src={ getWeatherIcon(id)} alt={desc} />
        </div>
        <div className="flex justify-center text-3xl font-normal text-white">{desc}</div>
        <div className=" flex justify-center text-2xl pt-9 pb-8">
            <span className=" font-bold">Temperature</span>
            <span className="font-light pl-4">{minTemp}° to {maxTemp}° C</span></div>
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
  };
  
  CurrentWeather.defaultProps = {
    id: 800,
    minTemp: 20,
    maxTemp: 25,
    humidity: 50,
    pressure: 1013,
    desc: 'Clear sky',
  };
