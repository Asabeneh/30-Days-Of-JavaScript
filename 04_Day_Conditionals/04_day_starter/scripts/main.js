// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')

//Exo level 1

//exo 01
let age = prompt('Enter your age');
if(age>=18){
    "you are old enough to drive";
} else {
    `you are left with ${18-age} years to drive`;
}

//exo 02

let myAge = prompt('Enter your age');
const yourAge = 45;
if(myAge>yourAge){
    `Um ${myAge-yourAge} years oder than you`;
} else {
    `you are ${yourAge-myAge} years older than me`;
}

//exo 03

let a = parseInt(prompt('Enter a number'));
let b= parseInt(prompt('Enter another number'));
(a>b) ? console.log('a is greater than b') : console.log('b is greater than a');

//exo 04

let c = parseInt(prompt('Enter a number'));
if(c%2==0){
    console.log(`${c} is even`);
} else {
    console.log(`${c} is odd`);
}

//exo level 2

let score = parseInt(prompt('Give your score:'));

let grade;

switch (true) {
    case (score >= 80 && score <= 100):
        grade = "A";
        break;
    case (score >= 70 && score < 80):
        grade = "B";
        break;
    case (score >= 60 && score < 70):
        grade = "C";
        break;
    case (score >= 50 && score < 60):
        grade = "D";
        break;
    case (score >= 0 && score < 50):
        grade = "F";
        break;
    default:
        grade = "Failed";
}

console.log(`Your grade is ${grade}`);

//exo 02

let monthInput = prompt('Enter a month:');
let month = monthInput.toLowerCase();
let season;
switch (true) {
    case month=="september" || month=="october" || month=="november" :
        season = "Autumn";
        break;
        case month=="decembre" || month=="january" || month=="february" :
            season = "Winter";
            break;
        case month=="march" || month=="april" || month=="may" :
            season = "Spring";
            break;
        case month=="june" || month=="july" || month=="august":
            season = "Summer";
            break;
        default :
        season = "";
}

//exo 03

let dayInput = prompt("What is the day today?");
let day = dayInput.toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(`${day} is a weekend.`);
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(`${day} is a working day.`);
} else {
    console.log("Invalid day.");
}

//exo level 3

//exo 01

let monthIn = prompt("Enter a month");
let months = monthIn.toLowerCase();
let days;

switch (months) {
    case "january":
    case "march":
    case "july":
    case "august":
    case "october":
    case "december":
        days = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        days = 30;
        break;
    case "february":
        let yearInput = parseInt(prompt("Enter a year: "));
        let isLeapYear = (yearInput % 4 === 0 && yearInput % 100 !== 0) || (yearInput % 4 === 0);
        days = isLeapYear ? 29 : 28;
        break;
    default:
        console.error("Invalid month");
        break;
}

if (days !== undefined) {

console.log(`${months} has ${days}`);
}