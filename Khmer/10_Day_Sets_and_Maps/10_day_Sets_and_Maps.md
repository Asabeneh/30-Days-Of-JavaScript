<div align="center">
  <h1> 30 ថ្ងៃនៃ JavaScript: Sets and Maps</h1>
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

[<< ថ្ងៃទី 9](../09_Day_Higher_order_functions/09_day_higher_order_functions.md) | [ថ្ងៃទី 11>>](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)

![ថ្ងៃទី 10](../images/banners/day_1_10.png)

- [ថ្ងៃទី 10](#day-10)
	- [Set](#set)
		- [ការបង្កើតសំណុំទទេ](#creating-an-empty-set)
		- [ការបង្កើតសំណុំពីអារេ](#creating-set-from-array)
		- [ការបន្ថែមធាតុទៅសំណុំ](#adding-an-element-to-a-set)
		- [ការលុបធាតុពីសំណុំ](#deleting-an-element-a-set)
		- [ពិនិត្យធាតុនៅក្នុងសំណុំ](#checking-an-element-in-the-set)
		- [ការរំលាយសំណុំ](#clearing-the-set)
		- [ប្រជុំនៃសំណុំ](#union-of-sets)
		- [ប្រសព្វនៃសំណុំ](#intersection-of-sets)
		- [ភាពខុសគ្នានៃសំណុំ](#difference-of-sets)
	- [Map](#map)
		- [ការបង្កើត map ទទេ](#creating-an-empty-map)
		- [ការបង្កើត map ពីអារេ](#creating-an-map-from-array)
		- [ការបន្ថែមតម្លៃទៅ map](#adding-values-to-the-map)
		- [ការទាញយកតម្លៃពី map](#getting-a-value-from-map)
		- [ពិនិត្យ​មើល key ក្នុង​ map](#checking-key-in-map)
	- [លំហាត់](#exercises)
		- [លំហាត់៖ កម្រិត ១](#exerciseslevel-1)
		- [លំហាត់៖ កម្រិត ២](#exerciseslevel-2)
		- [លំហាត់៖ កម្រិត ៣](#exerciseslevel-3)

# ថ្ងៃទី 10

## Set

សំណុំគឺជាបណ្តុំនៃធាតុ។ សំណុំអាចមានធាតុតែមួយគត់។
ចូរយើងមើលពីរបៀបបង្កើតសំណុំនៅក្នុងផ្នែកខាងក្រោម។

### ការបង្កើតសំណុំទទេ

```js
const companies = new Set()
console.log(companies)
```

```sh
Set(0) {}
```

### ការបង្កើតសំណុំពីអារេ

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
```

```sh
Set(4) {"English", "Finnish", "French", "Spanish"}
```

Set គឺជាវត្ថុដែលអាច iterate បាន ហើយយើងអាច iterate តាមរយៈធាតុនីមួយៗ។

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}
```

```sh
  English
  Finnish
  French
  Spanish
```

### ការបន្ថែមធាតុទៅសំណុំ

```js
const companies = new Set() // បង្កើតសំណុំទទេ
console.log(companies.size) // 0

companies.add('Google') // បន្ថែមធាតុទៅសំណុំ
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 ធាតុនៅក្នុងសំណុំ
console.log(companies)
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

យើងក៏អាចប្រើ loop ដើម្បីបន្ថែមធាតុទៅសំណុំមួយ។

```js
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

```

### ការលុបធាតុមួយឈុត

យើងអាចលុបធាតុចេញពីសំណុំដោយប្រើ delete method។

```js
console.log(companies.delete('Google'))
console.log(companies.size) // 4 ធាតុដែលនៅសល់ក្នុងឈុត
```

### ពិនិត្យធាតុនៅក្នុងសំណុំ

method នេះអាចជួយឱ្យដឹងថាតើមានធាតុជាក់លាក់ណាមួយនៅក្នុងសំណុំមួយ។

```js
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true
```

### ការរំលាយសំណុំ

វាដកធាតុទាំងអស់ចេញពីសំណុំ។

```js
companies.clear()
console.log(companies)
```

```sh
Set(0) {}
```

សូមមើលឧទាហរណ៍ខាងក្រោមដើម្បីរៀនពីរបៀបប្រើសំណុំ។

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
```

```js
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
]
```

ករណីប្រើប្រាស់ផ្សេងទៀតនៃសំណុំ។ ឧទាហរណ៍ដើម្បីរាប់ធាតុតែមួយគត់នៅក្នុងអារេមួយ។

```js
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)
```

```sh
Set(5) {5, 3, 2, 9, 4}
```

### ប្រជុំនៃសំណុំ

ដើម្បីស្វែងរកប្រជុំនៃពីរសំណុំយើងអាចប្រើ spread operator។ ចូរស្វែងរកប្រជុំនៃសំណុំ A និង សំណុំ B (A U B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
```

```sh
Set(6) {1, 2, 3, 4, 5,6}
```

### ប្រសព្វនៃសំណុំ

ដើម្បីស្វែងរកចំនុចប្រសព្វនៃសំណុំពីរអាចត្រូវបានសម្រេចដោយប្រើ filter។ ចូរស្វែងរកចំនុចប្រសព្វនៃសំណុំ A និងកំណត់ B (A ∩ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(3) {3, 4, 5}
```

### ភាពខុសគ្នានៃសំណុំ

ដើម្បីស្វែងរកភាពខុសគ្នារវាងសំណុំពីរអាចត្រូវបានសម្រេចដោយប្រើ filter។ ចូរស្វែងរកភាពខុសគ្នានៃសំណុំ A និងសំណុំ B (A \ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(2) {1, 2}
```

## Map

### ការបង្កើត map ទទេ

```js
const map = new Map()
console.log(map)
```

```sh
Map(0) {}
```

### ការបង្កើត map ពីអារេ

```js
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### ការបន្ថែមតម្លៃទៅ map

```js
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### ការទាញយកតម្លៃពី map

```js
console.log(countriesMap.get('Finland'))
```

```sh
Helsinki
```

### ​ពិនិត្យ​មើល​ key ក្នុង​ map

ពិនិត្យមើលថាតើ key មាននៅក្នុង map ដោយប្រើវិធីសាស្ត្រ _has_ ។ វាត្រឡប់ _true_ ឬ _false_ ។

```js
console.log(countriesMap.has('Finland'))
```

```sh
true
```

ទទួលបានតម្លៃទាំងអស់ពីផែនទីដោយប្រើ loop

```js
for (const country of countriesMap) {
  console.log(country)
}
```

```sh
(2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]
```

```js
for (const [country, city] of countriesMap){
 console.log(country, city)
}
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

🌕 អ្នក​បាន​បង្កើត​ព្រឹត្តិការណ៍​ដ៏​ធំ​មួយ អ្នក​មិន​អាច​ឈប់​បាន​ទេ។ បន្ត​ទៀត! អ្នកទើបតែបានបញ្ចប់ challenge 10 ថ្ងៃ ហើយអ្នកបានឈាន 10 ជំហានឆ្ពោះកាន់ភាពអស្ចារ្យ។ ឥឡូវធ្វើលំហាត់ខ្លះសម្រាប់ខួរក្បាល និងសាច់ដុំរបស់អ្នក។

## លំហាត់

### លំហាត់៖ កម្រិត ១

```js
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
```

1. បង្កើតសំណុំទទេ
2. បង្កើតសំណុំដែលមាន 0 ទៅ 10 ដោយប្រើរង្វិលជុំ
3. យកធាតុចេញពីសំណុំ
4. ជម្រះសំណុំមួយ។
5. បង្កើតសំណុំនៃធាតុ 5 string ពីអារេ
6. បង្កើត map នៃប្រទេស និងចំនួនតួអក្សរនៃប្រទេសមួយ។

### លំហាត់៖ កម្រិត ២

1. ស្វែងរក a ប្រជុំ b
2. ស្វែងរក a ប្រសព្វ b
3. ស្វែងរក a ជាមួយ b

### លំហាត់៖ កម្រិត ៣

1. តើមានភាសាប៉ុន្មាននៅក្នុងឯកសារ object country

1. \*\*\* ប្រើទិន្នន័យប្រទេសដើម្បីស្វែងរក 10 ភាសានិយាយច្រើនបំផុត:

```js
   // លទ្ធផលរបស់អ្នកគួរតែមើលទៅដូចនេះ
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // លទ្ធផលរបស់អ្នកគួរតែមើលទៅដូចនេះ
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
```

🎉 អបអរសាទរ ! 🎉

[<< ថ្ងៃទី 9](../09_Day_Higher_order_functions/09_day_higher_order_functions.md) | [ថ្ងៃទី 11 >>](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)
