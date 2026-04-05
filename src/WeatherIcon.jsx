import React from "react";
import "./WeatherIcon.css";

import ClearDay from "./icons/clear-day.svg?react";
import ClearNight from "./icons/clear-night.svg?react";
import PartlyCloudyDay from "./icons/partly-cloudy-day.svg?react";
import PartlyCloudyNight from "./icons/partly-cloudy-night.svg?react";
import OvercastDay from "./icons/overcast-day.svg?react";
import OvercastNight from "./icons/overcast-night.svg?react";
import Overcast from "./icons/overcast.svg?react";
import PartlyCloudyDayDrizzle from "./icons/partly-cloudy-day-drizzle.svg?react";
import PartlyCloudyNightDrizzle from "./icons/partly-cloudy-night-drizzle.svg?react";
import PartlyCloudyDayRain from "./icons/partly-cloudy-day-rain.svg?react";
import PartlyCloudyNightRain from "./icons/partly-cloudy-night-rain.svg?react";
import ThunderstormsDayRain from "./icons/thunderstorms-day-rain.svg?react";
import ThunderstormsNightRain from "./icons/thunderstorms-night-rain.svg?react";
import Snow from "./icons/snow.svg?react";
import PartlyCloudyDayFog from "./icons/partly-cloudy-day-fog.svg?react";
import PartlyCloudyNightFog from "./icons/partly-cloudy-night-fog.svg?react";

const iconMap = {
  "clear-sky-day": ClearDay,
  "clear-sky-night": ClearNight,
  "few-clouds-day": PartlyCloudyDay,
  "few-clouds-night": PartlyCloudyNight,
  "scattered-clouds-day": OvercastDay,
  "scattered-clouds-night": OvercastNight,
  "broken-clouds-day": Overcast,
  "broken-clouds-night": Overcast,
  "shower-rain-day": PartlyCloudyDayDrizzle,
  "shower-rain-night": PartlyCloudyNightDrizzle,
  "rain-day": PartlyCloudyDayRain,
  "rain-night": PartlyCloudyNightRain,
  "thunderstorm-day": ThunderstormsDayRain,
  "thunderstorm-night": ThunderstormsNightRain,
  "snow-day": Snow,
  "snow-night": Snow,
  "mist-day": PartlyCloudyDayFog,
  "mist-night": PartlyCloudyNightFog,
};

export default function WeatherIcon(props) {
  const IconComponent = iconMap[props.code];

  return (
    <div className="WeatherIcon">
      <IconComponent />
    </div>
  );
}
