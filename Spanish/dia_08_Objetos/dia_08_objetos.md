<div align="center">
  <h1> 30 Días de JavaScript: Objetos</h1>
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

[<< Día 7](../dia_07_Funciones/dia_07_funciones.md) | [Día 9 >>](../dia_09_Funciones_De_Orden_Superior/dia_09_funciones_de_orden_superior.md)

![Thirty Days Of JavaScript](../images/banners/day_1_8.png)

- [📔 Día 8](#📔-día-8)
  - [Scope](#scope-alcance)
    - [Objeto Global Window](#objeto-global-window)
    - [Global scope](#global-scope)
    - [Local scope](#local-scope)
  - [📔 Objeto](#📔-objeto)
    - [Crear un objeto vacío](#crear-un-objeto-vacío)
    - [Crear un objeto con valores](#crear-un-objeto-con-valores)
    - [Obtener valores de un objeto](#obtener-valores-de-un-objeto)
    - [Crear métodos de objetos](#crear-métodos-de-objetos)
    - [Establecer una nueva clave para un objeto](#establecer-una-nueva-clave-para-un-objeto)
    - [Métodos de los objetos](#métodos-de-los-objetos)
      - [Obtención de claves de objetos mediante Object.keys()](#obtención-de-claves-de-objetos-mediante-objectkeys)
      - [Obtención de valores de objetos mediante Object.values()](#obtención-de-valores-de-objetos-mediante-objectvalues)
      - [Obtención de claves y valores de objetos mediante Object.entries()](#obtención-de-claves-y-valores-de-objetos-mediante-objectentries)
      - [Comprobación de propiedades mediante hasOwnProperty()](#comprobación-de-propiedades-mediante-hasownproperty)
  - [💻 Ejercicios](#💻-ejercicios)
    - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
    - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
    - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# 📔 Día 8

## Scope (alcance)

La variable es la parte fundamental en la programación. Declaramos variables para almacenar diferentes tipos de datos. Para declarar una variable usamos la palabra clave _var_, _let_, y _const_. Una variable puede declararse en diferentes scope. En esta sección, veremos el alcance de las variables, el alcance de las variables cuando usamos var o let.
El scope de las variables pueden ser:

- Global
- Local

Las variables pueden ser declaradas con un scope global o local. Veremos tanto el scope global como el local. Cualquier cosa declarada sin let, var o const tiene un alcance global.

Imaginemos que tenemos un fichero scope.js.

### Objeto Global Window

Sin usar console.log() abre tu navegador y comprueba, verás el valor de a y b si escribes a o b en el navegador. Eso significa que a y b ya están disponibles en window

```js
//scope.js
a = "JavaScript"; // declarar una variable sin let o const la hace disponible en el objeto window y esta se encuentra en cualquier lugar
b = 10; // es una variable de scope global y se encuentra en el objeto ventana
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accesibles
```

### Global scope

Una variable declarada globalmente puede ser accedida en cualquier lugar del mismo archivo. Pero el término global es relativo. Puede ser global al archivo o puede ser global relativo a algún bloque de códigos.

```js
//scope.js
let a = "JavaScript"; // es un scope global que se encontrará en cualquier parte de este archivo
let b = 10; // es un scope global que se encontrará en cualquier parte de este archivo
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accesible
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b);
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accesible
```

### Local scope

Una variable declarada como local sólo puede ser accedida en determinados bloques de código.

- Scope del bloque
- Scope de la función

```js
//scope.js
let a = "JavaScript"; // es un scope global que se encontrará en cualquier parte de este archivo
let b = 10; // es un scope global que se encontrará en cualquier parte de este archivo
// Scope de la función
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accesible
  let value = false;
  // Scope del bloque
  if (true) {
    // podemos acceder desde la función y fuera de la función pero
    // las variables declaradas dentro del if no serán accesibles fuera del bloque if
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }
  // no podemos acceder a c porque el scope de c es sólo el bloque if
  console.log(a, b, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accesible
```

Ahora, usted tiene una comprensión del scope. Una variable declarada con _var_ sólo tiene ámbito de función, pero una variable declarada con _let_ o _const_ tiene scope de bloque (bloque de función, bloque if, bloque de bucle, etc). El bloque en JavaScript es un código entre dos llaves({}).

```js
//scope.js
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: la gravedad no está definida

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3
```

En ES6 y superiores existe _let_ y _const_, por lo que no sufrirás la insidia de _var_. Cuando usamos _let_ nuestra variable tiene alcance de bloque y no infectara otras partes de nuestro código.

```js
//scope.js
function letsLearnScope() {
  // puedes usar let o const, pero la gravedad es constante prefiero usar const
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: la gravedad no está definida

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: la gravedad no está definida

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i no está definida
```

El ámbito _let_ y _const_ es el mismo. La diferencia es sólo la reasignación. No podemos cambiar o reasignar el valor de la variable `const`. Te sugiero encarecidamente que utilices _let_ y _const_, utilizando _let_ y _const_ escribirás un código limpio y evitarás errores difíciles de depurar. Como regla general, puedes usar _let_ para cualquier valor que cambie, _const_ para cualquier valor constante, y para un array, objeto, función de flecha y expresión de función.

## 📔 Objeto

Todo puede ser un objeto y los objetos tienen propiedades y las propiedades tienen valores, por lo que un objeto es un par clave-valor. El orden de la clave no está reservado, o no hay orden. Para crear un objeto literal, utilizamos dos llaves.

### Crear un objeto vacío

Un objeto vacío

```js
const person = {};
```

### Crear un objeto con valores

Ahora, el objeto persona tiene las propiedades firstName, lastName, age, location, skills y isMarried. El valor de las propiedades o claves puede ser una cadena, un número, un booleano, un objeto, null, undefined o una función.

Veamos algunos ejemplos de objetos. Cada clave tiene un valor en el objeto.

```js
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);
```

### Obtener valores de un objeto

Podemos acceder a los valores del objeto utilizando dos métodos:

- usando . seguido del nombre de la clave si el nombre de la clave es de una sola palabra
- utilizando corchetes y comillas

```js
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

// acceder a los valores mediante .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location); // undefined

// se puede acceder al valor utilizando corchetes y el nombre de la clave
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"]); // undefined

// por ejemplo, para acceder al número de teléfono sólo utilizamos el método del corchete
console.log(person["phone number"]);
```

### Crear métodos de objetos

Ahora, el objeto persona tiene las propiedades getFullName. El getFullName es una función dentro del objeto persona y lo llamamos un método del objeto. La palabra clave _this_ se refiere al objeto mismo. Podemos utilizar la palabra _this_ para acceder a los valores de diferentes propiedades del objeto. No podemos usar una función de flecha como método de objeto porque la palabra this se refiere a window dentro de una función de flecha en lugar del objeto mismo. Ejemplo de objeto:

```js
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());
// Asabeneh Yetayeh
```

### Establecer una nueva clave para un objeto

Un objeto es una estructura de datos mutable y podemos modificar el contenido de un objeto después de su creación.

Establecer una nueva clave en un objeto

```js
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo());
```

```sh
Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### Métodos de los objetos

Existen diferentes métodos para manipular un objeto. Veamos algunos de los métodos disponibles.

_Object.assign_: Para copiar un objeto sin modificar el objeto original

```js
const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

//Métodos de objetos: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
```

#### Obtención de claves de objetos mediante Object.keys()

_Object.keys_: Para obtener las claves o propiedades de un objeto como un array

```js
const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']
```

#### Obtención de valores de objetos mediante Object.values()

_Object.values_:Para obtener los valores de un objeto como un array

```js
const values = Object.values(copyPerson);
console.log(values);
```

#### Obtención de claves y valores de objetos mediante Object.entries()

_Object.entries_:Para obtener las claves y valores de un array

```js
const entries = Object.entries(copyPerson);
console.log(entries);
```

#### Comprobación de propiedades mediante hasOwnProperty()

_hasOwnProperty_: Para comprobar si una clave o propiedad específica existe en un objeto

```js
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
```

🌕 Eres asombroso. Ahora, estás súper cargado con el poder de los objetos. Acabas de completar los desafíos del día 8 y llevas 8 pasos de tu camino a la grandeza. Ahora haz algunos ejercicios para tu cerebro y para tus músculos.

## 💻 Ejercicios

### Ejercicios: Nivel 1

1. Crear un objeto vacío llamado dog
1. Imprime el objeto dog en la consola
1. Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve _woof woof_
1. Obtener name, legs, color, age y el valor de bark del objeto dog
1. Establecer nuevas propiedades al objeto dog: breed, getDogInfo

### Ejercicios: Nivel 2

1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
1. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.

   ````js
   const users = {
     Alex: {
       email: 'alex@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript'],
       age: 20,
       isLoggedIn: false,
       points: 30
     },
     Asab: {
       email: 'asab@asab.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
       age: 25,
       isLoggedIn: false,
       points: 50
     },
     Brook: {
       email: 'daniel@daniel.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
       age: 30,
       isLoggedIn: true,
       points: 50
     },
     Daniel: {
       email: 'daniel@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
       age: 20,
       isLoggedIn: true,
       points: 50
     },
     Thomas: {
       email: 'thomas@thomas.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     Paul: {
       email: 'paul@paul.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }```

   ````

1. Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
1. Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
1. Obtener todas las claves o propiedades del objeto usuarios
1. Obtener todos los valores del objeto usuarios
1. Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.

### Ejercicios: Nivel 3

1.  Crea un objeto literal llamado _personAccount_. Tiene las propiedades _firstName, lastName, incomes, expenses_ y tiene los metodos _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ y _accountBalance_. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.

2.  \*\*\*\* Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()

```js
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
```

Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB.
a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.  
 b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación

3. El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades.
   a. Crear una función llamada rateProduct que califique el producto
   b. Crear una función llamada averageRating que calcule la valoración media de un producto

4. Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like

🎉 ¡FELICITACIONES! 🎉

[<< Día 7](../dia_07_Funciones/dia_07_funciones.md) | [Día 9 >>](../dia_09_Funciones_De_Orden_Superior/dia_09_funciones_de_orden_superior.md)
