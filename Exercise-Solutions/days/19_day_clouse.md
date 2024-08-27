  # Day 19  - Closures
 
## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>


 #### [Home](../README.md) | [<< Day 18](./18_day_promise.md) | [Day 20 >>](./20_day_cleanCode.md)

## Exercise Solutions

### Exercises: Level 1

1. Create a closure which has one inner function
```js
// app.js
function myFunction(){
  let firstName ="Nevzat"
  let lastName = "Atalay"
  
  function innerFunction(){
   return console.log(firstName,lastName)
  }
  return innerFunction
}

const innerFun = myFunction()

innerFun()
```
### Exercises: Level 2

1. Create a closure which has three inner functions
```js
// app.js

function myFunction(){
  let a =5
  let b = 7
  
  function total(){
   return a + b 
  }
  function extraction(){
    return a - b
  }
  function multiply(){
    return a * b 
  }

  return{
    total:total(),
    extraction:extraction(),
    multiply:multiply()
  }

  
}

const innerFun = myFunction()

console.log(innerFun.total)
console.log(innerFun.extraction)
console.log(innerFun.multiply)

```
### Exercises: Level 3

1. Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


 #### [Home](../README.md) | [<< Day 18](./18_day_promise.md) | [Day 20 >>](./20_day_cleanCode.md)
