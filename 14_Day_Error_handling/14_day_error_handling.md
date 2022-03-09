<div align="center">
  <h1> 30 Days Of JavaScript: Error handling</h1>
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

[<< Day 13](../13_Day_Console_object_methods/13_day_console_object_methods.md) | [Day 15>>](../15_Day_Classes/15_day_classes.md)

![Thirty Days Of JavaScript](../images/banners/day_1_14.png)

- [Day 14](#day-14)
	- [Error Handling](#error-handling)
		- [Error Types](#error-types)
	- [Exercises](#exercises)
		- [Exercises:Level 1](#exerciseslevel-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises:Level](#exerciseslevel)

# Day 14

## Error Handling

JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

```js
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
```

**try**: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

**catch**: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

**finally**: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

**Example:**

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
```

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
In any case it  will be executed
```

The catch block take a parameter. It is common to pass e, err or error as a parameter to the catch block. This parameter is an object and it has name and message keys. Lets use the name and message.

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}
```

```sh
Name of the error ReferenceError
Error message fistName is not defined
In any case I will be executed
```

throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:

```js
throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required
```

```js
const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()
```

### Error Types

- ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

```js
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)
```

```sh
Uncaught ReferenceError: lastName is not defined
    at <anonymous>:2:35
```

- SyntaxError: A syntax error has occurred

```js
let square = 2 x 2
console.log(square)

console.log('Hello, world")
```

```sh
Uncaught SyntaxError: Unexpected identifier
```

- TypeError: A type error has occurred

```js
let num = 10
console.log(num.toLowerCase())
```

```sh
Uncaught TypeError: num.toLowerCase is not a function
    at <anonymous>:2:17
```

These are some of the common error you may face when you write a code. Understanding errors can help you to know what mistakes you made and it will help you to debug your code fast.

🌕 You are flawless. Now, you knew how to handle errors and you can write robust application which handle unexpected user inputs. You have just completed day 14 challenges and you are 14 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.

## Exercises

### Exercises:Level 1

Practice

### Exercises: Level 2

Practice

### Exercises:Level

Practice

🎉 CONGRATULATIONS ! 🎉

[<< Day 13](../13_Day_Console_object_methods/13_day_console_object_methods.md) | [Day 15>>](../15_Day_Classes/15_day_classes.md)
