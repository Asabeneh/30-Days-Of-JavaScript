let firstName =  "Eligijus";
let lastName = "Dzikavicius";
let country = "Lithuania";
let city = "Kupiskis";
let age = "17";
let isMarried = false;
let year = "2023";

console.log(parseInt("10"));
console.log(parseInt("9.8"));

let truthy1 = 12; // truthy
let truthy2 = "string"; // truthy
let truthy3 = true; // truthy

let falsy1 = 0; // falsy
let falsy2 = ""; // falsy
let falsy3 = null; // falsy

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log("python".length != "jargon".length); // false
// All correct !

const now = new Date();
const currentYear = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay() + 1;
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const allTime = now.getTime();

console.log(`The current year is ${currentYear}`);
console.log(`The current month is ${month}`);
console.log(`The current date is ${date}`);
console.log(`The current day of the week is ${day}`);
console.log(`The current time is ${hours}:${minutes}:${seconds}`);
console.log(`The amount of seconds passed since Jan 1, 1970 is ${allTime}`);
