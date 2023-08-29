//console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercise level 1
// Explain the difference betwenn forEach, Map, and reduce

// Exercise 1
/*
    The forEach method is a higher order function that is used to loop through elements of an array and apply the provided function to each element.
    The map function is used to transform elements of an array, it creates a new array by applying the provided function to each element of the original array.
    The reduce function is used to process elements of an array an produce a single result.
*/

// Exercise 2


// Exercise 3
countries.forEach((country) => console.log(country)) 

// Exercise 4
names.forEach((name) => console.log(name)) 

// Exercise 5
numbers.forEach((number) => console.log(number))

// Exercise 6
const upperCaseCountries = countries.map((country) => country.toUpperCase());

// Exercise 7
const countriesLength = countries.map((country) => country.length);

// Exercise 8
const square = numbers.map((number) => number * number)

// Exercise 9
const upperCaseNames = names.map((name) => name.toUpperCase())

// Exercise 10
const prices = products.map(product => product.price);

// Exercise 11
const countriesWithLand = countries.filter((country) => country.includes('land'))

// Exercise 12
const countriesWithSixLetters = countries.filter((country) => country.length === 6);

// Exercise 13
const countriesWithSixLettersandMore = countries.filter((country) => country.length >= 6);

// Exercise 14
const countriesStartingWithE = countries.filter((country) => country.startsWith('E'));

// Exercise 15
const pricesWithValues = products.filter((price) => typeof products.price === 'number' && !isNaN(price));

// Exercise 16
function getStringList(array) {
    const nonStringElements = array.filter((element) => typeof element !== 'string');
    return nonStringElements
}

// Exercise 17
const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumNumbers)

// Exercise 18
const europeanCountries = countries.reduce((country) )

// Exercise 19
/*
    - `some`: Returns `true` if at least one element in the array satisfies the provided condition.
    - `every`: Returns `true` only if all elements in the array satisfy the provided condition.
*/

// Exercise 20
const namesGreaterThanSeven = names.some((name) => name > 7);

// Exercise 21
const everyCountryWithLand = countries.every((country) => country.includes('land'))

//Exercise 22
/*
    find: Returns the first element in the array that satisfies the provided condition, or undefined if no element is found.
    findIndex: Returns the index of the first element in the array that satisfies the provided condition, or -1 if no element is found.
*/

// Exercise 23
const countryWithSixLetters = countries.find((country) => country.length === 6);

// Exercise 24
const indexOfcountryWithSixLetters = countries.findIndex((country) => country.length === 6);

// Exercise 25
const indexOfNorway = countries.findIndex((country) => country === 'Norway');

// Exercise 26
const indexOfRussia = countries.findIndex((country) => country === 'Russia');




