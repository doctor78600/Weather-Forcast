import React, { useState } from 'react';
import './App.css';
import LocationInput from './components/LocationInput';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import { fetchWeatherData } from './api/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError('City Is Not Found Please Search Again',err);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <LocationInput onSearch={handleSearch} />
      {error && <p id='para1'>{error}</p>}
      {weatherData && <CurrentWeather data={weatherData.current} />}
      {weatherData && <WeatherForecast data={weatherData.forecast} />}
    </div>
  );
}

export default App;
