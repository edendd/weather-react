import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response) {
  setWeatherData({
    ready: true,
    temprature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: "Wednesday 07:00",
    description: response.data.weather[0].description,
    iconUrl: "https://assets.msn.com/bundles/v1/edgeChromium/latest/MostlySunnyDay.svg",
    wind: response.data.wind.speed,
    city: response.data.name
  })
}

if(weatherData.ready) { 
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
    <h1>{weatherData.city}</h1>
    <ul>
      <li>{weatherData.date}</li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row">
      <div className="col-6">
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
        />
        <span className="temprature">{Math.round(weatherData.temprature)}</span>
        <span className="unit">°C</span>
      </div>

      <div className="col-6">
        <ul>
          <li>Precipitation: 50%</li>
          <li>Humididty:{weatherData.humidity}</li>
          <li>Wind: {weatherData.wind}</li>
        </ul>
      </div>
    </div>
  </div>
); }  else {

  const apiKey = "3a94f3778290bfeee61278505dbbe51d"
  let city = "New York"
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);

  return 'loading...'
  }
}