let body = document.querySelector("body");
let container = document.querySelector(".container");
let animation = document.querySelector(".animation");

let string = "30 Days of JavaScript Challenge 2020 Asabeneh Yetayeh";
let element;
setInterval(function() 
{
    container.removeChild(animation);
    animation = document.createElement("div");
    animation.className = "animation";
    for(let i = 0; i < string.length; i++){
        element = document.createElement("span");
        element.textContent = string[i];
        element.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        animation.appendChild(element);
    }
    body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    container.appendChild(animation);
}, 5000);