import React from "react";

export const WeatherInfo = ({ data }) => {
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
  return (
    <p className="weather-info">
      <span>Wheather information: </span>
      {weatherInfo()}
    </p>
  );
};
