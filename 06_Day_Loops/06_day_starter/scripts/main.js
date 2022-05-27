console.table(countries)
//alert('Open the console and check if the countries has been loaded')

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  //1. Iterate 0 to 10 using for loop, do the same using while and do while loop
/*for(let i = 0; i<=10; i++){
  console.log(i)
  
}

cont = 0
while(cont <= 10 ){
 console.log(cont)
 cont++
}

let n = 0
do{
  console.log(n)
n++
}while(n <= 10)*/

//2.Iterate 10 to 0 using for loop, do the same using while and do while loop
for(i = 10; i>=0; i--){
  //console.log(i)
};


cont = 10
while(cont >= 0 ){
 //console.log(cont)
 cont--
}

x = 10
do{
  //console.log(x)
  x--
}while(x >= 0)

//3.Iterate 0 to n using for loop
let n = 20;
for (let i = 0; i <= n; i++) {
 // console.log(i);
}

//4. Write a loop that makes the following pattern using console.log():#
 /* ##
    ###
    ####
    #####
    ######
    #######*/
let str = '#'

for(i=0; i<=7; i++){
console.log(str.repeat(i))
}

//5. Use loop to print the following pattern:
/* 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100  */ 
for(let i = 0; i <= 10; i++){
  console.log(`${i} x ${i} = ${i * i}`)
}

//6.Using loop print the following pattern:
/*i    i^2   i^3
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
 10   100   1000 */
 
 console.log(`i\ti^2\ti^3`);
 for(let i = 0; i <= 10; i++){
  console.log(`${i}\t${i*i}\t${i**3} `)
}

//7. Use for loop to iterate from 0 to 100 and print only even numbers
 let evenNums = []
for(let i = 0; i <= 100; i++){
  let s =2
  if(i % 2 === 0){
    evenNums.push(i)
  }
}
console.log(evenNums) 

//8. Use for loop to iterate from 0 to 100 and print only odd numbers
 let oddNumbers = []
for(let i = 0; i <= 100; i++){
  if(i % 2 != 0){
    oddNumbers.push(i)
  } 
}console.log(oddNumbers)


//9.Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i=2; i<=100; i++) {
    let isPrime = true
    //(j<=i-1) ejemplo i=5-1 i=4 j vale 4 con la iteracion de j 5%2 = 1 5%3=2 5%4=1 cuando i=6 i-1= i=5 i%j= 6%2=0 'no pasa condicion del segundo for loop'

    for (let j=2; j<=i-1; j++){
       if( i % j=== 0){
              isPrime = false
        }
    }
    if(isPrime) console.log(i)
   
}

function isPrime(n) {
  for ( let i = 2; i < n; i++ ) {
      if ( n % i === 0 ) {
          return false;
      }
  }
  return true;
}


function display(num) {
  let arr = [2];
 for ( let i = 3; i < num; i+=2 ) {
    if ( isPrime(i) ) {
        arr.push(i);
    } 
  }
      return arr
}
console.log(display(100));


//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0; 
 for(let i = 0; i <= 100; i++){
    sum += i
  }console.log(sum)
 
 //11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

 //sum Odds from above array oddNumbers
 let sumOdds = 0;
 for(let i = 0; i<=oddNumbers.length-1; i++ ){
    sumOdds += oddNumbers[i]
 }console.log(sumOdds)



 //sum all even numbers 

 let sumEvens = 0
for(let i = 0; i <= 100; i++){
  if(i % 2 === 0){
    sumEvens += i
  }
}console.log(sumEvens)

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
 let sumOddsEvens = [sumEvens,sumOdds]
console.log(sumOddsEvens)

//13. Develop a small script which generate array of 5 random numbers
const randArr = new Array(5);
randArr.fill(Math.floor(Math.random() * 100));
console.log(randArr); 


//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const array = []
for(let i = 0; i= array.length < 5; i++){
  let random = Math.floor(Math.random() * 100) + 1;
  if(array.indexOf(random) === -1) array.push(random);

} console.log(array);

//15.Develop a small script which generate a six characters random id:
// Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
console.log( Math.random().toString(36).slice(2,7))

let abc = 'abcdefghijklmnopqstuvwxyz0123456789';
const id = [];
for (let i = 0; i < 6; i++) {
    id[i] = abc.charAt(Math.floor(Math.random()*(abc.length+1)));
}
console.log(id.join('')); 

// Exercises: Level 2

//1. Develop a small script which generate any number of characters random id:
let alfabeto = 'abcdefghijklmnopqstuvwxyz0123456789';
const id_ = [];
for (let i = 0; i < alfabeto.length; i++) {
    id_[i] = alfabeto.charAt(Math.floor(Math.random()*(alfabeto.length+1)));
}
console.log(id_.join('')); 
  
//2. Write a script which generates a random hexadecimal number. 
const randomHex = () => `#${
  Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,"0")
}`; console.log(randomHex())

3// Write a script which generates a random rgb color number.
//const getRgb = () => {
let rgb = [];
for (let i = 0; i < 3; i++) {
  rgb[i] = Math.floor(Math.random() * 256);
}
console.log(`rgb(${rgb})`);  //rgb(126,72,120)
//}
//console.log(getRgb())

// Otra solucion
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
//for (var i = 0; i < 10; i++) {
  //console.log(getRandomRgb());

  let randomRgb = () => {
    let r = Math.random() * 256 >> 0;
    let g = Math.random() * 256 >> 0;
    let b = Math.random() * 256 >> 0;
   return `rgb(${r}, ${g}, ${b})`
  }
//console.log(randomRgb())

//4. Using the above countries array, create the following new array.
const countries_ = [
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
];
const upper = (element)=> element.toUpperCase()
const upperCasecounties_ = countries_.map(upper)
console.log(upperCasecounties_)

