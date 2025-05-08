// this is your main.js script
// let firstname = "Frank";
// let lastName = "Willis";
// let country = "Kenya";
// let city = "Mombasa";
// let age = 28;
// let isMarried = true;
// let year = new Date().getFullYear();
// let year2 = 2025;

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false

console.log("python".length != "jargon".length)

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true

let base = window.prompt("Enter the base");
let height = window.prompt("Enter the height");
let area = base * height * 0.5;
window.alert(`The area is ${area}`);

let sidea = window.prompt("Enter the first side");
let sideb = window.prompt("Enter the second side");
let sidec = window.prompt("Enter the third side");
let perimeter = Number(sidea) + Number(sideb) + Number(sidec);
window.alert(`The perimeer of the triangle is ${perimeter}`);

let hours = window.prompt("Enter hours worked");
let rateperhour = window.prompt("Enter rate per hour");
let totalpay = hours * rateperhour;
window.alert(`Your pay is $ ${totalpay}`);

console.log("FrankWillis".length > 7 ? "My name is long" : "My name is short");
let firstName = "Frank";
let lastName = "Anais";

firstName.length > lastName.length
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : console.log(
      `Your first name, ${lastName} is longer than your family name, ${firstName}`
    );

let myAge = 25;
let yourAge = 252;

myAge > yourAge
  ? console.log(`I am ${myAge - yourAge} years older than you.`)
  : console.log(`You are ${yourAge - myAge} years older than me.`);

let yearOfBirth = window.prompt("Enter year of birth");
let currentYear = new Date().getFullYear();
let currentAge = currentYear - yearOfBirth;
currentAge >= 18
  ? window.alert(`You are ${currentAge}. You are old enough to drive`)
  : window.alert(
      `You are ${currentAge}. You will be allowed to drive after ${
        18 - currentAge
      }`
    );

let noYears = window.prompt("Enter years to be converted");
let seconds = noYears * 365 * 24 * 3600;
window.alert(`You lived ${seconds} seconds`);

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

minutes > 9 ? minutes : minutes = `0${minutes}`;
hour > 9 ? hour : (hour = `0${hour}`);
month > 9 ? month++ : month = `0${month + 1}`;

// console.log(`${year}-0${month+1}-${date} ${hour}:${minutes}`)
// console.log(`${date}-0${month+1}-${year} ${hour}:${minutes}`);
// console.log(`${date}/0${month + 1}/${year} ${hour}:${minutes}`);

console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
