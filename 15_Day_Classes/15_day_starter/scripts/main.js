

class Person {
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

// Exercises Level 1

//     1- Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
  constructor(name, age, color, legs)
  {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  afficher(){
    console.log("name: "+this.name+" / age: "+this.age+" / color: "+this.color+" / legs: "+this.legs);
  }
}
var animal = new Animal("Bosconovitch", 23, "red", 4);
animal.afficher();

//     2- Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
  constructor(name, age, color, legs, sexe){
    super(name, age, color, legs, sexe)
    this.sexe = sexe;
  }
  afficher(){
    console.log("name: "+this.name+" / age: "+this.age+" / color: "+this.color+" / legs: "+this.legs+" / sexe: "+this.sexe);
  }
}
class Cat extends Animal{
  
}

// Exercises Level 2

//     1- Override the method you create in Animal class

var chien = new Dog("milou", 15, "white", 4, "male");
chien.afficher();

// Exercises Level 3

//     1- Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). In addition to those measures find 
// the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do 
// statistical calculations as method for the Statistics class. Check the output below.

class Statistics{
  constructor(sample)
  {
    this.sample = sample;
  }
  get getSample(){
    return this.sample;
  }
  set setSample(sample){
    this.sample = sample;
  }

  count()
  {
    return this.getSample.length;
  }
  sum()
  {
    var retour = 0;
    this.getSample.forEach(function(value){
      retour += value; 
    })
    return retour;
  }
  min()
  {
    var retour = 0;
    var tab = this.getSample
    tab.sort(function(a,b){
      return a-b;
    })
    retour = tab[0]
    return retour
  }
  max()
  {
    var retour = 0;
    var tab = this.getSample
    tab.sort(function(a,b){
      return b-a;
    })
    retour = tab[0]
    return retour
  }
  range()
  {
    
  }
}
var ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
var statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]