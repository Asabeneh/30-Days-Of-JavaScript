// 1.question
let age = parseInt(prompt('Enter your age:', 0));
(age > 18) ? alert('You are old enough to drive.') : alert(`You are left with ${18 - age} years to drive.`);
// 2.question
let yourAge = parseInt(prompt('Enter your age:', 0));
let myAge = age;
if (yourAge > myAge) {
     console.log(`Your are ${yourAge-myAge} years older than me.`);
} else {
     console.log(`Your are ${myAge - yourAge } years younger than me.`);
}
// 3.question
let a = parseInt(prompt('Enter number a:', 0));
let b = parseInt(prompt('Enter number b:', 0));
if (a > b) { console.log(`${a} is greater than ${b}`); }
else { console.log(`${b} is greater than ${a}`); }
(a>b)?console.log(`${a} is greater than ${b}`):console.log(`${b} is greater than ${a}`);
// 4.question
let num = parseInt(prompt('Enter number:', 0));
((num%2)==0)?console.log(`${num} is an even number`):console.log(`${num} is an odd number`);
