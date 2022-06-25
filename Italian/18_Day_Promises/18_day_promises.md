<div align="center">
  <h1> 30 Days Of JavaScript: Promises</h1>
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

[<< Day 17](../17_Day_Web_storages/17_day_web_storages.md) | [Day 19>>](../19_Day_Closures/19_day_closures.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_18.png)

- [Day 18](#day-18)
	- [Promise](#promise)
	- [Callbacks](#callbacks)
		- [Costruttore Promise](#promise-constructor)
	- [Fetch API](#fetch-api)
	- [Async and Await](#async-and-await)
	- [Esercizi](#exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# Day 18

## Promise

Noi esseri umani facciamo o riceviamo la promessa di svolgere un'attività in un determinato momento. Se manteniamo la promessa, rendiamo felici gli altri, ma se non la manteniamo, possiamo essere scontenti. La promessa in JavaScript ha qualcosa in comune con gli esempi precedenti.

Una promessa è un modo per gestire operazioni asincrone in JavaScript. Permette ai gestori di avere un valore di successo o un motivo di fallimento di un'azione asincrona. Ciò consente ai metodi asincroni di restituire valori come i metodi sincroni: invece di restituire immediatamente il valore finale, il metodo asincrono restituisce una promessa di fornire il valore in un momento futuro.

Una promessa si trova in uno di questi stati:

- pending: stato iniziale, né soddisfatto né rifiutato.
- soddisfatta: significa che l'operazione è stata completata con successo.
- rifiutata: significa che l'operazione è fallita.

Una promessa in sospeso può essere soddisfatta con un valore o rifiutata con un motivo (errore). Quando si verifica una di queste opzioni, vengono richiamati i gestori associati messi in coda dal metodo then di una promessa. (Se la promessa è già stata soddisfatta o rifiutata quando viene collegato un gestore corrispondente, il gestore verrà chiamato, in modo che non ci sia una condizione di gara tra il completamento di un'operazione asincrona e il collegamento dei suoi gestori).

Poiché i metodi Promise.prototype.then() e Promise.prototype.catch() restituiscono promesse, possono essere concatenati.

## Callbacks

Per comprendere bene la promise, dobbiamo prima capire le callback. Vediamo le seguenti callback. Dai seguenti blocchi di codice si noterà la differenza tra callback e promise.

- callback
  Vediamo una funzione di callback che può accettare due parametri. Il primo parametro è err e il secondo è result. Se il parametro err è false, non ci sarà alcun errore, altrimenti restituirà un errore.

In questo caso err ha un valore e restituirà il blocco err.

```js
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
```

```sh
// after 2 seconds it will print
It did not go well
```

In questo caso l'errore è falso e restituirà il blocco else che è il risultato.

```js
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})
```

```sh
// after 2 seconds it will print the skills
["HTML", "CSS", "JS"]
```

### Costruttore Promise

Possiamo creare una promessa utilizzando il costruttore Promise. Possiamo creare una nuova promessa usando la parola chiave `new` seguita dalla parola `Promise` e seguita da una parentesi. All'interno della parentesi, prende una funzione `callback`. La funzione di callback della promessa ha due parametri, che sono le funzioni _`resolve`_ e _`reject`_.

```js
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
```

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
```

```sh
["HTML", "CSS", "JS"]
```

La promessa di cui sopra è stata risolta con resolve.
Facciamo un altro esempio quando la promessa viene risolta con un rifiuto.

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
```

```sh
Something wrong has happened
```

## Fetch API

L'API Fetch fornisce un'interfaccia per il recupero di risorse (anche attraverso la rete). Sembrerà familiare a chiunque abbia usato XMLHttpRequest, ma la nuova API fornisce un insieme di funzionalità più potenti e flessibili. In questa sfida useremo fetch per richiedere url e APIS. Inoltre, vedremo un caso d'uso dimostrativo delle promesse per accedere alle risorse di rete utilizzando l'API fetch.

```js
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
```

## Async and Await

Async e await sono un modo elegante di gestire le promesse. È facile da capire e pulito da scrivere.

```js
const square = async function (n) {
  return n * n
}

square(2)
```

```sh
Promise {<resolved>: 4}
```

La parola _async_ davanti a una funzione significa che la funzione restituirà una promessa. La funzione quadrata di cui sopra, invece di un valore, restituisce una promessa.

Come si accede al valore della promessa? Per accedere al valore della promessa, utilizzeremo la parola chiave _await_.

```js
const square = async function (n) {
  return n * n
}
const value = await square(2)
console.log(value)
```

```sh
4
```

Ora, come si può vedere dall'esempio precedente, scrivendo async davanti a una funzione si crea una promessa e per ottenere il valore da una promessa si usa await. Async e await vanno insieme, uno non può esistere senza l'altro.

Cerchiamo di recuperare i dati dell'API utilizzando sia il metodo promise che i metodi async e await.

- promise

```js
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

- async and await

```js
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()
```

🌕 Sei reale, hai mantenuto la tua promessa e sei arrivato al 18° giorno. Mantieni la tua promessa e affronta la sfida con determinazione. Sei 18 passi avanti verso la tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e i muscoli.

## Esercizi

```js
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

### Esercizi: Livello 1

1. Leggere le API dei paesi utilizzando fetch e stampare il nome del paese, la capitale, le lingue, la popolazione e l'area.

### Esercizi: Livello 2

1. Stampare tutti i nomi dei gatti nella variabile catNames.

### Esercizi: Livello 3

1. Leggere l'api gatti e trovare il peso medio dei gatti in unità metriche.
2. Leggete l'api dei Paesi e trovate i 10 Paesi più grandi.
3. Leggete l'api dei Paesi e contate il numero totale di lingue del mondo usate come ufficiali.

🎉 CONGRATULAZIONI ! 🎉

[<< Day 17](../17_Day_Web_storages/17_day_web_storages.md) | [Day 19>>](../19_Day_Closures/19_day_closures.md)
