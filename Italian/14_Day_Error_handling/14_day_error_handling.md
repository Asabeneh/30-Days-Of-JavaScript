<div align="center">
  <h1> 30 Days Of JavaScript: Error handling</h1>
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

[<< Day 13](../13_Day_Console_object_methods/13_day_console_object_methods.md) | [Day 15>>](../15_Day_Classes/15_day_classes.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_14.png)

- [Day 14](#day-14)
	- [Gestione Errori](#error-handling)
		- [Tipi di Errore](#error-types)
	- [Esercizi](#exercises)
		- [Esercizi:Level 1](#exerciseslevel-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi:Level](#exerciseslevel)

# Day 14

## Gestione Errori

JavaScript è un linguaggio a tipizzazione libera. A volte si ottiene un errore di runtime quando si tenta di accedere a una variabile non definita o di chiamare una funzione non definita, ecc.

JavaScript, simile a Python o Java, fornisce un meccanismo di gestione degli errori per catturare gli errori di runtime utilizzando il blocco try-catch-finally.

```js
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
```

L'istruzione *try* ci permette di definire un blocco di codice che deve essere testato per verificare la presenza di errori durante l'esecuzione.

**catch**: scrivere il codice per fare qualcosa nel blocco catch quando si verifica un errore. Il blocco catch può avere dei parametri che forniscono informazioni sull'errore. Il blocco catch viene utilizzato per registrare un errore o per visualizzare messaggi specifici all'utente.

**finally**: il blocco finally viene sempre eseguito, indipendentemente dal verificarsi di un errore. Il blocco finally può essere usato per completare il compito rimanente o per resettare le variabili che potrebbero essere cambiate prima del verificarsi dell'errore nel blocco try.

**Esempio:**

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
```

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
In any case it  will be executed
```

Il blocco catch accetta un parametro. È comune passare e, err o error come parametro al blocco catch. Questo parametro è un oggetto e ha le chiavi name e message. Utilizziamo il nome e il messaggio.

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}
```

```sh
Name of the error ReferenceError
Error message fistName is not defined
In any case I will be executed
```

throw: l'istruzione throw consente di creare un errore personalizzato. Possiamo utilizzare una stringa, un numero, un booleano o un oggetto. Utilizzare l'istruzione throw per lanciare un'eccezione. Quando si lancia un'eccezione, l'espressione specifica il valore dell'eccezione. Ognuno dei seguenti comandi lancia un'eccezione:

```js
throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required
```

```js
const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()
```

### Tipi di Errore

- ReferenceError: Si è verificato un riferimento illegale. Un ReferenceError viene lanciato se si utilizza una variabile che non è stata dichiarata.

```js
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)
```

```sh
Uncaught ReferenceError: lastName is not defined
    at <anonymous>:2:35
```

- SyntaxError: Si è verificato un errore di sintassi

```js
let square = 2 x 2
console.log(square)

console.log('Hello, world")
```

```sh
Uncaught SyntaxError: Unexpected identifier
```

- TypeError: Si è verificato un errore di tipo

```js
let num = 10
console.log(num.toLowerCase())
```

```sh
Uncaught TypeError: num.toLowerCase is not a function
    at <anonymous>:2:17
```

Questi sono alcuni degli errori più comuni che si possono incontrare quando si scrive un codice. Capire gli errori può aiutarvi a capire quali sono gli errori commessi e vi aiuterà a eseguire il debug del codice in modo rapido.

🌕 Sei impeccabile. Ora sai come gestire gli errori e sei in grado di scrivere applicazioni robuste che gestiscono gli input inaspettati dell'utente. Hai appena completato le sfide del giorno 14 e sei a 14 passi dalla tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## Esercizi

### Esercizi:Level 1

Fai pratica

### Esercizi: Livello 2

Fai pratica

### Esercizi:Level

Fai pratica

🎉 CONGRATULAZIONI ! 🎉

[<< Day 13](../13_Day_Console_object_methods/13_day_console_object_methods.md) | [Day 15>>](../15_Day_Classes/15_day_classes.md)
