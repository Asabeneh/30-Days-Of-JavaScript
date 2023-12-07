# Day 6 - Loops
 


## [Exercise:Solutions](#exercise-solutions)


- ### [Exercise:Level 1](#exercise-level-1)
- ### [Exercise:Level 2](#exercise-level-2)
- ### [Exercise:Level 3](#exercise-level-3) <hr>

 #### [Home](../README.md) | [<< Day 5](./05_day_arrays.md) | [Day 7 >>](./07_day_function.md)


## Exercise Solutions

### Exercise Level 1
```
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

1. Iterate 0 to 10 using for loop, do the same using while and do while loop

```js
//app.js

for(let i= 0; i<=10; i++){
    console.log(i)
}

let i =0;
while( i <=10){
    console.log(i)
    i ++
}

let i= 0;
do{
    console.log(i)
    i++
} while(i<=10)

```

 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

```js
// app.js

for(let i= 10; i>=0; i--){
    console.log(i)
}

let i =10;
while( i >=0){
    console.log(i)
    i --
}

let i= 10;
do{
    console.log(i)
    i--
} while(i>=0)

```
 3. Iterate 0 to n using for loop

```js
// app.js

let n =5

for(let i=0; i<=n; i++){

console.log(i)
}
```

 4. Write a loop that makes the following pattern using console.log():

```js
    #
    ##
    ###
    ####
    #####
    ######
    #######
```
```js
//app.js

let string = ""

for(let i=1; i<=7; i++){

  for(let j=1; j<=i; j++){
    string+="#"

  }
  console.log(string)
  string+= ""
}

```
 5. Use loop to print the following pattern:
```js
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
```js

//app.js

const numbers =[0,1,2,3,4,5,6,7,8,9,10]

for(num of numbers){
    console.log(`${num} * ${num} = ${num*num}`)
}

```
 6. Using loop print the following pattern
```js
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
```js
//app.js

let output = 'i   i^2  i^3 \n'
for(let i=0; i<=10; i++){

  let square =i*i;
  let cube = i*i*i;
  
  output+= i + "     "+ square + "     " + cube + "\n"
}
console.log(output)
```

 7. Use for loop to iterate from 0 to 100 and print only even numbers

```js

//app.js

for(let i=0; i<=100; i+=2){
    console.log(i)
}
```

 8. Use for loop to iterate from 0 to 100 and print only odd numbers

```js
//app.js

for(let i=1; i<=100; i+=2){
    console.log(i)
}
```

 9. Use for loop to iterate from 0 to 100 and print only prime numbers
 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
```
The sum of all numbers from 0 to 100 is 5050.
```
```js
//app.js

let sum = 0
for(let i=0; i<=100; i++){
sum+=i
}
console.log(sum)
```

 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
```
The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
```
```js
//app.js

let sumeven = 0
for(let i=0; i<=100; i+=2){
sumeven+=i
}
console.log(sumeven)


let sumodd = 0
for(let i=1; i<=100; i+=2){
sumodd+=i
}
console.log(sumodd)
```


 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
```
  [2550, 2500]
```
```js
//app.js

let sumeven = 0
for(let i=0; i<=100; i+=2){
sumeven+=i
}
let sumodd = 0
for(let i=1; i<=100; i+=2){
sumodd+=i
}
let arr = [sumeven,sumodd]
console.log(arr)
```

 13. Develop a small script which generate array of 5 random numbers

```js
//app.js

outPut = ''
for(let i =0; i<5; i++){
    outPut+= Math.floor(Math.random(i)*10)
}
console.log(outPut)
```


 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

```js
//app.js

let arr = []
while(arr.length<5){
    randomNum = Math.floor(Math.random() * 10)
    if(!arr.includes(randomNum)){
        arr.push(randomNum)
    }
}
console.log(arr.toString())
```

15.  Develop a small script which generate a six characters random id:
```
5j2khz
```
```js
//app.js

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let randomCharecters = ''
for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * text.length)
    randomCharecters += text[index]
}
console.log(randomCharecters)
```


## Exercise Level 2


 1. Develop a small script which generate any number of characters random id:
```
  fe3jo1gl124g
```
```js
//app.js

let text = 'A1B2C3D4E5F6G7H8I9J0KLMN1O2P3Q4R5S6T7UV8W9XYZabcdefghijklmnopqrstuvwxyz'
let randomCharecters = ''

let index = Math.floor(Math.random() * text.length)

for (let i = 0; i < index; i++) {

    let a = Math.floor(Math.random()*i)
    randomCharecters += text[a]
}
console.log(randomCharecters)
```

 2. Write a script which generates a random hexadecimal number.
```
'#ee33df'
```
```js
//app.js

let hexzaArr = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0]

let hexzaNumber = '#'

  
  for(let i=1; i<=hexzaArr.length; i++){
   let index =  hexzaArr[Math.floor(Math.random() * hexzaArr.length)]
   
   hexzaNumber += index
   
   if(hexzaNumber.length==7){
     break;
   }
  }
  console.log(hexzaNumber)
  ```


 3. Write a script which generates a random rgb color number
```
rgb(240,180,80)
```
```js
//app.js

let number1 = Math.floor(Math.random()*256)
let number2 = Math.floor(Math.random()*256)
let number3 = Math.floor(Math.random()*256)

