// Search.jsx
import { useState, useEffect } from 'react';
import { fetchCurrentWeather } from '../components/fetchWeather';

//import PropTypes from 'prop-types';

export default function Search({setWeatherData, setErrorMessage}) {
  const [query, setQuery] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  useEffect(() => {
    if (query != "")
      fetchCurrentWeather(query, setWeatherData, setErrorMessage);
      setSearchButtonClicked(false);
  }, [searchButtonClicked]);

  // const handleClick = () => {
  //   if (query.trim() === '') return;
  //   onSearch(query);
  // };

  const handleKeyDown = (event) => {
     if (event.key === 'Enter') {
      setSearchButtonClicked(true);
     }
   };

  return (
    <header className="flex flex-row bg-[#759eda] p-4">
      <div className="flex items-center w-40">
        <input
          className="focus:outline-none ml-5 p-2 text-[#ccdbf1] cursor-text"
          type="text"
          placeholder="Type a city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="text-center flex items-center justify-center w-md">
        <button
          className="bg-[#5879c7] text-[#0a0d53] p-2 focus:outline-none cursor-pointer"
          type="button"
          onClick={() => setSearchButtonClicked(true)}
        >
          FIND WEATHER
        </button>
      </div>
    </header>
  );
}
// Search.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };


