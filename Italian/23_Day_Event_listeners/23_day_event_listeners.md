<div align="center">
  <h1> 30 Days Of JavaScript: Event Listeners</h1>
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

[<< Day 22](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md) | [Day 24 >>](../24_Day_Project_solar_system/24_day_project_solar_system.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_23.png)

- [Day 22](#day-22)
	- [DOM(Document Object Model)-Day 3](#domdocument-object-model-day-3)
		- [Event Listeners](#event-listeners)
			- [Click](#click)
			- [Double Click](#double-click)
			- [Mouse enter](#mouse-enter)
		- [Ottenere un valore da un elemento di input](#getting-value-from-an-input-element)
		- [Valore di input](#input-value)
			- [Valore di input ed azioni in risposta](#input-event-and-change)
			- [Evento di blur](#blur-event)
			- [keypress, keydow and keyup](#keypress-keydow-and-keyup)
	- [Esercizi](#exercises)
		- [Esercizio: Livello 1](#exercise-level-1)

# Day 22

## DOM(Document Object Model)-Day 3

### Event Listeners

Eventi HTML comuni: onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.
Possiamo aggiungere un metodo di ascolto degli eventi a qualsiasi oggetto DOM. Utilizziamo il metodo **_addEventListener()_** per ascoltare diversi tipi di eventi sugli elementi HTML. Il metodo _addEventListener()_ accetta due argomenti, un ascoltatore di eventi e una funzione di callback.

```js
selectedElement.addEventListener('eventlistner', function(e) {
  // the activity you want to occur after the event will be in here
})
// or

selectedElement.addEventListener('eventlistner', e => {
  // the activity you want to occur after the event will be in here
})
```

#### Click

Per collegare un ascoltatore di eventi a un elemento, prima si seleziona l'elemento e poi si applica il metodo addEventListener. L'ascoltatore di eventi prende come argomento il tipo di evento e le funzioni di callback.

Di seguito è riportato un esempio di evento di tipo click.

**Esempio: click**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>

    <script>
      const button = document.querySelector('button')
      button.addEventListener('click', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>
```

Un evento può anche essere allegato direttamente all'elemento HTML come script inline.

**Esempio: onclick**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button onclick="clickMe()">Click Me</button>
    <script>
      const clickMe = () => {
        alert('We can attach event on HTML element')
      }
    </script>
  </body>
</html>
```

#### Double Click

Per collegare un ascoltatore di eventi a un elemento, prima si seleziona l'elemento e poi si applica il metodo addEventListener. L'ascoltatore di eventi prende come argomento il tipo di evento e le funzioni di callback.

Di seguito è riportato un esempio di evento di tipo click.

**Esempio: dblclick**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')
      button.addEventListener('dblclick', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>
```

#### Mouse enter

Per collegare un ascoltatore di eventi a un elemento, prima si seleziona l'elemento e poi si applica il metodo addEventListener. L'ascoltatore di eventi prende come argomento il tipo di evento e le funzioni di callback.

Di seguito è riportato un esempio di evento di tipo click.

**Esempio: mouseenter**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')
      button.addEventListener('mouseenter', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>
```

Ormai si conosce il metodo addEventListen e come collegare un ascoltatore di eventi. Esistono molti tipi di ascoltatori di eventi. Ma in questa sfida ci concentreremo sugli eventi più comuni e importanti.
Elenco degli eventi:

- click - quando l'elemento viene cliccato
- dblclick - quando l'elemento fa doppio clic
- mouseenter - quando il punto del mouse entra nell'elemento
- mouseleave - quando il puntatore del mouse lascia l'elemento
- mousemove - quando il puntatore del mouse si sposta sull'elemento
- mouseover - quando il puntatore del mouse si sposta sull'elemento
- mouseout - quando il puntatore del mouse esce dall'elemento
- input - quando il valore viene inserito nel campo di input
- change - quando il valore viene modificato nel campo di input
- blur - quando l'elemento non è focalizzato
- keydown - quando un tasto è abbassato
- keyup - quando un tasto viene alzato
- keypress - quando si preme un tasto qualsiasi
- onload - quando il browser ha terminato il caricamento di una pagina

Verificate i tipi di evento di cui sopra sostituendo il tipo di evento nel codice dello snippet precedente.

### Ottenere un valore da un elemento di input

Di solito compiliamo moduli e i moduli accettano dati. I campi dei moduli vengono creati utilizzando l'elemento HTML input. Costruiamo una piccola applicazione che ci consenta di calcolare l'indice di massa corporea di una persona utilizzando due campi di input, un pulsante e un tag p.

### Valore di input

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Body Mass Index Calculator</h1>

    <input type="text" id="mass" placeholder="Mass in Kilogram" />
    <input type="text" id="height" placeholder="Height in meters" />
    <button>Calculate BMI</button>

    <script>
      const mass = document.querySelector('#mass')
      const height = document.querySelector('#height')
      const button = document.querySelector('button')

      let bmi
      button.addEventListener('click', () => {
        bmi = mass.value / height.value ** 2
        alert(`your bmi is ${bmi.toFixed(2)}`)
        console.log(bmi)
      })
    </script>
  </body>
</html>
```

#### Valore di input ed azioni in risposta

Nell'esempio precedente, siamo riusciti a ottenere il valore di input da due campi di input facendo clic sul pulsante. E se volessimo ottenere il valore senza fare clic sul pulsante? Possiamo usare il tipo di evento _change_ o _input_ per ottenere subito i dati dal campo di input quando il campo è a fuoco. Vediamo come gestirlo.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Data Binding using input or change event</h1>

    <input type="text" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector('input')
      const p = document.querySelector('p')

      input.addEventListener('input', e => {
        p.textContent = e.target.value
      })
    </script>
  </body>
</html>
```

#### Evento di blur

A differenza di _input_ o _change_, l'evento _blur_ si verifica quando il campo di input non è a fuoco.

```js
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Giving feedback using Evento di blur</h1>

    <input type="text" id="mass" placeholder="say something" />
    <p></p>

    <script>
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        input.addEventListener('blur', (e) => {
            p.textContent = 'Field is required'
            p.style.color = 'red'

        })
    </script>
</body>

</html>
```

#### keypress, keydow and keyup

Possiamo accedere a tutti i numeri dei tasti della tastiera utilizzando diversi tipi di ascoltatori di eventi. Utilizziamo keypress e otteniamo il keyCode di ogni tasto della tastiera.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Key events: Press any key</h1>

    <script>
      document.body.addEventListener('keypress', e => {
        alert(e.keyCode)
      })
    </script>
  </body>
</html>
```

---

🌕 Sei così speciale, progredisci ogni giorno. Ora, sai come gestire qualsiasi tipo di evento DOM. . Ti restano solo sette giorni per raggiungere la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## Esercizi

### Exercise: Livello 1

1. Generazione di numeri e marcatura di pari, dispari e numeri primi con tre colori diversi. Vedere l'immagine qui sotto.

![Number Generator](../../images/projects/dom_min_project_number_generator_day_3.1.gif)

1. Generazione del codice della tastiera utilizzando l'ascoltatore Even. L'immagine seguente.

![Keyboard key](../../images/projects/dom_min_project_keycode_day_3.2.gif)

🎉 CONGRATULAZIONI ! 🎉

[<< Day 22](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md) | [Day 24 >>](../24_Day_Project_solar_system/24_day_project_solar_system.md)
