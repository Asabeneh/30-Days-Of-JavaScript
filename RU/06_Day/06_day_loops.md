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

[<< День 5](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/05_Day/05_day_arrays.md) | [День 7 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/07_Day/07_day_functions.md)

![Day 5](../images/banners/day_1_6.png)

- [📔 День 6](#%f0%9f%93%94-%d0%94%d0%b5%d0%bd%d1%8c-6)
  - [Циклы](#%d0%a6%d0%b8%d0%ba%d0%bb%d1%8b)
    - [Цикл for](#%d0%a6%d0%b8%d0%ba%d0%bb-for)
    - [Цикл while](#%d0%a6%d0%b8%d0%ba%d0%bb-while)
    - [Цикл do while](#%d0%a6%d0%b8%d0%ba%d0%bb-do-while)
    - [Цикл for of](#%d0%a6%d0%b8%d0%ba%d0%bb-for-of)
    - [break](#break)
    - [continue](#continue)
  - [💻 Упражнения: День 6](#%f0%9f%92%bb-%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%94%d0%b5%d0%bd%d1%8c-6)
    - [Упражнения: Уровень 1](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%a3%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-1)
    - [Упражнения: Уровень 2](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%a3%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-2)
    - [Упражнения: Уровень 3](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b6%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%a3%d1%80%d0%be%d0%b2%d0%b5%d0%bd%d1%8c-3)

# 📔 День 6

## Циклы

Большинство действий, которые мы делаем в жизни, полны повторений. Представьте себе, если я попрошу вас распечатать от 0 до 100, используя `console.log()`. Для реализации этой простой задачи может потребоваться от 2 до 5 минут, такая утомительная и повторяющаяся задача может быть выполнена с помощью цикла.

В языках программирования для выполнения повторяющихся задач мы используем разные виды циклов. Следующие примеры представляют собой наиболее часто используемые циклы.

### Цикл for

```js
// Структура цикла for
for(initialization, condition, increment/decrement){
  // код идет здесь
}
```

```js
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// 0 1 2 3 4 5
```

```js
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
// 5  4  3  2  1  0
```

```js
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
//["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Добавление всех элементов в массив

```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // можно сократить: sum += numbers[i]
}

console.log(sum); // 15
```

Создание нового массива на основе существующего массива

```js
const numbers = [1, 2, 3, 4, 5];
const newArr = [];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  newArr.push(i * i);
}

console.log(newArr); // [1, 4, 9, 16, 25]
```

```js
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### Цикл while

```js
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
// 0 1 2 3 4 5
```

### Цикл do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);
// 0 1 2 3 4 5
```

### Цикл for of

Мы используем для цикла для массивов. Это очень удобный способ перебора массива, если мы не заинтересованы в индексе.

```js
for (const element of arr) {
  // код идет здесь
}
```

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num); //1 2 3 4 5
}

for (const num of numbers) {
  console.log(num * num); //1 4 9 16 25
}

// добавление всех чисел в массиве
let sum = 0;
for (const num of numbers) {
  sum += sum + num; // можно также сократить, как это: sum += num
}
console.log(sum); // 15

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase()); // HTML CSS JAVASCRIPT REACT NODE MONGODB
}

for (const tech of webTechs) {
  console.log(tech[0]); // получить только первую букву каждого элемента,  H C J R N M
}
```

```js
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

контент будет добавлен в ближайшее время

### continue

контент будет добавлен в ближайшее время

🌕 Ты такой смелый, что дошел так далеко. Теперь вы получили возможность автоматизировать повторяющиеся и утомительные задачи. Вы только что завершили 6-й день испытаний, и вы на 6 ступенек на пути к успеху. Теперь сделайте несколько упражнений для вашего мозга и ваших мышц.

## 💻 Упражнения: День 6

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

const mernStack = ["MongoDB", "Express", "React", "Node"];
```

1. Выполните итерацию от 0 до 10 с помощью цикла `for`, сделайте то же самое с помощью циклов `while` и `do while`
2. Итерируйте 10 к 0, используя цикл `for`, cделайте то же самое, используя цикл `while` и `do while`
3. Итерируйте от 0 до n, используя цикл `for`
4. Напишите цикл, который создает следующий шаблон, используя `console.log()`:

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Используйте цикл для печати следующего шаблона:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Используя цикл, напечатайте следующий шаблон

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. Используйте цикл для перебора от 0 до 100 и печати только четных чисел.
8. Используйте цикл для итерации от 0 до 100 и выведите только нечетные числа
9. Используйте цикл для итерации от 0 до 100 и печатайте только простые числа
10. Используйте цикл для итерации от 0 до 100, распечатайте и распечатайте сумму всех чисел.

    ```sh
    Сумма всех чисел 5050.
    ```

11. Используйте цикл `for` для итерации от 0 до 100 и выведите сумму всех четных чисел и сумму всех коэффициентов.

    ```sh
    The sum of all evens is 2550. And the sum of all odds is 2500.
    ```

12. Используйте цикл `for` для итерации от 0 до 100 и выведите сумму всех четных чисел и сумму всех шансов. Вывести сумму четных и сумму шансов в виде массива

    ```sh
      [2550, 2500]
    ```

13. Разработайте небольшой скрипт, который генерирует массив из 5 случайных чисел
14. Разработайте небольшой скрипт, который генерирует массив из 5 случайных чисел, числа должны быть уникальными
15. Разработайте небольшой скрипт, который генерирует случайный идентификатор из шести символов:

    ```sh
    5j2khz
    ```

### Упражнения: Уровень 2

1. Разработайте небольшой скрипт, который генерирует произвольное количество символов случайного идентификатора:

   ```sh
     fe3jo1gl124g
   ```

   ```sh
     xkqci4utda1lmbelpkm03rba
   ```

2. Напишите скрипт, который генерирует случайное шестнадцатеричное число

   ```sh
   '#ee33df'
   ```

3. Напишите скрипт, который генерирует случайное число цветов RGB.

   ```sh
   rgb(240,180,80)
   ```

4. Используя вышеуказанный массив стран, создайте следующий новый массив.

   ```sh
   ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
   ```

5. Используя приведенный выше массив стран, создайте массив для длины стран.

   ```sh
   [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
   ```

6. Используйте массив стран для создания следующего массива массивов:

   ```sh
     [
     ['Albania', 'ALB', 7],
     ['Bolivia', 'BOL', 7],
     ['Canada', 'CAN', 6],
     ['Denmark', 'DEN', 7],
     ['Ethiopia', 'ETH', 8],
     ['Finland', 'FIN', 7],
     ['Germany', 'GER', 7],
     ['Hungary', 'HUN', 7],
     ['Ireland', 'IRE', 7],
     ['Japan', 'JAP', 5],
     ['Kenya', 'KEN', 5]
   ]
   ```

7. В приведенном выше массиве стран проверьте, существует ли страна или страны, содержащие слово 'land'. Если есть страны, содержащие 'land', выведите ее в виде массива. Если нет страны, содержащей слово 'land', выведите «All these are countries without land».

   ```sh
   ['Finland', 'Iceland']
   ```

8. В приведенном выше массиве стран проверьте, существует ли страна или страны, заканчивающиеся на «ia». Если есть страны, оканчивающиеся на, распечатайте его, как массив. Если нет страны, содержащей слово «ai», выведите «Эти страны заканчиваются без ia».

   ```sh
   ['Albania', 'Bolivia','Ethiopia']
   ```

9. Используя приведенный выше массив стран, найдите страну, содержащую наибольшее количество символов.

   ```sh
   Ethiopia
   ```

10. Используя приведенный выше массив стран, найдите страну, содержащую всего 5 символов.

    ```sh
    ['Japan', 'Kenya']
    ```

11. Найдите самое длинное слово в массиве webTechs.
12. Используйте webTechs для создания следующего массива массивов:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

13. Приложение, созданное с использованием MongoDB, Express, React и Node, называется стеком MERN. Создайте аббревиатуру MERN с помощью массива mernStack.
14. Итерируйте по массиву, `["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]`, используя цикл `for` или цикл `for of` печатайте из предметов.
15. Это массив фруктов `['banana', 'orange', 'mango', 'lemon']` измените порядок, используя цикл, без использования обратного метода.
16. Распечатайте все элементы массива, как показано ниже.

    ```js
    const fullStack = [
      ["HTML", "CSS", "JS", "React"],
      ["Node", "Express", "MongoDB"]
    ];
    ```

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```

### Упражнения: Уровень 3

1. Скопируйте массив стран (избегайте мутаций)
2. Массивы изменчивы. Создайте копию массива, которая не изменяет оригинал. Сортировать скопированный массив и сохранить в переменной _sortedCountries_
3. Отсортируйте массив `webTechs` и массив `mernStack`
4. Извлеките все страны содержащие слово 'land' в [массив стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) и распечатайте его как массив
5. Найдите страну, содержащую наибольшее количество символов в [массиве стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
6. Извлеките все страны содержащие слово 'land' from the [массив стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) и распечатайте его как массив
7. Извлеките все страны, содержащие только четыре символа из [массива стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) и распечатайте его как массив
8. Извлеките все страны, содержащие два или более слов из [массив стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) и распечатайте его как массив
9. Разверните [массив стран](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) и примените метод capitalize для каждой страны, храня его в виде массива

🎉 ПОЗДРАВЛЯЕМ ! 🎉

[<< День 5](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/05_Day/05_day_arrays.md) | [День 7 >>](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/RU/07_Day/07_day_functions.md)
