import React from "react";
import axios from "axios"

export default function Weather()  {
  function handleResponse(response) {
     alert(`The weather in new york is ${response.data.main.temp}C`)
  }

   let apiKey = '977e7cf2f6ebb86ab22f897eca8c19de&units=metric';
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
   q=New York&${apiKey}&units=metric`;     
   axios.get(apiUrl).then(handleResponse);
   
   return(<h1>Hello from weather</h1> )
  
};