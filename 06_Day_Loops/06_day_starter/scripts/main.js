// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(var i = 0; i <= 10; i++)
{
    console.log(i);
}

var i = 0;
while(i<=10)
{
    console.log(i);
    i++;
}

var i = 0;
do
{
    console.log(i);
    i++;
}while(i<=10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(var i = 10; i >= 0; i--)
{
    console.log(i);
}

var i = 10;
while(i>=0)
{
    console.log(i);
    i--;
}

var i = 10;
do
{
    console.log(i);
    i--;
}while(i>=0);

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
var pattern = "";
for(i = 0; i <= 7; i++)
{
    pattern+="#";
    console.log(pattern);
}

// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for(i = 0; i <= 10; i++)
{
    console.log(`${i} x ${i} = ${i*i}`);
}

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log(`i  i^2  i^3`);
for(i = 0; i <= 10; i++)
{
    console.log(`${i}  ${Math.pow(i, 2)}  ${Math.pow(i, 3)}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for(i = 0; i <= 100; i++)
{
    if(i%2==0 && i!=0)
    {
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(i = 0; i <= 100; i++)
{
    if(i%2!=0 && i!=0)
    {
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
console.log("nombre premiers: ")
var nbdiviseur = 0;
for(i = 1; i <= 100; i++)
{
    nbdiviseur = 0;
    for(var j = 2; j<i; j++)
    {
        if(i%j==0)
        {
            nbdiviseur++;
        }
    }
    if(nbdiviseur==0)
    {
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
var sumnombre = 0;
for(i = 0; i <= 100; i++)
{
    sumnombre += i;
}
console.log("The sum of all numbers from 0 to 100 is "+sumnombre+".");

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
var sumnombreeven = 0;
var sumnombreodd = 0;
for(i = 0; i <= 100; i++)
{
    if(i%2==0)
    {
        sumnombreeven += i;
    }
    else
    {
        sumnombreodd += i;
    }
    sumnombre += i;
}
console.log("The sum of all evens from 0 to 100 is "+sumnombreeven+". And the sum of all odds from 0 to 100 is "+sumnombreodd+".")
console.log([sumnombreeven, sumnombreodd]);

// Develop a small script which generate array of 5 random numbers
var tab = [];
for(i = 0; i <5; i++)
{
    tab.push(Math.floor(Math.random()*69));
}
console.log(tab);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique 
// aiko fa kamo zah

// Develop a small script which generate a six characters random id:
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var randomid = "";
for(i = 0; i <6; i++)
{
    randomid+=characters[Math.floor(Math.random()*characters.length)];
}
console.log(randomid);

// Develop a small script which generate any number of characters random id:
randomid = "";
for(i = 10; i < Math.floor(Math.random()*255+10); i++)
{
    randomid+=characters[Math.floor(Math.random()*characters.length)];
}
console.log(randomid);

// Write a script which generates a random hexadecimal number.
// pfffff

// Write a script which generates a random rgb color number.
$("body").append(`<div style="height:100px; width:100px;background-color: rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})"></div>`);

// Using the above countries array, create the following new array.
tab = [];
for(i = 0; i < countries.length; i++)
{
    if(countries[i].toUpperCase()=="ALBANIA" || 
    countries[i].toUpperCase()=="BOLIVIA" ||
    countries[i].toUpperCase()=="CANADA" ||
    countries[i].toUpperCase()=="DENMARK" ||
    countries[i].toUpperCase()=="ETHIOPIA" ||
    countries[i].toUpperCase()=="FINLAND" ||
    countries[i].toUpperCase()=="GERMANY" ||
    countries[i].toUpperCase()=="HUNGARY"||
    countries[i].toUpperCase()=="IRELAND" ||
    countries[i].toUpperCase()=="JAPAN" ||
    countries[i].toUpperCase()=="KENYA")
    {
        tab.push(countries[i].toUpperCase());
    }
}
console.log(tab);

// Using the above countries array, create an array for countries length'.
var countrylength = [];
for(i = 0; i < tab.length; i++)
{
    countrylength.push(tab[i].length);
}
console.log(countrylength);

// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

var bref = [];
for(i = 0; i < tab.length; i++)
{
    bref.push([tab[i].charAt(0).toUpperCase() + tab[i].toLowerCase().slice(1), tab[i].substring(0,3), countrylength[i]]);
}
console.log(bref);

// In above countries array, check if there is a country or countries containing the word 'land'. 
// If there are countries containing 'land', print it as array. 
// If there is no country containing the word 'land', print 'All these countries are without land'.
var countrieswithland = [];
for(i = 0; i < countries.length; i++)
{
    if(countries[i].indexOf("land")!=-1)
    {
        countrieswithland.push(countries[i]);
    }
}
if(countrieswithland.length==0)
{
    console.log('All these countries are without land');
}
else
{
    console.log(countrieswithland);
}

// In above countries array, check if there is a country or countries end with a substring 'ia'. 
// If there are countries end with, print it as array. 
// If there is no country containing the word 'ai', print 'These are countries ends without ia'.
var countriesendswithia = [];
for(i = 0; i < countries.length; i++)
{
    if(countries[i].endsWith("ia"))
    {
        countriesendswithia.push(countries[i]);
    }
}
if(countriesendswithia.length==0)
{
    console.log('These are countries ends without ia');
}
else
{
    console.log(countriesendswithia);
}

// Using the above countries array, find the country containing the biggest number of characters.

var biggestnumberofcharacters = 0;
var bigPPcountry = "";
for(i = 0; i < countries.length; i++)
{
    if(countries[i].length>biggestnumberofcharacters)
    {
        biggestnumberofcharacters = countries[i].length;
        bigPPcountry = countries[i];
    }
}
console.log(bigPPcountry);

// Using the above countries array, find the country containing only 5 characters.
var fiveletterscountry = [];
for(i = 0; i < countries.length; i++)
{
    if(countries[i].length==5)
    {
        fiveletterscountry.push(countries[i]);
    }
}
console.log(fiveletterscountry);

// Find the longest word in the webTechs array
var longestwordinthewebTechs = [];
var bigPPword = 0;
for(i = 0; i < webTechs.length; i++)
{
    if(webTechs[i].length>bigPPword)
    {
        bigPPword = webTechs[i].length;
        longestwordinthewebTechs = webTechs[i];
    }
}
console.log(longestwordinthewebTechs);

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
var bref2 = [];
for(i = 0; i < webTechs.length; i++)
{
    bref2.push([webTechs[i], webTechs[i].length]);
}
console.log(bref2);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
var acronymMERN = "";
for(i = 0; i < mernStack.length; i++)
{
    acronymMERN+=mernStack[i][0];
}
console.log(acronymMERN);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// letie

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
var fruits = ['banana', 'orange', 'mango', 'lemon'];
var tempfruit = [];
for(i = fruits.length-1; i >= 0 ; i--)
{
    tempfruit.push(fruits[i]);
}
console.log(tempfruit);

// Print all the elements of array as shown below.
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];

for(i = 0; i < fullStack.length; i++)
{
    for(var j = 0; j<fullStack[i].length; j++)
    {
        console.log(fullStack[i][j]+"\n");
    }
}

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
var sortedCountries = [];
for(i = 0; i < countries.length; i++)
{
    sortedCountries.push(countries[i]);
}
sortedCountries.sort();
console.log(sortedCountries);

// efa natao lay ambony reo