import React from 'react';
import Weather from "./Weather"

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
        <h1>Weather-App</h1>
        <Weather/>
      </header>
      <footer>
        Coded by Eden D
        <a href="https://github.com/edendd/weather-react">
          {" "}
          Open-sourced on Github
        </a>
      </footer>

    </div>
    </div>
  );
}

export default App;
