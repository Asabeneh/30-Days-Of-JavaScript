// import { webTechs } from "../data/webtechs";
import { countries } from "../data/countries.mjs";
import { webTechs } from "../data/webtechs.mjs";

//Declare an empty array;
const emptyArray = [];

//Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Find the length of the array
// console.log("Length of numbers array:", numbers.length);

//Get the first, middle and last elements of the array
// console.log("First Item:", numbers[0]);
// console.log("Middle Item:", numbers[Math.floor(numbers.length / 2)]);
// console.log("Last Item:", numbers[numbers.length - 1]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1,
  "string",
  true,
  null,
  undefined,
  { key: "value" },
  [1, 2, 3],
];

//Declare an array variable name it itCompanies and assign initial values
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
    "Amazon",
  "Netflix"
];

//Print the array using console.log()
// console.log("IT Companies:", itCompanies);

//Print the number of companies in the array
// console.log("IT Companies count:", itCompanies.length);

//Print the first, middle and last IT company
// console.log("First IT Company:", itCompanies[0]);
// console.log(
//   "Middle IT Company:",
//   itCompanies[Math.floor(itCompanies.length / 2)]
// );
// console.log("Last IT Company:", itCompanies[itCompanies.length - 1]);

//Print out each company
// console.log("IT Companies List:");
// itCompanies.forEach((company) => console.log(company));

//Change each company name to uppercase one by one and print them out
// console.log("Companies in Uppercase");
// itCompanies.forEach((company) => console.log(company.toUpperCase()));

//Print out the Array as a sentence
// console.log(itCompanies.toString());

//Check if a certain company exists in the itCompanies array. If it exists, return the company else return a company is not found
let companySearch = "IBAM";
// itCompanies.includes(companySearch) == true
//   ? console.log(companySearch, "has been found")
//   : console.log(`The company ${companySearch} is not found`);

//Filter out companies which have more than one "o" without the filter method
// console.log("Companies with double o")
let doubleo = [];
for (let company of itCompanies) {
    company.match(/oo/gm) ? doubleo.push(company) : null
}
// console.log(doubleo);

//Sort the array using sort() method
// console.log(itCompanies.sort());

//Reverse the array using the reverse() method
// console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
// itCompanies.splice(0, 3);
// console.log(itCompanies)

//Slice out the last 3 companies from the array
// itCompanies.splice(itCompanies.length - 3, 3);
// console.log(itCompanies)

//Slice out the middle IT company or companies from the array
// if (itCompanies.length % 2 > 0) {
//     itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
// } else {
//     itCompanies.splice(Math.floor(itCompanies.length / 2) - 1, 2);
// }
// console.log(itCompanies)

//Remove the first IT company from the array
// itCompanies.shift();
// console.log(itCompanies)

//Remove the middle IT company or companies from the array
// if (itCompanies.length % 2 > 0) {
//     itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
// } else {
//     itCompanies.splice(Math.floor(itCompanies.length / 2) - 1, 2);
// }
// console.log(itCompanies)

//Remove the last IT company from the array
// itCompanies.pop();
// console.log(itCompanies);

//Remove all the IT companies
// console.log(itCompanies.splice());

//LEVEL 2

//Create separate files for countries and web_techs and access from this file.
// console.log(countries)
// console.log(webTechs);

//Remove punctuations and change the string to array and count the number of words in it.

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.replace(/\,|\./gm, "").split(" ");
// console.log("Text Array:", words)
// console.log(`Text Length: ${words.length}`);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//Add 'Meat' in the beginning of your shoppinh cart if it has not been already added
let foodToAdd = "Meat";
let checkFood = shoppingCart.includes(foodToAdd);
!checkFood ? shoppingCart.unshift(foodToAdd) : '';
console.log(shoppingCart);

//Add Sugar at the end of your shopping cart if it has not already been added
let foodToAdd2 = "Sugar";
let checkFood2 = shoppingCart.includes(foodToAdd2);
!checkFood2 ? shoppingCart.push(foodToAdd2) : "";
console.log(shoppingCart);

//Remove Honey if you are allergic to honey
let foodToRemove = "Honey"
let allergy = shoppingCart.includes(foodToRemove);
allergy ? shoppingCart.splice(shoppingCart.indexOf(foodToRemove), 1) : null;
console.log(shoppingCart);

//Modify Tea to 'Green Tea'
let searchItem = "Tea";
let checkItem = shoppingCart.includes(searchItem);
checkItem ? shoppingCart[shoppingCart.indexOf(searchItem)] = "Green Tea" : null;
console.log(shoppingCart);

//Check if Ethiopia exists in the countries array. If it exists, print 'ETHIOPIA'. If not, add it to the countries list
let checkCountries = countries.includes("Ethiopia");
checkCountries ? console.log('ETHIOPIA') : countries.push('Ethiopia');

//Check if Sass exists in webTechs, if it exists, print 'Sass is a CSS Preprocessor'. If not, add Sass to webTechs

let checkWebTechs = webTechs.includes("Sass");
checkWebTechs ? console.log("Sass is a CSS Preprocessor") : webTechs.push("Sass");
console.log(webTechs);

//Concatenate the following two variables and store it in a fullStack variable
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backend = ['Node', 'Express', 'MongoDB'];

let fullStack = frontEnd.concat(backend);
console.log(fullStack);