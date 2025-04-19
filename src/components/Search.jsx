// Search.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCurrentWeather, /*fetchForecastWeather*/ } from './fetchCurrentWeather';


export default function Search({ setLoading, setError, setWeatherData }) {
  const [query, setQuery] = useState('');
  const [searchButtonPressed, setSearchButtonPressed] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchButtonPressed) return;
      if (!query.trim()) {
        setLoading(false);
        setError('Please enter a city name.');
        setWeatherData(null);
        return;
      }

      setError('');
      setLoading(true);

      try {
        // Fetch current weather data
        const currentData = await fetchCurrentWeather(query);
        setWeatherData(currentData);
      } catch (err) {
        console.error("Error in weather fetching:", err);
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
        setSearchButtonPressed(false);
      }
    };

    handleSearch();
  }, [searchButtonPressed, setError, setLoading, setWeatherData, query]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && query.trim()) {
      setSearchButtonPressed(true);
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
      <button
        className="bg-[#5879c7] text-[#0a0d53] p-2 focus:outline-none cursor-pointer  search-button  ml-23"
        type="button"
        onClick={() => setSearchButtonPressed(true)}
      >
        FIND WEATHER
      </button>
    </header>
  );
}
Search.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setWeatherData: PropTypes.func.isRequired,
};


