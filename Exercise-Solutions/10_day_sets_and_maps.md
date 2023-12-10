 1. create an empty set

const countries = new Set()
console.log(countries)

2. Create a set containing 0 to 10 using loop

const set = new Set()
set.add(0,)
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
set.add(6)
set.add(7)
set.add(8)
set.add(9)
set.add(10)
console.log(set)

3. Remove an element from a set

const set = new Set()
set.add(0,)
set.add(1)
set.add(2)
console.log(set.delete(1))

4. Clear a set

const set = new Set()
set.add(0,)
set.add(1)
set.add(2)
set.clear()
console.log(set)

 5. Create a set of 5 string elements from array

const arr = ['ayşe','fatma','dilan','cansu']
const set = new Set(arr)
console.log(set)

 6. Create a map of countries and number of characters of a country

const map = new Map()

map.set(1,'turkey')
map.set(2,'russıa')
map.set(3,'germaby')
console.log(map)

### Exercise Level 2

1. Find a union b
```js
//app.js

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c =[ ...a,...b
]
const A = new Set(a)
const B = new Set(b)
const C = new Set(c)
console.log(C)

```


 2. Find a intersection b
```js
//app.js

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const A = new Set(a)
const B = new Set(b)
const aUnionB =a.filter((num) => B.has(num))
console.log(aUnionB)

```


 3. Find a with b
```js
//app.js

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const A = new Set(a)
const B = new Set(b)
const aUnionB =a.filter((num) => !B.has(num))
console.log(aUnionB)
```
### Exercises Level 3

1. How many languages are there in the countries object file.

2. Use the countries data to find the 10 most spoken languages:
```

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
```

```js
// app.js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
```