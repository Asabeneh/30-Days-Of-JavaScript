// this is your main.js script

// ### Exercise: Level 1

let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(0, 2));
console.log(challenge.substr(3, 4));
console.log(challenge.substr(3, 18));

console.log(challenge.includes("Script"));

console.log(challenge.split());
console.log(challenge.split(" "));

let testString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(testString.split(", "));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let because =
  "You cannot end a sentence with because because because is a conjunction";
console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));

let removeWhitespace = "\t30 Days Of JavaScript\t";
console.log(removeWhitespace);
console.log(removeWhitespace.trim());

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));

const regex = /a/g;
const search = challenge.match(regex);
console.log(search);

const firstPart = "30 Days of";
const secondPart = "JavaScript";
console.log(firstPart.concat(secondPart));

console.log(challenge.repeat(2));
