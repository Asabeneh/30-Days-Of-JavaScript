<div align="center">
  <h1> जावास्क्रिप्ट के 30 दिन: डेटा प्रकार</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> January, 2020</small>
  </sub>
</div>
</div>

[<< पहला दिन](../readMe.md) | [तीसरा दिन >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

![जावास्क्रिप्ट के तीस दिन](../images/banners/day_1_2.png)

- [📔 दूसरा दिन](#-दिन-2)
- [डेटा प्रकार] (# डेटा-प्रकार)
- [आदिम डेटा प्रकार](#आदिम-डेटा-प्रकार)
- [गैर-आदिम डेटा प्रकार](#गैर-आदिम-डेटा-प्रकार)
- [नंबर](#नंबर)
- [संख्या डेटा प्रकार घोषित करना](#घोषणा-संख्या-डेटा-प्रकार)
- [गणित वस्तु] (# गणित-वस्तु)
- [रैंडम नंबर जेनरेटर](#रैंडम-नंबर-जनरेटर)
- [स्ट्रिंग्स] (# स्ट्रिंग्स)
- [स्ट्रिंग संयोजन](#स्ट्रिंग संयोजन)
- [अतिरिक्त ऑपरेटर का उपयोग करके जोड़ना](#श्रृंखला-उपयोग-अतिरिक्त-ऑपरेटर)
- [लॉन्ग लिटरल स्ट्रिंग्स](#लॉन्ग-लिटरल-स्ट्रिंग्स)
- [एस्केप सीक्वेंस इन स्ट्रिंग्स](#एस्केप-सीक्वेंस-इन-स्ट्रिंग्स)
- [टेम्पलेट लिटरल (टेम्पलेट स्ट्रिंग्स)](#टेम्पलेट-लिटरल-टेम्प्लेट-स्ट्रिंग्स)
- [स्ट्रिंग मेथड्स] (# स्ट्रिंग-मेथड्स)
- [डेटा प्रकार और कास्टिंग की जाँच] (# जाँच-डेटा-प्रकार-और-कास्टिंग)
- [डेटा प्रकार की जाँच] (# जाँच-डेटा-प्रकार)
- [डेटा प्रकार बदलना (कास्टिंग)](#बदलते-डेटा-प्रकार-कास्टिंग)
- [स्ट्रिंग टू इंट] (# स्ट्रिंग-टू-इंट)
- [स्ट्रिंग टू फ्लोट](#स्ट्रिंग-टू-फ्लोट)
- [फ्लोट टू इंट](#फ्लोट-टू-इंट)
- [💻 दूसरा दिन: व्यायाम](#-दिन-2-व्यायाम)
- [व्यायाम: स्तर 1](#व्यायाम-स्तर -1)
- [व्यायाम: स्तर 2](#व्यायाम-स्तर-2)
- [व्यायाम: स्तर 3](#व्यायाम-स्तर-3)

#📔दिन 2

## डेटा के प्रकार

पिछले अनुभाग में, हमने डेटा प्रकारों के बारे में कुछ बताया। डेटा या मानों में डेटा प्रकार होते हैं। डेटा प्रकार डेटा की विशेषताओं का वर्णन करते हैं। डेटा प्रकारों को दो में विभाजित किया जा सकता है:

1. आदिम डेटा प्रकार
2. गैर-आदिम डेटा प्रकार (वस्तु संदर्भ)

### आदिम डेटा प्रकार

जावास्क्रिप्ट में आदिम डेटा प्रकारों में शामिल हैं:

  1. संख्याएँ - पूर्णांक, तैरती हैं
  2. स्ट्रिंग्स - सिंगल कोट, डबल कोट या बैकटिक कोट के अंतर्गत कोई भी डेटा
  3. बूलियंस - सही या गलत मान
  4. शून्य - खाली मान या कोई मान नहीं
  5. अपरिभाषित - एक मूल्य के बिना घोषित चर
  6. सिंबल - एक अद्वितीय मान जो सिंबल कंस्ट्रक्टर द्वारा उत्पन्न किया जा सकता है

जावास्क्रिप्ट में गैर-आदिम डेटा प्रकारों में शामिल हैं:

1. वस्तुएँ
2. सारणियाँ

अब, देखते हैं कि आदिम और गैर-आदिम डेटा प्रकारों का वास्तव में क्या मतलब है।
*आदिम* डेटा प्रकार अपरिवर्तनीय (गैर-परिवर्तनीय) डेटा प्रकार हैं। एक बार आदिम डेटा प्रकार बन जाने के बाद हम इसे संशोधित नहीं कर सकते हैं।

**उदाहरण:**

```js
let word = 'JavaScript'
```

यदि हम वेरिएबल *वर्ड* में संग्रहीत स्ट्रिंग को संशोधित करने का प्रयास करते हैं, तो जावास्क्रिप्ट को एक त्रुटि उत्पन्न करनी चाहिए। एकल उद्धरण, दोहरे उद्धरण या बैकटिक उद्धरण के अंतर्गत कोई भी डेटा प्रकार एक स्ट्रिंग डेटा प्रकार है।

```js
word[0] = 'Y'
```

यह अभिव्यक्ति चर *शब्द* में संग्रहीत स्ट्रिंग को नहीं बदलती है। तो, हम कह सकते हैं कि तार परिवर्तनीय नहीं हैं या दूसरे शब्दों में अपरिवर्तनीय हैं।
आदिम डेटा प्रकारों की तुलना इसके मूल्यों से की जाती है। आइए हम विभिन्न डेटा मानों की तुलना करें। नीचे दिया गया उदाहरण देखें:

```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

### गैर-आदिम डेटा प्रकार

*गैर-आदिम* डेटा प्रकार परिवर्तनीय या परिवर्तनशील होते हैं। गैर-आदिम डेटा प्रकारों के बनने के बाद हम उनके मान को संशोधित कर सकते हैं।
आइए एक ऐरे बनाकर देखें। एक सरणी एक वर्ग कोष्ठक में डेटा मानों की एक सूची है। Arrays में समान या भिन्न डेटा प्रकार हो सकते हैं। सरणी मानों को उनके अनुक्रमणिका द्वारा संदर्भित किया जाता है। जावास्क्रिप्ट सरणी में सूचकांक शून्य से शुरू होता है। यानी, किसी सरणी का पहला तत्व इंडेक्स शून्य पर, दूसरा तत्व इंडेक्स एक पर और तीसरा तत्व इंडेक्स दो पर पाया जाता है, आदि।

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```
जैसा कि आप देख सकते हैं, एक सरणी, जो एक गैर-आदिम डेटा प्रकार है, उत्परिवर्तनीय है। गैर-आदिम डेटा प्रकारों की तुलना मूल्य से नहीं की जा सकती। भले ही दो गैर-आदिम डेटा प्रकारों में समान गुण और मान हों, वे सख्ती से समान नहीं हैं।

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false
```

सामान्य नियम, हम गैर-आदिम डेटा प्रकारों की तुलना नहीं करते हैं। सरणियों, कार्यों या वस्तुओं की तुलना न करें।
गैर-आदिम मूल्यों को संदर्भ प्रकार के रूप में संदर्भित किया जाता है, क्योंकि उनकी तुलना मूल्य के बजाय संदर्भ द्वारा की जा रही है। यदि वे एक ही अंतर्निहित वस्तु को संदर्भित करते हैं तो दो वस्तुएं केवल सख्ती से बराबर होती हैं।

```js
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
```
यदि आपको आदिम डेटा प्रकारों और गैर-आदिम डेटा प्रकारों के बीच के अंतर को समझने में कठिनाई होती है, तो आप अकेले नहीं हैं। शांत हो जाएं और बस अगले भाग पर जाएं और कुछ समय बाद वापस आने का प्रयास करें। अब हम संख्या प्रकार से डेटा प्रकार शुरू करते हैं।

## नंबर

संख्याएँ पूर्णांक और दशमलव मान हैं जो सभी अंकगणितीय संक्रियाएँ कर सकते हैं।
आइए संख्याओं के कुछ उदाहरण देखें।

### संख्या डेटा प्रकार घोषित करना

```js
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### गणित वस्तु

जावास्क्रिप्ट में मैथ ऑब्जेक्ट संख्याओं के साथ काम करने के लिए बहुत सारे तरीके प्रदान करता है।

```js
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### रैंडम संख्या जनरेटर

जावास्क्रिप्ट मैथ ऑब्जेक्ट में एक यादृच्छिक () विधि संख्या जनरेटर है जो 0 से 0.999999999 तक संख्या उत्पन्न करता है ...


```js
let randomNum = Math.random() // generates 0 to 0.999...
```
अब, देखते हैं कि हम 0 और 10 के बीच यादृच्छिक संख्या उत्पन्न करने के लिए यादृच्छिक () विधि का उपयोग कैसे कर सकते हैं:

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
```

## स्ट्रिंग्स

स्ट्रिंग टेक्स्ट होते हैं, जो **_सिंगल_** , **_डबल_**, **_बैक-टिक_** कोट के अंतर्गत होते हैं। एक स्ट्रिंग घोषित करने के लिए, हमें एक चर नाम, असाइनमेंट ऑपरेटर, एक एकल उद्धरण के तहत एक मान, दोहरे उद्धरण या बैकटिक उद्धरण की आवश्यकता होती है।
आइए स्ट्रिंग्स के कुछ उदाहरण देखें:

```js
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
```

### स्ट्रिंग संयोजन

दो या दो से अधिक धागों को आपस में जोड़ने को संयोजन कहते हैं।
पिछले स्ट्रिंग सेक्शन में घोषित स्ट्रिंग्स का उपयोग करना:

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

हम स्ट्रिंग्स को अलग-अलग तरीकों से जोड़ सकते हैं।

#### एडिशन ऑपरेटर का उपयोग करके जोड़ना

अतिरिक्त ऑपरेटर का उपयोग करना एक पुराना तरीका है। जोड़ने का यह तरीका थकाऊ और त्रुटि-प्रवण है। यह जानना अच्छा है कि इस तरह से कैसे जोड़ना है, लेकिन मैं दृढ़ता से ES6 टेम्पलेट स्ट्रिंग्स (बाद में समझाया गया) का उपयोग करने का सुझाव देता हूं।

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```

#### लंबे शाब्दिक तार

एक स्ट्रिंग एक वर्ण या अनुच्छेद या एक पृष्ठ हो सकता है। यदि स्ट्रिंग की लंबाई बहुत बड़ी है तो यह एक पंक्ति में फिट नहीं होती है। हम प्रत्येक पंक्ति के अंत में बैकस्लैश वर्ण (\\) का उपयोग यह इंगित करने के लिए कर सकते हैं कि स्ट्रिंग अगली पंक्ति पर जारी रहेगी।

**उदाहरण:**
```js
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
```

#### स्ट्रिंग्स में एस्केप सीक्वेंस

जावास्क्रिप्ट और अन्य प्रोग्रामिंग भाषाओं में \ के बाद कुछ वर्ण एक एस्केप सीक्वेंस है। आइए सबसे आम एस्केप कैरेक्टर देखें:

- \n: new line
- \t: Tab, means 8 spaces
- \\\\: Back slash
- \\': Single quote (')
- \\": Double quote (")

```js
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```

कंसोल में आउटपुट:

```sh
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### टेम्प्लेट लिटरल (टेम्पलेट स्ट्रिंग्स)

टेम्प्लेट स्ट्रिंग्स बनाने के लिए, हम दो बैक-टिक का उपयोग करते हैं। हम डेटा को टेम्प्लेट स्ट्रिंग के अंदर एक्सप्रेशन के रूप में इंजेक्ट कर सकते हैं। डेटा इंजेक्ट करने के लिए, हम $ चिह्न से पहले एक घुमावदार ब्रैकेट ({}) के साथ अभिव्यक्ति को संलग्न करते हैं। नीचे सिंटैक्स देखें।

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Example: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

**Example:2**

```js
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```
एक स्ट्रिंग टेम्पलेट या स्ट्रिंग इंटरपोलेशन विधि का उपयोग करके, हम भाव जोड़ सकते हैं, जो एक मान या कुछ ऑपरेशन (तुलना, अंकगणितीय संचालन, टर्नरी ऑपरेशन) हो सकते हैं।

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### स्ट्रिंग तरीके

जावास्क्रिप्ट में सब कुछ एक वस्तु है। एक स्ट्रिंग एक आदिम डेटा प्रकार है जिसका अर्थ है कि इसे बनाने के बाद हम इसे संशोधित नहीं कर सकते हैं। स्ट्रिंग ऑब्जेक्ट में कई स्ट्रिंग विधियाँ हैं। विभिन्न स्ट्रिंग विधियाँ हैं जो हमें स्ट्रिंग्स के साथ काम करने में मदद कर सकती हैं।

1. *लंबाई*: स्ट्रिंग *लंबाई* विधि एक स्ट्रिंग में वर्णों की संख्या को खाली स्थान में शामिल करती है।

**Example:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. *एक स्ट्रिंग में वर्णों तक पहुँचना*: हम प्रत्येक वर्ण को उसके सूचकांक का उपयोग करके एक स्ट्रिंग में एक्सेस कर सकते हैं। प्रोग्रामिंग में, गिनती 0 से शुरू होती है। स्ट्रिंग का पहला सूचकांक शून्य है, और अंतिम सूचकांक स्ट्रिंग माइनस वन की लंबाई है।

![Accessing sting by index](../images/string_indexes.png)

आइए हम 'जावास्क्रिप्ट' स्ट्रिंग में विभिन्न वर्णों तक पहुँचें।

```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: यह विधि स्ट्रिंग को अपरकेस अक्षरों में बदल देती है।

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: यह विधि स्ट्रिंग को लोअरकेस अक्षरों में बदल देती है।

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: इसमें दो तर्क लगते हैं, आरंभिक अनुक्रमणिका और स्लाइस करने के लिए वर्णों की संख्या।

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *सबस्ट्रिंग ()*: इसमें दो तर्क होते हैं, शुरुआती इंडेक्स और स्टॉपिंग इंडेक्स लेकिन इसमें स्टॉपिंग इंडेक्स में कैरेक्टर शामिल नहीं होता है।

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land
```

7. *विभाजन ()*: विभाजन विधि एक निर्दिष्ट स्थान पर एक स्ट्रिंग को विभाजित करती है।

```js
let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *ट्रिम ()*: किसी स्ट्रिंग के आरंभ या अंत में अनुगामी स्थान को हटाता है।

```js
let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
```

```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```

9. *शामिल है ()*: यह एक सबस्ट्रिंग तर्क लेता है और यह जांचता है कि स्ट्रिंग में सबस्ट्रिंग तर्क मौजूद है या नहीं। *शामिल है()* एक बूलियन देता है। यदि एक स्ट्रिंग में एक सबस्ट्रिंग मौजूद है, तो यह सच हो जाता है, अन्यथा यह गलत हो जाता है।

```js
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
```

10. *replace()*: एक पैरामीटर के रूप में पुराने सबस्ट्रिंग और एक नए सबस्ट्रिंग को लेता है।

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: इंडेक्स लेता है और यह उस इंडेक्स पर वैल्यू लौटाता है

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: इंडेक्स लेता है और यह उस इंडेक्स पर वैल्यू का चार कोड (ASCII नंबर) लौटाता है

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```

13. *indexOf()*: एक सबस्ट्रिंग लेता है और यदि सबस्ट्रिंग एक स्ट्रिंग में मौजूद है तो यह सबस्ट्रिंग की पहली स्थिति देता है यदि मौजूद नहीं है तो यह -1 देता है

```js
string.indexOf(substring)
```

```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```


14. *lastIndexOf()*: एक सबस्ट्रिंग लेता है और यदि सबस्ट्रिंग एक स्ट्रिंग में मौजूद है तो यह सबस्ट्रिंग की अंतिम स्थिति लौटाता है यदि यह मौजूद नहीं है तो यह -1 देता है

```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: यह कई सबस्ट्रिंग्स लेता है और उनसे जुड़ता है।

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *शुरू होता है*: यह एक तर्क के रूप में एक सबस्ट्रिंग लेता है और यह जांचता है कि स्ट्रिंग उस निर्दिष्ट सबस्ट्रिंग से शुरू होती है या नहीं। यह एक बूलियन (सही या गलत) लौटाता है।

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
```

17. *endsWith*: यह एक तर्क के रूप में एक सबस्ट्रिंग लेता है और यह जांचता है कि स्ट्रिंग उस निर्दिष्ट सबस्ट्रिंग के साथ समाप्त होती है या नहीं। यह एक बूलियन (सही या गलत) लौटाता है।

```js
string.endsWith(substring)
```

```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
```

18. *खोज*: यह एक तर्क के रूप में एक सबस्ट्रिंग लेता है और यह पहले मैच की अनुक्रमणिका देता है। खोज मान एक स्ट्रिंग या रेगुलर एक्सप्रेशन पैटर्न हो सकता है।

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

19. *मैच*: यह एक सबस्ट्रिंग या रेगुलर एक्सप्रेशन पैटर्न को एक तर्क के रूप में लेता है और अगर मैच है तो यह एक सरणी देता है यदि यह शून्य नहीं होता है। आइए देखें कि रेगुलर एक्सप्रेशन पैटर्न कैसा दिखता है। यह / साइन से शुरू होता है और / साइन से खत्म होता है।

```js
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
```

Match syntax

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

आइए एक रेगुलर एक्सप्रेशन का उपयोग करके टेक्स्ट से नंबर निकालें। यह रेगुलर एक्सप्रेशन खंड नहीं है, घबराओ मत! हम रेगुलर एक्सप्रेशंस को बाद में कवर करेंगे।

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: यह तर्क के रूप में एक संख्या लेता है और यह स्ट्रिंग के दोहराए गए संस्करण को लौटाता है।

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## डेटा प्रकार और कास्टिंग की जाँच करना

### डेटा प्रकार की जाँच करना

एक निश्चित चर के डेटा प्रकार की जाँच करने के लिए हम _typeof_ विधि का उपयोग करते हैं।

**उदाहरण:**


```js
// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### डेटा प्रकार बदलना (कास्टिंग)

- कास्टिंग: एक डेटा प्रकार को दूसरे डेटा प्रकार में परिवर्तित करना। हम _parseInt()_, _parseFloat()_, _Number()_, _+ साइन_, _str()_ का उपयोग करते हैं
   जब हम अंकगणितीय ऑपरेशन करते हैं तो स्ट्रिंग नंबरों को पहले पूर्णांक या फ्लोट में परिवर्तित किया जाना चाहिए यदि यह कोई त्रुटि नहीं देता है।

#### स्ट्रिंग टू इंट

हम स्ट्रिंग संख्या को संख्या में परिवर्तित कर सकते हैं। उद्धरण के अंदर कोई भी संख्या एक स्ट्रिंग संख्या है। एक स्ट्रिंग संख्या का एक उदाहरण: '10', '5', आदि।
हम निम्नलिखित विधियों का उपयोग करके स्ट्रिंग को संख्या में बदल सकते हैं:

- पार्सइंट ()
- संख्या()
- धन चिह्न (+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### फ्लोट करने के लिए स्ट्रिंग

हम स्ट्रिंग फ्लोट नंबर को फ्लोट नंबर में बदल सकते हैं। कोट के अंदर कोई भी फ्लोट नंबर एक स्ट्रिंग फ्लोट नंबर होता है। स्ट्रिंग फ्लोट संख्या का एक उदाहरण: '9.81', '3.14', '1.44', आदि।
हम निम्नलिखित विधियों का उपयोग करके स्ट्रिंग फ्लोट को नंबर में बदल सकते हैं:

- पार्सफ्लोट ()
- संख्या()
- धन चिह्न (+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
```

#### फ़्लोट टू इंट

हम फ्लोट नंबरों को पूर्णांकों में बदल सकते हैं।
फ्लोट को इंट में बदलने के लिए हम निम्न विधि का उपयोग करते हैं:

- पार्सइंट ()

```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕 आप कमाल हैं। आपने अभी-अभी दिन 2 की चुनौतियाँ पूरी की हैं और आप महानता के रास्ते पर दो कदम आगे हैं। अब अपने मस्तिष्क और अपनी मांसपेशियों के लिए कुछ व्यायाम करें।

## 💻दिन 2: व्यायाम

### व्यायाम: स्तर 1

1. चुनौती नाम के एक चर की घोषणा करें और इसे प्रारंभिक मान **'30 दिनों के जावास्क्रिप्ट' ** पर असाइन करें।
2. __console.log()__ का उपयोग करके ब्राउज़र कंसोल पर स्ट्रिंग प्रिंट करें
3. _console.log()_ का इस्तेमाल करके ब्राउज़र कंसोल पर स्ट्रिंग की __लंबाई__ प्रिंट करें
4. __toUpperCase()__ विधि का उपयोग करके सभी स्ट्रिंग वर्णों को बड़े अक्षरों में बदलें
5. __toLowerCase()__ विधि का उपयोग करके सभी स्ट्रिंग वर्णों को लोअरकेस अक्षरों में बदलें
6. __substr()__ या __substring()__ विधि का उपयोग करके स्ट्रिंग के पहले शब्द को काटें (स्लाइस)
7. *JavaScript के 30 दिन* में से *JavaScript के दिन* वाक्यांश को काटें।
8. जांचें कि स्ट्रिंग में __Script__ शब्द है या नहीं, __includes()__ विधि का उपयोग करके
9. __split()__ विधि का उपयोग करके __string__ को __array__ में विभाजित करें
10. __split()__ विधि का उपयोग करके स्ट्रिंग को 30 दिनों की जावास्क्रिप्ट को अंतरिक्ष में विभाजित करें
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' स्ट्रिंग को अल्पविराम पर __split__ करें और इसे एक सरणी में बदलें।
12. __replace()__ विधि का उपयोग करके 30 दिनों के जावास्क्रिप्ट को 30 दिनों के पायथन में बदलें।
13. '30 डेज ऑफ जावास्क्रिप्ट' स्ट्रिंग में इंडेक्स 15 पर कैरेक्टर क्या है? __charAt()__ विधि का प्रयोग करें।
14. __charCodeAt()__ का उपयोग करते हुए '30 डेज़ ऑफ़ जावास्क्रिप्ट' स्ट्रिंग में J का वर्ण कोड क्या है
15. जावास्क्रिप्ट के 30 दिनों में __a__ की पहली घटना की स्थिति निर्धारित करने के लिए __indexOf__ का उपयोग करें
16. जावास्क्रिप्ट के 30 दिनों में __a__ की अंतिम घटना की स्थिति निर्धारित करने के लिए __lastIndexOf__ का उपयोग करें।
17. निम्नलिखित वाक्य में शब्द __क्योंकि__ की पहली घटना की स्थिति का पता लगाने के लिए __indexOf__ का उपयोग करें:__'आप एक वाक्य को समाप्त नहीं कर सकते क्योंकि क्योंकि एक संयोजन है'__
18. निम्नलिखित वाक्य में शब्द __क्योंकि__ की अंतिम घटना की स्थिति का पता लगाने के लिए __lastIndexOf__ का उपयोग करें:__'आप एक वाक्य को समाप्त नहीं कर सकते क्योंकि क्योंकि एक संयोजन है'__
19. निम्नलिखित वाक्य में शब्द __क्योंकि__ की पहली घटना की स्थिति का पता लगाने के लिए __खोज__ का उपयोग करें:__'आप एक वाक्य को समाप्त नहीं कर सकते क्योंकि क्योंकि एक संयोजन है'__
20. एक स्ट्रिंग के आरंभ और अंत में किसी भी अनुगामी व्हाट्सएप को हटाने के लिए __trim()__ का उपयोग करें। उदाहरण के लिए '30 डेज ऑफ जावास्क्रिप्ट'।
21. स्ट्रिंग *30 Days Of JavaScript* के साथ __startsWith()__ विधि का उपयोग करें और परिणाम को सही बनाएं
22. स्ट्रिंग *30 Days of JavaScript* के साथ __endsWith()__ विधि का उपयोग करें और परिणाम को सही बनाएं
23. जावास्क्रिप्ट के 30 दिनों में सभी __a__ को खोजने के लिए __मैच ()__ विधि का उपयोग करें
24. __concat()__ का उपयोग करें और '30 दिन के' और 'जावास्क्रिप्ट' को एक स्ट्रिंग, '30 दिन के जावास्क्रिप्ट' में मर्ज करें
25. 30 दिनों के जावास्क्रिप्ट को 2 बार प्रिंट करने के लिए __repeat()__ विधि का उपयोग करें

### व्यायाम: स्तर 2

1. कंसोल.लॉग () का उपयोग करके निम्नलिखित कथन का प्रिंट आउट लें:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```
    
 2. कंसोल.लॉग () का उपयोग करते हुए मदर टेरेसा के निम्नलिखित उद्धरण को प्रिंट करें:  

     ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. जांचें कि क्या '10' का प्रकार 10 के बिल्कुल बराबर है। यदि नहीं तो इसे बिल्कुल बराबर करें।
4. जांचें कि क्या parseFloat('9.8') 10 के बराबर है, अगर नहीं तो इसे 10 के बराबर बनाएं।
5. जांचें कि क्या अजगर और शब्दजाल दोनों में 'ऑन' पाया जाता है
6. _मुझे आशा है कि यह पाठ्यक्रम शब्दजाल से भरा नहीं है_। जांचें कि वाक्य में शब्दजाल है या नहीं।
7. समावेशी रूप से 0 और 100 के बीच एक यादृच्छिक संख्या उत्पन्न करें।
8. सम्मिलित रूप से 50 और 100 के बीच एक यादृच्छिक संख्या उत्पन्न करें।
9. 0 और 255 के बीच सम्मिलित रूप से एक यादृच्छिक संख्या उत्पन्न करें।
10. एक यादृच्छिक संख्या का उपयोग करके 'जावास्क्रिप्ट' स्ट्रिंग वर्णों तक पहुंचें।
11. निम्नलिखित पैटर्न को प्रिंट करने के लिए कंसोल.लॉग () और एस्केप कैरेक्टर का उपयोग करें।


    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. निम्नलिखित वाक्य से __क्योंकि क्योंकि__ वाक्यांश को हटाने के लिए __substr__ का उपयोग करें:__'आप एक वाक्य को समाप्त नहीं कर सकते क्योंकि क्योंकि एक संयोजन है'__

### व्यायाम: स्तर 3

1. 'इस दुनिया में प्यार सबसे अच्छी चीज है। कुछ को उनका प्यार मिल गया तो कुछ को अब भी अपने प्यार की तलाश है.' इस वाक्य में __प्यार__ शब्द की संख्या गिनें।
2. निम्नलिखित वाक्य में सभी __क्योंकि__ की संख्या की गणना करने के लिए __मैच ()__ का उपयोग करें:__'आप एक वाक्य को समाप्त नहीं कर सकते क्योंकि क्योंकि एक संयोजन है'__
3. निम्नलिखित पाठ को साफ करें और सबसे अधिक बार आने वाला शब्द खोजें (संकेत, बदलें और नियमित अभिव्यक्ति का उपयोग करें)।

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. निम्नलिखित पाठ से संख्याएँ निकालकर व्यक्ति की कुल वार्षिक आय की गणना करें। 'वह प्रति माह वेतन से 5000 यूरो















