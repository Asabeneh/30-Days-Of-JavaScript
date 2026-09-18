console.log(countries)
alert('Open the console and check if the countries has been loaded')

//Exercice 01 

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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

  // Exo 01
  for(let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
  }
  //backforward
  const words = countries.length;
  for(let i = words; i >= 0; i--) {
    console.log(countries[i]);
  }

  //while loop
  let i =0;
  while(i < webTechs.length) {
    console.log(webTechs[i]);
    i++;
  }
  //backforwar 
  let i = webTechs.length;
  while(i>=0){
    console.log(webTechs[i]);
    i--;
  }

  //do ... while loop
  let x = 0;
  do{
    console.log(mernStack[x]);
    x++;
  } while(x < mernStack.length);
  
  //backforward
  let w = mernStack.length;
  do{
    console.log(mernStack[w]);
    w--;
  }while(w >= 0);

  //exo 03
  let n = 17;
  for(let i = 0; i <n; i++){
    console.log(i);
  }

  //exo 04
  for(let i = 0; i <= 7; i++){
    console.log("#".repeat(i));
  }

  //exo 05
  for(let i = 0; i <=10; i++){
    console.log(`${i}*${i} = ${i*i}`);
  }

  //exo 06
  console.log("i    i^2     i^3");
  for(let i = 0; i <=10; i++){
    console.log(`${i}    ${i**2}     ${i**3}`);
  }

  //exo 07
  console.log("Odd numbers between 1 and 100:");
  for(let i = 0; i <=100; i++){
    if(i % 2 !== 0){
        console.log(i);
    } 
  }
  console.log("Even numbers between 1 and 100:");
  for(let i = 0; i <=100; i++){
    if(i % 2 === 0){
        console.log(i);
    } 
  }

  //exo 10
  
  for(let i = 0; i<=100; i++){
    sum += i;
  }
  console.log("The sum of all the numbers is:", sum);

  //exo 11
  let i = 0;
  let sumEven = 0;
  let sumOdd = 0;
  for(let i = 0; i<=100; i++){
    if(i % 2 === 0){
        sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log("Even sum numbers between 1 and 100:",sumEven,"Odd sum numbers between 1 and 100:",sumOdd);

//exo 12

for(let i = 0; i < 100; i++){
  if(i % 2 === 0){
    sumEven += i;
  } else {
      sumOdd += i;
    }
}

const sums = [sumEven, sumOdd];
console.log(sums);// [2450, 2500]

//exo 13
let arr = [];
for(let i = 0; i < 5; i++){
  let randomNum = Math.floor(Math.random()*100);
  arr.push(randomNum);
}
console.log(arr);// [55, 27, 92, 60, 54]

//exo 14
let array = [];
for(let i = 0; i < 5; i++){
  let randomNum =  Math.floor(Math.random()*100)+1;
  if(!array.includes(randomNum)){
    array.push(randomNum);
  }
  
}
console.log(array);// [95, 12, 13, 81, 27]

//exo 15
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let randomId = '';

for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters[randomIndex];
}

console.log(randomId);

//exercice level 02 

//exo 01
let chars = Math.floor(Math.random() * characters.length) + 1;
for (let i = 0; i <chars ; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters[randomIndex];
}

console.log(randomId);

//exo 02
const hexCharacters = '0123456789ABCDEF';
let randomColor = '#';

for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * hexCharacters.length);
  randomColor += hexCharacters[randomIndex];
}

console.log(randomColor);

//exo 03
const maxColorValue = 256; // One more than the maximum value for a color component
let randomColors = 'rgb(';

for (let i = 0; i < 3; i++) {
  const randomComponent = Math.floor(Math.random() * maxColorValue);
  randomColor += randomComponent;

  if (i < 2) {
    randomColors += ',';
  }
}

randomColors += ')';
console.log(randomColors);

//exo 04
let upperCaseCountries = [];
for (let i = 0; i < countries.length; i++) {
  let uppercaseCountry = '';
  for (let j = 0; j < countries[i].length; j++) {
    const char = countries[i][j];
    uppercaseCountry += char.toUpperCase();
  }
  upperCaseCountries.push(uppercaseCountry);
}
console.log(upperCaseCountries);