const upperCaseCountries = [];
for (let i = 0; i < countries.length; i++) {
 
  for(let j = 0; j<=countries_.length; j++)
 
  if(countries_[j]===countries[i]){
    upperCaseCountries.push(i)
  }
}
//console.table(upperCaseCountries);
//console.table(countries[30])
//console.table(countries)

//5. Using the above countries array, create an array for countries length'.
const length = (element)=> element.length
const countriesLength = countries_.map(length)
console.log(countriesLength) // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

//6. Use the countries array to create the following array of arrays:
/*[
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
]*/
for(let i = 0; i < countries_.length; i++){
      let upper = countries_[i].toLocaleUpperCase().slice(0,3)
      let length = countries_[i].length
      console.log([countries_[i],upper,length])
}

const cb = (element)=> {
  let upper = element.toLocaleUpperCase().slice(0,3)
  let length = element.length
 return([element,upper,length])
}
console.log(countries_.map(cb))

//7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const arr = []
const includ = (element)=> {
  if (element.includes('land')){
      arr.push(element)
  } 
}; countries.map(includ)
 if(arr.length == 0)console.log('All these countries are without land.');
console.table(arr)

// otra solucion
const land = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    land.push(countries[i]);
  }
}
if (land.length == 0) {
  console.log('All these countries are without land.');
} else {
  console.log(land);
}

//8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const endIa = []
const end = (element)=> {
  if (element.endsWith('ia')){
      endIa.push(element)
  } 
}; countries.map(end)
 if(endIa.length == 0)console.log('These are countries that end without ia.');
console.table(endIa)

//9.Using the above countries array, find the country containing the biggest number of characters.
const countries_Length = [];
for (i = 0; i < countries.length; i++) {
  countries_Length[i] = countries[i].length;
}
let max = Math.max(...countries_Length);
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == max) {
    console.log(countries[i]);
  }
}

//usando sorth
const countriesLength_ = [];
for (i = 0; i < countries.length; i++) {
  countriesLength_[i] = countries[i].length;
}
countriesLength_.sort((a,b)=>a-b);
for (i = 0; i < countries.length; i++) {
    if (countries[i].length === countriesLength_[countriesLength_.length-1]) {
        console.log(countries[i]);
    }
}

//10. Using the above countries array, find the country containing only 5 characters.
fiveLength = (element)=> element.length === 5
console.log(countries.filter(fiveLength))

//11. Find the longest word in the webTechs array
function longestWord(arr){
  word = arr[0];
  for(let i=0;i<arr.length;i++){
      if(word.length<arr[i].length){
          word = arr[i];
      }
  }
  return word;
}
console.log(longestWord(webTechs))

//12. Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

//usando for loop
const techLength = [];
for (let i = 0; i < webTechs.length; i++) {
  techLength[i] = [
    webTechs[i],
    webTechs[i].length
    ]
}
console.log(techLength);

//usando map()
const callback= (element)=> {
  let length = element.length
 return([element,length])
}
console.log(webTechs.map(callback))

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
for(const element of mernStack){
  console.log(element[0].toLocaleUpperCase())
}//M E R N

//14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const arrayTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(const el of arrayTech){
  console.log(el)
}

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
fruitArray = ['banana', 'orange', 'mango', 'lemon']
const reverseFruit = []
for(let i = 0; i<fruitArray.length; i++){
  reverseFruit.unshift(fruitArray[i]) 
}
console.log(reverseFruit)
//(4) ['lemon', 'mango', 'orange', 'banana']

//16.Print all the elements of array as shown below.
/*const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]*/
let fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

fullStack = fullStack.flat()
for (const element of fullStack) {
  console.log(element.toUpperCase());
}

// usando join() y split()
//fullStack.toString().split(','); will do the same
const fullStackArr = fullStack.join().split(',');
for (const element of fullStackArr) {
  console.log(element.toUpperCase());
}

//Exercises: Level 3

//1.Copy countries array(Avoid mutation)

//usando spread
countriesCopy = [...countries]
//usando for loop
const countriesCopyFor = [];
for (let i = 0; i < countries.length; i++) {
  countriesCopyFor[i] = countries[i];
}
//usando slice()
const countriesCopySlice = countries.slice();

//2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
sortedCountries = countriesCopy.sort()

//3.Sort the webTechs array and mernStack array
console.log(webTechs.sort());  //(7) ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']
console.log(mernStack.sort());

//4.Extract all the countries contain the word 'land' from the countries array and print it as array
const land_ = []
const include = (element)=> {
  if (element.includes('land')){
      land_.push(element)
  } 
}; countries.map(include)

console.log(land_)

//5.Find the country containing the hightest number of characters in the countries array
const logestWord_ = arr => {
  word = arr[0]
  for(let i=0;i<arr.length;i++){
    if(word.length<arr[i].length){
       word = arr[i]
    }
  }
  return word
}; console.log(logestWord_(countries))

//6. Extract all the countries contain the word 'land' from the countries array and print it as array

//7.Extract all the countries containing only four characters from the countries array and print it as array
const lengthThree = element => element.length === 4
console.log(countries.filter(lengthThree))

//8.Extract all the countries containing two or more words from the countries array and print it as array
const wordsCountries = [];
for (const element of countries){
  if (element.includes(' ')) {
    wordsCountries.push(element);
  }
}
console.log(wordsCountries);

//usando filter
const twoOrMoreWods = el=> el.includes(' ')
console.log(countries.filter(twoOrMoreWods))

//9. Reverse the countries array and capitalize each country and stored it as an array 

let countriesReverse= [...countries.reverse()]
for(countrie of countriesReverse){
   console.log(countrie.toUpperCase())
}