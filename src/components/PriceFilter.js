import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './PriceFilter.css';

function PriceFilter({ onFilterChange }) {
  const [price, setPrice] = useState(0);

  const handleFilterChange = (value) => {
    setPrice(value);
    onFilterChange(value || 0); // Default to 0 if empty
  };

  return (
    <div className="filter-container">
      <label htmlFor="price-filter">Filter by minimum price (USD):</label>
      <div className="price-label">${price}</div> {/* Display current price value */}
      <Slider
        id="price-filter"
        min={0}
        max={50000} // Set your desired maximum price
        defaultValue={0}
        onChange={handleFilterChange}
        railStyle={{ backgroundColor: '#007BFF' }}
        trackStyle={{ backgroundColor: '#0056b3' }}
        handleStyle={{
          borderColor: '#007BFF',
          backgroundColor: '#007BFF',
          boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
        }}
      />
    </div>
  );
}

export default PriceFilter;
