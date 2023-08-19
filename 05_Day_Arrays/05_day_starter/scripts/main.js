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
// const middleIndex = Math.floor(itCompanies.length / 2);

    //const middleIndex = Math.floor(itCompanies.length / 2);
    //const middleCompany = itCompanies[middleIndex];

console.log(middleCompany);
const slicedMiddle = itCompanies.slice(middleIndex)


// Exercise 20
itCompanies.shift()
console.log(itCompanies)

// Exercise 21
/*const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'oracle', 'amazon'];

const middleIndex = Math.floor(itCompanies.length / 2);*/
const remainingCompanies = [...itCompanies.slice(0, middleIndex), ...itCompanies.slice(middleIndex + 1)];

console.log(remainingCompanies);


// Exercise 22
itCompanies.pop()
console.log(itCompanies)

// Exercise 23

                                        // Exercise level 2
// Exercise 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const textArray = text.split(" ");

console.log(textArray)
console.log(textArray.length)

// Exercise 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

let beginningOfArray = shoppingCart.unshift('Meat', ...shoppingCart);
let endOfArray = shoppingCart.shift('Sugar');
let removeFromArray = shoppingCart.pop('Honey')
shoppingCart[0] = 'GreenTea'

console.log(beginningOfArray)
console.log(endOfArray)
console.log(removeFromArray)

// Exercise 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

                            // Exercise Level 3
// Exercise 1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort())
let minimunAge = ages[0]
let maximumAge = ages[ages.length -1]

console.log(minimunAge);
console.log(maximumAge);





