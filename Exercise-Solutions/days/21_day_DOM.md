# Day 21 - Dom 1

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>

#### [Home](../README.md) | [<< Day 20](./20_day_cleanCode.md) | [Day 22 >>](./22_day_DOM2.md)

## Exercise Solutions

### Exercise Level 1

1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

````js
 <p class="paragraph" id="first-paragraph">first</p>
 <p class="paragraph" id="second-paragraph">second</p>
 <p class="paragraph" id="third-paragraph">third</p>
<p class="paragraph"></p>```
```js
//app.js

const firstParagraph = document.querySelector('p')
console.log(firstParagraph)
````

2. Get each of the the paragraph using document.querySelector('#id') and by their id

```js
//app.js

let firstParagraph = document.querySelector("#first-paragraph");
let secondParagraph = document.querySelector("#second-paragraph");
let thirdParagraph = document.querySelector("#third-paragraph");
console.log(firstParagraph, secondParagraph, thirdParagraph);
```

3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

```js
//app.js
const allParagraph = document.querySelectorAll("p");
console.log(allParagraph);
```

4. Lop through the nodeList and get the text content of each paragraph

```js
//app.js

const allParagraph = document.querySelectorAll("p");
for (let i = 0; i < allParagraph.length; i++) {
  console.log(allParagraph[i]);
}
```

5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph

```js
//app.js

const paragraf = document.querySelectorAll("p");
paragraf[3].textContent = "four paragraf";
```

6. Set id and class attribute for all the paragraphs using different attribute setting methods

```js
//app.js

const paragraph = document.querySelectorAll("p");

paragraph[0].className = "parag_one";
paragraph[0].id = "id_one";

paragraph[1].setAttribute("class", "paragraph_two");
paragraph[1].setAttribute("id", "id_two");

paragraph[2].classList = "paragraph_thre";
paragraph[2].id = "id_thre";

paragraph[3].setAttribute("class", "paragraph_four");
paragraph[3].setAttribute("id", "id_four");

console.log(paragraph);
```

### Exercise Level 2


1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

const paragraf =document.querySelectorAll('p')

paragraf[0].style.background='blue'
paragraf[1].style.fontSize='50px'
paragraf[2].style.border='1px solid red'
paragraf[3].style.color='yellow'

2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const paragraf =document.querySelectorAll('p')

paragraf.forEach((paragraf,i) => {

    if(i % 2 ===0){
        paragraf.style.backgroundColor='green'
    }
    else(paragraf.style.backgroundColor='red')

})

Set text content, id and class to each paragraph
3. 

const paragraf =document.querySelectorAll('p')

for(const par of paragraf){
par.className='class'
par.id='id'
par.textContent='This is a paragraph '
}

### Exercise Level 3

#### DOM: Mini project 1

1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder.  Apply all the styles and functionality using JavaScript only.

   - The year color is changing every 1 second
   - The date and time background color is changing every on seconds
   - Completed challenge has background green
   - Ongoing challenge has background yellow
   - Coming challenges have background red

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
#### [Home](../README.md) | [<< Day 20](./20_day_cleanCode.md) | [Day 22 >>](./22_day_DOM2.md)