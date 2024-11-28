import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import sunnyAnimation from "../animations/sunny.json";
import rainyAnimation from "../animations/rainy.json";
import coldAnimation from "../animations/cold.json";

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather } = data;

  // Dynamic avatar selection based on temperature
  const getAvatarAnimation = () => {
    if (main.temp > 25) return sunnyAnimation; // Sunny for temperatures above 25°C
    if (main.temp < 10) return coldAnimation; // Cold for temperatures below 10°C
    return rainyAnimation; // Default to rainy animation
  };

  const avatarOptions = {
    loop: true,
    autoplay: true,
    src: getAvatarAnimation(),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p style={{ color: "grey", fontSize: "0.9em", margin: "5px 0" }}>
        {sys.country}
      </p>
      <img src={iconUrl} alt={weather[0].description} />
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels like: {main.feels_like}°C</p>
      <p>Humidity: {main.humidity}%</p>

      {/* Avatar Animation */}
      <div className="avatar-container">
        <Player
          autoplay
          loop
          src={getAvatarAnimation()}
          style={{ height: "200px", width: "200px" }}
        />
      </div>
    </div>
  );
};

export default WeatherCard;
