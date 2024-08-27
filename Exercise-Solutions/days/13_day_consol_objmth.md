  # Day 13  - Console Object Methods
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>


 #### [Home](../README.md) | [<< Day 12](./12_day_regular_ex.md) | [Day 14 >>](./14_day_error_handling.md)



## Exercise Solutions
 
 ### Exercises Level 1

 
 1. Display the countries array as a table
```js
// app.js
const countries = ['Norway', 'Sweden','England','Iceland']
console.table(countries)

```

 2. Display the countries object as a table
```js
// app.js
const countries ={
    countri: 'Germany',
    popolation: 564654,
    lamgue: 'German'
}
console.table(countries)
    
```

 3. Use console.group() to group logs
```js
// app.js

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('names')
console.log(names)
console.groupEnd()

console.group('countries')
console.log(countries)
console.groupEnd()

console.group('user')
console.log(user)
console.groupEnd()

```

### Exercises Level 2
1. 10 > 2 * 10 use console.assert()
2. Write a warning message using console.warn()
3. Write an error message using console.error()

### Exercises Level 3
1. Check the speed difference among the following loops: while, for, for of, forEach



 #### [Home](../README.md) | [<< Day 12](./12_day_regular_ex.md) | [Day 14 >>](./14_day_error_handling.md)

