<div align="center">
  <h1> 30 Días de JavaScript: Web Storages</h1>
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

[<< Día 16](../dia_16_JSON/dia_16_json.md) | [Día 18 >>](../dia_18_Promesas/dia_18_Promesas.md)

![Thirty Days Of JavaScript](../images/banners/day_1_17.png)

- [Día 17](#día-17)
  - [Storage (Almacenamiento) web HTML5](#storage-almacenamiento-web-html5)
    - [sessionStorage](#sessionstorage)
    - [localStorage](#localstorage)
    - [Caso de uso de los almacenamientos web](#caso-de-uso-de-los-almacenamientos-web)
  - [Objetos de almacenamiento web HTML5](#objetos-de-almacenamiento-web-html5)
    - [Establecer el elemento en el localStorage](#establecer-el-elemento-en-el-localstorage)
    - [Obtener un elemento de localStorage](#obtener-un-elemento-de-localstorage)
    - [Limpiando el localStorage](#limpiando-el-localstorage)
  - [Ejercicios](#ejercicios)
    - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
    - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
    - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# Día 17

## Storage (Almacenamiento) web HTML5

Web Storage (sessionStorage y localStorage) es una nueva API de HTML5 que ofrece importantes ventajas sobre las cookies tradicionales. Antes de HTML5, los datos de las aplicaciones debían almacenarse en cookies, incluidas en cada solicitud del servidor. Web storage es más seguro, y se pueden almacenar grandes cantidades de datos localmente, sin afectar al rendimiento del sitio web. El límite de almacenamiento de datos de las cookies en muchos navegadores web es de unos 4 KB por cookie. Nosotros almacenamos datos mucho más grandes (al menos 5MB) y nunca los transferimos al servidor. Todos los sitios del mismo o único origen pueden almacenar y acceder a los mismos datos.

Se puede acceder a los datos almacenados mediante JavaScript, lo que permite aprovechar las secuencias de comandos del lado del cliente para hacer muchas cosas que tradicionalmente han implicado la programación del lado del servidor y las bases de datos relacionales. Hay dos objetos de almacenamiento web:

- sessionStorage
- localStorage

localStorage es similar a sessionStorage, excepto que mientras los datos almacenados en localStorage no tienen tiempo de caducidad, los datos almacenados en sessionStorage se borran cuando termina la sesión de la página, es decir, cuando se cierra la página.

Hay que tener en cuenta que los datos almacenados en localStorage o sessionStorage son específicos del protocolo de la página.

Las claves y los valores son siempre cadenas (tenga en cuenta que, al igual que con los objetos, las claves enteras se convertirán automáticamente en cadenas).

![web_storage](../images/web_storage.png)

### sessionStorage

sessionStorage sólo está disponible dentro de la sesión de la pestaña o ventana del navegador. Está diseñado para almacenar datos en una sola sesión de la página web. Esto significa que si la ventana se cierra, los datos de la sesión se eliminarán. Como sessionStorage y localStorage tienen métodos similares, nos centraremos sólo en localStorage.

### localStorage

El localStorage de HTML5 es la para la API de almacenamiento web que se utiliza para almacenar datos en el navegador sin caducidad. Los datos estarán disponibles en el navegador incluso después de cerrarlo. localStorage se mantiene incluso entre sesiones del navegador. Esto significa que los datos siguen estando disponibles cuando se cierra y se vuelve a abrir el navegador, y también de forma instantánea entre pestañas y ventanas.

En ambos casos, los datos del almacenamiento web no están disponibles entre distintos navegadores. Por ejemplo, no se puede acceder a los objetos de almacenamiento creados en Firefox en Internet Explorer, exactamente igual que las cookies. Hay cinco métodos para trabajar en el almacenamiento local:
_setItem(), getItem(), removeItem(), clear(), key()_

### Caso de uso de los almacenamientos web

Algunos casos de uso de los almacenes web son

- almacenar datos temporalmente.
- guardar los productos que el usuario pone en su carrito de la compra.
- los datos pueden estar disponibles entre peticiones de página, múltiples pestañas del navegador y también entre sesiones del navegador utilizando localStorage.
- puede utilizarse completamente sin conexión utilizando localStorage.
- El almacenamiento en la web puede suponer una gran ganancia de rendimiento cuando algunos datos estáticos se almacenan en el cliente para minimizar el número de peticiones posteriores. Incluso las imágenes pueden almacenarse en cadenas utilizando la codificación Base64.
- se puede utilizar para el método de autenticación del usuario.

Para los ejemplos mencionados anteriormente, tiene sentido utilizar localStorage. Te preguntarás, entonces, cuándo debemos utilizar sessionStorage.

En algunos casos, queremos deshacernos de los datos en cuanto se cierra la ventana. O, quizás, si no queremos que la aplicación interfiera con la misma aplicación que está abierta en otra ventana. Estos escenarios se sirven mejor con sessionStorage.

Ahora, vamos a ver cómo hacer uso de estas APIs de almacenamiento web.

## Objetos de almacenamiento web HTML5

El almacenamiento (storage) web HTML proporciona dos objetos para almacenar datos en el cliente:

- window.localStorage - almacena datos sin fecha de caducidad
- window.sessionStorage - almacena datos para una sesión (los datos se pierden cuando se cierra la pestaña del navegador)La mayoría de los navegadores modernos soportan Web Storage, sin embargo es bueno comprobar el soporte del navegador para localStorage y sessionStorage. Veamos los métodos disponibles para los objetos Web Storage.

Objetos Web Storage:

- _localStorage_ - para mostrar el objeto localStorage
- _localStorage.clear()_ - para remover todo lo que hay en el almacenamiento local
- _localStorage.setItem()_ - para almacenar datos en el localStorage. Toma como parámetros una clave y un valor.
- _localStorage.getItem()_ - para mostrar los datos almacenados en el localStorage. Toma una clave como parámetro.
- _localStorage.removeItem()_ - para remover un ítem almacenado de un localStorage. Toma la clave como parámetro.
- _localStorage.key()_ - para mostrar un dato almacenado en un localStorage. Toma el índice como parámetro.

![local_storage](../images/local_storage.png)

### Establecer el elemento en el localStorage

Cuando establecemos conjunto los datos que se almacenan en un localStorage, se almacenarán como una cadena. Si estamos almacenando un array o un objeto, debemos encadenarlo primero para mantener el formato, a menos que perdamos la estructura del array o del objeto de los datos originales.

Almacenamos los datos en el localStorage utilizando el método _localStorage.setItem_.

```js
//sintaxis
localStorage.setItem("key", "value");
```

- Almacenamiento de una cadena en un localStorage

```js
localStorage.setItem("firstName", "Asabeneh"); // ya que el valor es una cadena, no lo encadenamos
console.log(localStorage);
```

```sh
Storage {firstName: 'Asabeneh', length: 1}
```

- Almacenar el número en un storage local

```js
localStorage.setItem("age", 200);
console.log(localStorage);
```

```sh
 Storage {age: '200', firstName: 'Asabeneh', length: 2}
```

- Almacenando un array en un localStorage. Si estamos almacenando un array, un objeto o una matriz de objetos, debemos encadenar el objeto primero. Véase el ejemplo siguiente.

```js
const skills = ["HTML", "CSS", "JS", "React"];
//El array de Skills tiene que ser encadenado primero para mantener el formato.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
console.log(localStorage);
```

```sh
Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}
```

```js
let skills = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills);
localStorage.setItem("skills", skillJSON);
```

- Almacenamiento de un objeto en un localStorage. Antes de almacenar los objetos en un localStorage, el objeto tiene que ser stringificado.

```js
const user = {
  firstName: "Asabeneh",
  age: 250,
  skills: ["HTML", "CSS", "JS", "React"],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);
```

### Obtener un elemento de localStorage

Obtenemos los datos del almacenamiento local utilizando el método _localStorage.getItem()_.

```js
//sintaxis
localStorage.getItem("key");
```

```js
let firstName = localStorage.getItem("firstName");
let age = localStorage.getItem("age");
let skills = localStorage.getItem("skills");
console.log(firstName, age, skills);
```

```sh
 'Asabeneh', '200', '['HTML','CSS','JS','React']'
```

Como puedes ver la habilidad está en un formato de cadena. Utilicemos JSON.parse() para convertirlo en un array normal.

```js
let skills = localStorage.getItem("skills");
let skillsObj = JSON.parse(skills, undefined, 4);
console.log(skillsObj);
```

```sh
['HTML','CSS','JS','React']
```

### Limpiando el localStorage

El método clear, borrará todo lo almacenado en la memoria local

```js
localStorage.clear();
```

🌕 Estás decidido. Ahora, conociste un Web Storages y supiste cómo almacenar pequeños datos en los navegadores de los clientes. Llevas 17 pasos de ventaja en tu camino hacia la grandeza. Ahora haz algunos ejercicios para tu cerebro y para tu músculo.

## Ejercicios

### Ejercicios: Nivel 1

1. Guarda tu nombre, apellido, edad, país y ciudad en tu navegador localStorage.

### Ejercicios: Nivel 2

1. Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el apellido, la edad, las habilidades, el país, las claves inscritas y los valores para las claves. Almacena el objeto estudiante en el localStorage de tu navegador.

### Ejercicios: Nivel 3

1. Crear un objeto llamado personAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.

🎉 ¡FELICITACIONES! 🎉

[<< Día 16](../dia_16_JSON/dia_16_json.md) | [Día 18 >>](../dia_18_Promesas/dia_18_Promesas.md)
