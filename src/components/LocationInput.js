import React, { useState } from 'react';
import './location.css';
const LocationInput = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        id='input'
      />
      <button id='btn' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationInput;
