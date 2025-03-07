// 1.question
let base = parseInt(prompt('Enter base:', 0));
let height = parseInt(prompt('Enter height:', 0));
let area = 0.5 * base * height;
alert(area);
// 2.question
let a = parseInt(prompt('Enter side a:', 0));
let b = parseInt(prompt('Enter side b:', 0));
let c = parseInt(prompt('Enter side c:', 0));
let perimeter = a + b + c;
alert(perimeter);
// 3.question
let l = parseInt(prompt('Enter the length:', 0));
let w = parseInt(prompt('Enter the width:', 0));
let rectArea = l * w;
alert(rectArea);
let rectPerimeter = 2 * (l + w);
alert(rectPerimeter);
// 4.question
let radius = parseInt(prompt('Enter the radius:', 0));
let circleArea = 3.14 * r * radius;
alert(circleArea);
let circlePerimeter = 2 * 3.14 * radius;
alert(circlePerimeter);
// 5.question
alert('Slope of y=2x-2 is :' + 2);
// 6.question
function findSlope(x1, y1, x2, y2) {
     let m = (y2 - y1) / (x2 - x1);
     alert(m)
}
findSlope(2, 2, 6, 10);
// 7.question I don't understand the question so iam skipping it
// 8.question
// 9.question
let hrs = parseInt(prompt('Enter hours:', 0));
let rate = parseInt(prompt('Enter rate'), 0);
alert(`Your weekly earning is ${hrs * rate}`);
// 10.question
let name = 'satya';
if (name.lenth > 7) {
     alert('Your name is long');
} else { alert('Your name is short'); }
// 11.question
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if (firstName.length > lastName.length) {
     alert(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}
// 12.question
let myAge = 250
let yourAge = 25
alert(`I am ${myAge - yourAge} years older than you`);
// 13.question
let drive = parseInt(prompt('Enter your birth year', 0));
let now = new Date().getFullYear();
if ((now - drive) > 18) {
     alert(`You are ${now - drive} . You are old enough to drive`);
} else {
     alert(`You are ${now - drive}. You will be allowed to drive after ${18 - now - drive} years`);
}
// 14.question

// 15.question
let present = new Date();
let year = present.getFullYear(),
     month = present.getMonth(),
     date = present.getDate(),
     hours = present.getHours(),
     min = present.getMinutes();
if ((month + 1) < 10) { (month + 1) = '0+(month+1)'; }
if ((date + 1) < 10) { (date + 1) = '0+(date+1)'; }
if ((hours + 1) < 10) { (hours + 1) = '0+(date+1)'; }
if ((min + 1) < 10) { (min + 1) = '0+(date+1)'; }
alert(`${year}-${month}-${date} ${hours}:${min}`);
alert(`${date}-${month}-${year} ${hours}:${min}`);
alert(`${date}/${month}/${year} ${hours}:${min}`);