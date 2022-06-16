//console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//1.Declare a function fullName and it print out your full name.
function printFullName() {
    let firstName = 'Jose';
    let lastName = 'Gonzalez';
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
  }
 console.log(printFullName()); 
  
//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
  function printFullNameA(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    return fullName;
  }
  const b = printFullNameA('Jose', 'Gonzalez'); 
  console.log(b);

  //3 Declare a function addNumbers and it takes two two parameters and it returns sum.
  const addNumbers = (a, b) => a + b
  const c = addNumbers(4,4)
  console.log(c)

  //4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  const areaOfRectangle = (length, width) =>  length / (1/width)
  const d = areaOfRectangle(10,10)
  console.log(d)

  //5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
  const perimeterOfRectangle = (length, width) => 2 * (length + width)
  const e = perimeterOfRectangle(10, 10)
  console.log(e)

  //6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
  const volumeOfRectPrism = (length, width, heigth) => length * width * heigth 
  const f = volumeOfRectPrism(5,6,8)
  console.log(f)

  //7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
  const  areaOfCircle = radio =>  Math.PI * radio**2
  const g = areaOfCircle(3)
  console.log(g)

  //8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
  const circumOfCircle = radio => 2 * Math.PI * radio
  const h = circumOfCircle(1)
  console.log(h)

  //9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
  const density = (mass, volume) => mass/volume
  const j = density(6, 2)
  console.log(j)

  //10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
  const speed = (distance, time) => distance / time
  console.log(speed(10, 2))

  //11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
  const weight = (mass, gravity) => mass * gravity
  console.log(weight(12,10))

  //12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
  const convertCelsiusToFahrenheit = celcius => (celcius * 1.8) + 32
  console.log(convertCelsiusToFahrenheit(10)) 
  
  //13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//- The same groups apply to both men and women.
//- Underweight: BMI is less than 18.5
//- Normal weight: BMI is 18.5 to 24.9
//- Overweight: BMI is 25 to 29.9
//- Obese: BMI is 30 or more

const yourBmi = (weight, height) => {
let bmi = weight / (height * height)
 bmi < 18.5 && console.log('Underweight')
 bmi > 18.5 && bmi <= 24.9 && console.log('Normal weight')
 bmi > 25 && bmi <= 29.9 && console.log('Overweight')
 bmi > 30 && console.log('Obese') 
}
yourBmi(70, 1.75);

//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// verano = 20 de junio a 22 de septiembre.

(function checkSeason() {
  let month = prompt('What month is it now?', 'Enter a number.');
  (month == '3' || month == '4' || month == '5') && console.log('Spring');
    
  (month == '6' || month == '7' || month == '8') &&  console.log('Summmer');
   
  (month == '9' || month == '10' || month == '11') && console.log('Autumn');
    
  (month == '12' || month == '1' || month == '2' ) && console.log('Winter');
  
});//();

//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum without using Math.max method.
 const findMax = (...num) => {
  let max = num.sort((a,b) => a-b)
  for(let i=0; i<=num.length; i++){
    return num[num.length-1]
  } 
}; console.log(findMax(12,2,9))


// otra solucion
function findMax1(num1, num2, num3) {
  const arr = [num1, num2, num3];
  let maxNum = arr[0]
  for (let i = 0; i < 3; i++) {
    if (maxNum <= arr[i]) {
      maxNum = arr[i]
    }
  }
  return maxNum;
}

console.log(findMax1(4, -30, 7));  //7

//Level 2.

//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c) {
  x = prompt('What\'s the value of x?', 'Enter a number.');
  y = -1 * ((a * x) + c) / b
  return y;
}; //solveLinEquation(2, -1, 5);  //entered 1, returned 7

//2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a, b, c) {
  if (a === undefined || b  === undefined) {
    return 0;
  }

  if (a != 0) {
    x1 = ((-1 * b) + Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
    x2 = ((-1 * b) - Math.sqrt((b * b) - 4 * a * c)) / (2 * a);

    if(x1 === x2) { 
      return x1;
    } else {
      return `${x1}, ${x2}`;
    }
  } else {
    if (b != 0) {
      let x = -1 * c / b;
      return x;
    } else {
      return 0;
    }
  }
}

console.log(solveQuadEquation(1, 0, 0));  //0
console.log(solveQuadEquation());  //0
console.log(solveQuadEquation(4, 0, -4));  //1, -1

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.Permalink
function printArray(arr) {
  return arr.join(', ');
}
console.log(printArray(['michel', 'gonna make', 2]))//michel, gonna make, 2

//4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
 
const showDateTime = () => {
  const now = new Date()
  const day = `${(now.getDate())}`.padStart(2,'0');
  const month = `${(now.getMonth()+1)}`.padStart(2,'0');
  const year = now.getFullYear();
  const date = now.getDate();
  const minutes = now.getMinutes()
  const hours = now.getHours()
  return `${day}/${month}/${year}/${hours}:${minutes}`
 }
  console.log(showDateTime())

//5 Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x,y) => y.toString().concat(',',x)

