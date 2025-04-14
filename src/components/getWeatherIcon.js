export default function getWeatherIcon(id) {
    var iconPath = "/images/weather-icons/"

    if (id < 300)
        iconPath += "storm.svg";
    else if (id >= 300 && id <= 499)
        iconPath += "drizzle.svg";
    else if (id >= 500 && id <= 599)
        iconPath += "rain.svg";
    else if (id >= 600 && id <= 699)
        iconPath += "snow.svg";
    else if (id >= 700 && id <= 799)
        iconPath += "fog.svg";
    else if (id == 800)
        iconPath += "clear.svg";
    else if (id == 801)
        iconPath += "partlycloudy.svg";
    else if (id > 801 && id <= 805)
        iconPath += "mostlycloudy.svg";
    
    return iconPath;
}