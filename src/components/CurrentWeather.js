import React from 'react';
import './forcast.css';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div className='cont'>
      <h2 id='item'>{data.name}</h2>
      <p id='para'>Temperature: {data.main.temp}°C</p>
      <p id='para'>Condition: {data.weather[0].description}</p>
      <p id='para'>Humidity: {data.main.humidity}%</p>
      <p id='para'>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default CurrentWeather;
