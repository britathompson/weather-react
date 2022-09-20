import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>
        current temperature in
        <strong className="city" /> {props.data.city}
      </h1>

      <div className="row">
        <div className="temp-block col-6">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="info-block col-6">
          <p className="last-updated">
            Last updated:{" "}
            <span className="day-time">
              <FormattedDate date={props.data.date} />
            </span>
          </p>
          <p className="current-text text-capitalize">
            {props.data.description}
          </p>
          <div className="icon float-left">
            <WeatherIcon code={props.data.icon} size={60} />
          </div>
          
        </div>
      </div>
      <div className="Stats">
        <div className="row">
          <div className="col-4">
            Feels Like: {Math.round(props.data.feelsLike)}°
          </div>
          <div className="col-4">Humidity: {props.data.humidity}%</div>
          <div className="col-4">Wind: {Math.round(props.data.wind)} km/h</div>
        </div>
      </div>
    </div>
  );
}
