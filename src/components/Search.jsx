// Search.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function Search({ onSearch = () => {} }) {
  const [query, setQuery] = useState('');

  const handleClick = () => {
    if (query.trim() === '') return;
    onSearch(query);
    setQuery('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && query.trim()) {
      onSearch(query);
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
          onClick={handleClick}
        >
          Find Weather
        </button>
      </div>
    </header>
  );
}
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


