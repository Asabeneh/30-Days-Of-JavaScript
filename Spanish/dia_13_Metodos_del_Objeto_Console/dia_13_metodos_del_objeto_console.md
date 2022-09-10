<div align="center">
  <h1> 30 Días de JavaScript: Métodos del Objeto Console</h1>
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

[<< Día 12](../dia_12_Expresiones_Regulares/dia_12_expresiones_regulares.md) | [Día 14>>](..)

![Thirty Days Of JavaScript](../images/banners/day_1_13.png)

- [Día 13](#día-13)
  - [Métodos del Objeto Console](#métodos-del-objeto-console)
    - [console.log()](#consolelog)
    - [console.warn()](#consolewarn)
    - [console.error()](#consoleerror)
    - [console.table()](#consoletable)
    - [console.time()](#consoletime)
    - [console.info()](#consoleinfo)
    - [console.assert()](#consoleassert)
    - [console.group()](#consolegroup)
    - [console.count()](#consolecount)
    - [console.clear()](#consoleclear)
  - [Ejercicios](#ejercicios)
    - [Ejercicios:Nivel 1](#ejerciciosnivel-1)
    - [Ejercicios:Nivel 2](#ejerciciosnivel-2)
    - [Ejercicios:Nivel 3](#ejerciciosnivel-3)

# Día 13

## Métodos del Objeto Console

En esta sección, trataremos sobre console y los métodos de los objetos console. Los principiantes generalmente no saben cuál usar: console.log(), document.write() o document.getElementById.

Usamos métodos de objetos console para mostrar la salida en la consola del navegador y usamos document.write para mostrar la salida en el documento del navegador (view port). Ambos métodos se utilizan únicamente con fines de prueba y depuración. El método console es la herramienta de prueba y depuración más popular en el navegador. Usamos document.getElementById() cuando queremos interactuar con el DOM usando JavaScript. Trataremos el tema del DOM en otra sección.

Además del famoso método console.log(), console proporciona otros métodos más.

### console.log()

Usamos console.log() para mostrar la salida en la consola del navegador. Podemos sustituir valores y también podemos estilizar la salida del registro usando %c.

- Mostrando la salida en la consola del navegador

```js
console.log("30 Days of JavaScript");
```

```sh
30 Days of JavaScript
```

- Sustitución

```js
console.log("%d %s of JavaScript", 30, "Days");
```

```sh
30 Days of JavaScript
```

- CSS

Podemos darle estilo al mensaje de registro usando css. Copia el siguiente código y pégalo en la consola del navegador para ver el resultado.

```js
console.log("%c30 Days Of JavaScript", "color:green"); // la salida del registro es verde
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
); // salida del registro texto verde rojo y amarillo
```

### console.warn()

Usamos console.warn() para dar avisos en el navegador. Por ejemplo para informar o avisar de la depreciación de la versión de un paquete o de malas prácticas. Copia el siguiente código y pégalo en la consola del navegador para ver los mensajes de advertencia.

```js
console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);
console.warn("Warning is different from error");
```

### console.error()

El método console.error() muestra un mensaje de error.

```js
console.error("This is an error message");
console.error("We all make mistakes");
```

### console.table()

El método console.table() muestra los datos como una tabla en la consola. Muestra los datos en forma de tabla. El método console.table() toma un argumento requerido data, que debe ser un array o un objeto, y un parámetro adicional opcional columns.

Empecemos con un simple array. El código siguiente muestra una tabla con dos columnas. Una columna índice para mostrar el índice y una columna valor para mostrar los nombres

```js
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);
```

Comprobemos también el resultado de un objeto. Esto crea una tabla con dos columnas: una columna índice que contiene las claves y una columna valor que contiene los valores del objeto.

```js
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);
```

Comprueba el resto de los ejemplos copiando y pegando en la consola del navegador.

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);
```

```js
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);
```

### console.time()

Inicia un temporizador que se puede utilizar para controlar el tiempo que dura una operación. Puedes dar a cada temporizador un nombre único, y puedes tener hasta 10.000 temporizadores funcionando en una página determinada. Cuando llame a console.timeEnd() con el mismo nombre, el navegador mostrará el tiempo, en milisegundos, que ha transcurrido desde que se inició el temporizador.

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
Regular for loop: 0.34716796875ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
for of loop: 0.26806640625ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
forEach loop: 0.358154296875ms
```

De acuerdo con la salida anterior, el bucle for regular es más lento que el bucle for of o forEach.

### console.info()

Muestra un mensaje de información en la consola del navegador.

```js
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");
```

### console.assert()

El método console.assert() escribe un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no pasa nada. El primer parámetro es una expresión de aserción. Si esta expresión es falsa, se mostrará un mensaje de error de aserción fallida.

```js
console.assert(4 > 3, "4 is greater than 3"); // no hay resultado
console.assert(3 > 4, "3 is not greater than 4"); // Aserción fallida: 3 no es mayor que 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}
```

### console.group()

El console.group() puede ayudar a agrupar diferentes grupos de registro. Copie el siguiente código y péguelo en la consola del navegador para los grupos.

```js
const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();
```

### console.count()

Imprime el número de veces que se llama a console.count(). Toma un parámetro de etiqueta de cadena. Es muy útil para contar el número de veces que se llama a una función. En el siguiente ejemplo, el método console.count() se ejecutará tres veces

```js
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();
```

```sh
Function has been called: 1
Function has been called: 2
Function has been called: 3
```

### console.clear()

El console.clear() limpia la consola del navegador.

🌕 Sigue con el buen trabajo. Sigue esforzándote, ¡el cielo es el límite! Acabas de completar el día 13 de desafíos y llevas 13 pasos de tu camino hacia la grandeza. Ahora haz algunos ejercicios para tu cerebro y para tus músculos.

## Ejercicios

### Ejercicios:Nivel 1

1.  Mostrar la matriz de países como una tabla
2.  Mostrar el objeto países como una tabla
3.  Utilice console.group() para agrupar los registros

### Ejercicios:Nivel 2

1. 10 > 2 \* 10 use console.assert()
2. Escribe un mensaje de advertencia utilizando console.warn()
3. Escribe un mensaje de error utilizando console.error()

### Ejercicios:Nivel 3

1. Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach

🎉 ¡FELICITACIONES! 🎉

[<< Día 12](../dia_12_Expresiones_Regulares/dia_12_expresiones_regulares.md) | [Día 14>>](..)
