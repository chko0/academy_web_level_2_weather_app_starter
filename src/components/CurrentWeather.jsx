
import getWeatherIcon from './getWeatherIcon';

export default function CurrentWeather({id, minTemp, maxTemp, humidity, pressure, desc}) {
    return <div className="">
        <div className="flex justify-center">
            <img className="max-w-70 max-h-auto" src={ getWeatherIcon(id)} />
        </div>
        <div className="text-3xl font-normal text-white">{desc}</div>
        <div className="text-2xl pt-9 pb-8">
            <span className="font-bold">Temperature</span>
            <span className="font-light pl-4">{minTemp}° to {maxTemp}° C</span></div>
        <div className="">
            <span className="font-bold">Humidity</span>
            <span className="font-light pl-4.5">{humidity}%</span>

            <span className="font-bold pl-5">Pressure</span>
            <span className="font-light pl-4.5">{pressure}</span>
        </div>
    </div>
}