// this is your main.js script
// level 1:

// number i
const firstName = 'John';
const lastName = 'Doe';
const country = 'United States';
const city = 'california';
const age = 20;
const isMarried = false;
const year = 2009;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// number2

console.log(typeof('10') ==  10);

// number3

console.log(parseInt('9.8') == 10);

// number4

// true
const a = 5 > 2;
const b = 10 > 5;
const c = 154843 > 2;
// false
const d = 6 < 5;
const e = 7 < 5;
const f = 8 < 5;

console.log(a, b, c, d, e, f);

// number5
console.log(4 > 3); // true
console.log(4 >= 3); //true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false

console.log('python'.length == 'jargon'.length); //true

// number 6
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

console.log('dragon.'.includes('on') && 'python'.includes('on'));

// dates

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMinutes());


level 2

number 1
let base = window.prompt('Enter base:');
let height = window.prompt('Enter height:');
let result = (base * height) / 2;
window.alert(`The area of the triangle is ${result}`);

number 2

let side_a = window.prompt('Enter side a:');
let side_b = window.prompt('Enter side b:');
let side_c = window.prompt('Enter side c:');
 
let parameter = side_a  + side_b  + side_c;
window.alert(`The perimeter of the triangle is ${parameter}`);

number 3

























