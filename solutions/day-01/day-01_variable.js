// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

let fullName = "John Doe";
let ageNow = 50;
let isDivorced = true;
let car = undefined;
let kids = null;

console.log(
  typeof "fullName",
  typeof ageNow,
  typeof isDivorced,
  typeof car,
  typeof kids
);

let fruit = null;
let vegetable = null;
let fish = null;
let meat = null;

console.log(fruit, vegetable, fish, meat);

let carModel = "Toyota";
let yearMade = 2019;
let price = 100000;
let color = "red";

console.log(carModel, yearMade, price, color);

let nameFirst = "Daniel";
let nameLast = "Fernandez";
let countryOfOrigin = "Spain";
let currentAge = 35;
let maritalStatus = "single";

let name1 = "John",
  name2 = "Doe",
  ethnicity = "Indian",
  personAge = 50,
  marriageStatus = "married";

console.log(nameFirst, nameLast, countryOfOrigin, currentAge, maritalStatus);
console.log(name1, name2, ethnicity, personAge, marriageStatus);

// Array creation
let details = [
  (nameFirst = "John"),
  (nameLast = "Doe"),
  (countryOfOrigin = "USA"),
  (currentAge = 50),
  (maritalStatus = "single"),
];

console.log(details);

const myAge = 35;
const yourAge = 50;

console.log(`I am ${myAge} years old. and you are ${yourAge} years old.`);
