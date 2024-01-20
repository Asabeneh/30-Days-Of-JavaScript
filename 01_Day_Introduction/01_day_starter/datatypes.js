// typeof operator, checks datatype of variables

console.log(typeof character);
console.log(typeof characterIQ);
console.log(typeof characterIsMarried);
console.log(typeof testOfUndefined);
console.log(typeof emptyValue);

// variables without values

let test1;
let test2;
let test3;
let test4;

console.log(test1, test2, test3, test4);

// variables with assigned values

const varWithValue = "assigned value";
let test = false;
console.log(test);
test = true;
const num = 100;
let operator;
console.log(varWithValue, test, num, operator);

// variables in multiple lines

let characterFirstName = "Penny";
let characterLastName = "Hofstadter";
let characterIsMarriedStatus = true;
let characterCountry = "USA";
let characterAgeOf = 22;

console.log(
  characterFirstName,
  characterLastName,
  characterIsMarriedStatus,
  characterCountry,
  characterAgeOf
);

//variables in single line

let firstNameTest = "Max",
  lastNameTest = "Mustermann",
  isMarriedTest = false,
  countryTest = "Musterland",
  ageTest = null;

console.log(firstNameTest, lastNameTest, isMarriedTest, countryTest, ageTest);

// age variables with initial values

let myAge = 35;
let yourAge = 74;

console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");
