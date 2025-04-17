// Search.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCurrentWeather, /*fetchForecastWeather*/ } from './fetchCurrentWeather';


export default function Search({ setLoading, setError, setWeatherData }) {
  const [query, setQuery] = useState('');
  const [searchButtonPressed, setSearchButtonPressed] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      if (!query) return;

      // setCity(cityName);
      setError('');
      setLoading(true);

      try {
        // Fetch current weather data
        const currentData = await fetchCurrentWeather(query);
        setWeatherData(currentData);

        // // Fetch forecast data
        // const forecastData = await fetchForecastWeather(cityName);
        // setForecastData(forecastData.list || []);
        // console.log(forecastData);
      } catch (err) {
        console.error("Error in weather fetching:", err);
        setError(err.message);
        setWeatherData(null);
        // setForecastData([]);
      } finally {
        setLoading(false);
        // setSearchButtonPressed(false);
      }
    };

    handleSearch();
  }, [searchButtonPressed]);



  // const handleClick = () => {
  //   if (query.trim() === '') return;
  //   handleSearch(query);
  //   // setQuery('');
  // };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && query.trim()) {
      setSearchButtonPressed(!searchButtonPressed);
    }
  };

  return (
    <header className="flex flex-row bg-[#759eda] p-4 gap-2 sm:gap-0">
      <div className="flex items-center w-40 ">
        <input
          className="focus:outline-none ml-5 p-2 text-[#ccdbf1] cursor-text  search-input"
          type="text"
          placeholder="Type a city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="text-center flex items-center justify-center w-md">
        <button
          className="bg-[#5879c7] text-[#0a0d53] p-2 focus:outline-none cursor-pointer  search-button"
          type="button"
          onClick={() => setSearchButtonPressed(!searchButtonPressed)}
        >
          FIND WEATHER
        </button>
      </div>
    </header>
  );
}
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


