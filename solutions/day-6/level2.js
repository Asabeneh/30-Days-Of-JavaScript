// 1.question
let code = '0123456789abcdefghijklnopqrstuvwxyz';
let id = '';
let rand = Math.floor(Math.random() * code.length);
for (let i = 0; i < rand; i++){
     let rand = Math.floor(Math.random() * code.length);
     id+=code[rand]
}
console.log(id);
// 2.question
let hexcode = '0123456789abcdef';
let hex = '#';
for (i = 0; i < 6; i++){
     let rand = Math.floor(Math.random() * hexcode.length);
     hex += hexcode[rand]; 
}
console.log(hex);
// 3.question
function rgb() {
     return Math.floor(Math.random() * 255);
}
console.log(`rgb(${rgb()},${rgb()},${rgb()})`);
// 4.question

const countries = [
     'Albania',
     'Bolivia',
     'Canada',
     'Denmark',
     'Ethiopia',
     'Finland',
     'Germany',
     'Hungary',
     'Ireland',
     'Japan',
     'Kenya'
];
let newCountries = [];
for (const iterator of countries) {
     newCountries.push(iterator.toUpperCase());
}
console.log(newCountries);
// 5.question
let countryLen = [];
for (const iterator of countries) {
     countryLen.push(iterator.length);
}
console.log(countryLen);
// 6.question
let newArr = [];
for (const iterator of countries) {
     let temp = []
     temp.push(iterator);
     temp.push(iterator.slice(0,3).toUpperCase());
     temp.push(iterator.length);
     newArr.push(temp);
}
console.log(newArr);
// 7.question
let conLand = [];
for (const iterator of countries) {
     if (iterator.includes('land')) {
          conLand.push(iterator)
     }
}
console.log(conLand);
// 8.question
let conIa = [];
for (const iterator of countries) {
     if (iterator.includes('ia')) {
          conIa.push(iterator);
     }
}
console.log(conIa);
// 9.question
let max = 0;
let maxi = 0;
for (let i = 0; i < countries.length; i++){
     if (max < countries[i].length) {
          max = countries[i].length;
          maxi = i;
     }
}
console.log(countries[maxi]);
// 10.question
let five = [];
for (const iterator of countries) {
     if (iterator.length == 5) {
          five.push(iterator);
     }
}
console.log(five);
// 11.question
const webTechs = [
     'HTML',
     'CSS',
     'JavaScript',
     'React',
     'Redux',
     'Node',
     'MongoDB'
];
max = 0;
maxi = 0;
for (let i = 0; i < webTechs.length; i++){
     if (max < webTechs[i].length) {
          max = webTechs[i].length;
          maxi = i;
     }
}
console.log(webTechs[maxi]);
// 12.question
 newArr = [];
for (const iterator of webTechs) {
     let temp = []
     temp.push(iterator);
     temp.push(iterator.length);
     newArr.push(temp);
}
console.log(newArr);
// 13.question
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
console.log(mernStack.join(','));
// 14.question
for (const iterator of webTechs) {
     console.log(iterator);
}
// 15.question
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let revFruit = [];
for (i = fruits.length-1; i >=0;i--) {
     revFruit.push(fruits[i]);
}
fruits = [...revFruit]
console.log(fruits);
// 16.question
const fullStack = [
     ['HTML', 'CSS', 'JS', 'React'],
     ['Node', 'Express', 'MongoDB']
];
for (const iterator of fullStack) {
     for (const i of iterator) {
          console.log(i);
     }
}

