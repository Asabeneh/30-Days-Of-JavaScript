# Day 2 - Datatype
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercise-level-1)
- ### [Exercise:Level 2](#exercise-level-2)
- ### [Exercise:Level 3](#exercise-level-3) <hr>

 #### [Home](../README.md) | [<< Day 1](./01_day_introdiction.md) | [Day 3 >>](./03_day_operators.md)


## Exercise Solutions

### Exercise  Level 1
1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

```js
let challenge = '30 days of javascript'
```


2. Print the string on the browser console using console.log()

```js
challenge = '30 days of javascript'
console.log(challenge)
```


3. Print the length of the string on the browser console using console.log()

```js
challenge = '30 days of javascript'
console.log(challenge.length)
```


4. Change all the string characters to capital letters using toUpperCase()
method

```js
challenge = '30 days of javascript'
console.log(challenge.toUpperCase())
```


5. Change all the string characters to lowercase letters using toLowerCase() method

```js
challenge = '30 days of javascript'
console.log(challenge.toLowerCase())
```


6. Cut (slice) out the first word of the string using substr() or substring() method

```js
challenge = '30 days of javascript'
console.log(challenge.substring(3, 5))
```

7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

```js
challenge = '30 days of javascript'
let newChallenge = challenge.slice(3,10)
console.log(newChallenge)
```


8. Check if the string contains a word Script using includes() method

```js
challenge = '30 days of javascript'
console.log(challenge.includes('script'))
```


9. Split the string into an array using split() method

```js
challenge = '30 days of javascript'
console.log(challenge.split(""))
```


10. Split the string 30 Days Of JavaScript at the space using split() method

```js
challenge = '30 days of javascript'
console.log(challenge.split(" "))
```


11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

```js
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon'
console.log(companies.split(`,`))
```

12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

```js
challenge = "30 days of javascript"
console.log(challenge.replace("javascript","phyton"))
```


13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

```js
challenge = "30 days of javascript"
console.log(challenge.charAt(15))
```


14. What is the character code of J in '30 Days Of JavaScript' string using 
charCodeAt()

```js
challenge = "30 days of javascript"
console.log(challenge.charCodeAt("j"))
```


15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

```js
challenge = "30 days of javascript"
console.log(challenge.indexOf("a"))
```


16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

```js
challenge = "30 days of javascript"
console.log(challenge.lastIndexOf("a"))
```

17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

```js
let sentence = "You cannot end a sentence with because because is a conjunction."
console.log(challenge.indexOf("because"))
```

18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

```js
sentence = "You cannot end a sentence with because because is a conjunction."
console.log(challenge.lastIndexOf("because"))
```


19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

```js
sentence = "You cannot end a sentence with because because is a conjunction."
console.log(challenge.search("because"))
```


20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

```js
challenge = "30 Days Of JavaScript       "
console.log(challenge.trim())
```


21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true

```js
challenge = "30 Days Of JavaScript"
console.log(challenge.startsWith(30))
```


22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

```js
challenge = "30 Days Of JavaScript"
console.log(challenge.endsWith("JavaScript"))
```


23. Use match() method to find all the a’s in 30 Days Of JavaScript

```js
challenge = "30 Days Of JavaScript"
console.log(challenge.match("a"))
```

24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string,
'30 Days Of JavaScript'

```js
let stringOne = "30 Days Of "
let stringTwo = "JavaScript"
console.log(stringOne.concat(stringTwo))
```

25. Use repeat() method to print 30 Days Of JavaScript 2 times

```js
challenge = "30 Days Of JavaScript"
console.log(challenge.repeat(2))
```


## Exercise Level 2

1. Using console.log() print out the following statement:

```js
console.log(`The quote 'There is no exercise better for the heart than reaching
down and lifting people up.' by John Holmes teaches us to help one another.`)
```

2. Using console.log() print out the following quote by Mother Teresa: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

```
console.log(`Love is not patronizing and charity isn't about pity, it is about
love. Charity and love are the same -- with charity you give love, so don't 
just give money but reach out your hand instead.`)
```

3. Using console.log() print out the following quote by Mother Teresa:

```js
let number = "10"
console.log(number===10)

let number1 = 10
console.log(number1===10)
```

4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

```js
let parseNumber =parseFloat(9.8)
console.log(number===10)

let ceilNumber = Math.ceil(parseFloat(9.8))
console.log(number1===10)
```
5. Check if 'on' is found in both python and jargon

```js
let string = "phyton"
let string1 ="jargon"
console.log(string.includes("on") && string1.includes("on"))
```

6. I hope this course is not full of jargon. Check if jargon is in the sentence.

```js
let str = "I hope this course is not full of jargon."
console.log(str.includes("jargon"))
```

7. Generate a random number between 0 and 100 inclusively.

```js
console.log(parseInt(Math.random()*101))
```

8. Generate a random number between 50 and 100 inclusively.

```js
console.log(parseInt(Math.random()*51+50))
```

9. Generate a random number between 0 and 255 inclusively.

```js
console.log(parseInt(Math.random()*255))
```

10. Access the 'JavaScript' string characters using a random number.

```js
let word="javasicript"
let n =parseInt(Math.random()*11)
console.log(word[n])
```
11. Use console.log() and escape characters to print the following pattern.

```
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
```

```js
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 ")
```

12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

```js
let statement = `You cannot end a sentence with because because because 
is a conjunction`
console.log(statement.replace("because",""))
```



## Exercise Level 3

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

```js
let strng =`Love is the best thing in this world. Some found their love and
some are still looking for their love.`
let count = strng.match(/love/gi)||[].length
console.log(count)
```

2. Use match() to count the number of all because in the following sentence: 'You cannot end a sentence with because because because is a conjunction'

```js
let sentence1 = `You cannot end a sentence with because because because
is a conjunction`
let count1 = sentence1.match(/because/gi)||[].length
console.log(count1)
```
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

```
let messySentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& 
@emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n
any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? 
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of
tea&ching`;
```
```js

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
```

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

```js

let text =`He earns 5000 euro from salary per month, 10000 euro annual 
bonus, 15000 euro online courses per month.`


let pattern =/\d+/g
let numbers = text.match(pattern)
numbers = numbers.map(Number);

let montlySalary = numbers[0]
let bonus = numbers[1]
let montlyCourses = numbers[2]

console.log(`Annual income is ${montlySalary*12 +
bonus + montlyCourses *12} euro `)
```

 #### [Home](../README.md) | [<< Day 1](./01_day_introdiction.md) | [Day 3 >>](./03_day_operators.md)



