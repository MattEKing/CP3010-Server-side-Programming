"use-strict";

import express from "express";
import cors from "cors";

const json = {
  Toronto: {
    description: "cloudy",
    temperature: " 7°c",
    windSpeed: "15 km/hr",
  },
  Vancouver: {
    description: "sunny",
    temperature: "25°c",
    windSpeed: "12 km/hr",
  },
  Montreal: {
    description: "rainy",
    temperature: "10°c",
    windSpeed: "10 km/hr",
  },
  Halifax: {
    description: "snowy",
    temperature: "-2°c",
    windSpeed: "30 km/hr",
  },
};

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.post("/api/weather", (request, response) => {
  const city = request.body.city;
  const weather = json[city];
  console.log(weather);
  response.json(weather);
});
