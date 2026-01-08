"use strict";

const $ = selector => document.querySelector(selector);
let timer = null; 
let interval = 1

document.addEventListener("DOMContentLoaded", () => {
    $("#start").addEventListener('click', () => {startTimer()});
    $("#stop").addEventListener('click', () => {StopTimer()});
});

const startTimer = () => {
    if (timer == null) {
    timer = setInterval(addIterval, 1000)
    }
};

const StopTimer = () => {
    if (timer != null) {
    clearInterval(timer)
    timer = null
    interval = 1
    }
}

const addIterval = () => {
    interval += 1
    $("#count").textContent = interval;
    console.log(interval)

}