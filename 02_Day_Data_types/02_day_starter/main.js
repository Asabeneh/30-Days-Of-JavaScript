// this is your main.js script
let challenge = "30 Days Of Javascript";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0, 2));
// console.log(challenge.substring(3));
// console.log(challenge.includes("Script"));
// console.log(challenge.split());
// console.log(challenge.split(" "));
// console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","));
// console.log(challenge.replace("Javascript", "Python"));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt("J"));
// console.log(challenge.indexOf("a"));
// console.log(challenge.lastIndexOf("a"));
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".indexOf("because")
// );
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
//     "because"
//   )
// );
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".search(
//     "because"
//   )
// );
// console.log(" 30 Days Of Javascript ".trim(" "));
// console.log(challenge.startsWith("30"));
// console.log(challenge.endsWith("Javascript"));
// console.log(challenge.match(/a/gi));
// let challenge2 = "30 Days of";
// let challenge3 = "Javascript";
// console.log(challenge2.concat(" ", challenge3))
// console.log(challenge.repeat(3))

// console.log(`The quote 'There is no exercise better for the heart than reaching down and lifing people up.' by John Holmes teaches us to help one another.`)

// console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// `);
// console.log(parseFloat("10") === 10);
// console.log("python".includes("on") && "jargon".includes("on"))
// // console.log("I hope this course is not full of jargon".includes("jargon"))
// console.log(`1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125`);
// console.log(Math.floor(Math.random() * (100 - 50) + 50));
// console.log(Math.floor(Math.random() * 256));
// console.log("Javascript".charAt(Math.floor(Math.random() * "Javascript".length)));
let text =
  "You cannot end a sentence with because because because in a conjunction";
// console.log(text.substring(text.indexOf("because"), text.lastIndexOf("because")));
// console.log(text.lastIndexOf("because"));
let text2 = text.split(" ");
text2.splice(text2.indexOf("because"), 3);
console.log(text2.join(" "));

let loveText =
  "Love is the best thing in this world. Some found their love and some are still looking for their love";

let counter = 0;
loveText.split(" ").forEach((element) => {
  element.toLowerCase() === "love" ? counter++ : undefined;
});
console.log(counter);
console.log(text.match(/because/gi).length);
let income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let incomechunks = income.split(",");
let totalIncome = 0;
incomechunks.forEach((chunk) => {
  if (chunk.includes("month")) {
    chunk
      .trim()
      .split(" ")
      .forEach((chunksalary) => {
        if (+chunksalary > 0) {
          totalIncome += chunksalary * 12;
        }
      });
  }
  if (chunk.includes("annual")) {
    chunk
      .trim()
      .split(" ")
      .forEach((chunksalary) => {
        if (+chunksalary > 0) {
          totalIncome += +chunksalary;
        }
      });
  }
});
console.log(totalIncome);
