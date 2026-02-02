"use-strict";

import express from "express";
import cors from "cors";

const json = {
  Toronto: {
    lat: 43.65,
    lon: -79.38,
  },
  Vancouver: {
    lat: 49.28,
    lon: -123.12,
  },
  Montreal: {
    lat: 45.5,
    lon: -73.56,
  },
  Halifax: {
    lat: 44.65,
    lon: -63.59,
  },
};

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
app.post("/api/weather", async (request, response) => {
  const city = request.body.city;
  const lat = json[city].lat;
  const lon = json[city].lon;
  const units = "metric";
  const apiKey = "07c3eea7707b187a1928d807dbbf052a";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  const res = await fetch(url, { method: "GET" });
  const weatherData = await res.json();
  console.log(weatherData.name);
  const temp = weatherData.main.temp + "°c";
  const windSpeed = weatherData.wind.speed + "Km/hr";
  const description = weatherData.weather[0].description;
  response.json({ temp: temp, windSpeed: windSpeed, description: description });
});
