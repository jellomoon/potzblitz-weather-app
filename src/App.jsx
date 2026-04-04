import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <button className="btn btn-primary">Hello</button>
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
