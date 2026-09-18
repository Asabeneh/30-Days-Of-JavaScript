// this is your main.js script
                                            // Day 3 Exercises
                                            // Exercise Level 1

// Exercise 1
 const firstName = 'Gideon';
 const lastName = 'Buba';
 let country = 'Nigeria'; 
 const age = '23';
 let isMarried = false;
 let year = 2023;
 
 console.log(typeof(firstName))
 console.log(typeof(lastName))
 console.log(typeof(country))
 console.log(typeof(age))
 console.log(typeof(isMarried))
 console.log(typeof(year))

 // Exercise 2
let string = '10'
let number = 10;

console.log(string === number) //false

// Exercise 3
let decimal = 9.8;
let wholeNumber = 10;

console.log(parseInt(decimal) === wholeNumber);

// Exercise 4
    // Truthy value
    'true'
    'Hello World'
    'Gideon'
    // Falsy value
    'false'
    '0'
    'null'

// Exercsie 5
//Choices without console.log()
4 > 3                           //true
4 >= 3                          //true
4 < 3                           //false
4 <= 3                          //false
4 == 4                          //true
4 === 4                         //true
4 != 4                          //false
4 !== 4                         //false
4 != '4'                        //true
4 == '4'                        //false
4 === '4'                       //false

//choices with console.log()
console.log(4 > 3)              //true
console.log(4 >= 3)             //true
console.log(4 < 3)              //false
console.log(4 <= 3)             //false
console.log(4 == 4)             //true
console.log(4 === 4)            //true
console.log(4 != 4)             //false
console.log(4 !== 4)            //false
console.log(4 != '4')           //true
console.log(4 == '4')           //true
console.log(4 === '4')          //false

let python = 'python';
let jargon = 'jargon';

let pythonLenght = python.length;
let jargonLenght = jargon.length;

console.log(pythonLenght === jargonLenght)

// Exercise 6
//choices without console.log
4 > 3 && 10 < 12                //true 
4 > 3 && 10 > 12                //false
4 > 3 || 10 < 12                //true
4 > 3 || 10 > 12                //true
!(4 > 3)                        //false
!(4 < 3)                        //true
!(false)                        //true
!(4 > 3 && 10 < 12)             //false
!(4 > 3 && 10 > 12)             //true
!(4 === '4')                    //true

//choices with console.log()
console.log(4 > 3 && 10 < 12)  
//true        
console.log(4 > 3 && 10 > 12)
//false
console.log(4 > 3 || 10 < 12)
//true
console.log(4 > 3 || 10 > 12)
//true
console.log(!(4 > 3))
//false
console.log(!(4 < 3))
//true
console.log(!(false))
//true
console.log(!(4 > 3 && 10 < 12))
//false
console.log(!(4 > 3 && 10 > 12))
//true
console.log(!(4 === '4'))
//true

// Exercise 7
//todays year
let date = new Date();
console.log(date.getFullYear())         //'2021'

//todays month
console.log(date.getMonth())            //'8' (January is zero, so December has a value of one less than January.)

//todays date
console.log(date.getDate())             //'9'

//todays day
console.log(date.getDay())              //'5'

//hour as of now
console.log(date.getHours())            //'8'

//minute as of now
console.log(date.getMinutes())          //'6'

//seconds from January 1, 1970 to now



                                            // Exercise Level 2
// Exercise 1                                            
let base = prompt('Enter base of the triangle: ')
let height = prompt('Enter height of the triangle: ')

let area = 0.5 * base * height

console.log(`The area of the triangle is ${area}: `)

// Exercise 2
let sideA = prompt('Enter side a:')
let sideB = prompt('Enter side b:')
let sideC = prompt('Enter side c:')

let perimiter = sideA + sideB + sideC
console.log(`The perimeter of a triangle is ${perimiter}`)

//Exercise 3
let length = prompt('Enter lenght:')
let width = prompt('Enter Width:')

let perimeterOfRectangle = 2 * (length * width)
let areaOfRectangle = length * width * perimeterOfRectangle

console.log(`The area of the rectangle is ${areaOfRectangle}`)

// Exercise 4
let radius  =  prompt('Enter radius of the circle:')
let pi = Math.PI

let areaOfCircle =  pi * radius * radius
let circumference = 2 * pi * radius

console.log(`The area of the circle is ${area}: `);
console.log(`The circumfrence of the circle is ${circumference}: `);

// Exercise 5 
const slope = 2;
const xIntercept = 1;
const yIntercept = -2;

console.log(`Slope: ${slope}`);
console.log(`X-Intercept: ${xIntercept}`);
console.log(`Y-Intercept: ${yIntercept}`);

// Exercise 6
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slope2 = (y2 - y1) / (x2 - x1);

console.log("The slope between the points is:", slope);

// Exercise 7


// Exercise 10
//const firstName = 'Gideon';
//const lastName = 'Buba';
 if(firstName.length > 7){
    console.log('Your name is long') 
    } else {
        console.log('Your name is short') 
 };


 // Exercise 11
 //const firstName = 'Gideon';
//const lastName = 'Buba';
if(firstName.length > lastName.length){
    console.log(`Your first name, ${firstName} is longer than your last name ${lastName}`) 
    } else {
        console.log(`Your last name, ${lastName} is longer than your first name ${firstName}`) 
 };


// Exercise 12
let myAge = 250
let yourAge = 25

let ageDifference = myAge - yourAge
console.log(`I am ${ageDifference} years older than you`) 

// Exercise 13
let currentYear = new Date().getFullYear()
let birthYear = prompt('Enter year of birth: ')
let userBirthYear = parseInt(birthYear)

let userAge = currentYear - userBirthYear;

if (userBirthYear >= 18) {
    console.log("You are allowed to drive.");
  } else {
    const yearsToWait = 18 - userAge;
    console.log(`You are ${userAge}.You will be allowed to drive when you're ${yearsToWait}.`);
  };

// Exercise 14

//



























