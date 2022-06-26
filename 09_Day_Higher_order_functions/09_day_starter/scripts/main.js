console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//Exercises.

//Exercises: Level 1
const countries_ = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

//1. Explain the difference between forEach, map, filter, and reduce.
//forEach() itera sobre cada elemento del array y le aplica la cuncion callback, no retorna nada a diferencia de map(); el metodo map() recorre la matriz y devuelve una nueva matriz modificada con la condiciones dadas en la funcion cb podria decir que aplica la funcion callback a cada elemento del array. el metodo filter()recorre el array y filtra los objetos que cumplan con la condicion de la funcion callback recibe tres parametros elemento, el indice y el array estos dos ultimos son opcionales. el metodo reduce() recibe dos parametros un acumulador  acc y un valor actual curr al final retorna el acumulador, es decir el valor acumulado de cada elemento curr 

//2. Define a callback function before you use it in forEach, map, filter or reduce.
function callback (element) {
     console.log(element)
}

function uppercase (element) {
   return element.toUpperCase()
}

//3. Use forEach to console.log each country in the countries array.
countries_.forEach(callback)

//4. Use forEach to console.log each name in the names array.
names.forEach(callback)

//5. Use forEach to console.log each number in the numbers array.
numbers.forEach(callback)

//6. Use map to create a new array by changing each country to uppercase in the countries array.
const newUpperCaseArray = countries_.map(uppercase)
console.log(newUpperCaseArray)

//7. Use map to create an array of countries length from countries array.
const newCountriesArray = countries_.map(el => el)
console.log(newCountriesArray)

//8. Use map to create a new array by changing each number to square in the numbers array
let numbersToSquare = numbers.map(el => el ** 2)
console.log(numbersToSquare)

//9. Use map to change to each name to uppercase in the names array
console.log(names.map(el => el.toUpperCase()))

//10. Use map to map the products array to its corresponding prices.
const corresponding = products.map(el => {
    let newObj =  []
    newObj.push( el.product, el.price)
  
   return newObj

}) 
console.log(corresponding)

//11. Use filter to filter out countries containing land.
console.log(countries.filter(el => el.name.includes('land')))

//12 Use filter to filter out countries having six character.
console.log(countries.filter(el => el.name.length === 6))

//13.Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter(el => el.name.length >= 6))

//14. Use filter to filter out country start with 'E';
console.log(countries.filter(el => el.name.startsWith('E')))

//15. Use filter to filter out only prices with values.
const pricesValues = products.filter(el => typeof el.price === 'number')
console.log(pricesValues)

//16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let arrMix = [1,'Hola', 23, 'Mundo', 45, 2]

function getStringLists (arr) {
  return arr.filter(el => typeof el === 'string')
}

//17. Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((acc, curr) => acc + curr))

//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const concatenateCountries = countries.reduce((acc, curr) => {
    return acc.concat(curr.name)  
},[])
console.log(concatenateCountries)

//19. Explain the difference between some and every
// some() recorre el array y comprueba si al menos un elemento cumple con la o las condiciones de la funcion callback retorna un booleano y devuleve false en un array vacio
// el metodo every() a direrencia de some comprueba si todos los elementos del array satisfacen la condicion de la funcion callback

//20. Use some to check if some names' length greater than seven in names array
console.log(names.some(el => el.length > 7))

//21.Use every to check if all the countries contain the word land
console.log(countries_.every(el => el.includes('land'))) 

//22. Explain the difference between find and findIndex.

// find() retorna el primer valor del elemento que satisface la condicion dada en la funcion callback, mientras que findIndex() retorna el primer indice del elemento que satisface la condicion de la funcion. find retorna el valor y findIdex el indice

//23. Use find to find the first country containing only six letters in the countries array
console.log(countries_.find(el => el.length === 6 ))

//24. Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries_.findIndex(el => el.length === 6 ))

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries_.findIndex(el => el ==='Norway' ))

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries_.findIndex(el => el ==='Russia' ))

