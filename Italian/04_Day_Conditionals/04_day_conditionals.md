<div align="center">
  <h1> 30 Days Of JavaScript: Condizionali</h1>
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

[<< Day 3](../03_Day_Booleans_operators_date/03_booleans_operators_date.md) | [Day 5 >>](../05_Day_Arrays/05_day_arrays.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_4.png)

- [📔 Giorno 4](#-day-4)
	- [Condizionali](#conditionals)
		- [If](#if)
		- [If Else](#if-else)
		- [If  Else if Else](#if--else-if-else)
		- [Switch](#switch)
		- [Operatori Ternari](#ternary-operators)
	- [💻 Esercizi](#-exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# 📔 Giorno 4

## Condizionali

Le istruzioni condizionali sono utilizzate per prendere decisioni in base a diverse condizioni.
Per impostazione predefinita, le istruzioni negli script JavaScript vengono eseguite in sequenza dall'alto verso il basso. Se la logica di elaborazione lo richiede, il flusso sequenziale di esecuzione può essere modificato in due modi:

- Esecuzione condizionale: un blocco di una o più istruzioni viene eseguito se una certa espressione è vera.
- Esecuzione ripetitiva: un blocco di una o più istruzioni verrà eseguito ripetutamente finché una certa espressione sarà vera. In questa sezione tratteremo gli enunciati _if_, _else_, _else if_. Gli operatori di confronto e logici appresi nelle sezioni precedenti saranno utili in questa sede.

Le condizioni possono essere implementate nei seguenti modi:

- if
- if else
- if else if else
- switch
- ternary operator

### If

In JavaScript e in altri linguaggi di programmazione la parola chiave _if_ serve a verificare se una condizione è vera e a eseguire il blocco di codice. Per creare una condizione if, abbiamo bisogno della parola chiave _if_, della condizione all'interno di una parentesi e del blocco di codice all'interno di una parentesi graffa ({}).

```js
// syntax
if (condition) {
  //this part of code runs for truthy condition
}
```

**Esempio:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number
```

Come si può vedere nell'esempio di condizione precedente, 3 è maggiore di 0, quindi è un numero positivo. La condizione era vera e il blocco di codice è stato eseguito. Tuttavia, se la condizione è falsa, non si vedrà alcun risultato.

```js
let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}
```

 Lo stesso vale per la seconda condizione: se isRaining è false, il blocco if non verrà eseguito e non vedremo alcun output. Per vedere il risultato di una condizione falsa, dovremmo avere un altro blocco, che sarà _else_.

### If Else

Se la condizione è vera, viene eseguito il primo blocco, altrimenti viene eseguita la condizione else.

```js
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number
```

```js
let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.
```

L'ultima condizione è falsa, quindi il blocco else è stato eseguito. Cosa succede se abbiamo più di due condizioni? In questo caso, utilizzeremo le condizioni *else if*.

### If  Else if Else

Nella nostra vita quotidiana prendiamo decisioni su base giornaliera. Le decisioni non vengono prese verificando una o due condizioni, ma sulla base di più condizioni. Come la nostra vita quotidiana, anche la programmazione è piena di condizioni. Usiamo *else if* quando abbiamo più condizioni.

```js
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```

**Esempio:**

```js
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
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}
```

### Switch

Switch è un'alternativa a **if else if else**.
L'istruzione switch inizia con la parola chiave *switch* seguita da una parentesi e da un blocco di codice. All'interno del blocco di codice avremo diversi casi. Il blocco Case viene eseguito se il valore nella parentesi dell'istruzione switch corrisponde al valore del caso. L'istruzione break serve a terminare l'esecuzione, in modo che l'esecuzione del codice non venga interrotta dopo che la condizione è stata soddisfatta.  Il blocco default viene eseguito se tutti i casi non soddisfano la condizione.

```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
```

```js
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

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

// Esempi di utilizzo delle condizioni nei casi

```js
let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}
```

### Operatori Ternari

Un altro modo di scrivere i condizionali è quello di utilizzare gli operatori ternari. Ne abbiamo parlato in altre sezioni, ma è bene menzionarlo anche qui.

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

🌕  sei straordinario e hai un potenziale notevole. Hai appena completato le sfide del quarto giorno e sei quattro passi avanti sulla strada della grandezza. Ora fai qualche esercizio per il cervello e i muscoli.  

## 💻 Esercizi

### Esercizi: Livello 1

1. Ottenere l'input dell'utente tramite prompt("Inserisci la tua età:"). Se l'utente ha 18 anni o più, fornisce il feedback: "Sei abbastanza grande per guidare", ma se non ha 18 anni, fornisce un altro feedback che indica di aspettare il numero di anni necessari per compierli.

   ```sh
   Inserisci la tua età: 30
   Sei abbastanza grande per guidare.

   Inserisci la tua età: 15
   Ti restano 3 anni per guidare.
   ```

1. Confrontare i valori di myAge e yourAge usando if ... else. Basarsi sul confronto e registrare il risultato nella console, indicando chi è più vecchio (io o tu). Utilizzare prompt("Inserisci la tua età:") per ottenere l'età come input.

   ```sh
   Inserisci la tua età: 30
   Sei più vecchio di me di 5 anni.
   ```

1. Se a è maggiore di b restituisce 'a è maggiore di b' altrimenti 'a è minore di b'. Provate a implementarlo in diversi modi

    - usando if else
    - l'operatore ternario.

    ```js
      lasciare a = 4
      lasciare che b = 3
    ```

    ``sh
      4 è maggiore di 3
    ```

1. I numeri pari sono divisibili per 2 e il resto è zero. Come si fa a verificare se un numero è pari o no usando JavaScript?

    ```sh
    Inserite un numero: 2
    2 è un numero pari

    Inserite un numero: 9
    9 è un numero dispari.
    ```

### Esercizi: Livello 2

1. Scrivere un codice in grado di dare voti agli studenti in base ai loro punteggi:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
1. Controllare se la stagione è autunno, inverno, primavera o estate.
   Se l'input dell'utente è :
   - Settembre, Ottobre o Novembre, la stagione è Autunno.
   - Dicembre, gennaio o febbraio, la stagione è Inverno.
   - Marzo, aprile o maggio, la stagione è la primavera.
   - Giugno, luglio o agosto, la stagione è l'estate.
1. Controllare se un giorno è un giorno del fine settimana o un giorno lavorativo. Il vostro script prenderà il giorno come input.

```sh
    Che giorno è oggi? Sabato
    Sabato è un fine settimana.

    Che giorno è oggi? sabato
    Sabato è un fine settimana.

    Che giorno è oggi? venerdì
    Venerdì è un giorno lavorativo.

    Che giorno è oggi? venerdì
    Venerdì è un giorno lavorativo.
  ```

### Esercizi: Livello 3

1. Scrivere un programma che indichi il numero di giorni in un mese.

  ```sh
    Inserire un mese: Gennaio
    Gennaio ha 31 giorni.

    Inserire un mese: GENNAIO
    Gennaio ha 31 giorni

    Inserire un mese: Febbraio
    Febbraio ha 28 giorni.

    Inserire un mese: FEBBRAIO
    Febbraio ha 28 giorni.
  ```

1. Scrivere un programma che indichi il numero di giorni in un mese, considerando l'anno bisestile.


🎉 CONGRATULAZIONI ! 🎉

[<< Day 3](../03_Day_Booleans_operators_date/03_booleans_operators_date.md) | [Day 5 >>](../05_Day_Arrays/05_day_arrays.md)
