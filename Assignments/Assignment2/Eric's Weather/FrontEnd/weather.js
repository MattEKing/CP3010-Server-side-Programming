const weatherURL = "http://localhost:3000/api/weather";

document.addEventListener("DOMContentLoaded", async () => {
  const select = document.getElementById("citySelect");
  const display = document.getElementById("cityDisplay");
  select.value = "";
  let report = document.querySelector("#report");

  select.addEventListener("change", async () => {
    report.textContent = "";

    if (select.value === "") {
      display.textContent = "No city selected.";
    } else {
      const selectedText = select.options[select.selectedIndex].text;
      display.textContent = "You selected: " + selectedText;

      let weather = await fetch(weatherURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: selectedText }),
      });
      let response = await weather.json();
      displayReport(response);
    }
  });
});

const displayReport = (response) => {
  for (key in response) {
    const element = document.createElement("h2");
    const text = `${key} : ${response[key]}`;
    element.append(text);
    report.append(element);
  }
};
