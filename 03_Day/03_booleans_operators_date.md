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
</div>

[<< Day 2](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_data_types.md) | [Day 4 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/04_Day/04_day_conditionals.md)

![Thirty Days Of JavaScript](../images/banners/day_1_3.png)

- [📔 Day 3](#-day-3)
  - [Booleans](#booleans)
    - [Truthy Values](#truthy-values)
    - [Falsy Values](#falsy-values)
  - [Undefined](#undefined)
  - [Null](#null)
  - [Operators](#operators)
    - [Assignment Operators](#assignment-operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
    - [Increment Operator](#increment-operator)
    - [Decrement Operator](#decrement-operator)
    - [Ternary Operators](#ternary-operators)
    - [Operator Precendence](#operator-precendence)
  - [Window Methods](#window-methods)
    - [Window Alert() Method](#window-alert-method)
    - [Window Prompt() Method](#window-prompt-method)
    - [Window Confirm() Method](#window-confirm-method)
  - [Date Object](#date-object)
    - [Creating a Time Object](#creating-a-time-object)
    - [Getting Full Year](#getting-full-year)
    - [Getting Month](#getting-month)
    - [Getting Date](#getting-date)
    - [Getting Day](#getting-day)
    - [Getting Hours](#getting-hours)
    - [Getting Minutes](#getting-minutes)
    - [Getting Seconds](#getting-seconds)
    - [Getting Time](#getting-time)
  - [💻 Day 3: Exercises](#-day-3-exercises)
    - [Exercises: Level 1](#exercises-level-1)
    - [Exercises: Level 2](#exercises-level-2)
    - [Exercises: Level 3](#exercises-level-3)

# 📔 Day 3

## Booleans

A boolean data type represents one of the two values:_true_ or _false_. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value, true or false.

**Example: Boolean Values**

```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
```

We agreed that boolean values are either true or false.

### Truthy Values

- All numbers(positive and negative) are truthy except zero
- All strings are truthy
- The boolean true

### Falsy Values

- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty strings

It is good to remember those truthy values and falsy values. In later sections, we will use them with conditions to make decisions.

## Undefined

If we declare a variable and we do not assign it a value, the value will be undefined. In addition to this, if a function is not returning a value, it will also be undefined.

```js
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet
```

## Null

```js
let empty = null
console.log(empty) // -> null , means no value
```

## Operators

### Assignment Operators

An equal sign in JavaScript is an assignment operator. It is used to assign a value to a variable.

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
- Modulus(%): a % b
- Exponentiation(**): a ** b

```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

```

```js
let PI = 3.14
let radius = 100          // length in meters

const gravity = 9.81      // in m/s²
let mass = 72             // in Kilograms
const boilingPoint = 100  // temperature in °C, boiling point of water
const bodyTemp = 37       // body temperature in °C

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N (Newtons)

//Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 °C.
 Human body temperature is 37 °C.
 The gravity of earth is 9.81 m/s².
 */
console.log(
  `The boiling point of water is ${boilingPoint} °C.\nHuman body temperature is ${bodyTemp} °C.\nThe gravity of earth is ${gravity} m / s².`
)
```

### Comparison Operators

In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to another value.

![Comparison Operators](../images/comparison_operators.png)
**Example: Comparison Operators**

```js
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(0 === false)        // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length != 'meat'.length)      // false
console.log('milk'.length == 'meat'.length)      // true
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

Try to understand the above comparisons with some logic. Remember without any logic it might be difficult.
JavaScript is somehow a wired kind of programming language. JavaScript code runs and gives you a result, but unless you are good at it, may not be the desired result.

As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==. The following [link](https://dorey.github.io/JavaScript-Equality-Table/) has an exhaustive list of comparisons of data types.

### Logical Operators

The following symbols are the common logical operators:
&& (ampersand) , || (pipe) and ! (negation).
&& gets true only if the two operands are true.
|| gets true if either one of the operands is true.
! negates true to false, false to true.

```js
// && ampersand operator example

const check = 4 > 3 && 10 > 5 // true && true -> true
const check = 4 > 3 && 10 < 5 // true && false -> false
const check = 4 < 3 && 10 < 5 // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5 // true  || true -> true
const check = 4 > 3 || 10 < 5 // true  || false -> true
const check = 4 < 3 || 10 < 5 // false || false -> false

// ! Negation examples

let check = 4 > 3            // true
let check = !(4 > 3)         //  false
let isLightOn = true
let isLightOff = !isLightOn  // false
let isMarried = !false       // true
```

### Increment Operator

In JavaScrip we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each one of them:

1. Pre-increment

```js
let count = 0
console.log(++count) // 1
console.log(count)   // 1
```

2. Post-increment

```js
let count = 0
console.log(count++) // 0
console.log(count)  // 1
```

We use most of the time post-increment. You should at least remember how to use post-increment operator.

### Decrement Operator

In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each one of them:

1. Pre-decrement

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Post-decrement

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Ternary Operators

Ternary operator allows to write a condition.
Another way to write conditionals is using ternary operators. Look at the following examples:

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

```sh
You need a rain coat.
No need for a rain coat.
```

```js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
```

```sh
5 is a positive number
-5 is a negative number
```

### Operator Precendence

I would like to recommend you to read about operator precendence from this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Window Methods

### Window Alert() Method

As you have seen at very beginning, alert() method displays an alert box with a specified message and an OK button. It is a built-in method and it takes one argument optionally.

```js
alert(message)
```

```js
alert('Welcome to 30DaysOfJavaScript')
```

Do not use alert() too much, because it is destructing and annoying, use it just for testing.

### Window Prompt() Method

The window prompt method displays a prompt box with an input on your browser, to take input values. The input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

```js
prompt('required text', 'optional text')
```

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window Confirm() Method

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
A confirm box is often used to ask permission from a user to do something. Window confirm() takes a string as an argument.
Clicking the OK yields true value, clicking the Cancel button yields false value.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
```

These are not all the window methods. We will have a separate section to go deep into window methods.

## Date Object

Time is an important thing. We like to know the time of certain activities or events. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time. The methods we use to get date and time information from a date object start with a word _get_.
_getFullYear(), getMonths(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

![Date time Object](../images/date_time_object.png)

### Creating a Time Object

Once we create time object. The time object will provide information about time. Let us create a time object

```js
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

We have created a time object and we can access any date time information from the object, using the get methods we have mentioned before.

### Getting Full Year

Let's extract or get the year from a time object.

```js
const now = new Date()
console.log(now.getFullYear()) // 2020
```

### Getting Month

Let's extract or get the month from a time object.

```js
const now = new Date()
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
```

### Getting Date

Let's extract or get the day of the month from a time object.

```js
const now = new Date()
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(0-31)
```

### Getting Day

Let's extract or get the day of the week from a time object.

```js
const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 6th day of the week
// Getting the weekday as a number (0-6), 0 is Sunday
```

### Getting Hours

Let's extract or get the hours from a time object.

```js
const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41
```

### Getting minutes

Let's extract or get the minutes from a time object.

```js
const now = new Date()
console.log(now.getMinutes()) // 56, because the time is 00:56:41
```

### Getting Seconds

Let's extract or get the seconds from a time object.

```js
const now = new Date()
console.log(now.getSeconds()) // 41, because the time is 00:56:41
```

### Getting Time

This method gives time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

1. Using _getTime()_

```js
const now = new Date() //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
```

2. Using _Date.now()_

```js
const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Let us format these values to a format readable by humans:

**Example:**

```js
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
```

🌕 You have boundless energy. You have just completed day 3 challenges and you are three steps ahead on your way to greatness. Now do some exercises for your brain and for your muscle.

## 💻 Day 3: Exercises

### Exercises: Level 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign values to it. Use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   1. Write three JavaScript statements which provide truthy values.
   2. Write three JavaScript statements which provide falsy values.

5. Figure out the result of the following comparison expression, first without using console.log(). After you get the result, confirm it using console.log():
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions, first without using console.log(). After you get the result confirm it by using console.log():
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python

7. Use the Date object to do the following activities:
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hour now? - hours only
   6. What is the hour now? - minutes only
   7. Find out the number of seconds elapsed from January 1, 1970 to now.

### Exercises: Level 2

1. Write a script that prompts the user to enter base b and height h of a triangle and calculate its area (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 50
   ```

2. Write a script that prompts the user to enter side a, side b, and side c of a triangle and then calculate the perimeter of the triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

3. Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter of rectangle (perimeter = 2 x (length + width))
4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle (c = 2 x pi x r) where pi = 3.14.
5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
7. Compare the slopes in questions 5 and 6.
8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
9. Writ a script that prompts a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earnings are 1120
    ```

10. If the length of your name is greater than 7, say your name is long, otherwise say your name is short.
11. Compare your first name length and your family name length. You should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

12. Declare two variables _myAge_ and _yourAge_ and assign them initial values. Compare them and write the result as a message similar to the output below:

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

13. Using prompt get the year the user was born. If the user is 18 or above allow the user to drive, if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

14. Write a script that prompts the user to enter number of years. Calculate the number of seconds a person can live. Assume someone lives just hundred years:

   ```sh
   Enter number of yours you live: 100
   You lived 3153600000 seconds.
   ```

15. Create a human readable time format using the Date time object
   1. YYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYY HH:mm

### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hours and the minutes output should be all the time two digits long (7 hours should be 07 and 5 minutes should be 05)
   1. YYY-MM-DD HH:mm eg. 2020-01-02 07:05

🎉 CONGRATULATIONS ! 🎉

[<< Day 2](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/02_Day/02_day_data_types.md) | [Day 4 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/04_Day/04_day_conditionals.md)
