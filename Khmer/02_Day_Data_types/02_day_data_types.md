<div align="center">
  <h1> 30 ថ្ងៃនៃ JavaScript: ប្រភេទទិន្នន័យ </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>អ្នកនិពន្ធ:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> មករា, 2020</small>
</sub>

</div>
</div>

[<< ថ្ងៃទី ១](../readMe.md) | [ថ្ងៃទី ៣ >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

![Thirty Days Of JavaScript](../images/banners/day_1_2.png)

- [📔 ថ្ងៃទី​ ២](#-day-2)
  - [ប្រភេទទិន្នន័យ](#data-types)
    - [ប្រភេទទិន្នន័យបឋម](#primitive-data-types)
    - [ប្រភេទទិន្នន័យមិនបឋម](#non-primitive-data-types)
  - [Numbers](#numbers)
    - [ការប្រកាសប្រភេទទិន្នន័យ Numbers](#declaring-number-data-types)
    - [Math Object](#math-object)
      - [ការបង្កើតលេខចៃដន្យ](#random-number-generator)
  - [Strings](#strings)
    - [ការភ្ជាប់ String](#string-concatenation)
      - [ការភ្ជាប់ដោយប្រើសញ្ញាបូក](#concatenating-using-addition-operator)
      - [Long Literal Strings](#long-literal-strings)
      - [Escape Sequences នៅក្នុង Strings](#escape-sequences-in-strings)
      - [Template Literals (Strings គំរូ)](#template-literals-template-strings)
    - [String Methods](#string-methods)
  - [ការពិនិត្យមើលនិងផ្លាស់ប្តូរប្រភេទទិន្នន័យ](#checking-data-types-and-casting)
    - [ពិនិត្យប្រភេទទិន្នន័យ](#checking-data-types)
    - [ការផ្លាស់ប្តូរប្រភេទទិន្នន័យ (Casting)](#changing-data-type-casting)
      - [String ទៅចំនួនគត់](#string-to-int)
      - [String ទៅចំនួនទសភាគ](#string-to-float)
      - [ចំនួនទសភាគទៅចំនួនគត់](#float-to-int)
  - [💻 លំហាត់សម្រាប់ថ្ងៃទី ២](#-day-2-exercises)
    - [លំហាត់៖ កម្រិត ១](#exercise-level-1)
    - [លំហាត់៖ កម្រិត ២](#exercise-level-2)
    - [លំហាត់៖ កម្រិត ៣](#exercises-level-3)

# 📔 Day 2

## ប្រភេទទិន្នន័យ

នៅក្នុងផ្នែកមុន យើងបានរៀបរាប់បន្តិចអំពីប្រភេទទិន្នន័យ។ ទិន្នន័យ ឬតម្លៃមានប្រភេទទិន្នន័យ។ ប្រភេទទិន្នន័យពិពណ៌នាអំពីលក្ខណៈនៃទិន្នន័យ។ ប្រភេទទិន្នន័យអាចបែងចែកជាពីរ៖

1. ប្រភេទទិន្នន័យបឋម
2. ប្រភេទទិន្នន័យមិនបឋម (Object references)

### ប្រភេទទិន្នន័យបឋម

ប្រភេទទិន្នន័យបឋមនៅក្នុង JavaScript រួមមាន::

1.  Number - ចំនួនគត់, ចំនួនទសភាគ
2.  String - ទិន្នន័យណាមួយនៅក្រោម single quote, double quote និង backtick quote
3.  Booleans - តម្លៃពិតឬមិនពិត
4.  Null - តម្លៃទទេ ឬគ្មានតម្លៃ
5.  Undefined - អថេរដែលបានប្រកាសដោយគ្មានតម្លៃ
6.  Symbol - តម្លៃពិសេសមួយដែលអាចបង្កើតដោយ Symbol constructor

ប្រភេទទិន្នន័យដែលមិនមែនបឋមនៅក្នុង JavaScript រួមមាន:

1. Objects
2. Arrays

ឥឡូវនេះ យើងមើលថាតើប្រភេទទិន្នន័យបឋម និងមិនមែនបឋមមានន័យដូចម្តេច។
ប្រភេទទិន្នន័យបឋម គឺជាប្រភេទទិន្នន័យដែលមិនអាចកែប្រែបាន។ នៅពេលដែលប្រភេទទិន្នន័យបឋមត្រូវបានបង្កើត យើងមិនអាចកែប្រែវាបានទេ។

**ឧទាហរណ៍:**

```js
let word = "JavaScript";
```

ប្រសិនបើយើងព្យាយាមកែប្រែខ្សែអក្សរដែលរក្សាទុកក្នុងអថេរ _word_ នោះ JavaScript គួរតែបង្កើត error។ ប្រភេទទិន្នន័យណាមួយនៅក្រោម single quote, double quote, រឺ backtick quote គឺជាប្រភេទទិន្នន័យខ្សែអក្សរ។

```js
word[0] = "Y";
```

កន្សោមនេះមិនផ្លាស់ប្តូរ string ដែលរក្សាទុកក្នុងអថេរ _word_ ទេ។ ដូច្នេះ យើងអាចនិយាយបានថា string មិនអាចកែប្រែបានទេ។
ប្រភេទទិន្នន័យបឋមត្រូវបានប្រៀបធៀបដោយតម្លៃរបស់វា។ ឥឡូវ​នេះយើងប្រៀបធៀបតម្លៃទិន្នន័យផ្សេងៗគ្នា។ សូមមើលឧទាហរណ៍ខាងក្រោម៖

```js
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // ពិត

let js = "JavaScript";
let py = "Python";

console.log(js == py); // មិនពិត

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // មិនពិត
```

### ប្រភេទទិន្នន័យមិនបឋម

ប្រភេទទិន្នន័យមិនបឋមគឺអាចកែប្រែបាន ឬអាចផ្លាស់ប្តូរបាន។ យើងអាចកែប្រែតម្លៃនៃប្រភេទទិន្នន័យដែលមិនមែនបឋមបន្ទាប់ពីបង្កើតវា។
យើងអាចមើលឃើញដោយបង្កើត Array។ ​Array គឺជាបញ្ជីតម្លៃទិន្នន័យក្នុងតង្កៀបការ៉េ។ Array អាចមានប្រភេទទិន្នន័យដូចគ្នា ឬផ្សេងគ្នា។ តម្លៃ Array ត្រូវបានយោងដោយ index របស់ពួកគេ។ នៅក្នុង Array index JavaScript ចាប់ផ្តើមនៅសូន្យ។ I.e. ធាតុទីមួយនៃ Array ត្រូវបានរកឃើញនៅ index សូន្យ ធាតុទីពីរនៅ index មួយ និងធាតុទីបីនៅ index ទីពីរ។ល។

```js
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]
```

ដូចដែលអ្នកអាចឃើញ Array ដែលជាប្រភេទទិន្នន័យដែលមិនបឋមគឺអាចផ្លាស់ប្តូរបាន។ ប្រភេទទិន្នន័យដែលមិនមែនបឋមមិនអាចប្រៀបធៀបតាមតម្លៃបានទេ។ ទោះបីជាប្រភេទទិន្នន័យដែលមិនមែនជាបឋមពីរមានលក្ខណៈសម្បត្តិ និងតម្លៃដូចគ្នាក៏ដោយ ពួកវាមិនស្មើគ្នាយ៉ាងតឹងរ៉ឹងទេ។

```js
let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers); // មិនពិត

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

console.log(userOne == userTwo); // មិនពិត
```

យើងមិនប្រៀបធៀបប្រភេទទិន្នន័យដែលមិនមែនបឋមទេ។ កុំប្រៀបធៀប Array, Functions ឬ Objects។
តម្លៃ​ដែល​មិន​មែន​បឋម​ត្រូវ​បាន​គេ​ហៅ​ថា​ជា​ប្រភេទ​ reference​ ព្រោះ​វា​ត្រូវ​បាន​គេ​ប្រៀបធៀប​ដោយ​ reference ​ជា​ជាង​តម្លៃ។ វត្ថុពីរគឺស្មើគ្នាយ៉ាងតឹងរ៉ឹង ប្រសិនបើពួកគេសំដៅទៅលើវត្ថុមូលដ្ឋានដូចគ្នា។

```js
let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers); // ពិត

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = userOne;

console.log(userOne == userTwo); // ពិត
```

ប្រសិនបើអ្នកមានការលំបាកក្នុងការយល់ដឹងពីភាពខុសគ្នារវាងប្រភេទទិន្នន័យបឋម និងប្រភេទទិន្នន័យដែលមិនបឋម អ្នកមិនមែនជាមនុស្សតែម្នាក់នោះទេ។ ស្ងប់ស្ងាត់ចុះ ហើយគ្រាន់តែទៅផ្នែកបន្ទាប់ ហើយព្យាយាមត្រឡប់មកវិញបន្ទាប់ពីពេលខ្លះ។ ឥឡូវនេះអនុញ្ញាតឱ្យយើងចាប់ផ្តើមប្រភេទទិន្នន័យតាមប្រភេទលេខ។

## Numbers

Numbers គឺជាចំនួនគត់ និងតម្លៃទសភាគដែលអាចធ្វើប្រតិបត្តិការនព្វន្ធទាំងអស់។
តោះមើលឧទាហរណ៍មួយចំនួននៃលេខ។

### ការប្រកាសប្រភេទទិន្នន័យ Numbers

```js
let age = 35;
const gravity = 9.81; // យើងប្រើ const សម្រាប់តម្លៃមិនផ្លាស់ប្តូរ
let mass = 72; // ម៉ាស់គិតជាគីឡូក្រាម
const PI = 3.14; // pi ជាតម្លៃថេរ

// ឧទាហរណ៍ច្រើនទៀត
const boilingPoint = 100; // ចំណុចរំពុះនៃទឹករ
const bodyTemp = 37; // សីតុណ្ហភាពរាងកាយរបស់មនុស្សជាមធ្យម

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
```

### Math Object

នៅក្នុង JavaScript Math Object ផ្តល់នូវវិធីសាស្រ្តជាច្រើនដើម្បីធ្វើការជាមួយលេខ។

```js
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// បង្គត់ទៅលេខជិតបំផុត។
// ឡើងលើបើ .5 ឡើង ចុះក្រោមបើ 0.5 ចុះ

console.log(Math.round(PI)); // 3 ដើម្បីបង្គត់តម្លៃទៅលេខដែលនៅជិតបំផុត។

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 បង្គត់ចុះ

console.log(Math.ceil(PI)); // 4 បង្គត់ឡើង

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, ឲតម្លៃអប្បបរមា

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, ឲតម្លៃអតិបរមា

const randNum = Math.random(); // បង្កើតលេខចៃដន្យរចន្លោះពី 0 ទៅ 0.999999
console.log(randNum);

// យើងបង្កើតលេខចៃដន្យពី 0 ទៅ 10

const num = Math.floor(Math.random() * 11); // បង្កើតលេខចៃដន្យពី 0 ទៅ 10
console.log(num);

//តម្លៃ​ដាច់ខាត
console.log(Math.abs(-10)); // 10

//ឫស​ការេ
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// ស្វ័យគុណ
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// លោការីត
// ឲ​លោការីត​ធម្មជាតិ​ជាមួយ​នឹង​គោល E នៃ x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// ឲលោការីតធម្មជាតិនៃ 2 និង 10 រៀងគ្នា។
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// ត្រីកោណមាត្រ
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

#### ការបង្កើតលេខចៃដន្យ

JavaScript Math Object មាន random() method generator ដែលបង្កើតលេខពី 0 ដល់ 0.999999999...

```js
let randomNum = Math.random(); // បង្កើត 0 ទៅ 0.999...
```

ឥឡូវនេះ អនុញ្ញាតឱ្យយើងមើលពីរបៀបដែលយើងអាចប្រើ random() method ដើម្បីបង្កើតចំនួនចៃដន្យរពី 0 ទៅ 10:

```js
let randomNum = Math.random(); // បង្កើតលេខពី 0 ទៅ 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // នេះផ្តល់ឱ្យតម្លៃ៖ អប្បបរមា 0 និងអតិបរមា 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // នេះផ្តល់ឱ្យតម្លៃចន្លោះពី 0 ទៅ 10
```

## Strings

String គឺជាអត្ថបទដែលស្ថិតនៅក្រោម **_single_** , **_double_**, **_back-tick_** quote។ ដើម្បីប្រកាស String យើងត្រូវការឈ្មោះអថេរ assignment operator និងតម្លៃក្រោម single quote, double quote និង backtick quote។
តោះមើលឧទាហរណ៍ខ្លះនៃ string៖

```js
let space = " "; // string ទទេ
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;
```

### ការភ្ជាប់ String

ការភ្ជាប់ String ពីរ ឬច្រើនជាមួយគ្នាត្រូវបានគេហៅថា Concatenation។ ដោយប្រើ String ដែលបានប្រកាសនៅផ្នែកមុន៖

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

យើងអាចភ្ជាប់ string តាមវិធីផ្សេងៗគ្នា។

#### ការភ្ជាប់ដោយប្រើសញ្ញាបូក

ការភ្ជាប់ដោយប្រើសញ្ញាបូកគឺជាវិធីចាស់។ វិធីនៃការភ្ជាប់គ្នានេះគឺពិបាកនិងងាយមានកំហុស។ វាជាការល្អក្នុងការដឹងពីរបៀបភ្ជាប់តាមវិធីនេះ ប៉ុន្តែខ្ញុំស្នើឱ្យប្រើ ES6 template strings (ពន្យល់នៅពេលក្រោយ)។

```js
// ប្រកាសអថេរផ្សេងៗនៃប្រភេទទិន្នន័យផ្សេងៗគ្នា
let space = " ";
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age = 250;

let fullName = firstName + space + lastName;
let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5 string addition

console.log(personInfoOne);
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```

#### Long Literal Strings

string អាចជាតួអក្សរតែមួយ ឬកថាខណ្ឌ ឬទំព័រមួយ។ ប្រសិនបើប្រវែងខ្សែនេះធំពេក វាមិនសាកសមនឹងបន្ទាត់តែមួយទេ។ យើង​អាច​ប្រើ​តួអក្សរ backslash (\\) នៅ​ខាង​ចុង​បន្ទាត់​នីមួយៗ ដើម្បី​បង្ហាញ​ថា​​អក្សរ​នឹង​បន្ត​នៅ​ជួរ​បន្ទាប់។
**ឧទាហរណ៍:**

```js
const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

console.log(paragraph);
```

#### Escape Sequences in Strings

នៅក្នុង JavaScript និងភាសាសរសេរកម្មវិធីផ្សេងទៀតការដាក់ \ នៅពីមុកតួអក្សរមួយចំនួនគឺជា escape sequence។ តោះ​មើល​ escape characters ដែលទូទៅបំផុត៖

- \n: បន្ទាត់ថ្មី
- \t: tab មានន័យថា ៨ ចន្លោះ
- \\\\: backslash
- \\': Single quote (')
- \\": Double quote (")

```js
console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); // ការបំបែកបន្ទាត់
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");
console.log("This is a backslash  symbol (\\)"); // ដើម្បីសរសេរ backslash
console.log('In every programming language it starts with "Hello, World!"');
console.log("In every programming language it starts with 'Hello, World!'");
console.log("The saying 'Seeing is Believing' isn't correct in 2020");
```

លទ្ធផលនៅក្នុង console

```sh
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### Template Literals (Strings គំរូ)

ដើម្បីបង្កើត string គំរូ យើងប្រើសញ្ញា back-ticks។ យើងអាចបញ្ចូលទិន្នន័យជាកន្សោមនៅខាងក្នុង string អក្សរគំរូ។ ដើម្បីចាក់បញ្ចូលទិន្នន័យ យើងភ្ជាប់កន្សោមជាមួយនឹងដង្កៀបអង្កាញ់ ({}) ដែលនាំមុខដោយសញ្ញា $ ។ សូមមើល syntax ខាងក្រោម។

```js
//Syntax
`String literal text``String literal text ${expression}`;
```

**ឧទាហរណ៍: 1**

```js
console.log(`The sum of 2 and 3 is 5`); // ការសរសេរទិន្នន័យ
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // ការបញ្ចូលទិន្នន័យ
```

**ឧទាហរណ៍:2**

```js
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age = 250;
let fullName = firstName + " " + lastName;

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - វិធីសាស្ត្របញ្ចូល string
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

ដោយប្រើ string គំរូ ឬវិធីសាស្ត្របញ្ចូល string យើងអាចបន្ថែមកន្សោម ដែលអាចជាតម្លៃ ឬប្រតិបត្តិការមួយចំនួន (ការប្រៀបធៀប, ប្រតិបត្តិការនព្វន្ធ, និង ប្រតិបត្តិការ ternary)។

```js
let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`);
```

```sh
2 is greater than 3: false
```

### String Methods

អ្វីគ្រប់យ៉ាងនៅក្នុង JavaScript គឺជា object។ string គឺជាប្រភេទទិន្នន័យបឋមដែលមានន័យថាយើងមិនអាចកែប្រែវាបានទេនៅពេលដែលវាត្រូវបានបង្កើត។ string object មាន string method ជាច្រើនដែលអាចជួយយើងឱ្យធ្វើការជាមួយ string។

1. _length_: string _length_ method ឲ​ចំនួន​តួអក្សរ​ក្នុង​ខ្សែអក្សរ​ដែល​រួម​បញ្ចូលទាំង​ចន្លោះ​ទទេ។

**ឧទាហរណ៍:**

```js
let js = "JavaScript";
console.log(js.length); // 10
let firstName = "Asabeneh";
console.log(firstName.length); // 8
```

2. _ការចាប់យកតួអក្សរក្នុង string_៖ យើងអាចចូលប្រើតួអក្សរនីមួយៗក្នុង string ដោយប្រើ index របស់វា។ ក្នុង​ការ​សរសេរ​កម្មវិធី ការ​រាប់​ចាប់​ផ្ដើម​ពី 0។ index ​ទី​មួយ​នៃ​ string គឺ​សូន្យ ហើយ index ​ចុង​ក្រោយ​គឺ​ជា​ប្រវែង​នៃ​ខ្សែ​អក្សរ​ដក​មួយ។

![Accessing sting by index](../images/string_indexes.png)

ឥឡូវ​នេះយើងចូលប្រើតួអក្សរផ្សេងគ្នានៅក្នុង string 'JavaScript' ។

```js
let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t
```

3. _toUpperCase()_: method នេះផ្លាស់ប្តូរ string ទៅជាអក្សរធំ។

```js
let string = "JavaScript";

console.log(string.toUpperCase()); // JAVASCRIPT

let firstName = "Asabeneh";

console.log(firstName.toUpperCase()); // ASABENEH

let country = "Finland";

console.log(country.toUpperCase()); // FINLAND
```

4. _toLowerCase()_: method នេះផ្លាស់ប្តូរ string ទៅជាអក្សរតូច។

```js
let string = "JavasCript";

console.log(string.toLowerCase()); // javascript

let firstName = "Asabeneh";

console.log(firstName.toLowerCase()); // asabeneh

let country = "Finland";

console.log(country.toLowerCase()); // finland
```

5. _substr()_: វាត្រូវការ arguments ពីរ គឺ index ចាប់ផ្តើម និងចំនួនតួអក្សរដើម្បីកាត់។

```js
let string = "JavaScript";
console.log(string.substr(4, 6)); // Script

let country = "Finland";
console.log(country.substr(3, 4)); // land
```

6. _substring()_: វាត្រូវការ arugments ពីរ គឺ index ចាប់ផ្តើម និង index បញ្ឈប់ ប៉ុន្តែវាមិនរួមបញ្ចូលតួអក្សរនៅ index បញ្ឈប់នោះទេ។

```js
let string = "JavaScript";

console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

let country = "Finland";

console.log(country.substring(0, 3)); // Fin
console.log(country.substring(3, 7)); // land
console.log(country.substring(3)); // land
```

7. _split()_: method នេះបំបែកបំបែក string នៅកន្លែងជាក់លាក់មួយ។

```js
let string = "30 Days Of JavaScript";

console.log(string.split()); // ប្តូរទៅជា array -> ["30 ថ្ងៃនៃ JavaScript"]
console.log(string.split(" ")); // បំបែកទៅជា array នៅចន្លោះ -> ["30", "ថ្ងៃ", "នៃ", "JavaScript"]

let firstName = "Asabeneh";

console.log(firstName.split()); // ប្តូរទៅជា array -> ["Asabeneh"]
console.log(firstName.split("")); // បំបែកទៅជា array នៅអក្សរនីមួយៗ -> ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // បំបែកទៅជា array នៅសញ្ញាក្បៀស -> ["ហ្វាំងឡង់", "ស៊ុយអែត", "ន័រវេស", "ដាណឺម៉ាក", "និងអ៊ីស្លង់"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. _trim()_: ដក​ដកឃ្លា​នៅ​ខាង​ដើម​ឬ​ចុង​ string ​ចេញ។

```js
let string = "   30 Days Of JavaScript   ";

console.log(string);
console.log(string.trim(" "));

let firstName = " Asabeneh ";

console.log(firstName);
console.log(firstName.trim()); // នៅ​តែ​ដក​ដក​ឃ្លា​នៅ​ខាង​ដើម និង​ចុង​ string
```

```sh
   30 Days Of JavasCript
30 Days Of JavasCript
  Asabeneh
Asabeneh
```

9. _includes()_: វា​យក​ argument substring ហើយ​វា​ពិនិត្យ​មើល​ថា​តើ​មាន argument substring នៅក្នុង​ string ហ្នឹង​ឬ​អត់។ _includes()_ ឲវិញជា boolean។ ប្រសិនបើខ្សែអក្សររងមាននៅក្នុងខ្សែអក្សរ វាឲពិត បើមិនដូច្នេះទេ វាឲមិនពិត។

```js
let string = "30 Days Of JavaScript";

console.log(string.includes("Days")); // true
console.log(string.includes("days")); // false - it is case sensitive!
console.log(string.includes("Script")); // true
console.log(string.includes("script")); // false
console.log(string.includes("java")); // false
console.log(string.includes("Java")); // true

let country = "Finland";

console.log(country.includes("fin")); // false
console.log(country.includes("Fin")); // true
console.log(country.includes("land")); // true
console.log(country.includes("Land")); // false
```

10. _replace()_: យកជាប៉ារ៉ាម៉ែត្រនៃ substring ចាស់ និង substring ថ្មី។

```js
string.replace(oldsubstring, newsubstring);
```

```js
let string = "30 Days Of JavaScript";
console.log(string.replace("JavaScript", "Python")); // 30 Days Of Python

let country = "Finland";
console.log(country.replace("Fin", "Noman")); // Nomanland
```

11. _charAt()_: យក index ហើយវាឲតម្លៃនៅ index នោះ។

```js
string.charAt(index);
```

```js
let string = "30 Days Of JavaScript";
console.log(string.charAt(0)); // 3

let lastIndex = string.length - 1;
console.log(string.charAt(lastIndex)); // t
```

12. _charCodeAt()_: យក index ហើយវាត្រឡប់ char code (លេខ ASCII) នៃតម្លៃនៅ index នោះ។

```js
string.charCodeAt(index);
```

```js
let string = "30 Days Of JavaScript";
console.log(string.charCodeAt(3)); // លេខ ASCII របស់ D គឺ 68

let lastIndex = string.length - 1;
console.log(string.charCodeAt(lastIndex)); // លេខ ASCII របស់ T គឺ 116
```

13. _indexOf()_: យក​ substring ​មួយ ហើយ​ប្រសិនបើ​ substring ​មាន​ក្នុង​ string វា​ឲទីតាំង​ទីមួយ​នៃ​ substring ប្រសិនបើ​មិនមាន វា​នឹង​ឲ -1

```js
string.indexOf(substring);
```

```js
let string = "30 Days Of JavaScript";

console.log(string.indexOf("D")); // 3
console.log(string.indexOf("Days")); // 3
console.log(string.indexOf("days")); // -1
console.log(string.indexOf("a")); // 4
console.log(string.indexOf("JavaScript")); // 11
console.log(string.indexOf("Script")); //15
console.log(string.indexOf("script")); // -1
```

14. _lastIndexOf()_: យក substring ​មួយ ហើយ​ប្រសិនបើ substring ​មាន​ក្នុង​ខ្សែ​អក្សរ វា​ត្រឡប់​ទីតាំង​ចុងក្រោយ​នៃ​ substring ប្រសិនបើ​វា​មិនមាន វា​ឲ​ -1

```js
//syntax
string.lastIndexOf(substring);
```

```js
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(string.lastIndexOf("love")); // 67
console.log(string.lastIndexOf("you")); // 63
console.log(string.lastIndexOf("JavaScript")); // 38
```

15. _concat()_: វាយក substring ជាច្រើន ហើយភ្ជាប់ពួកវា។

```js
string.concat(substring, substring, substring);
```

```js
let string = "30";
console.log(string.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

let country = "Fin";
console.log(country.concat("land")); // Finland
```

16. វា​យក​ substring ​ជា​ argument ហើយ​វា​ពិនិត្យ​មើល​ថាតើ​ string នេះ​ចាប់ផ្តើម​ដោយ​ substring ដែល​បាន​បញ្ជាក់​នោះ​ឬ​អត់។ វាត្រឡប់ boolean (ពិតឬមិនពិត) ។

```js
//syntax
string.startsWith(substring);
```

```js
let string = "Love is the best to in this world";

console.log(string.startsWith("Love")); // true
console.log(string.startsWith("love")); // false
console.log(string.startsWith("world")); // false

let country = "Finland";

console.log(country.startsWith("Fin")); // true
console.log(country.startsWith("fin")); // false
console.log(country.startsWith("land")); //  false
```

17. _endsWith_: វា​យក substring ​ជា argument ហើយ​វា​ពិនិត្យ​មើល​ថា​តើ​ string ​បញ្ចប់​ដោយ​ substring ​ដែល​បាន​បញ្ជាក់​នោះ​ឬ​អត់។ វាឲ boolean (ពិតឬមិនពិត) ។

```js
string.endsWith(substring);
```

```js
let string = "Love is the most powerful feeling in the world";

console.log(string.endsWith("world")); // true
console.log(string.endsWith("love")); // false
console.log(string.endsWith("in the world")); // true

let country = "Finland";

console.log(country.endsWith("land")); // true
console.log(country.endsWith("fin")); // false
console.log(country.endsWith("Fin")); //  false
```

18. _search_: វា​យក substring ​ជា​ argument ហើយ​វា​ឲ​ index ​នៃតម្លៃដែលត្រូវដំបូង​។ តម្លៃស្វែងរកអាចជា string ឬ regular expression។

```js
string.search(substring);
```

```js
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.search("love")); // 2
console.log(string.search(/javascript/gi)); // 7
```

19. _match_:
    វាយក substring ឬ regular expression ជា argument ហើយវាឲ array មួយ ប្រសិនបើមានការផ្គូផ្គង ហើយបើមិនមាន វាឲ null។ យើងមកមើលពីរបៀបរបស់ regular expression។ វាចាប់ផ្តើមដោយ/ និងបញ្ចប់ដោយ/

```js
let string = "love";
let patternOne = /love/; // ដោយគ្មាន flag ណាមួយ
let patternTwo = /love/gi; // g-មានន័យថាស្វែងរកក្នុងអត្ថបទទាំងមូល i មានន័យថា case insensitive
```

Syntax សម្រាប់ការផ្គូផ្គង

```js
// syntax
string.match(substring);
```

```js
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.match("love"));
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi;
console.log(string.match(pattern)); // ["love", "love", "love"]
```

ឥឡូវ​នេះយើងនឹងទាញយកលេខចេញពីអត្ថបទដោយប្រើ regular expression។ នេះមិនមែនជាផ្នែក regular expression ទេ កុំភ័យ! យើងនឹងបង្ហាញពី​ regular expression នៅពេលក្រោយ។

```js
let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;

// ជាមួួយ d នេះវាជំនួសឲ digit ជាជាងអក្សរ d
// + មានន័យថាលេខមួយខ្ទង់ ឬច្រើនខ្ទង់
// ប្រសិនបើមាន g បន្ទាប់ពីនោះមានន័យថាជាសកល និងស្វែងរកគ្រប់ទីកន្លែង។

console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]
```

20. _repeat()_: វាយកលេខជា argument ហើយវាឲទម្រង់ដដែលៗរបស់ string នោះ។

```js
string.repeat(n);
```

```js
let string = "love";
console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
```

## ការពិនិត្យមើលនិងផ្លាស់ប្តូរប្រភេទទិន្នន័យ

### ការពិនិត្យមើលប្រភេទទិន្នន័យ

ដើម្បីពិនិត្យមើលប្រភេទទិន្នន័យនៃ variable ណាមួយ យើងប្រើ method _typeof_ ។

**Example:**

```js
// ប្រភេទទិន្នន័យ javascript ផ្សេងៗគ្នា
// ប្រកាសប្រភេទទិន្នន័យផ្សេងៗគ្នា

let firstName = "Asabeneh"; // string
let lastName = "Yetayeh"; // string
let country = "Finland"; // string
let city = "Helsinki"; // string
let age = 250; // number វាមិនមែនជាអាយុពិតរបស់ខ្ញុំទេ កុំគិតអំពីវា។
let job; // undefined, ដោយសារតែតម្លៃមិនត្រូវបានកំណត់

console.log(typeof "Asabeneh"); // string
console.log(typeof firstName); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

### ការផ្លាស់ប្តូរប្រភេទទិន្នន័យ (Casting)

- Casting៖ ការបំប្លែងប្រភេទទិន្នន័យមួយទៅប្រភេទទិន្នន័យមួយទៀត។ យើងប្រើ _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
   នៅពេលយើងធ្វើប្រតិបត្តិការនព្វន្ធលើ string numbers យើងគួរតែបំប្លែងវាជាចំនួនគត់ ឬចំនួនទសភាគ ប្រសិនបើវាមិនបង្កើត error។

#### String ទៅចំនួនគត់

យើងអាចបំប្លែង string number ទៅជាលេខមួយ។ លេខណាមួយនៅក្នុង quote គឺជា string number ឧទាហរណ៍នៃ string number៖ '10', '5' ។ល។
យើង​អាច​បំប្លែង string ទៅ​ជា​លេខ​បាន​ដោយ​ប្រើ​វិធី​ដូច​ខាង​ក្រោម៖

- parseInt()
- Number()
- Plus sign(+)

```js
let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10
```

```js
let num = "10";
let numInt = Number(num);

console.log(numInt); // 10
```

```js
let num = "10";
let numInt = +num;

console.log(numInt); // 10
```

#### String ទៅចំនួនទសភាគ

យើងអាចបំប្លែង string float ទៅជាចំនួនទសភាគ។ ចំនួនទសភាគណាមួយនៅក្នុង quote គឺជា string float ឧទាហរណ៍នៃ string float៖ '9.81', '3.14', '1.44' ។ល។
យើងអាចបំប្លែង string float ទៅជាលេខបានដោយប្រើវិធីខាងក្រោម៖

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = "9.81";
let numFloat = parseFloat(num);

console.log(numFloat); // 9.81
```

```js
let num = "9.81";
let numFloat = Number(num);

console.log(numFloat); // 9.81
```

```js
let num = "9.81";
let numFloat = +num;

console.log(numFloat); // 9.81
```

#### ចំនួនទសភាគទៅចំនួនគត់

យើងអាចបំប្លែងលេខទសភាគទៅជាចំនួនគត់។
យើងប្រើវិធីខាងក្រោមដើម្បីបំប្លែងចំនួនទសភាគទៅជាចំនួនគត់៖

- parseInt()

```js
let num = 9.81;
let numInt = parseInt(num);

console.log(numInt); // 9
```

🌕 អ្នកពិតជាអស្ចារ្យមែន។ អ្នកទើបតែបានបញ្ចប់ challenge នេះនៅថ្ងៃទី 2 ហើយអ្នកកំពុងឈានទៅមុខពីរជំហានក្នុងដំណើរឆ្ពោះទៅរកភាពអស្ចារ្យ។ ឥឡូវធ្វើលំហាត់ខ្លះសម្រាប់ខួរក្បាល និងសាច់ដុំរបស់អ្នក។

## 💻 លំហាត់សម្រាប់ថ្ងៃទីពីរ

### លំហាត់៖ កម្រិត ១


1. ប្រកាស variable ដែលមានឈ្មោះ challenge ហើយកំណត់វាទៅជាតម្លៃ **'30 Days Of JavaScript'**។
2. បង្ហាញ string នៅលើ browser console ដោយប្រើ **console.log()**
3. បង្ហាញ **ប្រវែង** នៃ string នៅលើ browser console ដោយប្រើ _console.log()_
4. ផ្លាស់ប្តូរតួអក្សរ string ទាំងអស់ទៅជាអក្សរធំដោយប្រើវិធី **toUpperCase()**
5. ផ្លាស់ប្តូរតួអក្សរ string ទាំងអស់ទៅជាអក្សរតូចដោយប្រើវិធីសាស្រ្ត **toLowerCase()**
6. កាត់ (slice) ចេញពាក្យដំបូងនៃខ្សែអក្សរដោយប្រើ **substr()** ឬ **substring()** method
7. កាត់ឃ្លាថា Days_Of_JavaScript ចេញពី 30 Days Of JavaScript ។
8. ពិនិត្យមើលថាតើ string មានពាក្យ **script** ដោយប្រើ **includes()** method
9. បំបែក string ទៅជា array ដោយប្រើវិធីសាស្ត្រ split()
10. បំបែក string 30 Days Of JavaScript នៅចន្លោះដោយប្រើវិធីសាស្ត្រ **split()**
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **split** string ហ្នឹងនៅសញ្ញាក្បៀស ហើយប្តូរវាទៅជា array
12. ផ្លាស់ប្តូរ 30 Days Of JavaScript ទៅ 30 Days of Python ដោយប្រើវិធីសាស្រ្ត **replace()** ។
13. តើអ្វីជាតួអក្សរនៅ index 15 ក្នុងខ្សែអក្សរ '30 Days Of JavaScript'? ប្រើវិធីសាស្រ្ត **charAt()**។
14. តើអ្វីទៅជាកូដតួអក្សររបស់ J ក្នុងខ្សែអក្សរ '30 Days Of JavaScript' ដោយប្រើ **charCodeAt()**
15. ប្រើ **indexOf** ដើម្បីកំណត់ទីតាំងនៃការលេចឡើងដំបូងនៃ **a** ក្នុង 30 Days Of JavaScript
16. ប្រើ **lastIndexOf** ដើម្បីកំណត់ទីតាំងនៃលេខឡើងចុងក្រោយនៃ **a** ក្នុង 30 Days Of JavaScript ។
17. ប្រើ **indexOf** ដើម្បីស្វែងរកទីតាំងនៃការកើតឡើងដំបូងនៃពាក្យ **because** ក្នុងប្រយោគខាងក្រោម៖**'You cannot end a sentence with because because because is a conjunction'**
18. ប្រើ **lastIndexOf** ដើម្បីស្វែងរកទីតាំងនៃការកើតឡើងចុងក្រោយនៃពាក្យ **because** ក្នុងប្រយោគខាងក្រោម៖**'You cannot end a sentence with because because because is a conjunction'**
19. ប្រើ **search** ដើម្បីស្វែងរកទីតាំងនៃការកើតឡើងដំបូងនៃពាក្យ **because** នៅក្នុងប្រយោគខាងក្រោម:**'You cannot end a sentence with because because because is a conjunction'**
20. ប្រើ **trim()** ដើម្បីលុបដកឃ្លាណាមួយនៅខាងដើម និងចុងបញ្ចប់នៃ string។ ឧទាហរណ៍ ' 30 Days Of JavaScript '។
21. ប្រើវិធីសាស្រ្ត **startsWith()** ជាមួយ string _30 Days Of JavaScript_ ហើយធ្វើឱ្យលទ្ធផលពិត
22. ប្រើវិធីសាស្រ្ត **endsWith()** ជាមួយ string _30 Days Of JavaScript_ ហើយធ្វើឱ្យលទ្ធផលពិត
23. ប្រើវិធីសាស្រ្ត **match()** ដើម្បីស្វែងរក **a** ទាំងអស់ក្នុង 30 Days Of JavaScript
24. ប្រើ **concat()** ដើម្បីបញ្ចូល '30 Days of' និង 'JavaScript' ទៅ string តែមួយ '30 Days Of JavaScript'
25. ប្រើវិធីសាស្រ្ត **repeat()** ដើម្បបង្ហាញ 30 Days Of JavaScript 2 ដង

### លំហាត់៖ កម្រិត ២

1. ដោយប្រើ console.log() បង្ហាញសេចក្តីថ្លែងខាងក្រោម៖

   ```sh
   The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
   ```

2. ដោយប្រើ console.log() បង្ហាញសម្រង់ខាងក្រោមដោយ Mother Teresa:

   ```sh
   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
   ```

3. ពិនិត្យមើលថា typeof នៃ '10' គឺពិតជាស្មើនឹង 10។ ប្រសិនបើមិនធ្វើឱ្យវាស្មើគ្នាពិតប្រាកដ។
4. ពិនិត្យមើលថាតើ parseFloat('9.8') ស្មើនឹង 10 ប្រសិនបើមិនធ្វើឱ្យវាពិតជាស្មើនឹង 10 ។
5. ពិនិត្យមើលថាតើ 'on' ត្រូវបានរកឃើញនៅក្នុង python និង jargon ដែរឬទេ
6. _I hope this course is not full of jargon_. ពិនិត្យមើលថាតើ _jargon_ ស្ថិតនៅក្នុងប្រយោគដែររឺទេ
7. បង្កើតចំនួនចៃដន្យពី 0 ដល់ 100។
8. បង្កើតលេខចៃដន្យរពី 50 ដល់ 100 រួមបញ្ចូល។
8. បង្កើតលេខចៃដន្យរពី 0 ដល់ 255 រួមបញ្ចូល។
10. ចូលតួអក្សរ string 'JavaScript' ដោយប្រើលេខចៃដន្យ។
11. ប្រើ console.log() ហើយ escape character ដើម្បីបោះពុម្ពលំនាំខាងក្រោម។

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. ប្រើ **substr** ដើម្បីកាត់ឃ្លា **because because because**  ចេញពីប្រយោគខាងក្រោម៖**'You cannot end a sentence with because because because is a conjunction'**

### លំហាត់៖ កម្រិត ៣

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' រាប់ចំនួនពាក្យ **love** ក្នុងប្រយោគនេះ។
2. ប្រើ **match()** ដើម្បីរាប់ចំនួន **because** ទាំងអស់ក្នុងប្រយោគខាងក្រោម:**'You cannot end a sentence with because because because is a conjunction'**
3. សម្អាតអត្ថបទខាងក្រោម ហើយស្វែងរកពាក្យញឹកញាប់បំផុត (ប្រើ replace និង regular expression)។

   ```js
   const sentence =
     "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
   ```

4. គណនាប្រាក់ចំណូលប្រចាំឆ្នាំសរុបរបស់បុគ្គលដោយស្រង់លេខចេញពីអត្ថបទខាងក្រោម។ 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

🎉 អបអរសាទរ ! 🎉

[<< ថ្ងៃទី 1](../readMe.md) | [ថ្ងៃទី 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)
