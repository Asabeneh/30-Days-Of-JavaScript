// this is your main.js script

//Excercises for Day 2
//Exercise 1
let challenge = '30 Days Of JavaScript';

//Exercise 2
console.log(challenge)

//Exercise 3
console.log(challenge.length)

//Exercise 4
console.log(challenge.toUpperCase())

//Exercise 5
console.log(challenge.toLocaleLowerCase())

//Exercise 6
console.log(challenge.substring(2, 8))

//Exercise 7
console.log(challenge.substring(0, 2))

//Exercise 8
console.log(challenge.includes('Script'))

//Exercise 9
console.log(challenge.split())

//Exercise 10
console.log(challenge.split(' '))

//Exercise 11
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))

//Exercise 12
console.log(challenge.replace('JavaScript', 'Python'))

//Exercise 13
console.log(challenge.charAt(15))

//Exercise 14
console.log(challenge.charCodeAt(8))

//Exercise 15
console.log(challenge.indexOf('a'));

//Exercise 16
console.log(challenge.lastIndexOf('a'));

//Exercise 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'))

//Exercise 18
console.log(sentence.lastIndexOf('because'))

//Exercise 19
console.log(sentence.search('because'))

//Exercise 20
let whiteSpace = ' 30 days of JavaScript ';
console.log(whiteSpace.trim())

//Exercise 21
console.log(challenge.startsWith('30'))

//Exercise 22
console.log(challenge.endsWith('JavaScript'))

//Exercise 23
console.log(challenge.match())

//Exercise 24
const firstString = '30 Days of ';
const secondString = 'JavaScript';

const mergedString = firstString.concat(secondString);

console.log(mergedString); 

//Exercise 25
console.log(challenge.repeat(2))



                        //Exercise Level 2
//Exercise 1
console.log(`The quote "There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.`)

//Exercise 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Exercise 3
let strNumber = '10';
console.log(parseInt(strNumber));

//Exercise 4
let float = '9.8';
console.log(Math.ceil(float))

//Exercise 5
let word1 = 'Python'
let word2 = 'Jargon'

console.log(word1.includes('on'))
console.log(word2.includes('on'))

//Exercise 6
let word = 'I hope this course is not full of jargon. Check if jargon is in the sentence.'

console.log(word.includes('jargon'))

//Exercise 7
const num = Math.floor(Math.random() * 99);

console.log(num);

//Exercise 8
const min = 50;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

//Exercise 9
const randNum = Math.floor(Math.random() * 254)

console.log(randNum);

//Exercise 10
let string = 'JavaScript';

let randomIndex = Math.floor((Math.random() * string.length))

console.log(randomIndex)

//Exercise 11


//Exercise 12
let subStr = 'You cannot end a sentence with because because because is a conjunction';
const removedWord = subStr.slice(30, 54)

console.log(removedWord)


                        // Exercise Level 3

// Exercise 1
let numberOfWords = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(numberOfWords.match(/love/gi))

//Exercise 2
let numWords = 'You cannot end a sentence with because because because is a conjunction'
console.log(numWords.match(/because/gi))

//Exercise 3
const expression = "I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30 Days Of JavaScript is also the result of love of teaching.";

//Exercise 4
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 

const annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 

const numberPattern = /\d+/g;

console.log(numberPattern)

const numbers = annualIncome.match(numberPattern);

const monthlySalary = parseInt(numbers[0]);
const annualBonus = parseInt(numbers[1]);
const monthlyCoursesIncome = parseInt(numbers[2]);

const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCoursesIncome * 12);

console.log(`Total Annual Income: ${totalAnnualIncome} euro`);




