// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];


// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

  
var tab = [];
tab = Array(6);
tab = webTechs;
console.log(tab);
console.log(tab.length);
console.log(tab[0], tab[(Math.round((tab.length)/2))-1],tab[tab.length-1]);

var mixedDataTypes = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
    69.69
];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[Math.round(itCompanies.length/2)-1],itCompanies[itCompanies.length-1]);
console.log(itCompanies.toString());
for(var i = 0; i < itCompanies.length; i++)
{
    itCompanies[i] = itCompanies[i].toUpperCase();
}
console.log(itCompanies.toString());
console.log(itCompanies.join(", ")+" are big IT companies.");

var acertaincompany = "alibaba";
if(itCompanies.indexOf(acertaincompany.toUpperCase())!=-1)
{
    console.log(acertaincompany+" is found");
}
else{
    console.log(acertaincompany+" is not found");
}

var itCompaniesWithMoreThanOneO = [];
for(var i = 0; i < itCompanies.length; i++)
{
    if((itCompanies[i].toLocaleLowerCase()).indexOf('o')!=-1)
    {
        itCompaniesWithMoreThanOneO.push(itCompanies[i]);
    }
}
console.log(itCompaniesWithMoreThanOneO);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(itCompanies.length-3));

itCompanies.splice(0,1);
console.log(itCompanies);
itCompanies.splice(Math.round(itCompanies.length/2)-1, 1);
console.log(itCompanies);
itCompanies.splice(itCompanies.length-1, 1);
console.log(itCompanies);
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

// Create a separate countries.js file and store the countries array in to this file,
//  create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var words = text.split(" ");
console.log(words)
console.log(words.length);

// In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.indexOf('Ethiopia')!=-1)
{
    console.log("ETHIOPIA");
}
else
{
    countries.push('Ethiopia');
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//  If it does not exist add Sass to the array and print the array.
if(webTechs.indexOf('Sass')!=-1)
{
    console.log("Sass is a CSS preprocess");
}
else
{
    webTechs.push('Sass');
    console.log(webTechs)
}

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

var fullStack = frontEnd.concat(backEnd);
console.log(fullStack);



// The following is an array of 10 students ages:
//     Sort the array and find the min and max age
//     Find the median age(one middle item or two middle items divided by two)
//     Find the average age(all items divided by number of items)
//     Find the range of the ages(max minus min)
//     Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages[0], ages[ages.length-1]);
var median = 0;
if(ages%2==0)
{
    median = ages[(ages.length/2)-1]+ages[(ages.length/2)];
    median = median / 2;
}
else
{
    median = ages[(ages.length/2)-1]
}
console.log(ages);
console.log(median);

// Find the middle country(ies) in the countries array
console.log(Math.round(countries.length/2));
console.log(countries[Math.round(countries.length/2)-1]);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
var middleofarray =  Math.round(countries.length/2)-1;
var tab1 = [];
var tab2 = [];

if(countries.length%2==0)
{
    tab1 = countries.slice(0, middleofarray+1);
    tab2 = countries.slice(middleofarray+1, countries.length);
}
else
{
    tab1 = countries.slice(0, middleofarray+1);
    tab2 = countries.slice(middleofarray+1, countries.length);
}
console.log(tab1.length, tab2.length)