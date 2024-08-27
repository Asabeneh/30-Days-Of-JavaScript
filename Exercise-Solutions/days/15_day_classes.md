  # Day 15  - Classes
 
## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>


 #### [Home](../README.md) | [<< Day 14](./14_day_error_handling.md) | [Day 16 >>](./16_day_JSON.md)

## Exercise Solutions

### Exercises Level 1

1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
```js
// app.js

class Animal {
  constructor(name,age,color,leg){
    this.name = name
    this.age=age
    this.color=color
    this.leg=leg
  }
  calculaterBirthYear(){
    const currentYear = new Date().getFullYear()
    const birthYear = currentYear - this.age
    return birthYear
  }

}

```


2. Create a Dog and Cat child class from the Animal Class.

```js
// app.js

class Animal {
  constructor(name,age,color,leg){
    this.name = name
    this.age=age
    this.color=color
    this.leg=leg
  }
  calculaterBirthYear(){
    const currentYear = new Date().getFullYear()
    const birthYear = currentYear - this.age
    return birthYear
  }

}

const dog1 = new Animal("beşo",5,"red",4)
const cat1= new Animal("lesi",3,"white",2)


console.log(dog1.calculaterBirthYear())
console.log(cat1.calculaterBirthYear())
```
### Exercises Level 2

1. Override the method you create in Animal class
```js
// app.js


class Animal {
  constructor(name,age,color,leg){
    this.name = name
    this.age=age
    this.color=color
    this.leg=leg
  }
 static calculaterBirthYear(){
    const currentYear = new Date().getFullYear()
    const birthYear = currentYear - this.age
    return birthYear
  }

}

const dog1 = new Animal("beşo",5,"red",4)
const cat1= new Animal("lesi",3,"white",2)


console.log(dog1.calculaterBirthYear())
console.log(cat1.calculaterBirthYear())

```
### Exercises Level 3

1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.


```js
// app.js

class Statistics {
  constructor(data) {
    this.data = data;
  }

  mean() {
    return this.data.reduce((a, b) => a + b) / this.data.length;
  }

  median() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  }

  mode() {
    const frequencyTable = {};
    let maxFrequency = 0;
    let modes = [];
    for (const value of this.data) {
      frequencyTable[value] = (frequencyTable[value] || 0) + 1;
      if (frequencyTable[value] > maxFrequency) {
        maxFrequency = frequencyTable[value];
        modes = [value];
      } else if (frequencyTable[value] === maxFrequency) {
        modes.push(value);
      }
    }
    return modes;
  }

  range() {
    return Math.max(...this.data) - Math.min(...this.data);
  }

  variance() {
    const mean = this.mean();
    return this.data.reduce((a, b) => a + (b - mean) ** 2, 0) / this.data.length;
  }

  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  minimum() {
    return Math.min(...this.data);
  }

  maximum() {
    return Math.max(...this.data);
  }

  count() {
    return this.data.length;
  }

  percentile(p) {
    const sortedData = this.data.sort((a, b) => a - b);
    const index = (p / 100) * (sortedData.length - 1);
    if (Number.isInteger(index)) {
      return sortedData[index];
    } else {
      const lowerIndex = Math.floor(index);
      const upperIndex = Math.ceil(index);
      return (sortedData[lowerIndex] + sortedData[upperIndex]) / 2;
    }
  }

  frequencyDistribution() {
    const frequencyTable = {};
    for (const value of this.data) {
      frequencyTable[value] = (frequencyTable[value] || 0) + 1;
    }
    return frequencyTable;
  }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const stats = new Statistics(ages);

console.log(`Mean: ${stats.mean()}`);
console.log(`Median: ${stats.median()}`);
console.log(`Mode: ${stats.mode()}`);
console.log(`Range: ${stats.range()}`);
console.log(`Variance: ${stats.variance()}`);
console.log(`Standard Deviation: ${stats.standardDeviation()}`);
console.log(`Minimum: ${stats.minimum()}`);
console.log(`Maximum: ${stats.maximum()}`);
console.log(`Count: ${stats.count()}`);
console.log(`25th Percentile: ${stats.percentile(25)}`);
console.log(`Frequency Distribution: ${JSON.stringify(stats.frequencyDistribution())}`);
```
1. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

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
console.log(person.accountInfo());  // John Doe has a total income of 6000 and a total expense of 1500.
console.log(person.accountBalance());  // 4500
```

 #### [Home](../README.md) | [<< Day 14](./14_day_error_handling.md) | [Day 16 >>](./16_day_JSON.md)
