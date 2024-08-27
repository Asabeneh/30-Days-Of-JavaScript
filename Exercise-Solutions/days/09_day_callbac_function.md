
# Day 9 - High Order Function
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>

 #### [Home](../README.md) | [<< Day 8](./08_day_object.md) | [Day 10 >>](./10_day_sets_and_maps.md)


## Exercise Solutions

### Exercises Level 1


```
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```
1. Explain the difference between forEach, map, filter, and reduce.

```
foreach runs a function for each element in the array. It can change the element in the array, but it cannot create a new array.
map is the same as foreach, except map returns a new array.
reduce runs a specified function for each element in an array and accumulates the results of that function, returning a single value. This function cannot modify every element of the array, but takes the result of the previous function call and passes it to the next function call.
filterer In JavaScript, the filter method is an array used to filter elements in an array based on a certain condition. The filter method does not modify the original array, but returns a new array consisting of elements that satisfy the condition
```

 2. Define a callback function before you use it in forEach, map, filter or reduce.


```js
// app.js

const callback = (n) => {return n**2}
function cube(callback,n){
return callback(n) * n}
console.log(cube(callback,3))
```

 3. Use forEach to console.log each country in the countries array.

```js
// app.js

const countries = ['turkiye','sırıa','japan','germany']
countries.forEach((element => console.log(element)) )
```
 4. Use forEach to console.log each name in the names array.

```js
// app.js

const names = ['nevzat','atalay','gül','atalay']
names.forEach(name1 => console.log(name1))
```
 5. Use forEach to console.log each number in the numbers array.



```js
// app.js

const numbers = [15,43, 56,78,25,2030]
numbers.forEach(num => console.log(num))
```
 6. Use map to create a new array by changing each country to uppercase in the countries array.


```js
// app.js

const countries = ['turkiye','sırıa','japan','germany']
const upperCase =countries.map((upper) => upper.toUpperCase())
console.log(upperCase)
```

 7. Use map to create an array of countries length from countries array.


```js
// app.js

const countries = ['turkiye','sırıa','japan','germany']
const newArr = countries.map((new1) => new1.length > 5)
console.log(newArr)
```

 8. Use map to create a new array by changing each number to square in the numbers array
  

```js
// app.js

const numbers = [2,3,4,5,6]
const square = numbers.map((num) => num**2)
console.log(square)

```
 9. Use map to change to each name to uppercase in the names array


```js
// app.js

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const newArr = names.map((name1) => name1.toUpperCase())
console.log(newArr)
```
10.  Use map to map the products array to its corresponding prices.

```js
// app.js
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// map metodu ile yeni bir dizi oluşturuyoruz
const productsWithPrices = products.map(function(product) {
  // her nesnenin product ve price özelliklerini birleştiriyoruz
  return product.product + ': ' + product.price;
});

// yeni diziyi yazdırıyoruz
console.log(productsWithPrices);
// ["banana: 3", "mango: 6", "potato:  ", "avocado: 8", "coffee: 10", "tea: "]

```
 11. Use filter to filter out countries containing land


```js
// app.js
const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
const newArr = countries.filter((new1) => new1.includes('land'))
console.log(newArr)

```

12.  Use filter to filter out countries having six character.


```js
// app.js
const countries = ['Finland','Icelan','Grönland','Turkey','Germany',]
const newArr = countries.filter((new1) => new1.length ==6)
console.log(newArr)

```
 13. Use filter to filter out countries containing six letters and more in the country array



```js
// app.js
const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
const newArr = countries.filter((new1) => new1.length > 6)
console.log(newArr)
```
 14. Use filter to filter out country start with 'E';


```js
// app.js

const countries = ['Finland','Iceland','Grönland','Turkey','Germany','England','Estonia']
const newArr =countries.filter((new1) => new1.startsWith('E'))
console.log(newArr)

```
 15. Use filter to filter out only prices with values.


  
```js
// app.js
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  const filteredProducts = products.filter(product => product.price !== '' && product.price !== ' ');
  console.log(filteredProducts);
```
 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.



```js
// app.js
const arr = ['ali', 'veli', 'küpeli']

function getStringList(){
   let newArr= []
     arr.map(string => newArr.push(string) )
     return  console.log(newArr)
}
getStringList(arr)
```
 17. Use reduce to sum all the numbers in the numbers array.


```js
// app.js
const numbers = [2,3,4,5,6]
let sum = numbers.reduce((acc,cur) => acc + cur )
console.log(sum)
```
 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

```js
// app.js

const ulkeler = ['Estonya', 'Finlandiya', 'İsveç', 'Danimarka', 'Norveç', 'İzlanda'];

// reduce fonksiyonu ile yeni bir string oluşturuyoruz
const cumle = ulkeler.reduce(function(onceki, ulke, indeks, dizi) {
  // son elemana gelinceye kadar ülkeleri virgülle ayırıyoruz
  if (indeks < dizi.length - 1) {
    return onceki + ulke + ', ';
  } else {
    // son elemana geldiğimizde sonuna nokta ve kuzey Avrupa ülkeleridir ifadesini ekliyoruz
    return onceki + ulke + '. kuzey Avrupa ülkeleridir';
  }
}, ''); // '' başlangıç değeri

// yeni stringi yazdırıyoruz
console.log(cumle);
// Estonya, Finlandiya, İsveç, Danimarka, Norveç, İzlanda. kuzey Avrupa ülkeleridir
```

 19. Explain different between some and every

