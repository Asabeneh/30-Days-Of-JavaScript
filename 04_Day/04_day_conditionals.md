## Table of Contents

[<< Day 3](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/03_Day/03_booleans_operators_date.md) | [Day 5 >>](#)
--

![Thirty Days Of JavaScript](./day_1_4.png)

- [📔 Day 4](#%f0%9f%93%94-day-4)
  - [Conditionals](#conditionals)
    - [if](#if)
    - [if else](#if-else)
    - [if else if else](#if-else-if-else)
    - [Switch](#switch)
    - [Ternary Operators](#ternary-operators)
- [💻 Exercise : Conditionals](#%f0%9f%92%bb-exercise--conditionals)

# 📔 Day 4

## Conditionals

Conditional statements are used to decision based on different conditions.
By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

- Conditional execution: a block of one or more statements will be executed if a certain expression is true
- Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover _if_, _else_ , _else if_ statements. The comparison and logical operator we learned in the previous sections will be useful in here.

Conditions can be implementing using the following ways:

- if
- if else
- if else if else
- switch
- ternary operator

### if

In JavaScript and other programming languages the key word _if_ use to check if a condition is true and to execute the block code. To create an if condition, we need _if_ keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

```js
// syntax
if (condition) {
  //this part of code run for truthy condition
}
```

**Example:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number
```

```js
let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}
```

As you can see in the above condition, 3 is greater than 0 and it is a positive number. The condition was true and the block code was executed. However, if the condition is false, we do not see a result. The same goes for the second condition, if isRaining is false the if block will not be executed and we do not see an output. In order to see the result of the falsy condition, we should have another block, which is going to be _else_.

### if else

If condition is true the first block will be executed, if not the else condition will be executed.

```js
// syntax
if (condition) {
  // this part of code run for truthy condition
} else {
  // this part of code run for false condition
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number
```

```js
let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.
```

The above condition is false, therefore the else block was executed. How about if our condition is more than two, we will use *else if* conditions.

### if else if else

On our daily life, we make decision on daily basis. We make decision not by checking  one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full conditions. We use *else if* when we have multiple conditions.

```js
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```

**Example:**

```js
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
```

```js
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}
```

### Switch

Switch  is an alternative for **if else if else else**.
The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block run if the value in the switch statement parenthesis match with the case vale. The break is to terminate and it does not go down after the condition is satisfied.  The default block run if all the cases don't satisfy the condition.

```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
  // code
  default:
   // code
}
```

```js
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}
// Switch More Examples
var dayUserInput = prompt('What day is today ?')
var day = dayUserInput.toLowerCase()
switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break

  default:
    console.log('It is not a week day.')
}
```

### Ternary Operators

Another way to write conditionals is using ternary operators. We have covered this in other sections but we should also mention it here.

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

🌕  You are extraordinary and you have a remarkable potential. You have just completed day 4 challenge and you are four steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.  

# 💻 Exercise  : Conditionals

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```

1. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

1. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways

    - using if else
    - ternary operator.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```

1. Write a code which give grade students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0 -49, F
1. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is:
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer

1. Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number 9
    9 is is an odd number.
    ```

1. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day is today? Saturday
    Saturday is a weekend day.

    What is the day today? saturDaY
    Saturday is a weekend day.

    What is the day today? Friday
    Friday is a work day.

    What is the day today? FrIDAy
    Friday is a work day.
  ```

1. Write a program which tells the number days in a month.

  ```sh
    Enter month: January
    January has 31 days.

    Enter month: JANUARY
    January has 31 day

    Enter month: February
    February has 28 days.

    Enter month: FEbruary
    February has 28 days.
  ```


🎉 CONGRATULATIONS ! 🎉

[<< Day 3](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/03_Day/03_booleans_operators_date.md) | [Day 5 >>](#)