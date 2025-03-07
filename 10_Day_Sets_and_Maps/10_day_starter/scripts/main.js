console.log(countries)
//alert('Open the console and check if the countries has been loaded')


// Day 10 Exercises
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// Exercise 1
const emptySet = new Set();
console.log(emptySet);

// Exercise 2
const numberSet = new Set();

for(let i = 0; i < 10; i++) {
    numberSet.add(i);
}

console.log(numberSet)

// Exercise 3
setOfCountries = new Set();
for(const country of countries){
    setOfCountries.add(country)
}

console.log(setOfCountries.delete('Sweden'));

// Exercise 4
setOfCountries.clear()

console.log(setOfCountries);

// Exercise 5
const setOfFiveStrings = new Set();

for(const country of countries) {
    if(typeof country === 'string') {
        setOfFiveStrings.add(country);
    }
}

console.log(setOfFiveStrings)

// Exercise 6
const countryCharacterCountMap = new Map();

for (const country of countries) {
    countryCharacterCountMap.set(country, country.length);
}

console.log(countryCharacterCountMap);

                                // Exercise Level 2
// Exercise 1
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(c)

// Exercise 2
let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(c);

// Exercise 




