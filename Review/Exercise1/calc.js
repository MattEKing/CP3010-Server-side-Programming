const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $('#calculate').addEventListener("click", () => {calcTaxRate()});
    $('#reset').addEventListener("click", () => {resetTextBox()});
});

const calcTaxRate = () => {
    let price = parseFloat($("#price").value);
    let rate = parseFloat($("#rate").value) / 100;
    if (isNaN(price) || price == 0) {
        alert("Enter valid float.")
        $("#price").value = ""
        $("#rate").value = ""
    }
    if (!isNaN(price) && price > 0 && rate >= 2 || rate <= 12) {
        let tax = price * rate;
        let total = price + tax;
        $("#total").value = total;
    }
    else {
        alert("Enter a rate between 2 and 12.")
        $("#rate").value = ""
    }
}

const resetTextBox = () => {
    $("#price").value = ""
    $("#rate").value = ""
    $("#total").value = ""
}