<div align="center">
  <h1> 30 Días de JavaScript: JSON</h1>
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

[<< Día 15](../dia_15_Clases/dia_15_clases.md) | [Día 17 >>](../dia_17_Web_storages/dia_17_web_storages.md)

![Thirty Days Of JavaScript](../images/banners/day_1_16.png)

- [Día 16](#día-16)
  - [JSON](#json)
    - [Convertir JSON en objeto JavaScript](#convertir-json-en-objeto-javascript)
      - [JSON.parse()](#jsonparse)
    - [Uso de una función de recuperación con JSON.parse()](#uso-de-una-función-de-recuperación-con-jsonparse)
    - [Conversión de objetos a JSON](#conversión-de-objetos-a-json)
    - [Usando un filtro de array con JSON.stringify](#usando-un-filtro-de-array-con-jsonstringify)
  - [Ejercicios](#ejercicios)
    - [Ejercicios Nivel 1](#ejercicios-nivel-1)
    - [Ejercicios Nivel 2](#ejercicios-nivel-2)
    - [Ejercicios Nivel 3](#ejercicios-nivel-3)

# Día 16

## JSON

JSON son las siglas de JavaScript Object Notation (Notación de objetos de JavaScript). La sintaxis JSON se deriva de la sintaxis de notación de objetos de JavaScript, pero el formato JSON es sólo de texto o cadena. JSON es un formato de datos ligero para almacenar y transportar. JSON se utiliza sobre todo cuando se envían datos de un servidor a un cliente. JSON es una alternativa más fácil de usar que XML.

**Ejemplo:**

```js
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```

El ejemplo JSON anterior no es muy diferente de un objeto normal. Entonces, ¿cuál es la diferencia? La diferencia es que la clave de un objeto JSON debe ir con comillas dobles o debe ser una cadena. JavaScript Object y JSON son muy similares por lo que podemos cambiar JSON a Object y Object a JSON.

Veamos el ejemplo anterior con más detalle, comienza con una llave. Dentro de la corchete, hay una clave "usuarios" que tiene una matriz de valores. Dentro del array tenemos diferentes objetos y cada objeto tiene claves, cada clave tiene que tener comillas dobles. Por ejemplo, utilizamos "firstNaMe" en lugar de sólo firstName, sin embargo en el objeto utilizamos claves sin comillas dobles. Esta es la mayor diferencia entre un objeto y un JSON. Veamos más ejemplos sobre JSON.

**Ejemplo:**

```js
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### Convertir JSON en objeto JavaScript

La mayoría de las veces obtenemos los datos JSON de la respuesta HTTP o de un archivo, pero podemos almacenar el JSON como una cadena y podemos cambiarlo por un objeto para la demostración. En JavaScript la palabra clave _JSON_ tiene los métodos _parse()_ y _stringify()_. Cuando queremos cambiar el JSON a un objeto, parseamos el JSON usando _JSON.parse()_. Cuando queremos pasar el objeto a JSON utilizamos _JSON.stringify()_.

#### JSON.parse()

```js
JSON.parse(json[, reviver])
// json or text , los datos
//reviver es una función opcional de callback
/* JSON.parse(json, (key, value) => {

})
*/
```

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);
```

### Uso de una función de recuperación con JSON.parse()

Para utilizar la función reviver como formateador, ponemos las claves que queremos para formatear el valor del nombre y del apellido. Digamos que estamos interesados en formatear el nombre y el apellido de los datos JSON.

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj);
```

El _JSON.parse()_ es muy práctico de usar. No tienes que pasar el parámetro opcional, puedes simplemente usarlo con el parámetro requerido y lograrás bastante.

### Conversión de objetos a JSON

Cuando queremos pasar el objeto a JSON utilizamos _JSON.stringify()_. El método stringify toma un parámetro obligatorio y dos opcionales. _Replacer_ se utiliza como filtro y _space_ es una indentación. Si no queremos filtrar ninguna de las claves del objeto podemos pasar simplemente undefined.

```js
JSON.stringify(obj, replacer, space);
// json or text , los datos
// reviver es una función opcional de callback
```

Convirtamos el siguiente objeto en una cadena. Primero mantengamos todas las claves y también tengamos una indentación de 4 espacios.

```js
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users, undefined, 4);
console.log(txt); // text significa JSON- porque json es una forma de cadena de un objeto.
```

```sh
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### Usando un filtro de array con JSON.stringify

Ahora, vamos a utilizar replacer como un filtro. El objeto usuario tiene una larga lista de claves, pero sólo nos interesan algunas de ellas. Ponemos las claves que queremos conservar en un array como se muestra en el ejemplo y lo utilizamos en lugar del replacer.

```js
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(txt);
```

```sh
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
```

🌕 Eres extraordinario. Ahora, ya conoces un formato de datos ligero que puedes utilizar para almacenar datos o para enviarlos a un servidor HTTP. Llevas 16 pasos de ventaja en tu camino hacia la grandeza. Ahora haz algunos ejercicios para tu cerebro y para tus músculos.

## Ejercicios

```js
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
```

### Ejercicios Nivel 1

1. Cambiar el array de habilidades a JSON usando JSON.stringify()
1. Stringify la variable de la edad
1. Stringify la variable isMarried
1. Stringify el objeto estudiante

### Ejercicios Nivel 2

1. Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills

### Ejercicios Nivel 3

1. Parsear el _txt_ JSON a objeto.
2. Encuentra el usuario que tiene muchas habilidades de la variable almacenada en _txt_.

🎉 ¡FELICITACIONES! 🎉

[<< Día 15](../dia_15_Clases/dia_15_clases.md) | [Día 17 >>](../dia_17_Web_storages/dia_17_web_storages.md)
