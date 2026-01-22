"use strict";
const getElement = selector => document.querySelector(selector);

const domain = "https://rovers.nebulum.one/api/v1/rovers";

document.addEventListener("DOMContentLoaded", async () => {
    // get rover data
    const selectElement = getElement("#rover");

    const response = await fetch(domain);
    const json = await response.json();

    try {        
        for (let rover of json.rovers) {
            const option = document.createElement("option");
            option.value = rover.id;
            const text = rover.name;
            option.appendChild(document.createTextNode(text));
            selectElement.appendChild(option);   
        }
        displayRover(json.rovers[getElement("#rover").value - 1])
        
        if (getElement("#options").class = "hide") {
            getElement("#options").classList.toggle("hide");
        }
    } catch (e) {
        alert(e.message)
    }

    // change event handler for Rover drop-down
    getElement("#rover").addEventListener("change", async (evt) => {
        displayRover(json.rovers[getElement("#rover").value - 1])
    });

    // click event handler for View button
    getElement("#view").addEventListener("click", async () => {
        const year = getElement("#year").value;
        const month = getElement("#month").value;
        const date = getElement("#date").value;
        const camera = getElement("#camera").value;

        displayImage(year, month, date, camera);
    });

    getElement("#month").addEventListener("change", () => displayRover(json.rovers[getElement("#rover").value - 1]));
});
const displayRover = (rover) => {
        const selectRover = rover;

        let roverStatus = getElement('#status');
        let roverPhotos = getElement("#photos");
        let roverLanding = getElement("#landing");
        let roverMax = getElement("#max");
        roverStatus.textContent = selectRover.status;
        roverPhotos.textContent = selectRover.total_photos;
        roverLanding.textContent = selectRover.landing_date;
        roverMax.textContent = selectRover.max_date;

        displayDate(selectRover.landing_date, selectRover.max_date);
        selectImage(rover);
    }

const displayDate = (landing_date, max_date) => {
    const landing = new Date(landing_date.split("-"));
    const max = new Date(max_date.split("-")); 

    const years = getElement("#year");
    years.textContent = "";
    const months = getElement("#month");
    const days = getElement("#date");
    days.textContent = "";

    for (let Year = landing.getFullYear(); landing.getFullYear() <= Year && Year <= max.getFullYear(); Year++) {
        const option = document.createElement("option");
        option.value = Year;
        const text = Year
        option.appendChild(document.createTextNode(text));
        years.appendChild(option);
    }

    for (let Month = 1; landing.getMonth() <= Month && Month <= 12; Month++) {
        const option = document.createElement("option");
        option.value = Month;
        const text = Month;
        option.appendChild(document.createTextNode(text));
        months.appendChild(option);
    }

    let setDays = dayOfMonth(years.value, months.value);
    for (let Day = 1; 1 <= Day && Day <= setDays; Day++) {
        const option = document.createElement("option");
        option.value = Day;
        const text = Day;
        option.appendChild(document.createTextNode(text));
        days.appendChild(option);
    }
}

const selectImage = (rover) => {
    for (let cameras of rover.cameras) {
            const option = document.createElement("option");
            option.value = cameras.name;
            const text = cameras.full_name;
            option.appendChild(document.createTextNode(text));
            getElement("#camera").appendChild(option);   
        }
}

const displayImage = async(year, month, date, camera) => {
    const response = await fetch(`https://rovers.nebulum.one/api/v1/rovers/Curiosity/photos/?earth_date=${year}-${month}-${date}&camera=${camera}`);
    const json = await response.json();

    getElement("#display").textContent = "";
    for (let image of json.photos) {
            const option = document.createElement("img");
            option.src = image.img_src;
            getElement("#display").appendChild(option);   
        }
}

function dayOfMonth(year, month) {
    return new Date(year, month, 0).getDate()
}
