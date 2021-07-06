import React from "react";
//import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
          
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00 PM</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://assets.msn.com/bundles/v1/edgeChromium/latest/MostlySunnyDay.svg"
            alt="Mostly Cloudy"
          />
          <span className="temprature">6</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 50%</li>
            <li>Humididty: 72%</li>
            <li>Wind: 20km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
