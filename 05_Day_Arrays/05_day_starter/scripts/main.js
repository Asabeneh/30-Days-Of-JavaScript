const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//Declare an empty array;
const emptyArray = [];

//Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Find the length of the array
console.log("Length of numbers array:", numbers.length);

//Get the first, middle and last elements of the array
console.log("First Item:", numbers[0]);
console.log("Middle Item:", numbers[Math.floor(numbers.length / 2)]);
console.log("Last Item:", numbers[numbers.length - 1]);

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
console.log("IT Companies:", itCompanies);

//Print the number of companies in the array
console.log("IT Companies count:", itCompanies.length);

//Print the first, middle and last IT company
console.log("First IT Company:", itCompanies[0]);
console.log(
  "Middle IT Company:",
  itCompanies[Math.floor(itCompanies.length / 2)]
);
console.log("Last IT Company:", itCompanies[itCompanies.length - 1]);

//Print out each company
console.log("IT Companies List:");
itCompanies.forEach((company) => console.log(company));

//Change each company name to uppercase one by one and print them out
console.log("Companies in Uppercase");
itCompanies.forEach((company) => console.log(company.toUpperCase()));

//Print out the Array as a sentence
console.log(itCompanies.toString());

//Check if a certain company exists in the itCompanies array. If it exists, return the company else return a company is not found
let companySearch = "IBAM";
itCompanies.includes(companySearch) == true
  ? console.log(companySearch, "has been found")
  : console.log(`The company ${companySearch} is not found`);

//Filter out companies which have more than one "o" without the filter method
console.log("Companies with double o")
let doubleo = [];
for (let company of itCompanies) {
    company.match(/oo/gm) ? doubleo.push(company) : null
}
console.log(doubleo);

//Sort the array using sort() method
console.log(itCompanies.sort());

//Reverse the array using the reverse() method
// console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
// itCompanies.splice(0, 3);
// console.log(itCompanies)

//Slice out the last 3 companies from the array
// itCompanies.splice(itCompanies.length - 3, 3);
console.log(itCompanies)

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
console.log(itCompanies.splice());