//exo 05
let l = [];
for (let i = 0; i < countries.length; i++) {
  l.push(countries[i].length);
}
console.log(l);

//exo 06
let ar = [];
for (let i = 0; i < countries.length; i++){
  let capital = countries[i].substr(0,3).toUpperCase();
  let c = countries[i].length;
  ar.push([countries[i], capital, c]);
}
console.log(ar);

//exo 07
let isLand = [];
for(let i; i < countries.length; i++){
  if(countries[i].toLowerCase().includes('land')) {
    isLand.push(countries[i]);
  } 
}

if(isLand.length>0) {
  console.log(isLand);
} else {
  console.log("All these countries are withoun 'land'");
}

//exo 08
let isIA = [];
for(let i=0; i < countries.length; i++){
  if(countries[i].toLowerCase().endsWith('ia')){
    isIA.push(countries[i]);
  }
}
if(isIA.length > 0) {
  console.log(isIA);
} else {
  console.log("These are countries ends without ia");
}
// ['Albania', 'Bolivia', 'Ethiopia']

//exo 09
let big = '';
for(let i=0; i < countries.length; i++){
  if(countries[i].length> big.length){
    big = countries[i];
  } 
}
console.log(big);

//exo 10
let isBig = [];
for(let i=0; i <countries.length; i++){
  if(countries[i].length === 5){
    isBig.push(countries[i]);
  }
}
console.log(isBig);

//exo 11
let longest = '';

for (let i = 0; i < webTechs.length; i++) {
  if(webTechs[i].length>longest.length){
    longest = webTechs[i];
  }
}
console.log(longest);//JavaScript

//exo 12
let array1 = [];
for (let i = 0; i < webTechs.length; i++){
  let c = webTechs[i].length;
  array1.push([webTechs[i], c]);
}
console.log(array1);

//exo 13
let accronym = '';
for (let i = 0; i < mernStack.length; i++) {
  accronym += mernStack[i].charAt(0);
}
console.log(accronym);//MERN

//exo 14
for(const i of webTechs){
  console.log(webTechs[i];
}

//exo 15
let fruits = ['banana', 'orange', 'mango', 'lemon'];

for (let i = fruits.length; i >= 0; i--) {
  console.log(fruits[i]);
}

//exo 16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++){
  for (let j = 0; j < fullStack[i].length; j++){
    console.log(fullStack[i][j])
  }
}

//exercise level 03

const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland',
  'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'Malaysia'
];

// Create a copy of the array without modifying the original
const copiedCountries = [...countries];

// Sort the copied array
const sortedCountries = copiedCountries.slice().sort();

// Sort the webTechs array
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const sortedWebTechs = webTechs.slice().sort();

// Sort the mernStack array
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const sortedMernStack = mernStack.slice().sort();

// Extract countries containing 'land'
const countriesWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes('land')) {
    countriesWithLand.push(countries[i]);
  }
}

// Find the country with the highest number of characters
let longestCountry = '';
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}

// Extract countries containing only four characters
const countriesWithFourChars = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    countriesWithFourChars.push(countries[i]);
  }
}

// Extract countries containing two or more words
const countriesWithMultipleWords = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes(' ')) {
    countriesWithMultipleWords.push(countries[i]);
  }
}

// Reverse and capitalize countries array
const reversedAndCapitalizedCountries = [];
for (let i = countries.length - 1; i >= 0; i--) {
  reversedAndCapitalizedCountries.push(countries[i].toUpperCase());
}

console.log('Sorted Countries:', sortedCountries);
console.log('Sorted Web Techs:', sortedWebTechs);
console.log('Sorted MERN Stack:', sortedMernStack);
console.log('Countries with "land":', countriesWithLand);
console.log('Country with the most characters:', longestCountry);
console.log('Countries with four characters:', countriesWithFourChars);
console.log('Countries with multiple words:', countriesWithMultipleWords);
console.log('Reversed and Capitalized Countries:', reversedAndCapitalizedCountries);
