export default function getWeatherIcon(id) {
    const basePath = '/images/weather-icons/';
    if (id < 300) return basePath + 'storm.svg';
    if (id >= 300 && id <= 499) return basePath + 'drizzle.svg';
    if (id >= 500 && id <= 599) return basePath + 'rain.svg';
    if (id >= 600 && id <= 699) return basePath + 'snow.svg';
    if (id >= 700 && id <= 799) return basePath + 'fog.svg';
    if (id === 800) return basePath + 'clear.svg';
    if (id === 801) return basePath + 'partlycloudy.svg';
    if (id > 801 && id <= 805) return basePath + 'mostlycloudy.svg';
    return basePath + 'default.svg'; // Fallback icon
  }
