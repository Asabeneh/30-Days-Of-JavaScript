console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

//Exo level 01

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

  //exo 01

  const arr = new Array(); 
  console.log(arr);

  //exo 02

  const arr2 = [1,1,2,3,4,5,6,7,8,9,10,11];
  console.log(arr2.length);// 12

  //exo 04

  console.log(arr2[0]); //1
  console.log(arr2[5]); //6
  console.log(arr2[arr2.length - 1 ]); //11

  //exo 05
  const mixwsDataTypes = [1, 'amount', 'q',34, true];

  //exo 06
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.length);
//(6) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  console.log(itCompanies.length);//7
  console.log(itCompanies[0]);//Facebook
  const middleIndex = Math.floor(itCompanies.length/2);
  console.log(itCompanies[middleIndex]);//Apple
  console.log(itCompanies[itCompanies.length - 1]);//Amazon
  console.log(itCompanies[0]);
  console.log(itCompanies[0]);
  console.log(itCompanies[1]);
  console.log(itCompanies[2]);
  console.log(itCompanies[3]);
  console.log(itCompanies[4]);
  console.log(itCompanies[5]);
  console.log(itCompanies[6]);

  console.log(itCompanies[0].toUpperCase());
  console.log(itCompanies[1].toUpperCase());
  console.log(itCompanies[2].toUpperCase());
  console.log(itCompanies[3].toUpperCase());
  console.log(itCompanies[4].toUpperCase());
  console.log(itCompanies[5].toUpperCase());
  console.log(itCompanies[6].toUpperCase());

  console.log(itCompanies.join());

  //
  const companyToFind = prompt('Enter a company:');
  const companyExists = itCompanies.includes(companyToFind);

  companyExists ? console.log(`${companyToFind} already exists`) : console.log(`${companyToFind} not found`);

  //
  const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Iterate through each company and count the 'o' occurrences
console.log("Companies with more than one 'o':");
if (itCompanies[0].toLowerCase().split('o').length - 1 > 1) {
    console.log(itCompanies[0]);
}
if (itCompanies[1].toLowerCase().split('o').length - 1 > 1) {
    console.log(itCompanies[1]);
}
if (itCompanies[2].toLowerCase().split('o').length - 1 > 1) {
    console.log(itCompanies[2]);
}
if (itCompanies[3].toLowerCase().split('o').length - 1 > 1) {
    console.log(itCompanies[3]);
}
if (itCompanies[4].toLowerCase().split('o').length - 1 > 1) {
    console.log(itCompanies[4]);
}
if (itCompanies[5].toLowerCase().split('o').length - 1 > 1) {
    console.log(itCompanies[5]);
}
if (itCompanies[6].toLowerCase().split('o').length - 1 > 1) {
    console.log(itCompanies[6]);
}

//
itCompanies.sort();
itCompanies.reverse();
itCompanies.slice(0, 3);
itCompanies.slice(-3);//['IBM', 'Oracle', 'Amazon']
itCompanies.shift();//'Facebook'

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const middleIndex = Math.floor(itCompanies.length / 2);
const numberOfCompaniesToSlice = itCompanies.length % 2 === 0 ? 2 : 1; // 1 for odd length, 2 for even length

const middleCompanies = itCompanies.slice(middleIndex, middleIndex + numberOfCompaniesToSlice);
console.log("Middle company(s):", middleCompanies);

itCompanies.splice(middleCompanies, middleIndex+numberOfCompaniesToSlice);

itCompanies.pop();

itCompanies.splice();//[]

//exercice level 02

//exo 01
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const  sanitizedText = text.replace(/[.,]/g, '');
const wordsArray = sanitizedText.split(' ');
console.log(wordsArray);
console.log(wordsArray.length);

//exo 02

const shoppingCart = ['Milk', 'coffee', 'tea', 'Honey'];
shoppingCart.unshift('meat');
console.log(shoppingCart);//['meat','Milk', 'coffee', 'tea', 'Honey']
shoppingCart.push('sugar');//['meat','Milk', 'coffee', 'tea', 'Honey', 'sugar']
shoppingCart.splice(4, 1);
console.log(shoppingCart);// ['meat', 'Milk', 'coffee', 'tea', 'sugar']
shoppingCart[3]='green tea';
console.log(shoppingCart);//['meat', 'Milk', 'coffee', 'green tea', 'sugar']

//exercice level 03

//exo 01

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const arrangedArray = ages.sort();
console.log(arrangedArray);
const min = arrangedArray[0]; 
const max = arrangedArray[ages.length - 1];

const medianAge = Math.floor(arrangedArray.length / 2);

if(ages.length % 2 == 0) {
    //if the array has an even number of values
    const medianVal1 = arrangedArray[medianAge -1];
    const medianVal2 = arrangedArray[medianAge];
    const median = (medianVal1 + medianVal2)/2;
    console.log('median age is:', median);
} else {
    //if the array has an odd number of values
    const median = arrangedArray[medianAge];
}//24

const sumOfAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumOfAges / ages.length;
console.log('average age is:', averageAge);//22.8

const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

const ageRange = maxAge - minAge;
console.log('min age range is:', minAge, 'max age range is:', maxAge, 'age range is:', ageRange);

const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log('min diff is:', minDiff, 'max diff is:',maxDiff);