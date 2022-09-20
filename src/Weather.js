import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast"

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let units = "metric";
    const apiKey = "55bf9ac355060024d43ce8b4b16fd6fa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <header>What's my weather?</header>
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar border-0 shadow-sm"
            type="text"
            placeholder="Enter City"
            autoComplete="off"
            autoFocus
            required
            onChange={handleCityChange}
          />
          <input
            className="button shadow border-0"
            type="submit"
            value="SEARCH"
          />
          <input type="button" value="📍" className="current-button shadow" />
        </form>
        <CurrentWeather data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
