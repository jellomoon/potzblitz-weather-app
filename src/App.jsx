import { useState } from "react";
import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Coded with 🩵 by Mona Beyersdorf, open sourced on{" "}
          <a
            href="https://github.com/jellomoon/potzblitz-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
