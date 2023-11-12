//----------------------------day2_level1 1.exercise-------------------------\\
// Declare a variable named challenge and assign it to an initial 
value '30 Days Of JavaScript'.

let challenge = '30 days of javascript'

//----------------------------day2_level1 2.exercise-------------------------\\
// Print the string on the browser console using console.log()

challenge = '30 days of javascript'
console.log(challenge)

//----------------------------day2_level1 3.exercise-------------------------\\
// Print the length of the string on the browser console using console.log()

challenge = '30 days of javascript'
console.log(challenge.length)

//----------------------------day2_level1 4.exercise-------------------------\\
// Change all the string characters to capital letters using toUpperCase()
method

challenge = '30 days of javascript'
console.log(challenge.toUpperCase())

//----------------------------day2_level1 5.exercise-------------------------\\
// Change all the string characters to lowercase letters using toLowerCase()
method

challenge = '30 days of javascript'
console.log(challenge.toLowerCase())


//----------------------------day2_level1 6.exercise-------------------------\\
// Cut (slice) out the first word of the string using substr() or substring()
method

challenge = '30 days of javascript'
console.log(challenge.substring(3, 5))


//----------------------------day2_level1 7.exercise-------------------------\\
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

challenge = '30 days of javascript'
let newChallenge = challenge.slice(3,10)
console.log(newChallenge)

//----------------------------day2_level1 8.exercise-------------------------\\
// Check if the string contains a word Script using includes() method

challenge = '30 days of javascript'
console.log(challenge.includes('script'))

//----------------------------day2_level1 9.exercise-------------------------\\
// Split the string into an array using split() method

challenge = '30 days of javascript'
console.log(challenge.split(""))

//----------------------------day2_level1 10.exercise------------------------\\
// Split the string 30 Days Of JavaScript at the space using split() method

challenge = '30 days of javascript'
console.log(challenge.split(" "))

//----------------------------day2_level1 11.exercise------------------------\\
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string
at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon'
console.log(companies.split(`,`))

//----------------------------day2_level1 12.exercise------------------------\\
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

challenge = "30 days of javascript"
console.log(challenge.replace("javascript","phyton"))

//----------------------------day2_level1 13.exercise------------------------\\
// What is character at index 15 in '30 Days Of JavaScript' string? 
Use charAt() method.

challenge = "30 days of javascript"
console.log(challenge.charAt(15))

//----------------------------day2_level1 14.exercise------------------------\\
// What is the character code of J in '30 Days Of JavaScript' string using 
charCodeAt()

challenge = "30 days of javascript"
console.log(challenge.charCodeAt("j"))

//----------------------------day2_level1 15.exercise------------------------\\
// Use indexOf to determine the position of the first occurrence 
of a in 30 Days Of JavaScript

challenge = "30 days of javascript"
console.log(challenge.indexOf("a"))

//----------------------------day2_level1 16.exercise------------------------\\
// Use lastIndexOf to determine the position of the last occurrence of a in
30 Days Of JavaScript.

challenge = "30 days of javascript"
console.log(challenge.lastIndexOf("a"))

//----------------------------day2_level1 17.exercise------------------------\\
// Use indexOf to find the position of the first occurrence of the word
because in the following sentence:'You cannot end a sentence with because
because because is a conjunction'

let sentence = "You cannot end a sentence with because because is a conjunction."
console.log(challenge.indexOf("because"))

//----------------------------day2_level1 18.exercise------------------------\\
// Use lastIndexOf to find the position of the last occurrence of the word 
because in the following sentence:'You cannot end a sentence with because
because because is a conjunction'

sentence = "You cannot end a sentence with because because is a conjunction."
console.log(challenge.lastIndexOf("because"))

//----------------------------day2_level1 19.exercise------------------------\\
// Use search to find the position of the first occurrence of the word because 
in the following sentence:'You cannot end a sentence with because because
because is a conjunction'

sentence = "You cannot end a sentence with because because is a conjunction."
console.log(challenge.search("because"))

//----------------------------day2_level1 20.exercise------------------------\\
// Use trim() to remove any trailing whitespace at the beginning and the end 
of a string.E.g ' 30 Days Of JavaScript '.

challenge = "30 Days Of JavaScript       "
console.log(challenge.trim())

//----------------------------day2_level1 21.exercise------------------------\\
// Use startsWith() method with the string 30 Days Of JavaScript and make the 
result true

challenge = "30 Days Of JavaScript"
console.log(challenge.startsWith(30))

//----------------------------day2_level1 22.exercise------------------------\\
// Use endsWith() method with the string 30 Days Of JavaScript and make the 
result true

challenge = "30 Days Of JavaScript"
console.log(challenge.endsWith("JavaScript"))

//----------------------------day2_level1 23.exercise------------------------\\
// Use match() method to find all the a’s in 30 Days Of JavaScript

challenge = "30 Days Of JavaScript"
console.log(challenge.match("a"))

//----------------------------day2_level1 24.exercise------------------------\\
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string,
'30 Days Of JavaScript'

