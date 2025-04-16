export function convertToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius * 100) / 100;
}

export function convertToFahrenheit(kelvin) {
  const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  return Math.round(fahrenheit * 100) / 100;
}
  