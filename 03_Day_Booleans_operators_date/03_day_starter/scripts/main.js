// this is your main.js script

//exercice level 1
//ex 01
let firstName = 'Belaid';
let lastName = 'DALI OMAR';
let country = 'Algeria';
let city = 'Tizi Ouzou';
let age = 30;
let isMarried = false;
let year = 1993;

console.log(typeof(firstName)); //string

console.log(typeof(lastName)); //string

console.log(typeof(country)); //string

console.log(typeof(city)); //string

console.log(typeof(age)); //number

console.log(typeof(isMarried)); //boolean

console.log(typeof(year)); //number

//exo 02
console.log('10' == 10); //true

//exo 03
let l = parseInt('9.8');
console.log(a == 10); //False

//exo 04
//Truthy values:

let truthyValue = 42;
let truthyString = "Hello, world!";
let truthyArray = [1, 2, 3];

// Falsy values:

let falsyValue = 0;
let falsyString = "";
let falsyNull = null;

//exo 05
console.log(4>3); //true
console.log(4>=3); //true
console.log(4<3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //False
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false

const pythonLength = "python".length;
const jargonLength = "jargon".length;

const isFalsyComparison = pythonLength === jargonLength ? "Falsy" : "Not Falsy";

console.log(isFalsyComparison);

//exo 06

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true

const str1 = 'python';
const str2 = 'dragon';
const isFalsyVal = str1.includes('on') || str2.includes('on') ? true : false;
console.log(isFalsyVal); //true

//exo 07

const time = new Date(); 
console.log(time); //Wed Aug 23 2023 10:39:33 GMT+0100 (Central European Standard Time)
console.log(time.getFullYear()); // 2023
console.log(time.getMonth() + 1); // 7
console.log(time.getDate()); // 23
console.log(time.getDay()); // 3
console.log(time.getHours()); // 10
console.log(time.getMinutes()); // 39
console.log(time.getTime()); // 1692783573531 seconds since January 1, 1970 00:00:00 GMT to 10:39:33 GMT    

//Exercice level 02

//exo 01
const base = parseFloat(prompt('Enter base:'));
const h = parseFloat(prompt('Enter Height:'));
let area = 0.5*base*h;
console.log(`the area is ${area}`); // 100

// exo 02

let a = parseFloat(prompt('Enter side a:'));
let b = parseFloat(prompt('Enter side b:'));
let c = parseFloat(prompt('Enter side c:'));
let p = a+b+c;
console.log(`the perimeter is ${p}`); //12

//exo 03

let length = parseFloat(prompt('Enter L: '));
let width = parseFloat(prompt('Enter W: '));
let areas = length * width;
let perimeter = 2*(length+width);
console.log(`the perimeter is ${perimeter}`); //
console.log(`the area is ${areas}`); //

//exo 04

let r = parseFloat(prompt('Enter L: '));
const Pi = 3.14;
let ar = r * r * Pi;
let per= 2*Pi*r;
console.log(`the perimeter is ${per}`); //
console.log(`the area is ${ar}`); //

//ex 05

// Equation: y = 2x - 2

// Slope (m) is the coefficient of x
const slope = 2;

// x-intercept: When y = 0
// 0 = 2x - 2
// 2x = 2
// x = 1
const xIntercept = 1;

// y-intercept: When x = 0
const yIntercept = -2;

console.log(`Slope (m): ${slope}`);
console.log(`x-intercept: (${xIntercept}, 0)`);//(1,0)
console.log(`y-intercept: (0, ${yIntercept})`);//(0,-2)

//EXO 06

// Points
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

// Calculate the slope
const slopes = (y2 - y1) / (x2 - x1);

console.log(`The slope between (${x1}, ${y1}) and (${x2}, ${y2}) is ${slopes}`);//2

//exo 07

// Equation: y = 2x - 2

// Given points
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

// Calculate the slope for the equation y = 2x - 2
const equationSlope = 2;

// Calculate the slope between the two points
const pointSlope = (y2 - y1) / (x2 - x1);

// Compare the slopes using ternary operator
const comparisonResult = equationSlope === pointSlope ? "Equal" : "Not Equal";

console.log(`Slope of y = 2x - 2: ${equationSlope}`);//Slope of y = 2x -2: 2
console.log(`Slope between (${x1}, ${y1}) and (${x2}, ${y2}): ${pointSlope}`);//slope between (2,2) and (6,10): 2
console.log(`Comparison result: Slopes are ${comparisonResult}`);// comparison result: Slopes are Equal

//Exo 08

// Equation: y = x^2 + 6x + 9

// Given equation coefficients
const a = 1;
const b = 6;
const c = 9;

// Calculate the discriminant
const discriminant = Math.sqrt(b * b - 4 * a * c);

// Calculate the two possible x values when y is 0
const x1 = (-b + discriminant) / (2 * a);
const x2 = (-b - discriminant) / (2 * a);

console.log(`x1: ${x1}`);//-3
console.log(`x2: ${x2}`);//-3

//exo 09

let hours = parseFloat(prompt('Enter Hour'));
let rateHr = parseFloat(prompt('Enter rate per hour'));
const  salary = hours * rateHr;
console.log(`Your weekly earning is ${salary}`);//Your weekly earning is 1120

//exo 10

const name = 'Belaid';
let L = name.length;
(L > 7)
? console.log('my name is long')
: console.log('my name is short')
//my name is short

//exo 11

let firstName = 'Belaid';
let lastName = 'DALI OMAR';
(length.firstName > length.lastName)
? console.log(`my first name, ${firstName} is longer than my family name, ${lastName}`)
: console.log(`my last name, ${lastName} is longer than my first name, ${firstName}`)
//my last name, DALI OMAR is longer than my first name, Belaid

//exo 12

let myAge = 30;
let yourAge = 32;
console.log(`you are ${yourAge - myAge} years older than me`);
// you are 2 years older than me

//exo 13

let birthYear = parseInt(prompt('Enter your birth year'));
let ages = 2023 - birthYear;
(ages>18)
? console.log(`you are ${ages}. You are old enough to drive`)
: console.log(`you are ${ages}. You will not be allowed to drive`);
//you are 29. You are old enough to drive

//exo 14

let yrs = parseInt(prompt('Enter number of years you live'));
const live = new Date();
console.log(`you lived ${live.getTime()} seconds`);
//you lived 1692797539157 seconds

//exo 15

const now = new Date();
const years = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const Hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${years}-${month}-${date} ${Hours}:${minutes}`); 
//2023-8-23 14:38
console.log(`${date}-${month}-${years} ${Hours}:${minutes}`);
//23-8-2023 14:38
console.log(`${date}/${month}/${years} ${Hours}:${minutes}`);
// 23/8/2023 14:38

//exercise level 3

//exo 01


const months = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const hourss = String(date.getHours()).padStart(2, '0');
const Minutes = String(date.getMinutes()).padStart(2, '0');


console.log(`${years}-${months}-${day} ${hourss}:${Minutes}`); 