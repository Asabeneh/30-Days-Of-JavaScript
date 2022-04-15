// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')
//Exercises: Level 1

//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let yourAge = prompt('Enter you age')
if(yourAge >= 18){
console.log('you are old enough to drive')
}else {
console.log(`You are left whih ${(18 - yourAge )} to drive`)
}

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt('Enter my age')
let yourAge_ = prompt('Enter your age')
if(myAge<yourAge_){
    console.log(`You are ${yourAge_ - myAge} years older than me.`)}
    else if(myAge>yourAge_){
        console.log(`I am ${myAge - yourAge_} years older than you`)
    }else{
        console.log('we are same age')
    }

    //3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
 let a = 4
 let b = 3
 
 if(a>b){
console.log(`${a} is greater than ${b}`)
 }else if(a<b){
     console.log(`${a} is less than ${b}`)
 }else{
     console.log(`${a} is equal ${b}`)
 }

 a > b ? console.log('a is greater than b'):a<b? console.log('a is less than b'): console.log('a is equal b');
 
 //4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num =  prompt('Enter number')
if(num % 2 === 0){
    console.log(`${num}is an even number`)
}else{
    console.log(`${num} is an odd number`)
}

//Exercises: Level 2

/*1.Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let scores = prompt('Enter score')
if(  scores<= 100 && scores>=80){
console.log(`your score es A`)
}else if(scores>=70 && scores<=89){
    console.log('your score is B')
}else if(scores >=60 && scores<=69){
    console.log('your score is C')
}else if(scores >=50 && scores<=59){
    console.log('your score is D')
}else if(scores >=0 && scores<=49){
    console.log('Your score es F')
}else{
    console.log('Max score is 100')
}

/*2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
° September, October or November, the season is Autumn.
° December, January or February, the season is Winter.
° March, April or May, the season is Spring
° June, July or August, the season is Summer*/
let season = prompt('Enter month')
season = season.toLowerCase()
if(season==='september' || season === 'october'|| season==='november'){
    console.log('Season is Autumn')
}else if(season==='december'|| season==='january'|| season==='february'){
    console.log('the season is Spring')
}else{
    console.log('the season is Summer')
}

//3.Check if a day is weekend day or a working day. Your script will take day as an input.
let daysOfWeek = ['monday', 'tuesday', 'wedsnesday','thursday',  'friday', 'saturday', 'sunday'];

let input = prompt('Enter day').toLowerCase();
 input === daysOfWeek[5] || input === daysOfWeek[6]? console.log(`${input[0].toUpperCase() + input.slice(1)} is a weekend`):
input === daysOfWeek[0] || input === daysOfWeek[1] || input === daysOfWeek[2] || input === input[3] || input === daysOfWeek[4]? console.log(`${input[0].toUpperCase() + input.slice(1)} is a day working`):console.log(`${input} no es un dia de la semana`);

//Exercises: Level 3

//1. Write a program which tells the number of days in a month.

const months = {"january": 1, "february": 2, "march":3, "april": 4, "may": 5, "june": 6, "july": 7, "august": 8, "september": 9, "october": 10, "november": 11, "december": 12 };

let daysInMonth = new Date(2022, months[prompt('Enter Month').toLowerCase], 0).getDate();
console.log(daysInMonth);








