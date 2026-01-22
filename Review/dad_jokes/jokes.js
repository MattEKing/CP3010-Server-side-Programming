"use strict";
import { jokes, JokeMachine } from "./jokeModule.js";
const getElement = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const jokeMachine = new JokeMachine(jokes);

    getElement("#Next").addEventListener("click", () => {
        let joke = jokeMachine.getNextJoke()
        getElement("#question").textContent = joke.joke;
        getElement("#answer").textContent = joke.answer;
    })
});