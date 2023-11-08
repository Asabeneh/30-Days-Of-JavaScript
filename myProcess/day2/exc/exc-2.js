// Exercise: Level 1
const butn = document.getElementsByClassName('mass');
let variable = '30 Days Of JavaScript';
let fang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let bec ='You cannot end a sentence with because because because is a conjunction';
let str = "";
// function myFun(){
//     alert('open the console please')
// }
// butn.addEventListener('click', myFun())



console.log(variable);
console.log(variable.length);
console.log(variable.toUpperCase());
console.log(variable.toLowerCase());
console.log(variable.substring(3));
console.log(variable.slice(3,-1));
console.log(variable.includes('Script'));
console.log(variable.split());
console.log(variable.split(' '));
console.log(fang.split(', '));
console.log(fang.replace("javaScript","python"));
console.log(fang.charAt(15));
console.log(fang.charCodeAt(11));
console.log(fang.indexOf('a'));
console.log(fang.lastIndexOf('a'));
console.log(bec.indexOf('because'));
console.log(bec.lastIndexOf('because'));
console.log(bec.search('because'));
console.log(variable.trim());
console.log(variable.startsWith('3'));
console.log(variable.endsWith('t'));
console.log(variable.match('a'));
console.log(str.concat( '30 Days of',  'JavaScript'));
console.log(variable.repeat(2));


//Exercise: Level 2

let partOne = ' There is no exercise better for the heart than reaching down and lifting people up. ';
let partTow = 'help'

console.log(`The quote ${partOne}  by John Holmes teaches us to ${partTow} one another`)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")











