"use strict"
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Listening on port 3000")})

app.post("/api/encrypt", (request, response) => {
    const cipher = request.body;
    response.json(caesar(cipher.text, cipher.shift));
});

app.post("/api/decrypt", (request, response) => {
    const cipher = request.body;
    response.json(caesar(cipher.text, cipher.shift * -1));
})

function caesar(text, shift) {

    let result = "";

    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            const code = char.charCodeAt(0) - 65;
            const shifted = (code + shift + 26) % 26;
            result += String.fromCharCode(shifted + 65);
        }
        else if (char >= 'a' && char <= 'z') {
            const code = char.charCodeAt(0) - 97;
            const shifted = (code + shift + 26) % 26;
            result += String.fromCharCode(shifted + 97);
        }
        else {result += char;}
    }
    return result;
}

