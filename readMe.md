##  Table of Contents
![Thirty Days Of JavaScript](./images/30DaysOfJavaScript.png)

- [📔Day 1](#%f0%9f%93%94day-1)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Setup](#setup)
  - [Install Node.js](#install-nodejs)
  - [Browser](#browser)
    - [Installing Google Chrome](#installing-google-chrome)
    - [Opening Google Chrome Console](#opening-google-chrome-console)
    - [Writing Code on browser Console](#writing-code-on-browser-console)
      - [Console.log](#consolelog)
      - [Console.log with multiple arguments](#consolelog-with-multiple-arguments)
      - [Comment](#comment)
      - [Syntax](#syntax)
      - [Arithmetics](#arithmetics)
  - [Code Editor](#code-editor)
    - [Installing Visual Studio Code](#installing-visual-studio-code)
    - [How to use visual studio code](#how-to-use-visual-studio-code)
- [Adding JavaScript to a web page](#adding-javascript-to-a-web-page)
  - [Inline Script](#inline-script)
  - [Internal script](#internal-script)
  - [External script](#external-script)
  - [Multiple External scripts](#multiple-external-scripts)
- [Introduction to Data types](#introduction-to-data-types)
  - [Number](#number)
  - [String](#string)
  - [Booleans](#booleans)
  - [Undefined](#undefined)
  - [Null](#null)
  - [Checking Data types](#checking-data-types)
- [Comments](#comments)
- [Variables](#variables)
- [💻 Day 1: Exercises](#%f0%9f%92%bb-day-1-exercises)
- [📔 Day 2](#%f0%9f%93%94-day-2)
- [Data types](#data-types)
- [Numbers](#numbers)
  - [Declaring number data types](#declaring-number-data-types)
  - [Math Object](#math-object)
- [Strings](#strings)
  - [String Concatenation](#string-concatenation)
    - [Concatenating using addition operator](#concatenating-using-addition-operator)
    - [Template Literals(Template Strings)](#template-literalstemplate-strings)
  - [String Methods](#string-methods)
  - [Exercises: Booleans Part](#exercises-booleans-part)
  - [Exercises: Comparison Operators](#exercises-comparison-operators)
  - [Exercises: Logical Operators](#exercises-logical-operators)



# 📔Day 1
# Introduction
**Congratulations** for deciding to participate in a 30 days of JavaScript programming challenge . In this challenge you will learn everything you need to be a JavaScript programmer and in general the whole concepts of programming. In the end of the challenge you will get a 30DaysOfJavaScript programming challenge certificate. Join the [telegram group](https://t.me/ThirtyDaysOfJavaScript).

**A 30DaysOfJavaScript** challenge is a guide for both beginners and advanced JavaScript developers. Welcome to JavaScript. I enjoy using and teaching JavaScript and I hope you will do so. JavaScript is the language of the browser.

In this step by step tutorial, you will learn JavaScript, the most popular programming language in the history of mankind.
You use JavaScript **_to add interactivity to websites, to develop mobile apps, desktop applications, games_** and nowadays JavaScript can be used for **_machine learning_** and **_AI_**.
**_JavaScript (JS)_** has increased in popularity in recent years and has been the leading
programming language for four consecutive years and is the most used programming language on
Github.
# Requirements
No prior knowledge of programming is required to follow this challenge. You need only:
1. Motivation
2. Computer
3. Internet
4. Browser
5. Code Editor

# Setup
I believe you have the motivation and a strong desire to be a developer, computer and internet. If you have those you have everything. 

## Install Node.js
You may not need it right now but you may need it for later. Install [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

After downloading double click and install

 ![Install node](images/install_node.png)

We can check if node is installed in our local machine by opening our device terminal or command  prompt.

```sh
asabeneh $ node -v
v12.14.0
```
I am using node version 12.14.0 which is the recommended version of node.

## Browser
There are many browsers out there but I strongly recommend Google Chrome.
### Installing Google Chrome
Install [google chrome](https://www.google.com/chrome/) if you do not have one yet. We can write small JavaScript code on the browser console but we do not use the browser console to develop applications.

![Google Chrome](images/google_chrome.png)

### Opening Google Chrome Console
You can open the google chrome either by clicking three dots at the top right corner of chrome browser or using a shortcut. I prefer using shortcuts.
![Opening chrome](images/opening_developer_tool.png)


To open chrome console using short cut. 
```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```
![Opening console](images/opening_chrome_console_shortcut.png)

After you open the google chrome console try to explore the marked buttons. We will spend most of the time on the Console part. The Console is the place where your JavaScript code goes. The google console V8 engine change your JavaScript code to machine code.
Let us write a JavaScript code on google chrome console:

![write code on console](./images/js_code_on_chrome_console.png)

### Writing Code on browser Console
We can write any JavaScript code on google console or any browser console but for this challenge we only focus on google chrome console. Open the console using:
```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```
#### Console.log
To write our first JavaScript code we used a builtin function **console.log()**. We passed an argument as an input data and the function display the output. We passed 'Hello, World' as input data or argument in the console.log() function.
```js
console.log('Hello, World!')
```
#### Console.log with multiple arguments
The console.log(param1, param2, param3), can take multiple arguments.
![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```
As you can see from the above snippet code, *console.log()* can take multiple arguments.

Congratulations! You wrote your first JavaScript code using *console.log()*. 
#### Comment
We add comment  to our code. Comment is very important to make code more readable and to leave remark in our code. JavaScript does not execute comment part of our code. Any text starts with // in JavaScript is a comment or any thing enclose like this /*  */ is a comment.

Example: Single Line Comment

    // This is the first comment
    // This is the second comment
    // I am a single line comment
Example: Multiline Comment

  /*
  This is a multiline comment
  multiline comment take multiple lines.
  JavaScript is the language the langauge of the web.
  */

#### Syntax
JavaScript is a programming language and it has its own syntax like other languages. If we do not write a syntax which JavaScript understands it will raise different kind of errors. We will see different kind of JavaScript errors later but for now let us see syntax error.

![Error](images/raising_syntax_error.png)

I made a deliberate mistake the console raise a syntax error. Actually, the syntax is very informative. It tell what kind of mistake we made and we can fix the by reading error feedback.  The process of identifying and removing errors from a program is called debugging. Let us fix the errors:


```js
console.log("Hello, World!")
console.log('Hello, World!')
```

So far, we saw how to display text using a *console.log()*. If we are printing text or string using *console.log()*, the text has to be under single, double or back tick.
**Example:**
```js
console.log("Hello, World!")
console.log('Hello, World!')
console.log(`Hello, World!`)
``` 
#### Arithmetics

Now, let us practice  more writing JavaScript code using *console.log()* on google chrome console for number data types. 
In addition to text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations

![Arithmetic](images/arithmetic.png)
```js
console.log(2 + 3)   // Addition
console.log(3 - 2)   // Subtraction
console.log(2 * 3)   // Multiplication  
console.log(3 / 2)   // Division
console.log(3 % 2)   // Modulus - finding remainder 
console.log(3 ** 2)  // Exponential

``` 

## Code Editor
We can write code on the browser console but it won't be for a big project. In real work environment, developers use different code editors to write codes. In this 30 days python JavaScript challenge we will use visual studio code. 
### Installing Visual Studio Code
Visual studio code is a very popular open source text editor and I would recommend to [download](https://code.visualstudio.com/) visual studio code, but if you are in favor of other editors, feel free to follow with what you have.

![Vscode](images/vscode.png) 

If you installed visual studio code, let us start using it.
### How to use visual studio code
Open the visual studio code by double clicking the visual studio icon. When you open it you will get this kind of interface. Try to interact with the labelled icons.

![Vscode ui](./images/vscode_ui.png)
![Vscode add project](./images/adding_project_to_vscode.png)
![Vscode open project](./images/opening_project_on_vscode.png)
![script file](images/scripts_on_vscode.png)
![running script](./images/running_script.png)
![coding running](./images/launched_on_new_tab.png)

# Adding JavaScript to a web page
JavaScript can be added to a web page in three ways:
- **_Inline script_**
- **_Internal script_**
- **_External script_**
- **_Multiple External scripts_**

The following sections show different ways of adding JavaScript code to your web page.

## Inline Script

Create a folder on your desktop and  call it 30DaysOfJS or in any location and create an **_index.html_** file in project folder. Then paste the following code and open it in a browser, either in [Chrome](https://www.google.com/chrome/).

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>30DaysOfScript:Inline Script</title>
    </head>
    <body>
      <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    </body>
  </html>
```
Now, you wrote your first inline script. We can create a pop up alert message using the build in *alert()* function.

## Internal script
Internal script can be written in the _head_ or the _body_ but it is preferred to put it on the body of the html document.
First let us write on the head part of the page.

```html
<!DOCTYPE html>
  <html>
    <head>
       <title>30DaysOfScript:Internal Script</title>
      <script>
        console.log("Welcome to 30DaysOfJavaScript");
      </script>
    </head>
    <body>
      
    </body>
  </html>
```
This is how we write internal script most of the time. Writing the JavaScript code in the body section is the most preferred place. Open the browser console to see the out put from the console.log()

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>30DaysOfScript:Internal Script</title>
    </head>
    <body>
       <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
      <script>
        console.log("Welcome to 30DaysOfJavaScript");
      </script>
    </body>
  </html>
```
Open the browser console to see the out put from the console.log()
![js code from vscode](./images/js_code_vscode.png)

## External script
Similar to the internal script, the external script link can be on the header or body but it is preferred to put it in the body.
First we should create an external JavaScript file with .js extension. Any JavaScript file ends with .js. Create a file introduction.js inside your project directory and write the following code and link this. js file at the bottom of the body
```js
console.log('Welcome to 30DaysOfJavaScript')
```

External script in the head

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>30DaysOfJavaScript:External script</title>
      <script src="introduction.js"></script>
    </head>
    <body>
    </body>
    </html
```
External Script in the body
```html
<!DOCTYPE html>
  <html>
    <head>
      <title>30DaysOfJavaScript:External script</title>
    </head>
    <body>
      //it could be in the header or in the body 
      // Here is the recommended place to put the external script
      <script src="introduction.js"></script>
    </body>
    </html
```
Open the browser console to see the out put from the console.log()
## Multiple External scripts
We can link multiple external JavaScript files to a web page.
Create  helloworld.js file inside 30DaysOfJS folder and write the following code
```js
console.log('Hello, World!')
```
```html
<!DOCTYPE html>
  <html>
    <head>
      <title>Multiple External Scripts</title>
    </head>
    <body>

      <script src ="./helloworld.js"></script>
      <script src="./introduction.js"></script>
    </body>
  </html
```
Your main.js file should be below all other scripts. Watch out your exercise needs to understand this line.
![Multiple Script](./images/multiple_script.png)

# Introduction to Data types
In JavaScript and also other programming languages there are different kinds of data types. The following are JavaScript primitive data types:_String, Number, Boolean, undefined, Null_ and _Symbol_.
## Number

    - Integer: Integer(negative, zero and positive) numbers
        Example:
        ... -3, -2, -1, 0, 1, 2, 3 ...
    - Float: Decimal number
        Example
        ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

## String
A collection of one or more characters under a single quote , double quote or back stick.
**Example:**

```js
'Asabeneh'
'Finland'
'JavaScript is a beautiful programming language'
"I love teaching"
'I hope you are enjoying the first day'
`We can also create a string using a back tick`
```

## Booleans
Boolean value is either true or false. Any comparisons return a boolean value which is either true or false.

A boolean data type is either a True or False value.

**Example:**

```js
    true  # if the light on ,the value is true
    false # if the light off, the value is False
```

## Undefined
In JavaScript if we don't assign a value to a variable the value is undefined. In addition to that if a function is not returning anything it returns undefined.

```js
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet
```

## Null
Null in JavaScript means an empty value.

## Checking Data types

To check the data type of a certain data type we use the **typeof** operator. See the following example.
```js
console.log(typeof 'Asabeneh') // string
console.log(typeof 5)          // number
console.log(typeof true )     // boolean
console.log(typeof null)      // object type
console.log(typeof undefined)  // undefined
```

# Comments
Commenting in JavaScript is similar to other programming languages. Comments can help to make code more readable.
There are two ways of commenting:
- _Single line commenting_
- _Multiline commenting_

```js
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment
```
Multiline commenting:

```js
/*
    let location = 'Helsinki';
    let age = 100;
    let isMarried = true;
    This is a Multiple line comment
    */
```

# Variables
Variables are _containers_ of data. Variables _store_ data in a memory location. When a variable is declared a memory location is reserved and when it is assigned to a value, the memory space will be filled with that data. To declare a variable we use, _var_, _let_ or _const_ keywords. I will talk about var, let and const in detail in other section(scope). For now, the above explanation is enough.

For a variable which changes at different time we use _let_ but if the data doesn't change at all we use _const_. For example PI, country name, gravity do no change and we can use *const*.

A JavaScript variable name  shouldn't begin with a number
A JavaScript variable name does not allow special characters except dollar sign and underscore. 
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name shouldn't have space between words. The following are valid examples of JavaScript variables.

Valid variables in JavaScript:
```js
    firstName
    lastName
    country
    city
    capitalCity
    age
    isMarried

    first_name
    last_name
    is_marreid
    capital_city

    num1
    num_1
    _num_1
    $num1
    year2020
    year_2020
```
Camel case or the first way of declaring is conventional in JavaScript. In this material, camelCase variables will be used.

Invalid variable:
```sh
  first-name
  1_num
  num_#_1
```
Let's declare variables with different data types. To declare a variable we need let or const keyword,  the name of the variable, an equal sign (assignment operator) and a value. 
```js
  # Syntax
  let nameOfVariable = value  
```
**Examples: Variables**
```js
// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true
console.log(firstName, lastName, country, city, age, isMarried); //Asabeneh, Yetayeh, Finland, Helsinki, 100, True

// Declaring variables with number values
const gravity = 9.81; // earth gravity  in m/s2
const boilingPoint = 100; // water boiling point, temperature in oC
const PI = 3.14; // geometrical constant
console.log(gravity, boilingPoint, PI); // 9.81, 100, 3.14
// Variables can also be declaring in one line separated by comma
let name = 'Asabeneh', //name of a person
  job = 'teacher',
  live = 'Finland';
console.log(name, job, live);
```
When you run the files on 01-Day folder you should get this:
![Day one](./images/day_1.png)


# 💻 Day 1: Exercises
1. Write a single line comment which says, _comments can make code readable_
2. Write another single comment which says, *welcome to 30DaysOfJavaScript*
3. Write a multiline comment which says, _comments can make code readable, easy to use_
   _and informative_

4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. Create datatypes.js file and use the JavaScript ***typeof*** operator to check different data types. Check the data type of each variables
6. Declare four variables without assigning values
7. Declare four variables with assigning values
8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. Declare variables to store your first name, last name, marital status, country and age in a single line
10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to browser console.
   Output:
   ```sh
   I am 25 years old.
   You are 30 years old.
  
   ```

# 📔 Day 2
# Data types
In the previous section, we mentioned a little bit about data types. Data have data types. Data types describe the characteristics of data. Data types can be divided into 
1. Primitive data types
2. Non-primitive data types(Object References)


Primitive data types in JavaScript includes:
 1. Numbers
 2. Strings
 3. Booleans
 4. Null
 5. Undefined

Non-primitive data types in JavaScript includes:
1. Objects
2. Functions
3. Arrays
   
Now, let us see what exactly mean primitive and non-primitive data types.
*Primitive* data types are immutable(non-modifiable) data types. Once a primitive data type is created we can not modify it.
**Example:**
```js
let word = 'JavaScript'
```
If we try to modify the string stored in variable *word* JavaScript will raise an error. Any data type under single quote, double quote or back tick is a string data type.
```js
word[0] = 'Y'
```
This expression does not change the string stored in the variable *word*. So, we can say strings are not modifiable or immutable.
Primitive data types are compared by its values. Let us compare different data values. See the example below:
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

*Non-primitive* data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. 
Let us see by creating an array. Array is a list of data values in a square bracket. Array can contain the same or different data types. Arrays values are referenced by its index which starts at zero.
```js
let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)  // [10, 2, 3]
```
As you can see, an array which a non-primitive data type is a mutable. Non-primitive data types can not be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal. 
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
console.log(userOne == userTwo)
```
Rule of thumb, we do not compare non-primitive data types. Do not compare array, function or object. 
Non-primitive values are referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.
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
If you have hard time to understand the difference between primitive data types and non-primitive data types, you are not the only one. Calm down and just go to the next section and try to come back after some time. Now let us start the data types by number type. 

# Numbers
Numbers are integers and decimal values which can do all the arithmetic operations
Lets' see some examples of Numbers

## Declaring number data types

```js
let age = 35
const gravity = 9.81 //we use const for non-changing values, gravitational constant in  m/s2
let mass = 72 // mass in Kilogram
const PI = 3.14 // pi a geometrical constant

//More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37 // oC average human body temperature, which is a constant
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```
## Math Object
In JavaScript the Math Object provides a lots of methods to work with numbers.
```js
const PI = Math.PI
console.log(PI)                  // 3.141592653589793
console.log(Math.round(PI))      // 3; to round values to the nearest number
console.log(Math.round(9.81))    // 10
console.log(Math.floor(PI))      // 3; rounding down
console.log(Math.ceil(PI))       // 4; rounding up
console.log(Math.min(-5, 3, 20, 4,5, 10))    // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4,5, 10))    // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
// Let create random number between 0 to 10
const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))    //10
//Square root
console.log(Math.sqrt(100))     // 10
console.log(Math.sqrt(2))      //1.4142135623730951
// Power
console.log(Math.pow(3, 2)) // 9
console.log(Math.E) // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2))    // 0.6931471805599453
console.log(Math.log(10))   // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

# Strings

Strings are text which are under **_single_** or **_double_** quote. To declare a string we need a variable name, assignment operator, a value under a single quote, double quote or back tick.
Lets' see some examples of string:

```js
let space = ' ' // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
```

## String Concatenation
Connect two or more strings together is called concatenation. 

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
```

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```
```sh
// out
Asabeneh Yetayeh
```
We can concatenate string in different ways. 
### Concatenating using addition operator
Concatenating using addition operator is an old way. This way of concatenating is tedious and error prone. It is good to know, how to concatenate this way but I strongly suggest to use the second way.
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
let fullName = firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5
console.log(personInfoOne)
```
```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```
### Template Literals(Template Strings)
To create a template string we use back two back ticks. We can inject data as expression inside a template string. To inject data we enclose the expression with curly bracket({}) followed by $ sign. See the syntax blow.
```js
//Syntax
`String literal text`
`String literal text ${expression}`
```
**Example: 1**

```js
console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)
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
Using string template or string interpolation method we can add expression which could be a value or some operations(comparison, arithmetic operations, ternary operation)
```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```
```sh
2 is greater than 3: false
```
## String Methods
Everything in JavaScript is an object. String is a primitive data type that means we can not modify once it is created. String object has many string methods. There many string methods which can help us to work with strings.

1. *length*: The string *length* method returns the number of characters in a string included empty space.
  **Example:**
   ```js
   let js = 'JavaScript'
   console.log(js.length)        // 10
   let firstName = 'Asabeneh'
   console.log(firstName.length) // 8
   ```
2. *Accessing characters in a string*: We can access each characters in a string using its index. In programming counting starts from 0. The first index of the string is zero and the last index is one minus the length of the string
   
  ![Accessing sting by index](./images/string_indexes.png)
Let us access the first character in 'JavaScript' string.
```js
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter) // J
let secondLetter = string[1] // a
let thirdLetter = string[2]
let lastLetter = string[9] 
console.log(lastLetter) // t
let lastIndex = string.length - 1
console.log(lastIndex)  // 9
console.log(string[lastIndex]) // t

```
3. *toUpperCase()*: this method changes the string to uppercase letters.
```js
let string = 'JavaScript'
console.log(string.toUpperCase())      // JAVASCRIPT
let firstName = 'Asabeneh'
console.log(firstName.toUpperCase())  // ASABENEH
let country = 'Finland'
console.log(country.toUpperCase())    // FINLAND

```

4. *toLowerCase()*: this method changes the string to lowercase letters.
```js
let string = 'JavasCript'
console.log(string.toLowerCase())     // javascript
let firstName = 'Asabeneh'
console.log(firstName.toLowerCase())  // asabeneh
let country = 'Finland'
console.log(country.toLowerCase())   // finland

```
5. *substr()*: It takes two arguments,the starting index and number of characters to slice.
```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script
let country = 'Finland'
console.log(country.substr(3, 4))   // land

```
6. *substring()*: It takes two arguments,the starting index and the stopping index but it doesn't include the stopping index.

```js
let string = 'JavaScript'
console.log(string.substring(0,4))    // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))    // Script
let country = 'Finland'
console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))   // land

```
7. *split()*: The split method splits a string at a specified place.

```js
let string = '30 Days Of JavaScipt'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
let firstName = 'Asabeneh'
console.log(firstName.split())  // ["Asabeneh"]
console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

```
8. *trim()*: Removes trailing space in the beginning or the end of a string.

```js
let string = '   30 Days Of JavaScript   '
console.log(string)     // 
console.log(string.trim(' '))  // 
let firstName = ' Asabeneh '
console.log(firstName)
console.log(firstName.trim())  // 
```
```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```
9. *includes()*: It takes a substring argument and it check if substring argument exists in the string. *includes()* returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist. 

```js
let string = '30 Days Of JavaScript'
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false
console.log(string.includes('Script'))     // true
console.log(string.includes('script'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'
console.log(country.includes('fin')) // false
console.log(country.includes('Fin')) // true
console.log(country.includes('land')) // true
console.log(country.includes('Land')) // false

```
10. *replace()*: takes to parameter the old substring and new substring.

```js
string.replace(oldsubstring, newsubstring)
```
```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
let country = 'Finland'
console.log(country.replace('Fin', 'Noman')) Nomanland
```
11. *charAt()*: Takes index and it returns the value at that index
```js
string.charAt(index)
```
```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0)) // 3
let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t

```
12. *charCodeAt()*: Takes index and it returns char code(ASCII number) of the value at that index
```js
string.charCodeAt(index)
```
```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3)) // D ASCII number is 51
let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```
13. *indexOf()*: Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
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
14. *lastIndexOf()*: Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
```js
string.lastIndexOf(index)
```
```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38

```

15. *concat()*: it takes many substrings and creates concatenation.
```js
string.concat(substring, substring, substring)
```
```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript
let country = 'Fin'
console.log(country.concat("land")) // Finland

```

16. *startsWith*: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
```js
string.startsWith(substring)
```
```js
let string = 'Love is the best to in this world'
console.log(string.startsWith('Love')) // true
console.log(string.startsWith('love')) // false
console.log(string.startsWith('world')) // false

let country = 'Finland'
console.log(country.startsWith('Fin')) // true
console.log(country.startsWith('fin')) // false
console.log(country.startsWith('land')) //  false

```
17. *endsWith*: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
```js
string.endsWith(substring)
```
```js
let string = 'Love is the best to in this world'
console.log(string.endsWith('world')) // true
console.log(string.endsWith('love')) // false
console.log(string.endsWith('in this world')) // true

let country = 'Finland'
console.log(country.endsWith('land')) // true
console.log(country.endsWith('fin')) // false
console.log(country.endsWith('Fin')) //  false

```
18. *search*: it takes a substring as an argument and it returns the index of the first match.
```js
string.search(substring)
```
```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love')) // 2

```
19. *match*: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign. 
  ```js
  let string = 'love'
  let patternOne = /love/ // with out any flag
  let patternTwo = /love/gi // g-means to search in the whole text, i - case insensitive

  ```
```js
string.match(substring)
```
```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love')) //
/*
output

["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
*/
let pattern = /love/gi
console.log(string.match(pattern)) // ["love", "love", "love"]

```
Let us extract numbers from text using regular expression. This is not regular expression section, no panic.
```js

let txt = 'In 2019, I run 30 Days of Pyhton. Now, in 2020 I super exited to start this challenge'
let regEx = /\d+/ // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```
20.  *repeat()*: it takes a number argument and it returned the repeated version of the string.
```js
string.repeat(n)
```
```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

# Booleans

A boolean data type represents one of the two values:_true_ or _false_. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator.  Any comparisons return a boolean value which is either true or false. 

**Example: Boolean Values**
```js
let isLightOn = true;
let isRaining = false;
let isHungery = false;
let isMarried = true;
```

### Undefined
If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value will be undefined.

```js
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet
```

### Null

```js
let empty = null;
console.log(empty); // -> null , means no value
```

# Operators

##  Assignment operators
An equal sign in JavaScript is an assignment operator. It uses to assign a variable.
```js
let firstName = 'Asabeneh'
let country = 'Finland'
```
## Arithmetic Operators

Arithmetic operators are mathematical operators.
- Addition(+): a + b
- Subtraction(-): a - b
- Multiplication(*):a * b
- Division(/): a / b
- Modulus(%):a % b
- Exponential(**):a ** b

```js
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf); // ->7,1,12,1.33,1, 64

let PI = 3.14;
let radius = 100; // length in meter

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram
const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); // -> 314 m
// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // -> 706.32 N(Newton)

//Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);
```
## Comparison Operators

In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value. 

![Comparison Operators](./images/comparison_operators.png)
**Example: Comparison Operators**

```js
console.log(3 > 2)     // true, because 3 is greater than 2
console.log(3 >= 2)    // true, because 3 is greater than 2
console.log(3 < 2)     // false,  because 3 is greater than 2
console.log(2 < 3)     // true, because 2 is less than 3
console.log(2 <= 3)    // true, because 2 is less than 3
console.log(3 == 2)    // false, because 3 is not equal to 2
console.log(3 != 2)    // true, because 3 is not equal to 2
console.log(3 == '3')    // true, compare only value
console.log(3 === '3')    // false, compare both value and data type
console.log(3 !== '3')    // true, compare both value and data type
console.log(3 !== '3')    // true, compare both value and data type
console.log(3 != 3)    // false, compare only value
console.log(3 !== 3)    // false, compare both value and data type

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length != 'meat'.length)      // false
console.log('milk'.length == 'meat'.length)      // true
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

## Logical Operators

The following symbols are the common logical operators:
&&(ampersand) , ||(pipe) and !(negation).
&& gets true only if the two operands are true.
|| gets true either of the operand is true.
! negates true to false, false to true.

```js
//&& ampersand example
const check = 4 > 3 && 10 > 5; // true and true -> true
const check = 4 > 3 && 10 < 5; // true and false -> false
const check = 4 < 3 && 10 < 5; // false and false -> false
//|| pipe or, example
const check = 4 > 3 || 10 > 5; // true and true -> true
const check = 4 > 3 || 10 < 5; // true and false -> true
const check = 4 < 3 || 10 < 5; // false and false -> false
//! Negation examples
let check = 4 > 3; // -> true
let check = !(4 > 3); // -> false
let isLightOn = true;
let isLightOff = !isLightOn; // -> false
let isMarried = !false; // -> true
```


# 💻  Day 2: Exercises

## Exercises: String Part

1. Declare a variable name challenge and assign it to an initial value **'30 Days Of JavaScript'**.
2. Print the string on the browser console using __console.log()__
3. Print the __length__ of the string on the browser console using _console.log()_
4. Change all the string to capital letters using __toUpperCase()__ method
5. Change all the string to lowercase letters using __toLowerCase()__ method
6. Cut(slice) out the first word of the string using __substr()__ or __substring()__ method
7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
8. Use __substr__ to slice out the phase __because because because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
9. Check if the string contains a word __Script__ using __includes()__ method
10. Split the __string__ into __array__ using __split()__ method
11. Split the string 30 Days Of JavaScript at the space using __split()__ method
12. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
13. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
14. What is character at index 15 in '30 Days Of JavaScript' string use __charAt()__ method.
15. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
16. Use __indexOf__ to determine the position of the first occurrence of a in 30 Days Of JavaScript
17. Use __lastIndexOf__ to determine the position of the last occurrence of a in 30 Days Of JavaScript.
18. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
19. Use __lastIndexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
20. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
21. Use __trim()__ to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
22. Use __startsWith()__ method with the string *30 Days Of JavaScript* make the result true
23. Use __endsWith()__ method with the string *30 Days Of JavaScript* make the result true
24. Use __match()__ method to find all the a’s in 30 Days Of JavaScript
25. Use __match()__ to count the number all because's in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
26. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
27. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
28. Love is the best thing in this world. Some found their love and some are still looking for their love. Count the number of word love in this sentence.
29. Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
30. Clean the following text and find the most frequent word(hint, use replace and regular express).
```js
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
```
## Exercises: Data types Part
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it

1. The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
   
## Arithmetic Operators Part
JavaScript arithmetic operators are addition(+), subtraction(-), multiplication(*), division(/), modulus(%), exponential(**), increment(++) and decrement(--).

```js
let operandOne = 4;
let operandTwo = 3;
```
Using the above operands apply different JavaScript arithmetic operations.

## Exercises: Booleans Part

Boolean value is either true or false.

1. Write three JavaScript statement which provide truthy value.
1. Write three JavaScript statement which provide falsy value.

## Exercises: Comparison Operators

Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it  using console.log()

1. 4 > 3
1. 4 >= 3
1. 4 < 3
1. 4 <= 3
1. 4 == 4
1. 4 === 4
1. 4 != 4
1. 4 !== 4
1. 4 != '4'
1. 4 == '4'
1. 4 === '4'

## Exercises: Logical Operators
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
1. 4 > 3 && 10 < 12
1. 4 > 3 && 10 > 12
1. 4 > 3 || 10 < 12
1. 4 > 3 || 10 > 12
1. !(4 > 3)
1. !(4 < 3)
1. !(false)
1. !(4 > 3 && 10 < 12)
1. !(4 > 3 && 10 > 12)
1. !(4 === '4')




