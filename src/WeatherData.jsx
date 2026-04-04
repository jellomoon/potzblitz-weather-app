import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.condition}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img src={props.data.icon} alt={props.data.condition} />
            <div className="ms-2">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="ms-4">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Pressure: {props.data.pressure} mbar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
