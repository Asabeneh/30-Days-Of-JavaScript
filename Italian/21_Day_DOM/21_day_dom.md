<div align="center">
  <h1> 30 Days Of JavaScript: Document Object Model(DOM)</h1>
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

[<< Day 20](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md) | [Day 22 >>](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_21.png)

- [Day 21](#day-21)
	- [Document Object Model (DOM) - Day 1](#document-object-model-dom---day-1)
		- [Ottenere un Elemento](#getting-element)
			- [Ottenere un Elemento tramite nome tag](#getting-elements-by-tag-name)
			- [Ottenere un Elemento tramite nome classe](#getting-elements-by-class-name)
			- [Ottenere un Elemento tramite nome id](#getting-an-element-by-id)
			- [Ottenere un Elemento tramite i metodi querySelector](#getting-elements-by-using-queryselector-methods)
		- [Aggiungere attributi](#adding-attribute)
			- [Aggiungere attributi usando setAttribute](#adding-attribute-using-setattribute)
			- [Aggiungere attributi senza usare setAttribute](#adding-attribute-without-setattribute)
			- [Aggiungere attributi usando classList](#adding-class-using-classlist)
			- [Rimuovere una classe usando remove](#removing-class-using-remove)
		- [Aggiungere Testo ad un elemento HTML](#adding-text-to-html-element)
			- [Aggiungere Testo usando textContent](#adding-text-content-using-textcontent)
			- [Aggiungere test usando innerHTML](#adding-text-content-using-innerhtml)
				- [Text Content](#text-content)
				- [Inner HTML](#inner-html)
		- [Aggiungere uno stile](#adding-style)
			- [Aggiungere un colore](#adding-style-color)
			- [Aggiungere un colore di background](#adding-style-background-color)
			- [Definire una dimensione del testo](#adding-style-font-size)
	- [Esercizi](#exercises)
		- [EsercizioLivello 1](#exercise-level-1)
		- [EsercizioLivello 2](#exercise-level-2)
		- [EsercizioLivello 3](#exercise-level-3)
			- [DOM: Mini project 1](#dom-mini-project-1)

# Day 21

## Document Object Model (DOM) - Day 1

Il documento HTML è strutturato come un oggetto JavaScript. Ogni elemento HTML ha diverse proprietà che possono aiutare a manipolarlo. È possibile ottenere, creare, aggiungere o rimuovere elementi HTML utilizzando JavaScript. Verificate gli esempi riportati di seguito. La selezione di un elemento HTML tramite JavaScript è simile alla selezione tramite CSS. Per selezionare un elemento HTML, si utilizza il nome del tag, l'id, il nome della classe o altri attributi.

### Ottenere un Elemento

Possiamo accedere a elementi o elementi già creati utilizzando JavaScript. Per accedere agli elementi o ottenerli utilizziamo diversi metodi. Il codice sottostante ha quattro elementi _h1_. Vediamo i diversi metodi per accedere agli elementi _h1_.

```html
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
```

#### Ottenere un Elemento tramite nome tag

**_getElementsByTagName()_**:prende un nome di tag come parametro stringa e questo metodo restituisce un oggetto HTMLCollection. Una HTMLCollection è un oggetto simile a un array di elementi HTML. La proprietà length fornisce la dimensione dell'insieme. Ogni volta che si utilizza questo metodo, si accede ai singoli elementi utilizzando l'indice o dopo aver eseguito un ciclo su ogni singolo elemento. Un HTMLCollection non supporta tutti i metodi degli array, quindi dovremmo usare il normale ciclo for invece di forEach.

```js
// syntax
document.getElementsByTagName('tagname')
```

```js
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

#### Ottenere un Elemento tramite nome classe

Il metodo **_getElementsByClassName()_** restituisce un oggetto HTMLCollection. Una HTMLCollection è un elenco di elementi HTML simile a un array. La proprietà length fornisce la dimensione dell'insieme. È possibile scorrere tutti gli elementi di HTMLCollection. Vedere l'esempio seguente

```js
//syntax
document.getElementsByClassName('classname')
```

```js
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

#### Ottenere un Elemento tramite nome id

**_getElementsById()_** si rivolge a un singolo elemento HTML. Si passa l'id senza # come argomento.

```js
//syntax
document.getElementById('id')
```

```js
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>
```

#### Ottenere un Elemento tramite i metodi querySelector

Il metodo _document.querySelector_ può selezionare un elemento HTML o elementi HTML per nome di tag, id o classe.

**_querySelector_**: può essere usato per selezionare un elemento HTML in base al suo nome di tag, id o classe. Se viene utilizzato il nome del tag, viene selezionato solo il primo elemento.

```js
let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title
```

**_querySelectorAll_**: può essere usato per selezionare elementi html in base al nome del tag o della classe. Restituisce un nodeList, che è un oggetto simile a un array che supporta i metodi degli array. Si può usare **_for loop_** o **_forEach_** per scorrere ogni elemento dell'elenco di nodi.

```js
const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class
```

### Aggiungere attributi

Nel tag di apertura dell'HTML viene aggiunto un attributo che fornisce informazioni aggiuntive sull'elemento. Attributi HTML comuni: id, class, src, style, href, disabled, title, alt. Aggiungiamo id e class per il quarto titolo.

```js
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
```

#### Aggiungere attributi usando setAttribute

Il metodo **_setAttribute()_** imposta qualsiasi attributo html. Richiede due parametri: il tipo di attributo e il nome dell'attributo.
Aggiungiamo gli attributi class e id per il quarto titolo.

```js
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
```

#### Aggiungere attributi senza usare setAttribute

Possiamo usare il normale metodo di impostazione degli oggetti per impostare un attributo, ma questo non può funzionare per tutti gli elementi. Alcuni attributi sono proprietà degli oggetti DOM e possono essere impostati direttamente. Ad esempio, id e class

```js
//another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'
```

#### Aggiungere attributi usando classList

Il metodo dell'elenco di classi è un buon metodo per aggiungere classi supplementari. Non sovrascrive la classe originale, se esiste, ma aggiunge una classe aggiuntiva per l'elemento.

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')
```

#### Rimuovere una classe usando remove

Analogamente all'aggiunta, possiamo anche rimuovere una classe da un elemento. Possiamo rimuovere una classe specifica da un elemento.

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')
```

### Aggiungere Testo ad un elemento HTML

Un HTML è un blocco composto da un tag di apertura, un tag di chiusura e un contenuto testuale. Possiamo aggiungere un contenuto testuale utilizzando la proprietà _textContent_ o \*innerHTML.

#### Aggiungere Testo usando textContent

La proprietà _textContent_ viene utilizzata per aggiungere testo a un elemento HTML.

```js
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

#### Aggiungere test usando innerHTML

Molte persone si confondono tra _textContent_ e _innerHTML_. _textContent_ ha lo scopo di aggiungere testo a un elemento HTML, mentre innerHTML può aggiungere uno o più elementi di testo o HTML come figli.

##### Text Content

Assegniamo la proprietà dell'oggetto HTML *textContent* a un testo

```js
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

##### Inner HTML

Utilizziamo la proprietà innerHTML quando vogliamo sostituire o aggiungere un contenuto completamente nuovo a un elemento genitore.
Il valore assegnato sarà una stringa di elementi HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>
```

La proprietà innerHTML può consentire anche di rimuovere tutti i figli di un elemento genitore. Invece di usare removeChild(), raccomanderei il metodo seguente.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = ''
    </script>
  </body>
</html>
```

### Aggiungere uno stile

#### Aggiungere un colore

Aggiungiamo un po' di stile ai nostri titoli. Se l'elemento ha un indice pari, gli diamo il colore verde, altrimenti il rosso.

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
```

#### Aggiungere un colore di background

Aggiungiamo un po' di stile ai nostri titoli. Se l'elemento ha un indice pari, gli diamo il colore verde, altrimenti il rosso.

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})
```

#### Definire una dimensione del testo

Aggiungiamo un po' di stile ai nostri titoli. Se l'elemento ha un indice pari, gli diamo 20px, altrimenti 30px.

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})
```

Come si è notato, le proprietà dei css quando vengono utilizzate in JavaScript saranno in camelCase. Le seguenti proprietà CSS cambiano da background-color a backgroundColor, da font-size a fontSize, da font-family a fontFamily, da margin-bottom a marginBottom.

---

🌕 Ora sei carico di un superpotere, hai completato la parte più importante e impegnativa della sfida e in generale di JavaScript. Hai imparato il DOM e ora hai la capacità di costruire e sviluppare applicazioni. Ora fai qualche esercizio per il cervello e per i muscoli.

## Esercizi

### EsercizioLivello 1

1. Creare un file index.html e inserire quattro elementi p come sopra: Ottenere il primo paragrafo utilizzando **_document.querySelector(tagname)_** e il nome del tag
2. Ottenere ciascuno dei paragrafi utilizzando **_document.querySelector('#id')_** e il loro id.
3. Ottenere tutti i p come nodeList usando **_document.querySelectorAll(tagname)_** e in base al loro nome di tag
4. Eseguire un loop attraverso l'elenco dei nodi e ottenere il contenuto del testo di ciascun paragrafo.
5. Impostare un contenuto di testo per il quarto paragrafo,**_Quarto paragrafo_**
6. Impostare gli attributi id e class per tutti i paragrafi, utilizzando diversi metodi di impostazione degli attributi.

### EsercizioLivello 2

1. Modificare lo stile di ogni paragrafo utilizzando JavaScript (ad esempio, colore, sfondo, bordo, dimensione del carattere, tipo di carattere).
1. Selezionate tutti i paragrafi e passate in rassegna tutti gli elementi, dando al primo e al terzo paragrafo un colore verde e al secondo e al quarto un colore rosso.
1. Impostare il contenuto del testo, l'id e la classe di ogni paragrafo

### EsercizioLivello 3

#### DOM: Mini project 1

1. Sviluppare la seguente applicazione, utilizzando i seguenti elementi HTML per iniziare. Otterrete lo stesso codice nella cartella di partenza.  Applicare tutti gli stili e le funzionalità utilizzando solo JavaScript.

   - Il colore dell'anno cambia ogni 1 secondo
   - Il colore di sfondo della data e dell'ora cambia ogni secondo.
   - La sfida completata ha lo sfondo verde
   - La sfida in corso ha lo sfondo giallo
   - Le sfide in arrivo hanno lo sfondo rosso

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
  </body>
</html>
```

![Project 1](../../images/projects/dom_min_project_challenge_info_day_1.1.gif)

![Project 2](../../images/projects/dom_min_project_challenge_info_day_1.1.png)

🎉 CONGRATULAZIONI ! 🎉

[<< Day 20](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md) | [Day 22 >>](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)
