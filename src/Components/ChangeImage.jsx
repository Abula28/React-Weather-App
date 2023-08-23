import React from "react";
import cloudy_sun from "../img/cloudy-sun.png";
import clear_sun from "../img/sun.png";
import rain_cloud from "../img/rain-cloud.png";

export const ChangeImage = ({ data }) => {
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
  return <div className="img">{imageChange()}</div>;
};
