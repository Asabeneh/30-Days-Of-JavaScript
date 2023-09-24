//Exercises Level 1
    //Exercise 1 -- Declare a function fullName and it print out your full name.
        function fullName() {
            return ('Brendan Klein');
        }

        console.log(fullName());

    //Exercise 2 -- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
        function fullName(first,last) {
            return  first+" "+last;
        }

        console.log(fullName(`Brendan`,`Klein`));

    //Exercise 3 -- Declare a function addNumbers and it takes two two parameters and it returns sum.
        function addNumbers(firstNum, secondNum) {
            var sum = firstNum + secondNum;
            return sum;
        }
        console.log(addNumbers(1,2));

    //Exercise 4 -- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
        function areaOfRectangle(length, width) {
            var area = length*width;
            return area;
        }
        console.log(areaOfRectangle(7,5));

    //Exercise 5 -- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
        function perimeterOfRectangle(length, width) {
            var perimeter= 2*(length + width)
            return perimeter;
        }
        console.log(perimeterOfRectangle(1,2));

    //Exercise 6 -- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
        function volumeOfRectPrism(length, width, height) {
            var volume = length*width*height
            return volume;
        }
        console.log(volumeOfRectPrism(1,2,3));

    //Exercise 7 -- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
        function areaOfCircle(r) {
            var area = (Math.PI)*r*r;
            return area;
        }
        console.log(areaOfCircle(24));

    //Exercise 8 -- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
        function circumOfCircle(r) {
            var circumference = 2*Math.PI*r;
            return circumference;
        }
        console.log(circumOfCircle(5));

    //Exercise 9 -- Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
        function calculateDensity(mass, volume) {
            var density = (mass/volume);
            return density;
        }
        console.log(3000, 1500);

    //Exercise 10 -- Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
        function calculateSpeed(distance, time) {
            var speed = distance/time;
            return speed;
        }
        console.log(100, 5000);

    //Exercise 11 -- Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
        function calculateWeight(mass, gravity) {
            var weight = mass*gravity;
            return weight;
        }
        console.log(calculateWeight(1000,9.023));

    //Exercise 12 -- Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
        function convertCelsiusToFahrenheit(oC) {
            var oF = (oC*(9/5)) + 32;
            return oF;
        }
        console.log(convertCelsiusToFahrenheit(100));
    
    //Exercise 13 -- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in inches squared. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // The same groups apply to both men and women.
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more
        function bmiCalculator(weight, height) {
            var bmi = (weight/(height*height));
            var result=0;

            if(bmi<18.5)
                result = "Underweight";
            else if(bmi>=18.5 && bmi<=24.9)
                result = "Normal weight";
            else if(bmi>=25 && bmi<=29.9)
                result = "Overweight";
            else if(bmi>=30)
                result = "Obese";
            else
                result = "Invalid entry, please use valid numbers and try again"

            return result;
        }
        console.log(bmiCalculator(62,68));

    //Exercise 14 -- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
        function checkSeason(month){
            month=month.toLowerCase();
            if(month == "december" | month=="january" | month=="february")
                return  "Winter";
            else if(month =="march" | month=="april" | month=="may")
                return "Spring";
            else if(month =="june" | month=="july" | month=="august")
                return "Summer";
            else if(month =="september" | month=="october" | month=="november")
                return "Autumn";
            else
                return "Input not valid, please enter a valid month";
        }
        console.log(checkSeason("april"));

    //Exercise 15 -- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
    //console.log(findMax(0, 10, 5))
    //10
    //console.log(findMax(0, -10, -2))
    //0
        function findMax(a,b,c){
            var max=0;

            if(a>max)
                max=a;
            if(b>max)
                max=b;
            if(c>max)
                max=c;
            return max;
        }
        console.log(findMax(6001,6050,1));

