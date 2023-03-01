// this is your main.js script
console.log(null)
let a = 2;
let b = 2;
console.log(a===b);


let num = 10;
num < 5
? console.log(`${num} is less than 20`)
: console.log(`${num} is not less than 20`)

// let def = prompt('Enter a number', 'number goes here');
// console.log(def)

// let sure = confirm("DO you want to exit page?");
// console.log(sure)

let firstName = 'ronil';
let lastName = 'shakya';
let country = 'nepal';
let city = 'lalitpur';
let age = 20;
let isMarried = false;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(4 !== 4)

let s1 = 'python';
let s2 = 'jargon';
console.log(s1.length == s2.length)

// let name = prompt("Enter the name");
// if (name.length > 5)
// console.log('too long')
// else
// console.log('too short')

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();
console.log(`${year}-${month}-${day} ${hour}:${minute}`)

