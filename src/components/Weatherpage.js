import React, { useState, useEffect } from "react";
import CityInformation from "./CityInformation";
import Errormessage from "./Errormessage";

function Weatherpage({ logOut }) {
  const [cityInfo, setCityInfo] = useState({
    main: { temp: "", humidity: "", pressure: "" },
    name: "",
    weather: [{ description: "", icon: "", main: "" }],
    wind: { speed: "" },
  });

  const [condition, setCondition] = useState("");

  async function getWetterCondition() {
    const weatherStatus = cityInfo.weather[0].main.toLowerCase();

    const weatherDescription = cityInfo.weather[0].description;

    if (weatherStatus === "clear") {
      setCondition("clear")

    } else if (weatherDescription === "few clouds") {
      setCondition("fewClouds");

    } else if (weatherDescription === "scattered clouds") {
      setCondition("scatteredClouds")

    } else if (weatherDescription === "broken clouds") {
      setCondition("brokenClouds");
    }
    else if (weatherStatus === "clouds") {
      setCondition("brokenClouds")

    } else if (weatherDescription === "shower rain") {
      setCondition("showerRain");

    } else if (weatherDescription === "rain") {
      setCondition("rain");

    } else if (weatherStatus === "rain") {
      setCondition("rain");

    } else if (weatherStatus === "thunderstorm") {
      setCondition("thunderstorm");

    } else if (weatherStatus === "snow") {
      setCondition("snow");

    } else if (weatherStatus === "mist") {
      setCondition("mist");
    } else {
      setCondition("other");
    }

  }

  useEffect(() => {
    getWetterCondition();
  });


  const defaultInfoLondon = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        "London" +
        "&appid=a7ccf39f58624360e151dce17c818ef3"
    )
      .then((data) => data.json())
      .then((data) => setCityInfo(data));
  };

  const getInformation = (e) => {
    e.preventDefault();

    const cityValue = document.querySelector("#city").value;

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityValue +
        "&appid=a7ccf39f58624360e151dce17c818ef3"
    )
      .then((data) => data.json())
      .then((data) => setCityInfo(data))
      .catch((err) => setCityInfo(err));
  };

  useEffect(() => {
    defaultInfoLondon();
  }, []);

  console.log(cityInfo);

  window.onbeforeunload = function () {
    localStorage.removeItem("keypointToken");
    
  };

  return (
    <div className="container p-5">
      <form onSubmit={getInformation} className="d-flex">
        <input
          id="city"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          defaultValue={"London"}
          autoFocus
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {cityInfo.main ? (
        <CityInformation cityInfo={cityInfo} />
      ) : (
        <Errormessage />
      )}
     
      <button onClick={logOut} className="btn btn-outline-danger ml-3">
        Log Out
      </button>
    </div>
  );
}

export default Weatherpage;
