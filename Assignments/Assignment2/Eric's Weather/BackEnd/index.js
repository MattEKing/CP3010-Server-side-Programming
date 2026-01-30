"use-strict"

import express from "express";
import cors from "cors";

const json = {
    "Toronto" : {
        "description" : 'cloudy',
        "temperature" : ' 7°c',
        "windSpeed": '15 km/hr'
    },
    "Vancouver" : {
        "description" : 'sunny',
        "temperature" : '25°c',
        "windSpeed": '12 km/hr'
    },
    "Montreal" : {
        "description" : 'rainy',
        "temperature" : '10°c',
        "windSpeed": '10 km/hr'
    },
    "Halifax" : {
        "description" : 'snowy',
        "temperature" : '-2°c',
        "windSpeed": '30 km/hr'
    }
}

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.post("https://api.openweathermap.org/data/3.0/onecall?lat={43.6548}&lon={79.3884}&exclude=current&appid={8d4bf9966334542ae21243ea9ad16876}", (request, response) => {
    const city = request.body.city;
    const weather = json[city]; 
    console.log(weather)
    response.json(weather)
}   
)
