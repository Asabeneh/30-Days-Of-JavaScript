// this is your main.js script
// Exercise 1
const challenge = "30 Days Of Javascript";
const str1 = "30 Days Of";
const str2 = " Javascript";
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.substring(0, 2));
console.log(challenge.slice(3));
console.log(challenge.includes("script"));
console.log(challenge.split(" "));
console.log(companies.split(","));
console.log(challenge.replace("Javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));
console.log(challenge.trim(" "));
console.log(challenge.startsWith(30));
console.log(challenge.endsWith("Javascript"));
console.log(challenge.match("a"));
console.log(str1.concat(str2));
console.log(challenge.repeat(2));

// Excercise 2
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

let num = "10";
console.log(typeof 10 === typeof +"10");
console.log(parseInt(Math.round(+"9.8")) === 10);
console.log("Python".includes("on") && "jargon".includes("on"));
const checkSentence = "I hope this course is not full of jargon.";
console.log(checkSentence.includes("jargon"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
console.log(Math.floor(Math.random() * (255 + 1)));
const js = "JavaScript";
const random = Math.floor(Math.random() * js.length + 1);
console.log(js.charAt(random), random);
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n5 1 5 25 125");

const string = `You cannot end a sentence with because because because is a conjunction`;

console.log(string.substring(30, 54));

// Exercise 3
const loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(loveSentence.split("love").length);
let pattern = /because/gi;
console.log(string.match(pattern).length);
const sentence3 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const pattern2 = /\d+/g;
const sentenceRegex = sentence3.match(pattern2);
console.log(+sentenceRegex[0] + +sentenceRegex[1] + +sentenceRegex[2]);
