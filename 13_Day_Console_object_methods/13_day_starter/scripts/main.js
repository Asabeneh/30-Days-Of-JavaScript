console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//Exercises

//Exercises:Level 1

//1. Display the countries array as a table
const countries_ = [
    'Albania',
    'Belgium',
    'Canada',
    'Denmark',
    'Estonia',
    'Finland'
  ]

console.table(countries_);
//2. Display the countries object as a table
const canada = {
	"name": "Canada",
	"capital": "Ottawa",
	"population": 38005238,
	"region": "Americas",
	"area": 9984670
}
console.table(canada)

//3. Use console.group() to group logs
console.group('Group of countries');
console.group(countries_);
console.groupEnd()

//Exercises:Level 2

//1. 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is larger than 2 times 10.');
//2. Write a warning message using console.warn()
console.warn('Stay focused!');
//3. Write an error message using console.error()
console.error('3 errors detected');
//Exercises:Level 3

//1. Check the speed difference among the following loops: while, for, for of, forEach
const numbers = [0, 1, 2, 3, 4];

// while loop
console.time('while loop');
let i = 0
do {
  console.log(numbers[i]);
  i++;
} while (i < 5);
console.timeEnd('while loop');


// for loop
console.time('for loop');
for (i = 0; i < 5; i++) {
  console.log(numbers[i]);
}
console.timeEnd('for loop');


// for of loop
console.time('for of loop');
for (const element of numbers) {
  console.log(element);
}
console.timeEnd('for of loop');


// forEach
console.time('forEach');
numbers.forEach((num) => 
  console.log(num));
console.timeEnd('forEach');
