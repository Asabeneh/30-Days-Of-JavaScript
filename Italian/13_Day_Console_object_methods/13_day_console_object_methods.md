<div align="center">
  <h1> 30 Days Of JavaScript: Console Object Methods</h1>
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

[<< Day 12](../12_Day_Regular_expressions/12_day_regular_expressions.md) | [Day 14>>](../14_Day_Error_handling/14_day_error_handling.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_13.png)

- [Day 13](#day-13)
	- [Metodi Oggetto Console](#console-object-methods)
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
	- [Esercizi](#exercises)
		- [Esercizi:Level 1](#exerciseslevel-1)
		- [Esercizi:Level 2](#exerciseslevel-2)
		- [Esercizi:Level 3](#exerciseslevel-3)

# Day 13

## Metodi Oggetto Console

In questa sezione tratteremo i metodi della console e dell'oggetto console. I principianti assoluti di solito non sanno quale usare: console.log(), document.write() o document.getElementById.

Utilizziamo i metodi degli oggetti console per mostrare l'output sulla console del browser e document.write per mostrare l'output sul documento del browser (porta di visualizzazione). Entrambi i metodi sono utilizzati solo per scopi di test e debug. Il metodo console è lo strumento di test e debug più diffuso nel browser. Utilizziamo document.getElementById() quando vogliamo interagire con il DOM utilizzando JavaScript. Tratteremo il DOM in un'altra sezione.

Oltre al famoso metodo console.log(), la console fornisce altri metodi.

### console.log()

Usiamo console.log() per mostrare l'output sulla console del browser. Possiamo sostituire i valori e anche stilizzare il log con %c.

- Mostrare l'output sulla console del browser

```js
console.log('30 Days of JavaScript')
```

```sh
30 Days of JavaScript
```

- Substitution

```js
console.log('%d %s of JavaScript', 30, 'Days')
```

```sh
30 Days of JavaScript
```

- CSS

Possiamo stilizzare il messaggio di registrazione usando i css. Copiare il codice seguente e incollarlo nella console del browser per vedere il risultato.

```js
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text
```

### console.warn()

Utilizziamo console.warn() per fornire avvisi al browser. Per esempio, per informare o avvisare della deprecazione di una versione di un pacchetto o di cattive pratiche. Copiate il codice seguente e incollatelo nella console del browser per visualizzare i messaggi di avviso.

```js
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
```

### console.error()

Il metodo console.error() mostra un messaggio di errore.

```js
console.error('This is an error message')
console.error('We all make mistakes')
```

### console.table()

Il metodo console.table() visualizza i dati come tabella sulla console. Visualizza i dati in forma di tabella. Il metodo console.table() accetta un parametro obbligatorio, data, che deve essere un array o un oggetto, e un parametro opzionale aggiuntivo columns.

Cominciamo con un semplice array. Il codice seguente visualizza una tabella con due colonne. Una colonna indice per visualizzare l'indice e una colonna valore per visualizzare i nomi.

```js
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
```

Controlliamo anche il risultato di un oggetto. Si crea una tabella con due colonne: una colonna indice contenente le chiavi e una colonna valore contenente i valori dell'oggetto.

```js
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)
```

Verificate il resto degli esempi copiando e incollando sulla console del browser.

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)
```

```js
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
console.table(users)
```

### console.time()

Avvia un timer che può essere utilizzato per tenere traccia del tempo necessario per un'operazione. A ogni timer viene assegnato un nome univoco e si possono avere fino a 10.000 timer in esecuzione su una data pagina. Quando si chiama console.timeEnd() con lo stesso nome, il browser visualizza il tempo, in millisecondi, trascorso dall'avvio del timer.

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
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

Secondo l'output sopra riportato, il ciclo for regolare è più lento del ciclo for of o forEach.

### console.info()

Visualizza un messaggio informativo sulla console del browser.

```js
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
```

### console.assert()

Il metodo console.assert() scrive un messaggio di errore nella console se l'asserzione è falsa. Se l'asserzione è vera, non succede nulla. Il primo parametro è un'espressione di asserzione. Se questa espressione è falsa, viene visualizzato un messaggio di errore Asserzione fallita.

```js
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
```

### console.group()

Console.group() può aiutare a raggruppare diversi gruppi di log. Copiare il codice seguente e incollarlo nella console del browser per i gruppi.

```js
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()
```

### console.count()

Stampa il numero di volte in cui viene richiamato console.count(). Richiede un parametro stringa label. È molto utile per contare il numero di volte che una funzione viene chiamata. Nell'esempio seguente, il metodo console.count() verrà eseguito tre volte

```js
const func = () => {
  console.count('Function has been called')
}
func()
func()
func()
```

```sh
Function has been called: 1
Function has been called: 2
Function has been called: 3
```

### console.clear()

Console.clear() pulisce la console del browser.

🌕 Continua a lavorare bene. Continua a spingere, il cielo è il limite! Hai appena completato le sfide del 13° giorno e sei a 13 passi dalla tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## Esercizi

### Esercizi:Level 1

1.  Visualizzare l'array di paesi come tabella
2.  Visualizzare l'oggetto Paesi come tabella
3.  Usare console.group() per raggruppare i log.

### Esercizi:Livello 2

1. 10 > 2 \* 10 usare console.assert()
2. Scrivere un messaggio di avviso usando console.warn()
3. Scrivere un messaggio di errore usando console.error()

### Esercizi:Level 3

1. Verificare la differenza di velocità tra i seguenti cicli: while, for, for of, forEach

🎉 CONGRATULAZIONI ! 🎉

[<< Day 12](../12_Day_Regular_expressions/12_day_regular_expressions.md) | [Day 14>>](../14_Day_Error_handling/14_day_error_handling.md)
