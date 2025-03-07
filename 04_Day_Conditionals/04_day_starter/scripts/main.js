// this is your main.js script

//alert('Open the browser console whenever you work on JavaScript')

// Day 4 Exercises

// Exercise 1
let userAge = parseInt(prompt('Enter your age:'));


if(userAge >= 18){
    console.log('You are old enough to drive');
} else {
    let yearsLeft = 18 - userAge
    console.log(`You are left with ${yearsLeft} years to drive`);
}

// Exercise 2
let myAge = parseInt(prompt('Enter your age: '));
let yourAge = 25;

if(myAge > yourAge){
    let ageDifference = myAge - yourAge;
    console.log(`I am ${ageDifference} years older than you`)
} else if (myAge < yourAge){
    let ageDifference = yourAge - myAge;
    console.log(`You are ${ageDifference} years older than me`)
} else {
    console.log('We are the same age')
}

// Exercise 3
let a = 4
let b = 3

if(a > b) {
    console.log('a is greater is b')
} else if (a < b) {
    console.log('b is greater than a')
} else {
    console.log("they're equal")     
}
// Using ternary operators
a > b
    ? console.log('a is greater than b')
    : console.log('a is less than b');

// Exercise 4
let evenNumber  = parseInt(prompt('Enter a number: '))   

if (evenNumber % 2 !== 0){
    console.log(`${evenNumber} isn't an even number!`);
} else {
    console.log(`${evenNumber} IS an even number!`);
}

                                        // Exercise Level 2
// Exercise 1
const score = parseFloat(prompt("Enter the student's score:"));

let grade;

switch (true) {
  case score >= 80 && score <= 100:
    grade = 'A';
    break;
  case score >= 70 && score < 80:
    grade = 'B';
    break;
  case score >= 60 && score < 70:
    grade = 'C';
    break;
  case score >= 50 && score < 60:
    grade = 'D';
    break;
  case score >= 0 && score < 50:
    grade = 'F';
    break;
  default:
    grade = 'Invalid score';
    break;
}

console.log(`The student's grade is: ${grade}`);

// Exercise 2

let month = prompt('Input current month: ');
let currentMonth = month.toLowerCase();

let autumn = ['september', 'october', 'november'];
let winter = ['december', 'january', 'february'];
let spring = ['march', 'april', 'may'];
let summer = ['june', 'july', 'august'];

if (autumn.includes(currentMonth)) {
    console.log('It is autumn');
} else if (winter.includes(currentMonth)) {
    console.log('It is winter');
} else if (spring.includes(currentMonth)) {
    console.log('It is spring');
} else if (summer.includes(currentMonth)) {
    console.log('It is summer');
} else {
    console.log('Invalid input or unknown season');
}

// Exercise 3
let day = prompt('What is the day today? ');
let lowerCaseDay = day.toLowerCase();

switch (lowerCaseDay) {
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend.`);
        break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day.`);
        break;
    default:
        console.log('Invalid day input.');
}

                                        // Exercise Level 3
// Exercise 1
let days = prompt('Enter month: ');
let monthlyDays = days.toLowerCase();

switch (monthlyDays) {
    case 'february' :
        console.log(`${monthlyDays} has 28 days`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(` ${monthlyDays }has  30 days `);
        break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log (`${monthlyDays} has 31 days`);
        break;
    default:
        console.log('Please enter correct month name') ;
};




