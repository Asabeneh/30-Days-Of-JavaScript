//console.log(countries)
//alert('Open the browser console whenever you work on JavaScript')
//alert('Open the console and check if the countries has been loaded')

                    // Exercise Level 1 for Day 5

// Exercise 1                    
const emptyArray = Array();
console.log(emptyArray);

// Exercise 2
const fiveElements = [1,2,3,4,5];

// Exercise 3
console.log(fiveElements.length)

// Exercise 4
const firstItem = fiveElements[0];
const lastItem = fiveElements[4];
const middleItem = fiveElements[2];

console.log(firstItem)
console.log(lastItem)
console.log(middleItem)

// Exercise 5
const mixedDataTypes = ['Gideon', [1,2,3,4,5] , 2002, true, null, undefined]

console.log(mixedDataTypes.length)

// Exercise 6
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'oracle', 'amazon'];

// Exercise 7
console.log(itCompanies);

// Exercise 8
console.log(itCompanies.length)

// Exercise 9
const firstCompany = itCompanies[0];
const lastCompany = itCompanies[itCompanies.length - 1]; 
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompany = itCompanies[middleIndex];

console.log(firstCompany);
console.log(lastCompany);
console.log(middleCompany);


// Exercise 10
for (const company of itCompanies) {
    console.log(company);   
  }

// Exercise 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());


// Exercise 12
const sentence = itCompanies.join(',') + 'are big IT companies.'
console.log(sentence)

// Exercise 13
const checkCompany = prompt('Input IT company: ').toLowerCase();

if (itCompanies.includes(checkCompany)) {
    console.log(`${checkCompany} is an IT company`);
} else {
    console.log(`Sorry ${checkCompany} is not found.`);
}

// Exercise 14

// Exercise 15
console.log(itCompanies.sort())

// Exercise 16
console.log(itCompanies.reverse())

// Exercise 17
const firstThreeCompanies = itCompanies.slice(0, 3)
console.log(firstThreeCompanies)

// Exercise 18
const lastThreeCompanies = itCompanies.slice(-3)
console.log(lastThreeCompanies)

// Exercise 19


// Exercise 20
// Exercise 21
// Exercise 22
// Exercise 23
