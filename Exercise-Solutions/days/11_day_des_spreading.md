# Day 11 - Destruction And Spreading
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>

 #### [Home](../README.md) | [<< Day 10](./10_day_sets_and_maps.md) | [Day 12 >>](./12_day_regular_ex.md)


## Exercise Solutions
 
 ### Exercises Level 1


1.  Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

```js
//app.js
const constants = [2.72, 3.14, 9.81, 37.5, 100]
const [E,PI,G,humanBodyTemp,waterBoilingTemp] =constants
console.log(E,PI,G,humanBodyTemp,waterBoilingTemp)

```


2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
```js
//app.js
const countries =['Finland','Estonia','Sweden','Denmark','Norway']
const [fin,est,swd,den,nor] = countries
console.log(fin,est,swd,den,nor)

```



3. Destructure the rectangle object by its properties or keys.
```js
//app.js
const rectangle ={
    width:20,
    height:10,
    are:200,
    perimeter:60
}

const {width,height,are,perimeter} = rectangle
console.log(width,height,are,perimeter)


```



 ### Exercises Level 2


1.  Iterate through the users array and get all the keys of the object using destructuring
```js
//app.js
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    for( const {name,scores,skills,age} of users){
           console.log(name,scores,skills,age)
    }

```


2.  Find the persons who have less than two skills
```js
//app.js

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
let a = users.forEach((element) => {
    if(element.skills.length <=2){
        console.log(element)
    }
})
```


 ### Exercises Level 3



 #### [Home](../README.md) | [<< Day 10](./10_day_sets_and_maps.md) | [Day 12 >>](./12_day_regular_ex.md)