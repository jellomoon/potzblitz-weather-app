import { useState } from "react";
import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          Project coded by Mona Beyersdorf, open sourced on{" "}
          <a
            href="https://github.com/jellomoon/potzblitz-weather-app"
            target="_blank"
          >
            GitHub
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