//Exercises: Level 2

//Find the total price of products by chaining two or more array
//iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let sumPricePoducts = products.filter(el => typeof el.price === 'number').reduce((acc, curr) => acc + curr.price,0)//27

console.log(`the total sum of prices from products is ${sumPricePoducts}`)

//2. Find the sum of price of products using only reduce reduce(callback))
console.log(products.filter(el => typeof el.price === 'number').reduce((acc, curr) => acc + curr.price,0))

//3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(arr) {
  const pattern = ['land', 'ia', 'Island', 'stan'];
  const categorized = [];
  pattern.forEach((element) => {
    const sort = [];
    //use string template
    let category = `${element}`;
    categorized.push(arr.filter((country) => 
      country.includes(`${element}`)))
  });
  return categorized;
}

console.log(categorizeCountries(concatenateCountries));

//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function initialAndTimes(arr) {
  const array = [];
  const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  abc.forEach((letter) => {
    const object = {};
    object.letter = `${letter}`;
    object.times = arr.filter((country) =>
      country.startsWith(`${letter}`)).length;
  array.push(object);
  })
  return array;
}
console.log(initialAndTimes(concatenateCountries));

//5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  const firstTenCountries = countries.filter((element) => {
    return countries.indexOf(element) < 10;
  })
  return firstTenCountries;  
}
console.log(getFirstTenCountries());

//6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  const lastTenCountries = countries.filter((element) =>
    countries.indexOf(element) > countries.length - 11
  )
  return lastTenCountries;
}
console.log(getLastTenCountries());

//7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function mostUsedInitial(arr) {
  const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const initial = [];
  abc.forEach((letter) => {
  let initialNum = arr.filter((country) =>
      country.startsWith(`${letter}`)).length;
    initial.push(initialNum);
  })
  let max = Math.max(...initial);
  let index = initial.indexOf(max);
  return abc[index];
}
console.log(mostUsedInitial(concatenateCountries));

// Exercises: Level 3

//1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortedCountries = [];
const criteria = ['name', 'capital', 'population']
criteria.forEach(el => {
  const obj ={}
  obj[el] = countries.map( country => country[el])
 sortedCountries.push(obj)
})
console.log(sortedCountries)

//2. Find the 10 most spoken languages:
//Your output should look like this
/*console.log(mostSpokenLanguages(countries, 10))
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
  
  console.log(mostSpokenLanguages(countries, 3))
  [
  {country: 'English',count: 91},
  {country: 'French',count: 45},
  {country: 'Arabic',count: 25},
  ]*/

  function mostSpokenLanguages(number) {
    //make a language index
    const allLangs = countries.map((element) =>
      element.languages 
    );
    const mixedLangs = allLangs.toString().split(',');
    const langIndex = [...new Set(mixedLangs)]
  
    //get the count of each language
    function getLangSum(language) {
      let sum = 0;
      allLangs.forEach((element) => {
        const langNum = element.filter((lang) => 
          lang == language).length;
        sum += langNum;
      })
      return sum;
    }
  
    //make objects containing language and count
    const spokenLangs = [];
    langIndex.forEach((element) => {
      const object = {};
      object.language = `${element}`;
      object.count = getLangSum(`${element}`);
      spokenLangs.push(object); 
    })
  
    //sort the objects by the counts in descending order
    const mostSpokenLangs = spokenLangs.sort((a, b) => 
      b.count - a.count
    );
  
    //print out the specified number of objects
    const printOut = mostSpokenLangs.filter((element) => 
      mostSpokenLangs.indexOf(element) < number)
    return printOut;
  }
  
  console.log(mostSpokenLanguages(5));

  //3. Use countries_data.js file create a function which create the ten most populated countries
 /*console.log(mostPopulatedCountries(countries, 10))

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
]*/

