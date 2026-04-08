import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import { ThreeDots } from "react-loader-spinner";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    function handleResponse(response) {
      setForecast(response.data.daily);
    }

    let apiKey = "0ef1f93t64c8bao485ffda3401a92d04";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    setForecast(null);
    axios.get(apiUrl).then(handleResponse);
  }, [props.city]);

  if (!forecast) {
    return (
      <ThreeDots
        height="40"
        width="40"
        color="#fff"
        ariaLabel="audio-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px",
        }}
        wrapperClass="wrapper-class"
        visible={true}
      />
    );
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
