import React from "react";

export default function Stats() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "Overcast clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    currentTemp: 20,
    feelsLike: 10,
    humidity: 80,
    wind: 30,
  };
  return (
    <div className="Stats">
      <div className="row">
        <div className="col-4">Feels Like: {weatherData.feelsLike}°</div>
        <div className="col-4">Humidity: {weatherData.humidity}%</div>
        <div className="col-4">Wind: {weatherData.wind} km/h</div>
      </div>

      <div className="forecast row" />
    </div>
  );
}
