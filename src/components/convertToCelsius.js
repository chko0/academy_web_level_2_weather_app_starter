export default function convertToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
}

  