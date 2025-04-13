import { useState } from 'react';
import Search from "./components/Search.jsx";
import CurrentWeather from './components/CurrentWeather';

function App() {
  // Example static weather data
  const [weatherData, setWeatherData] = useState({
    city: 'London',
    temperature: 20, // in °C
    humidity: 65,    // in %
    weatherId: 800,  // e.g., clear weather
  });

  // This function will eventually trigger an API call based on user input.
  // For now, it just updates the city name.
  const handleSearch = (city) => {
    setWeatherData({
      ...weatherData,
      city: city,
      // Later, update temperature, humidity, weatherId based on fetched data
    });
  };

  // Basic inline styles for layout
  const appStyles = {
    fontFamily: 'Raleway, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  };

  const headerStyles = {
    backgroundColor: '#4a90e2',
    color: '#fff',
    padding: '20px',
  };

  return (
    <div style={appStyles}>
      <header style={headerStyles}>
        <h1>Weather App</h1>
      </header>
      <main>
        <Search onSearch={handleSearch} />
        <CurrentWeather data={weatherData} />
      </main>
    </div>
  );
}

export default App;
