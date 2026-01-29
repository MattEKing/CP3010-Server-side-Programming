"use-strict"

import express from "express";
import cors from "cors";

const json = {
    "Toronto" : {
        "description" : 'cloudy',
        "temperature" : 7,
        "windSpeed": 15
    },
    "Vancouver" : {
        "description" : 'sunny',
        "temperature" : 25,
        "windSpeed": 12
    },
    "Montreal" : {
        "description" : 'rainy',
        "temperature" : 10,
        "windSpeed": 10
    },
    "Halifax" : {
        "description" : 'snowy',
        "temperature" : -2,
        "windSpeed": 30
    }
}

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.post("/api/weather", (request, response) => {
    const city = request.body.city;
    const weather = json[city]; 
    console.log(weather)
    response.json(weather)
}   
)