//otra solucion
function swap_Values(x, y) {
  let a = x;
  x = y;
  y = a;
  return  `${x}, ${y}`;
}
console.log(swapValues(3, 5));  //5, 5
console.log(swap_Values(5,54))

//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const invertirArreglo = (elements) => {
   if(elements instanceof Array){
     return elements.map((valor, index, array) => array[(array.length -1) - index ] )
   }else {
     throw TypeError('la funcion espera un elemento de tipo arreglo')
   }
  
}

try {
  console.log(invertirArreglo([1,2,3,4,5,6]));
} catch (e) {
  console.log(`error: ${e.message}`);
}

// otra solucion
const reverseArray =  array => {
  let resultado = []
  for(let i= 0; i<=array.length-1; i++ ){
    resultado[i] = ((array[(array.length-1) - i])) 
  }
   return resultado
}
console.log(reverseArray([1,2,3,6]))


function countBy(x, n) {
  let z = [];
  for (let i=1; i<=n; ++i){
    z.push(x * i);
  }; return z;
};console.log(countBy(6,10))

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

//capitalize the first letter from array
const capitalizeArray = array => array.map(element => element[0].toUpperCase().concat(element.substring(1).toLowerCase()));

console.log(capitalizeArray(['hola', 'MUNDO']))//['Hola', 'Mundo']

//capitalize all letters
function capitalize_Array(arr) {
  const capArr = [];
  for (let element of arr) {
    capArr.push(element.toUpperCase());
  }
  console.log(capArr);
}
capitalize_Array(['apple', 'banana']);

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const nums = [3,5,9,4]
const addItem = (item, arr) => arr.push(item) && arr;

console.log(addItem('0', nums))

//9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const saludos = ['hola', 'Hi', 'Hello', 'nihao']

function removeItem (item, array){
  
  if(!array.includes(item))
    console.log(`${item} no existe`)
  if(array.includes(item))
    array.splice(array.indexOf(item), 1)
    return array    

  };console.log(removeItem('hol', nums))

//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers (num){
  let sum = 0;
  for (let i=0; i<=num; ++i){
    sum += i
  }; return sum;
  
}; console.log(sumOfNumbers(5)) //15

//11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds (nums) {
  sum = 0
  for (let i=0; i<=nums; ++i){
      if(i % 2 !== 0 ){
       sum += i
     } 
  } return sum
}; console.log(sumOfOdds(10))

//otra solucion
function sumOf_Odds (min, max) {
  sum = 0
  for (let i=min; i<=max; ++i){
      if(i % 2 !== 0 ){
       sum += i
     } 
  } return sum
}; console.log(sumOf_Odds(5,10))

//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven (min, max) {
  sum = 0
  for (let i=min; i<= max; ++i){
      if(i % 2 == 0 ){
       sum += i
     } 
  } return sum
}; console.log(sumOfEven(0,5))

//13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
  let sumOdds = []
  let sumEvens = []
  for (let i= 0; i<= num; ++i){
      if(i % 2 !== 0 )
       sumOdds.push(i)
      if(i % 2 == 0 )
       sumEvens.push(i)
  } return {
    odds: `The number of odds are ${sumOdds.length}`,
    evens: `The sum of evens are ${sumEvens.length}`
  } 
}; console.log(evensAndOdds(100))

//14. Write a function which takes any number of arguments and return the sum of the arguments
function sumArgs (...n) {
  return n.reduce((acc, curr) => acc + curr)
}; console.log(sumArgs(1,2,3,3,' hola'))

//15. Write a function which generates a randomUserIp.
function randomUserIp () {
const ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
console.log(ip)
}; randomUserIp()

//otra solucion
function random_UserIp() {
  let userIp = [];
  for (let i = 0; i < 4; i++) {
    userIp[i] = Math.floor(Math.random() * 256);
  }
  console.log(userIp.join('.'));
}
random_UserIp();

//16. Write a function which generates a randomMacAddress 
function genMAC(){
  var hexDigits = "0123456789ABCDEF";
  var macAddress = "";
  for (var i = 0; i < 6; i++) {
      macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
      if (i != 5) macAddress += ":";
  }

 console.log(macAddress);
}; genMAC()

