console.log(countries)
// alert('Open the console and check if the countries has been loaded')
                                    // Day 7 exercises
// Exercise 1 & 2
const fullName = (firstName, secondName) => {
    return `My full name is ${firstName} ${secondName}`
};

const name = fullName('Gideon', 'Buba')
console.log(name);

// Exercise 3
function addNum(x, y) {
    let sum = x + y;
    return sum;
}

console.log(addNum(20, 20))

// Exercise 4

function areaOfRectangle(length, width) {
    const rectangleArea = length * width;
    return rectangleArea;
}

console.log(areaOfRectangle(50, 30)) 

// Exercise 5
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter
}

console.log(perimeterOfRectangle(50, 30))

// Exercise 6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}

console.log(volumeOfRectPrism(70, 30, 40))

// Exercise 7
function areaOfCircle(r) {
    let π = Math.PI;
    let area  = π * r * r;
    return area;
}

console.log(areaOfCircle(30))

// Exercise 8
function circumOfCircle(r) {
    let π = Math.PI;
    let circumference = 2*π*r ;
    return circumference
}

console.log(circumOfCircle(10))

// Exercise 9
function calculateDensity(mass, volume) {
    let density = mass / volume;
    return density;
}

console.log(calculateDensity(20, 30))

// Exercise 10
function calculateSpeed (distance, time) {
    let speed = distance / time;
    return speed;
}

console.log(calculateSpeed(50, 60))

// Exercise 11
function calculateWeight  (mass) {
    const gravity = 9.8
    const weight = mass * gravity;
    return weight;
}

console.log(calculateWeight(60))

// Exercise 12
function convertCelsiusToFahrenheit (celcius) {
    let conversion = (celcius * 9 / 5) + 32;
    return conversion;
}

console.log(convertCelsiusToFahrenheit(50))

// Exercise 13
function bmi (weightInKg, heightInMeterSquare) {
    let findBmi = weightInKg / (heightInMeterSquare * heightInMeterSquare);

    if (findBmi < 18.5) {
        return 'You are underweight'
    } else if (findBmi >= 18.8 && findBmi < 24.9) {
        return "Your BMI is normal"
    } else if (findBmi === 25 && findBmi < 29.9) {
        return `You have a slightly overweight`
    } else if (findBmi >= 30) {
        return `You are obese`;
    } else {
        return 'Invalid Input'
    }
}

console.log(bmi(72, 1.83))

// Exercise 14
function checkSeason(month) {
    const autumn =  ['september', 'october', 'november']
    const winter = ['december', 'january', 'february']
    const spring = ['march', 'april', 'may']
    const summer = ['june', 'july', 'august']

    const lowerCaseMonth = month.toLowerCase();

    if (autumn.includes(lowerCaseMonth)) {
        return `${month} is autumn`
    } else if (winter.includes(lowerCaseMonth)) {
        return `${month} is winter`
    } else if (spring.includes(lowerCaseMonth)) {
        return `${month} is spring`
    } else if (summer.includes(lowerCaseMonth)) {
        return `${month} is summer`
    } else {
        return 'Invalid Input'
    }
}

console.log(checkSeason('JuNe'))

// Exercise 15
function largestArgument (x, y, z) {
    let highestValue = Math.max(x, y, z)
    return highestValue;
}

console.log(largestArgument(10, 7, 19))


                                    // Day 7 exercises Level 2

// Exercise 1
function solveLinEquation(a, b, c, x, y) {
    const linearEquation = a * x + b * y + c;
    return linearEquation;
}

const result = solveLinEquation(2, 3, 4, 5, 6);
console.log(result); // Example input: a = 2, b = 3, c = 4, x = 5, y = 6

// Exercise 2
function solveQuadratic(a, b, c) {
    if (a === undefined) {
        return { 0: 0 };
    }

    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { x1, x2 };
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return { x };
    } else {
        return {};
    }
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); // {2, -2}
console.log(solveQuadratic(1, -1, 0)); // {1, 0}

// Exercise 3
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const myArray = [1, 2, 3, 4, 5];
printArray(myArray); 

// Exercise 4
function showDateTime () {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

showDateTime()

//  Exercise 5
function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    
    return { x, y };
}

console.log(swapValues(3, 4)); 
console.log(swapValues(4, 5)); 

// Exercise 6
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])); // Output: ['C', 'B', 'A']

// Exercise 7
function capitalizeArray(arr) {
    let upperCase = [];
    for (let i = 0; i < arr.length; i++) {
        let capitalizeElement = arr[i].toUpperCase();
        upperCase.push(capitalizeElement);
    }

    return upperCase;
}

console.log(capitalizeArray(['a', 'b', 'c', 'd']))

// Exercise 8
function addItem(item) {
    let itemArr = []; 
    itemArr.push(item); 
    return itemArr; 
}

console.log(addItem('Egusi')); // Output: ['Egusi']

// Exercise 9
function removeItem(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr;
}

const originalArray = ['apple', 'banana', 'cherry', 'date'];
const modifiedArray = removeItem(originalArray, 1);

console.log(modifiedArray); 

// Exercise 10
function sumOfNumbers (x, y) {
    let sum = 0;

    if (x < y) {
        for (let i = x; i <= y; i++) {
            sum += i;
        }
    }

    return sum
}

console.log(sumOfNumbers(1, 5))

// Exercise 11
function sumOfOdds (x, y) {
    let sum = 0;

    if (x % 2 === 0 || y % 2 === 0) {
        for (let i = x; i <= y; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(sumOfOdds)





