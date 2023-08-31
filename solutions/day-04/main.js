function canDrive() {
    let age = parseInt(prompt("Enter your age."));

    if (age < 18) {
        alert("You are not old enough to drive");
    }
    else {
        alert("You are old enough to drive!")
    }
}

function isOlder() {
    let myAge = 17;
    let yourAge = parseInt(prompt("How old are you ?"));
    
    if (yourAge > myAge) {
        alert(`You are ${yourAge - myAge} year(s) older than me.`)
    }
    else {
        alert(`I am ${myAge - yourAge} years older than you!`)
    }
}

let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
}
    else{
        console.log(`${a} is less than ${b}`);
    }

switch (true) {
    case (a > b):
        console.log(`${a} is greater than ${b}`);
        break;
    default:
        console.log(`${a} is less than ${b}`);
}