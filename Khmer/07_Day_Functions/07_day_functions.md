<div align="center">
  <h1> 30 ថ្ងៃនៃ JavaScript: Functions</h1>
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

[<< ថ្ងៃទី 6](../06_Day_Loops/06_day_loops.md) | [ថ្ងៃទី 8 >>](../08_Day_Objects/08_day_objects.md)

![Thirty Days Of JavaScript](../images/banners/day_1_7.png)

- [📔 Day 7](#-day-7)
	- [Functions](#functions)
		- [ការប្រកាស Function](#function-declaration)
		- [Function ដោយគ្មានប៉ារ៉ាម៉ែត្រនិង return](#function-without-a-parameter-and-return)
		- [Function ជាមួយតម្លៃ return](#function-returning-value)
		- [Function ជាមួយប៉ារ៉ាម៉ែត្រ](#function-with-a-parameter)
		- [Function ជាមួយប៉ារ៉ាម៉ែត្រពីរ](#function-with-two-parameters)
		- [Function ជាមួយប៉ារ៉ាម៉ែត្រជាច្រើន។](#function-with-many-parameters)
		- [Function ជាមួយនឹងចំនួនប៉ារ៉ាម៉ែត្រគ្មានដែនកំណត់](#function-with-unlimited-number-of-parameters)
			- [ចំនួនប៉ារ៉ាម៉ែត្រគ្មានដែនកំណត់ក្នុង function ធម្មតា](#unlimited-number-of-parameters-in-regular-function)
			- [ចំនួនប៉ារ៉ាម៉ែត្រគ្មានដែនកំណត់នៅក្នុង arrow function](#unlimited-number-of-parameters-in-arrow-function)
		- [Anonymous Function](#anonymous-function)
		- [Expression Function](#expression-function)
		- [Self Invoking Functions](#self-invoking-functions)
		- [Arrow Function](#arrow-function)
		- [Function ជាមួយ default parameters](#function-with-default-parameters)
		- [Function declaration និង Arrow function](#function-declaration-versus-arrow-function)
	- [💻 លំហាត់](#-exercises)
		- [លំហាត់៖ កម្រិត ១](#exercises-level-1)
		- [លំហាត់៖ កម្រិត ២](#exercises-level-2)
		- [លំហាត់៖ កម្រិត ៣](#exercises-level-3)

# 📔 ថ្ងៃទី 7

## Functions

រហូតមកដល់ពេលនេះ យើងបានឃើញ JavaScript function ជាច្រើន។ នៅក្នុងផ្នែកនេះ យើងនឹងផ្តោតលើ custom function។ តើ function ជាអ្វី? មុន​នឹង​យើង​ចាប់​ផ្ដើម​បង្កើត ​function សូម​យល់​ថា​ function ជា​អ្វី​ ហើយ​ហេតុ​អ្វី​បាន​ជា​យើង​ត្រូវ function?

function គឺជាប្លុកដែលអាចប្រើឡើងវិញបានក្នុងការសរសេរកម្មវិធីដែលត្រូវបានរចនាឡើងដើម្បីអនុវត្តកិច្ចការជាក់លាក់មួយ។
function ​ត្រូវ​បាន​ប្រកាស​ដោយ​ពាក្យ​គន្លឹះ​ function ​ដែល​តាម​ដោយ​ឈ្មោះ​មួយនិង​វង់ក្រចក ()។ វង់ក្រចកអាចយកប៉ារ៉ាម៉ែត្រ។ ប្រសិនបើ function យកប៉ារ៉ាម៉ែត្រវានឹងត្រូវបានហៅថា arugment។ functin ក៏អាចយកប៉ារ៉ាម៉ែត្រលំនាំដើមផងដែរ។ ដើម្បីរក្សាទុកទិន្នន័យទៅមុខងារ មុខងារមួយត្រូវបោះប្រភេទទិន្នន័យជាក់លាក់។ ដើម្បីទទួលបានតម្លៃដែលយើងហៅ ឬហៅ function មួយ។
function ធ្វើឲកូដ៖

- ស្អាត និងងាយស្រួលអាន
- អាចប្រើឡើងវិញបាន
- ងាយស្រួលក្នុងការតេស

function មួយអាចត្រូវបានប្រកាស ឬបង្កើតតាមវិធីដូចខាងក្រោម:

- _Declaration function_
- _Expression function_
- _Anonymous function_
- _Arrow function_

### ការប្រកាស Function

តោះមើលរបៀបប្រកាស function និងរបៀបហៅ function។

```js
//ប្រកាស function ដោយគ្មានប៉ារ៉ាម៉ែត្រ
function functionName() {
  // code goes here
}
functionName() // function ហៅតាមឈ្មោះរបស់វា និងជាមួយវង់ក្រចក
```

### Function ដោយគ្មានប៉ារ៉ាម៉ែត្រនិង return

function អាចត្រូវបានប្រកាសដោយគ្មានប៉ារ៉ាម៉ែត្រ។

**ឧទាហរណ៍:**

```js
// function ដោយ​គ្មាន​ប៉ារ៉ាម៉ែត្រ function ដែល​បង្កើត​ចំនួន​ការ៉េ

function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// function ដោយ​គ្មាន​ប៉ារ៉ាម៉ែត្រ
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // function មួយត្រូវហៅតាមឈ្មោះរបស់វា ទើបអាចប្រតិបត្តិបាន។
```

```js
  function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName() // ការហៅ functino មួយ។
```

### Function ជាមួយតម្លៃ return

function ក៏អាចបោះ​តម្លៃ​វិញ​ដែរ ប្រសិនបើ​អនុគមន៍​មិន​បោះ​តម្លៃនោះ​តម្លៃ​នៃ function នឹងមិន​ត្រូវ​បាន​កំណត់។ អនុញ្ញាតឱ្យយើងសរសេរ function ខាងលើជាមួយនឹងការបោះតម្លៃមកវិញ។ ចាប់ពីពេលនេះតទៅ យើងបោះតម្លៃទៅ function មួយជំនួសឱ្យការបោះពុម្ពវា។

```js
function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())
```

```js

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())
```

### Function ជាមួយប៉ារ៉ាម៉ែត្រ

នៅក្នុង function យើងអាចបញ្ចូលប្រភេទទិន្នន័យផ្សេងៗគ្នា (number, string, boolean, object, function) ជាប៉ារ៉ាម៉ែត្រ។

```js
// function ជាមួយប៉ារ៉ាម៉ែត្រមួយ។
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // កំឡុងពេលហៅ

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // គួរតែត្រូវបានហៅដោយ argument មួយ។

function square(number) {
  return number * number
}

console.log(square(10))
```

### Function ជាមួយប៉ារ៉ាម៉ែត្រពីរ

```js
// Function ជាមួយប៉ារ៉ាម៉ែត្រពីរ
function functionName(parm1, parm2) {
  //code goes her
}
functionName(parm1, parm2) // Function ជាមួយប៉ារ៉ាម៉ែត្រពីរ
// function គ្មាន​ប៉ារ៉ាម៉ែត្រ​មិន​យក​ការ​បញ្ចូល​ទេ ដូច្នេះ​អនុញ្ញាត​ឱ្យយើង​បង្កើត​ function ជាមួយ​ប៉ារ៉ាម៉ែត្រ
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) //ហៅ function
// ប្រសិនបើ functino មិន return វាមិនរក្សាទុកទិន្នន័យទេ ដូច្នេះវាគួរតែ return មកវិញ

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Function ជាមួយប៉ារ៉ាម៉ែត្រជាច្រើន។

```js
// Functino ជាមួយប៉ារ៉ាម៉ែត្រជាច្រើន។
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // កំឡុងពេលហៅ arugment ចំនួនបីដែលត្រូវការ


// function នេះយកអារេជាប៉ារ៉ាម៉ែត្រ ហើយបូកសរុបលេខក្នុងអារេ
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

```

### Function ជាមួយនឹងចំនួនប៉ារ៉ាម៉ែត្រគ្មានដែនកំណត់

ពេល​ខ្លះ​យើង​មិន​ដឹង​ថា​តើ​មាន​អាគុយម៉ង់​ប៉ុន្មាន​ដែល​អ្នក​ប្រើ​នឹង​ដាក់។ ដូច្នេះ​ហើយ យើង​គួរ​ដឹង​ពី​របៀប​សរសេរ​មុខងារ​មួយ​ដែល​អាច​យក​ចំនួន​ argument មិន​កំណត់។ វិធីដែលយើងធ្វើវាមានភាពខុសគ្នាខ្លាំងរវាងការប្រកាស regular function (មុខងារធម្មតា) និង arrow function។ ចូរយើងមើលឧទាហរណ៍ទាំងនៅក្នុងមុខងារប្រកាស និងមុខងារព្រួញ។

#### ចំនួនប៉ារ៉ាម៉ែត្រគ្មានដែនកំណត់ក្នុង function ធម្មតា

វត្ថុណាមួយដែលបានដាក់ជា argument អាចចូលប្រើបានពី arguments object នៅខាងក្នុង function។ ចូរយើងមើលឧទាហរណ៍មួយ។

 ```js
// Let us access the arguments object
​
function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

```js
// ការប្រកាស functino 
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

#### ចំនួនប៉ារ៉ាម៉ែត្រគ្មានដែនកំណត់នៅក្នុង arrow function 

ដើម្បីអនុវត្តមុខងារដែលយកចំនួនអាគុយម៉ង់មិនកំណត់ក្នុង arrow function យើងប្រើ Spread operator អមដោយឈ្មោះប៉ារ៉ាម៉ែត្រណាមួយ។ អ្វីក៏ដោយដែលយើងដាក់ជាអាគុយម៉ង់ក្នុង function អាចចូលប្រើជាអារេក្នុង arrow function។ ចូរយើងមើលឧទាហរណ៍មួយ។

 ```js
// Let us access the arguments object
​
const sumAllNums = (...args) => {
  // console.log(arguments), រកមិនឃើញវ arguments object នៅក្នុង arrow functino
  // ជំនួសមកវិញ យើងប្រើប៉ារ៉ាម៉ែត្រដែលមាន spread operator (...) នៅពីមុខ
  console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

```

```js
// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

### Anonymous Function

Anonymous function រឺ function គ្មានឈ្មោះ

```js
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
```

### Expression Function

Expression functions គឺជា anonymous functions។ បន្ទាប់​ពី​យើង​បង្កើត function ដោយ​មិន​មាន​ឈ្មោះ​ហើយ​យើង​កំណត់​វា​ទៅ​ជា​អថេរ។ ដើម្បីបោះតម្លៃពីអនុគមន៍ យើងគួរហៅអថេរ។ សូមមើលឧទាហរណ៍ខាងក្រោម។

```js

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
```

### Self Invoking Functions

Self invoking functions គឺជា  anonymous functions ដែលមិនចាំបាច់ហៅដើម្បីឲតម្លៃ។

```js
(function(n) {
  console.log(n * n)
})(2) // 4, ប៉ុន្តែជំនួសឱ្យការគ្រាន់តែបោះពុម្ព ប្រសិនបើយើងចង់ត្រឡប់ និងរក្សាទុកទិន្នន័យ យើងធ្វើដូចបានបង្ហាញខាងក្រោម

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

### Arrow Function

arrow function គឺជាជម្រើសមួយសម្រាប់សរសេរ functino ទោះជាយ៉ាងណាក៏ដោយ ការប្រកាស function និង arrow functinoមានភាពខុសគ្នាបន្តិចបន្តួច។

arrow functino ប្រើព្រួញជំនួសឱ្យពាក្យគន្លឹះ *function* ដើម្បីប្រកាស function។ អនុញ្ញាតឱ្យយើងឃើញទាំងការប្រកាស function និង arrow function។

```js
// នេះជារបៀបដែលយើងសរសេរ function ធម្មតា
// អនុញ្ញាតឱ្យយើងផ្លាស់ប្តូរ functino នេះទៅជា arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// ប្រសិន​បើ​យើង​មាន​តែ​មួយ​បន្ទាត់​នៅ​ក្នុង​ប្លុក​កូដ​នោះ វា​អាច​ត្រូវ​បាន​សរសេរ​ដូច​ខាង​ក្រោម​
const square = n => n * n  // -> 4
```

```js
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

function ខាងលើមានពាក្យត្រឡប់ តែយើងអាច return វាវិញបានដូចខាងក្រោម។

```js
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Function ជាមួយ default parameters 

ពេល​ខ្លះ​យើង​បញ្ជូន​តម្លៃ​លំនាំដើម​ទៅ​ប៉ារ៉ាម៉ែត្រ ពេល​យើង​ហៅ​មុខងារ​នេះ បើ​យើង​មិនឲតម្លៃទេ ​លំនាំដើម​នឹង​ត្រូវ​បាន​ប្រើ។ ទាំងការប្រកាសមុខងារ និងមុខងារព្រួញអាចមានតម្លៃលំនាំដើម។

```js
// syntax
// ប្រកាស functino
function functionName(param = value) {
  //codes
}

// ហៅ function
functionName()
functionName(arg)
```

**ឧទាហរណ៍:**

```js
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```

```js
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // តម្លៃត្រូវតែប្តូរទៅ string ជាមុនសិន
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) //ទំនាញផែនដី ៩.៨១
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // ទំនាញនៅលើផ្ទៃព្រះច័ន្ទ
```

ចូរយើងមើលពីរបៀបដែលយើងសរសេរ functino ខាងលើជាមួយនឹង arrow function

```js
// syntax
// ប្រកាស a function
const functionName = (param = value) => {
  //codes
}

// ហៅ function
functionName()
functionName(arg)
```

**ឧទាហរណ៍:**

```js
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js

const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
```

```js
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // ទំនាញផែនដី ៩.៨១
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // ទំនាញនៅលើផ្ទៃព្រះច័ន្ទ
```

### Function declaration និង Arrow function

វានឹងត្រូវបានគ្របដណ្តប់នៅក្នុងផ្នែកផ្សេងទៀត។

🌕 អ្នក​ជា​តារា​ដែល​កំពុង​រះ ឥឡូវ​អ្នក​ដឹង​អំពី function ហើយ។ អ្នកបានឈាន 7 ជំហាន ឆ្ពោះទៅរកភាពអស្ចារ្យ។ ឥឡូវធ្វើលំហាត់ខ្លះសម្រាប់ខួរក្បាល និងសាច់ដុំរបស់អ្នក។

## 💻 លំហាត់

### លំហាត់៖ កម្រិត ១

1. ប្រកាស function _fullName_ ហើយវាបោះពុម្ពឈ្មោះពេញរបស់អ្នក។
2. ប្រកាស function _fullName_ ហើយឥឡូវនេះវាយកឈ្មោះដំបូង ឈ្មោះចុងក្រោយជាប៉ារ៉ាម៉ែត្រ ហើយវាឲឈ្មោះពេញរបស់អ្នក។
3. ប្រកាសមុខងារ _addNumbers_ ហើយវាត្រូវការប៉ារ៉ាម៉ែត្រពីរ ហើយវាត្រឡប់ផលបូករបស់ប៉ារ៉ាម៉ែត្រនោះ។
4. ផ្ទៃដីនៃចតុកោណកែងត្រូវបានគណនាដូចខាងក្រោម៖ _area = បណ្តោយ x ទទឹង_។ សរសេរ function ដែលគណនា _areaOfRectangle_ ។
5. បរិវេណនៃចតុកោណកែងត្រូវបានគណនាដូចខាងក្រោម៖ _perimeter= 2x(បណ្តោយ + ទទឹង)_. សរសេរមុខងារដែលគណនា_perimeterOfRectangle_.
6. បរិមាណនៃព្រីសរាងចតុកោណត្រូវបានគណនាដូចខាងក្រោម៖ _volume = បណ្តោយ x ទទឹង x កំពស់ _ ។ សរសេរអនុគមន៍ដែលគណនា _volumeOfRectPrism_ ។
7. ផ្ទៃដីនៃរង្វង់ត្រូវបានគណនាដូចខាងក្រោម៖ _area = π x r x r_ ។ សរសេរអនុគមន៍ដែលគណនា _areaOfCircle_
8. រង្វង់រង្វង់ត្រូវបានគណនាដូចខាងក្រោម៖ _circumference = 2πr_ ។ សរសេរអនុគមន៍ដែលគណនា _circumOfCircle_
9. ដង់ស៊ីតេនៃសារធាតុត្រូវបានគណនាដូចខាងក្រោម៖ _ដង់ស៊ីតេ = ម៉ាស/បរិមាណ _។ សរសេរអនុគមន៍ដែលគណនា _ដង់ស៊ីតេ_។
10. ល្បឿនត្រូវបានគណនាដោយបែងចែកចម្ងាយសរុបដែលគ្របដណ្ដប់ដោយវត្ថុផ្លាស់ទីចែកនឹងចំនួនសរុបនៃពេលវេលាដែលបានយក សរសេរអនុគមន៍ដែលគណនាល្បឿននៃវត្ថុផ្លាស់ទី _speed_ ។
11. ទំងន់នៃសារធាតុមួយត្រូវបានគណនាដូចខាងក្រោម: _weight = mass x gravity_. សរសេរមុខងារដែលគណនា _weight_ ។
12. សីតុណ្ហភាពក្នុង oC អាចបំប្លែងទៅជា oF ដោយប្រើរូបមន្តនេះ៖ _oF = (oC x 9/5) + 32_ ។ សរសេរមុខងារដែលបំលែង oC ទៅជា oF _convertCelsiusToFahrenheit_ ។
13. Body Mass Index (BMI) ត្រូវបានគណនាដូចខាងក្រោម៖ _bmi = ទម្ងន់គិតជា Kg / (កម្ពស់ x កម្ពស់) ក្នុង m2_ ។ សរសេរអនុគមន៍ដែលគណនា _bmi_ ។ BMI ត្រូវបានប្រើដើម្បីកំណត់យ៉ាងទូលំទូលាយក្រុមទម្ងន់ផ្សេងៗគ្នាចំពោះមនុស្សពេញវ័យដែលមានអាយុចាប់ពី 20 ឆ្នាំឡើងទៅ។ ពិនិត្យមើលថាតើមនុស្សម្នាក់មានទម្ងន់ _ ក្រោម ធម្មតា លើសទម្ងន់ _ ឬ _ធាត់_ ដោយផ្អែកលើព័ត៌មានដែលបានផ្តល់ឱ្យខាងក្រោម។

    - ក្រុមដូចគ្នាអនុវត្តចំពោះបុរសនិងស្ត្រី។
    - _Underweight_: BMI តិចជាង 18.5
    - _ទម្ងន់ធម្មតា_៖ BMI គឺ 18.5 ដល់ 24.9
    - _លើសទម្ងន់_៖ BMI គឺ 25 ទៅ 29.9
    - _Obese_: BMI is 30 or more

14. សរសេរមុខងារមួយហៅថា _checkSeason_ វាយកខែ ហើយត្រឡប់រដូវកាលវិញ៖ សរទរដូវ រដូវរងា និទាឃរដូវ ឬរដូវក្តៅ។
15. Math.max ត្រឡប់អាគុយម៉ង់ធំបំផុតរបស់វា។ សរសេរអនុគមន៍ findMax ដែលយកអាគុយម៉ង់បី ហើយត្រឡប់អតិបរមារបស់វាដោយមិនប្រើវិធីសាស្ត្រ Math.max ។

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### លំហាត់៖ កម្រិត ២

1. សមីការលីនេអ៊ែរត្រូវបានគណនាដូចខាងក្រោមៈ _ax + ដោយ + c = 0_ ។ សរសេរអនុគមន៍ដែលគណនាតម្លៃនៃសមីការលីនេអ៊ែរ _solveLinEquation_។
1. សមីការការ៉េត្រូវបានគណនាដូចខាងក្រោម៖ _ax2 + bx + c = 0_ ។ សរសេរអនុគមន៍ដែលគណនាតម្លៃនៃសមីការការ៉េ _solveQuadEquation_។

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

1. ប្រកាសឈ្មោះមុខងារ _printArray_ ។ វាយកអារេជាប៉ារ៉ាម៉ែត្រ ហើយវាបោះពុម្ពចេញតម្លៃនីមួយៗនៃអារេ។
1. សរសេរឈ្មោះមុខងារ _showDateTime_ ដែលបង្ហាញពេលវេលាក្នុងទម្រង់នេះ៖ 08/01/2020 04:08 ដោយប្រើវត្ថុកាលបរិច្ឆេទ។

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

1. ប្រកាសឈ្មោះមុខងារ _swapValues_ ។ មុខងារនេះប្តូរតម្លៃនៃ x ទៅ y ។

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

1. ប្រកាសឈ្មោះមុខងារ _reverseArray_ ។ វា​យក​អារេ​ជា​ប៉ារ៉ាម៉ែត្រ ហើយ​វា​ត្រឡប់​ការ​បញ្ច្រាស​នៃ​អារេ (កុំ​ប្រើ method)។

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

1. ប្រកាសឈ្មោះមុខងារ _capitalizeArray_ ។ វា​យក​អារេ​ជា​ប៉ារ៉ាម៉ែត្រ​មួយ​ហើយ​វា​ត្រឡប់​ - អក្សរធំ។
1. ប្រកាសឈ្មោះមុខងារ _addItem_ ។ វាត្រូវការប៉ារ៉ាម៉ែត្រធាតុមួយ ហើយវាត្រឡប់អារេមួយបន្ទាប់ពីបន្ថែមធាតុ
1. ប្រកាសឈ្មោះមុខងារ _removeItem_ ។ វាត្រូវការប៉ារ៉ាម៉ែត្រ index ហើយវាត្រឡប់អារេមួយបន្ទាប់ពីយកធាតុចេញ
1. ប្រកាសឈ្មោះអនុគមន៍ _sumOfNumbers_ ។ វាត្រូវការប៉ារ៉ាម៉ែត្រលេខ ហើយវាបូកលេខទាំងអស់នៅក្នុងជួរនោះ។
1. ប្រកាសឈ្មោះមុខងារ _sumOfOdds_ ។ វាត្រូវការប៉ារ៉ាម៉ែត្រលេខមួយ ហើយវាបន្ថែមលេខសេសទាំងអស់នៅក្នុងជួរនោះ។
1. ប្រកាសឈ្មោះមុខងារ _sumOfEven_ ។ វាត្រូវការប៉ារ៉ាម៉ែត្រលេខមួយ ហើយវាបន្ថែមលេខគូទាំងអស់ក្នុងជួរនោះ។
1. ប្រកាសឈ្មោះមុខងារ evensAndOdds ។ វាយកចំនួនគត់វិជ្ជមានជាប៉ារ៉ាម៉ែត្រ ហើយវារាប់ចំនួនគូ និងសេសក្នុងចំនួន។

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

1. សរសេរអនុគមន៍ដែលយកចំនួនអាគុយម៉ង់ណាមួយ ហើយត្រឡប់ផលបូកនៃអាគុយម៉ង់

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. សរសេរ function ដែលបង្កើត _randomUserIp_ ។
1. សរសេរ function ដែលបង្កើត _randomMacAddress_
1. ប្រកាស functino ឈ្មោះ _randomHexaNumberGenerator_ ។ function ឲលេខគោលដប់ប្រាំមួយចៃដន្យ។

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. ប្រកាសឈ្មោះ function _userIdGenerator_ ។ នៅពេលដែលមុខងារនេះត្រូវបានគេហៅថា វាបង្កើតលេខសម្គាល់តួអក្សរប្រាំពីរ។ មុខងារបញ្ជូនលេខសម្គាល់មកវិញ។

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### លំហាត់៖ កម្រិត ៣

1. កែប្រែ function _userIdGenerator_ ។ ប្រកាសឈ្មោះ function _userIdGeneratedByUser_ ។ វា​មិន​យក​ប៉ារ៉ាម៉ែត្រ​តែមួយ​ទេ ប៉ុន្តែ​វា​ត្រូវការ​បញ្ចូល​ពីរ​ដោយ​ប្រើ prompt() ។ ការបញ្ចូលមួយគឺចំនួនតួអក្សរ ហើយការបញ្ចូលទីពីរគឺជាចំនួនលេខសម្គាល់ដែលសន្មត់ថាត្រូវបានបង្កើត។

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

1. សរសេរឈ្មោះ function _rgbColorGenerator_ ហើយវាបង្កើតពណ៌ rgb ។

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

1. សរសេរ functino **_arrayOfHexaColors_** ដែលត្រឡប់ចំនួនពណ៌គោលដប់ប្រាំមួយក្នុងអារេមួយ។
1. សរសេរមុខងារ **_arrayOfRgbColors_** ដែលត្រឡប់ចំនួនពណ៌ RGB ណាមួយនៅក្នុងអារេមួយ។
1. សរសេរមុខងារ **_convertHexaToRgb_** ដែលបំប្លែងពណ៌ hexa ទៅ rgb ហើយវាត្រឡប់ពណ៌ rgb ។
1. សរសេរមុខងារ **_convertRgbToHexa_** ដែលបំប្លែង rgb ទៅជាពណ៌គោលដប់ប្រាំមួយ ហើយវាត្រឡប់ពណ៌ hex មួយ។
1. សរសេរមុខងារ **_generateColors_** ដែលអាចបង្កើតចំនួនពណ៌ hex ឬ rgb ណាមួយ។

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

1. ហៅមុខងាររបស់អ្នក _shuffleArray_ វាយកអារេជាប៉ារ៉ាម៉ែត្រ ហើយវាត្រឡប់អារេដែលសាប់
1. ហៅទៅមុខងាររបស់អ្នក _factorial_ វាយកលេខទាំងមូលជាប៉ារ៉ាម៉ែត្រ ហើយវាត្រឡប់លេខហ្វាតូរីស
1. ហៅមុខងាររបស់អ្នក _isEmpty_ វាត្រូវការប៉ារ៉ាម៉ែត្រ ហើយវាពិនិត្យមើលថាតើវាទទេឬអត់
1. ហៅទៅអនុគមន៍ _sum_ របស់អ្នក វាយកចំនួនអាគុយម៉ង់ណាមួយ ហើយវាត្រឡប់ផលបូក។
1. សរសេរអនុគមន៍មួយហៅថា _sumOfArrayItems_ វាយកប៉ារ៉ាម៉ែត្រអារេមួយ ហើយត្រឡប់ផលបូកនៃធាតុទាំងអស់។ ពិនិត្យមើលថាតើធាតុអារេទាំងអស់ជាប្រភេទលេខឬអត់។ បើមិនផ្តល់មតិត្រឡប់សមហេតុផល។
1. សរសេរអនុគមន៍មួយហៅថា _average_ វាត្រូវការប៉ារ៉ាម៉ែត្រអារេមួយ ហើយត្រឡប់ជាមធ្យមនៃធាតុ។ ពិនិត្យមើលថាតើធាតុអារេទាំងអស់ជាប្រភេទលេខឬអត់។ បើមិនផ្តល់មតិត្រឡប់សមហេតុផល។
1. សរសេរអនុគមន៍មួយហៅថា _modifyArray_ ដែលយកអារេជាប៉ារ៉ាម៉ែត្រ ហើយកែប្រែធាតុទីប្រាំនៃអារេ ហើយត្រឡប់អារេ។ ប្រសិនបើប្រវែងអារេតិចជាងប្រាំ វាត្រឡប់ 'រកមិនឃើញធាតុ' ។

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Not Found'
    ```

1. សរសេរមុខងារមួយហៅថា _isPrime_ ដែលពិនិត្យមើលថាតើលេខមួយគឺជាលេខបឋមឬអត់។
1.សរសេរមុខងារដែលពិនិត្យមើលថាតើធាតុទាំងអស់មានតែមួយគត់នៅក្នុងអារេ។
1. សរសេរមុខងារដែលពិនិត្យមើលថាតើធាតុទាំងអស់នៃអារេគឺជាប្រភេទទិន្នន័យដូចគ្នាឬអត់។
1. ឈ្មោះអថេរ JavaScript មិនគាំទ្រតួអក្សរ ឬនិមិត្តសញ្ញាពិសេស លើកលែងតែ \$ ឬ \_ ។ សរសេរមុខងារ **isValidVariable** ដែលពិនិត្យមើលថាតើអថេរមួយត្រឹមត្រូវ ឬអថេរអថេរ។
1. សរសេរអនុគមន៍ដែលត្រឡប់អារេនៃលេខចៃដន្យប្រាំពីរក្នុងជួរ 0-9 ។ លេខទាំងអស់ត្រូវតែមានតែមួយ។

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. សរសេរអនុគមន៍មួយហៅថា reverseCountries វាយកប្រទេសអារេ ហើយដំបូងវាចម្លងអារេ ហើយត្រឡប់អារេបញ្ច្រាសដើម

🎉 អបអរសាទរ ! 🎉

[<< ថ្ងៃទី 6](../06_Day_Loops/06_day_loops.md) | [ថ្ងៃទី 8 >>](../08_Day_Objects/08_day_objects.md)