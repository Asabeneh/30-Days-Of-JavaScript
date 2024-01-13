<div align="center">
  <h1> 30 Days Of JavaScript: Booleans, Operators, Date</h1>
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

[<< Day 2](../02_Day_Data_types/02_day_data_types.md) | [Day 4 >>](../04_Day_Conditionals/04_day_conditionals.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_3.png)

- [📔 Giorno 3](#-day-3)
	- [Booleans](#booleans)
		- [Valori Che Restituiscono True](#truthy-values)
		- [Valori Che Restituiscono False](#falsy-values)
	- [Undefined](#undefined)
	- [Null](#null)
	- [Operatori](#operators)
		- [Operatori di Assegnamento](#assignment-operators)
		- [Operatori Aritmetici](#arithmetic-operators)
		- [Operatori di Confronto](#comparison-operators)
		- [Operatori Logici](#logical-operators)
		- [Operatore d'Incremento](#increment-operator)
		- [Operatore di Decremento](#decrement-operator)
		- [Operatori Ternari](#ternary-operators)
		- [Precedenza dell'Operatore](#operator-precedence)
	- [Metodi delle finestre (Window)](#window-methods)
		- [Window alert()](#window-alert-method)
		- [Window prompt()](#window-prompt-method)
		- [Window confirm()](#window-confirm-method)
	- [Oggetto Date](#date-object)
		- [Creare un oggetto data (time)](#creating-a-time-object)
		- [Ottenere Valore Anno](#getting-full-year)
		- [Ottenere Valore mese](#getting-month)
		- [Ottenere Valore data](#getting-date)
		- [Ottenere Valore giorno](#getting-day)
		- [Ottenere Valore ora](#getting-hours)
		- [Ottenere Valore minuto](#getting-minutes)
		- [Ottenere Valore secondo](#getting-seconds)
		- [Ottenere Valore tempo](#getting-time)
	- [💻 Day 3: Esercizi](#-day-3-exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# 📔 Giorno 3

## Booleans

Un tipo di dati booleano rappresenta uno dei due valori: _true_ o _false_. Il valore booleano è o vero o falso. L'uso di questi tipi di dati sarà chiaro quando si inizierà a utilizzare l'operatore di confronto. Qualsiasi confronto restituisce un valore booleano che può essere vero o falso.

**Esempio: Valori Boolean**

```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
```

Abbiamo concordato che i valori booleani sono veri o falsi.

### Valori Che Resituiscono True

- Tutti i numeri (positivi e negativi) sono veri, tranne lo zero.
- Tutte le stringhe sono vere, tranne una stringa vuota ('')
- Il boolean true

### Valori Che Resituiscono False

- 0
- 0n
- null
- undefined
- NaN
- il boolean false
- '', "", ``, empty string

È bene ricordare questi valori veri e falsi. Nella sezione successiva, li useremo con le condizioni per prendere decisioni.

## Undefined

Se dichiariamo una variabile e non le assegniamo un valore, il valore sarà indefinito. Inoltre, se una funzione non restituisce il valore, sarà undefined.

```js
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet
```

## Null

```js
let empty = null
console.log(empty) // -> null , means no value
```

## Operatori

### Operatori di Assegnamento

An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

```js
let firstName = 'Asabeneh'
let country = 'Finland'
```

Operatori di Assegnamento

![Operatori di Assegnamento](../../images/assignment_operators.png)

### Operatori Aritmetici

Gli operatori aritmetici sono operatori matematici.

- Addizione(+): a + b
- Sottrazione(-): a - b
- Moltiplicazione(*): a * b
- Divisione(/): a / b
- Modulo(%): a % b
- Esponenziale(**): a ** b

```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

```

```js
const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)
```

### Operatori di Confronto

Nella programmazione si confrontano i valori, utilizzando gli operatori di confronto per confrontare due valori. Controlliamo se un valore è maggiore o minore o uguale a un altro valore.

![Operatori di Confronto](../../images/comparison_operators.png)
**Esempio: Operatori di Confronto**

```js
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

Cerca di capire i confronti di cui sopra con un po' di logica. Ricorda, senza alcuna logica potrebbe essere difficile.
JavaScript è in qualche modo un linguaggio di programmazione cablato. Il codice JavaScript viene eseguito e fornisce un risultato, ma se non si è attenti, potrebbe non essere il risultato desiderato.

Come regola generale, se un valore non è vero con ==, non sarà uguale con ===. L'uso di === è più sicuro di quello di ==. Il seguente [link](https://dorey.github.io/JavaScript-Equality-Table/) contiene un elenco esaustivo di confronti tra tipi di dati.


### Operatori Logici

I seguenti simboli sono gli operatori logici comuni:
&& (ampersand), || (pipe) e ! (negazione).
L'operatore && diventa vero solo se i due operandi sono veri.
L'operatore || diventa vero se entrambi gli operandi sono veri.
L'operatore ! nega il vero al falso e il falso al vero.

```js
// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
```

### Operatore d'Incremento

In JavaScript si usa l'operatore di incremento per aumentare un valore memorizzato in una variabile. L'incremento può essere pre o post incremento. Vediamo i due tipi di incremento:

1. Pre-increment

```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```

1. Post-increment

```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```

Nella maggior parte dei casi utilizziamo l'operatore post-incremento. Dovreste almeno ricordare come si usa l'operatore post-incremento.

### Operatore di Decremento

In JavaScript si usa l'operatore decremento per diminuire un valore memorizzato in una variabile. Il decremento può essere pre o post decremento. Vediamo ciascuno di essi:

1. Pre-decremento

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Post-decremento

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Operatori Ternari

L'operatore ternario permette di scrivere una condizione.
Un altro modo per scrivere le condizioni è utilizzare gli operatori ternari. Guardate i seguenti esempi:

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

```sh
You need a rain coat.
No need for a rain coat.
```

```js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
```

```sh
5 is a positive number
-5 is a negative number
```

### Precedenza dell'Operatore

Vorrei raccomandare di leggere le informazioni sulla precedenza degli operatori da questo documento [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Metodi delle finestre (Window)

### Window alert()

Come si è visto all'inizio, il metodo alert() visualizza una casella di avviso con un messaggio specificato e un pulsante OK. Si tratta di un metodo integrato che richiede un solo argomento.

```js
alert(message)
```

```js
alert('Welcome to 30DaysOfJavaScript')
```

Non utilizzare un'allerta eccessiva perché è distruttiva e fastidiosa, usarla solo per fare delle prove.

### Window prompt()

I metodi di prompt della finestra visualizzano una casella di prompt con un input sul browser per accettare valori di input e i dati di input possono essere memorizzati in una variabile. Il metodo prompt() accetta due argomenti. Il secondo argomento è opzionale.

```js
prompt('required text', 'optional text')
```

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window confirm()

Il metodo confirm() visualizza una finestra di dialogo con un messaggio specificato, insieme a un pulsante OK e uno Cancel.
Una finestra di conferma viene spesso utilizzata per chiedere all'utente il permesso di eseguire qualcosa. La finestra confirm() accetta come argomento una stringa.
Facendo clic sul pulsante OK si ottiene il valore vero, mentre facendo clic sul pulsante Annulla si ottiene il valore falso.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
```

Questi non sono tutti i metodi delle finestre, ma avremo una sezione separata per approfondire i metodi delle finestre.

## Oggetto Date

Il tempo è una cosa importante. Vogliamo conoscere l'ora di una certa attività o evento. In JavaScript l'ora e la data corrente vengono create utilizzando l'oggetto Date di JavaScript. L'oggetto Date fornisce molti metodi per lavorare con la data e l'ora. I metodi che utilizziamo per ottenere informazioni sulla data e sull'ora dai valori di un oggetto Date iniziano con la parola _get_ perché forniscono le informazioni.
getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

![Date time Object](../../images/date_time_object.png)

### Creare un oggetto data (time)

Una volta creato l'oggetto time. L'oggetto time fornirà informazioni sul tempo. Creiamo un oggetto time

```js
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

Abbiamo creato un oggetto tempo e possiamo accedere a qualsiasi informazione data e ora dall'oggetto, utilizzando i metodi get che abbiamo menzionato nella tabella.

### Ottenere Valore Anno

Estraiamo o otteniamo l'intero anno da un oggetto temporale.

```js
const now = new Date()
console.log(now.getFullYear()) // 2020
```

### Ottenere Valore mese

Estraiamo o otteniamo il mese da un oggetto temporale.

```js
const now = new Date()
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
```

### Ottenere Valore data

Estraiamo o otteniamo la data del mese da un oggetto temporale.

```js
const now = new Date()
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
```

### Ottenere Valore giorno

Estraiamo o otteniamo il giorno della settimana da un oggetto orario.

```js
const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
```

### Ottenere Valore ora

Estraiamo o otteniamo le ore da un oggetto tempo.

```js
const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41
```

### Ottenere Valore minuto

Estraiamo o otteniamo i minuti da un oggetto temporale.

```js
const now = new Date()
console.log(now.getMinutes()) // 56, because the time is 00:56:41
```

### Ottenere Valore secondo

Estraiamo o otteniamo i secondi da un oggetto tempo.

```js
const now = new Date()
console.log(now.getSeconds()) // 41, because the time is 00:56:41
```

### Ottenere Valore tempo

Questo metodo fornisce il tempo in millisecondi a partire dal 1° gennaio 1970. È anche noto come tempo Unix. È possibile ottenere l'ora Unix in due modi:

1. Usare _getTime()_

```js
const now = new Date() //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
```

1. Usare _Date.now()_

```js
const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Formattiamo questi valori in un formato orario leggibile dall'uomo.
**Esempio:**

```js
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
```

🌕  Hai un'energia sconfinata. Hai appena completato le sfide del terzo giorno e sei a tre passi dalla strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## 💻 Day 3: Esercizi

### Esercizi: Livello 1

1. Dichiarate le variabili firstName, lastName, country, city, age, isMarried, year e assegnategli un valore; utilizzate l'operatore typeof per verificare i diversi tipi di dati.
2. Verificare se il tipo di '10' è uguale a 10.
3. Verificare se parseInt('9.8') è uguale a 10
4. Il valore booleano è vero o falso.
   1. Scrivete tre istruzioni JavaScript che forniscano un valore vero.
   2. Scrivete tre istruzioni JavaScript che forniscono un valore falso.

5. Scoprite il risultato della seguente espressione di confronto senza usare console.log(). Dopo aver deciso il risultato, confermatelo usando console.log().
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Trovate la lunghezza di pitone e gergo e fate una dichiarazione di confronto falsificata.

6. Scoprite il risultato delle seguenti espressioni senza usare console.log(). Dopo aver deciso il risultato, confermatelo utilizzando console.log().
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(falso)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. Non c'è nessun 'on' sia in dragon che in python.

7. Utilizzate l'oggetto Date per svolgere le seguenti attività
   1. Qual è l'anno oggi?
   2. Qual è il mese di oggi come numero?
   3. Qual è la data di oggi?
   4. Qual è il giorno di oggi come numero?
   5. Qual è l'ora attuale?
   6. A quanto ammontano i minuti?
   7. Trovare il numero di secondi trascorsi dal 1° gennaio 1970 a oggi.

### Esercizi: Livello 2

1. Scrivere uno script che richieda all'utente di inserire base e altezza del triangolo e di calcolare l'area di un triangolo (area = 0,5 x b x h).

   ```sh
   Inserire base: 20
   Inserire l'altezza: 10
   L'area del triangolo è 100
   ```

1. Scrivete uno script che richieda all'utente di inserire il lato a, il lato b e il lato c del triangolo e che calcoli il perimetro del triangolo (perimetro = a + b + c)

   ```sh
   Inserire il lato a: 5
   Inserire il lato b: 4
   Inserire il lato c: 3
   Il perimetro del triangolo è 12
   ```

1. Ottenete la lunghezza e la larghezza utilizzando il prompt e calcolate l'area del rettangolo (area = lunghezza x larghezza e il perimetro del rettangolo (perimetro = 2 x (lunghezza + larghezza)).
1. Ottenere il raggio utilizzando il prompt e calcolare l'area di un cerchio (area = pi x r x r) e la circonferenza di un cerchio (c = 2 x pi x r) dove pi = 3,14.
1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
1. Compare the slope of above two questions.
1. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

1. If the length of your name is greater than 7 say, your name is long else say your name is short.
1. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Il tuo nome, Asabeneh, è più lungo del tuo cognome, Yetayeh
    ```

1. Dichiarare due variabili _myAge_ e _yourAge_ e assegnare loro i valori iniziali myAge e yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   Ho 225 anni più di te.
   ```

1. Utilizzando il prompt, ottenete l'anno di nascita dell'utente e se l'utente ha 18 anni o più consentitegli di guidare, altrimenti ditegli di aspettare un certo numero di anni.

    ```sh

    Inserire l'anno di nascita: 1995
    Hai 25 anni. Sei abbastanza grande per guidare

    Inserisci l'anno di nascita: 2005
    Hai 15 anni. Potrai guidare dopo 3 anni.
    ```

1. Scrivere uno script che richieda all'utente di inserire il numero di anni. Calcolare il numero di secondi che una persona può vivere. Supponiamo che una persona viva solo cento anni

   ```sh
   Inserisci il numero di anni che vivi: 100
   Hai vissuto 3153600000 secondi.
   ```

1. Creare un formato di tempo leggibile dall'uomo utilizzando l'oggetto Date time
   1. AAAA-MM-GG HH:mm
   2. GG-MM-AAAA HH:mm
   3. GG/MM/AAAA HH:mm

### Esercizi: Livello 3

1. Creare un formato orario leggibile dall'uomo utilizzando l'oggetto Date time. L'ora e i minuti devono essere sempre a due cifre (7 ore devono essere 07 e 5 minuti devono essere 05).
   1. YYY-MM-DD HH:mm es. 20120-01-02 07:05

[<< Day 2](../02_Day_Data_types/02_day_data_types.md) | [Day 4 >>](../04_Day_Conditionals/04_day_conditionals.md)
