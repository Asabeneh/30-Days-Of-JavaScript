<div align="center">
  <h1> 30 ថ្ងៃនៃ JavaScript: Objects</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>អ្នកនិពន្ធ:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> ខែមករា ឆ្នាំ ២០២០</small>
  </sub>
</div>

[<< ថ្ងៃទី 7](../07_Day_Functions/07_day_functions.md) | [ថ្ងៃទី 9 >>](../09_Day_Higher_order_functions/09_day_higher_order_functions.md)

![Thirty Days Of JavaScript](../images/banners/day_1_8.png)

- [📔 ថ្ងៃទី 8](#-day-8)
	- [Scope](#scope)
		- [Window Global Object](#window-global-object)
		- [Global scope](#global-scope)
		- [Local scope](#local-scope)
	- [📔 Object](#-object)
		- [ការបង្កើត object ទទេ](#creating-an-empty-object)
		- [ការបង្កើត object ជាមួយនឹងតម្លៃ](#creating-an-objecting-with-values)
		- [ទាញតម្លៃពី object](#getting-values-from-an-object)
		- [ការបង្កើត object methods](#creating-object-methods)
		- [ការកំណត់ key សម្រាប់ object](#setting-new-key-for-an-object)
		- [Object Methods](#object-methods)
			- [ចាប់យក key ពី object ដោយប្រើ Object.keys()](#getting-object-keys-using-objectkeys)
			- [ចាប់យកតម្លៃពី object ដោយប្រើ  Object.values()](#getting-object-values-using-objectvalues)
			- [ចាប់យក key និង តម្លៃ ពី object ដោយប្រើ  Object.entries()](#getting-object-keys-and-values-using-objectentries)
			- [ពិនិត្យមើល properties ដោយប្រើ hasOwnProperty()](#checking-properties-using-hasownproperty)
	- [💻 លំហាត់](#-exercises)
		- [លំហាត់៖ កម្រិត ១](#exercises-level-1)
		- [លំហាត់៖ កម្រិត ២](#exercises-level-2)
		- [លំហាត់៖ កម្រិត ៣](#exercises-level-3)

# 📔 ថ្ងៃទី 8

## Scope

variable គឺជាផ្នែកមូលដ្ឋានក្នុងការសរសេរកម្មវិធី។ យើងប្រកាស variable ដើម្បីរក្សាទុកប្រភេទទិន្នន័យផ្សេងៗគ្នា។ ដើម្បីប្រកាស variable យើងប្រើពាក្យគន្លឹះ _var_, _let_ និង _const_ ។ variable អាចត្រូវបានប្រកាសនៅ scope ផ្សេងៗគ្នា។ ក្នុង​ផ្នែក​នេះ យើង​នឹង​មើលលើ scope ​នៃ variable scope ​នៃ​អថេរ​ពេល​យើង​ប្រើ var ឬ let ។

variable scope អាចជា៖

- Global
- Local

variable អាចត្រូវបានប្រកាសជា global scope រឺក៏ local scope។
អ្វី​ដែល​បាន​ប្រកាស​ដោយ​មិនប្រើ let, var ឬ const ត្រូវ​បាន​កំណត់​ក្នុង​កម្រិត​សកល។

អនុញ្ញាតឱ្យយើងស្រមៃថាយើងមានឯកសារ scope.js ។

### Window Global Object

ដោយមិនប្រើ console.log() បើកកម្មវិធីរុករករបស់អ្នក ហើយពិនិត្យ អ្នកនឹងឃើញតម្លៃ a និង b ប្រសិនបើអ្នកសរសេរ a ឬ b នៅលើ browser ។ នោះមានន័យថា a និង b មានរួចហើយនៅក្នុង window។

```js
//scope.js
a = 'JavaScript' // ការប្រកាសអថេរដោយមិនប្រើ let ឬ const ធ្វើឱ្យវាមាននៅក្នុង window object ហើយអាចរកឃើញគ្រប់ទីកន្លែង
b = 10 // នេះគឺជា variable scope សកល ហើយបានរកឃើញនៅក្នុង window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // អាចចូលប្រើបាន
```

### Global scope

អថេរ​ដែល​បាន​ប្រកាស​ជា​សកល​អាច​ចូល​ប្រើ​បាន​គ្រប់​ទីកន្លែង​ក្នុង​ឯកសារ​តែមួយ។ ប៉ុន្តែពាក្យសកលគឺទាក់ទង។ វាអាចជាសកលសម្រាប់ឯកសារ ឬវាអាចជាសកលទាក់ទងនឹងប្លុកនៃកូដមួយចំនួន។

```js
//scope.js
let a = 'JavaScript' // គឺជា scope សកល វានឹងត្រូវបានរកឃើញគ្រប់ទីកន្លែងនៅក្នុងឯកសារនេះ។
let b = 10 // គឺជា scope សកល វានឹងត្រូវបានរកឃើញគ្រប់ទីកន្លែងនៅក្នុងឯកសារនេះ។
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
```

### Local scope

variable ដែលបានប្រកាសថាជា local អាចចូលប្រើបានតែនៅក្នុងកូដប្លុកជាក់លាក់ប៉ុណ្ណោះ។

- Block Scope
- Function Scope

```js
//scope.js
let a = 'JavaScript' // គឺជា scope សកល វានឹងត្រូវបានរកឃើញគ្រប់ទីកន្លែងនៅក្នុងឯកសារនេះ។
let b = 10 // គឺជា scope សកល វានឹងត្រូវបានរកឃើញគ្រប់ទីកន្លែងនៅក្នុងឯកសារនេះ។
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // យើងអាចចូលប្រើបានពីមុខងារ និងនៅខាងក្រៅមុខងារ ប៉ុន្តែ
    // variable ដែលបានប្រកាសនៅខាងក្នុង if នឹងមិនអាចប្រើនៅខាងក្រៅ if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // យើងមិនអាចចូលប្រើ c ព្រោះ scope របស់ c គឺមានតែ if block ប៉ុណ្ណោះ។
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
```

ឥឡូវនេះ អ្នកមានការយល់ដឹងអំពី scope។ variable ​ដែល​បាន​ប្រកាស​ដោយ *var* ដែល​មាន​ scope ​សម្រាប់​តែ​ function ប៉ុន្តែ​អថេរ​ដែលបាន​ប្រកាស​ដោយ *let* ឬ *const* គឺ​ជា block scope (function block, if block, loop block, etc)។ ប្លុកនៅក្នុង JavaScript គឺជាកូដមួយនៅចន្លោះតង្កៀបអង្កាញ់ពីរ ({})។

```js
//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3

```

នៅក្នុង ES6 និងខ្ពស់ជាងនេះមាន *let* និង *const* ដូច្នេះអ្នកនឹងមិនទទួលរងពីភាពមិនច្បាស់លាស់នៃ *var* នោះទេ។ នៅពេលយើងប្រើ *let* អថេររបស់យើងត្រូវបានទប់ស្កាត់ ហើយវានឹងមិនឆ្លងផ្នែកផ្សេងទៀតនៃកូដរបស់យើងទេ។

```js
//scope.js
function letsLearnScope() {
  // អ្នកអាចប្រើ let ឬ const ប៉ុន្តែទំនាញគឺថេរ ចឹងខ្ញុំនិងប្រើ const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

```

The scope *let* and *const* are the same. The difference is only reassigning. We can not change or reassign the value of the `const` variable. I would strongly suggest you to use *let* and *const*, by using *let* and *const* you will write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use *let* for any value which change, *const* for any constant value, and for an array, object, arrow function and function expression.

scope *let* និង *const* គឺដូចគ្នា។ ភាពខុសគ្នាគឺគ្រាន់តែជាការចាត់តាំងឡើងវិញប៉ុណ្ណោះ។ យើងមិនអាចផ្លាស់ប្តូរ ឬកំណត់តម្លៃនៃអថេរ `const` ឡើងវិញបានទេ។ ខ្ញុំសូមណែនាំអ្នកឱ្យប្រើ *let* និង *const* ដោយប្រើ *let* និង *const* អ្នកនឹងសរសេរកូដស្អាត ហើយជៀសវាងការលំបាកក្នុង debug កំហុស។ តាមក្បួន អ្នកអាចប្រើ *let* សម្រាប់តម្លៃណាមួយដែលផ្លាស់ប្តូរ *const* សម្រាប់តម្លៃថេរណាមួយ និងសម្រាប់អារេ object, arrow function និងកន្សោម function។

## 📔 Object

អ្វីគ្រប់យ៉ាងអាចជា object មួយ ហើយ object មានលក្ខណៈសម្បត្តិ ហើយលក្ខណៈសម្បត្តិមានតម្លៃ ដូច្នេះ object គឺជាគូ key និង value លំដាប់នៃ key មិនត្រូវបានបម្រុងទុកឬមិនមានលំដាប់។
ដើម្បីបង្កើត object literal យើងប្រើតង្កៀបអង្កាញ់ពីរ។

### ការបង្កើត object ទទេ

object ទទេ

```js
const person = {}
```

### ការបង្កើត object ជាមួយនឹងតម្លៃ

ឥឡូវនេះ person object មាន firstName, lastName, age, location, skills និង isMarried property។ តម្លៃនៃ property ឬ key អាចជា string, number, boolean, object, null, undefined រឺក៏ function

ចូរយើងមើលឧទាហរណ៍ខ្លះនៃ object។ key នីមួយៗមានតម្លៃនៅក្នុង object។

```js
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
```

### ទាញយកតម្លៃពី object

យើងអាចចូលប្រើតម្លៃនៃ object ដោយប្រើវិធីពីរយ៉ាង៖

- ការប្រើប្រាស់ . បន្តដោយឈ្មោះគន្លឹះ ប្រសិនបើ key-name គឺជាពាក្យតែមួយ
- ដោយប្រើតង្កៀបការ៉េ និង quote

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// ការចូលប្រើតម្លៃដោយប្រើ .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// តម្លៃអាចត្រូវបានចូលប្រើដោយប្រើតង្កៀបការ៉េ និងឈ្មោះ key
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// ឧទាហរណ៍ ដើម្បីចូលប្រើលេខទូរស័ព្ទ យើងប្រើតែវិធីតង្កៀបការ៉េប៉ុណ្ណោះ។
console.log(person['phone number'])
```

### ការបង្កើត object methods

ឥឡូវនេះ person object មាន getFullName property។ getFullName គឺជា function ខាងក្នុងរបស់ person object ហើយយើងហៅវាថា object method។ ពាក្យគន្លឹះ _this_ សំដៅលើ object ខ្លួនឯង។ យើង​អាច​ប្រើ​ពាក្យ _this_ ដើម្បី​ចូល​ប្រើ​តម្លៃ​នៃ​លក្ខណៈ​សម្បត្តិ​ផ្សេងៗ​របស់​វត្ថុ។ យើងមិនអាចប្រើ arrow function ជា object method បានទេ ព្រោះពាក្យនេះសំដៅលើ window នៅខាងក្នុងមុខងារ arrow ជំនួសឱ្យ object ផ្ទាល់។ ឧទាហរណ៍នៃ object

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
// Asabeneh Yetayeh
```

### ការកំណត់ key ថ្មីសម្រាប់ object

វត្ថុគឺជារចនាសម្ព័ន្ធទិន្នន័យដែលអាចផ្លាស់ប្តូរបានហើយយើងអាចកែប្រែតម្លៃនៃ objectមួយបន្ទាប់ពីវាបង្កើតរួច។

ការកំណត់ key ថ្មីសម្រាប់ object

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

```sh
Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### Object Methods

មាន method ផ្សេងគ្នាដើម្បីរៀបចំ object។ អនុញ្ញាតឱ្យយើងមើល method យចំនួនដែលមាន។

_Object.assign_: ដើម្បីចម្លង object ដោយមិនកែប្រែ object ដើម

```js
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```

#### ទាញយក object key ដោយប្រើ Object.keys()

_Object.keys_: ដើម្បីទទួលបាន key ឬ property របស់វត្ថុជាអារេ

```js
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
```

#### ទាញយក object value ដោយប្រើ Object.keys()

_Object.values_:ដើម្បីទទួលបានតម្លៃនៃវត្ថុជាអារេ

```js
const values = Object.values(copyPerson)
console.log(values)
```

#### ទាញយក object value និង key ដោយប្រើ Object.entries()

_Object.entries_:ដើម្បីទទួលបាន key និងតម្លៃនៅក្នុងអារេមួយ។

```js
const entries = Object.entries(copyPerson)
console.log(entries)
```

#### ពិនិត្យ property ដោយប្រើ hasOwnProperty()

_hasOwnProperty_: ដើម្បី​ពិនិត្យ​មើល​ថា​តើ​ key  ឬ​ property មាន​ក្នុង​វត្ថុ​ឬ​អត់

```js
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```

🌕 អ្នកពិតជាគួរឲភ្ញាក់ផ្អើលណាស់។ អ្នកទើបតែបានបញ្ចប់ challenge ថ្ងៃទី 8 ហើយអ្នកបានឈាន 8 ជំហាន ឆ្ពោះទៅរកភាពអស្ចារ្យ។ ឥឡូវធ្វើលំហាត់ខ្លះសម្រាប់ខួរក្បាល និងសាច់ដុំរបស់អ្នក។

## 💻 លំហាត់

### លំហាត់៖ កម្រិត ១

1. បង្កើត object ទទេមួយហៅថាឆ្កែ
1. បង្ហាញ object ឆ្កែនៅលើកុងសូល។
1. បន្ថែមឈ្មោះ ជើង ពណ៌ អាយុ និងលក្ខណៈសម្បត្តិ bark សម្រាប់វត្ថុឆ្កែ។ លក្ខណសម្បត្តិ bark គឺជា   method ដែលឲ _woof woof_
1. ទាញយកឈ្មោះ ជើង ពណ៌ អាយុ និងតម្លៃ bark ពី object ឆ្កែ
1. កំណត់លក្ខណៈសម្បត្តិថ្មីនៃ object ឆ្កែ៖ ពូជ getDogInfo

### លំហាត់៖ កម្រិត ២

1. ស្វែងរកមនុស្សដែលមានជំនាញជាច្រើននៅក្នុង object user
1. រាប់​អ្នក​ប្រើ​ដែល​ចូល រាប់​អ្នក​ប្រើ​ដែល​មាន​ចំនួន​ធំ​ជាង​ស្មើ​នឹង 50 ពិន្ទុ​ពី​ object ​ខាងក្រោម។

   ````js
   const users = {
     Alex: {
       email: 'alex@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript'],
       age: 20,
       isLoggedIn: false,
       points: 30
     },
     Asab: {
       email: 'asab@asab.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
       age: 25,
       isLoggedIn: false,
       points: 50
     },
     Brook: {
       email: 'daniel@daniel.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
       age: 30,
       isLoggedIn: true,
       points: 50
     },
     Daniel: {
       email: 'daniel@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
       age: 20,
       isLoggedIn: true,
       points: 50
     },
     Thomas: {
       email: 'thomas@thomas.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     Paul: {
       email: 'paul@paul.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }```

1. ស្វែងរកមនុស្សដែលជាអ្នកអភិវឌ្ឍន៍ MERN ពី object អ្នកប្រើប្រាស់
1. កំណត់ឈ្មោះរបស់អ្នកនៅក្នុង user object ដោយមិនកែប្រែវ user object ដើម
1. ទាញយក key ឬ property ទាំងអស់របស់វត្ថុអ្នកប្រើប្រាស់
1. ទទួលបានតម្លៃទាំងអស់នៃ object user
1. ប្រើវត្ថុប្រទេសដើម្បីបោះពុម្ពឈ្មោះប្រទេស រាជធានី ចំនួនប្រជាជន និងភាសា។

### លំហាត់៖ កម្រិត ៣

1. បង្កើត object literal ដែលហៅថា _personAccount_ ។ វាមាន _firstName, lastName, incomes, cost_ properties ហើយវាមាន _totalIncome, totalExpense, accountInfo, addIncome, addExpense_ និង _accountBalance_ method។ ប្រាក់ចំណូល គឺជាសំណុំនៃប្រាក់ចំណូល ហើយការពិពណ៌នា និងការចំណាយរបស់វា គឺជាសំណុំនៃប្រាក់ចំណូល និងការពិពណ៌នារបស់វា។
2. **** សំណួរ៖ 2, 3 និង 4 គឺផ្អែកលើអារេពីរខាងក្រោម៖ user និង product ()

  ```js
      const users = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];

      const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  ```

  ស្រមៃថាអ្នកកំពុងទទួលបានអ្នកប្រើប្រាស់ខាងលើពីមូលដ្ឋានទិន្នន័យ MongoDB ។
    a. បង្កើត functionមួយហៅថា signUp ដែលអនុញ្ញាតឱ្យបន្ថែមអ្នកប្រើទៅបណ្តុំ។ ប្រសិនបើមានអ្នកប្រើប្រាស់ហើយ សូមជូនដំណឹងដល់អ្នកប្រើប្រាស់ថាគាត់មានគណនីរួចហើយ។
    b. បង្កើត function មួយហៅថា signIn ដែលអនុញ្ញាតឱ្យអ្នកប្រើចូលកម្មវិធី

3. អារេផលិតផលមានធាតុបី ហើយពួកវានីមួយៗមាន property ប្រាំមួយ។
    a. បង្កើតមុខងារមួយហៅថា rateProduct ដែលវាយតម្លៃផលិតផល
    b. បង្កើតមុខងារមួយហៅថា averageRating ដែលគណនាការវាយតម្លៃជាមធ្យមនៃផលិតផល

4. បង្កើតមុខងារមួយហៅថា likeProduct។ មុខងារ​នេះ​នឹង​ជួយ​ឱ្យ​ចូលចិត្ត​ផលិតផល​ប្រសិន​បើ​វា​មិន​ត្រូវ​បាន​គេ​ចូល​ចិត្ត​និង​លុប​ការ​ចូលចិត្ត​ប្រសិន​បើ​វា​ត្រូវ​បាន​គេ​ចូល​ចិត្តរួចហើយ​។


🎉 អបអរសាទរ ! 🎉

[<< ថ្ងៃទី 7](../07_Day_Functions/07_day_functions.md) | [ថ្ងៃទី 9 >>](../09_Day_Higher_order_functions/09_day_higher_order_functions.md)
