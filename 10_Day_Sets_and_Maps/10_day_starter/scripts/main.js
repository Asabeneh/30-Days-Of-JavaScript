console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//Exercises:Level 1
/*const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']*/

//1.create an empty set
const set = new Set();
//2.Create a set containing 0 to 10 using loop
const set1 = new Set();
for (let i = 0; i < 10; i++) {
  set1.add(i); //Set(10) {0, 1, 2, 3, 4, …}
}
console.log(set1);
//3. Remove an element from a set
const arr = [2, 8, 10, 7];
const set2 = new Set(arr);
set2.delete(10); //Set(3) {2, 8, 7}

console.log(set2);  // Set(3) {2, 8, 7}
//4. Clear a set
const arr1 = ['a', 'b', 'c', 'd'];
const set3 = new Set(arr);
set3.clear(); //Set(0) {size: 0}

console.log(set3); 
//5. Create a set of 5 string elements from array
const fruits = ['apple', 'mango', 'kiwi', 'peach', 'orange']
const setOfFruits = new Set(fruits);

console.log(setOfFruits);
//6. Create a map of countries and number of characters of a country
const countries_ = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const mapOfCountries = new Map();

for (const country of countries_) {
  mapOfCountries.set(country, country.length)
}
console.log(mapOfCountries)

//Exercises:Level 2

//1. Find a union b
let a = [17, 54, 23, 98, 19]
let b = [18, 22, 17, 20, 21, 98]
let c = [...a, ...b]

let C = new Set(c);

console.log(C);
//2. Find a intersection b
let A = new Set(a);
let B = new Set(b)

let d = a.filter(num => B.has(num))
let D = new Set(d)

console.log(D)
//3. Find a with b
let e = a.filter(num => !B.has(num))
let E = new Set(e)
console.log(E)

// Exercises:Level 3

//1. How many languages are there in the countries object file.
const languages = countries.map((element) => element.languages);
console.log(languages)
const unionLangs = languages.reduce((acc, cur) => [...acc, ...cur], [])
const uniqLangs = new Set(unionLangs)
console.log(uniqLangs.size) //112

//2. Use the countries data to find the 10 most spoken languages:
// Your output should look like this
/*console.log(mostSpokenLanguages(countries, 10))
[
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{English:91},
{French:45},
{Arabic:25}
]*/

const langArr = [];
for (const l of uniqLangs) {
  const count =  unionLangs.filter((lang) => lang === l).length;
  langArr.push({ [l] : count});
}

const sortedLang = langArr.sort((a, b) => {
  return Object.values(b) - Object.values(a)
});

console.log(sortedLang)

function mostSpokenLanguages(num) {
  const langObject = sortedLang.filter((element) =>
    sortedLang.indexOf(element) < num);
  return langObject;
}
console.log(mostSpokenLanguages(10));

