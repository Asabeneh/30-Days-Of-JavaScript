<div align="center">
  <h1> 30 Days Of JavaScript</h1>
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
  <div>

  🇬🇧 [English](./readMe.md)
  🇪🇸 [Spanish](./Spanish/readme.md)
  🇷🇺 [Russian](./RU/README.md)

  </div>

</div>
</div>

<div>

<small>Support [**Asabeneh**](https://www.patreon.com/asabeneh?fan_landing=true) to create more educational materials</small>  
[<img src = './images/become_patreon.png' alt='become-asabeneh-patreon' title='click' />](https://www.patreon.com/asabeneh?fan_landing=true) 
 
</div>


[Go to Day 2 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_data_types.md)

![Thirty Days Of JavaScript](./images/day_1_1.png)

- [📔Day 1](#day-1)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Install Node.js](#install-nodejs)
    - [Browser](#browser)
      - [Installing Google Chrome](#installing-google-chrome)
      - [Opening Google Chrome Console](#opening-google-chrome-console)
      - [Writing Code on Browser Console](#writing-code-on-browser-console)
        - [Console.log](#consolelog)
        - [Console.log with Multiple Arguments](#consolelog-with-multiple-arguments)
        - [Comment](#comment)
        - [Syntax](#syntax)
      - [Arithmetics](#arithmetics)
    - [Code Editor](#code-editor)
      - [Installing Visual Studio Code](#installing-visual-studio-code)
      - [How to Use Visual Studio Code](#how-to-use-visual-studio-code)
  - [Adding JavaScript to a Web Page](#adding-javascript-to-a-web-page)
    - [Inline Script](#inline-script)
    - [Internal Script](#internal-script)
    - [External Script](#external-script)
  - [Introduction to Data types](#introduction-to-data-types)
    - [Number](#number)
    - [String](#string)
    - [Booleans](#booleans)
    - [Undefined](#undefined)
    - [Null](#null)
  - [Checking Data Types](#checking-data-types)
  - [Comments Again](#comments-again)
  - [Variables](#variables)
- [💻 Day 1: Exercises](#-day-1-exercises)

# 📔Day 1

## Introduction
**Congratulations** on deciding to participate in 30 days of JavaScript programming challenge. In this challenge, you will learn everything you need to be a JavaScript programmer, and in general, the whole concept of programming. At the end of the challenge, you will get a 30DaysOfJavaScript programming challenge completion certificate. In case you need help or would like to help others, you may join the [telegram group](https://t.me/ThirtyDaysOfJavaScript).

**A 30DaysOfJavaScript** challenge is a guide for both beginners and advanced JavaScript developers. Welcome to JavaScript. JavaScript is the language of the web. I enjoy using and teaching JavaScript, and I hope you will do so too. 

In this step-by-step tutorial, you will learn JavaScript, the most popular programming language in the history of mankind. 
JavaScript is used to **_add interactivity to websites, to develop mobile apps, desktop applications, games_** and nowadays, JavaScript can be used for **_machine learning_** and **_AI_**. JavaScript (JS) has increased in popularity in recent years and has been the leading programming language for six consecutive years and is the most used programming language on Github.

## Requirements

No prior knowledge of programming is required to follow this challenge. You need only:

1. Motivation
2. A Computer
3. Internet
4. A Browser
5. A Code Editor

## Setup

I believe you have the motivation and a strong desire to be a developer, a computer and Internet. If you have those, then you have everything to get started.

### Install Node.js

You may not need node.js right now but you may need it for later. Install [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

After downloading double click and install

 ![Install node](images/install_node.png)

We can check if node is installed on our local machine by opening our device terminal or command prompt.

```sh
asabeneh $ node -v
v12.14.0
```

When making this tutorial I was using node version 12.14.0, but now the recommended version of node.js for download is 12.17.0.

### Browser

There are many browsers out there. However, I strongly recommend Google Chrome.

#### Installing Google Chrome

Install [google chrome](https://www.google.com/chrome/) if you do not have one yet. We can write small JavaScript code on the browser console, but we do not use the browser console to develop applications.

![Google Chrome](images/google_chrome.png)

#### Opening Google Chrome Console

You can open Google Chrome console either by clicking three dots at the top right corner of the browser, selecting _More tools -> Developer tools_ or using a keyboard shortcut. I prefer using shortcuts.

![Opening chrome](images/opening_developer_tool.png)

To open the Chrome console using a keyboard shortcut.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](images/opening_chrome_console_shortcut.png)

After you open the Google Chrome console, try to explore the marked buttons. We will spend most of the time on the Console. The Console is the place where your JavaScript code goes. The Google Console V8 engine changes your JavaScript code to machine code. Let us write a JavaScript code on the Google Chrome console:

![write code on console](./images/js_code_on_chrome_console.png)

#### Writing Code on Browser Console

We can write any JavaScript code on the Google console or any browser console. However, for this challenge, we only focus on Google Chrome console. Open the console using:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

To write our first JavaScript code, we used a built-in function **console.log()**. We passed an argument as input data, and the function displays the output. We passed 'Hello, World' as input data or argument in the console.log() function.

```js
console.log('Hello, World!')
```

##### Console.log with Multiple Arguments

The **console.log()** function can take multiple arguments in the form: **console.log(param1, param2, param3)**. 

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

As you can see from the snippet code above, *console.log()* can take multiple arguments.

Congratulations! You just wrote your first JavaScript code using *console.log()*.

##### Comments

We add comments to our code. Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code. In JavaScript, any text line starting with **//** is a comment, and anything enclosed in between **/*** and ***/** is a comment.

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

Programming languages are similar to human languages. English and many other languages use words, phrases, sentences and more to convey meaningful messages. The English meaning of syntax is the _arrangement of words and phrases to create well-formed sentences in a language_. The technical definition of syntax is _the structure of statements in a computer language_. Programing languages have syntax. JavaScript is a programming language and like other programming languages, it has its own syntax. If we do not write a syntax that JavaScript understands, it will return different types of errors. We will explore different kinds of JavaScript errors later. For now, let us look at syntax errors.

![Error](images/raising_syntax_error.png)

I made deliberate mistakes. As a result, the console raises syntax errors. Actually, the syntax is very informative. It informs what type of mistake was made. By reading the error feedback guideline, we can correct the syntax and fix the problem. The process of identifying and removing errors from a program is called debugging. Let us fix the errors:

```js
console.log("Hello, World!")
console.log('Hello, World!')
```

So far, we saw how to display text using the console.log() function. If we are printing text or string using console.log(), the text has to be inside the single quotes, double quotes, or backtick quotes.
**Example:**

```js
console.log("Hello, World!")
console.log('Hello, World!')
console.log(`Hello, World!`)
```

#### Arithmetics

Now, let us practice more writing JavaScript codes using *console.log()* on google chrome console for number data types. In addition to the text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations.
P. S. The console can directly take arguments without the **_console.log()_** function. However, it is included in this introduction because most of this challenge would be taking place in a text editor where the usage of the function would be mandatory. You can play around directly with instructions on the console. 

![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3)   // Addition
console.log(3 - 2)   // Subtraction
console.log(2 * 3)   // Multiplication  
console.log(3 / 2)   // Division
console.log(3 % 2)   // Modulus - finding remainder
console.log(3 ** 2)  // Exponentiation 3 ** 2 == 3 * 3
```

### Code Editor

We can write our codes on the browser console, but it won't do for actual projects. In a real working environment, developers use different code editors to write their codes. In this 30 days JavaScript challenge, we will be using Visual Studio Code.

#### Installing Visual Studio Code

Visual studio code is a very popular open-source text editor.  I would recommend to [download Visual Studio Code](https://code.visualstudio.com/), but if you are in favor of other editors, feel free to follow with what you have.

![Vscode](images/vscode.png)

If you installed Visual Studio Code, let us start using it.

#### How to Use Visual Studio Code

Open the Visual Studio Code by double-clicking its icon. When you open it, you will get this kind of interface. Try to interact with the labeled icons.

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![Installing Live Server](images/vsc_live_server.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)

## Adding JavaScript to a Web Page

JavaScript can be added to a web page in three different ways:
- **_Inline script_**
- **_Internal script_**
- **_External script(s)_**

The following sections show different ways of adding JavaScript code to your web page.

### Inline Script

Create a project folder on your desktop or any other location, name it 30DaysOfJS and create an **_index.html_** file in the project folder. Then paste the following code and open it in a browser, for example, [Chrome](https://www.google.com/chrome/).

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

Now, you just wrote your first inline script. We can create a pop up alert message using the **_alert()_** function.

### Internal Script

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

This is how we write an internal script most of the time. Writing the JavaScript code in the body section is the most preferred option. 

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

Open the browser console to see the output of the console.log() argument.

![js code from vscode](./images/js_code_vscode.png)

### External Script(s)

Similar to the internal script, the external script link can be on the header or body, but it is better to put it in the body. First, we should create an external JavaScript file with .js extension. All files ending with .js extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code. Link this .js file at the bottom of the body.

```js
console.log('Welcome to 30DaysOfJavaScript')
```

External scripts in the _head_:

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>30DaysOfJavaScript:External script</title>
      <script src="introduction.js"></script>
    </head>
    <body>
    </body>
    </html>
```

External scripts in the _body_:

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
    </html>
```

Open the browser console to see the output of the console.log() argument.


We can also link **multiple external JavaScript files** to a web page.
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
  </html>
```

**_Your main JavaScript file should be below all other scripts_**. It is very important to remember this.

![Multiple Script](./images/multiple_script.png)

## Introduction to Data types

In JavaScript and also other programming languages, there are different kinds of data types. The following are JavaScript primitive data types: _String, Number, Boolean, undefined, Null_, and _Symbol_.

### Numbers

- Integers: Integer (negative, zero and positive) numbers
        Example:
        ... -3, -2, -1, 0, 1, 2, 3 ...
- Floating-point numbers: Decimal number
        Example
        ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### Strings

A collection of one or more characters between two single quotes, double quotes, or backtick quotes.
**Example:**

```js
'Asabeneh'
'Finland'
'JavaScript is a beautiful programming language'
"I love teaching"
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
```

### Booleans

A boolean value is either True or False. Any comparisons return a boolean value, which is either true or false.

A boolean data type is either a true or false value.

**Example:**

```js
    2+2= 4;
    true  // the console would return the true value because the equation above is correct
    2 ** 2= 8;
    false // the console would return the true value because the equation above is incorrect
```

### Undefined

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

```js
let firstName;
console.log(firstName); //returns undefined because it is not assigned a value yet
```

### Null

Null in JavaScript means an empty value.

```js
let emptyValue = null
```

## Checking Data Types

To check the data type of a certain variable, we use the **typeof** operator. See the following example.

```js
console.log(typeof 'Asabeneh') // string
console.log(typeof 5)          // number
console.log(typeof true )      // boolean
console.log(typeof null)       // object type
console.log(typeof undefined)  // undefined
```

## Comments, Again!

Remember that commenting in JavaScript is similar to other programming languages. Comments are important in making your make code more readable.
There are two ways of commenting:

- _Single line commenting_
- _Multiline commenting_

```js
// commenting the code itself with a single comment
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

Variables are _containers_ of data. Variables are used to _store_ data in a memory location. When a variable is declared, a memory location is reserved. When a value (data) is assigned to a variable, the memory space will be filled with that data. To declare a variable, we use _var_, _let_, or _const_ keywords. 
For a variable that changes at a different time, we use _let_. If the data does not change at all, we use _const_. For example, PI, country name, gravity do not change, so we use *const*. We will not be using _var_ in this challenge and I don't recommend you to use it. It is an error-prone way of declaring variable and it has lots of leaks.
We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is all you need to proceed.


A valid JavaScript variable name must follow the follow rules.

- A JavaScript variable name  should not begin with a number.
- A JavaScript variable name does not allow special characters except dollar sign and underscore.
- A JavaScript variable name should not have space between words.

The following are examples of valid JavaScript variables.

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
    is_married
    capital_city

    num1
    num_1
    _num_1
    $num1
    year2020
    year_2020
```

The first and second variables on the list follows the camelCase convention of declaring in JavaScript. In this material, we will be using camelCase variables.

Examples of invalid variables:

```sh
  first-name
  1_num
  num_#_1
```

Let us declare variables with different data types. To declare a variable, we need to use *let* or *const* keyword before the variable name. Following the variable name, we write an equal sign (assignment operator), and a value (assigned data).

```js
  // Syntax
  let nameOfVariable = value  
```

**Examples of declared variables**

```js
// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
```

```sh
Asabeneh Yetayeh Finland Helsinki 100 True
```

```js
// Declaring variables with number values
let age = 100             // age in years
const gravity = 9.81      // earth gravity  in m/s2
const boilingPoint = 100  // water boiling point, temperature in oC
const PI = 3.14           // geometrical constant

console.log(gravity, boilingPoint, PI)
```

```sh
9.81 100 3.14
```

```js
// Variables can also be declaring in one line separated by comma
let name = 'Asabeneh', // name of a person
  job = 'teacher',
  live = 'Finland';
console.log(name, job, live);
```

```sh
Asabeneh teacher Finland
```

When you run the *index.html* file in the 01-Day folder, you should get this:

![Day one](./images/day_1.png)

🌕  You are amazing! You have just completed day 1 challenge and you are on your way to greatness. Now do some exercises for your brain and muscle.

# 💻 Day 1: Exercises

1. Write a single line comment which says, _comments can make code readable_
2. Write another single comment which says, *Welcome to 30DaysOfJavaScript*
3. Write a multiline comment which says, _comments can make code readable and easy to reuse_
   _and informative_

4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. Create datatypes.js file and use the JavaScript ***typeof*** operator to check different data types. Check the data type of each variable
6. Declare four variables without assigning values
7. Declare four variables with assigned values
8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. Declare variables to store your first name, last name, marital status, country and age in a single line
10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.

   ```sh
   I am 25 years old.
   You are 30 years old.
   ```

🎉 CONGRATULATIONS ! 🎉

[Day 2 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_data_types.md)
