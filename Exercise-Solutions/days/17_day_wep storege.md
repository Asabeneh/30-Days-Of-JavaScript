  # Day 17  - Web Storaage
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>


 #### [Home](../README.md) | [<< Day 16](./16_day_JSON.md) | [Day 18 >>](./18_day_promise.md)

## Exercise Solutions


### Exercises: Level 1

1. Store you first name, last name, age, country, city in your browser localStorage.
```js
// app.js

let firstName = "nevzat"
let lasrName="Atalay"
let age= 25
let city ="BİTLİS"
let country = "Turkey"

localStorage.setItem("name",JSON.stringify(firstName))
localStorage.setItem("lastName",JSON.stringify(lasrName))
localStorage.setItem("age",JSON.stringify(age))
localStorage.setItem("city",JSON.stringify(city))
localStorage.setItem("country",JSON.stringify(country))
```

### Exercises: Level 2

1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
```js
// app.js

let student = {
  firstName:"Nevzat",
  lastName:"Atalay",
  age:25,
  skills:["HTML","CSS","JavaScript"],
  country:"Turkey",
}

localStorage.setItem("student",JSON.stringify(student))
```
### Exercises: Level 3

1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


```js
// ap.js

class PersonAccount {
  constructor(name, surname, incomes, expenses) {
    this.name = name;
    this.surname = surname;
    this.incomes = incomes;
    this.expenses = expenses;
  }

  totalIncome() {
    return this.incomes.reduce((a, b) => a + b, 0);
  }

  totalExpense() {
    return this.expenses.reduce((a, b) => a + b, 0);
  }

  accountInfo() {
    return `${this.name} ${this.surname} has a total income of ${this.totalIncome()} and a total expense of ${this.totalExpense()}.`;
  }

  addIncome(income) {
    this.incomes.push(income);
  }

  addExpense(expense) {
    this.expenses.push(expense);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}

const person = new PersonAccount('Nevzat', 'Atalay', [1000, 2000, 3000], [500, 1000]);
console.log(person.accountInfo());  
console.log(person.accountBalance());  // 4500
```
 #### [Home](../README.md) | [<< Day 16](./16_day_JSON.md) | [Day 18 >>](./18_day_promise.md)