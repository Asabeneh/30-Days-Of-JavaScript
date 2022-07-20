
//alert('Open the browser console whenever you work on JavaScript')
//alert('Open the console and check if the countries has been loaded')


//1. Declare an empty array;
     const emptyArr = []

//2. Declare an array with more than 5 number of elements
     const numbers = [1, 2, 3, 4, 5]

//3. Find the length of your array
     console.log('numbers length:',numbers.length)

//3. Get the first item, the middle item and the last item of the array
     console.log(numbers[0], numbers[2], numbers[4])

//4. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
     const mixedDataTypes = [52, 'Potatoes', true, {}, [1,2] ]
     console.log(mixedDataTypes.length)

//5. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
     const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//6. Print the array using console.log()
     console.log(itCompanies)

//7. Print the number of companies in the array
     console.log(itCompanies.length)

//8. Print the first company, middle and last company
     console.log(itCompanies[0], itCompanies[3], itCompanies[6])

//9 Print out each company
     console.log(itCompanies.slice())

//10. Change each company name to uppercase one by one and print them out
     console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase() )
     
//11. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
      console.log(`${itCompanies.join(', ')} are big IT companies.`) 

//12. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
      let enter = 'Google'
      let index = itCompanies.indexOf(enter) 
     if(index !== -1){
      console.log(`${itCompanies[index]} found`)
     }else{
          console.log(`${enter} is not found`)
     }
        
//13. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
     let myStr = itCompanies[i];
     let count = 0;
     let position = myStr.indexOf("o");
     while ( position != -1 ) {
    count++;
    position = myStr.indexOf("o", position + 1);
     }
     if (count >= 2) {
         console.log(itCompanies[i]);
     }
 }

 //With regext
let pattern = /o/gi;
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].match(pattern) && itCompanies[i].match(pattern).length >= 2) {
    console.log(itCompanies[i]);
  }
}

//14. Sort the array using sort() method
   console.log(itCompanies.sort())

   const arr = [45,13,1,5,6,8,12,14,20,19,23]
   const compare = (a,b)=> a-b
   console.log(arr.sort(compare))

//15. Reverse the array using reverse() method
const reverse = arr.reverse() //[45, 23, 20, 19, 14, 13, 12, 8, 6, 5, 1]

//16. Slice out the first 3 companies from the array
const itCompaniesSlice = itCompanies.slice(3)
console.log(itCompaniesSlice)

//17. Slice out the last 3 companies from the array
 const sliceLast = itCompanies.slice(0,4)
 console.log(sliceLast)
 
//18. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))

//19. Remove the first IT company from the array
console.log(itCompanies.slice(1))

//20. Remove the middle IT company or companies from the array
console.log(itCompanies)
console.log(`Muestra el array mutado apartir del indice 2 y extrayendo 3 elementos ${itCompanies.splice(2,3,'Netflix' )}`)
console.log(`El array original con el parametro 'Netflix' agregado ${itCompanies}`)

//21. Remove the last IT company from the array
const removeLastIt = itCompanies.slice(0,4) //Amazon, Apple, Netflix,Microsoft,
//22. Remove all IT companies
const removeAllIt = itCompanies.splice() //[]

//Exercise: Level 2

//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
let replace = text.replace(/[^\w ]/g, '');
console.log(replace);
const words = text.split(' ')
console.log(words);
console.log(words.length)

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
/*add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

shoppingCart.splice(0,0,'Meat')
shoppingCart.splice(3,2,'Sugar','Green Tea')
//shoppingCart.splice(4,2,'Green Tea')
console.log(shoppingCart)

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
    
      let i = countries.indexOf('Ethiopia')
      if(i) console.log(countries[i]), countries.splice(i,1,'ETHIOPIA')
      console.log(countries)

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
     'HTML',
     'CSS',
     'JavaScript',
     'React',
     'Redux',
     'Node',
     'MongoDB',

   ]

 webTechs.includes('Sass')? console.log('Sass is a CSS preprocess'): webTechs.unshift('Saas')
 console.log(webTechs)
  
//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Exercise: Level 3

//1.The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//-Sort the array and find the min and max age
ages.sort((a,b) => a-b)
console.log(ages)
let max = Math.max(...ages)
let min = Math.min(...ages)
const minMax = [max,min]
console.log(`The min and max from ages is ${minMax}`)

//-Find the median age(one middle item or two middle items divided by two)
if(ages.length % 2 === 0 ){
   middle = ages.slice(ages.length / 2 - 1, ages.length / 2 + 1)
   median = middle.reduce((a, b)=>a + b) / 2
   console.log(median)
}  console.log(ages.slice(ages.length / 2, ages.length / 2 + 1))


//°Find the average age(all items divided by number of items)
const average = Math.round(ages.reduce((a,b) => a+b) / ages.length)
console.log(`The average from ages is ${average}`) 

//°Find the range of the ages(max minus min)
let range = console.log(max - min);

//°Compare the value of (min - average) and (max - average), use abs() 
console.log(Math.abs(min-average))
console.log(Math.abs(max-average))

//method 1.Slice the first ten countries from the countries array
let slice = countries.slice(0,10)
console.log(slice)

//2. Find the middle country(ies) in the countries array
console.log(countries.slice(countries.length / 2-1 ,countries.length /2 + 1))

//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
countries.length % 2 === 0? console.log( countries.slice(countries.length / 2 )) : countries.splice(countries.length/ 2 + 1, 0, 'Bakutan')
console.log(countries.indexOf('Bakutan'))
console.log(countries)

let string = 'I am string'
let string2 = string[0] = 'T'
console.log(string2)
console.log(string)
console.log(string.indexOf('s'))


