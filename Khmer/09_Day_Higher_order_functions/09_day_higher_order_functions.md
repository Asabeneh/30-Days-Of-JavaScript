<div align="center">
  <h1> 30 ថ្ងៃនៃ JavaScript: Higher Order Functions</h1>
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

[<< ថ្ងៃទី 8](../08_Day_Objects/08_day_objects.md) | [ថ្ងៃទី 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)

![ថ្ងៃទី 9](../images/banners/day_1_9.png)

- [ថ្ងៃទី 9](#day-9)
	- [Higher Order Function](#higher-order-function)
		- [Callback](#callback)
		- [ត្រឡប់ function ជាតម្លៃ](#returning-function)
		- [ការកំណត់ពេលវេលា](#setting-time)
			- [កំណត់ចន្លោះពេលដោយប្រើមុខងារ setInterval](#setting-interval-using-a-setinterval-function)
			- [កំណត់ពេលវេលាដោយប្រើ setTimeout](#setting-a-time-using-a-settimeout)
	- [Functional Programming](#functional-programming)
		- [forEach](#foreach)
		- [map](#map)
		- [filter](#filter)
		- [reduce](#reduce)
		- [every](#every)
		- [find](#find)
		- [findIndex](#findindex)
		- [some](#some)
		- [sort](#sort)
			- [ការតម្រៀបតម្លៃ string](#sorting-string-values)
			- [ការតម្រៀបតម្លៃលេខ](#sorting-numeric-values)
			- [ការតម្រៀប Object Arrays](#sorting-object-arrays)
	- [💻 លំហាត់](#-exercises)
		- [លំហាត់៖ កម្រិត ១](#exercises-level-1)
		- [លំហាត់៖ កម្រិត ២](#exercises-level-2)
		- [លំហាត់៖ កម្រិត ៣](#exercises-level-3)

# ថ្ងៃទី 9

## Higher Order Function

Higher order functions គឺជាអនុគមន៍ដែលយកអនុគមន៍ផ្សេងទៀតជាប៉ារ៉ាម៉ែត្រ ឬត្រឡប់អនុគមន៍ជាតម្លៃ។ អនុគមន៍​ដែល​បាន​បោះ​ជា​ប៉ារ៉ាម៉ែត្រ​ត្រូវ​បាន​ហៅ​ថា​ហៅថា callback។

### Callback

callback គឺជា function ដែលអាចត្រូវបានបញ្ជូនជាប៉ារ៉ាម៉ែត្រទៅ function ផ្សេងទៀត។ សូមមើលឧទាហរណ៍ខាងក្រោម។

```js
// function callback អាចជាឈ្មោះណាមួយ។
const callback = (n) => {
  return n ** 2
}
​
// function ដែលយក function ផ្សេងទៀតជា callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

### ត្រឡប់ function ជាតម្លៃ

Higher order functions ត្រឡប់ function ជាតម្លៃ
​
```js
// Higher order function ត្រឡប់ function ជាតម្លៃ
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

អនុញ្ញាតឱ្យយើងមើលការប្រើ callback function។ ឧទាហរណ៍វិធីសាស្ត្រ _forEach_ ប្រើ callback function។

```js
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

ឧទាហរណ៍ខាងលើអាចត្រូវបានធ្វើឱ្យសាមញ្ញដូចខាងក្រោម:

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

### ការកំណត់ពេលវេលា

នៅក្នុង JavaScript យើងអាចប្រតិបត្តិសកម្មភាពមួយចំនួនក្នុងចន្លោះពេលជាក់លាក់មួយ ឬយើងអាចកំណត់ពេល (រង់ចាំ) សម្រាប់ពេលខ្លះដើម្បីប្រតិបត្តិសកម្មភាពមួយចំនួន។

- setInterval
- setTimeout

#### កំណត់ចន្លោះពេលដោយប្រើមុខងារ setInterval

នៅក្នុង JavaScript យើងប្រើ higher order function setInterval ដើម្បីធ្វើសកម្មភាពមួយចំនួនជាបន្តបន្ទាប់ក្នុងចន្លោះពេលមួយចំនួន។ វិធីសាស្ត្រសកល setInterval យក callback function និងរយៈពេលជាប៉ារ៉ាម៉ែត្រ។ រយៈពេលគឺគិតជាមិល្លីវិនាទី ហើយ callback នឹងតែងតែត្រូវបានហៅក្នុងចន្លោះពេលនោះ។

```js
// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // វាបោះពុម្ពជំរាបសួររៀងរាល់វិនាទី 1000ms គឺ 1s
```

#### កំណត់ពេលវេលាដោយប្រើ setTimeout

នៅក្នុង JavaScript យើងប្រើ higher order function setTimeout ដើម្បីប្រតិបត្តិសកម្មភាពមួយចំនួននៅពេលអនាគត។ វិធីសាស្ត្រសកល setTimeout យកមុខងារ callback និងរយៈពេលជាប៉ារ៉ាម៉ែត្រ។ ថិរវេលាគឺគិតជាមិល្លីវិនាទី ហើយការហៅត្រឡប់មកវិញរង់ចាំសម្រាប់ពេលវេលានោះ។

```js
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // រយៈពេលគិតជាមិល្លីវិនាទី
```

```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000)
```

## Functional Programming

ជំនួសឱ្យការសរសេររង្វិលជុំធម្មតា កំណែចុងក្រោយបំផុតនៃ JavaScript បានណែនាំវិធីសាស្រ្តជាច្រើនដែលអាចជួយយើងក្នុងការដោះស្រាយបញ្ហាស្មុគស្មាញ។ រាល់វិធីសាស្រ្តដែលភ្ជាប់មកជាមួយ callback function។ នៅក្នុងផ្នែកនេះ យើងនឹងឃើញ _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_, និង _sort_។

### forEach

_forEach_: iterate នូវធាតុអារេ។ យើងប្រើ _forEach_ តែជាមួយអារេ។ វាត្រូវការ callback function ជាមួយធាតុ ប៉ារ៉ាម៉ែត្រសន្ទស្សន៍ និងអារេខ្លួនឯង។ សន្ទស្សន៍ និងអារេជាជម្រើស។

```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// កូដខាងលើអាចត្រូវបានសរសេរដោយប្រើ arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// កូដខាងលើអាចត្រូវបានសរសេរដោយប្រើ arrow function និងការត្រឡប់មកវិញយ៉ាងច្បាស់
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
```

```sh
1
2
3
4
5
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
```

```sh
15
```

```js
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
```

```sh
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND
```

### map

_map_: iterate នូវធាតុអារេ និងកែប្រែធាតុអារេ។ វាត្រូវការ callback function ជាមួយធាតុ សន្ទស្សន៍ ប៉ារ៉ាម៉ែត្រអារេ ហើយត្រឡប់អារេថ្មី។

```js
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
```

```js
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//ឧទាហរណ៍
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
```

```sh
[1, 4, 9, 16, 25]
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
```

```sh
['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
```

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
```

```sh
['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
```

```js
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
```

```sh
 ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
```

### filter

_Filter_: ត្រងធាតុដែលបំពេញលក្ខខណ្ឌហើយត្រឡប់អារេថ្មី។

```js
//ត្រងប្រទេសដែលមាន land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
```

```sh
['Finland', 'Ireland']
```

```js
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
```

```sh
['Albania', 'Bolivia','Ethiopia']
```

```js
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
```

```sh
['Japan', 'Kenya']
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
```

```sh
[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
```

### reduce

_reduce_: ប្រើ callback function។ callback function យក accumulator, បច្ចុប្បន្ន និងតម្លៃដំបូងជាជម្រើសជាប៉ារ៉ាម៉ែត្រ ហើយត្រឡប់តម្លៃតែមួយ។ វាគឺជាការអនុវត្តដ៏ល្អក្នុងការកំណត់តម្លៃដំបូងសម្រាប់តម្លៃ accumulator ។ ប្រសិនបើយើងមិនបញ្ជាក់ប៉ារ៉ាម៉ែត្រនេះទេ តាមលំនាំដើម accumulator នឹងទទួលបានអារេ `តម្លៃដំបូង`។ ប្រសិនបើអារេរបស់យើងជា _empty array_ នោះ `Javascript` នឹងបោះកំហុស។

```js
arr.reduce((acc, cur) => {
  // ប្រតិបត្តិការមួយចំនួនទៅទីនេះ មុនពេលត្រឡប់តម្លៃ
 return 
}, initialValue)
```

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
```

```js
15
```

### every

_every_: ពិនិត្យមើលថាតើធាតុទាំងអស់ស្រដៀងគ្នានៅក្នុងទិដ្ឋភាពមួយ។ វាត្រឡប់ប៊ូលីន

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // តើជា string ទាំងអស់ទេ?

console.log(areAllStr)
```

```sh
true
```

```js
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // តើជា ពិត ទាំងអស់ទេ?

console.log(areAllTrue) // true
```

```sh
true

```

### find

_find_: ត្រឡប់ធាតុទីមួយដែលបំពេញលក្ខខណ្ឌ

```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
```

```js
18
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)
```

```sh
Asabeneh
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)
```

```sh
{ name: "Asabeneh", score: 95 }
```

### findIndex

_findIndex_: ត្រឡប់ទីតាំងនៃធាតុទីមួយដែលបំពេញលក្ខខណ្ឌ

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
```

### some

_some_: ពិនិត្យមើលថាតើធាតុមួយចំនួនស្រដៀងគ្នានៅក្នុងទិដ្ឋភាពមួយ។ វាត្រឡប់ប៊ូលីន

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
```

```js
const areAllStr = names.some((name) => typeof name === 'number') // តើ string ទាំងអស់ទេ?
console.log(areAllStr) // false
```

### sort

_sort_: method ​តម្រៀប​​ធាតុ​អារេ​តាម​លំដាប់​ឡើង​ឬ​ចុះ។ តាមលំនាំដើម វិធីសាស្ត្រ **_sort()_** តម្រៀបតម្លៃជា string។ វាដំណើរការល្អសម្រាប់ធាតុអារេ string ប៉ុន្តែមិនមែនសម្រាប់លេខទេ។ ប្រសិនបើតម្លៃលេខត្រូវបានតម្រៀបជាខ្សែ ហើយវាផ្តល់ឱ្យយើងនូវលទ្ធផលខុស។ វិធីសាស្ត្រតម្រៀប កែប្រែអារេដើម។ វាត្រូវបានណែនាំឱ្យចម្លងទិន្នន័យដើម មុនពេលអ្នកចាប់ផ្តើមប្រើវិធីសាស្ត្រ _sort_។

#### ការតម្រៀបតម្លៃ string

```js
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//ឥឡូវនេះអារេផលិតផលដើមក៏ត្រូវបានតម្រៀបផងដែរ។
```

#### ការតម្រៀបតម្លៃលេខ

ដូចដែលអ្នកអាចឃើញនៅក្នុងឧទាហរណ៍ខាងក្រោម 100 បានមកជាលើកដំបូងបន្ទាប់ពីបានតម្រៀបតាមលំដាប់ឡើង។ តម្រៀបបំប្លែងធាតុទៅជាខ្សែអក្សរ ចាប់តាំងពី '100' និងលេខផ្សេងទៀតប្រៀបធៀប 1 ដែលការចាប់ផ្តើមនៃខ្សែអក្សរ '100' ក្លាយជាតូចបំផុត។ ដើម្បីជៀសវាងបញ្ហានេះ យើងប្រើ callback functio ប្រៀបធៀបនៅក្នុងវិធីតម្រៀប ដែលផ្តល់លទ្ធផលអវិជ្ជមាន សូន្យ ឬវិជ្ជមាន។

```js
const numbers = [9.81, 3.14, 100, 37]
// ការប្រើ sort method ដើម្បីតម្រៀបធាតុលេខផ្តល់លទ្ធផលខុស។ មើល​ខាង​ក្រោម
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
```

#### ការតម្រៀប Object Array

នៅពេលណាដែលយើងតម្រៀប object ក្នុងអារេមួយ យើងប្រើ key ដើម្បីប្រៀបធៀប។ ចូរយើងមើលឧទាហរណ៍ខាងក្រោម។

```js
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // តម្រៀបឡើង
// [{…}, {…}, {…}, {…}]
```

🌕 អ្នក​កំពុង​ធ្វើ​បាន​ល្អ​។​ កុំ​បោះបង់​ចោល​ព្រោះ​រឿង​អស្ចារ្យ​ត្រូវ​ការ​ពេល​វេលា។ អ្នកទើបតែបានបញ្ចប់ការប្រកួតថ្ងៃទី 9 ហើយអ្នកបានឈាន 9 ជំហាន ឆ្ពោះទៅរកភាពអស្ចារ្យ។ ឥឡូវធ្វើលំហាត់ខ្លះសម្រាប់ខួរក្បាល និងសាច់ដុំរបស់អ្នក។

## 💻 លំហាត់

### លំហាត់៖ កម្រិត ១

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```

1. ពន្យល់ពីភាពខុសគ្នារវាង **_forEach map filter reduce**។
2. កំណត់ callback function មុនពេលដែលអ្នកប្រើវានៅក្នុង forEach, map, filter or reduce។
3. ប្រើ **_forEach_** ដើម្បី console.log ប្រទេសនីមួយៗក្នុងបណ្តាប្រទេសអារេ។
4. ប្រើ **_forEach_** ដើម្បី console.log ឈ្មោះនីមួយៗក្នុងអារេឈ្មោះ។
5. ប្រើ **_forEach_** ដើម្បី console.log លេខនីមួយៗក្នុងអារេលេខ។
6. ប្រើ **_map_** ដើម្បីបង្កើតអារេថ្មីដោយផ្លាស់ប្តូរប្រទេសនីមួយៗទៅជាអក្សរធំក្នុងប្រទេសអារេ។
7. ប្រើ **_map_** ដើម្បីបង្កើតអារេនៃប្រវែងប្រទេសពីអារេប្រទេស។
8. ប្រើ **_map_** ដើម្បីបង្កើតអារេថ្មីដោយផ្លាស់ប្តូរលេខនីមួយៗទៅជាការ៉េក្នុងអារេលេខ
9. ប្រើ **_map_** ដើម្បីប្តូរឈ្មោះនីមួយៗទៅជាអក្សរធំក្នុងអារេឈ្មោះ
10. ប្រើ **_map_** ដើម្បីគូសផែនទីអារេផលិតផលទៅនឹងតម្លៃដែលត្រូវគ្នារបស់វា។
11. ប្រើ **_filter_** ដើម្បីត្រងប្រទេសដែលមាន **_land_**។
12. ប្រើ **_filter_** ដើម្បីត្រងប្រទេសដែលមានតួអក្សរប្រាំមួយ។
13. ប្រើ **_filter_** ដើម្បីត្រងប្រទេសដែលមានអក្សរប្រាំមួយ និងច្រើនទៀតនៅក្នុងអារេប្រទេស។
14. ប្រើ **_filter_** ដើម្បីត្រងប្រទេសដែលចាប់ផ្តើមដោយ 'E';
15. ប្រើ **_filter_** ដើម្បីត្រងតែតម្លៃដែលមានតម្លៃប៉ុណ្ណោះ។
16. ប្រកាសមុខងារមួយហៅថា getStringLists ដែលយកអារេជាប៉ារ៉ាម៉ែត្រ ហើយបន្ទាប់មកត្រឡប់អារេតែជាមួយធាតុខ្សែអក្សរប៉ុណ្ណោះ។
17. ប្រើ **_reduce_** ដើម្បីបូកសរុបលេខទាំងអស់ក្នុងអារេលេខ។
18. ប្រើ **_reduce_** ដើម្បីភ្ជាប់ប្រទេសទាំងអស់ និងបង្កើតប្រយោគនេះ៖ **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
19. ពន្យល់ពីភាពខុសគ្នារវាង **_some_** និង **_every_**
20. ប្រើ **_some_** ដើម្បីពិនិត្យមើលថាតើប្រវែងឈ្មោះខ្លះធំជាងប្រាំពីរនៅក្នុងអារេឈ្មោះ
21. ប្រើ **_every_** ដើម្បីពិនិត្យមើលថាតើប្រទេសទាំងអស់មានពាក្យថា land ឬអត់
22. ពន្យល់ពីភាពខុសគ្នារវាង **_find_** និង **_findIndex_** ។
23. ប្រើ **_find_** ដើម្បីស្វែងរកប្រទេសដំបូងដែលមានអក្សរតែប្រាំមួយក្នុងប្រទេសអារេ
24. ប្រើ **_findIndex_** ដើម្បីស្វែងរកទីតាំងនៃប្រទេសដំបូងដែលមានអក្សរតែប្រាំមួយនៅក្នុងបណ្តាប្រទេសអារេ
25. ប្រើ **_findIndex_** ដើម្បីស្វែងរកទីតាំងរបស់ **_Norway_** ប្រសិនបើវាមិនមាននៅក្នុងអារេ អ្នកនឹងទទួលបាន -1 ។
26. ប្រើ **_findIndex_** ដើម្បីស្វែងរកទីតាំងរបស់ **_Russia_** ប្រសិនបើវាមិនមាននៅក្នុងអារេ អ្នកនឹងទទួលបាន -1 ។

### លំហាត់៖ កម្រិត ២

1. ស្វែងរកតម្លៃសរុបនៃផលិតផលដោយដាក់ខ្សែសង្វាក់អារេពីរ ឬច្រើន (ឧ. arr.map(callback).filter(callback).reduce(callback))
1. ស្វែងរកផលបូកនៃតម្លៃផលិតផលដោយប្រើតែកាត់បន្ថយ(callback)
1. ប្រកាសមុខងារមួយហៅថា **_categorizeCountries_** ដែលត្រឡប់អារេនៃប្រទេសដែលមានលំនាំទូទៅមួយចំនួន (អ្នករកឃើញអារេប្រទេសនៅក្នុងឃ្លាំងនេះជា countries.js(ឧ. 'land', 'ia', 'island','stan' ))
1. បង្កើតមុខងារដែលត្រឡប់អារេនៃវត្ថុដែលជាអក្សរ និងចំនួនដងដែលអក្សរប្រើដើម្បីចាប់ផ្តើមជាមួយឈ្មោះប្រទេសមួយ។
1. ប្រកាសមុខងារ **_getFirstTenCountries_** ហើយត្រឡប់អារេនៃដប់ប្រទេស។ ប្រើកម្មវិធីមុខងារផ្សេងៗគ្នា ដើម្បីដំណើរការលើអារេ country.js
1. ប្រកាសមុខងារ **_getLastTenCountries_** ដែលត្រឡប់ប្រទេសទាំងដប់ចុងក្រោយនៅក្នុងអារេប្រទេស។
1. ស្វែងយល់ថាតើ _letter_ មួយណាត្រូវបានប្រើប្រាស់ច្រើនដង ជាដំបូងសម្រាប់ឈ្មោះប្រទេសពីអារេប្រទេស (ឧ. ហ្វាំងឡង់ ហ្វីជី បារាំង។ល។)

### លំហាត់៖ កម្រិត ៣

1. ប្រើព័ត៌មានប្រទេសនៅក្នុងថតទិន្នន័យ។ តម្រៀបប្រទេសតាម name, capital, និង population
1. \*\*\* ស្វែងរក 10 ភាសាដែលនិយាយច្រើនបំផុត:

   ````js
   // លទ្ធផលរបស់អ្នកគួរតែមើលទៅដូចនេះ
   console.log(mostSpokenLanguages(countries, 10))
   [
   {country: 'English',count:91},
   {country: 'French',count:45},
   {country: 'Arabic',count:25},
   {country: 'Spanish',count:24},
   {country:'Russian',count:9},
   {country:'Portuguese', count:9},
   {country:'Dutch',count:8},
   {country:'German',count:7},
   {country:'Chinese',count:5},
   {country:'Swahili',count:4}
   ]

   // លទ្ធផលរបស់អ្នកគួរតែមើលទៅដូចនេះ
   console.log(mostSpokenLanguages(countries, 3))
   [
   {country: 'English',count: 91},
   {country: 'French',count: 45},
   {country: 'Arabic',count: 25},
   ]```

   ````

2. \*\*\* ប្រើឯកសារ country_data.js បង្កើតមុខងារដែលបង្កើតប្រទេសចំនួនដប់ដែលមានប្រជាជនច្រើនជាងគេ

   ````js
   console.log(mostPopulatedCountries(countries, 10))

   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000},
   {country: 'Indonesia', population: 258705000},
   {country: 'Brazil', population: 206135893},
   {country: 'Pakistan', population: 194125062},
   {country: 'Nigeria', population: 186988000},
   {country: 'Bangladesh', population: 161006790},
   {country: 'Russian Federation', population: 146599183},
   {country: 'Japan', population: 126960000}
   ]

   console.log(mostPopulatedCountries(countries, 3))
   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000}
   ]
   ```

   ````

3. \*\*\* ព្យាយាមបង្កើតកម្មវិធីដែលគណនារង្វាស់នៃទំនោរកណ្តាលនៃគំរូ (mean, median, mode) និងរង្វាស់នៃភាពប្រែប្រួល (range, variance, standard deviation)។ បន្ថែមពីលើវិធានការទាំងនោះ រកឃើញ min, max, count, percentile, និង frequency distributionនៃគំរូ។ អ្នកអាចបង្កើតវត្ថុមួយហៅថាស្ថិតិ និងបង្កើតមុខងារទាំងអស់ដែលធ្វើការគណនាស្ថិតិជាវិធីសាស្ត្រសម្រាប់វត្ថុស្ថិតិ។ សូមពិនិត្យមើលលទ្ធផលខាងក្រោម។
   ```js
   const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

   console.log('Count:', statistics.count()) // 25
   console.log('Sum: ', statistics.sum()) // 744
   console.log('Min: ', statistics.min()) // 24
   console.log('Max: ', statistics.max()) // 38
   console.log('Range: ', statistics.range()) // 14
   console.log('Mean: ', statistics.mean()) // 30
   console.log('Median: ',statistics.median()) // 29
   console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Standard Deviation: ', statistics.std()) // 4.2
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

   ```sh
   console.log(statistics.describe())
   Count: 25
   Sum:  744
   Min:  24
   Max:  38
   Range:  14
   Mean:  30
   Median:  29
   Mode:  (26, 5)
   Variance:  17.5
   Standard Deviation:  4.2
   Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

🎉 អបអរសាទរ ! 🎉

[<< ថ្ងៃទី 8](../08_Day_Objects/08_day_objects.md) | [ថ្ងៃទី 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)
