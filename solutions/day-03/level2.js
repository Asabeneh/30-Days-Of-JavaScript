function triangleA() {
    let base = prompt("Input the triangles base length:");
    let height = prompt("Input the triangles base height:");
    let area = 0.5 * base * height;
    alert(`The area of the triangle is ${area}`);
}

function triangleP() {
    let a = prompt("Enter the length of side a");
    let b = prompt("Enter the length of side b");
    let c = prompt("Enter the length of side c");
    let p = parseInt(a) + parseInt(b) + parseInt(c);
    alert(p);
}

function rectPA() {
    let width = parseInt(prompt("Enter the width of the rectangle."));
    let height = parseInt(prompt("Enter the height of the rectangle."));
    let p = 2 * (width + height);
    let a = width * height;
    alert(`The perimeter of the rectangle is ${p}\nThe area of the rectangle is ${a}`);
}

function circleA() {
    const PI = 3.14;
    let r = parseInt(prompt("Enter the radius of the circle."));
    let a = PI * (r * r);
    alert(`The area of the circle is ${a}`);
}

function calcSlope() {
    let x1 = parseInt(prompt("Enter the x position of the first point."));
    let y1 = parseInt(prompt("Enter the y postiion of the first point"));  
    let x2 = parseInt(prompt("Enter the x postiion of the second point"));   
    let y2 = parseInt(prompt("Enter the y postiion of the second point"));
    let m = (y2-y1)/(x2-x1);
    alert(`The slope between points (${x1},${y1}) and (${x2},${y2}) is ${m}`)
}

function weeklyEarning() {
    let h = parseInt(prompt("Enter hours"));
    let rate = parseInt(prompt("Enter rate"));
    let earning = h * rate;
    alert(`Your weekly earning is ${earning}`);
}

function nameLength() {
    let name = prompt("Enter your name")
    if (name.length > 7){
        alert("Your name is long!")
    }
        else {
        alert("Your name is short!")
    }
}

function compareNames() {
    let firstName = prompt("Enter your first name.")
    let lastName = prompt("Enter your last name.")
    if (firstName.length > lastName){
        alert(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    }
        else {
            alert(`Your first name, ${firstName} is not longer than your family name, ${lastName}`)
    }
}

function ageCompare() {
    let myAge = 250;
    let yourAge = 25;
    alert(`I am ${myAge - yourAge} years older than you.`);
}

function canDrive() {
    let age = parseInt(prompt("Enter birth year."));
    if (age > 18){
        alert(`You are ${age}. You are old enough to drive.`);
    }
    else{
        alert(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
    }
}

function lifeLength() {
    let age = parseInt(prompt("Enter the number of years you have lived"));
    let sec = age * 365 * 24 * 60 * 60;
    alert(`You have lived ${sec} seconds.`);
}

function calendar() {
const now = new Date();
const currentYear = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
alert(`${currentYear}-${month}-${day} ${hours}:${minutes}`)
}
