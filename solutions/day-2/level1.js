// 1.question
let challenge = '30 Days Of JavaScript';
// 2.question
console.log(challenge);
// 3.question
console.log(challenge.length);
// 4.question
challenge.toUpperCase();
// 5.question
challenge.toLowerCase();
// 6.question
let firstWord = challenge.substr(0, 2);
let firstWord1 = challenge.substring(0, 2);
console.log(firstWord);
console.log(firstWord1);
// 7.question
let restWord = challenge.slice(3);
console.log(restWord);
// 8.question
console.log(challenge.includes('Script'));
// 9.question 10.question
let arr = challenge.split(' ');
console.log(arr);
// 11.question
let itCompany = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',');
console.log(itCompany);
// 12.question
console.log(challenge.replace('JavaScript', 'Python'));
// 13.question
console.log(challenge.charAt(15));
// 14.question
console.log(challenge.charCodeAt('J'));
// 15.question
console.log(challenge.indexOf(challenge));
// 16.question
console.log(challenge.lastIndexOf(challenge));
// 17.question
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
// 18.question
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
// 19.question
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
// 20.question
console.log(challenge.trim(challenge));
// 21.question
console.log(challenge.startsWith('30'));
// 22.question
console.log(challenge.endsWith('JavaScript'));
// 23.question
console.log(challenge.matchAll('a'));
// 24.question
console.log('30 Days Of '.concat('JavaScript'));
// 25.question
let rep = challenge.repeat(2)
console.log(rep);
