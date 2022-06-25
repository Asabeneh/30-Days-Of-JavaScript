<div align="center">
  <h1> 30 Days Of JavaScript: Classes</h1>
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

[<< Day 14](../14_Day_Error_handling/14_day_error_handling.md) | [Day 16>>](../16_Day_JSON/16_day_json.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_15.png)

- [Day 15](#day-15)
	- [Classi](#classes)
		- [Definire una classe](#defining-a-classes)
		- [Instanzionare una Classe](#class-instantiation)
		- [Costruttore della Classe](#class-constructor)
		- [Valori di Default nel costruttore](#default-values-with-constructor)
		- [Metodi di Classe](#class-methods)
		- [Proprietà con valori iniziali](#properties-with-initial-value)
		- [getter](#getter)
		- [setter](#setter)
		- [Metodo Statico](#static-method)
	- [Inheritance (Ereditarietà)](#inheritance)
		- [Override dei metodi](#overriding-methods)
	- [Esercizi](#exercises)
		- [Esercizi Livello 1](#exercises-level-1)
		- [Esercizi Livello 2](#exercises-level-2)
		- [Esercizi Livello 3](#exercises-level-3)

# Day 15

## Classi

JavaScript è un linguaggio di programmazione orientato agli oggetti. Tutto in JavaScript è un oggetto, con le sue proprietà e i suoi metodi. Per creare un oggetto, creiamo una classe. Una classe è come un costruttore di oggetti, o un "progetto" per la creazione di oggetti. Istanziamo una classe per creare un oggetto. La classe definisce gli attributi e il comportamento dell'oggetto, mentre l'oggetto, d'altra parte, rappresenta la classe.

Una volta creata una classe, possiamo creare oggetti da essa ogni volta che vogliamo. La creazione di un oggetto da una classe si chiama istanziazione della classe.

Nella sezione dedicata agli oggetti, abbiamo visto come creare un letterale di oggetto. L'oggetto letterale è un singleton. Se vogliamo ottenere un oggetto simile, dobbiamo scriverlo. Tuttavia, le classi consentono di creare molti oggetti. Questo aiuta a ridurre la quantità di codice e la sua ripetizione.

### Definire una classe

Per definire una classe in JavaScript è necessaria la parola chiave _class_, il nome della classe in **CamelCase** e il codice di blocco (due parentesi graffe). Creiamo una classe di nome Persona.

```sh
// syntax
class ClassName {
    //  code goes here
}

```

**Esempio:**

```js
class Person {
  // code goes here
}
```

Abbiamo creato una classe Person, ma non ha nulla al suo interno.

### Instanzionare una Classe

Istanziare una classe significa creare un oggetto da una classe. Abbiamo bisogno della parola chiave _new_ e chiamiamo il nome della classe dopo la parola new.

Creiamo un oggetto cane dalla nostra classe Persona.

```js
class Person {
  // code goes here
}
const person = new Person()
console.log(person)
```

```sh
Person {}
```

Come si può vedere, abbiamo creato un oggetto persona. Poiché la classe non ha ancora alcuna proprietà, anche l'oggetto è vuoto.

Utilizziamo il costruttore della classe per passare diverse proprietà alla classe.

### Costruttore della Classe

Il costruttore è una funzione integrata che consente di creare un blueprint per il nostro oggetto. La funzione costruttore inizia con la parola chiave constructor seguita da una parentesi. All'interno della parentesi si passano le proprietà dell'oggetto come parametro. Utilizziamo la parola chiave _this_ per associare i parametri del costruttore alla classe.

Il seguente costruttore della classe Person ha le proprietà firstName e lastName. Queste proprietà sono allegate alla classe Person utilizzando la parola chiave _this_. _This_ si riferisce alla classe stessa.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
```

```sh
Person {firstName: undefined, lastName:undefined}
```

Tutte le chiavi dell'oggetto sono indefinite. Quando si istanzia l'oggetto, si deve passare il valore delle proprietà. Passiamo il valore in questo momento, quando istanziamo la classe.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
```

Come abbiamo detto all'inizio, una volta creata una classe, possiamo creare molti oggetti utilizzando la classe. Ora, creiamo molti oggetti persona usando la classe Person.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
Person {firstName: "Lidiya", lastName: "Tekle"}
Person {firstName: "Abraham", lastName: "Yetayeh"}
```

Utilizzando la classe Persona abbiamo creato tre oggetti persona. Come si può vedere, la nostra classe non ha molte proprietà, ma possiamo aggiungere altre proprietà alla classe.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
```

### Valori di Default nel costruttore

Le proprietà della funzione costruttore possono avere un valore predefinito come le altre funzioni regolari.

```js
class Person {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person() // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}
```

### Metodi di Classe

Il costruttore all'interno di una classe è una funzione incorporata che ci permette di creare un progetto per l'oggetto. In una classe possiamo creare metodi di classe. I metodi sono funzioni JavaScript all'interno della classe. Creiamo alcuni metodi della classe.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())
```

```sh
Asabeneh Yetayeh
test.js:19 Lidiya Tekle
```

### Proprietà con valori iniziali

Quando creiamo una classe per alcune proprietà possiamo avere un valore iniziale. Per esempio, se si sta giocando, il punteggio iniziale sarà zero. Quindi, possiamo avere un punteggio iniziale o un punteggio che è zero. In altri termini, potremmo avere un'abilità iniziale e acquisirla dopo qualche tempo.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
0
0
[]
[]
```

Un metodo può essere un metodo normale, un getter o un setter. Vediamo i metodi getter e setter.

### getter

Il metodo get ci consente di accedere al valore dell'oggetto. Scriviamo un metodo get usando la parola chiave _get_ seguita da una funzione. Invece di accedere alle proprietà direttamente dall'oggetto, usiamo getter per ottenere il valore. Vedere l'esempio seguente

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
```

```sh
0
0
[]
[]
```

### setter

Il metodo setter ci consente di modificare il valore di alcune proprietà. Scriviamo un metodo setter usando la parola chiave _set_ seguita da una funzione. Si veda l'esempio qui sotto.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
```

Non lasciatevi ingannare dalla differenza tra un metodo regolare e un getter. Se sapete come creare un metodo regolare, siete a posto. Aggiungiamo un metodo regolare chiamato getPersonInfo nella classe Person.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
[]
Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
John Doe is 50. He lives Mars city, Mars.
```

### Metodo Statico

La parola chiave static definisce un metodo statico per una classe. I metodi statici non vengono richiamati sulle istanze della classe. Vengono invece richiamati sulla classe stessa. Si tratta spesso di funzioni di utilità, come quelle per creare o clonare oggetti. Un esempio di metodo statico è _Date.now()_. Il metodo _now_ viene richiamato direttamente dalla classe.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())
```

```sh
Node
15.1.2020 23:56
```

The static methods are methods which can be used as utility functions.

## Inheritance (Ereditarietà)

Utilizzando l'ereditarietà, possiamo accedere a tutte le proprietà e ai metodi della classe madre. Questo riduce la ripetizione del codice. Se ricordate, abbiamo una classe genitore Persona e da questa creeremo dei figli. I nostri figli potrebbero essere studenti, insegnanti, ecc.

```js
// syntax
class ChildClassName extends {
 // code goes here
}
```

Creiamo una classe figlio Student dalla classe genitore Person.

```js
class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
Asabeneh Yetayeh is Finland. He lives Helsinki, 250.
```

### Override dei metodi

Come si può vedere, riusciamo ad accedere a tutti i metodi della classe Person e li utilizziamo nella classe figlio Student. Possiamo personalizzare i metodi dei genitori e aggiungere proprietà aggiuntive a una classe figlio. Se vogliamo personalizzare i metodi e aggiungere proprietà aggiuntive, dobbiamo utilizzare la funzione costruttore anche per la classe figlio. All'interno della funzione costruttore chiamiamo la funzione super() per accedere a tutte le proprietà della classe genitore. La classe Person non aveva il genere, ma ora diamo la proprietà gender alla classe figlio, Student. Se lo stesso nome del metodo viene utilizzato nella classe figlio, il metodo genitore verrà sovrascritto.

```js
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
I am a child of the person class
Lidiya Tekle
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing
```

Ora, il metodo getPersonInfo è stato sovrascritto e identifica se la persona è maschio o femmina.

🌕 Stai eccellendo. Ora conosci la classe e hai il potere di trasformare tutto in un oggetto. Hai raggiunto la metà della tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## Esercizi

### Esercizi Livello 1

1. Creare una classe Animale. La classe avrà le proprietà nome, età, colore, zampe e creerà diversi metodi.
2. Creare una classe figlio Cane e Gatto dalla classe Animale.

### Esercizi Livello 2

1. Sovrascrivere il metodo creato nella classe Animale

### Esercizi Livello 3

1. Proviamo a sviluppare un programma che calcoli la misura della tendenza centrale di un campione (media, mediana, modalità) e la misura della variabilità (intervallo, varianza, deviazione standard). Oltre a queste misure, trova il minimo, il massimo, il numero, il percentile e la distribuzione di frequenza del campione. È possibile creare una classe chiamata Statistica e creare tutte le funzioni che eseguono calcoli statistici come metodi per la classe Statistica. Verificate l'output qui sotto.

```JS
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

```sh
// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

1. Creare una classe chiamata PersonAccount. Ha le proprietà nome, cognome, reddito, spese e i metodi totalIncome, totalExpense, accountInfo, addIncome, addExpense e accountBalance. Le entrate sono un insieme di entrate e la loro descrizione e le spese sono anch'esse un insieme di spese e la loro descrizione.

🎉 CONGRATULAZIONI ! 🎉

[<< Day 14](../14_Day_Error_handling/14_day_error_handling.md) | [Day 16>>](../16_Day_JSON/16_day_json.md)
