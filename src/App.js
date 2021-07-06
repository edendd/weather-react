import React from 'react';
import Weather from "./Weather"
import 'bootstrap/dist/css/bootstrap.css';
import  './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
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
