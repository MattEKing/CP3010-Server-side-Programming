"use strict";

const getElement = selector => document.querySelector(selector);

const user = "https://jsonplaceholder.typicode.com/users";
const todo = "https://jsonplaceholder.typicode.com/todos/?userId="

document.addEventListener("DOMContentLoaded", async() => {
    // load <select> element
    try {
        const userResponse = await fetch(user);
        const userJson = await userResponse.json();
        // console.log(userJson);
        displayUsers(userJson);
        getElement("#users").addEventListener('change', async() => {changeUser()});
    } catch (e) {
        alert(e.message);  
    }   
 });

 const displayUsers = async(userJson) => {
    const selectElement = getElement("#users");
    selectElement.textContent = "";  // clear previous <option> elements

    // create and add <option> element for each email 
    for (let user of userJson) {
        const option = document.createElement("option");
        option.value = user.id;
        const text = user.name;
        option.appendChild(document.createTextNode(text));
        selectElement.appendChild(option);
    }

        const todoResponse = await fetch(todo + "1");
        const todoJson = await todoResponse.json();

        for (let item in todoJson) {
            const row = document.createElement("tr");
            const todo = document.createElement("td");
            const complete = document.createElement("td");
            todo.textContent = todoJson[item].title;
            complete.textContent = todoJson[item].completed;
            row.appendChild(todo);
            row.appendChild(complete);
            getElement("#list").appendChild(row);
        }
 }

 const changeUser = async() => {
     const selectUser = getElement("#users").value;
    getElement("#list").textContent = "";

    const headerRow = document.createElement("tr");
    const headerTodo = document.createElement("th");
    const headercomplete = document.createElement("th"); 
    headerTodo.textContent = "ToDo Item";
    headercomplete.textContent = "completed";
    headerRow.appendChild(headerTodo);
    headerRow.appendChild(headercomplete);
    getElement("#list").appendChild(headerRow);


    const todoResponse = await fetch(todo + selectUser);
        const todoJson = await todoResponse.json();
        console.log(todoJson);

    for (let item in todoJson) {
        const row = document.createElement("tr");
        const todo = document.createElement("td");
        const complete = document.createElement("td");
        todo.textContent = todoJson[item].title;
        complete.textContent = todoJson[item].completed;
        row.appendChild(todo);
        row.appendChild(complete);
        getElement("#list").appendChild(row);
    }
 }