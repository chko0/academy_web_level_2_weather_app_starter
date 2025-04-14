
import getWeatherIcon from './getWeatherIcon';


export default function Upcomings({id, time, temperature}) {
    return <div>
        <div>{time}</div>
        <div><img className="w-30 h-auto pt-5 pb-5" src={getWeatherIcon(id)}/></div>
        <div>{temperature} °C</div>
    </div>
}