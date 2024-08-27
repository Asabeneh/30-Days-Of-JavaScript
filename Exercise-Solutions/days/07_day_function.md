# Day 7 - Functions
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercise-level-1)
- ### [Exercise:Level 2](#exercise-level-2)
- ### [Exercise:Level 3](#exercise-level-3) <hr>

 #### [Home](../README.md) | [<< Day 6](./06_day_loops.md) | [Day 8 >>](./08_day_object.md)


## Exercise Solutions

### Exercise Level 1

1.  Declare a function fullName and it print out your full name.

```js
//app.js

function fullName(){
    console.log("nevzat atalay")
}
fullName()

```

2.  Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
```js
//app.js

function fullName(name,lastname){
    let str="  "
    console.log(name + str + lastname)
}
fullName('nevzat','atalay')
```


 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
```js
//app.js

function addNumbers(num1,num2){
    let sum =0
        sum += num1 + num2
        return  sum
}
console.log(addNumbers(7,8))
```


4.  An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
```js
//app.js

function areaOfRengle(width,length){
    area = width * length
        return  area
}
console.log(areaOfRengle(7,8))
```


5.  A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
```js
//app.js

function perimeterOfRengle(width,length){
    perimeter = 2 * (width + length)
        return  perimeter
}
console.log(perimeterOfRengle(7,8))
```


6.  A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
```js
//app.js

function volumeOfRengle(width,length,height){
    volume = width * length *height
        return  volume
}
console.log(volumeOfRengle(7,8,9))
```


 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
```js
//app.js

function areaCircle(r){
    area = Math.floor(Math.PI)*r*r
    return area
}
console.log(areaCircle(3))
```


8.  Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
```js
//app.js

function ferenceCircle(r){
    ference = 2 *  Math.floor(Math.PI)*r
    return ference
}
console.log(ferenceCircle(3))
```


9.  Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
```js
//app.js

function densitySubtance(mass,volume){
    density = mass/volume
    return volume
}
console.log(densitySubtance(10,2))
```


 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
```js
//app.js

function speedDivid(distance,time){

    speed = distance/time
    return speed
}
console.log(speedDivid(100,2))
```


11.  Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
```js
//app.js

function weightSubtance(mass,gravity){
    weight = mass * gravity
    return weight
}
console.log(weightSubtance(5,10))
```


 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
```js
//app.js

function convertCelciusToFahrenheit(celcius){
    fahrenheit = (celcius * 9/5) + 32
return fahrenheit
}
console.log(convertCelciusToFahrenheit(1))
```


 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
```
- The same groups apply to both men and women.
- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more
```
```js
//app.js

function bmiPeople(weight,height,){

    bmi = weight/(height*height)
if(bmi <=18.5){
    console.log('Underweight')
    return
}
else if(bmi >=18.5 && bmi <=24.9 ){
    console.log('Normal weight')
    return

}
else if(bmi >= 25 && bmi <=29.9){
    console.log('Overweight')
    return
}
else if(bmi >=30){
    console.log('Obese')
    return
}
else{
    console.log('letfen degerlerinizikontrol ediniz')
}
}
bmiPeople(100,1.54)
```


14.  Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
```js
//app.js

function checkSeason(mount){
    if(mount=='september' || mount=='november' ||mount=='october' ){
        console.log('season is Autum')
    }
    else if(mount=='december' || mount=='january' ||mount=='february' ){
        console.log('season is winter')
    }
    else if(mount=='march' || mount=='may' ||mount=='april' ){
        console.log('season is spring')
    }
}
checkSeason('september')
```


 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
```
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
```

```js
//app.js
function findMaxNumber(a,b,c){

    maxnumber = Math.max(a,b,c)
    return maxnumber
}
console.log(findMaxNumber(3,5,7))
```

## Exercise Level 2

 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
