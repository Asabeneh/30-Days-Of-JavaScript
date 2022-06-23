<div align="center">
  <h1> 30 Days Of JavaScript: Writing Clean Codes</h1>
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

[<< Day 19](../19_Day_Closuers/19_day_closures.md) | [Day 21 >>](../21_Day_DOM/21_day_dom.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_20.png)
- [Day 20](#day-20)
	- [Scrivere codice pulito](#writing-clean-code)
		- [Guida allo stile in JavaScript](#javascript-style-guide)
		- [Perché abbiamo bisogno di uno stile](#why-we-need-style-guide)
			- [Guida allo stile Airbnb](#airbnb-javascript-style-guide)
			- [Guida allo stile Standard JavaScript](#standard-javascript-style-guide)
			- [Guida allo stile Google](#google-javascript-style-guide)
		- [Convenzioni del codice JavaScript](#javascript-coding-conventions)
			- [Convenzioni usate in 30DaysOfJavaScript](#conventions-use-in-30daysofjavascript)
			- [Variables](#variables)
			- [Arrays](#arrays)
			- [Functions](#functions)
			- [Loops](#loops)
			- [Objects](#objects)
			- [Conditional](#conditional)
			- [Classes](#classes)

# Day 20

## Scrivere codice pulito

### Guida allo stile in JavaScript

Una guida di stile JavaScript è un insieme di standard che indica come il codice JavaScript dovrebbe essere scritto e organizzato. In questa sezione parleremo delle guide JavaScript e di come scrivere un codice pulito.

JavaScript è un linguaggio di programmazione e, come i linguaggi umani, ha una sintassi. La sintassi di JavaScript deve essere scritta seguendo una certa linea guida di stile, per motivi di convinzione e semplicità.

### Perché abbiamo bisogno di uno stile

Avete codificato da soli per tanto tempo, ma ora sembra che dobbiate lavorare in team. Non importa in che modo scriviate il codice, purché funzioni, ma quando lavorate in un team di 10 o 20 o più sviluppatori su un progetto e sullo stesso codice base, il codice sarà disordinato e difficile da gestire se non ci sono linee guida da seguire.

È possibile sviluppare linee guida e convenzioni proprie o adattare linee guida ben sviluppate. Vediamo le linee guida più comuni.
Guida allo stile più comune in JavaScript

- Guida allo stile Airbnb
- Guida allo stile standard di JavaScript
- Guida allo stile Google

#### Guida allo stile Airbnb

Airbnb ha una delle guide di stile JavaScript più popolari su Internet. Copre quasi tutti gli aspetti di JavaScript ed è adottata da molti sviluppatori e aziende. Potete consultare la [Guida allo stile di Airbnb](https://github.com/airbnb/javascript). Vi consiglio di provarla. Il loro stile è molto facile da usare e semplice da capire.

#### Guida allo stile Standard JavaScript

Questa linea guida non è così popolare come Airbnb, ma vale la pena guardarla. Hanno rimosso il punto e virgola nel loro [style guide](https://standardjs.com/).

#### Guida allo stile Google

Non parlo molto delle linee guida di Google e non le ho usate, piuttosto vi suggerisco di dare un'occhiata a questo sito. [link](https://google.github.io/styleguide/jsguide.html).

### Convenzioni del codice JavaScript

Anche in questa sfida abbiamo utilizzato le convenzioni e le guide generali di scrittura di JavaScript. Le convenzioni di codifica sono linee guida di stile per la programmazione sviluppate da un individuo, un team o un'azienda.

Le convenzioni di codifica aiutano a

- scrivere codice pulito
- migliorare la leggibilità del codice
- migliorare la riutilizzabilità e la manutenibilità del codice

Le convenzioni di codifica comprendono

- Regole di denominazione e dichiarazione per le variabili
- Regole di denominazione e dichiarazione per le funzioni
- Regole per l'uso degli spazi bianchi, dell'indentazione e dei commenti.
- Pratiche e principi di programmazione

#### Convenzioni usate in 30DaysOfJavaScript

In questa sfida abbiamo seguito le normali convenzioni di JavaScript, ma ho aggiunto anche le mie preferenze di scrittura. 

- Abbiamo usato il camelCase per le variabili e le funzioni.
- Tutti i nomi delle variabili iniziano con una lettera.
- Abbiamo scelto di usare *const* per costanti, array, oggetti e funzioni. Al posto delle doppie virgolette, abbiamo scelto di usare le virgolette singole o il backtick. Le virgolette singole stanno diventando di moda.
- Abbiamo anche eliminato i punti e virgola dal nostro codice, ma è una questione di preferenze personali.
- Spazio intorno agli operatori aritmetici, agli operatori di assegnazione e dopo la virgola.
- Freccia di funzione invece di dichiarazione di funzione
- Ritorno esplicito invece di ritorno implicito se la funzione è one liner
- Nessuna virgola nell'ultimo valore di un oggetto.
- Preferiamo questi +=, -=, *= /=, **= invece della versione più lunga
- Quando si usa console.log() è bene stampare con una stringa di tag per identificare da dove proviene la console

#### Variables

```js

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'

const PI = Math.PI
const gravity = 9.81
```

#### Arrays

Abbiamo scelto di rendere i nomi degli array plurali

- names
- numbers
- countries
- languages
- skills
- fruits
- vegetables

```js
// arrays
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
```

#### Functions

Ormai conoscete bene la dichiarazione di funzione, la funzione espressione, la funzione freccia e la funzione anonima. In questa sfida tendiamo a usare la funzione freccia invece di altre funzioni. La funzione freccia non sostituisce le altre funzioni. Inoltre, le funzioni freccia e le dichiarazioni di funzione non sono esattamente la stessa cosa. È quindi necessario sapere quando usarle e quando no. Tratterò la differenza in dettaglio in altre sezioni. Utilizzeremo il ritorno esplicito al posto di quello implicito se la funzione è una sola riga.

```js
// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function which calculates a square of a number
const square = (n) => n * n

// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

// a function which shows date and time
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}
```

Il metodo `new Dat().toLocaleString()` può essere utilizzato anche per visualizzare l'ora della data corrente. I metodi `toLocaleString()` accettano diversi argomenti. Per saperne di più sulla data e sull'ora, consultare questo documento [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

#### Loops

In questa sfida copriamo molti tipi di loop. I normali cicli for, while, do while, for of, forEach e for in.
Vediamo come utilizzarli:

```js
for (let i = 0; i < n; i++){
    console.log()
}

// declaring an array variable
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}


// iterating an array using for of
for( const name of names) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names.forEach((name) => name.toUpperCase())


const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
for(const key in person) {
    console.log(key)
}

```

#### Objects

Dichiariamo gli oggetti letterali con *const*.

```js
// declaring object literal
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
// iterating through object keys
for(const key in person) {
    console.log(key, person[key])
}

```

#### Conditional

 Nelle sfide precedenti abbiamo parlato di operatori if, if else, if else, switch e ternari.

 ```js
 // syntax
if (condition) {
  // this part of code run for truthy condition
} else {
  // this part of code run for false condition
}
 ```

 ```js
 // if else
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number
 ```

 ```js
 // if else if else if else

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
 ```

 ```js
 // Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
 ```

 ```js
 // ternary

 let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
 ```

#### Classes

Dichiariamo la classe con CamelCase, che inizia con la lettera maiuscola.

```js
// syntax
class ClassName {
    // code goes here
}
```

```js
// defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

```

Qualunque sia la guida di stile che seguite, siate coerenti. Seguite alcuni paradigmi di programmazione e modelli di progettazione. Ricordate che se non scrivete il codice in un certo ordine o modo, sarà difficile leggerlo. Quindi, fate un favore a voi stessi o a chi leggerà il vostro codice scrivendo codice leggibile.

🌕 Sei ordinato. Ora, sapete come scrivere codice pulito, quindi chiunque conosca la lingua inglese può capire il tuo codice.  Sei sempre in progresso e sei a 20 passi verso la grandezza.

🎉 CONGRATULAZIONI ! 🎉

[<< Day 19](../19_Day_Closuers/19_day_closures.md) | [Day 21 >>](../21_Day_DOM/21_day_dom.md)
