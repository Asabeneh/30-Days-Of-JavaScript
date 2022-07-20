

/*class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    console.log('hi')
    return skills[index]
  }
}

console.log(Person.favoriteSkill())

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)
console.log(s2)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
*/

//Exercises Level 1

//1.Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs){
  this.name = name
  this.age = age
  this.color = color  
  this.legs = legs
  }
  getInfo(){
    return this.name + ' ' + ' ' + `age: ${this.age} color: ${this.color} legs: ${this.legs} ${this.gender}`
  }

}

//2. Create a Dog and Cat child class from the Animal Class.
let dog = new Animal('Firulais', 2, 'white', 4 )
console.log(dog.getInfo())

let cat = new Animal('Tom', 1, 'gray', 4)
console.log(cat.getInfo())

//Exercises Level 2

//1. Override the method you create in Animal class
class Reptile extends Animal {
  constructor(name, age, color, legs, gender){
    super(name, age, color, legs)
    this.gender = gender
  }
  
}

let reptile = new Reptile('Lizard', 1, 'green', 4, 'male')
console.log(reptile)
//Exercises Level 3

//1.Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {

  
  mean = (arr) => {
    const sum = arr.reduce((a, b) => a + b);
    const count = arr.length;
    // need to return explicitly
    return ` Mean: ${Math.round(sum / count)}`  
  }

  median = (arr) => {
    let median;
    const sortedArr = arr.sort((a, b) => a - b);
    if (arr.length % 2 != 0) {
      median = sortedArr[(arr.length - 1) / 2];
    } else {
      median = (sortedArr[(arr.length / 2) - 1] + sortedArr[arr.length / 2]) / 2;
    }
    return  `Median: ${median}`;
  }

  mode = (arr) => {
    const num = [...new Set(arr)];
    const count = num.map((element) =>
      arr.filter((number) => number === element).length)
    let max = Math.max(...count);
    let object = {};
    object.mode = num[count.indexOf(max)];
    object.count = max;
    return object;
  }
}

//count, sum, min, max, range


let statistics = new Statistics()
console.log(statistics.mean(ages), statistics.median(ages), statistics.mode(ages))
//2.Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome() {
    const incomeValues = Object.values(this.incomes);
    const totalIncome = incomeValues.reduce((a, b) => a + b);
    return totalIncome;
  }
  totalExpense() {
    let expenseValues = Object.values(this.expenses);
    const totalExpense = expenseValues.reduce((a, b) => a + b);
    return totalExpense;
  }
  accountInfo() {
    let incomeKeys = Object.keys(this.incomes);
    let formattedIncomes = `${incomeKeys.slice(0, -1).join(', ')} and ${incomeKeys.slice(-1)}`;
    let expenseKeys = Object.keys(this.expenses);
    let formattedExpenses = `${expenseKeys.slice(0, -1).join(', ')} and ${expenseKeys.slice(-1)}`

    let info = `This is ${this.firstName} ${this.lastName}'s account.\nThe user has incomes from ${formattedIncomes}.\nThe total income is ${this.totalIncome()}.\nThe user has expenses from ${formattedExpenses}.\nThe total expense is ${this.totalExpense()}.`
    return info;
  }
  addIncome(source, value) {
    this.incomes[`${source}`] = value;
    return this.incomes;
  }
  addExpense(source, value) {
    this.expenses[`${source}`] = value;
    return this.expenses;
  }
}
const account1 = new PersonAccount('Juan', 'Brink', {'salary' :  500, 'online course' : 700, 'part time' : 150}, {'bills' : 150, 'groceries' : 250});

console.log(account1.accountInfo());
console.log(account1.addIncome('flea market', 50));
console.log(account1.addExpense('books', 30));