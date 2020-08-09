<div align="center">
  <h1> 30 Days Of JavaScript</h1>
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

[<< День 1](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/README.md) | [День 3 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/03_Day/03_booleans_operators_date.md)

![Thirty Days Of JavaScript](../images/banners/day_1_2.png)

- [📔 Day 2](#%f0%9f%93%94-day-2)
  - [Типы данных](#%d0%a2%d0%b8%d0%bf%d1%8b-%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85)
    - [Примитивные типы данных](#%d0%9f%d1%80%d0%b8%d0%bc%d0%b8%d1%82%d0%b8%d0%b2%d0%bd%d1%8b%d0%b5-%d1%82%d0%b8%d0%bf%d1%8b-%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85)
      - [Пример](#%d0%9f%d1%80%d0%b8%d0%bc%d0%b5%d1%80)
    - [Непримитивные типы данных](#%d0%9d%d0%b5%d0%bf%d1%80%d0%b8%d0%bc%d0%b8%d1%82%d0%b8%d0%b2%d0%bd%d1%8b%d0%b5-%d1%82%d0%b8%d0%bf%d1%8b-%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85)
  - [Числа](#%d0%a7%d0%b8%d1%81%d0%bb%d0%b0)
    - [Объявление числовых типов данных](#%d0%9e%d0%b1%d1%8a%d1%8f%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d1%87%d0%b8%d1%81%d0%bb%d0%be%d0%b2%d1%8b%d1%85-%d1%82%d0%b8%d0%bf%d0%be%d0%b2-%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85)
    - [Математический объект](#%d0%9c%d0%b0%d1%82%d0%b5%d0%bc%d0%b0%d1%82%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b8%d0%b9-%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82)
      - [Генератор случайных чисел](#%d0%93%d0%b5%d0%bd%d0%b5%d1%80%d0%b0%d1%82%d0%be%d1%80-%d1%81%d0%bb%d1%83%d1%87%d0%b0%d0%b9%d0%bd%d1%8b%d1%85-%d1%87%d0%b8%d1%81%d0%b5%d0%bb)
  - [Строки](#%d0%a1%d1%82%d1%80%d0%be%d0%ba%d0%b8)
    - [Конкатенация строк](#%d0%9a%d0%be%d0%bd%d0%ba%d0%b0%d1%82%d0%b5%d0%bd%d0%b0%d1%86%d0%b8%d1%8f-%d1%81%d1%82%d1%80%d0%be%d0%ba)
      - [Конкатенация с использованием оператора сложения](#%d0%9a%d0%be%d0%bd%d0%ba%d0%b0%d1%82%d0%b5%d0%bd%d0%b0%d1%86%d0%b8%d1%8f-%d1%81-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5%d0%bc-%d0%be%d0%bf%d0%b5%d1%80%d0%b0%d1%82%d0%be%d1%80%d0%b0-%d1%81%d0%bb%d0%be%d0%b6%d0%b5%d0%bd%d0%b8%d1%8f)
      - [Длинные буквенные строки](#%d0%94%d0%bb%d0%b8%d0%bd%d0%bd%d1%8b%d0%b5-%d0%b1%d1%83%d0%ba%d0%b2%d0%b5%d0%bd%d0%bd%d1%8b%d0%b5-%d1%81%d1%82%d1%80%d0%be%d0%ba%d0%b8)
      - [Перенос последовательности в строке](#%d0%9f%d0%b5%d1%80%d0%b5%d0%bd%d0%be%d1%81-%d0%bf%d0%be%d1%81%d0%bb%d0%b5%d0%b4%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d0%be%d1%81%d1%82%d0%b8-%d0%b2-%d1%81%d1%82%d1%80%d0%be%d0%ba%d0%b5)
      - [Шаблонные литералы (Шаблонные строки)](#%d0%a8%d0%b0%d0%b1%d0%bb%d0%be%d0%bd%d0%bd%d1%8b%d0%b5-%d0%bb%d0%b8%d1%82%d0%b5%d1%80%d0%b0%d0%bb%d1%8b-%d0%a8%d0%b0%d0%b1%d0%bb%d0%be%d0%bd%d0%bd%d1%8b%d0%b5-%d1%81%d1%82%d1%80%d0%be%d0%ba%d0%b8)
    - [Строковые Методы](#%d0%a1%d1%82%d1%80%d0%be%d0%ba%d0%be%d0%b2%d1%8b%d0%b5-%d0%9c%d0%b5%d1%82%d0%be%d0%b4%d1%8b)
  - [Проверка типов данных и приведение](#%d0%9f%d1%80%d0%be%d0%b2%d0%b5%d1%80%d0%ba%d0%b0-%d1%82%d0%b8%d0%bf%d0%be%d0%b2-%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85-%d0%b8-%d0%bf%d1%80%d0%b8%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d0%b5)
    - [Проверка типов данных](#%d0%9f%d1%80%d0%be%d0%b2%d0%b5%d1%80%d0%ba%d0%b0-%d1%82%d0%b8%d0%bf%d0%be%d0%b2-%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85)
    - [Изменение типа данных (Casting)](#%d0%98%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d1%82%d0%b8%d0%bf%d0%b0-%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d1%85-casting)
      - [Строка в число](#%d0%a1%d1%82%d1%80%d0%be%d0%ba%d0%b0-%d0%b2-%d1%87%d0%b8%d1%81%d0%bb%d0%be)
      - [Строка в число с плавающей запятой](#%d0%a1%d1%82%d1%80%d0%be%d0%ba%d0%b0-%d0%b2-%d1%87%d0%b8%d1%81%d0%bb%d0%be-%d1%81-%d0%bf%d0%bb%d0%b0%d0%b2%d0%b0%d1%8e%d1%89%d0%b5%d0%b9-%d0%b7%d0%b0%d0%bf%d1%8f%d1%82%d0%be%d0%b9)
      - [Числа с плавающей точкой в целые числа.](#%d0%a7%d0%b8%d1%81%d0%bb%d0%b0-%d1%81-%d0%bf%d0%bb%d0%b0%d0%b2%d0%b0%d1%8e%d1%89%d0%b5%d0%b9-%d1%82%d0%be%d1%87%d0%ba%d0%be%d0%b9-%d0%b2-%d1%86%d0%b5%d0%bb%d1%8b%d0%b5-%d1%87%d0%b8%d1%81%d0%bb%d0%b0)
  - [💻 День 2: Упражнения](#%f0%9f%92%bb-%d0%94%d0%b5%d0%bd%d1%8c-2-%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f)
    - [Упражнение: Уровень 1](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d0%a3%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-1)
    - [Упражнение: уровень 2](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d1%83%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-2)
    - [Упражнения: уровень 3](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d1%83%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-3)

# 📔 Day 2

## Типы данных

В предыдущем разделе мы немного упомянули о типах данных. Данные или значения имеют типы данных. Типы данных описывают характеристики данных. Типы данных можно разделить на два вида

1. Примитивные типы данных
2. Непримитивные типы данных (ссылки на объекты)

### Примитивные типы данных

Примитивные типы данных в JavaScript включают в себя:

1. Числа (Numbers) - Целые числа, числа с плавающей точкой
2. Строки (Strings) - Любые данные в одинарных или двойных кавычках
3. Булевые (boolean) - true или false значения
4. Null - пустое значение или нет значения
5. Undefined - объявленная переменная без значения

Непримитивные типы данных в JavaScript включают в себя:

1. Объекты
2. Функции
3. Массивы

Теперь давайте посмотрим, что именно означают примитивные и не примитивные типы данных.

_Примитивные_ типы данных являются неизменяемыми типами данных. Как только примитивный тип данных создан, мы не можем его изменить.

#### Пример

```js
let word = "JavaScript";
```

Если мы попытаемся изменить строку, хранящуюся в переменной _word_, JavaScript вызовет ошибку. Любой тип данных с одинарными, двойными или обратными кавычками является строковым типом данных.

```js
word[0] = "Y";
```

Это выражение не изменяет строку, хранящуюся в переменной _word_. Таким образом, мы можем сказать, что строки не являются изменяемыми или неизменяемыми.
Примитивные типы данных сравниваются по их значениям. Давайте сравним различные значения данных. Смотрите пример ниже:

```js
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false
```

### Непримитивные типы данных

_Непримитивные_ типы данных являются изменяемыми. Мы можем изменить значение непримитивных типов данных после их создания.
Давайте посмотрим, создав массив. Массив - это список значений данных в квадратных скобках. Массивы могут содержать одинаковые или разные типы данных. На значения массива ссылается их индекс. В массиве JavaScript индекс начинается с нуля. Т.е. первый элемент массива находится с нулевым индексом, второй элемент с индексом один и третий элемент с индексом два и т.д.

```js
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]
```

Как вы можете видеть, массив, в котором непримитивный тип данных является изменяемым. Непримитивные типы данных нельзя сравнивать по значению. Даже если два непримитивных типа данных имеют одинаковые свойства и значения, они не являются строго равными.

```js
let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland"
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland"
};

console.log(userOne == userTwo); // false
```

Основное правило, мы не сравниваем непримитивные типы данных. Не сравнивайте массив, функцию или объект.
Непримитивные значения называются ссылочными типами, поскольку они сравниваются по значению, а не по значению. Два объекта строго равны, если они ссылаются на один и тот же базовый объект.

```js
let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers); // true

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland"
};

let userTwo = userOne;

console.log(userOne == userTwo); // true
```

Если вам трудно понять разницу между примитивными типами данных и не примитивными типами данных, вы не единственный.
Успокойтесь и просто перейдите к следующему разделу и попробуйте вернуться через некоторое время. Теперь давайте начнем типы данных по типу номера.

## Числа

Числа представляют собой целые и десятичные значения, которые могут выполнять все арифметические операции.
Давайте посмотрим некоторые примеры чисел.

### Объявление числовых типов данных

```js
let age = 35;
const gravity = 9.81; //мы используем const для неизменных значений, гравитационная постоянная в  m/s2
let mass = 72; // масса в килограммах
const PI = 3.14; // ПИ геометрическая постоянная

//Больше примеров
const boilingPoint = 100; // температура в oC, температура кипения воды которой постоянна
const bodyTemp = 37; // oC средняя температура тела человека, которая является постоянной

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
```

### Математический объект

В JavaScript Math Object предоставляет множество методов для работы с числами.

```js
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Округление до ближайшего числа
// если выше .5 вверх, если меньше 0.5 вниз

console.log(Math.round(PI)); // 3, чтобы округлить значения до ближайшего числа

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 округление вниз

console.log(Math.ceil(PI)); // 4 округление вверх

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, возвращает минимальное значение

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, возвращает максимальное значение

const randNum = Math.random(); // создает случайное число от 0 до 0,999999
console.log(randNum);

// Давайте создадим случайное число от 0 до 10

const num = Math.floor(Math.random() * 11); // создает случайное число от 0 до 10
console.log(num);

// Абсолютное значение
console.log(Math.abs(-10)); //10

// Квадратный корень
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); //1.4142135623730951

// Мощность
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Логарифм
// Возвращает натуральный логарифм основания E из x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Тригонометрия
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

#### Генератор случайных чисел

JavaScript Math Object имеет генератор номеров метода `random()`, который генерирует числа от 0 до 0.999999999...

```js
let randomNum = Math.random(); // генерирует от 0 до 0,999
```

Теперь давайте посмотрим, как мы можем использовать метод `random()` для генерации случайного числа от 0 до 10 включительно.

```js
let randomNum = Math.random(); // генерирует от 0 до 0,999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // это дает: мин 0 и макс 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // это дает от 0 до 10
```

## Строки

Строки - это тексты, которые заключены в **_одинарную_** или **_двойную_** кавычку. Чтобы объявить строку, нам нужно имя переменной, оператор присваивания, значение в одинарных кавычках, двойные кавычки или обратные кавычки.

Давайте посмотрим несколько примеров строки:

```js
let space = " "; // Пусто - пробел
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
```

### Конкатенация строк

Соединение двух или более строк вместе называется конкатенацией.

```js
// Объявление разных переменных разных типов данных
let space = " ";
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
```

```js
let fullName = firstName + space + lastName; // конкатенация, объединение двух строк.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

Мы можем объединять строки разными способами.

#### Конкатенация с использованием оператора сложения

Конкатенация с использованием оператора сложения - старый способ. Этот способ объединения утомителен и подвержен ошибкам. Полезно знать, как объединить таким способом, но я настоятельно рекомендую использовать второй способ.

```js
// Объявление разных переменных разных типов данных
let space = " ";
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age = 250;
let fullName = firstName + space + lastName;

let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5

console.log(personInfoOne);
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```

#### Длинные буквенные строки

Строка может быть отдельным символом, абзацем или страницей. Если длина строки слишком велика, она не помещается в одну строку. Мы можем использовать символ обратной косой черты (\\) в конце каждой строки, чтобы указать, что строка будет продолжена на следующей строке.

**Пример:**

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

#### Перенос последовательности в строке

В JavaScript и других языках программирования, после некоторых символов есть перенос - последовательности. Давайте посмотрим на наиболее распространенные escape-символы:

- `\n` - Новая строка
- `\t` - Таб означает (8 пробелов)
- `\\` - Обратная косая черта
- `\'` - Одинарные кавычки (')
- `\"` - Двойные кавычки (")

```js
console.log(
  "I hope every one is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); // line break
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");
console.log("This is a back slash  symbol (\\)"); // To write a back slash
console.log('In every programming language it starts with "Hello, World!"');
console.log("In every programming language it starts with 'Hello, World!'");
console.log("The saying 'Seeing is Believing' is't correct in 2020");
```

#### Шаблонные литералы (Шаблонные строки)

Чтобы создать строку шаблона, мы используем два обратных ключа. Мы можем вставить данные как выражение внутри строки шаблона. Чтобы ввести данные, мы заключаем выражение в фигурную скобку (`{}`), за которой следует знак `$`. Смотрите синтаксис ниже.

```js
// Синтаксис
`String literal text ${expression}`;
```

**Пример: 1**

```js
console.log(`The sum of 2 and 3 is 5`); // статическая запись данных
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // ввод данных динамически
```

**Example:2**

```js
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age = 250;
let fullName = firstName + " " + lastName;

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - Метод строковой интерполяции
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

Используя шаблон строки или метод интерполяции строки, мы можем добавить выражение, которое может быть значением или некоторыми операциями (сравнение, арифметические операции, троичные операции).

```js
let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`);
```

```sh
2 is greater than 3: false
```

### Строковые Методы

Все в JavaScript это объект. Строка - это примитивный тип данных, который означает, что мы не можем изменить его после создания. У строкового объекта есть много строковых методов. Существуют разные строковые методы, которые могут помочь нам работать со строками.

1. _length_: Метод строки _length_ возвращает количество символов в строке, включая пустое пространство.
   **Пример:**

   ```js
   let js = "JavaScript";
   console.log(js.length); // 10
   let firstName = "Asabeneh";
   console.log(firstName.length); // 8
   ```

2. _Доступ к символам в строке_: мы можем получить доступ к каждому символу в строке, используя его индекс. В программировании отсчет начинается с 0. Первый индекс строки равен нулю, а последний индекс равен одному минус длина строки.

   ![Accessing sting by index](../images/string_indexes.png)

   Давайте получим доступ к различным символам в строке «JavaScript».

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

3. `toUpperCase()`: этот метод изменяет строку на заглавные буквы.

   ```js
   let string = "JavaScript";

   console.log(string.toUpperCase()); // JAVASCRIPT

   let firstName = "Asabeneh";

   console.log(firstName.toUpperCase()); // ASABENEH

   let country = "Finland";

   console.log(country.toUpperCase()); // FINLAND
   ```

4. `toLowerCase()`: этот метод изменяет строку на заглавные буквы

   ```js
   let string = "JavasCript";

   console.log(string.toLowerCase()); // javascript

   let firstName = "Asabeneh";

   console.log(firstName.toLowerCase()); // asabeneh

   let country = "Finland";

   console.log(country.toLowerCase()); // finland
   ```

5. `substr()`:Требуется два аргумента: начальный индекс и количество символов для нарезки.

   ```js
   let string = "JavaScript";
   console.log(string.substr(4, 6)); // Script

   let country = "Finland";
   console.log(country.substr(3, 4)); // land
   ```

6. `substring()`: Он принимает два аргумента: начальный индекс и индекс остановки, но он не включает индекс остановки.

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

7. `split()`: Метод `split()` разделяет строку в указанном месте.

   ```js
   let string = "30 Days Of JavaScript";

   console.log(string.split()); // ["30 Days Of JavaScript"]
   console.log(string.split(" ")); // ["30", "Days", "Of", "JavaScript"]

   let firstName = "Asabeneh";

   console.log(firstName.split()); // ["Asabeneh"]
   console.log(firstName.split("")); // ["A", "s", "a", "b", "e", "n", "e", "h"]

   let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

   console.log(countries.split(",")); // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
   console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
   ```

8. `trim()`: Удаляет завершающий пробел в начале или конце строки.

   ```js
   let string = "   30 Days Of JavaScript   ";

   console.log(string);
   console.log(string.trim(" "));

   let firstName = " Asabeneh ";

   console.log(firstName);
   console.log(firstName.trim());
   ```

   ```sh
     30 Days Of JavasCript
   30 Days Of JavasCript
     Asabeneh
   Asabeneh
   ```

9. `includes()`: принимает аргумент подстроки и проверяет, существует ли аргумент подстроки в строке. `includes()` возвращает логическое значение. Он проверяет, существует ли подстрока в строке, и возвращает true, если она существует, и false, если она не существует.

   ```js
   let string = "30 Days Of JavaScript";

   console.log(string.includes("Days")); // true
   console.log(string.includes("days")); // false
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

10. `replace()`: принимает к параметру старую подстроку и новую подстроку.

    ```js
    string.replace(oldsubstring, newsubstring);
    ```

    ```js
    let string = "30 Days Of JavaScript";
    console.log(string.replace("JavaScript", "Python")); // 30 Days Of Python

    let country = "Finland";
    console.log(country.replace("Fin", "Noman")); // Nomanland
    ```

11. `charAt()`: принимает индекс и возвращает значение по этому индексу

    ```js
    string.charAt(index);
    ```

    ```js
    let string = "30 Days Of JavaScript";
    console.log(string.charAt(0)); // 3

    let lastIndex = string.length - 1;
    console.log(string.charAt(lastIndex)); // t
    ```

12. `charCodeAt()`: Принимает индекс и возвращает код символа (номер ASCII) значения по этому индексу

    ```js
    string.charCodeAt(index);
    ```

    ```js
    let string = "30 Days Of JavaScript";
    console.log(string.charCodeAt(3)); // D ASCII number is 51

    let lastIndex = string.length - 1;
    console.log(string.charCodeAt(lastIndex)); // t ASCII is 116
    ```

13. `indexOf()`: Принимает подстроку, и если подстрока существует в строке, она возвращает первую позицию подстроки, если не существует, она возвращает -1

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

14. `lastIndexOf()`: Принимает подстроку, и если подстрока существует в строке, она возвращает последнюю позицию подстроки, если она не существует, она возвращает -1

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

15. `concat()`: он принимает много подстрок и создает конкатенацию.

    ```js
    string.concat(substring, substring, substring);
    ```

    ```js
    let string = "30";
    console.log(string.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

    let country = "Fin";
    console.log(country.concat("land")); // Finland
    ```

16. `startsWith`: он принимает подстроку в качестве аргумента и проверяет, начинается ли строка с указанной подстроки. Возвращает логическое значение (true или false).

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

17. `endsWith`: он принимает подстроку в качестве аргумента и проверяет, начинается ли строка с указанной подстроки. Возвращает логическое значение (true или false).

    ```js
    string.endsWith(substring);
    ```

    ```js
    let string = "Love is the best to in this world";

    console.log(string.endsWith("world")); // true
    console.log(string.endsWith("love")); // false
    console.log(string.endsWith("in this world")); // true

    let country = "Finland";

    console.log(country.endsWith("land")); // true
    console.log(country.endsWith("fin")); // false
    console.log(country.endsWith("Fin")); //  false
    ```

18. `search`: он принимает подстроку в качестве аргумента и возвращает индекс первого совпадения.

    ```js
    string.search(substring);
    ```

    ```js
    let string =
      "I love JavaScript. If you do not love JavaScript what else can you love.";
    console.log(string.search("love")); // 2
    ```

19. `match`: он принимает подстроку или шаблон регулярного выражения в качестве аргумента и возвращает массив, если есть совпадение, если нет, то возвращает ноль. Давайте посмотрим, как выглядит шаблон регулярного выражения. Он начинается с / знака и заканчивается / знаком.

    ```js
    let string = "love";
    let patternOne = /love/; //без какого-либо флага
    let patternTwo = /love/gi; // g-означает поиск по всему тексту, i - без учета регистра
    ```

    Match syntax

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

    Давайте извлечем числа из текста, используя регулярное выражение. Это не раздел регулярных выражений, не паникуйте, мы рассмотрим регулярные выражения в другом разделе.

    ```js
    let txt =
      "In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge";
    let regEx = /\d+/;

    // d с перенос-символом означает, что d не является нормальным d, вместо этого действует цифра
    // + означает одно или несколько цифр,
    // если после этого есть g, значит глобальный, ищите везде.

    console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
    console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]
    ```

20. `repeat()`: он принимает числовой аргумент и возвращает повторную версию строки.

    ```js
    string.repeat(n);
    ```

    ```js
    let string = "love";
    console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
    ```

## Проверка типов данных и приведение

### Проверка типов данных

- Проверка типов данных: чтобы проверить тип данных определенного типа данных, мы используем `typeof` и также меняем один тип данных на другой.

**Пример:**

```js
// Различные типы данных JavaScript
// Давайте объявим разные типы данных

let firstName = "Asabeneh"; // string
let lastName = "Yetayeh"; // string
let country = "Finland"; // string
let city = "Helsinki"; // string
let age = 250; // number, это не мой настоящий возраст, не переживай
let job; // undefined, потому что значение не было присвоено

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

### Изменение типа данных (Casting)

- Приведение: преобразование одного типа данных в другой тип данных. Мы используем _parseInt()_, _parseFloat()_, _Number()_, _+sign_, _str()_. Когда мы выполняем арифметические операции, строковые числа должны быть сначала преобразованы в целое число или число с плавающей запятой, если нет, это возвращает ошибку.

#### Строка в число

Мы можем преобразовать номер строки в число. Любое число внутри кавычки является строковым числом. Пример номера строки: «10», «5» и т. Д.
Мы можем преобразовать строку в число, используя следующие методы:

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

#### Строка в число с плавающей запятой

Мы можем преобразовать число с плавающей запятой в число с плавающей запятой. Любое число с плавающей запятой внутри кавычки является строковым числом с плавающей запятой. Пример числа с плавающей запятой: «9,81», «3,14», «1,44» и т. Д.
Мы можем преобразовать строку с плавающей точкой в число, используя следующие методы:

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

console.log(numInt); // 9.81
```

#### Числа с плавающей точкой в целые числа.

Мы можем преобразовать числа с плавающей точкой в целые числа.
Мы используем следующий метод для преобразования float в int:

- parseInt()

```js
let num = 9.81;
let numInt = parseInt(num);

console.log(numInt); // 9
```

🌕 Ты обалденный. Вы только что завершили 2-й день испытаний, и вы в двух шагах от своего пути к успеху. Теперь сделайте несколько упражнений для вашего мозга и ваших мышц.

## 💻 День 2: Упражнения

### Упражнение: Уровень 1

1. Объявите вызов имени переменной и присвойте ему начальное значение **«30 дней JavaScript»**.
2. Напечатайте строку в консоли браузера, используя `console.log()`
3. Напечатайте **length** строки в консоли браузера, используя `console.log()`
4. Измените всю строку на заглавные буквы, используя метод `toUpperCase()`
5. Измените всю строку на строчные буквы, используя метод `toLowerCase()`
6. Вырежьте (нарежьте) первое слово строки, используя метод `substr()` или `substring()`
7. Вырежьте фразу _Days Of JavaScript_ из _30 Days Of JavaScript_.
8. Проверьте, содержит ли строка слово **Script**, используя метод `includes()`
9. Разбейте **строку** на **массив**, используя метод `split()`
10. Разбить строку 30 Days Of JavaScript в пространстве с помощью метода `split()`
11. «Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon» **разбивают** строку на запятую и заменяют ее на массив.
12. Измените 30 Days Of JavaScript на 30 Days Of Python, используя метод `replace()`.
13. Что такое символ в индексе 15 в строке «30 Days Of JavaScript», используйте метод `charAt()`.
14. Что такое код символа J в строке «30 Days Of JavaScript» с использованием `charCodeAt()`
15. Используйте `indexOf`, чтобы определить позицию первого вхождения за 30 Days Of JavaScript
16. Используйте `lastIndexOf`, чтобы определить позицию последнего вхождения в 30 Days Of JavaScript.
17. Используйте `indexOf`, чтобы найти позицию первого вхождения слова **потому что** в следующем предложении: **«Вы не можете закончить предложение, потому что, потому что, потому что это соединение»**
18. Используйте `lastIndexOf`, чтобы найти позицию последнего вхождения слова **потому что** в следующем предложении: **«Вы не можете закончить предложение, потому что, потому что потому что это соединение»**
19. Используйте `search`, чтобы найти позицию первого вхождения слова **потому что** в следующем предложении: **«Вы не можете закончить предложение, потому что, потому что потому что это соединение»**
20. Используйте `trim()`, чтобы удалить, если в начале и конце строки есть конечные пробелы. Например, «30 Days Of JavaScript».
21. Используйте метод `launchWith()` со строкой _30 Days Of JavaScript_, чтобы сделать результат верным
22. Используйте метод `setsWith()` со строкой _30 Days Of JavaScript_, чтобы сделать результат верным
23. Используйте метод `match()`, чтобы найти все за 30 Days Of JavaScript
24. Используйте `concat()` и объедините «30 Days» и «JavaScript» в одну строку «30 Days Of JavaScript»
25. Используйте метод `repeat()`, чтобы напечатать 30 Days Of JavaScript 2 раза

### Упражнение: уровень 2

1. Используя `console.log()`, выведите следующее утверждение.

   ```sh
   The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
   ```

2. Используя `console.log()` распечатайте следующую цитату Матери Терезы.

   ```sh
   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
   ```

3. Проверьте, точно ли `typeof` '10' равен 10. Если нет, сделайте его точно равным.
4. Убедитесь, что `parseFloat('9.8')` равен 10, если не равен точно 10.
5. Проверьте, найдено ли 'on' как в Python, так и в жаргоне
6. Я надеюсь, что этот курс не полон жаргона. Проверьте, находится ли _jargon_ в предложении.
7. Сгенерируйте случайное число от 0 до 100 включительно.
8. Генерация случайного числа от 50 до 100 включительно.
9. Сгенерируйте случайное число от 0 до 255 включительно.
10. Получите доступ к символам строки «JavaScript», используя случайное число.
11. Используйте `console.log()` и управляющие символы для печати следующего шаблона.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. Используйте `substr`, чтобы вырезать фразу **потому что потому что** в следующем предложении: **'Вы не можете закончить предложение, потому что потому что потому что это соединение'**

### Упражнения: уровень 3

1. «Любовь - лучшая вещь в этом мире. Некоторые нашли свою любовь, а некоторые все еще ищут свою любовь. Подсчитайте количество слов любви в этом предложении.
2. Используйте `match()`, чтобы сосчитать число все потому, что в следующем предложении: **«Вы не можете закончить предложение, потому что, потому что, потому что это соединение»**
3. Очистите следующий текст и найдите наиболее часто встречающееся слова (подсказка, используйте замену и регулярный экспресс).

   ```js
   const sentence =
     "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
   ```

4. Рассчитайте общий годовой доход человека, извлекая цифры из следующего текста. «Он зарабатывает 5000 евро с зарплаты в месяц, годовой бонус в 10000 евро, онлайн-курсы в 15000 евро в месяц».

🎉 ПОЗДРАВЛЯЕМ! 🎉

[<< День 1](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/readMe.md) | [День 3 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/03_Day/03_booleans_operators_date.md)