function mostPopulatedCountries(number) {
  //make a new array containing objects with country and population
  const countriesAndPopulation = [];
  countries.forEach((element) => {
    const object = {};
    object.country = element.name;
    object.population = element.population;
    countriesAndPopulation.push(object);
  })

  //sort the objects by its population
  const mostPopulated = countriesAndPopulation.sort((a, b) => 
    b.population - a.population
  );

  //print out the specified number of objects
  const printOut = mostPopulated.filter((element) => 
    mostPopulated.indexOf(element) < number)
  return printOut;
}
console.log(mostPopulatedCountries(3));

//4.  Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
/*const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)] */

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

//1 count, sum, min, max, range
const statistics = {};

statistics.count = (arr) => arr.length;
statistics.sum = (arr) => arr.reduce((a, b) => a + b);
statistics.min = (arr) => Math.min(...arr);
statistics.max = (arr) => Math.max(...arr);
statistics.range = (arr) => Math.max(...arr) - Math.min(...arr);

//2 mean : an average of a data setPermalink

statistics.mean = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  const count = arr.length;
  // need to return explicitly
  return Math.round(sum / count);
}
console.log('Mean: ', statistics.mean(ages));

//3. median : the middle value when a data set is sorted
statistics.median = (arr) => {
  let median;
  const sortedArr = arr.sort((a, b) => a - b);
  if (arr.length % 2 != 0) {
    median = sortedArr[(arr.length - 1) / 2];
  } else {
    median = (sortedArr[(arr.length / 2) - 1] + sortedArr[arr.length / 2]) / 2;
  }
  return median;
}
console.log('Median: ',statistics.median(ages));

//4. mode : the most common number in a set
statistics.mode = (arr) => {
  const num = [...new Set(arr)];
  const count = num.map((element) =>
    arr.filter((number) => number === element).length)
  let max = Math.max(...count);
  let object = {};
  object.mode = num[count.indexOf(max)];
  object.count = max;
  return object;
}
console.log('Mode: ', statistics.mode(ages));

//5. variance 
//1) Find a mean.

//2) Find each score’s deviation from the mean.

//3) Square each deviation from the mean.

//4) Find the sum of squares.

//5) Divide the sum of squares by n-1(sample) or N(population).

//+) A population is the entire group that you want to draw conclusions about. A sample is the specific group that you will collect data from. The size of the sample is always less than the total size of the population.
statistics.var = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  const count = arr.length;
  const mean = sum / count;

  const deviation = arr.map((element) => element - mean);
  const square = deviation.map((num) => num * num);
  const sumOfSquares = square.reduce((a, b) => a + b);
  return +(sumOfSquares / count).toFixed(1);
}
console.log('Variance: ',statistics.var(ages));

//6. standard deviation
//Basically it’s a square-rooted variance.

//1) Find a mean. 2) For each data point, find the square of its distance to the mean. 3) Sum the values from Step 2. 4) Divide by the number of data points. 5) Take the square root.
statistics.std = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  const count = arr.length;
  const mean = sum / count;

  const deviation = arr.map((element) => element - mean);
  const square = deviation.map((num) => num * num);
  const sumOfSquares = square.reduce((a, b) => a + b);
  const variance = sumOfSquares / count;

  return +(Math.sqrt(variance).toFixed(1));
}

console.log('Standard Deviation: ', statistics.std(ages)); // 4.2

//7. frequency distribution
//1) Calculate the range of the data set.

//2) Divide the range by the number of groups you want and then round up.

//3) Use the class width to create your groups.

//4) Find the frequency for each group.
statistics.frecDistibution = function (arr) {
const num = [...new Set(arr)];
  const freqDist = [];
  num.forEach((unique) => {
    let frequency;
    let times = arr.filter((element) =>
      element === unique).length;
    frequency = `(${(times / arr.length) * 100}, ${unique})`;
    freqDist.push(frequency);
  })
  return statistics['frequency distribution'] = [freqDist.join(', ')];
} 
console.log(statistics.frecDistibution(ages))
console.log(statistics.std(ages))
