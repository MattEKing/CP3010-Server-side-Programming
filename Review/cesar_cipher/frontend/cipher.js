"use strict"

const getElement = (selector) => document.querySelector(selector);

const url = "http://127.0.0.1:3000/api/encrypt"

document.addEventListener("DOMContentLoaded", async() => {

    const info = getElement("#info").value;
    const shift = 5;

    try {
        const option = {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({info, shift})
        }
        const response = await fetch(url, option);
        const json = await response.json()

        if (json.error) {
            console.log("Server error: " + json.error.message);
        }
        else {
            response = await fetch(url);
            info.value = json;
        }
    } catch (e) {
        console.log(e);
    }
})