```js
// app.js

var sayilar = [1, 2, 3, 4, 5];
var sonuc = sayilar.some(function(sayi) {
  return sayi > 10; // sayı 10'dan büyükse true, değilse false döndürür
});
console.log(sonuc); // false, çünkü dizideki hiçbir sayı 10'dan büyük değil

var sayilar = [1, 2, 3, 4, 5];
var sonuc = sayilar.every(function(sayi) {
  return sayi < 10; // sayı 10'dan küçükse true, değilse false döndürür
});
console.log(sonuc); // true, çünkü dizideki tüm sayılar 10'dan küçük

```
 20. Use some to check if some names' length greater than seven in names array



```js
// app.js
const names = ['nevzat','atalay','gül','atalay']
const newArr = names.some((name1) => name1.length > 5)
console.log(newArr)
```
21.  Use every to check if all the countries contain the word land


```js
// app.js

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.every((count) => count.includes('land') )
console.log(newArr)
```
 22. Explain the difference between find and findIndex

```js
// app.js
Find metodu, bir dizide koşulu sağlayan ilk elemanın değerini döndürür. FindIndex metodu ise, bir dizide koşulu sağlayan ilk elemanın indeks numarasını döndürür

```
23.  Use find to find the first country containing only six letters in the countries array


```js
// app.js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.find((count) => count.length == 6)
console.log(newArr)
```
 24. Use findIndex to find the position of the first country containing only six letters in the countries array


```js
// app.js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.length == 6)
console.log(newArr)
```

 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

```js
// app.js

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.includes("Norway"))
console.log(newArr)
```
 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.


```js
// app.js

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.includes("russia"))
console.log(newArr)
```


### Exercises: Level 2

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
 
```js 
// app.js 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filter the odd numbers
const oddNumbers = numbers.filter(number => number % 2 === 1);

// Map the odd numbers to their squares
const squares = oddNumbers.map(number => number ** 2);

// Reduce the squares to get the sum
const sum = squares.reduce((total, square) => total + square, 0);

// Log the result
console.log(sum); // 165
```
2. Find the sum of price of products using only reduce reduce(callback)
```js 
//app.js 

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  const sum = products.reduce((previousValue, currentValue) => {
    const price = parseFloat(currentValue.price);
    if (!isNaN(price)) {
      return previousValue + price;
    }
    return previousValue;
  }, 0);
  
  console.log(sum); // Output: 27
```
3. Declare a function called **_categorizeCountries_** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
```js
//app.js

const countries = [ 'China', 'Belarus', 'Ireland', 'New Zealand', 'Germany', 'Switzerland', 'Thailand', 'Uzbekistan' ,"Turkey","Rusia"]


function categorizeCountries(patterns) {
  return countries.filter(country => {
    return patterns.some(pattern => {
      return country.toLowerCase().includes(pattern.toLowerCase());
    });
  });
}

const patterns = ['land', 'ia', 'island', 'stan'];
const result = categorizeCountries(patterns);
console.log(result); 
```
4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
```js
//app.js
```
5. Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different functional programming to work on the countries.js array
```js
//app.js
```
6. Declare a **_getLastTenCountries_** function which which returns the last ten countries in the countries array.
```js
//app.js
```
7. Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
```js
//app.js
```
### Exercises: Level 3

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
```js
//app.js
```
2. \*\*\* Find the 10 most spoken languages:

   ````js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
   {country: 'English',count:91},
   {country: 'French',count:45},
   {country: 'Arabic',count:25},
   {country: 'Spanish',count:24},
   {country:'Russian',count:9},
   {country:'Portuguese', count:9},
   {country:'Dutch',count:8},
   {country:'German',count:7},
   {country:'Chinese',count:5},
   {country:'Swahili',count:4}
   ]

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 3))
   [
   {country: 'English',count: 91},
   {country: 'French',count: 45},
   {country: 'Arabic',count: 25},
   ]```

   ````
   

3. \*\*\* Use countries_data.js file create a function which create the ten most populated countries

   ````js
   console.log(mostPopulatedCountries(countries, 10))

   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000},
   {country: 'Indonesia', population: 258705000},
   {country: 'Brazil', population: 206135893},
   {country: 'Pakistan', population: 194125062},
   {country: 'Nigeria', population: 186988000},
   {country: 'Bangladesh', population: 161006790},
   {country: 'Russian Federation', population: 146599183},
   {country: 'Japan', population: 126960000}
   ]

   console.log(mostPopulatedCountries(countries, 3))
   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000}
   ]
   ```

   ````

4. \*\*\* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

   ```js
   const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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
   console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

   ```sh
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

   
 #### [Home](../README.md) | [<< Day 8](./08_day_object.md) | [Day 10 >>](./10_day_sets_and_maps.md)