let stringOne = "30 Days Of "
let stringTwo = "JavaScript"
console.log(stringOne.concat(stringTwo))

//----------------------------day2_level1 25.exercise------------------------\\
// Use repeat() method to print 30 Days Of JavaScript 2 times

challenge = "30 Days Of JavaScript"
console.log(challenge.repeat(2))


//____________________________starting_exercise_level2_______________________\\


//----------------------------day2_level2 1.exercise-------------------------\\
// Using console.log() print out the following statement:

console.log("The quote 'There is no exercise better for the heart than reaching
down and lifting people up.' by John Holmes teaches us to help one another.")

//----------------------------day2_level2 2.exercise-------------------------\\
// Using console.log() print out the following quote by Mother Teresa:

console.log("Love is not patronizing and charity isn't about pity, it is about
love. Charity and love are the same -- with charity you give love, so don't 
just give money but reach out your hand instead.")

//----------------------------day2_level2 3.exercise-------------------------\\
// Using console.log() print out the following quote by Mother Teresa:

let number = "10"
console.log(number===10)

let number1 = 10
console.log(number1===10)

//----------------------------day2_level2 4.exercise-------------------------\\
// Check if parseFloat('9.8') is equal to 10 if not make it exactly 
equal with 10.

let parseNumber =parseFloat(9.8)
console.log(number===10)

let ceilNumber = Math.ceil(parseFloat(9.8))
console.log(number1===10)

//----------------------------day2_level2 5.exercise-------------------------\\
// Check if 'on' is found in both python and jargon

let string = "phyton"
let string1 ="jargon"
console.log(string.includes("on") && string1.includes("on"))

//----------------------------day2_level2 6.exercise-------------------------\\
// I hope this course is not full of jargon. Check if jargon is in the sentence.

let str = "I hope this course is not full of jargon."
console.log(str.includes("jargon"))

//----------------------------day2_level2 7.exercise-------------------------\\
// Generate a random number between 0 and 100 inclusively.

console.log(parseInt(Math.random()*101))

//----------------------------day2_level2 8.exercise-------------------------\\
// Generate a random number between 50 and 100 inclusively.

console.log(parseInt(Math.random()*51+50))

//----------------------------day2_level2 9.exercise-------------------------\\
// Generate a random number between 0 and 255 inclusively.

console.log(parseInt(Math.random()*255))

//----------------------------day2_level2 10.exercise------------------------\\
// Access the 'JavaScript' string characters using a random number.

let word="javasicript"
let n =parseInt(Math.random()*11)
console.log(word[n])

//----------------------------day2_level2 11.exercise------------------------\\
// Use console.log() and escape characters to print the following pattern.

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 ")

//----------------------------day2_level2 12.exercise------------------------\\
// Use substr to slice out the phrase because because because from the 
following sentence:'You cannot end a sentence with because because because is
a conjunction'

let statement = "You cannot end a sentence with because because because 
is a conjunction"
console.log(statement.replace("because",""))



//____________________________starting_exercise_level3_______________________\\



//----------------------------day2_leve3 1.exercise--------------------------\\
// 'Love is the best thing in this world. Some found their love and some are
still looking for their love.' Count the number of word love in this sentence.

let strng ="Love is the best thing in this world. Some found their love and
some are still looking for their love."
let count = strng.match(/love/gi)||[].length
console.log(count)

//----------------------------day2_leve3 2.exercise--------------------------\\
// Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'

let sentence1 = "You cannot end a sentence with because because because
is a conjunction"
let count1 = sentence1.match(/because/gi)||[].length
console.log(count1)

//----------------------------day2_leve3 3.exercise--------------------------\\
// Clean the following text and find the most frequent word 
(hint, use replace and regular expressions).

let messySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& 
@emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n
any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? 
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of
tea&ching';

let cleanSentence = messySentence.replace(/[^a-zA-Z ]/g, " ");
let words = cleanSentence.split(' ');
let wordCounts = {};
for(let i = 0; i < words.length; i++) {
    if(words[i] !== '') {
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }
}

let maxWord = '';
let maxCount = 0;
for(let word in wordCounts) {
    if(wordCounts[word] > maxCount) {
        maxCount = wordCounts[word];
        maxWord = word;
    }
}

console.log(`Most frequent word is '${maxWord}' with count ${maxCount}`);

//----------------------------day2_leve3 4.exercise--------------------------\\
// Calculate the total annual income of the person by extracting the numbers
from the following text. 'He earns 5000 euro from salary per month, 10000 euro
annual bonus, 15000 euro online courses per month.'

let text ='He earns 5000 euro from salary per month, 10000 euro annual bonus,
15000 euro online courses per month.'

let pattern =/\d+/g
let numbers = text.match(pattern)
numbers = numbers.map(Number);

let montlySalary = numbers[0]
let bonus = numbers[1]
let montlyCourses = numbers[2]

console.log(`Annual income is ${montlySalary*12 +
bonus + montlyCourses *12} euro `)







