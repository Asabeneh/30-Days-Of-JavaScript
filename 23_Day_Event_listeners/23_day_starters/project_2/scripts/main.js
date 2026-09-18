// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

let keyname = document.querySelector(".keyname");
let keycode = document.querySelector(".keycode");

document.body.addEventListener("keypress", e => {
    keycode.textContent = e.keyCode;
    keyname.textContent = e.key;
})