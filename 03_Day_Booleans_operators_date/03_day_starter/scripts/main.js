// this is your main.js script

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
var currentDate = new Date();
var firstName = "Faliana", lastName="Ranai", country = "Madagascar", city = "Antananarivo", age=21, isMarried=false;
var currentYear = currentDate.getFullYear();
console.log(typeof(firstName),  typeof(lastName),  typeof(country),  typeof(city),  typeof(age),  typeof(isMarried),  typeof(currentYear));

// Check if type of '10' is equal to 10
console.log(typeof('10'), typeof(10));

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8'));

// Boolean value is either true or false.
//     Write three JavaScript statement which provide truthy value.
//     Write three JavaScript statement which provide falsy value.
console.log(1==1, 2!=1, 2<3);
console.log(1>21, 69==70, 2>2);


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     4 > 3
//     4 >= 3
//     4 < 3
//     4 <= 3
//     4 == 4
//     4 === 4
//     4 != 4
//     4 !== 4
//     4 != '4'
//     4 == '4'
//     4 === '4'
//     Find the length of python and jargon and make a falsy comparison statement.
console.log(4 > 3, 4 >= 3, 4 < 3, 4 <= 3, 4 == 4, 4 === 4, 4 != 4, 4 !== 4, 4 != '4', 4 == '4',  4 === '4');



// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//     4 > 3 && 10 < 12
//     4 > 3 && 10 > 12
//     4 > 3 || 10 < 12
//     4 > 3 || 10 > 12
//     !(4 > 3)
//     !(4 < 3)
//     !(false)
//     !(4 > 3 && 10 < 12)
//     !(4 > 3 && 10 > 12)
//     !(4 === '4')
//     There is no 'on' in both dragon and python
console.log(4 > 3 && 10 < 12, 4 > 3 && 10 > 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12, !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4'));



// Use the Date object to do the following activities
//     What is the year today?
//     What is the month today as a number?
//     What is the date today?
//     What is the day today as a number?
//     What is the hours now?
//     What is the minutes now?
//     Find out the numbers of seconds elapsed from January 1, 1970 to now.
currentDate = new Date();
console.log("year: ", currentDate.getFullYear());
console.log("month: ", currentDate.getMonth()+1);
console.log("date: ", currentDate.getDate());
console.log("day: ", currentDate.getDay());
console.log("hours: ", currentDate.getHours());
console.log("minutes: ", currentDate.getMinutes());
console.log("numbers of seconds elapsed from January 1, 1970 to now: ", currentDate.getTime()/1000);

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// var base = prompt('enter base the triangle: ');
// var height = prompt('enter height: ');
// console.log("area of a triangle: ", 0.5*base*height);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// var a = parseInt(prompt("enter side a: "));
// var b = parseInt(prompt("enter side b: "));
// var c = parseInt(prompt("enter side c: "));
// console.log("The perimeter of the triangle is: ", a+b+c);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// var length = prompt("enter length: ");
// var width = prompt("enter width: ");
// console.log("area of rectangle: ", +length*(+width));

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// var r = prompt("enter radius: ");
// console.log("area of a circle: ", 3.14*(+r)*(+r));
// console.log("circumference of a circle: ", 2*3.14*(+r));

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
console.log("y = 2x-2 ", "pour x = 0; y = -2 ", 'pour x = 1; y = 0');
console.log("m = (y2-y1)/(x2-x1) ", (0-(-2))/(1-0));

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log("slope between point (2, 2) and point(6,10): ", (10-2)/(6-2));

// Compare the slope of above two questions.
console.log("equal");

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
console.log("y = x2 + 6x + 9 ", "delta = b²-4ac = ", (6**2)-4*(1*9));
console.log("x=", -6/(2*1));

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// var hours = prompt("enter hours: ");
// var rateperhour = prompt("enter rate per hour: ");
// console.log("pay of the person: ",(+hours)*(+rateperhour));

// If the length of your name is greater than 7 say, your name is long else say your name is short.
if("Faliana".length>7)
{
    console.log("your name is long");
}
else
{
    console.log("your name is short");
}

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'

// Your first name, Asabeneh is longer than your family name, Yetayeh

firstName = 'Asabeneh';
lastName = 'Yetayeh';
if(firstName.length>lastName.length)
{
    console.log("Your first name, "+firstName+" is longer than your family name, "+lastName);
}
else
{
    console.log("Your first name, "+firstName+" is shorter or equal than your family name, "+lastName);
}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25

// I am 225 years older than you.

let myAge = 250;
let yourAge = 25;
if(myAge>yourAge)
{
    console.log("I am "+(myAge-yourAge)+" years older than you");
}
else if(myAge==yourAge)
{
    console.log("We have the same age");
}
else
{
    console.log("I am "+(yourAge-myAge)+" years younger than you");
}

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// var birth = prompt("Enter birth year");
// if(currentDate.getFullYear()-birth>=18)
// {
//     console.log("You are "+(currentDate.getFullYear()-birth)+". You are old enough to drive");
// }
// else
// {
//     console.log("You are "+(currentDate.getFullYear()-birth)+". You will be allowed to drive after "+(18-(currentDate.getFullYear()-birth))+" years.");
// }

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// var numberofyears = prompt("enter number of years: ");
// console.log((+numberofyears)*365*24*60*60);



// Create a human readable time format using the Date time object

//     YYYY-MM-DD HH:mm
//     DD-MM-YYYY HH:mm
//     DD/MM/YYYY HH:mm

console.log(currentDate.getFullYear()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getDate()+" "+currentDate.getHours()+":"+currentDate.getMinutes());
console.log(currentDate.getDate()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear()+" "+currentDate.getHours()+":"+currentDate.getMinutes());
console.log(currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear()+" "+currentDate.getHours()+":"+currentDate.getMinutes());

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

//     YYY-MM-DD HH:mm eg. 20120-01-02 07:05
var minutes = 5;
var h = 7
if((+minutes)<10)
{
    minutes = '0'+minutes;
}
if((+h)<10)
{
    h = '0'+h;
}
console.log("2020-01-02 "+h+":"+minutes)



























