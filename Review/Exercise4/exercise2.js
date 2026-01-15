"use strict";

const $ = selector => document.querySelector(selector);

const Images = $("#image_list").children;
let imgArr = [];

for (let index = 0; index < Images.length; index++) {
    let img = new Image();
    let item = Images[index].firstChild;
    img.href = item.href
    img.title = item.title;
    imgArr.push(img);
    
}

document.addEventListener("DOMContentLoaded", () => {
    $("#deer").addEventListener("click", ()=>{change(imgArr[1].href, imgArr[1].title)});
    $("#release").addEventListener("click", ()=>{change(imgArr[0].href, imgArr[0].title)});
    $("#hero").addEventListener("click", ()=>{change(imgArr[2].href, imgArr[2].title)});
});

const change = (href, title) => {
    $("#image1").src = href;
    $("#caption").textContent = title;
}
