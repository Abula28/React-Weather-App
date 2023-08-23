import React, { useEffect, useState } from "react";
import "./Weather.scss";
import noun_wind from "../img/noun-wind.png";
import noun_rain from "../img/noun-rain.png";
import Submit from "./Submit";
import { WeatherInfo } from "./WeatherInfo";
import { ChangeImage } from "./ChangeImage";

export const Weather = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const date = new Date();

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
      <Submit value={value} setValue={setValue} setData={setData} />

      {!data.name ? (
        <div
          style={{ display: value.trim() !== "" ? "block" : "none" }}
          className="loading"
        ></div>
      ) : (
        <>
          <h1 className="city-name">{data.name}</h1>
          <ChangeImage data={data} />
          <div className="celsius">
            <h2>{parseInt(data.main.temp)}º</h2>
          </div>
          <div className="prec">
            <p>
              <span>Precipitations</span> Max.: {parseInt(data.main.temp_max)}º
              Min.: {parseInt(data.main.temp_min)}º
            </p>

            <WeatherInfo data={data} />
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
