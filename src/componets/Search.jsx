import { useState } from 'react';
import PropTypes from 'prop-types';
const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== '') {
      onSearch(searchInput.trim());
    }
  };

  // Inline styles for the search form
  const formStyles = {
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputStyles = {
    padding: '8px',
    fontSize: '16px',
    border: '2px solid #ddd',
    borderRadius: '4px',
    width: '200px',
  };

  const buttonStyles = {
    padding: '8px 12px',
    marginLeft: '8px',
    backgroundColor: '#4a90e2',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={inputStyles}
      />
      <button type="submit" style={buttonStyles}>Search</button>
    </form>
  );
};
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;


