import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';
import './Card.css';

const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'Clear':
      return <WiDaySunny />;
    case 'Clouds':
      return <WiCloud />;
    case 'Rain':
      return <WiRain />;
    case 'Thunderstorm':
      return <WiThunderstorm />;
    case 'Snow':
      return <WiSnow />;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return <WiFog />;
    default:
      return <WiDaySunny />;
  }
};

const getCardStyle = (condition) => {
  switch (condition) {
    case 'Clear':
      return 'card clear';
    case 'Clouds':
      return 'card cloudy';
    case 'Rain':
      return 'card rain';
    case 'Thunderstorm':
      return 'card thunderstorm';
    case 'Snow':
      return 'card snow';
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return 'card fog';
    default:
      return 'card clear';
  }
};

const Card = ({ date, temp, condition }) => {
  return (
    <div className={getCardStyle(condition)}>
      <p>Date: {date}</p>
      <p>Temperature: {temp}°C</p>
      <p>Condition: {condition} {getWeatherIcon(condition)}</p>
    </div>
  );
};

export default Card;
