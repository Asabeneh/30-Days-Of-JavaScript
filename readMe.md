##  Table of Contents

[Day 2 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_data_types.md)
--

![Thirty Days Of JavaScript](./images/day_1_1.png)

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

# 📔Day 1

## Introduction

**Congratulations** for deciding to participate in a 30 days of JavaScript programming challenge . In this challenge you will learn everything you need to be a JavaScript programmer and in general the whole concepts of programming. In the end of the challenge you will get a 30DaysOfJavaScript programming challenge certificate. Join the [telegram group](https://t.me/ThirtyDaysOfJavaScript).

**A 30DaysOfJavaScript** challenge is a guide for both beginners and advanced JavaScript developers. Welcome to JavaScript. I enjoy using and teaching JavaScript and I hope you will do so. JavaScript is the language of the browser.

In this step by step tutorial, you will learn JavaScript, the most popular programming language in the history of mankind.
You use JavaScript **_to add interactivity to websites, to develop mobile apps, desktop applications, games_** and nowadays JavaScript can be used for **_machine learning_** and **_AI_**.
**_JavaScript (JS)_** has increased in popularity in recent years and has been the leading
programming language for four consecutive years and is the most used programming language on
Github.

## Requirements

No prior knowledge of programming is required to follow this challenge. You need only:

1. Motivation
2. Computer
3. Internet
4. Browser
5. Code Editor

## Setup

I believe you have the motivation and a strong desire to be a developer, computer and Internet. If you have those, then you have everything.

### Install Node.js

You may not need it right now but you may need it for later. Install [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

After downloading double click and install

 ![Install node](images/install_node.png)

We can check if node is installed in our local machine by opening our device terminal or command  prompt.

```sh
asabeneh $ node -v
v12.14.0
```

I am using node version 12.14.0, which is the recommended version of node.

### Browser

There are many browsers out there. However, I strongly recommend Google Chrome.

#### Installing Google Chrome

Install [google chrome](https://www.google.com/chrome/) if you do not have one yet. We can write small JavaScript code on the browser console, but we do not use the browser console to develop applications.

![Google Chrome](images/google_chrome.png)

#### Opening Google Chrome Console

You can open Google Chrome either by clicking three dots at the top right corner of the Chrome browser or using a shortcut. I prefer using shortcuts.

![Opening chrome](images/opening_developer_tool.png)

To open the Chrome console using a short cut.

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

![Opening console](images/opening_chrome_console_shortcut.png)

After you open the Google Chrome console, try to explore the marked buttons. We will spend most of the time on the Console part. The Console is the place where your JavaScript code goes. The Google Console V8 engine changes your JavaScript code to machine code.
Let us write a JavaScript code on the Google Chrome console:

![write code on console](./images/js_code_on_chrome_console.png)

#### Writing Code on browser Console

We can write any JavaScript code on the Google console or any browser console. However, for this challenge, we only focus on Google Chrome console. Open the console using:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

To write our first JavaScript code, we used a builtin function **console.log()**. We passed an argument as input data, and the function displays the output. We passed 'Hello, World' as input data or argument in the console.log() function.

```js
console.log('Hello, World!')
```

##### Console.log with multiple arguments

The console.log(param1, param2, param3), can take multiple arguments.

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

As you can see from the above snippet code, *console.log()* can take multiple arguments.

Congratulations! You wrote your first JavaScript code using *console.log()*.

##### Comment

We add comments to our code. Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code. Any text starts with // in JavaScript is a comment or anything enclose like this /* */ is a comment.

**Example: Single Line Comment**

 // This is the first comment  
 // This is the second comment  
 // I am a single line comment  

**Example: Multiline Comment**

  /*
  This is a multiline comment  
  Multiline comments can take multiple lines  
  JavaScript is the language of the web  
  */

##### Syntax

JavaScript is a programming language. As a result, it has its syntax like other programming languages. If we do not write a syntax that JavaScript understands, it will raise different types of errors. We will explore different kinds of JavaScript errors later. For now, let us see syntax errors.

![Error](images/raising_syntax_error.png)

I made a deliberate mistake. As a result, the console raises a syntax error. Actually, the syntax is very informative. It informs what type of mistake we made. By reading the error feedback guideline, we can correct the syntax and fix the problem. The process of identifying and removing errors from a program is called debugging. Let us fix the errors:

```js
console.log("Hello, World!")
console.log('Hello, World!')
```

So far, we saw how to display text using a *console.log()*. If we are printing text or string using *console.log()*, the text has to be under the single, double, or backtick.
**Example:**

```js
console.log("Hello, World!")
console.log('Hello, World!')
console.log(`Hello, World!`)
```

#### Arithmetics

Now, let us practice more writing JavaScript codes using *console.log()* on google chrome console for number data types.
In addition to the text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations.

![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3)   // Addition
console.log(3 - 2)   // Subtraction
console.log(2 * 3)   // Multiplication  
console.log(3 / 2)   // Division
console.log(3 % 2)   // Modulus - finding remainder
console.log(3 ** 2)  // Exponential
```

### Code Editor

We can write our codes on the browser console, but it won't be for bigger projects. In a real working environment, developers use different code editors to write their codes. In this 30 days python JavaScript challenge, we will use visual studio code.

#### Installing Visual Studio Code

VVisual studio code is a very popular open-source text editor.  I would recommend to [download](https://code.visualstudio.com/) visual studio code, but if you are in favor of other editors, feel free to follow with what you have.

![Vscode](images/vscode.png)

If you installed visual studio code, let us start using it.

#### How to use visual studio code

Open the visual studio code by double-clicking the visual studio icon. When you open it, you will get this kind of interface. Try to interact with the labeled icons.

![Vscode ui](./images/vscode_ui.png)
![Vscode add project](./images/adding_project_to_vscode.png)
![Vscode open project](./images/opening_project_on_vscode.png)
![script file](images/scripts_on_vscode.png)
![running script](./images/running_script.png)
![coding running](./images/launched_on_new_tab.png)

## Adding JavaScript to a web page

JavaScript can be added to a web page in three different ways:
- **_Inline script_**
- **_Internal script_**
- **_External script_**
- **_Multiple External scripts_**

The following sections show different ways of adding JavaScript code to your web page.

### Inline Script

Create a folder on your desktop and  call it 30DaysOfJS or in any location and create an **_index.html_** file in the project folder. Then paste the following code and open it in a browser, either in [Chrome](https://www.google.com/chrome/).

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>30DaysOfScript:Inline Script</title>
    </head>
    <body>
      <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
    </body>
  </html>
```

Now, you wrote your first inline script. We can create a pop up alert message using the built-in *alert()* function.

### Internal script

The internal script can be written in the _head_ or the _body_, but it is preferred to put it on the body of the HTML document.
First, let us write on the head part of the page.

```html
<!DOCTYPE html>
  <html>
    <head>
       <title>30DaysOfScript:Internal Script</title>
      <script>
        console.log("Welcome to 30DaysOfJavaScript")
      </script>
    </head>
    <body>
    </body>
  </html>
```

This is how we write the internal script most of the time. Writing the JavaScript code in the body section is the most preferred place. Open the browser console to see the output from the console.log()

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

Open the browser console to see the output from the console.log()
![js code from vscode](./images/js_code_vscode.png)

### External script

Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body.
First, we should create an external JavaScript file with .js extension. Any JavaScript file ends with .js. Create a file introduction.js inside your project directory and write the following code and link this .js file at the bottom of the body.

```js
console.log('Welcome to 30DaysOfJavaScript')
```

External scripts in the head

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

External scripts in the body

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

Open the browser console to see the output from the console.log()

### Multiple External scripts

We can link multiple external JavaScript files to a web page.
Create a helloworld.js file inside the 30DaysOfJS folder and write the following code.

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

## Introduction to Data types

In JavaScript and also other programming languages, there are different kinds of data types. The following are JavaScript primitive data types:_String, Number, Boolean, undefined, Null_, and _Symbol_.

### Number

- Integer: Integer(negative, zero and positive) numbers
        Example:
        ... -3, -2, -1, 0, 1, 2, 3 ...
- Float: Decimal number
        Example
        ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### String

A collection of one or more characters under a single quote, double-quote, or backtick.
**Example:**

```js
'Asabeneh'
'Finland'
'JavaScript is a beautiful programming language'
"I love teaching"
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
```

### Booleans

A boolean value is either true or false. Any comparisons return a boolean value, which is either true or false.

A boolean data type is either a True or False value.

**Example:**

```js
    true  # if the light on ,the value is true
    false # if the light off, the value is False
```

### Undefined

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

```js
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet
```

### Null

Null in JavaScript means an empty value.

```js
let emptyValue = nulll
```

## Checking Data types

To check the data type of a certain data type, we use the **typeof** operator. See the following example.

```js
console.log(typeof 'Asabeneh') // string
console.log(typeof 5)          // number
console.log(typeof true )     // boolean
console.log(typeof null)      // object type
console.log(typeof undefined)  // undefined
```

## Comments

Commenting in JavaScript is similar to other programming languages. Comments are important in making your make code more readable.
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

## Variables

Variables are _containers_ of data. Variables used to _store_ data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use _var_, _let_, or _const_ keywords. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

For a variable that changes at a different time, we use _let_. If the data does not change at all, we use _const_. For example, PI, country name, gravity do no change, and we can use *const*.

* A JavaScript variable name  should not begin with a number.
* A JavaScript variable name does not allow special characters except dollar sign and underscore.
* A JavaScript variable name follows a camelCase convention.
* A JavaScript variable name should not have space between words.

The following are valid examples of JavaScript variables.
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

camelCase or the first way of declaring is conventional in JavaScript. In this material, we will use camelCase variables.
Invalid variable:

```sh
  first-name
  1_num
  num_#_1
```

Let us declare variables with different data types. To declare a variable, we need to use let or const keyword before the variable name. Following the variable name, we write an equal sign (assignment operator), and a value.

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

🌕  You are amazing. You have just completed day 1 challenge and you are in your way to greatness. Now do some exercises for your brain and for your muscle.

# 💻 Day 1: Exercises

1. Write a single line comment which says, _comments can make code readable_
2. Write another single comment which says, *welcome to 30DaysOfJavaScript*
3. Write a multiline comment which says, _comments can make code readable, easy to use_
   _and informative_

4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. Create datatypes.js file and use the JavaScript ***typeof*** operator to check different data types. Check the data type of each variable
6. Declare four variables without assigning values
7. Declare four variables with assigning values
8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. Declare variables to store your first name, last name, marital status, country and age in a single line
10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.

   ```sh
   Output:
   I am 25 years old.
   You are 30 years old.
   ```

🎉 CONGRATULATIONS ! 🎉

[Day 2 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_data_types.md)
