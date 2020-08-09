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

[<< День 4](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/04_Day/04_day_conditionals.md) | [День 6 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/06_Day/06_day_loops.md)

![День 5](../images/banners/day_1_5.png)

- [📔 День 5](#%f0%9f%93%94-%d0%94%d0%b5%d0%bd%d1%8c-5)
  - [Массивы](#%d0%9c%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d1%8b)
    - [Как создать пустой массив](#%d0%9a%d0%b0%d0%ba-%d1%81%d0%be%d0%b7%d0%b4%d0%b0%d1%82%d1%8c-%d0%bf%d1%83%d1%81%d1%82%d0%be%d0%b9-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2)
    - [Как создать массив со значениями](#%d0%9a%d0%b0%d0%ba-%d1%81%d0%be%d0%b7%d0%b4%d0%b0%d1%82%d1%8c-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2-%d1%81%d0%be-%d0%b7%d0%bd%d0%b0%d1%87%d0%b5%d0%bd%d0%b8%d1%8f%d0%bc%d0%b8)
    - [Создание массива с использованием split](#%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0-%d1%81-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5%d0%bc-split)
    - [Доступ к элементам массива по индексу](#%d0%94%d0%be%d1%81%d1%82%d1%83%d0%bf-%d0%ba-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0%d0%bc-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0-%d0%bf%d0%be-%d0%b8%d0%bd%d0%b4%d0%b5%d0%ba%d1%81%d1%83)
    - [Изменение элемента массива](#%d0%98%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0)
    - [Методы манипулирования массивом](#%d0%9c%d0%b5%d1%82%d0%be%d0%b4%d1%8b-%d0%bc%d0%b0%d0%bd%d0%b8%d0%bf%d1%83%d0%bb%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%be%d0%bc)
      - [Конструктор массива](#%d0%9a%d0%be%d0%bd%d1%81%d1%82%d1%80%d1%83%d0%ba%d1%82%d0%be%d1%80-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0)
      - [Creating static values with fill](#creating-static-values-with-fill)
      - [Конкатенация массива с использованием concat](#%d0%9a%d0%be%d0%bd%d0%ba%d0%b0%d1%82%d0%b5%d0%bd%d0%b0%d1%86%d0%b8%d1%8f-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0-%d1%81-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5%d0%bc-concat)
      - [Получение длины массива](#%d0%9f%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b4%d0%bb%d0%b8%d0%bd%d1%8b-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0)
      - [Получение индекса элемента в массиве arr](#%d0%9f%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b8%d0%bd%d0%b4%d0%b5%d0%ba%d1%81%d0%b0-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0-%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b5-arr)
      - [Получение последнего индекса элемента в массиве](#%d0%9f%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bf%d0%be%d1%81%d0%bb%d0%b5%d0%b4%d0%bd%d0%b5%d0%b3%d0%be-%d0%b8%d0%bd%d0%b4%d0%b5%d0%ba%d1%81%d0%b0-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0-%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b5)
      - [Проверка массива](#%d0%9f%d1%80%d0%be%d0%b2%d0%b5%d1%80%d0%ba%d0%b0-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0)
      - [Преобразование массива в строку](#%d0%9f%d1%80%d0%b5%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0-%d0%b2-%d1%81%d1%82%d1%80%d0%be%d0%ba%d1%83)
      - [Объединение элементов массива](#%d0%9e%d0%b1%d1%8a%d0%b5%d0%b4%d0%b8%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%be%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0)
      - [Элементы массива срезов](#%d0%ad%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d1%8b-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b0-%d1%81%d1%80%d0%b5%d0%b7%d0%be%d0%b2)
      - [Метод сращивания в массиве](#%d0%9c%d0%b5%d1%82%d0%be%d0%b4-%d1%81%d1%80%d0%b0%d1%89%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b5)
      - [Добавление элемента в массив с помощью push](#%d0%94%d0%be%d0%b1%d0%b0%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0-%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2-%d1%81-%d0%bf%d0%be%d0%bc%d0%be%d1%89%d1%8c%d1%8e-push)
      - [Удаление конечного элемента с помощью pop](#%d0%a3%d0%b4%d0%b0%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%ba%d0%be%d0%bd%d0%b5%d1%87%d0%bd%d0%be%d0%b3%d0%be-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0-%d1%81-%d0%bf%d0%be%d0%bc%d0%be%d1%89%d1%8c%d1%8e-pop)
      - [Удаление элемента с самого начала](#%d0%a3%d0%b4%d0%b0%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0-%d1%81-%d1%81%d0%b0%d0%bc%d0%be%d0%b3%d0%be-%d0%bd%d0%b0%d1%87%d0%b0%d0%bb%d0%b0)
      - [Добавить элемент с начала](#%d0%94%d0%be%d0%b1%d0%b0%d0%b2%d0%b8%d1%82%d1%8c-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82-%d1%81-%d0%bd%d0%b0%d1%87%d0%b0%d0%bb%d0%b0)
      - [Обратный порядок массивов](#%d0%9e%d0%b1%d1%80%d0%b0%d1%82%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d1%80%d1%8f%d0%b4%d0%be%d0%ba-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%be%d0%b2)
      - [Сортировка элементов в массиве](#%d0%a1%d0%be%d1%80%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%ba%d0%b0-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%be%d0%b2-%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%b5)
    - [Массив массивов](#%d0%9c%d0%b0%d1%81%d1%81%d0%b8%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%be%d0%b2)
  - [💻 Упражнения](#%f0%9f%92%bb-%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f)
    - [Упражнения: Уровень 1](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%a3%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-1)
    - [Упражнения: Уровень 2](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%a3%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-2)
    - [Упражнения: Уровень 3](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%a3%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-3)

# 📔 День 5

## Массивы

В отличие от переменных, массив может хранить _несколько значений_. Каждое значение в массиве имеет _индекс_, а каждый индекс имеет _ссылку в адресе памяти_. Каждое значение может быть доступно с помощью их _индексов_. Индекс массива начинается с _0_, а последний элемент на единицу меньше длины массива.

Массив - это коллекция различных типов данных, которые упорядочены и изменяемы (модифицируемы). Массив позволяет хранить повторяющиеся элементы и различные типы данных. Массив может быть пустым или иметь разные значения типа данных.

### Как создать пустой массив

В JavaScript мы можем создать массив различными способами. Давайте по-разному создадим массив.
Очень часто используется _const_ вместо _let_ для объявления переменной массива. Если вы используете `const`, это означает, что вы больше не используете это имя.

- Используя конструктор Array

```js
// синтаксис
const arr = Array();
// or
// let arr = new Array()
console.log(arr); // []
```

- Используя квадратные скобки ([])

```js
// синтаксис
// Это наиболее рекомендуемый способ создания пустого списка
const arr = [];
console.log(arr);
```

### Как создать массив со значениями

Массив с начальными значениями. Мы используем свойство _length_, чтобы найти длину массива.

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // массив из чисел
const fruits = ["banana", "orange", "mango", "lemon"]; // массив из строк, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // массив из строк, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // массив из строк, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // массив из веб технологий
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // массив из строк, countries

// Распечатать массив и его длину

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);
```

```sh
Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
Number of numbers: 6
Fruits: ['banana', 'orange', 'mango', 'lemon']
Number of fruits: 4
Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
Number of vegetables: 5
Animal products: ['milk', 'meat', 'butter', 'yoghurt']
Number of animal products: 4
Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Number of web technologies: 7
Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
Number of countries: 5
```

- Массив может иметь элементы разных типов данных

```js
const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] }
]; // arr содержит разные типы данных
console.log(arr);
```

### Создание массива с использованием split

Как мы видели в предыдущем разделе, мы можем разбить строку в разных позициях и перейти в массив. Давайте посмотрим на примеры ниже.

```js
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// в тексте есть специальные символы, подумайте, как можно получить только слова
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

### Доступ к элементам массива по индексу

Мы получаем доступ к каждому элементу в массиве, используя их индекс. Индекс массива начинается с 0. На рисунке ниже четко показано начало индекса.

![arr index](../images/array_index.png)

```js
const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // мы получаем доступ к первому элементу, используя его индекс

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon
// Последний индекс можно рассчитать следующим образом

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon
```

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // набор чисел

console.log(numbers.length); // => узнать размер массива, который 6
console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]); //  -> 0
console.log(numbers[5]); //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]); // -> 100
```

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
]; // Список веб-технологий

console.log(webTechs); // все элементы массива
console.log(webTechs.length); // => узнать размер массива, который 7
console.log(webTechs[0]); //  -> HTML
console.log(webTechs[6]); //  -> MongoDB

let lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]); // -> MongoDB
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
]; // Список стран

console.log(countries); // -> все страны в масиве
console.log(countries[0]); //  -> Albania
console.log(countries[10]); //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]); //  -> Kenya
```

```js
const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar"
]; // Список продуктов питания

console.log(shoppingCart); // -> все shoppingCart в массиве
console.log(shoppingCart[0]); //  -> Milk
console.log(shoppingCart[7]); //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]); //  -> Sugar
```

### Изменение элемента массива

Массив является изменяемым (модифицируемым). После создания массива мы можем изменить содержимое элементов массива.

```js
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // изменение 1 на индекс 0 до 10
numbers[1] = 20; // изменение 2 на индекс 1 до 20

console.log(numbers); // [10, 20, 3, 4, 5]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

countries[0] = "Afghanistan"; // Замена Albania на Afghanistan
let lastIndex = countries.length - 1;
countries[lastIndex] = "Korea"; // Замена Kenya на Korea

console.log(countries);
```

```sh
["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```

### Методы манипулирования массивом

Существуют разные методы манипулирования массивом. Вот некоторые из доступных методов для работы с массивами: _Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

#### Конструктор массива

Массив: для создания массива.

```js
const arr = Array(); // создает пустой массив
console.log(arr);

const eightEmptyValues = Array(8); // он создает восемь пустых значений
console.log(eightEmptyValues); // [empty x 8]
```

#### Creating static values with fill

fill: Fill all the array elements with a static value

```js
const arr = Array(); // создает пустой массив
console.log(arr);

const eightXvalues = Array(8).fill("X"); // он создает восемь значений элементов, заполненных 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // он создает восемь значений элементов, заполненных '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4); // он создает 4 значения элемента, заполненные '4'
console.log(four4values); // [4, 4, 4, 4]
```

#### Конкатенация массива с использованием concat

`concat`: объединение двух массивов.

```js
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]
```

```js
const fruits = ["banana", "orange", "mango", "lemon"]; // массив из fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // массив из vegetables
const fruitsAndVegetables = fruits.concat(vegetables); // объединение двух массивов

console.log(fruitsAndVegetables);
```

```sh
["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
```

#### Получение длины массива

`length`: чтобы узнать размер массива

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // -> 5 это размер массива
```

#### Получение индекса элемента в массиве arr

`indexOf`: проверить, существует ли элемент в массиве. Если он существует, он возвращает индекс, иначе он возвращает -1.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5)); // -> 4
console.log(numbers.indexOf(0)); // -> -1
console.log(numbers.indexOf(1)); // -> 0
console.log(numbers.indexOf(6)); // -> -1
```

Проверьте элемент, если он существует в массиве.

- Проверьте элементы в списке

```js
// давайте проверим, существует ли banana в массиве

const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana"); // 0

if (index != -1) {
  console.log("Этот фрукт существует в массиве");
} else {
  console.log("Этот фрукт не существует в массиве");
}
// Этот фрукт существует в массиве

// мы можем использовать также тернарный оператор здесь
index != -1
  ? console.log("Этот фрукт существует в массиве")
  : console.log("Этот фрукт не существует в массиве");

// давайте проверим, существует ли в массиве avocado
let indexOfAvocado = fruits.indexOf("avocado"); // -1, если элемент не найден, индекс -1
if (indexOfAvocado != -1) {
  console.log("Этот фрукт существует в массиве");
} else {
  console.log("Этот фрукт не существует в массиве");
}
// Этот фрукт не существует в массиве
```

#### Получение последнего индекса элемента в массиве

`lastIndexOf`: отдает позицию последнего элемента в массиве. Если он существует, он возвращает индекс, иначе он возвращает -1.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6
console.log(numbers.lastIndexOf(4)); //  3
console.log(numbers.lastIndexOf(6)); // -1
```

`includes` в себя: чтобы проверить, существует ли элемент в массиве. Если он существует, он возвращает истину, иначе он возвращает ложь.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
]; // Список веб-технологий

console.log(webTechs.includes("Node")); // true
console.log(webTechs.includes("C")); // false
```

#### Проверка массива

`Array.isArray`: чтобы проверить, является ли тип данных массивом

```js
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true

const number = 100;
console.log(Array.isArray(number)); // false
```

#### Преобразование массива в строку

`toString`: преобразовывает массив в строку

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
```

#### Объединение элементов массива

`join`: используется для соединения элементов массива, аргумент, переданный в методе join, будет объединен в массив и возвращен в виде строки. По умолчанию он соединяется запятой, но мы можем передать другой строковый параметр, который можно объединить между элементами.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); //AsabenehMathiasEliasBrook
console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
]; // Список веб-технологий

console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

#### Элементы массива срезов

`slice`: вырезает несколько предметов из диапазона.
Требуется два параметра: начальная и конечная позиция. Это не включает в себя конечную позицию.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
```

#### Метод сращивания в массиве

`splice`: требуется три параметра: начальная позиция, количество удалений и количество добавляемых элементов.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.splice()); // -> удалить все предметы
```

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(0, 1)); // удалить первый элемент
```

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(3, 3, 6, 7, 8)); // -> [1, 2, 3, 6, 7, 8] // удаляет два элемента и заменяет три
```

#### Добавление элемента в массив с помощью push

`push`: добавление элемента в конце. Чтобы добавить элемент в конец существующего массива, мы используем метод `push`.

```js
// синтаксис
const arr = ["item1", "item2", "item3"];
arr.push("new item");

console.log(arr);
// ['item1', 'item2','item3','new item']
```

```js
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers); // -> [1,2,3,4,5,6]

numbers.pop(); // -> убрать один предмет с конца
console.log(numbers); // -> [1,2,3,4,5]
```

```js
let fruits = ["banana", "orange", "mango", "lemon"];
fruits.push("apple");

console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push("lime");
console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

#### Удаление конечного элемента с помощью pop

`pop`: удаление элемента в конце.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> убрать один предмет с конца

console.log(numbers); // -> [1,2,3,4]
```

#### Удаление элемента с самого начала

`shift`: удаление одного элемента массива в начале массива.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> удаление одного элемента с начала

console.log(numbers); // -> [2,3,4,5]
```

#### Добавить элемент с начала

`unshift`: добавление элемента массива в начало массива.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // -> добавить один элемент с начала

console.log(numbers); // -> [0,1,2,3,4,5]
```

#### Обратный порядок массивов

`reverse`: обратный порядок массива.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> обратный порядок массива

console.log(numbers); // [5, 4, 3, 2, 1]

numbers.reverse();
console.log(numbers); // [1, 2, 3, 4, 5]
```

#### Сортировка элементов в массиве

`sort`: расположить элементы массива в порядке возрастания. Сортировка принимает функцию обратного вызова, мы увидим, как мы используем сортировку с функцией обратного вызова в следующих разделах.

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // после сортировки мы можем изменить это
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Массив массивов

Массив может хранить различные типы данных, включая сам массив. Давайте создадим массив массивов

```js
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3]
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
```

🌕Вы прилежны, и вы уже многого достигли. Вы только что завершили 5-й день испытаний, и вы на 5 шагов приблизились к своему пути к успеху. Теперь сделайте несколько упражнений для вашего мозга и ваших мышц.

## 💻 Упражнения

### Упражнения: Уровень 1

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];
```

1. Объявите массив _empty_;
2. Объявить массив с более чем 5 количеством элементов
3. Найдите длину вашего массива
4. Получить первый элемент, средний элемент и последний элемент массива
5. Объявите массив с именем _mixedDataTypes_, поместите различные типы данных в ваш массив и найдите длину массива. Вы должны быть размером больше 5
6. Объявите имя переменной массива _itCompanies_ и присвойте начальные значения Facebook, Google, Microsoft, Apple, IBM, Oracle и Amazon
7. Напечатайте массив, используя `console.log()`
8. Распечатайте количество компаний в массиве
9. Распечатать первую компанию, среднюю и последнюю компанию
10. Распечатайте каждую компанию
11. Измените название каждой компании на заглавные по одному и напечатайте их
12. Распечатайте массив как предложение: Facebook, Google, Microsoft, Apple, IBM, Oracle и Amazon являются крупными ИТ-компаниями.
13. Проверьте, существует ли определенная компания в массиве _itCompanies_. Если она существует, верните компанию, иначе верните компанию, которая не найдена
14. Отфильтруйте компании, которые имеют более одного «o» без метода фильтра
15. Сортировать массив с помощью метода `sort()`
16. Обратный массив, используя метод `reverse()`
17. Вырежьте первые 3 компании из массива
18. Вырежьте последние 3 компании из массива
19. Вырежьте середину ИТ-компании или компаний из массива
20. Удалить первую IT-компанию из массива
21. Уберите среднюю ИТ-компанию или компании из массива
22. Удалить последнюю ИТ-компанию из массива
23. Удалить все ИТ-компании

### Упражнения: Уровень 2

1. Создайте отдельный файл _country.js_ и сохраните массив стран в этот файл, создайте отдельный файл _web_techs.js_ и сохраните массив _webTechs_ в этом файле. Доступ к обоим файлам в файле _main.js_
2. Сначала удалите все функции и измените строку на массив и посчитайте количество слов в массиве

   ```js
   let text =
     "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
   console.log(words);
   console.log(words.length);
   ```

   ```sh
   ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

   13
   ```

3. В следующей корзине добавить, удалить, изменить элементы

   ```js
   const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
   ```

   - добавьте 'Meat' в начале вашей корзины, если оно еще не добавлено
   - добавьте sugar в конец вашей корзины, если он еще не добавлен
   - Удалить 'Honey', если у вас аллергия на мед
   - изменить чай на 'Green Tea'

4. В массиве стран проверьте, существует ли в массиве 'Ethiopia', напечатайте 'Ethiopia'. Если его нет, добавьте в список стран.
5. В массиве webTechs проверьте, существует ли в массиве Sass, и если он существует, выведите «Sass - это препроцесс CSS». Если он не существует, добавьте Sass в массив и распечатайте массив.
6. Объедините следующие две переменные и сохраните их в переменной fullStack.

   ```js
   const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
   const backEnd = ["Node", "Express", "MongoDB"];

   console.log(fullStack);
   ```

   ```sh
   ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
   ```

### Упражнения: Уровень 3

1. Ниже приведен массив из 10 студентов в возрасте:

   ```js
   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
   ```

   - Отсортировать массив и найти минимальный и максимальный возраст
   - Найти средний возраст (один средний или два средних, разделенные на два)
   - Найти средний возраст (все предметы, поделенные на количество предметов)
   - Найти диапазон возрастов (максимум минус мин)
   - Сравните значения (минимум - среднее) и (максимум - среднее), используйте метод `abs()`

     1. Разделите первые десять стран из [массива стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

2. Найдите среднюю страну (страны) в [массиве стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
3. Разделите массив стран на два равных массива, если он четный. Если массив стран не является четным, еще одна страна для первой половины.

🎉 ПОЗДРАВЛЯЕМ ! 🎉

[<< День 4](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/04_Day/04_day_conditionals.md) | [День 6 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/06_Day/06_day_loops.md)
