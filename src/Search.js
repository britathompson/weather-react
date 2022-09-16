import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feelsLiks: response.data.main.feels_like,
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      date: "Tuesday 10:00",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Search">
        <header>What's my weather?</header>
        <form>
          <input
            className="search-bar border-0 shadow-sm"
            type="text"
            placeholder="Enter City"
            autoComplete="off"
            autoFocus
            required
          />
          <input
            className="button shadow border-0"
            type="submit"
            value="SEARCH"
          />
          <input type="button" value="📍" className="current-button shadow" />
        </form>

        <div className="Current">
          <h1>
            current temperature in
            <strong className="city" /> {weatherData.city}
          </h1>

          <div className="row">
            <div className="temp-block col-6">
              <span className="current-temp">
                {Math.round(weatherData.temperature)}
              </span>
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
                Last updated:{" "}
                <span className="day-time">{weatherData.date}</span>
              </p>
              <p className="current-text text-capitalize">{weatherData.description}</p>
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    let city = "London";
    const apiKey = "55bf9ac355060024d43ce8b4b16fd6fa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