//Exercises Level 2
    //Exercise 1 -- Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
        function solveLinEquation(a,b,c,x,y) {
            var result = (a*x + b*y +c);
            return result;
        }

    //Exercise 2 -- Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
    //console.log(solveQuadratic()) // {0}
    // console.log(solveQuadratic(1, 4, 4)) // {-2}
    // console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    // console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    // console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    // console.log(solveQuadratic(1, -1, 0)) //{1, 0}
        function solveQuadEquation(a,b,c)
        {
            let root1, root2;

            // calculate discriminant
            let discriminant = b * b - 4 * a * c;

            // condition for real and different roots
            if (discriminant > 0) 
            {
                root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

                // result
                console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
            }

            // condition for real and equal roots
            else if (discriminant == 0) 
            {
                root1 = root2 = -b / (2 * a);

                // result
                console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
            }

            // if roots are not real
            else 
            {
                let realPart = (-b / (2 * a)).toFixed(2);
                let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

                // result
                console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
            }
        }
        solveQuadEquation(1,2,3);

    //Exercise 3 -- Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
        function printArray(array) {
            for(var a=0;a<array.length;a++)
                console.log(array[a]);
        }

    //Exercise 4 -- Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
    // showDateTime()
    // 08/01/2020 04:08
        function showDateTime() {
            const now = new Date();
            var month, date, hours, minutes;

            if(now.getMonth()<10)
                month="0"+now.getMonth();
            else
                month=now.getMonth();

            if(now.getDate()<10)
                date="0"+now.getDate();
            else
                date=now.getDate();

            if(now.getHours()<10)
                hours="0"+now.getHours();
            else
                hours=now.getHours();   

            if(now.getMinutes()<10)
                minutes="0"+now.getMinutes();
            else
                minutes=now.getMinutes();   

            return `${month}/${date}/${now.getFullYear()} ${hours}:${minutes}`;
        }
        console.log(showDateTime());

    //Exercise 5 -- Declare a function name swapValues. This function swaps value of x to y.
    // swapValues(3, 4) // x => 4, y=>3
    // swapValues(4, 5) // x = 5, y = 4
        function swapValues(x,y) {
            return (`(${y},${x})`);
        }
        console.log(swapValues(2,3));

    //Exercise 6 -- Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    // console.log(reverseArray([1, 2, 3, 4, 5]))
    // //[5, 4, 3, 2, 1]
    // console.log(reverseArray(['A', 'B', 'C']))
    // //['C', 'B', 'A']

        function reverseArray(arr) 
        {
            var newArray = [];
            for (var i = arr.length - 1; i >= 0; i--) 
                newArray.push(arr[i]);

            return newArray;
        }
        console.log(reverseArray([1,2,3,4,5]));
    
    //Exercise 7 -- Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
        function capitalizeArray(array) {
            for(var x=0; x<array.length; x++)
                array[x] = (array[x].toUpperCase());

            return array;
        }
        console.log(capitalizeArray(["Brendan","Klein"]));

    //Exercise 8 -- Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
        var addRemoveArray = ['Item1','Item2','Item3'];

        function addItem(item)
        {
            addRemoveArray.push(item);
            return addRemoveArray;
        }
        console.log(addItem('test test test'));

    //Exercise 9 -- Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
        function removeItem(index)
        {
            var id = addRemoveArray[index];
            console.log(id);
            var tempArray2 = [];

            for (let i = 0; i < addRemoveArray.length-1; i++) 
            {
                if (addRemoveArray[i] !== id) 
                    tempArray2.push(addRemoveArray[i]);
            }
            return tempArray2;
        }
        console.log(removeItem(1));
        
    //Exercise 10 -- Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
        function sumOfNumbers(min, max)
        {
            var totalSum = 0;
            for(var p=min; p<=max; p++)
                totalSum = totalSum+p;

            return totalSum;
        }
        console.log(sumOfNumbers(1, 9));

    //Exercise 11 -- Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
        function sumOfOdds(min, max)
        {
            var sumOfOdds = 0;
            for(var i=min;i<=max;i++)
            {
                if((i % 2) !== 0)
                    sumOfOdds = sumOfOdds + i;
            }
            return sumOfOdds;
        }
        console.log(sumOfOdds(1, 5));

    //Exercise 12 -- Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
        function sumOfEven(min, max)
        {
            var sumOfEvens = 0;
            for(var l=min;l<=max;l++)
            {
                if(l % 2 == 0)
                    sumOfEvens = sumOfEvens + l;
            }
            return sumOfEvens;
        }
        console.log(sumOfEven(2, 6));

    //Exercise 13 -- Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    // evensAndOdds(100);
    // The number of odds are 50.
    // The number of evens are 51.
        function evensAndOdds(num)
        {
            var evenCounter=0;
            var oddCounter=0;

            for(var i=0; i<num; i++)
            {
                if(i%2 == 0)
                    evenCounter = evenCounter+1;
                else
                    oddCounter = oddCounter+1;
            }
            console.log(`The number of odds ${oddCounter}`);
            console.log(`The number of evens ${evenCounter}`);
            return;
        }
        evensAndOdds(55);

    //Exercise 14 -- Write a function which takes any number of arguments and return the sum of the arguments
    // sum(1, 2, 3) // -> 6
    // sum(1, 2, 3, 4) // -> 10
        const sumAllNums = (...args) => {
            let sum = 0
            for (const element of args) 
            {
                sum += element
            }
            return sum
        }
        console.log(sumAllNums(1,2,3,4,5,6,7,8,9));

    //Exercise 15 -- Write a function which generates a randomUserIp.
        function randomUserIp()
        {
            var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
            return ip;
        }
        console.log(randomUserIp());

    //Exercise 16 -- Write a function which generates a randomMacAddress
        function randomMacAddress()
        {
            return "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
            return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
            });
        }
        console.log(randomMacAddress());

    //Exercise 17 -- Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
    // console.log(randomHexaNumberGenerator());
    // '#ee33df'
        function randomHexaNumberGenerator()
        {
            let resultID = "";
            const characters = '0123456789abcdef';
            const charLength = characters.length;

            var counter = 0;
            while (counter<6)
            {
                resultID = resultID + characters.charAt(Math.floor(Math.random() * charLength));
                counter = counter + 1;
            }
            return ('#'+resultID);
        }
        console.log(randomHexaNumberGenerator());

    //Exercise 18 -- Declare a function name userIdGenerator. When this function is called it generates seven character id. 
    //The function return the id.
    // console.log(userIdGenerator());
    // 41XTDbE
        function userIdGenerator()
        {
            let resultID = "";
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charLength = characters.length;

            var counter = 0;
            while (counter<7)
            {
                resultID = resultID + characters.charAt(Math.floor(Math.random() * charLength));
                counter = counter + 1;
            }
            return resultID;
        }
        console.log(userIdGenerator());

