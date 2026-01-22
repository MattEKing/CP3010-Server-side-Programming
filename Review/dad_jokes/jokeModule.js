"use-strict"

export const jokes = {
    joke1: {
        joke: "homer1",
        answer: "simpson"
    },
    joke2: {
        joke: "homer2",
        answer: "simpson"
    },
    joke3: {
        joke: "homer3",
        answer: "simpson"
    }

}

export class JokeMachine{
    constructor(json) {
        this.json = json;
    }

    getNextJoke() {
        const keys = Object.keys(this.json)
        return this.json[keys[Math.floor(Math.random() * keys.length)]]
    }
}