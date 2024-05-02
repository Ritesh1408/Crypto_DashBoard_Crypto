import React from 'react';
import './SearchBar.css'; // Import the style sheet

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      className="search-input"
      onChange={e => onSearch(e.target.value)}
      placeholder="Search by Name or ID..."
    />
  );
}

export default SearchBar;
