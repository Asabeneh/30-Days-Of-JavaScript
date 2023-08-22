console.log(countries)
alert('Open the console and check if the countries has been loaded')

// Exercise 1 for Day 6
for (let i = 0; i <= 10; i++) {
    console.log(i)
}  

let i = 0;
while (i <= 10){
    console.log(i)
    i++
}

// Exercise 2
for(let i = 10; i >= 0; i--){
    console.log(i)
}

let i = 10;
while (i >= 0) {
    console.log(i)
    i--
}

// Exercise 3
let n=100

for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Exercise 4
for (let i = 1; i <= 7; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '#'
    }
    console.log(row);
}

// Exercise 5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
};

// Exercise 6
console.log("i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
  const iSquared = i * i;
  const iCubed = i * i * i;
  console.log(`${i}    ${iSquared}     ${iCubed}`);
};

// Exercise 7
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Exercise 8
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// Exercise 9
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
  
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(i);
    }
  }

// Exercise 10
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(`The sum of all numbers from 0 - 100 is ${sum}`);

// EXercise 11
let sumOfEven = 0;
let sumOfOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEven += i;
  } else {
    sumOfOdd += i;
  }
}

console.log(`The sum of all even numbers from 0 to 100 is ${sumOfEven}. And the sum of all odd numbers from 0 to 100 is ${sumOfOdd}`);

// Exercise 12
let sumOfEven = 0;
let sumOfOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEven += i;
  } else {
    sumOfOdd += i;
  }
}

let sumArray = [sumOfEven, sumOfOdd];

console.log(sumArray)

//Exercise 13
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 100); 
    randomNumbers.push(randomNumber);
}

console.log(randomNumbers);

// Exercise 14
const randomNumbers = [];
const maxNumber = 100; 

for (let i = 0; i < 5; i++) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * maxNumber);
    } while (randomNumbers.includes(randomNumber));
    
    randomNumbers.push(randomNumber);
}

console.log(randomNumbers);

// Exercise 15
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';

for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
}

console.log(randomId);

                                    // Exercise level 2

// Exercise 1                                     
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let IdLength = Math.random() * 100
let randomId = '';

for (let i = 0; i < IdLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
}

console.log(randomId);

//Exercise 2
let characters = '0123456789ABCDEF';
let hex = '#';

for (let i = 0; i < 6; i++) {
    const randomHex = Math.floor(Math.random * characters.length);
    randomHex += characters.charAt(randomHex)
}

console.log(randomHex);

// Exercise 3
const numColors = 1; // Number of random colors to generate
const colorArray = [];

for (let i = 0; i < numColors; i++) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    const randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;
    colorArray.push(randomRGB);
}

console.log(colorArray);

// Exercise 4
const newArr = [];

for(let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}

console.log(newArr);

// Exercise 5 & 6
for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let countryLength = country.length;
    console.log(`Country: ${country}, Length: ${countryLength}`);
}

// Exercise 7
let countriesWithLand = []


 for (i = 0; i < countries.length; i++) {

    if (countries[i].includes('land')) {
        countriesWithLand.push(countries[i])
    }
 }

if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log('These are countries without land')
}

// Exercise 8
let countriesWithIa = []


 for (i = 0; i < countries.length; i++) {

    if (countries[i].includes('ia')) {
        countriesWithIa.push(countries[i])
    }
 }

if (countriesWithIa.length > 0) {
    console.log(countriesWithIa);
} else {
    console.log('These are countries without "ia"')
}

// Exercise 9
let highestIndex = -1
let longestCountry = undefined

for (let i = 0; i < countries.length; i++) {
    if (i > highestIndex) {
        highestIndex = i;
        longestCountry = countries[i];
    }
} 

console.log(longestCountry)

// Exercise 10
let fiveCharacters = [i]

for (let i = 0; i < countries.length; i++) {
    if(countries[i].length === 5) {
        fiveCharacters.push(countries[i]);
    }
}

console.log(fiveCharacters)

// Exercise 11
