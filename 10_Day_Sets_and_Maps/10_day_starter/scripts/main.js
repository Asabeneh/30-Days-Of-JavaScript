console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//Exercises:Level 1
/*const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']*/

//1.create an empty set
const set = new Set();
//2.Create a set containing 0 to 10 using loop
const set1 = new Set();
for (let i = 0; i < 10; i++) {
  set.add(i);
}

console.log(set);
//3. Remove an element from a set
const arr = [2, 8, 10, 7];
const set2 = new Set(arr);
set.delete(10);

console.log(set2);  // Set(3) {2, 8, 7}
//4. Clear a set
const arr1 = ['a', 'b', 'c', 'd'];
const set3 = new Set(arr);
set.clear();

console.log(set3); 
//5. Create a set of 5 string elements from array
const fruits = ['apple', 'mango', 'kiwi', 'peach', 'orange']
const setOfFruits = new Set(fruits);

console.log(setOfFruits);
//6. Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const mapOfCountries = new Map();

for (const ctr of countries) {
  mapOfCountries.set(ctr, ctr.length)
}

console.log(mapOfCountries);
