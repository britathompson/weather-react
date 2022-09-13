import React from "react";

export default function Current() {
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
    <div className="Current">
      <h1>
        current temperature in
        <strong className="city" /> {weatherData.city}
      </h1>

      <div className="row">
        <div className="temp-block col-6">
          <span className="current-temp">{weatherData.currentTemp}</span>
          <span className="units">
            <a href="/" className="celsius-link active">
              °C
            </a>{" "}
            |{" "}
            <a href="/" className="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
        <div className="info-block col-6">
          <p className="last-updated">
            Last updated: <span className="day-time">{weatherData.date}</span>
          </p>
          <p className="current-text">{weatherData.description}</p>
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}