console.log(`rgb(${number1},${number2},${number3})`)
```

 4. Using the above countries array, create the following new array.
```
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
```
```js
//app.js

newArr = []
for(const country of countries){
      newArr.push(country.toLocaleUpperCase())
}
console.log(newArr)
```

 5. Using the above countries array, create an array for countries length
```
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
```
```js
//app.js

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
  let arr = []
  for(let i=0; i<countries.length; i++){
    let country =countries[i]
    arr.push(country.length)
  }
  console.log(arr)
```
 6. Use the countries array to create the following array of arrays:
```
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

```js
//app.js

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

  let arr = []
  for(let i=0; i<countries.length; i++){
    let country = countries[i]
    let coun = country.slice(0,3)
    let index = country.length
arr.push(`${country},'${coun}',${index}`)

}
console.log(arr)
```

 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
```
['Finland','Ireland', 'Iceland']
```
```js
//app.js

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
  let newArr = []
  for(const country of countries){
      if(country.includes('land')){
        newArr.push(country)
      }
  }
  console.log(newArr)
```

 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
```
['Albania', 'Bolivia','Ethiopia']
```

```js
//app.js
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
  let arr =[]
  for(const country of countries){
if(country.endsWith('ia')){
   arr.push(country)
}
  }
  console.log(arr)
```

9. Using the above countries array, find the country containing the biggest number of characters.
```
Ethiopia
```

```js
//app.js

const arr = ['Albania', 'Bolivia','Ethiopia']
 
let count = '';

for(let i = 0; i<arr.length; i++){
  if( arr[i].length > count.length){

    count = arr[i]
  }
}
console.log(count)
```


 10. Using the above countries array, find the country containing only 5 characters.
```
['Japan', 'Kenya']
```
```js
//app.js
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
  let newArr = []
  for(const country of countries){
    if(country.length==5){
      newArr.push(country)
    }
  }
  console.log(newArr)
```

 11. Find the longest word in the webTechs array

```js
//app.js

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
 let longWorld = ''

 for(let tech of webTechs){
if(tech.length>longWorld.length){
      longWorld = tech 
}
 }
 console.log(longWorld)
```
12.  Use the webTechs array to create the following array of arrays:
```
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
```
```js
//app.js

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let arr = []
  for( let tech of webTechs){
    arr.push(`${tech},${tech.length}`)
  }
  console.log(arr)
```

13.  An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

```js
//app.js

const skills = ['MongoDB', 'Express','React', 'Node']

let mern = '';
for(let i=0; i<skills.length; i++){
mern += skills[i][0]
}
console.log(mern)
```

 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

```js
//app.js

const arr = ["HTML", "CSS","JS","React","Redux","Node","Express","MongoDB"]

for(let i=0; i<arr.length; i++){
  console.log(arr[i])
}

for(const skills of arr){
  console.log(skills)
}
```

15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

```js
//app.js

const fruit = ["banana","orange","mango","lemon"]

let reverseFruit = [];

for(let i=fruit.length-1; i>=0; i--){
reverseFruit.push(fruit[i])
}
console.log(reverseFruit)
```

 16. Print all the elements of array as shown below.
```
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
```
```
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
```
```js
//app.js
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const merger =fullStack[0].concat(fullStack[1])
  for(const skills of merger){
    console.log(skills)
  }

```
## Exercise Level 3


1. Copy countries array(Avoid mutation)


```js
//app.js

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
  const newCountries = countries.slice()
  console.log(newCountries)
```



 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
```js
//app.js

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
  const sorCountries = countries.slice()
  console.log(sorCountries.sort())
```



 3. Sort the webTechs array and mernStack array

```js
//app.js

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
  mernStack.sort()
  webTechs.sort()
  console.log(webTechs,mernStack)
```



4.  Extract all the countries contain the word 'land' from the countries array and print it as array
```js
//app.js

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
let newArr = []
countries.forEach(function(countri){
if(countri.includes('land')){
    newArr.push(countri)
}
}
)  
console.log(newArr)
```



 5. Find the country containing the hightest number of characters in the countries array

```js
//app.js

const arr = [
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
  let count = '';

for(let i = 0; i<arr.length; i++){
  if( arr[i].length > count.length){

    count = arr[i]
  }
}
console.log(count)
```



6. Extract all the countries contain the word 'land' from the countries array and print it as array
```js
//app.js

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'ThailanD',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  let outPut = []
  for(let country of countries){
          if(country.toLowerCase().includes('land')){
            outPut.push(country)
          }
  }
  console.log(outPut)

```




 7. Extract all the countries containing only four characters from the countries array and print it as array
```js
//app.js

 let outPut = []
  for(let country of countries){
          if(country.length == 4){
            outPut.push(country)
          }
  }
  console.log(outPut)
```

 

 8. Extract all the countries containing two or more words from the countries array and print it as array
```js
//app.js

let result = []
  for(let country of countries){
    if(country.includes(" ")){
        result.push(country)

    }
  }
  console.log(result)
```



 9. Reverse the countries array and capitalize each country and stored it as an array

 ```js
//app.js

let result = []
let newArr = countries.reverse()

  for(let country of newArr){
    result.push(country.toLocaleUpperCase())
  }
  console.log(result)
```

 #### [Home](../README.md) | [<< Day 5](./05_day_arrays.md) | [Day 7 >>](./07_day_function.md)
