// this is your main.js script
// Exercise 01

// Declare a variable named challenge and assign it an initial value
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Change all characters to capital letters
console.log(challenge.toUpperCase());

// Change all characters to lowercase letters
console.log(challenge.toLowerCase());

// Slice out the first word of the string
console.log(challenge.substr(0, 2)); // Assuming you want the first word "30"

// Slice out the phrase "Days Of JavaScript"
console.log(challenge.substring(3)); // Assuming you want to exclude the initial "30 "

// Check if the string contains the word "Script"
console.log(challenge.includes('Script'));

// Split the string into an array
console.log(challenge.split());

// Split the string at the space
console.log(challenge.split(' '));

// Split the string at the comma and change it to an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// Change "30 Days Of JavaScript" to "30 Days Of Python"
console.log(challenge.replace('JavaScript', 'Python'));

// Character at index 15
console.log(challenge.charAt(15));

// Character code of J
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Position of first occurrence of 'a'
console.log(challenge.indexOf('a'));

// Position of last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));

// Position of first occurrence of 'because' in a sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Position of last occurrence of 'because' in a sentence
console.log(sentence.lastIndexOf('because'));

// Position of first occurrence of 'because' using search
console.log(sentence.search('because'));

// Remove trailing whitespace
console.log(challenge.trim());

// Check if it starts with '30 Days Of JavaScript'
console.log(challenge.startsWith('30 Days Of JavaScript'));

// Check if it ends with '30 Days Of JavaScript'
console.log(challenge.endsWith('30 Days Of JavaScript'));

// Find all occurrences of 'a' using match
console.log(challenge.match(/a/g));

// Concatenate strings
console.log('30 Days of '.concat('JavaScript'));

// Repeat the string
console.log(challenge.repeat(2));

//Excercise JavaScript level 02

// Exercise 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Exercise 2
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Exercise 3
if (typeof '10' !== 'number') {
    '10' = parseInt('10');
}

// Exercise 4
if (parseFloat('9.8') !== 10) {
    '9.8' = parseFloat('10');
}

// Exercise 5
const python = 'python';
const jargon = 'jargon';
console.log('on' in python && 'on' in jargon);

// Exercise 6
const sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon'));

// Exercise 7
const randomNumber1 = Math.floor(Math.random() * 101);
console.log(randomNumber1);

// Exercise 8
const randomNumber2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNumber2);

// Exercise 9
const randomNumber3 = Math.floor(Math.random() * 256);
console.log(randomNumber3);

// Exercise 10
const jsString = 'JavaScript';
const randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]);

// Exercise 11
console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

// Exercise 12
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const extractedPhrase = sentence2.substr(30, 23);
console.log(extractedPhrase);

//Exercise level 03

const sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const countLove1 = (sentence1.match(/love/gi) || []).length;
console.log(countLove1); // Output: 3

//
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const countBecause = (sentence2.match(/\bbecause\b/gi) || []).length;
console.log(countBecause); // Output: 3

//
const text4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers using regular expression and sum them up
const numbers = text4.match(/\d+/g).map(Number);
const totalAnnualIncome = numbers.reduce((total, num) => total + num, 0);

console.log(totalAnnualIncome); // Output: 30000
