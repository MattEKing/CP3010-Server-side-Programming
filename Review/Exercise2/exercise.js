"use strict"

const $ = (selector) => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {
   $("#login").addEventListener("click", () =>{login()})
   $("#resetButton").addEventListener("click", () => {reset()})
});

const login = () => {
    let email = $("#email_address1").value;
    let password = $("#password").value;
    let robot = $("#robot").checked;

    let isValidEmail = false;
    let isValidPassword = false;

    if (email == "") {
        email = " ";
        document.getElementById("email_address1").nextElementSibling.textContent = "Invalid Email";
        isValidEmail = false;
    }
    else {
        isValidEmail = true;
        document.getElementById("email_address1").nextElementSibling.textContent = "*";
    }

    if (password == "") {
        password = " ";
        document.getElementById("password").nextElementSibling.textContent = "Invalid Password";
        isValidPassword = false;
    }
    else {
        isValidPassword = true;
        document.getElementById("password").nextElementSibling.textContent = "*";
    }

    if (!robot) {
        document.getElementById("robot").nextElementSibling.textContent = "Need to check box";
    }
    else {    
        document.getElementById("robot").nextElementSibling.textContent = "*";
    }

    if (isValidEmail && isValidPassword) {
        document.location = "join.html";
    }

}

const reset = () => {
    $("#email_address1").value = "";
    document.getElementById("email_address1").nextElementSibling.textContent = "*";
    $("#password").value = "";
    document.getElementById("password").nextElementSibling.textContent = "*";
    $("#robot").checked = false;
    document.getElementById("robot").nextElementSibling.textContent = "*";

}