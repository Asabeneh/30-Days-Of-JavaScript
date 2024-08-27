# Day 5 - Arrays
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercise-level-1)
- ### [Exercise:Level 2](#exercise-level-2)
- ### [Exercise:Level 3](#exercise-level-3) <hr>

 #### [Home](../README.md) | [<< Day 4](./04_day_conditional.md) | [Day 6 >>](./06_day_loops.md)

## Exercise Solutions

### Exercise Level 1

 1. Declare an empty array;

```js
// app.js

const arr =[];
console.log(arr)

```
 2. Declare an array with more than 5 number of elements

```js
// app.js
const arr =[1,2,3,4,5,6];
console.log(arr)
```

 3. Find the length of your array

```js
// app.js
const arr =[1,2,3,4,5,6];
console.log(arr.length)
```

 4. Get the first item, the middle item and the last item of the array

```js
// app.js
const arr =[1,2,3,4,5,6];
console.log(arr[0])
console.log(arr.length/2, arr.length/2+1)
console.log(arr[arr.length-1])
```

 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

```js
// app.js 
const mixedDataTypes = [1,'nevzat',true,undefined,null, {}]
console.log(mixedDataTypes)
```

6.  Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

```js
// app.js
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
```


 7. Print the array using console.log()

```js
// app.js
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
```

 8. Print the number of companies in the array

```js
// app.js
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.length) 
```

 9. Print the first company, middle and last company

```js
//appjs

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies[0])
console.log(itCompanies[Math.round(itCompanies.length/2-1)])
console.log(itCompanies[itCompanies.length-1])
```

 10. Print out each company

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let result = itCompanies.forEach(countri => {
  console.log(countri)
})
```

 11. Change each company name to uppercase one by one and print them out

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let result = itCompanies.forEach(countri => {
console.log(countri.toLocaleUpperCase())
})

```

12.  Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(`${itCompanies.toString()} are big companies.`)

```

13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
if(itCompanies.includes('Facebook')){
    console.log("Facebook")
}
else{
    console.log("company is not found")
}
```

 14. Filter out companies which have more than one 'o' without the filter method

```js
// app.js

const companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
const result=[]
for(let i=0; i<companies.length; i++){
    let company =companies[i]
    let count =0
    for(let j=0; j<company.length; j++){
        let char =company[j]
        if(char.toLowerCase() == 'o'){
            count++;
        }  
    }
    if(count>1){
        result.push(company)
    }
}
console.log(result)
```
 15. Sort the array using sort() method

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.sort())

```

 16. Reverse the array using reverse() method

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.reverse())
```
 17. Slice out the first 3 companies from the array

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.slice(0,3))
```

 18. Slice out the last 3 companies from the array

```js
// aap.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))
```

 19. Slice out the middle IT company or companies from the array

 ```js
 // app.js
 
 const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.length) //7
console.log(itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1))
```

 20. Remove the first IT company from the array

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
 itCompanies.shift()
console.log(itCompanies)
```

 21. Remove the middle IT company or companies from the array

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.splice(itCompanies.length/2,1)
console.log(itCompanies)
```
22. Remove the last IT company from the array

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.pop()
console.log(itCompanies)
```

 23. Remove all IT companies

```js
// app.js

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)

```

## Exercise Level 2


1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


2. First remove all the punctuations and change the string to array and count the number of words in the array

```
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
```
```
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
13 
```
```js
// app.js

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let noPunctuations = text.replace(/[.,]/gi)
let words = noPunctuations.split(' ')
console.log(words)
console.log(words.length)
```

 3. In the following shopping cart add, remove, edit items

```
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea'
```
```js
// app.js

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('meat') 

shoppingCart.push('Sugar')

let indexHoney = shoppingCart.indexOf('Honey') // 4
shoppingCart.splice(4,1)

let indexTea = shoppingCart.indexOf('Tea') // 3
shoppingCart[3] ='Green Tea'

console.log(shoppingCart)

```
 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

```js
// app.js

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
  
let checkEthiopia = countries.includes('Ethiopia')
console.log(checkEthiopia)
```

 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

```js
// app.js

// const webTechs =
  [ 
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let chechSass = webTechs.includes('Sass')  // false
  webTechs.push('Sass')
  console.log(webTechs)
  ```


 6. Concatenate the following two variables and store it in a fullStack variable.
 ```
 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
```
```
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
```

```js
// app.js 

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
```

## Exercise Level 3


1. The following is an array of 10 students ages:

```
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```
```
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
```

```js
// app.js

let min = ages.sort()
console.log(min[0])


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let median = ages[ages.length/2] + ages[ages.length/2 -1 ]/2
console.log(median)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
sum =0

for(const num of ages ){
sum+=num

}

let average = sum/(ages.length)
console.log(average)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let arrangement = ages.sort()
let min = arrangement[0]
let max = arrangement[arrangement.length-1]
let range = max - min
console.log(range)
```


 2. Find the middle country(ies) in the countries array

```js
// app.js
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
  
  console.log(countries.length)  // 11
  let middleCountry = countries[Math.ceil(countries.length/2)-1]
  console.log(middleCountry)
```

 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

```js
// app.js

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
  console.log(countries.length)  // 11 not even
  countries.unshift("Turkey")
  let part1 = countries.splice(0,6)
  let part2 = countries.splice(0,6)
  console.log(part1,part2)

```

 #### [Home](../README.md) | [<< Day 4](./04_day_conditional.md) | [Day 6 >>](./06_day_loops.md)