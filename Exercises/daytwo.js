/*
Exercise: Level 1

Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times


Exercise: Level 2


Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

Check if 'on' is found in both python and jargon

I hope this course is not full of jargon. Check if jargon is in the sentence.

Generate a random number between 0 and 100 inclusively.

Generate a random number between 50 and 100 inclusively.

Generate a random number between 0 and 255 inclusively.

Access the 'JavaScript' string characters using a random number.

Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'



Exercises: Level 3


'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Clean the following text and find the most frequent word (hint, use replace and regular expressions). */



// EXERCISES LEVEL 1


const challange = '30 Days Of JavaScript'
console.log(challange)
console.log(challange.length)

// 3 

const upperCase = challange.toUpperCase()
console.log(upperCase)

// may be  like 

console.log(challange.toUpperCase())

// or  

function makeUpper(a){
    const upper = a.toUpperCase()
    console.log(upper)
}
makeUpper(challange)

// 4

console.log(challange.toLowerCase())

//

function makeLower(a){
    const lower = a.toLowerCase()
    console.log(lower)
}

// 6

console.log(challange.substr(0,2)) // substr(firstindex, numberofcharacters) (cut)
console.log(challange.substring(3,7)) // substring(firstindex, stoppingindex) (cut)

// 8

console.log(challange.includes('Days')) // checking if 'Days' there

// 10

console.log(challange.split()) // Making it Array ["30 Days Of JavaScript"]
console.log(challange.split(' ')) // Array like ["30","Days","Of","JavaScript"]
console.log(challange.split('')) // ["3", "0", " ", "D", "a", "y", "s", " ", "O", "f", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// 11

const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', ')) // (7) ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 12

console.log(challange.charAt(15))

// 13

console.log(challange.replace('JavaScript','Pyhton')) // Changing 'JavaScript' with 'Pyhton' 

// 14

console.log(challange.charCodeAt(15)) // That's the ASCII Number of character of index 15 in challange variable

// 15

console.log(challange.indexOf('a'))

// 16

console.log(challange.lastIndexOf('a'))

// 17

const bullshitSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(bullshitSentence.indexOf('because'))


// 18 

console.log(bullshitSentence.lastIndexOf('because'))

// 19 

console.log(bullshitSentence.search('because'))

// 20

const whiteSpace = ' 30 Days Of JavaScript '
console.log(whiteSpace.trim(' ')) // or 
console.log(whiteSpace.trim())

// 21 

console.log(whiteSpace.startsWith(' ')) // true

// 22

console.log(whiteSpace.endsWith(' ')) // true

// 23

console.log(challange.match(/a/gi)) // to find all 'a' in the Challange 

// or I can declare a RegExp pattern 

let pattern = /love/gi 
console.log(challange.match(pattern))

// 24

let string1 = '30 Days Of'
let string2= 'JavaScript'
console.log(string1.concat(string2))

// or 

const myConcat = (a,b) => {
    return a.concat(b)
}

myConcat(string1,string2) 

// 

console.log(challange.repeat(20))




// EXERCISES LEVEL 2 


//1 


console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another. ")


//2 

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"")


//3

// ?? I guess I should return string to number? 

const number = '10'

const returner = (a) => {
    return console.log(parseInt(a))
}

returner(number) // 10

console.log(typeof returner(a))

//4 

const num = 9.8
console.log(Math.ceil(num))

//5 

const str1 = 'jargon'
const str2 = 'pyhton'

const myFunct = (a,b) => {
    let matchStr = a.match('on') 
    let matchStr2 = b.match('on') 

 if(matchStr.length >= 1 && matchStr2.length >= 1){
        return 'Both have it';
    }else{
        return 'One of dont have or both of dont have it';
    }
}

myFunct(str1,str2)

//7

const num = Math.random() * 251
// if integer
const num2 = Math.floor(Math.random()*251)

//8

function getRandomInt(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) 
}

getRandomInt(50,100)

//9

function getRandomInt(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) 
}

getRandomInt(0,255)

//10

const txt = 'JavaScript'

function getRandLetFromTxt (a) {
    const txtLong = a.length - 1
    const getRand = Math.floor(Math.random() * (txtLong + 1))
    return a.charAt(getRand)
}

getRandLetFromTxt(txt) // gets a random string character in text :)

//11 

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//12

const aTxt = 'You cannot end a sentence with because because because is a conjunction'
console.log(aTxt.indexOf('b')) // 31
console.log(aTxt.lastIndexOf('e')) // 54
console.log(aTxt.substr(31,23))


// Exercises: Level 3

//1 

const anyTxt = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(anyTxt.match(/love/gi))

//2

console.log(aTxt.match(/because/gi))


// that was unnecessarily hard to find how to escape $ but it's \ i guess

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


console.log(sentence.replace(/%|@|#|&|\$|!|;/gim,''))

// 4 

const myTxt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const sumSalary = (a) => {
    let arr = a.match(/\d{2,10}/gi)
    let summary = 0
    const strToNum = arr.map((i) => Number(i));
    for (i=0; i <= arr.length - 1; i++) {
       summary += strToNum[i] }
     return summary
}
sumSalary(myTxt) // 30000


