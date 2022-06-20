<div align="center">
  <h1> 30 Days Of JavaScript: Objects</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Autore:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> Gennaio, 2020</small>
  </sub>
</div>

[<< Day 7](../07_Day_Functions/07_day_functions.md) | [Day 9 >>](../09_Day_Higher_order_functions/09_day_higher_order_functions.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_8.png)

- [📔 Giorno 8](#-day-8)
	- [Scope](#scope)
		- [Window Global Object](#window-global-object)
		- [Global scope](#global-scope)
		- [Local scope](#local-scope)
	- [📔 Object](#-object)
		- [Creare un oggetto vuoto](#creating-an-empty-object)
		- [Creare un oggetto con valori](#creating-an-objecting-with-values)
		- [Ottenere i valori dall'oggetto](#getting-values-from-an-object)
		- [Creare i metodi di un oggetto](#creating-object-methods)
		- [Impostare nuove chiavi per un oggetto](#setting-new-key-for-an-object)
		- [Metodi della classe Object](#object-methods)
			- [Ottenere le chiavi con Object.keys()](#getting-object-keys-using-objectkeys)
			- [Ottenere i valori con Object.values()](#getting-object-values-using-objectvalues)
			- [Ottenere chiavi e valori con Object.entries()](#getting-object-keys-and-values-using-objectentries)
			- [Controllare le proprietà usando hasOwnProperty()](#checking-properties-using-hasownproperty)
	- [💻 Esercizi](#-exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# 📔 Giorno 8

## Scope

La variabile è un elemento fondamentale della programmazione. Dichiariamo una variabile per memorizzare diversi tipi di dati. Per dichiarare una variabile si usano le parole chiave _var_, _let_ e _const_. Una variabile può essere dichiarata in diversi ambiti. In questa sezione vedremo l'ambito delle variabili, l'ambito delle variabili quando usiamo var o let.
Gli ambiti delle variabili possono essere:

- Global
- Local

Le variabili possono essere dichiarate a livello globale o locale. Vedremo sia l'ambito globale che quello locale.
Qualsiasi cosa dichiarata senza let, var o const ha uno scope globale.

Immaginiamo di avere un file scope.js.

### Window Global Object

Senza usare console.log(), aprite il browser e verificate: vedrete il valore di a e b se scrivete a o b nel browser. Ciò significa che a e b sono già disponibili nella finestra.

```js
//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible
```

### Global scope

Una variabile dichiarata globalmente può essere accessibile in qualsiasi punto dello stesso file. Ma il termine globale è relativo. Può essere globale al file o globale rispetto a qualche blocco di codice.

```js
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
```

### Local scope

Una variabile dichiarata come locale può essere accessibile solo in determinati blocchi di codice.

- Block Scope
- Function Scope

```js
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
```

Ora avete compreso l'ambito. Una variabile dichiarata con *var* ha un ambito solo per la funzione, mentre una variabile dichiarata con *let* o *const* ha un ambito di blocco (blocco funzione, blocco if, blocco loop, ecc.). Il blocco in JavaScript è un codice compreso tra due parentesi graffe ({}).

```js
//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3

```

In ES6 e versioni successive esistono *let* e *const*, per cui non si soffrirà della subdola presenza di *var*. Quando usiamo *let*, la nostra variabile ha uno scope di blocco e non infetterà altre parti del nostro codice.

```js
//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

```

Gli ambiti *let* e *const* sono gli stessi. La differenza è solo la riassegnazione. Non possiamo cambiare o riassegnare il valore della variabile `const`. Vi consiglio vivamente di usare *let* e *const*; usando *let* e *const* scriverete codice pulito ed eviterete errori difficili da debuggare. Come regola generale, si può usare *let* per qualsiasi valore che cambia, *const* per qualsiasi valore costante e per un array, un oggetto, una funzione freccia e un'espressione di funzione.

## 📔 Object

Tutto può essere un oggetto e gli oggetti hanno proprietà e le proprietà hanno valori, quindi un oggetto è una coppia chiave-valore. L'ordine delle chiavi non è riservato, oppure non c'è un ordine.
Per creare un letterale di oggetto, si usano due parentesi graffe.

### Creare un oggetto vuoto

An empty object

```js
const person = {}
```

### Creare un oggetto con valori

Ora, l'oggetto persona ha le proprietà firstName, lastName, age, location, skills e isMarried. Il valore delle proprietà o delle chiavi può essere una stringa, un numero, un booleano, un oggetto, null, undefined o una funzione.

Vediamo alcuni esempi di oggetti. Ogni chiave ha un valore nell'oggetto.

```js
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
```

### Ottenere i valori dall'oggetto

Possiamo accedere ai valori degli oggetti utilizzando due metodi:

- usando . seguito dal nome della chiave, se il nome della chiave è una sola parola
- usando le parentesi quadre e le virgolette

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])
```

### Creare i metodi di un oggetto

Ora, l'oggetto persona ha le proprietà getFullName. Il metodo getFullName è una funzione all'interno dell'oggetto persona e lo chiamiamo metodo dell'oggetto. La parola chiave _this_ si riferisce all'oggetto stesso. Possiamo usare la parola _this_ per accedere ai valori di diverse proprietà dell'oggetto. Non possiamo usare una funzione freccia come metodo oggetto, perché la parola this si riferisce alla finestra all'interno di una funzione freccia invece che all'oggetto stesso. Esempio di oggetto:

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
// Asabeneh Yetayeh
```

### Impostare nuove chiavi per un oggetto

Un oggetto è una struttura dati mutabile e si può modificare il contenuto di un oggetto dopo la sua creazione.

Impostazione di nuove chiavi in un oggetto

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

```sh
Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### Metodi della classe Object

Esistono diversi metodi per manipolare un oggetto. Vediamo alcuni dei metodi disponibili.

_Object.assign_: Per copiare un oggetto senza modificare l'oggetto originale.

```js
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```

#### Ottenere le chiavi con Object.keys()

_Object.keys_: Per ottenere le chiavi o le proprietà di un oggetto come array

```js
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
```

#### Ottenere i valori con Object.values()

_Object.values_:Per ottenere i valori di un oggetto come array

```js
const values = Object.values(copyPerson)
console.log(values)
```

#### Ottenere chiavi e valori con Object.entries()

_Object.entries_: Per ottenere le chiavi e i valori di un array

```js
const entries = Object.entries(copyPerson)
console.log(entries)
```

#### Controllare le proprietà usando hasOwnProperty()

_hasOwnProperty_: Per verificare se una chiave o una proprietà specifica esiste in un oggetto

```js
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```

🌕 Sei sorprendente. Ora sei super caricato con il potere degli oggetti. Hai appena completato le sfide dell'ottavo giorno e sei a 8 passi dalla tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## 💻 Esercizi

### Esercizi: Livello 1

1. Creare un oggetto vuoto chiamato cane
1. Stampare l'oggetto cane sulla console
1. Aggiungere all'oggetto cane le proprietà nome, zampe, colore, età e abbaio. La proprietà abbaia è un metodo che restituisce _woof woof_.
1. Ottenere il valore di nome, zampe, colore, età e abbaio dall'oggetto cane
1. Impostare nuove proprietà per l'oggetto cane: breed, getDogInfo

### Esercizi: Livello 2

1. Individuare la persona che ha molte competenze nell'oggetto utente.
1. Contare gli utenti connessi, contare gli utenti che hanno più di 50 punti dal seguente oggetto.

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

1. Trovare persone che sono sviluppatori di stack MERN dall'oggetto degli utenti
1. Impostare il proprio nome nell'oggetto utenti senza modificare l'oggetto utenti originale.
1. Ottenere tutte le chiavi o le proprietà dell'oggetto users
1. Ottenere tutti i valori dell'oggetto users
1. Utilizzare l'oggetto countries per stampare il nome di un paese, la capitale, la popolazione e le lingue.

### Esercizi: Livello 3

1. Creare un oggetto letterale chiamato _contopersona_. Ha le proprietà _nome, cognome, entrate, spese_ e i metodi _entrate totali, uscite totali, informazioni sul conto, aggiungi entrate, aggiungi spese_ e _bilancio del conto_. Entrate è un insieme di entrate e relativa descrizione e spese è un insieme di entrate e relativa descrizione.
2. **** Le domande:2, 3 e 4 si basano sui seguenti due array: utenti e prodotti ()

  ```js
      const users = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];

      const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  ```

  Si immagini di ottenere la raccolta di utenti di cui sopra da un database MongoDB.
    a. Creare una funzione chiamata signUp che consenta all'utente di aggiungersi all'insieme. Se l'utente esiste, informarlo che ha già un account.  
    b. Creare una funzione chiamata signIn che consenta all'utente di accedere all'applicazione.  

3. L'array prodotti ha tre elementi e ognuno di essi ha sei proprietà.
    a. Creare una funzione chiamata rateProduct che valuta il prodotto.
    b. Creare una funzione chiamata mediaValutazione che calcola la media delle valutazioni di un prodotto.  

4. Creare una funzione chiamata likeProduct. Questa funzione aiuta a dare un like al prodotto se non è piaciuto e a rimuovere il like se è piaciuto.


🎉 CONGRATULAZIONI ! 🎉

[<< Day 7](../07_Day_Functions/07_day_functions.md) | [Day 9 >>](../09_Day_Higher_order_functions/09_day_higher_order_functions.md)
