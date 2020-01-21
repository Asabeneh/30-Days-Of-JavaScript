<div align="center">
  <h1> 30 Days Of JavaScript</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> January, 2020</small>
</sub>

</div>

[<< Day 20](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/20_Day/20_day_writing_clean_code.md) | [Day 22 >>]()

![Thirty Days Of JavaScript](../images/banners/day_1_21.png)

- [Day 20](#day-20)
  - [Document Object Model (DOM)](#document-object-model-dom)
    - [Getting Element](#getting-element)
      - [Getting elements by tag name](#getting-elements-by-tag-name)
      - [Getting elements by class name](#getting-elements-by-class-name)
      - [Getting an element by id](#getting-an-element-by-id)
      - [Getting elements by using querySelector methods](#getting-elements-by-using-queryselector-methods)
    - [Adding attribute](#adding-attribute)
      - [Adding attribute using setAttribute](#adding-attribute-using-setattribute)
      - [Adding attribute without setAttribute](#adding-attribute-without-setattribute)
      - [Adding class using classList](#adding-class-using-classlist)
      - [Removing class using remove](#removing-class-using-remove)
    - [Adding Text to HTML element](#adding-text-to-html-element)
      - [Adding Text content using textContent](#adding-text-content-using-textcontent)
      - [Adding Text Content using innHTML](#adding-text-content-using-innhtml)
    - [Adding style](#adding-style)
    - [Creating an Element](#creating-an-element)
    - [Creating elements](#creating-elements)
    - [Appending child to a parent element](#appending-child-to-a-parent-element)
    - [Removing a child element from a parent node](#removing-a-child-element-from-a-parent-node)
    - [Event Listeners](#event-listeners)
      - [Click](#click)
      - [Double Click](#double-click)
      - [Mouse enter](#mouse-enter)
    - [Getting value from an input element](#getting-value-from-an-input-element)
    - [input value](#input-value)
      - [input event and change](#input-event-and-change)
      - [blur event](#blur-event)
      - [keypress, keydow and keyup](#keypress-keydow-and-keyup)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
    - [DOM: Mini Projects](#dom-mini-projects)

# Day 20

## Document Object Model (DOM)

HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

### Getting Element

We can access already created element or elements using JavaScript. To access or get elements we use different methods. The code below has four _h1_ elements. Let us see the different methods to access the _h1_ elements.

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>Document Object Model/title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
```

#### Getting elements by tag name

**_getElementsByTagName()_**:takes a take name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

```js
// syntax
document.getElementsByTagName('tagname')
```

```js
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

#### Getting elements by class name

**_getElementsByClassName()_** method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

```js
//syntax
document.getElementsByClassName('classname')
```

```js
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

#### Getting an element by id

**_getElementsById()_** targets a single HTML element. We pass the id without # as an argument.

```js
//syntax
document.getElementById('id')
```

```js
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>
```

#### Getting elements by using querySelector methods

The _document.querySelector_ method can select an HTML or HTML elements by tag name, by id or by class name.

**_querySelector_**: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

```js
let firstTitle = document.querySelect('h1') // select the first available h2 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available h2 element with class title
```

**_querySelectorAll_**: can be used to select html element by its tag name or class. It return a nodeList which is an array like object which support array methods. We can use **_for loop_** or **_forEach_** to loop through each nodeList elements.

```js
const allTitles = document.querySelectAll('h1')

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class
```

### Adding attribute

An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

```js
const titles = document.querySelectorAll('h1')
titles[3].class = 'title'
titles[3].id = 'fourth-title'
```

#### Adding attribute using setAttribute

The **_setAttribute()_** method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute.
Let's add class and id attribute for the fourth title.

```js
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
```

#### Adding attribute without setAttribute

We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

```js
//another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'
```

#### Adding class using classList

The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')
```

#### Removing class using remove

Similar to adding we can also remove class from an element. We can remove a specific class from an element.

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')
```

### Adding Text to HTML element

An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property _textContent_ or \*innerHTML.

#### Adding Text content using textContent

The _textContent_ property is used to add text to an HTML element.

```js
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

#### Adding Text Content using innHTML

Most people get confused between _textContent_ and _innerHTML_. _textContent_ is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

```js
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

### Adding style

Let us add some style to our titles. If the element has even index we give it green color else red.

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
```

### Creating an Element

To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method _document.createElement()_. The method takes an HTML element tag name as a string parameter.

```js
// syntax
document.createElement('tagname')
```

**Example: Creating an HTML element**

```js
let title = document.createElement('h1')
let firstTitle = document.getElementById('first-title')
```

### Creating elements

To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want.

```js
let firstTitle = document.getElementById('first-title')
let title
for (let i = 0; i < 3; i++) {
  title = document.createElement('h1')
  title.className = 'title'
  title.style.fontSize = '24px'
}
```

### Appending child to a parent element

To see a created element on the HTML document we should append it the parent as a child element. We can access the HTML document body using *document.body*. The *document.body* support the *appendChild()* method.

```js
// creating multiple elements and appending to parent element
let title
for (let i = 0; i < 3; i++) {
  title = document.createElement('h1')
  title.className = 'title'
  title.style.fontSize = '24px'
  document.body.appendChild(title)
}
```

### Removing a child element from a parent node

After creating an HTML, we may want to remove element or elements and we can use the *removeChild()* method.

**Example:**

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)

        }
    </script>
</body>

</html>
```


### Event Listeners

Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.
We can add event listener method to any DOM object. Use use **_addEventListener()_** method to listen different event types on HTML elements. The _addEventListener()_ method takes two arguments, an event listener and a callback function.

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

To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

The following is an example of click type event.

**Example: click**

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
            console.log('e.target.textContent gives content of selected element: ', e.target.textContent)

        })
    </script>
</body>

</html>
```

An event can be also attached directly to the HTML element as inline script.

**Example: onclick**

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model</title>
</head>

<body>
    <button onclick = "clickMe()">Click Me</button>
    <script>
        const clickMe = () => {
            alert('We can attach event on HTML element')
        }
    </script>
</body>

</html>
```

#### Double Click

To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

The following is an example of click type event.
**Example: dblclick**

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
            console.log('e.target.textContent gives content of selected element: ', e.target.textContent)

        })
    </script>
</body>

</html>
```

#### Mouse enter

To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

The following is an example of click type event.

**Example: mouseenter**

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
            console.log('e.target.textContent gives content of selected element: ', e.target.textContent)

        })
    </script>
</body>
</html>
```

By now you are familiar with addEventListen method and how to attach event listener. There are many types of event listeners. But in this challenge we will focus the most common important events.
List of events:

- click - when the element clicked
- dbclick - when the element double clicked
- mouseenter - when the mouse point enter to the element
- mouseleave - when the mouse pointer leave the element
- mousemove - when the mouse pointer move on the element
- mouseover - when the mouse pointer move on the element
- mouseout -when the mouse pointer out from  the element
- input -when value enter to input field
- change -when value change on input field
- blur -when the element is not focused
- keydown - when a key is down
- keyup - when a key is up
- keypress - when we press any key
- onload - when the browser has finished loading a page

Test the above event types by replacing event type in the above snippet code.

### Getting value from an input element

We usually fill forms and forms accept data. Form fields are created using input HTML element. Let us build a small application which allow us to calculate body mas index of a person using two input fields, one button and one p tag.

### input value

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

#### input event and change

In the above example, we managed to get input values from two input fields by clicking button. How about if we want to get value without click the button. We can use the *change* or *input* event type to get data right away from the input field when the field is on focus. Let us see how we will handle that.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Data Binding using input or change event</h1>

    <input type="text"  placeholder="say something" />
    <p></p>

    <script>
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        input.addEventListener('input', (e) => {
            p.textContent = e.target.value
        })
    </script>
</body>

</html>
```

#### blur event

In contrast to *input* or *change*, the *blur* event occur when the input field is not on focus.

```js
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Giving feedback using blur event</h1>

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

We can access all the key numbers of the keyboard using different event listener types. Let us use keypress and get the keyCode of each keyboard keys.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Key events: Press any key</h1>

    <script>
        document.body.addEventListener('keypress', (e) => {
            alert(e.keyCode)
        })
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      body {
        text-align: center;
        margin-top: 50px;
        font-family: 'Roboto', sans-serif;
      }

      h1 {
        font-size: 48px;
        margin: 50px auto;
        background: #fbe324;
        width: 650px;
        padding: 5px;
        color: #444;
        font-weight: 300;
      }

      input {
        width: 250px;
        height: 45px;
        text-indent: 10px;
        font-size: 18px;
      }

      button {
        width: 150px;
        height: 45px;
        border: none;
        background: #fbe324;
        color: #444;
        border-radius: 3px;
        font-size: 18px;
      }

      p {
        margin: 15px auto;
        background: #fbe324;
        width: 650px;
        padding: 5px;
        font-size: 28px;
        font-weight: 300;
      }
    </style>
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
      const bmiResult = document.createElement('p')
      let bmi
      button.addEventListener('click', () => {
        bmi = mass.value / height.value ** 2
        bmiResult.textContent = bmi.toFixed(2)
        document.body.appendChild(bmiResult)
      })
    </script>
  </body>
</html>
```

🌕 Now, you are with super power, you have completed the most important part. You learned DOM and now you knew how to build a house, keep building houses. Now do some exercises for your brain and for your muscle.

## Exercises

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
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

### Exercise: Level 1

1. Create an index.html file and put four p elements as above: Get the first paragraph by using **_document.querySelector(tagname)_** and tag name
2. Get get each of the the paragraph using **_document.querySelector('#id')_** and by their id
3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name
4. Loop through the nodeList and get the text content of each paragraph
5. Set a text content to paragraph the fourth paragraph,**_Fourth Paragraph_**
6. Set id and class attribute for all the paragraphs using different attribute setting methods
7. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
8. Select all paragraphs and loop through each elements and give the first and third paragraph a color of color, and the second and the fourth paragraph a red color
9. Remove all the paragraph and create them using JavaScript
10. Set text content, id and class to each paragraph
11. Create a div container on HTML document and create 100 numbers dynamically and append to the container div. Put each number in 150px by 150px box. If the number is even the background will be lightgreen else lightblue.

### Exercise: Level 2

1. Use the rgb color generator function or hexaColor generator to create 10 divs with random background colors
  
### Exercise: Level 3

1. Use the countries.js to visualize all the countries on the HTML document. You need one wrapper div and box for each countries. In the box display, the letter the country starts with, the name of the country and the number of characters for the country name.


### DOM: Mini Projects


🎉 CONGRATULATIONS ! 🎉

[<< Day 20](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/20_Day/20_day_writing_clean_code.md) | [Day 22 >>]()
