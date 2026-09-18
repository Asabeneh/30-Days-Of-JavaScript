console.log(countries)

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries2 = ['Finland', 'Sweden', 'Norway'];

// Exercises:Level 1

// 1- create an empty set
var emptyset = new Set();
console.log(emptyset);

// 2- Create a set containing 0 to 10 using loop
for(var i=0; i <= 10; i++){
    emptyset.add(i);
}
console.log(emptyset);

// 3- Remove an element from a set
emptyset.delete(4);
console.log(emptyset);

// 4- Clear a set
emptyset.clear();
console.log(emptyset);

// 5- Create a set of 5 string elements from array
var array = ["element1", "element2", "element3", "element4", "element5"];
emptyset = new Set(array);
console.log(emptyset);

// 6- Create a map of countries and number of characters of a country
var map = new Map();
for(var i = 0; i < countries.length; i++)
{
    map.set(countries[i].name, countries[i].name.length);
}
console.log(map);

// Exercises:Level 2

//     1) Find a union b
var c = [...a, ...b];
var C = new Set(c);
console.log(C);

//     2) Find a intersection b
var B = new Set(b);
c = a.filter(function(value){
    return B.has(value)
})
C = new Set(c);
console.log(C);

//     3) Find a with b



// Exercises:Level 3
// 1- How many languages are there in the countries object file.
var tab = [];
for(var i = 0; i < countries.length; i++)
{
    for(var j = 0; j < countries[i].languages.length; j++)
    { 
        tab.push(countries[i].languages[j]);
    }
}
emptyset = new Set(tab);
console.log("number of languages in countries: ", emptyset.size);

var verif = tab.filter(function(value, index, self){
    return tab.indexOf(value) == index;
});

console.log("verification : ", verif.length);

// *** Use the countries data to find the 10 most spoken languages:

   // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]
