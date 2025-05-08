// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')

// let age = window.prompt("Enter your age");
// let message =
//   age >= 18
//     ? `You are old enough to drive`
//     : `You are left with ${18 - age} years to drive`;
// window.alert(message);

// let myAge = 82;
// let yourAge = 32;

// let comparison =
//   myAge > yourAge
//     ? `I am ${myAge - yourAge} years older than you`
//     : `You are ${yourAge - myAge} years older than me`;
// console.log(comparison);

// let a = 21;
// let b = 22;
// const greater =
//   a > b
//     ? `${a} is greater than ${b}`
//     : b > a
//     ? `${b} is greater than ${a}`
//     : `${a} is equal to ${b}`;
// console.log(greater);

// let number = 10;
// const result = number % 2 == 0 ? `${number} is an even number` : `${number} is an odd number`;
// console.log(result)

// let score = window.prompt("Enter the score");
// switch (true) {
//   case score >= 80 && score <= 100:
//     console.log("A");
//     break;
//   case score >= 70 && score < 80:
//     console.log("B");
//     break;
//   case score >= 60 && score < 70:
//     console.log("C");
//     break;
//   case score >= 50 && score < 60:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
//     break;
// }

// let period = window
//   .prompt("Enter the month to find out the season")
//   .toLowerCase();

// switch (true) {
//   case period == "september" || period == "october" || period == "november":
//     console.log("The season is Autumn");
//     break;
//   case period == "december" || period == "january" || period == "february":
//     console.log("The season is Winter");
//     break;
//   case period == "march" || period == "april" || period == "may":
//     console.log("The season is Spring");
//     break;
//   default:
//     console.log("The season is Summer");
// }

// let day = "friday".toLowerCase();

// switch (true) {
//     case day == "saturday" || day == "sunday":
//         let processedWeekend = day.split("");
//         processedWeekend.splice(0, 1);
//         console.log(
//           `${day.charAt(0).toUpperCase()}${processedWeekend.join(
//             ""
//           )} is a weekend`
//         );
//         break;
//     default:
//         let processedWeekDay = day.split("");
//         processedWeekDay.splice(0, 1);
//         console.log(
//           `${day.charAt(0).toUpperCase()}${processedWeekDay.join(
//             ""
//           )} is a weekday`
//         );

// }

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let daysNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let daysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let month = "March";

let currYear = new Date().getFullYear();
let isLeap = currYear % 4 == 0 ? "leap" : "normal";

console.log(
  isLeap == "leap"
    ? `The number of days in ${month} are ${daysLeap[months.indexOf(month)]}`
    : `The number of days in ${month} are ${daysNormal[months.indexOf(month)]}`
);