//17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = () => `#${
  Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,"0")
}`; console.log(randomHexaNumberGenerator())

//18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
//const numsOfCaracters = prompt('Cuantos caracteres desea en su id?')
//const repeatFunc = prompt('cuantos ids desea?')
function userIdGenerator() {
  const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomId = [];
  for (let i = 0; i < 3; i++) {
    randomId[i] = caracters.charAt(Math.floor(Math.random() * caracters.length));
  }
    console.log(randomId.join(''));
};userIdGenerator()

//Exercises: Level 3

//1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function customIdsByUser() {
  const numsOfIds = [];
  for (let i = 0; i < repeatFunc; i++) {
      numsOfIds[i] = userIdGenerator();
  }
};//customIdsByUser()

//2 Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => `rgb(${Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255) })`
;console.log(rgbColorGenerator())

//3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
const arrayOfHexaColors = () => `#${
  Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,"0")
}`; console.log(arrayOfHexaColors())

//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const genetateRgbColor = () => `rgb(${Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255) })`;

function arrayOfRgbColors (repeat){
    const num = [];
    for (let i = 0; i < repeat; i++) {
      num[i] = genetateRgbColor();
  }
  return num
};console.log(arrayOfRgbColors(4))






//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const hexToRGB = (hex, alpha) => {

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};console.log (hexToRGB('#a61c5c',))



//6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(255, 100, 200));

//7. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors (color, repeat) {
  const numOfRepeat = []
   for(let i = 0; i<repeat; i++){
   if (color === 'hexa') numOfRepeat[i] = randomHexaNumberGenerator()
   if (color == 'rgb') numOfRepeat[i] = genetateRgbColor();
 }; return numOfRepeat
}; console.log(generateColors('hexa', 3))

//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray (array) {
  let copy = []
  let n = array.length
  let i;
  
  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);
   
    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return copy;
}; console.log(shuffleArray(['a', 'b', 'c', 'd', 'e']));  //(5) [1, 3, 4, 2, 5]
console.log(shuffleArray([60, 5, 41, -80, 9, 60]));  //(6) [-80, 60, 5, 60, 9, 41]

//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
  let i = 1;
  let numFact = 1;
  while (i <= num) {
    numFact *= i;
    i++;
  }
  console.log(numFact);
}; factorial(5)



//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not.
function isEmpty(parm) {
  if (parm === undefined) {
    console.log('The parameter is empty!');
  } else {
    console.log('The parameter is not empty.');
  }
};isEmpty();  //The parameter is empty!
  isEmpty([1, 2, 3]);  //The parameter is not empty.
  isEmpty([]);

//11. Call your function sum, it takes any number of arguments and it returns the sum.

const suma = (...n) => n.reduce((acc, curr) => (acc + curr))
console.log(suma(2,2,3,4))

//12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
let numeros = [1,2,3,'hola','mundo']

 function sumOfArrayItems (arr) { 

  return arr.reduce((acc, curr) => typeof curr !='number'?  console.log(`'Hay elementos que no son numeros'`) : acc + curr );
 
 }; console.log(sumOfArrayItems(numeros))

//13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average (arr) {
  
  const suma = arr.reduce((acc, curr) => typeof curr !='number'? console.log('Hay elementos que no son numeros') : acc + curr );
  if(suma) return average = suma / arr.length
   
}; console.log(average([5,14,6,15,20]))//12

//14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
let cd = ['google','Amazon','IBM','Oracle','Netflix','Instagram' ]
function modifyArray (array) {

    if(array.length < 5){
    console.log('item not found')
    } else {
    array.splice(5, 1, array[5].toUpperCase());
    };
     return array
}; console.log(modifyArray(cd))

//15. Write a function called isPrime, which checks if a number is prime number.

function isPrime (num) {

  for(let i = 2; i< num; i++){
    if(num % i === 0 ){
      return `${num} is not a prime number.`;
    } return `${num} is a prime number`
      
    
  }; if(num == 2) return `${num} is prime number`

}; console.log(isPrime(151))

//16.Write a functions which checks if all items are unique in the array.

function checkUnique(array) {
  
  let i, obj={};
  for(i=0; i<array.length; i++){
   if(obj[array[i]])
   return 'hay objetos repetidos';
    obj[array[i]]=true;
  } return 'los items son unicos'

}
console.log(checkUnique([1,2,3,4,'hola','hola']));

//otra solucion
const isUnique = (arrToTest) => arrToTest.length === new Set(arrToTest).size? console.log('All items in the array are unique.') : console.log('There are same items in the array')

console.log(isUnique([1,2,3,4,'hola']))

//otra solucion
function uniqueArray(arr) {
  const unique = [...new Set(arr)];
  if (arr.length === unique.length) {
    return 'All items in the array are unique.';
  } else {
    return 'There are same items in the array.';
  }
}

//17.Write a function which checks if all the items of the array are the same data type.
const arrayToChek = [1,2,'hola',3,4]

function allAreEqual(array) {
  const result = array.every(element => {
    if ( typeof element === typeof array[0]) {
      return true;
    }
  });
  return result;
 
}; 

function checkDataType(cb,array){
  if(cb(array))
    console.log('All same data types.')
    else console.log('Different data type detected.')
  
}; checkDataType(allAreEqual, arrayToChek)

//18.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(str) {
  let regex = /[^A-Za-z0-9]/
}

//19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers() {
  let number = '0123456789'
  let randNum = [];
  let i = 10;
  while (i > 3) {
    randNum.unshift(+(number.charAt(Math.floor(Math.random() * i--))));
    number = number.replace(randNum[0], '');
    }
  for (let element of randNum) {
    element = Number(element);
  }
  console.log(randNum);
}; sevenRandomNumbers();

//20. Write a function called reverseCountries, it takes countries array, and first it copies the array and returns the reverse of the original array.
const paises = ['Canada', 'Kenya', 'Ethiopia']
function reverseCountries(arr) {
  const copyCountries = [];
  for (let i = 0; i < arr.length; i++) {
    copyCountries.unshift(arr[i]);
  }
  console.log(copyCountries);
}; reverseCountries(paises);
console.log(paises)