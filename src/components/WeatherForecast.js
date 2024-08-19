import React from 'react';
import Card from './Card';
import './forcast.css';
const WeatherForecast = ({ data }) => {
  if (!data) return null;

  const dailyData = data.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  );

  return (
    <div>
      <h2 id='heading'>5-Days Forecast</h2>
      <div className="card-container">
        {dailyData.map((item, index) => (
          <Card
            key={index}
            date={new Date(item.dt_txt).toDateString()}
            temp={item.main.temp}
            condition={item.weather[0].main}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
