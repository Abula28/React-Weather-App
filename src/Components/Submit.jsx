import React from "react";
import axios from "axios";

const apiKey = "e05aa2ca391fdd61d8ca0d0a85f94cf5";
const Submit = ({ value, setValue, setData }) => {
  const handleSubmit = (e) => {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        className="locInp"
        placeholder="City Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Submit;
