<div align="center">
  <h1> 30 Days Of JavaScript: Loops</h1>
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

[<< Day 5](../05_Day_Arrays/05_day_arrays.md) | [Day 7 >>](../07_Day_Functions/07_day_functions.md)

![Day 5](../../images/banners/day_1_6.png)

- [📔 Giorno 6](#-day-6)
	- [Loops](#loops)
		- [for Loop](#for-loop)
		- [while loop](#while-loop)
		- [do while loop](#do-while-loop)
		- [for of loop](#for-of-loop)
		- [break](#break)
		- [continue](#continue)
	- [💻 Esercizi:Day 6](#-exercisesday-6)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# 📔 Giorno 6

## Loops

La maggior parte delle attività che svolgiamo nella vita sono piene di ripetizioni. Immaginate se vi chiedessi di stampare da 0 a 100 usando console.log(). Per eseguire questo semplice compito potreste impiegare dai 2 ai 5 minuti; questo tipo di attività noiosa e ripetitiva può essere eseguita con un ciclo. Se si preferisce guardare i video, è possibile consultare la pagina [video tutorials](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)

Nei linguaggi di programmazione, per svolgere attività ripetitive si utilizzano diversi tipi di loop. I seguenti esempi sono i cicli comunemente utilizzati in JavaScript e in altri linguaggi di programmazione.

### for Loop

```js
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
```

```js
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5
```

```js
for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0
```

```js
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Aggiunta di tutti gli elementi dell'array

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15
```

Creare un nuovo array basato sull'array esistente

```js
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### while loop

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5
```

### do while loop

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5
```

### for of loop

Utilizziamo il ciclo for per gli array. È un modo molto pratico per iterare un array se non siamo interessati all'indice di ogni elemento dell'array.

```js
for (const element of arr) {
  // code goes here
}
```

```js

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}

```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break viene utilizzato per interrompere un ciclo.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

Il codice precedente si arresta se viene trovato 3 nel processo di iterazione.

### continue

Utilizziamo la parola chiave *continue* per saltare una determinata iterazione. 

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```

🌕 Sei molto coraggioso, sei arrivato fino a questo punto. Ora hai acquisito il potere di automatizzare compiti ripetitivi e noiosi. Hai appena completato le sfide del sesto giorno e sei a 6 passi dalla vostra strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## 💻 Esercizi:Day 6

### Esercizi: Livello 1

  ```js
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```

1. Iterare da 0 a 10 usando il ciclo for, fare lo stesso usando il ciclo while e do while
2. Iterare da 10 a 0 usando il ciclo for, fare lo stesso usando il ciclo while e do while
3. Iterare da 0 a n usando il ciclo for
4. Scrivete un ciclo che esegua il seguente schema utilizzando console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Utilizzare il loop per stampare il seguente schema:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Utilizzando il loop stampate il seguente schema

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. Utilizzare il ciclo for per iterare da 0 a 100 e stampare solo i numeri pari.
8. Usare il ciclo for per iterare da 0 a 100 e stampare solo i numeri dispari
9. Usare il ciclo for per iterare da 0 a 100 e stampare solo i numeri primi
10. Usare il ciclo for per iterare da 0 a 100 e stampare la somma di tutti i numeri.

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```

11. Utilizzare il ciclo for per iterare da 0 a 100 e stampare la somma di tutti i pari e la somma di tutti i dispari.

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```

12. Utilizzare il ciclo for per iterare da 0 a 100 e stampare la somma di tutti i pari e la somma di tutti i dispari. Stampa della somma dei pari e della somma dei dispari come array

    ```sh
      [2550, 2500]
    ```

13. Sviluppare un piccolo script che generi un array di 5 numeri casuali.
14. Sviluppare un piccolo script che generi un array di 5 numeri casuali e i numeri devono essere unici.
15. Sviluppare un piccolo script che generi un id casuale di sei caratteri:

    ```sh
    5j2khz
    ```

### Esercizi: Livello 2

1. Sviluppare un piccolo script che generi un numero qualsiasi di caratteri di id casuale:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

1. Scrivere uno script che generi un numero esadecimale casuale.

    ```sh
    '#ee33df'
    ```

1. Scrivere uno script che genera un numero di colore rgb casuale.

    ```sh
    rgb(240,180,80)
    ```

1. Utilizzando l'array di paesi di cui sopra, creare il seguente nuovo array.

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```

1. Utilizzando l'array di paesi di cui sopra, creare un array per la lunghezza dei paesi"..

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

1. Utilizzare l'array dei paesi per creare il seguente array di array:

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```

2. Nell'array di paesi di cui sopra, verificare se ci sono uno o più paesi contenenti la parola "terra". Se ci sono paesi contenenti "terra", stamparli come array. Se non c'è nessun paese contenente la parola "terra", stampare "Tutti questi paesi sono senza terra".

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```

3. Nell'array di paesi di cui sopra, verificare se esiste un paese o se i paesi terminano con la sottostringa 'ia'. Se ci sono paesi che terminano con, stamparli come array. Se non c'è nessun paese che contiene la parola 'ai', viene stampato 'Questi sono i paesi che terminano senza ia'.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```

4. Utilizzando l'array di paesi di cui sopra, trovare il paese che contiene il maggior numero di caratteri.

      ```sh
      Ethiopia
      ```

5. Utilizzando l'array di paesi di cui sopra, trovare il paese che contiene solo 5 caratteri.

    ```sh
    ['Japan', 'Kenya']
    ```

6. Trovare la parola più lunga nell'array WebTechs
7. Utilizzate l'array WebTechs per creare il seguente array di array:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

8. Un'applicazione creata utilizzando MongoDB, Express, React e Node è chiamata applicazione MERN stack. Creare l'acronimo MERN utilizzando l'array mernStack.
9. Iterare l'array ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] utilizzando un ciclo for o for of e stampare gli elementi.
10. Questo è un array di frutta, ['banana', 'arancia', 'mango', 'limone'] invertire l'ordine usando un ciclo senza usare un metodo inverso.
11. Stampate tutti gli elementi dell'array come mostrato di seguito.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```

### Esercizi: Livello 3

1. Copiare l'array dei paesi (evitare la mutazione)
1. Gli array sono mutabili. Creare una copia dell'array che non modifichi l'originale. Ordinare l'array copiato e memorizzarlo in una variabile ordinataPaesi
1. Ordinare l'array WebTechs e l'array mernStack
1. Estrarre tutti i paesi che contengono la parola "terra" dall'array [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e stamparla come array
1. Trovare il paese che contiene il maggior numero di caratteri nella [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Estrarre tutti i paesi che contengono la parola "terra" dall'[countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e stamparli come array
1. Estrarre tutti i paesi che contengono solo quattro caratteri dall'[countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e stamparli come array
1. Estraete tutti i paesi che contengono due o più parole dall'[countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e stampateli come array
1. Invertire la [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e scrivere in maiuscolo ogni paese e memorizzarlo come matrice

🎉 CONGRATULAZIONI ! 🎉

[<< Day 5](../05_Day_Arrays/05_day_arrays.md) | [Day 7 >>](../07_Day_Functions/07_day_functions.md)
