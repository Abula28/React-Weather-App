import React, { useEffect, useState } from "react";
import "./Weather.scss";
import cloudy_sun from "../img/cloudy-sun.png";
import clear_sun from "../img/sun.png";
import rain_cloud from "../img/rain-cloud.png";
import noun_wind from "../img/noun-wind.png";
import noun_rain from "../img/noun-rain.png";
import axios from "axios";

// `http://api.openweathermap.org/geo/1.0/direct?q=germany&limit=5&appid=${apiKey}`

export const Weather = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const date = new Date();
  const apiKey = "e05aa2ca391fdd61d8ca0d0a85f94cf5";

  const weatherInfo = () => {
    switch (data.weather && data.weather[0].main) {
      case "Clear":
        return "Sunny";
      case "Clouds":
        return "Cloudy";
      case "Rain":
        return "Rainy";
      default:
        return "Sunny";
    }
  };
  const imageChange = () => {
    switch (data.weather && data.weather[0].main) {
      case "Clear":
        return <img src={clear_sun} alt="clear sun" />;
      case "Clouds":
        return <img src={cloudy_sun} alt="cloudy sun" />;
      case "Rain":
        return <img src={rain_cloud} alt="cloudy sun" />;
      default:
        return <img src={clear_sun} alt="clear sun" />;
    }
  };

  const hundlesubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${apiKey}`
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div
      style={{
        background:
          data.weather && data.weather[0].main === "Clear"
            ? "linear-gradient(135deg, #29B2DD 0%, #3AD 47.38%, #2DC8EA 100%)"
            : null,
      }}
      className="weather-cont"
    >
      <form onSubmit={(e) => hundlesubmit(e)}>
        <input
          type="text"
          name="location"
          className="locInp"
          placeholder="City Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>

      {!data.name ? (
        <div
          style={{ display: value.trim() !== "" ? "block" : "none" }}
          className="loading"
        ></div>
      ) : (
        <>
          <h1 className="city-name">{data.name}</h1>
          <div className="img">{imageChange()}</div>
          <div className="celsius">
            <h2>{parseInt(data.main.temp)}º</h2>
          </div>
          <div className="prec">
            <p>
              <span>Precipitations</span> Max.: {parseInt(data.main.temp_max)}º
              Min.: {parseInt(data.main.temp_min)}º
            </p>

            <p className="weather-info">
              <span>Wheather information: </span>
              {weatherInfo()}
            </p>
          </div>

          <div
            style={{
              background:
                data.weather && data.weather[0].main === "Clear"
                  ? " #29B2DD"
                  : "none",
            }}
            className="spec-infos"
          >
            <p className="humidity">
              <img src={noun_rain} alt="noun-rain" />
              {data.main.humidity}%
            </p>
            <p className="wind-speed">
              <img src={noun_wind} alt="noun-wind" />
              {parseInt(data.wind.speed)} km/h
            </p>
          </div>

          <div
            style={{
              background:
                data.weather && data.weather[0].main === "Clear"
                  ? " #29B2DD"
                  : "none",
            }}
            className="today-info"
          >
            <div className="data-time">
              <p>Today</p>
              <p>{date.getDate()} August</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