//Exercises Level 3
    //Exercise 1 -- Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). 
    //One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
    // userIdGeneratedByUser()
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
        function userIdGeneratedByUserHelper(length)
        {
            let resultID = "";
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charLength = characters.length;

            var counter = 0;
            while (counter<length)
            {
                resultID = resultID + characters.charAt(Math.floor(Math.random() * charLength));
                counter = counter + 1;
            }
            console.log(resultID);
        }

        function userIdGeneratedByUser()
        {
            var length = prompt('Please enter the length of the userID you would like to generate');
            var num = prompt('Please enter the number of userIDs you would like to generate');

            for(var a=0; a<num; a++)
            {
                userIdGeneratedByUserHelper(length);
            }
            return;
        }

        userIdGeneratedByUser();

    //Exercise 2 -- Write a function name rgbColorGenerator and it generates rgb colors.
    // rgbColorGenerator()
    // rgb(125,244,255)
        function rgbColorGenerator()
        {
            var result = `(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
            return result;
        }
        console.log(rgbColorGenerator());   

    //Exercise 3 -- Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
        function arrayOfHexaColors(num)
        {
            var array = [];
            for(var a=0;a<num;a++)
                array.push(randomHexaNumberGenerator());

            return array;
        }
        console.log(arrayOfHexaColors(5));
    
    //Exercise 4 -- Write a function arrayOfRgbColors which return any number of RGB colors in an array.
        function arrayOfRgbColors(num)
        {
            var array = [];
            for(var a=0;a<num;a++)
                array.push(`rgb${rgbColorGenerator()}`);

            return array;
        }
        console.log(arrayOfRgbColors(5));

    //Exercise 5 -- Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
        const convertHexaToRgb = (hex) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            
            // return {r, g, b} 
            return (`rgb(${r},${g},${b})`);
        }

        console.log(convertHexaToRgb("#ff33ff"));

    //Exercise 6 -- Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
        const convertRgbToHexaHelper = (c) => {
            const hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        const convertRgbToHexa = (r, g, b) => {
            return "#" + convertRgbToHexaHelper(r) + convertRgbToHexaHelper(g) + convertRgbToHexaHelper(b);
        }

        console.log(convertRgbToHexa(255, 51, 255)); // #ff33ff

    //Exercise 7 -- Write a function generateColors which can generate any number of hexa or rgb colors.
    // console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    // console.log(generateColors('hexa', 1)) // '#b334ef'
    // console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    // console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    // Uses generate array of rgb numbers from Exercises Level 3, Exercise 4
        function generateColors(type, num)
        {
            if(type == 'rgb')
                return arrayOfRgbColors(num);
            else if(type == 'hexa')
                return arrayOfHexaColors(num);
        }
        console.log(generateColors('hexa',3));
        console.log(generateColors('rgb',4));

    //Exercise 8 -- Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
        function shuffle(array) 
        {
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex > 0) 
            {
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }

            return array;
        }

        var thisIsMyArray = [2, 11, 37, 42];
        shuffle(thisIsMyArray);
        console.log(thisIsMyArray);

    //Exercise 9 -- Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
        function factorial(num) 
        {
            // If the number is less than 0, reject it.
            if (num < 0) 
                return -1;
                
            // If the number is 0, its factorial is 1.
            else if (num == 0) 
                return 1;
                
            // Otherwise, call the recursive procedure again
                else 
                    return (num * factorial(num - 1));
        }

        console.log(factorial(2));

    //Exercise 10 -- Call your function isEmpty, it takes a parameter and it checks if it is empty or not
        function isEmpty(arr)
        {
            if(arr.length==0)
                return 'true';
            else
                return 'false';
        }
        console.log(isEmpty([]));

    //Exercise 11 -- Call your function sum, it takes any number of arguments and it returns the sum.
        const sum = (...args) => {
            let sum = 0
            for (const element of args) 
            {
                sum += element
            }
            return sum
        }
        console.log(sum(1, 2, 3));

    //Exercise 12 -- Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
    
        function sumOfArrayItems(array)
        {
            var invalidIndexes = [];
            var summation = 0;

            for(var a=0; a<array.length; a++)
            {
                if(typeof(array[a]) == 'number')
                    summation = summation + array[a];
                else
                    invalidIndexes.push(a+1);
            }

            if(invalidIndexes.length != 0)
                return `Invalid array records in position(s): ${invalidIndexes}`;
            else
                return summation;
        }
        console.log(sumOfArrayItems([1,2,3,4,5,6]));

    //Exercise 13 -- Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
        function average(array)
        {
            var invalidIndexes = [];
            var numOfNums = 0;
            var average = 0;

            for(var a=0; a<array.length; a++)
            {
                if(typeof(array[a]) == 'number')
                {
                    average = average + array[a];
                    numOfNums = numOfNums + 1;
                }
                else
                    invalidIndexes.push(a+1);
            }

            average = average/numOfNums;

            if(invalidIndexes.length != 0)
                return `Invalid array records in position(s): ${invalidIndexes}`;
            else
                return average;
        }
        console.log(average([1,2,3,4,5,6]));

    //Exercise 14 -- Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
    // console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    // ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    // console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    // ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    // console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    //   'Not Found'
        function modifyArray(array)
        {
            if(array.length>=5)
            {
                for(var a=0; a<array.length; a++)
                {
                    if(a == 4)
                        array[a]=array[a].toUpperCase();
                }
                return array;
            }
            else
                return "Not Found";
        }
        console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft','IBM']));

    //Exercise 15 -- Write a function called isPrime, which checks if a number is prime number.
        function isPrime(num)
        {
            for(let i = 2, s = Math.sqrt(num); i <= s; i++) 
            {
                if(num % i === 0) 
                    return false;
            }
            return num > 1;
        }

        console.log(isPrime(23));

    //Exercise 16 -- Write a functions which checks if all items are unique in the array.
        function areDistinct(arr)
        {
            let n = arr.length;
        
            // Puts all array elements in a map
            let s = new Set();
            for (let i = 0; i < n; i++)
                s.add(arr[i]);
        
            // If all elements are distinct, size of
            // set should be same array.

            if(s.size == arr.length)
                return true;
            else
                return false;
        }
            console.log(areDistinct([ 1, 2, 3, 2 ]));

    //Exercise 17 -- Write a function which checks if all the items of the array are the same data type.
        function sameDataType(array)
        {
            for(var a=0; a<array.length; a++)
            {
                if(a==0)
                    continue;
                else if(typeof(array[a]) != typeof(typeof[a-1]))
                    return "Data types in array are not of the same type";
            }
            return "Data types in array are of the same type";
        }
        
        console.log(sameDataType([1,2,3,4,[1,2,3,4,5,6],6,7,8,9,10, "random string"]));

    //Exercise 18 -- JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
        function isValidVariable(variable)
        {
            console.log(variable);
            if(variable.match(/[@^%&*#;.!?]/))
                return "Invalid variable";
            else
                return "Valid variable";
        }
        console.log(isValidVariable('^test'));

    //Exercise 19 -- Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
    // sevenRandomNumbers()         [(1, 4, 5, 7, 9, 8, 0)]
        function sevenRandomNumbers()
        {
            const arr = [];
            var candidateInt;
            while(arr.length < 7)
            {
                candidateInt = Math.floor(Math.random() * 9) + 1;
                if(arr.indexOf(candidateInt) === -1) 
                    arr.push(candidateInt);
            }
            return(arr);
        }
        console.log(sevenRandomNumbers());

    //Exercise 20 -- Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
        function reverseCountries(array)
        {
            var reversedArray = [];
            for (let a = array.length - 1; a >= 0; a--) 
            {
                reversedArray.push(array[a]);
            }
            return reversedArray;
        }
        console.log(reverseCountries([1,2,3,4,5,6,7,8,9,10]));