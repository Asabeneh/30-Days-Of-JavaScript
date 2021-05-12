// this is your main.js script
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3, 4))
console.log(challenge.substring(3))
console.log(challenge.includes("script"))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))
let bigCorps = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(bigCorps.split(","))
console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("j"))
console.log(challenge.charCodeAt("J"))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
let sillySentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sillySentence.indexOf("because"))
console.log(sillySentence.search("because"))
console.log(sillySentence.lastIndexOf("because"))
console.log(challenge.trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("JavaScript"))
console.log(challenge.match("a"))
let thirty = "30"
console.log(thirty.concat(' Days of', ' JavaScript'))
console.log(challenge.repeat(2))
// challenge two
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
console.log(typeof '10')
console.log(typeof 10)
console.log(typeof parseInt('10'))
console.log(parseFloat('9.8'))
console.log(Number('9.8'))
console.log(parseInt('9.8') + 1)
console.log(Number('9.8'))
let smolArray = ["jargon", "python"]
smolArray.forEach(hasOnFunction)
function hasOnFunction(value, index, array) {
  console.log(`does ${value} include on`)
  console.log(value.includes("on"))
}
let sentence = "I hope this course is not full of jargon."
console.log(sentence.includes("jargon"))
let randomNum0_100 = parseInt(Math.random() * 101)
console.log(randomNum0_100)
let randomNum50_100 = Math.floor(Math.random() * 51) + 50
console.log(randomNum50_100)
let randomNum0_250 = Math.round(Math.random() * 251)
console.log(randomNum0_250)
console.log("JavaScript".charAt(parseInt(Math.random() * 11)))
let escapeNums = "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125"
console.log(escapeNums)
console.log(sillySentence.substr(31, 23))