```js
//app.js

function solveLinEquation(a, b, c, x) {
  // ax + by + c = 0 denkleminde x değeri verildiğinde y değerini hesaplar
  // y = (-c - ax) / b formülünü kullanır
  // a, b, c, x sayısal değerler olmalıdır
  // b sıfır olmamalıdır
  // y değeri sayısal olarak döndürülür
  if (b === 0) {
    throw new Error("b değeri sıfır olamaz");
  }
  let y = (-c - a * x) / b;
  return y;
}
let a = solveLinEquation(3,5,7,8)

console.log(a)
```


 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
```
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
```
```js
//app.js

// solventQuadEquation fonksiyonu tanımlanıyor
function solventQuadEquation(a, b, c) {
  // diskriminant hesaplanıyor
  let d = b * b - 4 * a * c;
  // diskriminantın sıfırdan büyük veya eşit olup olmadığı kontrol ediliyor
  if (d >= 0) {
    // diskriminantın karekökü alınıyor
    let sqrt_d = Math.sqrt(d);
    // denklemin kökleri hesaplanıyor
    let x1 = (-b + sqrt_d) / (2 * a);
    let x2 = (-b - sqrt_d) / (2 * a);
    // kökleri bir dizi olarak döndürüyor
    return [x1, x2];
  } else {
    // diskriminant negatif ise, hata mesajı döndürüyor
    return "Denklemin gerçek kökü yoktur.";
  }
}

// denklemin katsayıları 
let a = 1;
let b = -5;
let c = 6;

// fonksiyon çağrılıyor ve sonucu yazdırılıyor
console.log(solventQuadEquation(a, b, c));

```

 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
```js
//app.js

const arr = [1,2,3,4,5,6,7]

function printArr(){
    for(const num of arr){
        console.log(num)
    }
}
printArr(arr)
```


4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
```
showDateTime()
08/01/2020 04:08
```
```js
//app.js

function showDateTime(){

    let now = new Date();

let day = now.getDate()
let mount = now.getMonth() +1
let year = now.getFullYear()
let hours = now.getHours()
let minut  = now.getMinutes()

if(day<10){
    day = '0'+ day
}
if(mount<10){
    mount = '0' + mount
}
if(hours<10){
    hours = '0' + hours
}
if(minut<10){
    minut = '0' + minut
}

return console.log(`${day}/${mount}/${year}  ${hours}:${minut} `)

}
showDateTime()

```


5. Declare a function name swapValues. This function swaps value of x to y.
```
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
```
```js
//app.js

function swapValue(x,y){

    let changeX = y
    let changeY = x
    return  console.log(`${changeX},${changeY}`)}
    swapValue(5,4)

```

 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
```
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
```
```js
//app.js

const arr = [1,2,3,4,5,6,7]

function reverseArr(){
    return console.log(arr.reverse())
}
reverseArr(arr)
```


 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
```js
//app.js

const arr = ['nevzat', 'atalay', 'bitlis']

arr.forEach(word => {
    console.log( word.toUpperCase())  
})
```


 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
```js
//app.js

function addItem(text){
    arr = text.split(" ")
    return arr
  }
  console.log(addItem('Nevzat Atalay Bitlis'))
```

  
 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
```js
//app.js

function removeItem(index) {
    array = [1,2,3,4,5,6,7,8,9]
    assume the array is defined globally
    var newArray = array.slice(); // make a copy of the array
    newArray.splice(index, 2); // remove the item at the given index
    return newArray; // return the new array
  }
  console.log(removeItem(2))
```

  
 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
```js
//app.js

function sumOfNumbers(number){
    
    let sum = 0;
    for(let i=1; i<=number; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));
```


11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
```js
//app.js

function sumOfOddNumbers(number){
    
    let sum = 0;
    for(let i=1; i<=number; i+=2){
        sum += i;
    }
    return sum;
}
console.log(sumOfOddNumbers(4));
```



