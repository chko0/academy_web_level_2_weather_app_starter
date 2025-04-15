
import getWeatherIcon from './getWeatherIcon';
import PropTypes from 'prop-types';


export default function Upcomings({id, time, temperature}) {
    return <div className="flex flex-col items-center justify-center p-4 w-40 h-40">
        <div>{time}</div>
        <div><img className=" w-30 h-auto pt-5 pb-5" src={getWeatherIcon(id)} alt="weather icon"/></div>
        <div>{temperature} °C</div>
    </div>
}

Upcomings.propTypes = {
    id: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
};
