<div align="center">
  <h1> 30 Días de JavaScript: Promesas</h1>
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

[<< Día 17](../dia_17_Web_storages/dia_17_web_storages.md) | [Día 19>>](../dia_19_Closures/dia_19_closures.md)

![Thirty Days Of JavaScript](../images/banners/day_1_18.png)

- [Día 18](#día-18)
  - [Promesas](#promesas)
  - [Callbacks](#callbacks)
    - [Constructor de promesas](#constructor-de-promesas)
  - [Fetch API](#fetch-api)
  - [Async y Await](#async-y-await)
  - [Ejercicios](#ejercicios)
    - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
    - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
    - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# Día 18

## Promesas

Los seres humanos damos o recibimos una promesa para realizar alguna actividad en algún momento. Si cumplimos la promesa, hacemos felices a los demás, pero si no la cumplimos, puede provocar descontento. La promesa en JavaScript tiene algo en común con los ejemplos anteriores.

Una promesa es una forma de manejar operaciones asíncronas en JavaScript. Permite a los manejadores con un valor eventual de éxito o razón de fracaso de una acción asíncrona. Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve una promesa de proporcionar el valor en algún momento en el futuro.

Una promesa está en uno de estos estados:

- pendiente: estado inicial, ni cumplido ni rechazado.
- cumplido: significa que la operación se ha completado con éxito.
- rechazado: significa que la operación ha fallado.

Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error). Cuando ocurre cualquiera de estas opciones, se llaman los manejadores asociados puestos en cola por el método _then_ de una promesa. (Si la promesa ya se ha cumplido o ha sido rechazada cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no hay una condición de competencia entre una operación asíncrona que se completa y sus manejadores que se adjuntan).

Como los métodos _Promise.prototype.then()_ y _Promise.prototype.catch()_ devuelven promesas, pueden encadenarse.

## Callbacks

Para entender muy bien la promesa, entendamos primero la devolución de llamada. Veamos los siguientes callbacks. A partir de los siguientes bloques de código se notará, la diferencia entre callback y promesas.

- call back
  Veamos una función callback que puede tomar dos parámetros. El primer parámetro es err y el segundo es result. Si el parámetro err es falso, no habrá error, de lo contrario retornará un error.

En este caso el err tiene un valor y devolverá el bloque err.

```js
//Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);
```

```sh
// después de 2 segundos se imprimirá
It did not go well
```

En este caso el err es falso y devolverá el bloque else que es el resultado.

```js
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

doSomething((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
```

```sh
// después de 2 segundos imprimirá las habilidades
["HTML", "CSS", "JS"]
```

### Constructor de promesas

Podemos crear una promesa utilizando el constructor Promise. Podemos crear una nueva promesa utilizando la palabra clave `new` seguida de la palabra `Promise` y seguida de un paréntesis. Dentro del paréntesis, toma una función `callback`. La función de callback de la promesa tiene dos parámetros que son las funciones _`resolve`_ y _`reject`_.

```js
// sintaxis
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});
```

```js
// Promesas
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
```

```sh
["HTML", "CSS", "JS"]
```

La promesa anterior se ha resuelto con resolución.
Veamos otro ejemplo cuando la promesa se resuelve con el rechazo (reject).

```js
// Promesa
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));
```

```sh
Something wrong has happened
```

## Fetch API

La API Fetch proporciona una interfaz para obtener recursos (incluso a través de la red). A cualquiera que haya utilizado XMLHttpRequest le resultará familiar, pero la nueva API ofrece un conjunto de funciones más potente y flexible. En este reto utilizaremos fetch para solicitar url y APIS. Además de esto, veamos una demostración del caso de uso de las promesas en el acceso a los recursos de la red utilizando la API fetch.

```js
const url = "https://restcountries.com/v2/all"; // api de países
fetch(url)
  .then((response) => response.json()) // acceder a los datos de la API como JSON
  .then((data) => {
    // obtener los datos
    console.log(data);
  })
  .catch((error) => console.error(error)); // manejo de errores si ocurre algo incorrecto
```

## Async y Await

Async y await es una forma elegante de manejar las promesas. Es fácil de entender y limpio de escribir.

```js
const square = async function (n) {
  return n * n;
};

square(2);
```

```sh
Promesa {<resolved>: 4}
```

La palabra _async_ delante de una función significa que esa función devolverá una promesa. La función cuadrada anterior en lugar de un valor devuelve una promesa.

¿Cómo accedemos al valor de la promesa? Para acceder al valor de la promesa, utilizaremos la palabra clave _await_.

```js
const square = async function (n) {
  return n * n;
};
const value = await square(2);
console.log(value);
```

```sh
4
```

Ahora, como puedes ver en el ejemplo anterior escribiendo async delante de una función creamos una promesa y para obtener el valor de una promesa utilizamos await. Async y await van juntos, uno no puede existir sin el otro.

Vamos a obtener los datos de la API utilizando tanto el método promise como el método async y await.

- promesa

```js
const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
```

- async y await

```js
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();
```

🌕 Eres consistente y has cumplido tu promesa, has llegado al día 18. Mantén tu promesa y resuelve el desafío con determinación. Has dado 18 pasos adelante en tu camino hacia la grandeza. Ahora haz algunos ejercicios para tu cerebro y tus músculos.

## Ejercicios

```js
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
```

### Ejercicios: Nivel 1

1. Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.

### Ejercicios: Nivel 2

1. Imprime todos los nombres de los gatos en la variable catNames.

### Ejercicios: Nivel 3

1. Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
2. Lee la api de países y descubre los 10 países más grandes
3. Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales.

🎉 ¡FELICITACIONES! 🎉

[<< Día 17](../dia_17_Web_storages/dia_17_web_storages.md) | [Día 19>>](../dia_19_Closures/dia_19_closures.md)
