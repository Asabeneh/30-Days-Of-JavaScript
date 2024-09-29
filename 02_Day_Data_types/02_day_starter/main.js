// this is your main.js script
let stroka = '30 Days Of JavaScript';
console.log(stroka); //1
console.log(stroka.length) ; //2
console.log(stroka.toUpperCase()) ;//etc
console.log(stroka.toLowerCase());
console.log(stroka.substring(3,7));
console.log(stroka.substring(0,2));
console.log(stroka.includes('Script'));
console.log(stroka.split());
console.log(stroka.split(', '));

let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let array=str.split(', ');
console.log(array);


console.log(stroka.replace('JavaScript', 'Python'));

console.log(stroka.charAt(15));
console.log(stroka.charCodeAt(stroka.indexOf('J')));

console.log(stroka.indexOf('a'));
console.log(stroka.lastIndexOf('a'));

let stroka2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(stroka2.indexOf('because'));
console.log(stroka2.lastIndexOf('because'));
console.log(stroka2.search('because'));

console.log(stroka.trim());
console.log(stroka.startsWith('30'));
console.log(stroka.endsWith('JavaScript'));

let pattern1 = /a/g;
console.log(stroka.match(pattern1));

let s='Of';
let st='';
console.log(st.concat('30 Days ', s, ' JavaScript'));
console.log(stroka.repeat(2));
