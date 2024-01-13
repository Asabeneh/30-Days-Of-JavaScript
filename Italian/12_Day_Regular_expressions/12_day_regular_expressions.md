<div align="center">
  <h1> 30 Days Of JavaScript: Regular Expressions</h1>
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

[<< Day 11](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md) | [Day 13>>](../13_Day_Console_object_methods/13_day_console_object_methods.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_12.png)

- [📘 Day 12](#-day-12)
	- [Espressioni Regolari](#regular-expressions)
		- [Parameteri RegExp](#regexp-parameters)
			- [Pattern](#pattern)
			- [Flags](#flags)
		- [Creare un pattern con il costruttore RegExp](#creating-a-pattern-with-regexp-constructor)
		- [Creare un pattern senza il costruttore RegExp](#creating-a-pattern-without-regexp-constructor)
		- [Metodi dell'oggetto RegExp](#regexpp-object-methods)
			- [Testing per un match](#testing-for--a-match)
			- [Array contenente tutto il match](#array-containing-all-of-the-match)
			- [Sostituire una substring](#replacing-a-substring)
		- [Square Bracket (parentesi quadra)](#square-bracket)
		- [Escape character(\\) in RegExp](#escape-character-in-regexp)
		- [Uno o più volte(+)](#one-or-more-times)
		- [Period(.)](#period)
		- [Zero o più volte(*)](#zero-or-more-times)
		- [Zero oppure una volta(?)](#zero-or-one-times)
		- [Quantifier in RegExp](#quantifier-in-regexp)
		- [Cart ^](#cart-)
		- [Match esatto](#exact-match)
	- [💻 Esercizi](#-exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# 📘 Day 12

## Espressioni Regolari

Un'espressione regolare o RegExp è un piccolo linguaggio di programmazione che aiuta a trovare modelli nei dati. Una RegExp può essere usata per verificare se un certo modello esiste in diversi tipi di dati. Per usare le RegExp in JavaScript si può usare il costruttore RegExp oppure si può dichiarare un modello RegExp usando due barre in avanti seguite da un flag. Possiamo creare un modello in due modi.

Per dichiarare una stringa si usano una virgoletta singola, una doppia virgoletta e un backtick, mentre per dichiarare un'espressione regolare si usano due barre in avanti e un flag opzionale. Il flag può essere g, i, m, s, u o y.

### Parameteri RegExp

Un'espressione regolare richiede due parametri. Un modello di ricerca richiesto e un parametron optional flag.

#### Pattern

Un modello può essere un testo o una qualsiasi forma di modello che presenta una qualche somiglianza. Per esempio, la parola spam in un'e-mail potrebbe essere un modello che ci interessa cercare in un'e-mail o un numero di telefono in formato numero potrebbe essere il nostro interesse da cercare.

#### Flags

I flag sono parametri opzionali di un'espressione regolare che determinano il tipo di ricerca. Vediamo alcuni dei flag:

- g: un flag globale che significa cercare un modello in tutto il testo
- i: flag di insensibilità alle maiuscole (cerca sia le minuscole che le maiuscole)
- m: multilinea

### Creare un pattern con il costruttore RegExp

Dichiarare un'espressione regolare senza flag globale e senza flag case insensitive.

```js
// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)
```

Dichiarazione di un'espressione regolare con flag globale e flag case insensitive.

```js
let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
```

Dichiarare un modello regex usando l'oggetto RegExp. Scrittura del pattern e del flag all'interno del costruttore RegExp

```js
let regEx = new RegExp('love','gi')
```

### Creare un pattern senza il costruttore RegExp

Dichiarazione di un'espressione regolare con flag globale e flag case insensitive.

```js
let regEx= /love/gi
```

L'espressione regolare di cui sopra è uguale a quella creata con il costruttore RegExp

```js
let regEx= new RegExp('love','gi')
```

### Metodi dell'oggetto RegExp

Vediamo alcuni metodi di RegExp

#### Testing per un match

*test()*: Verifica la presenza di una corrispondenza in una stringa. Restituisce vero o falso.

```js
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)
```

```sh
true
```

#### Array contenente tutto il match

*match()*: Restituisce un array contenente tutte le corrispondenze, compresi i gruppi di cattura, oppure null se non viene trovata alcuna corrispondenza.
Se non si utilizza un flag globale, match() restituisce un array contenente il pattern, l'indice, l'input e il gruppo.

```js
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)
```

```sh
["love", index: 2, input: "I love JavaScript", groups: undefined]
```

```js
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result)
```

```sh
["love"]
```

*search()*: Cerca una corrispondenza in una stringa. Restituisce l'indice della corrispondenza o -1 se la ricerca fallisce.

```js
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)
```

```sh
2
```

#### Sostituire una substring

*replace()*: Esegue la ricerca di una corrispondenza in una stringa e sostituisce la sottostringa corrispondente con una sostitutiva.

```js
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
```

```sh
JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language
```

```js
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
```

```sh
JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
```

```js
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)
```

```sh
JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
```

```js

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  
```

```sh
I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.
```

* []:  Un insieme di caratteri
  * [a-c] significa, a o b o c
  * [a-z] significa, qualsiasi lettera da a a z
  * [A-Z] significa qualsiasi carattere dalla A alla Z
  * [0-3] significa, 0 o 1 o 2 o 3
  * [0-9] significa qualsiasi numero da 0 a 9
  * [A-Za-z0-9] qualsiasi carattere dalla a alla z, dalla A alla Z, da 0 a 9
* \\:  utilizza per sfuggire a caratteri speciali
  * \d significa: corrisponde se la stringa contiene cifre (numeri da 0-9)
  * \D significa: corrispondere a una stringa che non contiene cifre
* . : qualsiasi carattere tranne il carattere di nuova riga (\n)
* ^: inizia con
  * r'^substring' eg r'^love', una frase che inizia con la parola amore
  * r'[^abc] significa non a, non b, non c.
* $: finisce con
  * r'substring$' eg r'love$', la frase termina con una parola amore
* *: zero o più volte
  * r'[a]*' significa un optional o può verificarsi più volte.
* +: una o più volte
  * r'[a]+' significa almeno una o più volte
* ?: zero o più volte
  *  r'[a]?' significa zero o una volta
* \b: delimitatore di parole, corrisponde all'inizio o alla fine di una parola
* {3}: Esattamente 3 caratteri
* {3,}: Almeno 3 caratteri
* {3,8}: Da 3 a 8 caratteri
* |: operatore or
  * r'apple|banana' significa sia di una mela che di una banana
* (): Cattura e raggruppa

![Regular Expression cheat sheet](../../images/regex.png)

Utilizziamo un esempio per chiarire i meta-caratteri di cui sopra

### Square Bracket (parentesi quadra)

Utilizziamo la parentesi quadra per includere le lettere minuscole e maiuscole

```js
const pattern = '[Aa]pple' // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
```

```sh
["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]

```

```js
const pattern = /[Aa]pple/g // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
```

```sh
["Apple", "apple"]
```

Se vogliamo cercare la banana, scriviamo lo schema come segue:

```js
const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)

console.log(matches)  
```

```sh
["Apple", "banana", "apple", "banana", "Banana"]
```

Utilizzando la parentesi quadra e l'operatore o , riusciamo a estrarre Apple, apple, Banana e banana.

### Escape character(\\) in RegExp

```js
const pattern = /\d/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
```

```js
const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["12", "2020"], this is not what we want
```

### Uno o più volte(+)

```js
const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)
console.log(matches)  // ["12", "2020"], this is not what we want
```

### Period(.)

```js
const pattern = /[a]./g  // this square bracket means a and . means any character except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]
```

```js
const pattern = /[a].+/g  // . any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']
```

### Zero o più volte(*)

Zero o molte volte. Il modello può non verificarsi o verificarsi più volte.

```js

const pattern = /[a].*/g  //. any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

```

### Zero oppure una volta(?)

Zero o una volta. Il modello può non verificarsi o verificarsi una volta.

```js
const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

```

### Quantifier in RegExp

Possiamo specificare la lunghezza della sottostringa che cerchiamo in un testo, utilizzando una parentesi graffa. Vediamo come utilizzare i quantificatori RegExp. Immaginiamo di essere interessati a una sottostringa la cui lunghezza sia di 4 caratteri

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\\b\w{4}\b/g  //  exactly four character words
const matches = txt.match(pattern)
console.log(matches)  //['This', 'made', '2019']
```

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches = txt.match(pattern)
console.log(matches)  //['This', 'made']
```

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{4}/g  // a number and exactly four digits
const matches = txt.match(pattern)
console.log(matches)  // ['2019']
```

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{1,4}/g   // 1 to 4
const matches = txt.match(pattern)
console.log(matches)  // ['6', '2019']
```

### Cart ^

- Starts with
  
```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /^This/ // ^ means starts with
const matches = txt.match(pattern)
console.log(matches)  // ['This']
```

- Negation

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]
```

### Match esatto

It should have ^ starting and $ which is an end.

```js
let pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern.test(name)

console.log(result) // true
```

🌕 Stai andando lontano. Continuate così! Ora sei super caricato con il potere delle espressioni regolari. Hai il potere di estrarre e pulire qualsiasi tipo di testo e puoi ricavare un significato dai dati non strutturati. Hai appena completato le sfide del 12° giorno e sei a 12 passi dalla tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## 💻 Esercizi

### Esercizi: Livello 1

1. Calcolate il reddito totale annuo della persona che si trova nel testo seguente. 'Guadagna 4000 euro di stipendio al mese, 10000 euro di bonus annuale, 5500 euro di corsi online al mese.'
1. La posizione di alcune particelle sull'asse orizzontale x -12, -4, -3 e -1 in direzione negativa, 0 nell'origine, 4 e 8 in direzione positiva. Estraete questi numeri e trovate la distanza tra le due particelle più lontane.

```js
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
```

1. Scrivere un modello che identifichi se una stringa è una variabile JavaScript valida.

    ```sh
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
    ```

### Esercizi: Livello 2

1. Scrivere una funzione chiamata *tenMostFrequentWords* che ottenga le dieci parole più frequenti da una stringa?

    ```js
        paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
        console.log(tenMostFrequentWords(paragraph))
    ```

    ```sh
        [
        {word:'love', count:6},
        {word:'you', count:5},
        {word:'can', count:3},
        {word:'what', count:2},
        {word:'teaching', count:2},
        {word:'not', count:2},
        {word:'else', count:2},
        {word:'do', count:2},
        {word:'I', count:2},
        {word:'which', count:1},
        {word:'to', count:1},
        {word:'the', count:1},
        {word:'something', count:1},
        {word:'if', count:1},
        {word:'give', count:1},
        {word:'develop',count:1},
        {word:'capabilities',count:1},
        {word:'application', count:1},
        {word:'an',count:1},
        {word:'all',count:1},
        {word:'Python',count:1},
        {word:'If',count:1}]
    ```

    ```js
    console.log(tenMostFrequentWords(paragraph, 10))
    ```

    ```sh
   [{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]
    ```

### Esercizi: Livello 3

1. Scrivere una funzione che pulisca il testo. Pulire il testo seguente. Dopo la pulizia, contare le tre parole più frequenti nella stringa.
  
  ```js
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))
   ```

   ```sh
    I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
    ```
2. Scrivere una funzione che trovi le parole più frequenti. Dopo la pulizia, contare le tre parole più frequenti nella stringa.

  ```js
    console.log(mostFrequentWords(cleanedText))
    [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
  ```

🎉 CONGRATULAZIONI ! 🎉

[<< Day 11](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md) | [Day 13 >>](../13_Day_Console_object_methods/13_day_console_object_methods.md)
