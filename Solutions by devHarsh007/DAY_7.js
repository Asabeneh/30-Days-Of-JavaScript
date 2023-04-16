// DAY 5 - FUNCTIONS
// ===============================================================================================================================================
// EXERCISE LEVEL-1
// ===============================================================================================================================================


// Declare a function fullName and it print out your full name.
function fullName(fName, sName) {
    return fName + " " + sName;
}
// // or 

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullname = (fName, sName) => {
    return fName + ` ` + sName;
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (a, b) => {
    return a + b;
}
// or
const addNumbers = (a, b) => a + b;

// An area of a rectangle is calculated as follows: area = length x width.Write a function which calculates areaOfRectangle.
const areaRect = (l, b) => l * b;

// A perimeter of a rectangle is calculated as follows: perimeter = 2x(length + width).Write a function which calculates perimeterOfRectangle.
const periRect = (l, b) => 2(l + b);

// A volume of a rectangular prism is calculated as follows: volume = length x width x height.Write a function which calculates volumeOfRectPrism.
const prismVol = (l, b, h) => l * b * h;

// Area of a circle is calculated as follows: area = π x r x r.Write a function which calculates areaOfCircle
const areaCircle = (r) => Math.PI * r * r;

// Circumference of a circle is calculated as follows: circumference = 2πr.Write a function which calculates circumOfCircle
const circum = (r) => 2 * Math.PI * r;

// Density of a substance is calculated as follows: density = mass / volume.Write a function which calculates density.
const density = (m, v) => m / v;

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.Write a function which calculates a speed of a moving object, speed.
const speed = (d, t) => d / t;

// Weight of a substance is calculated as follows: weight = mass x gravity.Write a function which calculates weight.
const weight = (m, g) => m * g;

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9 / 5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (c) => c * 9 / 5;

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.Write a function which calculates bmi.BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.(The same groups apply to both men and women.)
//     Underweight: BMI is less than 18.5
//     Normal weight: BMI is 18.5 to 24.9
//     Overweight: BMI is 25 to 29.9
//     Obese: BMI is 30 or more
const calculateBMI = (height, weight) => {
    const BMI = weight / height ** 2;
    const condition = "UnderWeight";
    switch (true) {
        case (BMI > 30):
            condition = "Obese";
            break;
        case (BMI > 25):
            condition = "Overweight";
            break;
        case (BMI > 18.5):
            condition = "Normal Weight";
            break;
        default:
            condition = "Underweight";
    }
}

// Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
const checkseason = (month) => {
    let season;
    switch (month) {
        case "Jan":
        case "Feb":
        case "Dec":
            season = "Winter";
            break;
        case "Mar":
        case "Apr":
        case "May":
            season = "Spring";
            break;
        case "Jun":
        case "Jul":
        case "Aug":
            season = "Summer";
            break;
        case "Sep":
        case "Oct":
        case "Nov":
            season = "Autumn";
            break;
    }

}

//     Math.max returns its largest argument.Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (a, b, c) => {
    let maxNum = a;
    if (maxNum < b) {
        maxNum = b;
    } else if (maxNum > c) {
        maxNum = c;
    }
    return maxNum;
}

// ===============================================================================================================================================
// EXERCISE LEVEL-2
// ===============================================================================================================================================




// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
const solveLinEquation = () => {
    return (-c - by) / a;
}
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// same as before
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
    for (let i of arr) {
        console.log(i + "\n");
    }
}
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
    const dates = new Date();
}
// showDateTime()
// 08/01/2020 04:08

// Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
    x = x + y;
    y = x - y;
    x = x - y;
    return (x, y);
}
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (arr) => {
    output = Array();
    for (let i of arr) {
        output.unshift(i);
    }
    return output;
}

// Declare a function name capitalizeArray.It takes array as a parameter and it returns the - capitalizedarray.
const capitalizedArray = (arr) => {
    let output = [];
    for (let i of arr) {
        output.push(i.toUpperCase());
    }
    return output;
}

// Declare a function name addItem.It takes an item parameter and it returns an array after adding the item
function addItem(...item) {
    let output = [];
    for (let i of item) {
        output.push(i);
    }
    return output;
}

// Declare a function name removeItem.It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index) {
    arr.removeItem(arr.charAt(index));
}

// Declare a function name sumOfNumbers.It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Declare a function name sumOfOdds.It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

// Declare a function name sumOfEven.It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Declare a function name evensAndOdds.It takes a positive integer as parameter and it counts number of evens and odds in the number.
//     evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(num) {
    let numOdd = 0;
    let numEven = 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sumEven += i;
            numEven += 1;
        }
        else {
            sumOdd += i;
            numOdd += 1;
        }
    }
    let statmentOdd = `The number of Odds are ${numOdd}`;
    let statementEven = `The number of Evens are ${numEven}`;
}

// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sumOfArgs(...nums) {
    let sum = 0;
    for (let i of nums) {
        sum += i;
    }
    return sum;
}

// Write a function which generates a randomUserIp.
function genRandnum() {
    return Math.floor(Math.random() * 11);
}
function RandomUserIp() {
    let ipArr = [];
    for (let i = 0; i < 4; i++) {
        ipArr.push(Math.floor(Math.random() * 256))
    }
    let ip = ipArr.join(".");
    return ip;

}

// Write a function which generates a randomMacAddress


// Declare a function name randomHexaNumberGenerator.When this function is called it generates a random hexadecimal number.The function return the hexadecimal number.

//     console.log(randomHexaNumberGenerator());
// '#ee33df'

// Declare a function name userIdGenerator.When this function is called it generates seven character id.The function return the id.

//     console.log(userIdGenerator());
// 41XTDbE

// ===============================================================================================================================================
// EXERCISE LEVEL-3
// ===============================================================================================================================================


// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.It doesn’t take any parameter but it takes two inputs using prompt().One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

//     userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

// Write a function name rgbColorGenerator and it generates rgb colors.

//     rgbColorGenerator()
// rgb(125, 244, 255)

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// Write a function generateColors which can generate any number of hexa or rgb colors.

//     console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.Check if all the array items are number types.If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items.Check if all the array items are number types.If not give return reasonable feedback.

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']);
// ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']);
// ['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']

// console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']);
// 'Not Found'

// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _.Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0 - 9. All the numbers must be unique.
//     sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
