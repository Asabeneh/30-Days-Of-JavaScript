// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// var userinput = prompt("Enter your age:");
// if((+userinput)>=18)
// {
//     alert("You are old enough to drive");
// }
// else
// {
//     alert("You can drive after "+(18-(+userinput))+" years");
// }


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// var yourAge = prompt("Enter your age:");
// var myAge = 18;
// if((+yourAge)>myAge)
// {
//     console.log("You are "+((+yourAge)-myAge)+" years older than me.");
// }
// else if((+yourAge)==myAge)
// {
//     console.log("We have the same age");
// }
// else
// {
//     console.log("You are "+(myAge-(+yourAge))+" years younger than me.");
// }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//     using if else
//     ternary operator.

//   let a = 4
//   let b = 3

//   4 is greater than 3

let a = 4;
let b = 3;
if(a>b)
{
    console.log('a is greater than b');
}
else
{
    console.log('a is less than b');
}

let bof = a>b;
bof
    ? console.log('a is greater than b')
    : console.log('a is less than b');

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
// var isEven = prompt("Enter a number: ");
// if((+isEven)%2==0)
// {
//     console.log((+isEven)+" is an even number");
// }
// else
// {
//     console.log((+isEven)+" is an odd number");
// }


// Write a code which can give grades to students according to theirs scores:

//     80-100, A
//     70-89, B
//     60-69, C
//     50-59, D
//     0-49, F
var score = 69;
if((+score)>=80 && (+score)<=100)
{
    console.log("A")
}
if((+score)>=70 && (+score)<=86)
{
    console.log("B")
}
if((+score)>=60 && (+score)<=69)
{
    console.log("C")
}
if((+score)>=50 && (+score)<=59)
{
    console.log("D")
}
if((+score)>=0 && (+score)<=49)
{
    console.log("F")
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

//     September, October or November, the season is Autumn.
//     December, January or February, the season is Winter.
//     March, April or May, the season is Spring
//     June, July or August, the season is Summer

var season = "January";
if(season == 'September' || season == 'October' || season == 'November')
{
    console.log("the season is Autumn");
}
if(season == 'December' || season == 'January' || season == 'February')
{
    console.log("the season is Winter");
}
if(season == 'March' || season == 'April' || season == 'May')
{
    console.log("the season is Spring");
}
if(season == 'June' || season == 'July' || season == 'August')
{
    console.log("the season is Summer");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

var isWeekEnd = "FrIdAY";
if(isWeekEnd.toLowerCase()=="saturday" || isWeekEnd.toLowerCase()=="sunday")
{
    console.log((isWeekEnd.toLowerCase()).charAt(0).toUpperCase()+(isWeekEnd.toLowerCase()).slice(1)+" is weekend");
}
else
{
    console.log((isWeekEnd.toLowerCase()).charAt(0).toUpperCase()+(isWeekEnd.toLowerCase()).slice(1)+" is a working day");
}


// Write a program which tells the number of days in a month.

// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.

var numberofdaysinamonth = "december";
if(numberofdaysinamonth.toLowerCase()=="january")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 0 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="february")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 1 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="march")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 2 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="april")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 3 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="may")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 4 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="june")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 5 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="july")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 6 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="august")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 7 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="september")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 8 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="october")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 9 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="november")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 10 + 1, 0);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}
if(numberofdaysinamonth.toLowerCase()=="december")
{
    var currentDate = new Date();
    var d = new Date(currentDate.getFullYear(), 11 + 1, 0);
    // console.log(d);
    console.log((numberofdaysinamonth.toLowerCase()).charAt(0).toUpperCase()+(numberofdaysinamonth.toLowerCase()).slice(1)+" has "+d.getDate()+" days");
}

