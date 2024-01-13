<div align="center">
  <h1> 30 Días de JavaScript: Funciones</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Autor:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Enero, 2020</small>
</sub>

</div>

[<< Día 6](../dia_06_Bucles/dia_06_bucles.md) | [Día 8 >>](../dia_08_Objetos/dia_08_objetos.md)

![Thirty Days Of JavaScript](../images/banners/day_1_7.png)

- [📔 Día 7](#📔-día-7)
  - [Funciones](#funciones)
    - [Función declarativa](#función-declarativa)
    - [Función sin parámetros y return](#función-sin-parámetros-y-return)
    - [Función que retorna un valor](#función-que-retorna-un-valor)
    - [Función con un parámetro](#función-con-un-parámetro)
    - [Función con dos parámetros](#función-con-dos-parámetros)
    - [Función con muchos parámetros](#función-con-muchos-parámetros)
    - [Función con número ilimitado de parámetros](#función-con-número-ilimitado-de-parámetros)
      - [Número ilimitado de parámetros en una función regular](#número-ilimitado-de-parámetros-en-una-función-regular)
      - [Número ilimitado de parámetros en una función flecha](#número-ilimitado-de-parámetros-en-una-función-flecha)
    - [Función anónima](#función-anónima)
    - [Función de expresión](#función-de-expresión)
    - [Funciones de autoinvocación](#función-de-autoinvocación)
    - [Función flecha](#función-flecha)
    - [Función con parámetros por defecto](#función-con-parámetros-por-defecto)
    - [Función declarativa versus función flecha](#función-declarativa-versus-función-flecha)
  - [💻 Ejercicios](#💻-ejercicios)
    - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
    - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
    - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# 📔 Día 7

## Funciones

Hasta ahora hemos visto muchas funciones JavaScript integradas. En esta sección, nos centraremos en las funciones personalizadas. ¿Qué es una función? Antes de comenzar a hacer funciones, comprendamos ¿Qué es una función? y ¿Por qué necesitamos una función?

Una función es un bloque reutilizable de código o declaraciones de programación diseñadas para realizar una determinada tarea.

Una función se declara mediante la palabra clave function seguida de un nombre, seguido de paréntesis (). Un paréntesis puede tomar un parámetro. Si una función toma un parámetro, se llamará con un argumento. Una función también puede tomar un parámetro predeterminado. Para almacenar datos en una función, una función debe devolver ciertos tipos de datos. Para obtener el valor llamamos o invocamos a la función.

La función hace código:

- limpio y fácil de leer
- reutilizable
- fácil de probar

Una función se puede declarar o crear de un par de maneras:

- _Función declarativa_
- _Función de expresión_
- _Función anonima_
- _Función flecha_

### Función declarativa

Veamos cómo declaramos una función y cómo llamar a una función.

```js
//declaramos una función sin un parámetro
function functionName() {
  // el código va aquí
}
functionName(); // llamando a la función por su nombre con paréntesis
```

### Función sin parámetros y return

La función se puede declarar sin un parámetro.

**Ejemplo:**

```js
// función sin parámetros. La función eleva al cuadrado un número
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square(); // 4

// función sin parámetro
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers(); // una función tiene que ser llamada por su nombre para ser ejecutada
```

```js
function printFullName() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

printFullName(); // llamando a una función
```

### Función que retorna un valor

La función también puede devolver valores, si una función no devuelve valores, el valor de la función no está definido. Escribamos las funciones anteriores con return. A partir de ahora, retornaremos el valor a una función en lugar de imprimirlo.

```js
function printFullName() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName());
```

```js
function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total;
}

console.log(addTwoNumbers());
```

### Función con un parámetro

En una función podemos pasar diferentes tipos de datos(number, string, boolean, object, function) como un parámetro.

```js
// función con un parámetro
function functionName(parm1) {
  //el código va aquí
}
functionName(parm1); // durante la llamada o la invocación es necesario un argumento

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10)); // debe ser llamado con un argumento

function square(number) {
  return number * number;
}

console.log(square(10));
```

### Función con dos parámetros

```js
// función con dos parámetros
function functionName(parm1, parm2) {
  //el código va aquí
}
functionName(parm1, parm2); // durante la llamada o invocación se necesitan dos argumentos
// la función sin parámetros no recibe entrada, así que hagamos una función con parámetros
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}
sumTwoNumbers(10, 20); // llamando a la función
// si una función no es retorna esta no almacena datos, por lo que debe retornar

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

console.log(sumTwoNumbers(10, 20));
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Asabeneh", "Yetayeh"));
```

### Función con muchos parámetros

```js
// función con múltiples parámetros
function functionName(parm1, parm2, parm3,...){
  //el código va aquí
}
functionName(parm1,parm2,parm3,...) // durante la llamada o la invocación necesita tres argumentos


// esta función toma un array como un parámetro y suma los números en el array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //llamada a la función
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

```

### Función con número ilimitado de parámetros

A veces no sabemos cuántos argumentos va a pasar el usuario. Por lo tanto, debemos saber cómo escribir una función que pueda tomar un número ilimitado de argumentos. La forma en que lo hacemos tiene una diferencia significativa entre una función declarativa (función regular) y una función flecha. Veamos ejemplos tanto en la función declarativa como en la función flecha.

#### Número ilimitado de parámetros en una función regular

Una función declarativa proporciona una función con alcance de argumentos array como objeto. Se puede acceder a cualquier cosa que pasemos como argumento en la función desde el objeto de argumentos dentro de las funciones. Veamos un ejemplo

```js
// Accedemos a los argumentos del objeto
​
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

```js
// declaración
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

#### Número ilimitado de parámetros en una función flecha

La función flecha no tiene el objeto de alcance de los argumentos
Para implementar una función que toma un número ilimitado de argumentos en una función de flecha, usamos el operador de propagación seguido de cualquier nombre de parámetro. Se puede acceder a cualquier elemento que hayamos pasado como argumento en la función como array en la función de flecha. Veamos un ejemplo

```js
// Accedemos a los argumentos del objeto
​
const sumAllNums = (...args) => {
 // console.log(arguments), objeto de argumentos no encontrado en la función flecha
 // en su lugar, usamos un parámetro seguido de un operador de propagación (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

```

```js
// declaración
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

### Función anónima

Función anónima o sin nombre

```js
const anonymousFun = function () {
  console.log("Soy una función anónima y mi valor se almacena en anonymousFun");
};
```

### Función de expresión

Las funciones de expresión son funciones anónimas. Después creamos una función sin nombre y la asignamos a una variable. Para retornar un valor de la función debemos llamar a la variable. Mira el ejemplo de abajo.

```js
// Function expression
const square = function (n) {
  return n * n;
};

console.log(square(2)); // -> 4
```

### Función de autoinvocación

Las funciones de autoinvocación son funciones anónimas que no necesitan ser llamadas para devolver un valor.

```js
(function (n) {
  console.log(n * n);
})(2); // 4, pero en lugar de solo imprimir si queremos regresar y almacenar los datos, hacemos lo que se muestra a continuación

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);
```

### Función flecha

La función flecha es una alternativa para escribir una función, sin embargo, la función declarativa y la función flecha tienen algunas diferencias menores.

La función flecha usa una flecha en lugar de la palabra clave _function_ para declarar una función. Veamos tanto la función declarativa como la función flecha.

```js
// Así es como escribimos una función normal o declarativa
// Cambiemos esta función de declarativa a una función flecha
function square(n) {
  return n * n;
}

console.log(square(2)); // 4

const square = (n) => {
  return n * n;
};

console.log(square(2)); // -> 4

// si tenemos solo una línea en el bloque de código, se puede escribir de la siguiente manera, return explícito
const square = (n) => n * n; // -> 4
```

```js
const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName("Asabeneh", "Yetayeh"));
```

La función anterior solo tiene la declaración de return, por lo tanto, podemos retornar explícitamente de la siguiente manera.

```js
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(printFullName("Asabeneh", "Yetayeh"));
```

### Función con parámetros por defecto

A veces, pasamos valores predeterminados a los parámetros, cuando invocamos la función, si no pasamos un argumento, se usará el valor predeterminado. Tanto la función declarativa como la función flecha pueden tener un valor o valores predeterminados.

```js
// sintaxis
// Declarando una función
function functionName(param = value) {
  //código
}

// Llamando una función
functionName();
functionName(arg);
```

**Example:**

```js
function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}

console.log(greetings());
console.log(greetings("Asabeneh"));
```

```js
function generateFullName(firstName = "Asabeneh", lastName = "Yetayeh") {
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}

console.log(generateFullName());
console.log(generateFullName("David", "Smith"));
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear;
  return age;
}

console.log("Age: ", calculateAge(1819));
```

```js
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + " N"; // el valor tiene que ser cambiado a string primero
  return weight;
}

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 es la gravedad en la superficie de la tierra
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravedad en la superficie de la luna
```

Veamos cómo escribimos las funciones anteriores con funciones flecha.

```js
// sintaxis
// declarando una función
const functionName = (param = value) => {
  //código
};

// Llamando a la  función
functionName();
functionName(arg);
```

**Example:**

```js
const greetings = (name = "Peter") => {
  let message = name + ", welcome to 30 Days Of JavaScript!";
  return message;
};

console.log(greetings());
console.log(greetings("Asabeneh"));
```

```js
const generateFullName = (firstName = "Asabeneh", lastName = "Yetayeh") => {
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
};

console.log(generateFullName());
console.log(generateFullName("David", "Smith"));
```

```js
const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear;
console.log("Age: ", calculateAge(1819));
```

```js
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + " N";

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 es la gravedad en la superficie de la tierra
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravedad en la superficie de la luna
```

### Función declarativa versus función flecha

Será cubierto en otra sección.

🌕 Tienes una energía ilimitada. Acabas de completar los desafíos del día 7 y llevas siete pasos de tu camino hacia la grandeza. Ahora haz algunos ejercicios para tu cerebro y tus músculos.

## 💻 Ejercicios

### Ejercicios: Nivel 1

1. Declare una función _fullName_ e imprima su nombre completo.
2. Declare una función _fullName_ y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
3. Declare una función _addNumbers_ que toma dos parámetros y retorna la suma de ambos.
4. El área de un rectángulo se calcula de la siguiente manera: _area = length x width_. Escribe una función _areaOfRectangle_ que calcule el área de un rectángulo.
5. El perímetro de un rectángulo se calcula de la siguiente manera: _perimeter= 2x(length + width)_. Escribe una función _perimeterOfRectangle_ que calcule el perímetro de un rectángulo.
6. El volumen de un prisma rectangular se calcula de la siguiente manera: _volume = length x width x height_. Escribe una función _volumeOfRectPrism_ que calcule el volumen de un prisma.
7. El área de un círculo se calcula de la siguiente manera: _area = π x r x r_. Escribe una función _areaOfCircle_ que calcule el área de un círculo.
8. La circunferencia de un círculo se calcula de la siguiente manera: _circumference = 2πr_. Escribe una función _circumOfCircle_ que calcule la circunferencia de un círculo.
9. La densidad de una sustancia se calcula de la siguiente manera:_density= mass/volume_. Escribe una función _density_ que calcule la densidad de una sustancia.
10. La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, _speed_.
11. El peso de una sustancia se calcula de la siguiente manera: _weight = mass x gravity_. Escribe una función _weight_ que calcule el peso de una sustancia.
12. La temperatura en °C se puede convertir a °F usando esta fórmula: _°F = (°C x 9/5) + 32_. Escribe una función _convertCelsiusToFahrenheit_ que convierta °C a °F.
13. El índice de masa corporal (IMC) se calcula de la siguiente manera: _imc = peso en Kg / (altura x altura) en m2_. Escribe una función que calcule _imc_. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un _peso bajo, peso normal, con sobrepeso_ u _obeso_ según la información que se proporciona a continuación.

    - Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
    - _Peso bajo_: IMC inferior a 18,5
    - _Peso normal_: IMC de 18,5 a 24,9
    - _Sobrepeso_: IMC de 25 a 29,9
    - _Obeso_: IMC es 30 o más

14. Escribe una función llamada _checkSeason_, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.

    ```js
    console.log(findMax(0, 10, 5));
    10;
    console.log(findMax(0, -10, -2));
    0;
    ```

### Ejercicios: Nivel 2

1. La ecuación lineal se calcula de la siguiente manera: _ax + by + c = 0_. Escribe una función que calcule el valor de una ecuación lineal, _solveLinEquation_.
1. La ecuación cuadrática se calcula de la siguiente manera: _ax2 + bx + c = 0_. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, _solveQuadEquation_.

   ```js
   console.log(solveQuadratic()); // {0}
   console.log(solveQuadratic(1, 4, 4)); // {-2}
   console.log(solveQuadratic(1, -1, -2)); // {2, -1}
   console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
   console.log(solveQuadratic(1, 0, -4)); //{2, -2}
   console.log(solveQuadratic(1, -1, 0)); //{1, 0}
   ```

1. Declare una función llamada _printArray_. Toma un array como parámetro e imprime cada valor del array.
1. Declare una función llamada _showDateTime_ que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.

   ```sh
   showDateTime()
   08/01/2020 04:08
   ```

1. Declare una función llamada _swapValues_. Esta función intercambia el valor de x a y.

   ```js
   swapValues(3, 4); // x => 4, y=>3
   swapValues(4, 5); // x = 5, y = 4
   ```

1. Declare una función llamada _reverseArray_. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

   ```js
   console.log(reverseArray([1, 2, 3, 4, 5]));
   //[5, 4, 3, 2, 1]
   console.log(reverseArray(["A", "B", "C"]));
   //['C', 'B', 'A']
   ```

1. Declare una función llamada _capitalizeArray_. Toma un array como parámetro y retorna el array - capitalizedarray.
1. Declare una función llamada _addItem_. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.
1. Declare una función llamada _removeItem_. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
1. Declare una función llamada _sumOfNumbers_. Toma un número como parámetro y suma todos los números en ese rango.
1. Declare una función llamada _sumOfOdds_. Toma un parámetro numérico y suma todos los números impares en ese rango.
1. Declare una función llamada _sumOfEven_. Toma un parámetro numérico y suma todos los números pares en ese rango.
1. Declare una función llamada _evensAndOdds_ . Toma un entero positivo como parámetro y cuenta el número de pares e impares.

   ```sh
   evensAndOdds(100);
   El número de impares son 50.
   El número de pares es 51.
   ```

1. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

   ```js
   sum(1, 2, 3); // -> 6
   sum(1, 2, 3, 4); // -> 10
   ```

1. Escriba una función _randomUserIp_ que genere una ip de usuario aleatoria.
1. Escriba una función _randomMacAddress_ que genere una dirección mac aleatoria.
1. Declare una función llamada _randomHexaNumberGenerator_. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.

   ```sh
   console.log(randomHexaNumberGenerator());
   '#ee33df'
   ```

1. Declare una función llamada _userIdGenerator_. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.

   ```sh
   console.log(userIdGenerator());
   41XTDbE
   ```

### Ejercicios: Nivel 3

1. Modifique la función _userIdGenerator_. Declare una función de nombre _userIdGeneratedByUser_. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

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

1. Escriba una función llamada _rgbColorGenerator_ que genera colores rgb

   ```sh
   rgbColorGenerator()
   rgb(125,244,255)
   ```

1. Escriba una función **_arrayOfHexaColors_** que retorna cualquier cantidad de colores hexadecimales en un array.
1. Escriba una función **_arrayOfRgbColors_** que retorna cualquier cantidad de colores RGB en un array.
1. Escriba una función **_convertHexaToRgb_** que convierta el color hexa a rgb y retorna un color rgb.
1. Escriba una función **_convertRgbToHexa_** que convierta rgb a color hexa y retorna un color hexa.
1. Escriba una función **_generateColors_** que pueda generar cualquier número de colores hexa o rgb.

   ```js
   console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
   console.log(generateColors("hexa", 1)); // '#b334ef'
   console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
   console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
   ```

1. Llame a su función _shuffleArray_, toma un array como parámetro y devuelve un array mezclada
1. Llame a su función _factorial_, toma un número entero como parámetro y devuelve un factorial del número.
1. Llame a su función _isEmpty_, toma un parámetro y verifica si está vacío o no.
1. Llame a su función _sum_, toma cualquier cantidad de argumentos y devuelve la suma.
1. Escriba una función llamada _sumOfArrayItems_, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
1. Escribe una función llamada _average_, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
1. Escriba una función llamada _modifyArray_ que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.

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

1. Escribe una función llamada _isPrime_, que verifica si un número es un número primo.
1. Escriba una función que verifique si todos los elementos son únicos en un array.
1. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
1. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto \$ o \_. Escriba una función **isValidVariable** que verifique si una variable es válida o inválida.
1. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

   ```js
   sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
   ```

1. Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido
   🎉 ¡FELICITACIONES! 🎉

[<< Día 6](../dia_06_Bucles/dia_06_bucles.md) | [Día 8 >>](../dia_08_Objetos/dia_08_objetos.md)
