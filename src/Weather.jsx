import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      date: "Saturday 10:00",
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      icon: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-input w-100"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-button btn w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>{weather.date}</li>
          <li className="text-capitalize">{weather.condition}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img src={weather.icon} alt={weather.condition} />
              <div className="ms-2">
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
              <li>Pressure: {weather.pressure} mbar</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0ef1f93t64c8bao485ffda3401a92d04";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div className="text-center text-white">Loading..</div>;
  }
}