12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
```js
//app.js

function sumOfEvenNumbers(number){
    
    let sum = 0;
    for(let i=0; i<=number; i+=2){
        sum += i;
    }
    return sum;
}
console.log(sumOfEvenNumbers(4));
```


13. parameter and it counts number of evens and odds in the number.
```
evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
```
```js
//app.js

eventsAndOdds(100)

function eventsAndOdds(number){
 
  let event=0
  let odd = 0
  for(let i =0; i<=number; i++){
     if(i%2 ==0){
       event = event +1
     }
     else{
       odd = odd +1
     }
  }
  console.log(`Number is includes ${event} event and ${odd} odd number`)
}

```

14. Write a function which takes any number of arguments and return the sum of the arguments
```
sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
```
```js
//app.js

function sumNumbers(number1,number2,number3){
    let sum = number1+number2+number3
  
   return console.log(sum)
 }
 sumNumbers(1,2,3,)
```


 15. Writ a function which generates a randomUserIp.
```js
//app.js

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomUserIp(){
    const ip = [getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255)]
    return ip.join('.')
  }
  console.log(randomUserIp())

```

  
 16. Write a function which generates a randomMacAddress

```js
//app.js

function getRandomHex(){
    const arr = ['0',"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    return arr[Math.floor(Math.random()*arr.length)]
  }
  
  function randomMacAdres(){
  
  const mac = [getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex()
  
  ]
  return mac.join(':')
  }
  console.log(randomMacAdres())
  ```
  

17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
```
console.log(randomHexaNumberGenerator());
'#ee33df'
```
```js
//app.js

function ranfomHexzadecimal(){
    let text = '0123456789ABCDEF'
     let hex = '#'
     for(let i=0; i<6; i++){
      let index = Math.floor(Math.random()*text.length)
      hex += text[index]
     }
     return hex
  }

  console.log(ranfomHexzadecimal())
  ```

18.  Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
```
console.log(userIdGenerator());
41XTDbE
```
```js
//app.js

function userIdGenerator(){
    let text = '0123456789ABCDEFGHJKLMNOPRSŞTOVYZabcdefghojklmnprsştvyz'
     let id = ''
     for(let i=0; i<7; i++){
      let index = Math.floor(Math.random()*text.length)
      id += text[index]
     }
     return id
  }
  console.log(userIdGenerator())
```

## Exercise Level 3

1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

```js
// app.js

let charecter = prompt("Kaç karekterli id istiyorsunuz");
let piece = prompt("kaç adet id istiyorsunuz");

function userIdGeneratedByUser() {
  let str = "1234567890abcdefghıijklmnoöprsştyüvyz";
  let id = "";

  for (let i = 0; i <= charecter; i++) {
    id += str[Math.floor(Math.random() * str.length)];
  }

  console.log(id);
}

callingUserIdGeneratedByUser(piece);

function callingUserIdGeneratedByUser(n) {
  for (let i = 0; i < n; i++) {
    userIdGeneratedByUser();
  }
}
```
2. Write a function name rgbColorGenerator and it generates rgb colors.


```js
// app.js

function rgbColor(){
    let randomNumber1 = Math.floor(Math.random() * 255)
    let randomNumber2 = Math.floor(Math.random() * 255)
    let randomNumber3 = Math.floor(Math.random() * 255)

    return `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`

}
console.log(rgbColor())
```

3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

```js
// app.js


const array = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]

function arrayOfHexaColors(n){
    let hexaColor = "#"
     
    for(let i=0; i<6; i++){
        hexaColor+= n[Math.floor(Math.random()*n.length)]
    }

    return  console.log(hexaColor)
}

arrayOfHexaColors(array)
```
4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

 ```js
// app.js

function arrayOfRgbColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
    return colors;
  }
  
```
5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

 ```js
// app.js

function convertHexaToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  srt="#34f354"
  
  console.log(convertHexaToRgb(srt))


```
6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

 ```js
// app.js

  function convertRgbToHexa(r, g, b) {
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
    return `#${hexR}${hexG}${hexB}`;
  }
