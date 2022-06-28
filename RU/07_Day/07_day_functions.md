<div align="center">
  <h1> 30 Days Of JavaScript: Функции</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Автор:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> Январь, 2020</small>
  </sub>
</div>

[<< День 6](../06_Day_Loops/06_day_loops.md) | [День 8 >>](../08_Day_Objects/08_day_objects.md)

![30 Days Of JavaScript](../images/banners/day_1_7.png)

- [📔 День 7](#-День-7)
	- [Функции](#функции)
		- [Объявление функции](#объявление-функции)
		- [Функции без параметров и возвращаемого значения](#функции-без-параметров-и-возвращаемого-значения)
		- [Функции возвращающие значение](#функции-возвращающие-значение)
		- [Функции с параметрами](#функции-с-параметрами)
		- [Функции с двумя параметрами](#функции-с-двумя-параметрами)
		- [Функции с множеством параметров](#функции-с-множеством-параметров)
		- [Функции с неограниченным числом параметров](#функции-с-неограниченным-числом-параметров)
			- [Неограниченное число параметров в обычных функциях](#неограниченное-число-параметров-в-обычных-функциях)
			- [Неограниченное число параметров в стрелочных функциях](#неограниченное-число-параметров-в-стрелочных-функциях)
		- [Анонимные функции](#anonymous-function)
		- [Функциональные выражения](#expression-function)
		- [Самовызываемая функции](#self-invoking-functions)
		- [Стрелочные функции](#arrow-function)
		- [Функции с параметрами по умолчанию](#function-with-default-parameters)
		- [Объявление функции против стрелочной функции](#function-declaration-versus-arrow-function)
	- [💻 Упражнения](#-exercises)
		- [Упражнения: Уровень 1](#exercises-level-1)
		- [Упражнения: Уровень 2](#exercises-level-2)
		- [Упражнения: Уровень 3](#exercises-level-3)

# 📔 День 7

## Функции

До сих пор мы видели много встроенных функций JavaScript. В этом разделе мы сосредоточимся на пользовательских функциях. Что такое функция? Прежде чем мы начнем создавать функции, давайте разберемся, что такое функция и зачем она нам нужна?

Функция, это многократно используемый блок кода или программных операторов, предназначенная для выполнения определенной задачи.
Функция объявляется ключевым словом `function`, за которым следует имя функции, за которым следуют круглые скобки (). Скобки могут принимать параметры. Если функция принимает параметры, она будет вызываться с аргументами. Функция также может принимать параметр по умолчанию. Чтобы сохранить данные в функцию, функция должна возвращать определенные типы данных. Чтобы получить значение, мы вызываем функцию.
Функции делают код:

- Чистым и простым в чтении
- Переиспользуемым
- Простым для тестирования

Функции могут быть объявлены или созданы разными путями:

- _Объявление функции_
- _Функциональное выражение_
- _Анонимные функции_
- _Стрелочные функции_

### Объявление функции

Давайте посмотрим, как объявлять функции, и как их вызывать.

```js
//Объявление функции без параметров
function functionName() {
  // Здесь будет код функции
}
functionName() // Вызов функции по ее имени вместе со скобками
```

### Функции без параметров и возвращаемого значения

Функции могут быть объявлены без параметров

**Пример:**

```js
// Функция без параметров, функция которая возводит число в квадрат
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// Функция без параметров
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // Функция должна быть вызвана по своему имени, для того что бы она могла выполниться
```

```js
  function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName() // Вызов функции
```

### Функции возвращающие значение

Функции также могут возвращать значения. Если функция ничего не возвращает, то значением функции будет `undefined`. Давайте перепишем функции выше, с возвращаемым значением. С этого момента мы возвращаем значение из функции.

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

### Функции с параметрами

В функцию мы можем передать различные типы данных (числа, строки, логические значения, объекты, функции) в качестве параметров.

```js
// Функция с одним параметром
function functionName(parm1) {
  // Здесь будет код функции
}

functionName(parm1) // Во время вызова требуется один аргумент

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // Следует вызывать с одним аргументом

function square(number) {
  return number * number
}

console.log(square(10))
```

### Функции с двумя параметрами

```js
// Функция с двумя параметрами
function functionName(parm1, parm2) {
  // Здесь будет код функции
}

functionName(parm1, parm2) // Во время вызова потребуется два аргумента
// Функция без параметров не принимает входные данные, поэтому давайте сделаем функцию с параметрами
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}

sumTwoNumbers(10, 20) // Вызов функции
// Если функция не возвращает данные, они не сохранятся, поэтому она должна возвращать данные

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

### Функции с множеством параметров

```js
// Функция с множеством параметров
function functionName(parm1, parm2, parm3,...){
  // Здесь будет код функции
}
functionName(parm1,parm2,parm3,...) // Во время вызова, потребуется три аргумента

// Функция принимает массив как параметр, и суммирует числа в массиве
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];

// Вызов функции
console.log(sumArrayValues(numbers));

const areaOfCircle = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
}

console.log(areaOfCircle(10))
```

### Функции с неограниченным числом параметров

Иногда мы не знаем, как много аргументов собирается ввести пользователь. Следовательно, мы должны знать как писать функции, которые могут принимать неограниченное число аргументов. То, как мы это делаем, имеет существенную разницу между обычной функцией и стрелочной функцией. Давайте посмотрим примеры с обычной функцией, так и со стрелочной функцией.

#### Неограниченное число параметров в обычных функциях

Объявление функции предоставляет массив аргументов в области действия функции, такой как объект. К любой вещи, которую мы передали в качестве аргумента функции, можно получить доступ из объекта `arguments` внутри функции. Давайте посмотрим пример

 ```js
// Давайте получим доступ к объекту arguments
​
function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

```js
// Объявление функции
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

#### Неограниченное число параметров в стрелочных функциях

Стрелочная функция не имеет объекта аргументов области действия функции. Чтобы реализовать функцию, которая принимает неограниченное количество аргументов в стрелочной функции, мы используем оператор `spread`, за которым следует любое имя параметра. Любая вещь, которую мы передали в качестве аргумента функции, может быть доступна как массив в стрелочной. Давайте посмотрим пример

```js
// Давайте получим доступ к объекту с аргументами
​
const sumAllNums = (...args) => {
  // console.log(arguments), Объект arguments не найден в стрелочной функции
  // Вместо этого, мы используем параметр, который следует после оператора spread (...)
  console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]
```

```js
// Объявление функции
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

Безымянные или анонимные функции

```js
const anonymousFun = function() {
  console.log(
    'Я анонимная функция, и мое значение хранится в anonymousFun'
  )
}
```

### Expression Function

Функциональные выражения являются анонимными функциями. Затем мы создаем функцию без имени и присваиваем ее переменной. Для того чтобы вернуть значение из функции, мы должны вызвать переменную. Посмотрите на пример ниже.

```js

// Функциональное выражение
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
```

### Self Invoking Functions

Самовызывающиеся функции - это анонимные функции, которые не нужно вызывать для возвращения значения

```js
(function(n) {
  console.log(n * n)
})(2) // 4, но вместо того, чтобы просто выводить в консоль, если мы хотим вернуть и сохранить данные, мы делаем, как показано ниже

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

### Arrow Function

Стрелочные функции - это альтернатива в написании функции, однако объявление функции и стрелочные функции имеют некоторые незнчительные отличия.

Стрелочная функция использует стрелку, за место ключевого слова `function`. Давайте посмотрим на оба варианта, объявление функции и стрелочную функцию

```js
// Это то как мы объявляем обычную функцию
// Давайте поменяем эту функцию на срелочную
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// Если у нас только одна строка в блоке кода, это можно записать следующим образом, где явное возвращение
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

const countries = ['Финляндия', 'Швеция', 'Норвегия', 'Дания', 'Исландия']
console.log(changeToUpperCase(countries))

// ["ФИНЛЯНДИЯ", "ШВЕЦИЯ", "НОРВЕГИЯ", "ДАНИЯ", "ИСЛАНДИЯ"]
```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

Функция выше, имеет только оператор `return`, поэтому мы можем явно вернуть его следующим образом.

```js
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Function with default parameters

Иногда мы передаем значения по умолчанию параметрам, когда мы вызываем функцию, если мы не передаем аргумент, будет использоваться значение по умолчанию. И объявление функции, и стрелочная функция могут иметь значения по умолчанию.

```js
// Синтаксис
// Объявление функции
function functionName(param = value) {
  // Код функции
}

// Вызов функции
functionName()
functionName(arg)
```

**Пример:**

```js
function greetings(name = 'Пётр') {
  let message = `${name}, добро пожаловать в 30 Days Of JavaScript!`
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
console.log(generateFullName('Дэвид', 'Смит'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Возраст: ', calculateAge(1819))
```

```js
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // значение должно быть сначало изменено на строку 
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 гравитация на поверхности Земли
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // гравитация на поверхности Луны
```

Давайте посмотрим как мы напишем функцию выше, как стрелочную функцию

```js
// Синтаксис
// Объявление функции
const functionName = (param = value) => {
  // Код функции
}

// Вызов функции
functionName()
functionName(arg)
```

**Пример:**

```js
const greetings = (name = 'Пётр') => {
  let message = name + ', добро пожаловать в 30 Days Of JavaScript!'
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
console.log(generateFullName('Дэвид', 'Смит'))
```

```js

const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
```

```js
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 гравитация на поверхности Земли
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // гравитация на поверхности Луны
```

### Function declaration versus Arrow function

Это будет рассмотрено в другом разделе.

🌕 Ты восходящая звезда, теперь ты знаешь функции. Теперь вы супер заряжены мощью функций. Вы только что выполнили задания седьмого дня и сделали 7 шагов на пути к величию. Теперь сделайте несколько упражнений для мозга и мышц.

## 💻 Exercises

### Exercises: Level 1

1. Объявите функцию _fullName_ и выведите в консоль свое имя.
2. Объявите функцию _fullName_ которая принимает имя и фамилию как параметры и возвращает ваши имя и фамилию.
3. Объявите функцию _addNumbers_ которая принимает два параметра и возвращает их сумму.
4. Площадь прямоугольника расчитывается следующим образом: _площадь = длина x ширина_. Напишите функцию, которая сделает вычисления _areaOfRectangle_.
5. Периметр прямоугольника расчитывается следующим образом: _периметр = 2 x (длина + ширина)_. Напишите функцию, которая сделает вычисления _perimeterOfRectangle_.
6. Объем прямоугольной призмы расчитывается следующим образом: _объем = длина x ширина x высота_. Напишите функцию, которая сделает вычисления _volumeOfRectPrism_.
7. Площадь круга расчитывается следующим образом: _площадь = π x r x r_. Напишите функцию, которая сделает вычисления _areaOfCircle_
8. Длина окружности расчитывается следующим образом: _длина окружности = 2πr_. Напишите функцию, которая сделает вычисления _circumOfCircle_
9. Плотность вещества расчитывается следующим образом: _плотность = масса/объем_. Напишите функцию, которая сделает вычисления _density_.

10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more

14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### Exercises: Level 2

1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

1. Объявите функцию с именем _printArray_. Которая принимает массив как параметр и выводит в консоль каждое значение из массива.
1. Напишите функцию с именем _showDateTime_ которая показывает время в таком формате: 08/01/2020 04:08 используя объект Date.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

1. Объявите функцию с именем _swapValues_. Эта функция меняет значение x на y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

1. Объявите функцию с именем _reverseArray_. Которая принимает массив как параметр, и возвращает перевернутый массив, не используя метод `reverse`

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

1. Write a function which takes any number of arguments and return the sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. Writ a function which generates a _randomUserIp_.
1. Write a function which generates a _randomMacAddress_
1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercises: Level 3

1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

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

1. Напишите функцию с именем _rgbColorGenerator_ которая генерирует RGB цвета.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

1. Напишите функцию **_arrayOfHexaColors_** которая возвращает любое число шестнадцатеричных цветов в массиве
1. Напишите функцию **_arrayOfRgbColors_** которая возвращает любое число цветов RGB в массиве
1. Напишите функцию **_convertHexaToRgb_** которая преобразует шестнадцатеричный цвет в RGB, и возвращает цвет RGB.
1. Напишите функцию **_convertRgbToHexa_** которая преобразует RGB в шестнадцатеричный цвет и возвращает его.
1. Напишите функцию **_generateColors_** которая может сгенерировать любое значение цвета в шестнадцатеричном или RGB значении.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
1. Call your function _sum_, it takes any number of arguments and it returns the sum.
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

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

1. Write a function called _isPrime_, which checks if a number is prime number.
1. Write a functions which checks if all items are unique in the array.
1. Write a function which checks if all the items of the array are the same data type.
1. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

🎉 ПОЗДРАВЛЯЕМ ! 🎉

[<< День 6](../06_Day/06_day_loops.md) | [День 8 >>](../08_Day_Objects/08_day_objects.md)