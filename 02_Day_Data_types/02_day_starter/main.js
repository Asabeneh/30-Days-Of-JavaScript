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
console.log(challenge.split()) // turns into array as it is
console.log(challenge.split(" ")) // split can also be used to split where certain characters are
let bigCorps = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(bigCorps.split(","))
console.log(challenge.replace("JavaScript", "Python")) // replaces first argument with second
console.log(challenge.charAt(15)) // finds char at index
console.log(challenge.charCodeAt("j"))
console.log(challenge.charCodeAt("J")) // charCodeAt is case insensitive
console.log(challenge.indexOf("a")) // finds the first use of the argument
console.log(challenge.lastIndexOf("a")) // finds the last use of the argument
let sillySentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sillySentence.indexOf("because"))
console.log(sillySentence.search("because")) // can take a regex as argument
console.log(sillySentence.lastIndexOf("because"))
console.log(challenge.trim()) // still removes spaces at the beginning and the end of the string
console.log(challenge.startsWith("30")) // returns boolean value
console.log(challenge.endsWith("JavaScript")) // returns boolean value
console.log(challenge.match("a")) //gives an array
let thirty = "30"
console.log(thirty.concat(' Days of', ' JavaScript')) // used to join strings together
console.log(challenge.repeat(2)) // used to repeat x amount of times
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
// challenge three
let truthySentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi // g-means to search in the whole text, i - case insensitive
console.log(truthySentence.match(pattern).length)
let patternTwo = /because/gi // g-means to search in the whole text, i - case insensitive
console.log(sillySentence.match(patternTwo).length)
const regexSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(regexSentence.match(/\w+/g))
console.log(regexSentence.replace(/\W+/g, ""))
let salarySentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryArray = salarySentence.match(/\d+/g)
let annualSalary = (Number(salaryArray[0]) + Number(salaryArray[2])) * 12 + parseInt(salaryArray[1])
console.log(`big baller person gets €${annualSalary} annually!`)