```

7. Write a function generateColors which can generate any number of hexa or rgb colors.



 ```js
// app.js

function rgbColor(){
    let randomNumber1 = Math.floor(Math.random() * 255)
    let randomNumber2 = Math.floor(Math.random() * 255)
    let randomNumber3 = Math.floor(Math.random() * 255)
    
    return console.log(`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`)
    
}


function arrayOfHexaColors(){
    const array = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
    
    let hexaColor = "#"
    
    for(let i=0; i<6; i++){
        hexaColor+= array[Math.floor(Math.random()*array.length)]
    }
    
    return  console.log(hexaColor)
}

function generateColors(color,number){
    
    if(color=="hexa"){
        for(let i =0; i<number; i++){
            arrayOfHexaColors()
        }
    }else if(color=="rgb"){
        for(let i=0; i<number; i++){
            rgbColor()
        }
    }
}
console.log(generateColors("hexa",1))
```

8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

```js
// app.js

const array= [1,2,3,4,5,6,7,8,9]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  console.log(   shuffleArray(array)   )
```
9. 

```js
// app.js

function factorial(num) {
    if (num < 0) {
      return -1;
    } else if (num == 0) {
      return 1;
    } else {
      return (num * factorial(num - 1));
    }
  }
  
  console.log(factorial(5))
```
10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

```js
// app.js
function isEmpty(variable) {
  if (variable === null || variable === undefined) {
    return true;
  } else if (typeof variable === 'string' && variable.trim().length === 0) {
    return true;
  } else if (Array.isArray(variable) && variable.length === 0) {
    return true;
  } else if (typeof variable === 'object' && Object.keys(variable).length === 0) {
    return true;
  } else {
    return false;
  }
}
```
11. Call your function sum, it takes any number of arguments and it returns the sum.


```js
// app.js

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```
12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

```js
// app.js
function sumOfArrayItems(arr) {
  if (!Array.isArray(arr)) {
    return "Error: The input is not an array.";
  } else if (arr.length === 0) {
    return "Error: The array is empty.";
  } else if (arr.some(isNaN)) {
    return "Error: The array contains non-numeric elements.";
  } else {
    return arr.reduce((a, b) => a + b, 0);
  }
}
```
13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

```js
// app.js
function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "Error: All elements of the array must be numbers.";
      }
      sum += arr[i];
      count++;
    }
    return sum / count;
  }

```
14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

```js
// app.js
function modifyArray(arr) {
    if (arr.length < 5) {
      return 'item not found';
    }
    arr[4] = 'modified';
    return arr;
  }
```
15. Write a function called isPrime, which checks if a number is prime number.


```js
// app.js
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

```
16. Write a functions which checks if all items are unique in the array.

```js
// app.js
function areAllItemsUnique(arr) {
    return new Set(arr).size === arr.length;
  }
  
  const hey = [1,2,4,4]
  console.log(areAllItemsUnique(hey))
```
17. 
```js
// app.js
function areAllItemsSameType(arr) {
    if (arr.length === 0) {
      return true;
    }
    const firstType = typeof arr[0];
    return arr.every((item) => typeof item === firstType);
  }
  
  const array = [1,2,null,4,5]
  console.log(areAllItemsSameType(array))
```
18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.


```js
// app.js
function isValidVariable(variableName) {
    const regex = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
    return regex.test(variableName);
  }
```
19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
```
sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
```

```js
// app.js
function getUniqueRandomNumbers() {
  const numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numbers);
}

```
20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array


```js
// app.js
function reverseCountries(countries) {
  const copy = countries.slice();
  return copy.reverse();
}
```
 #### [Home](../README.md) | [<< Day 6](./06_day_loops.md) | [Day 8 >>](./08_day_object.md)
