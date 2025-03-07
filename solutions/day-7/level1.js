// 1.question
function fullName() {
     console.log(`Satya surendra`);
}
fullName();
// 2.question
function fullName(fullName,lastName) {
     return fullName + ' ' + lastName;
}
console.log(fullName('satya', 'surendra'));

// 3.question
function addNumbers(a, b) {
     return a + b;
}
console.log(addNumbers(1, 2));
// 4.question
function areaOfRectangle(l,b) {
     return l * b;
}
// 5.question
function perimeterOfRectangle(l, b) {
     return 2(l + b);
}
// 6.question
function volumeOfRectPrism(l, b, h) {
     return l * b * h;
}
// 7.question
function areaOfCircle(r) {
     return 3.14 * r * r;
}
// 8.question
function circumOfCircle(r) {
     return 2 * 3.14 * r;
}
// 9.question
function density(mass, volume) {
     return mass / volume;
}
// 10.question
function speed(d, t) {
     return d / t;
}
// 11.question
function weight(mass,gravity) {
     return mass * gravity;
}
// 12.question
function convertCelsiusToFahrenheit(c) {
     return (c * 9 / 5) + 32;
}
// 13.question
function IBM(weight, height) {
     let ibm = weight / Math.pow(height, 2);
     if (ibm < 18.5) {
          console.log('Underweight');
     } else if (ibm >= 18.5 && ibm < 24.9) {
          console.log('Normal weight');
     } else if (ibm >= 25 && ibm < 29.9) {
          console.log('Overweight');
     } else {
          console.log(`Obese`);
     }
}
// 14.question

// 15.question
function findMax(a, b, c) {
     return Math.max(a, b, c);
}
