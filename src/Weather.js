import React, { useState } from "react";
import axios from "axios";

export default function Search(prop) {
  let [city, setCity] = useState("");
  let [Weather, setWeather] = useState("");

  function showTemperature(response) {
    setWeather(
      <ul>
        <li className="lichild">
          Temperature:{Math.round(response.data.main.temp)}℃
        </li>

        <li className="lichild">
          Description: {response.data.weather[0].description}
          <br />
        </li>
        <li className="lichild">Humidity: {response.data.humidity}%</li>
        <li className="lichild">Wind: {response.data.wind.speed}km/h</li>
        <li className="lichild">
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=977e7cf2f6ebb86ab22f897eca8c19de&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSearch} className = "search">
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />{" "}
      <input type="submit" value="Search" />
      <div>{Weather}</div>
    </form>
  );
}
