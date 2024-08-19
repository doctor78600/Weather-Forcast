import axios from 'axios';

const API_KEY = '4add09540acc238efe0993fd3c2b2494';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  try {
    const currentWeather = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });

    const forecast = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });

    return {
      current: currentWeather.data,
      forecast: forecast.data,
    };
  } catch (error) {
    throw new Error('City not found');
  }
};
