console.log("Day 2: Data types");
console.log("Exercise: Level 1");

let challenge = " 30 Days Of Javascript ";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice(0, 2));
console.log(challenge.slice(3, 21));
console.log(challenge.includes("script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

console.log(challenge.replace("Javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentenceA =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentenceA.indexOf("because"));
console.log(sentenceA.lastIndexOf("because"));
console.log(sentenceA.search("because"));

console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Javascript"));
console.log(challenge.match("a"));
console.log(challenge.match(/a/gi)); // g = global, i = case insensitive => matches all a's in the string regardless of case.
console.log("30 Days of".concat(" Javascript"));
console.log(challenge.repeat(2));

console.log("Exercise: Level 2");

let sentenceB =
  "There is no exercise better for the heart than reaching down and lifting people up.";

console.log(sentenceB);

let sentenceC =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(sentenceC);

console.log(typeof "10" == 10);
console.log(parseInt("10") == 10);
console.log(parseFloat("9.8" === 10));
console.log(Math.round(parseFloat("9.8")) === 10);

let sentenceD = "python jargon";
console.log(sentenceD.indexOf("on") !== -1);
