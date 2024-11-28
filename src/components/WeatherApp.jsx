import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "f8f2b6cb4005ddb0e42e83dee54e3259"
  const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("Unable to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        weatherData && <WeatherCard data={weatherData} />
      )}
    </div>
  );
};

export default WeatherApp;
