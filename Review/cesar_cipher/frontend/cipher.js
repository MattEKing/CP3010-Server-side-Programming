"use strict"

const getElement = (selector) => document.querySelector(selector);

const encryptURL = "http://localhost:3000/api/encrypt"
const decryptURL = "http://localhost:3000/api/decrypt"

document.addEventListener("DOMContentLoaded", async() => {

    let info = getElement("#info");
    const shift = 5;

    getElement("#info").addEventListener("mouseleave", async() => {
        console.log("decrypt");
        let decrypt = await fetch(decryptURL, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"text": info.textContent, "shift": shift})
        })
        let response = await decrypt.json()
        info.textContent = response
    })
    
    getElement("#info").addEventListener("mouseenter", async() => {
        console.log("encrypt");
        let encrypt = await fetch(encryptURL, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"text": info.textContent, "shift": shift})
        })
        let response = await encrypt.json()
        info.textContent = response
    })
})