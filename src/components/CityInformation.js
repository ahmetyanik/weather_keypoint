import React from "react";

function CityInformation({ cityInfo }) {

    const date = new Date();

    console.log(date);

  return (
    <div>
      <div>City: {cityInfo.name}</div>
      <div>Date: {date.toDateString()}</div>
      <div>Temperature: {(cityInfo.main.temp - 272.15).toFixed(1)}</div>
      <div>Humidity: {cityInfo.main.humidity}</div>
      <div>Pressure: {cityInfo.main.pressure}</div>
      <div>Weather: {cityInfo.weather[0].main}</div>
      <div>Wind-Speed: {cityInfo.wind.speed}</div>
      <img style={{width:"200px"}} src={`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`} className="card-img-top weather-icon m-auto" alt="weather icon" />
    </div>
  );
}

export default CityInformation;
