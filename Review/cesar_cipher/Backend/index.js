"use strict"

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("API listening on port 3000")
})

app.post("/encrypt", (request, response) => {
    const cipher = request.body.cipher;
    encrypt.push(cipher);
    response.json(cipher);
})

app.post("/decrypt", (request, response) => {
    const cipher = request.body.cipher;
    decrypt.push(cipher);
    response.json(cipher);
})