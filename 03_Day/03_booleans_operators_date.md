## Table of Contents

[<< Day 2](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_strings.md) | [Day 4 >>](#)
--

![Thirty Days Of JavaScript](./day_1_3.png)

- [📔 Day 3](#%f0%9f%93%94-day-3)
  - [Booleans](#booleans)
    - [Truthy values](#truthy-values)
    - [Falsy values](#falsy-values)
  - [Undefined](#undefined)
  - [Null](#null)
  - [Operators](#operators)
    - [Assignment operators](#assignment-operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
    - [Increment Operator](#increment-operator)
    - [Decrement Operator](#decrement-operator)
      - [Ternary Operators](#ternary-operators)
    - [Operator Precendence](#operator-precendence)
  - [Window Methods](#window-methods)
    - [Window alert() method](#window-alert-method)
    - [Window prompt() method](#window-prompt-method)
    - [Window confirm() method](#window-confirm-method)
  - [Date Object](#date-object)
    - [Creating a time object](#creating-a-time-object)
    - [Getting full year](#getting-full-year)
    - [Getting month](#getting-month)
    - [Getting date](#getting-date)
    - [Getting day](#getting-day)
    - [Getting hours](#getting-hours)
    - [Getting minutes](#getting-minutes)
    - [Getting seconds](#getting-seconds)
    - [Getting time](#getting-time)
- [💻 Day 3: Exercises](#%f0%9f%92%bb-day-3-exercises)
  - [1. Exercises: Data types Part](#1-exercises-data-types-part)
  - [2. Exercises: Arithmetic Operators Part](#2-exercises-arithmetic-operators-part)
  - [3. Exercises: Booleans Part](#3-exercises-booleans-part)
  - [4. Exercises: Comparison Operators](#4-exercises-comparison-operators)
  - [5. Exercises: Logical Operators](#5-exercises-logical-operators)
  - [6 Ternary Operator](#6-ternary-operator)
  - [7. Exercises: Date time Object](#7-exercises-date-time-object)
  - [&lt;&lt; Day 2 | Day 4 &gt;&gt;](#ltlt-day-2--day-4-gtgt-1)

# 📔 Day 3

## Booleans

A boolean data type represents one of the two values:_true_ or _false_. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator.  Any comparisons return a boolean value which is either true or false.

**Example: Boolean Values**

```js
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3    // true
let falseValue = 3 < 4  // false
```

We agreed that boolean values are either true or false.

### Truthy values

- All numbers(positive and negative) are truthy except zero
- All strings are truthy
- The boolean true
  
### Falsy values

- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty string

It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decision.

## Undefined

If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value will be undefined.

```js
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet
```

## Null

```js
let empty = null;
console.log(empty); // -> null , means no value
```

## Operators

### Assignment operators

An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

```js
let firstName = 'Asabeneh'
let country = 'Finland'
```

Assignment Operators

![Assignment operators](../images/assignment_operators.png)

### Arithmetic Operators

Arithmetic operators are mathematical operators.

- Addition(+): a + b
- Subtraction(-): a - b
- Multiplication(*): a * b
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

### Comparison Operators

In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

![Comparison Operators](../images/comparison_operators.png)
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

### Logical Operators

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

### Increment Operator

In JavaScrip we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

1. Pre-increment

```js
let count = 0
console.log(++count) // 1
console.log(count)    // 1
```

1. Post-increment

```js
let count = 0
console.log(count++) // 0
console.log(count)    // 1
```

We use most of the time post-increment. At leas you should remember how to use post-increment operator.

### Decrement Operator

In JavaScrip we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them:

1. Pre-decrement

```js
let count = 0
console.log(--count) // -1
console.log(count)    // -1
```

2. Post-decrement

```js
let count = 0
console.log(count--) // 0
console.log(count)    // -1
```

#### Ternary Operators

Ternary operator allows to write a condition.
Another way to write conditionals is using ternary operators. Look at the following examples:

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');
```

```sh
You need a rain coat.
No need for a rain coat.
```

```js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a number number`);
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a number number`);
```

```sh
5 is a positive number
-5 is a number number
```

### Operator Precendence

I would like to recommend you to read about operator precendence from this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Window Methods

### Window alert() method

As you have seen at very beginning  alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.

```js
alert(message)
```

```js
alert('Welcome to 30DaysOfJavaScript')
```

Do not use too much alert because it is destructing and annoying, use it just for to test.

### Window prompt() method

The window prompt methods display a prompt box  with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

```js
prompt('required text', 'optional text')
```

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window confirm() method

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
A confirm box is often used to ask permission from a user to do something. Window confirm() takes an string as an argument.
Clicking the OK yields true value, clicking the Cancel yields true value.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
```

These are not all the window methods we will have a separate section to go deep into window methods.

## Date Object

Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word _get_ because it provide the information.
_getFullYear(), getMonths(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

![Date time Object](../images/date_time_object.png)

### Creating a time object

Once we create time object. The time object will provide information about time. Let us create a time object

```js
const now  = new Date ()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.

### Getting full year

Let's extract or get the full  from a time object.

```js
const now  = new Date ()
console.log(now.getFullYear()) // 2020
```

### Getting month

Let's extract or get the month from a time object.

```js
const now  = new Date ()
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
```

### Getting date

Let's extract or get the date of the month from a time object.

```js
const now  = new Date ()
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(0-31)
```

### Getting day

Let's extract or get the day of the week from a time object.

```js
const now  = new Date ()
console.log(now.getDay()) // 6, because the day is Saturday which is the 5th day, 
// Getting the weekday as a number (0-6)
```

### Getting hours

Let's extract or get the hours from a time object.

```js
const now  = new Date ()
console.log(now.getHours()) // 0, because the time is 00:56:41
```

### Getting minutes

Let's extract or get the minutes from a time object.

```js
const now  = new Date ()
console.log(now.getMinutes()) // 56, because the time is 00:56:41
```

### Getting seconds

Let's extract or get the seconds from a time object.

```js
const now  = new Date ()
console.log(now.getSeconds()) // 41, because the time is 00:56:41
```

### Getting time

This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

1. Using *getTime()*

```js
const now  = new Date () //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
```

1. Using *Date.now()*

```js
const allSeconds  = Date.now () //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
const timeInSeconds = new Date ().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Let us format these values to a human readable time format.
**Example:**

```js
const now = new Date ();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes();// return number (0 -59)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
```

🌕  You have completed day 3 challenge. Now do some exercises for you brain and for your muscle.  

# 💻 Day 3: Exercises

## 1. Exercises: Data types Part

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it

1. The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.

## 2. Exercises: Arithmetic Operators Part

JavaScript arithmetic operators are addition(+), subtraction(-), multiplication(*), division(/), modulus(%), exponential(**), increment(++) and decrement(--).

```js
let operandOne = 4;
let operandTwo = 3;
```

Using the above operands apply different JavaScript arithmetic operations.

## 3. Exercises: Booleans Part

Boolean value is either true or false.

1. Write three JavaScript statement which provide truthy value.
1. Write three JavaScript statement which provide falsy value.

## 4. Exercises: Comparison Operators

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

## 5. Exercises: Logical Operators

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

## 6 Ternary Operator

1. If the length of your name is greater than 7 say, your name is long else say your name is short.
1. Compare your first name length and your family name length and you should get this output.

```js
let firstName = 'Asabeneh'
let lastName = 'Yetayeh
```

```sh
//Output
Your first name, Asabeneh is longer than your family name, Yetayeh
```

1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.
   Output:

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   //output
   I am 225 years older than you.
   ```

1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

```js
// if the age is 25
You are 25. You are old enough to drive
// if the age is under 18
 You are 15. You will be allowed to drive after 3 years.
```

## 7. Exercises: Date time Object

1. What is the year today?
1. What is the month today as a number?
1. What is the date today?
1. What is the day today as a number?
1. What is the hours now?
1. What is the minutes now?
1. Find out the numbers of seconds elapsed from January 1, 1970 to now.
1. Create a human readable time format
   1. YYY-MM-DD  HH:mm:ss
   2. DD-MM-YYYY HH:mm:ss
   3. DD/MM/YYY HH:mm:ss

🎉 CONGRATULATIONS ! 🎉

[<< Day 2](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_strings.md) | [Day 4 >>](#)
--