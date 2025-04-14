import img from '../assets/placeholder.png';
import getWeatherIcon from './getWeatherIcon';

export default function CurrentWeather({id, minTemp, maxTemp, humidity, pressure, desc}) {
    return <div class="">
        <div class="flex justify-center">
            <img class="max-w-70 max-h-auto" src={ getWeatherIcon(id)} />
        </div>
        <div class="text-3xl font-normal text-white">{desc}</div>
        <div class="text-2xl pt-9 pb-8">
            <span class="font-bold">Temperature</span>
            <span class="font-light pl-4">{minTemp}° to {maxTemp}° C</span></div>
        <div class="">
            <span class="font-bold">Humidity</span>
            <span class="font-light pl-4.5">{humidity}%</span>

            <span class="font-bold pl-5">Pressure</span>
            <span class="font-light pl-4.5">{pressure}</span>
        </div>
    </div>
}