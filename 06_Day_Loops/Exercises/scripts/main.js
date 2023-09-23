//Exercises Level 1
    //Exercise 1 -- Three parts
        //Iterate 0 to 10 using for loop
        for(var a=0; a<11; a++)
            console.log(`For loop: ${a}`);

        //Iterate 0 to 10 using while
        a=0;
        while(a<11)
        {
            console.log(`While loop: ${a}`);
            a++;
        }

        //Iterate 0 to 10 using do while loop
        a=0;
        do
        {
            console.log(`Do while: ${a}`);
            a++;
        }while(a<11)

    //Exercise 2 -- Three parts
        //Iterate 10 to 0 using for loop
        for(var a=10; a>-1; a--)
            console.log(`For loop: ${a}`);

        //Iterate 10 to 0 using while
        a=10;
        while(a>-1)
        {
            console.log(`While loop: ${a}`);
            a--;
        }

        //Iterate 10 to 0 using do while loop
        a=10;
        do {
            console.log(`Do while: ${a}`);
            a--;
        }while(a>-1)

    //Exercise 3 -- Iterate 0 to n using for loop
        var n = 100;

        for(a=0; a<=n; a++)
            console.log(a);

    //Exercise 4 -- Write a loop that makes the following pattern using console.log():  (See pattern provided in .md file)
        for(a=1; a<=7; a++)
            console.log("#".repeat(a));

    //Exercise 5 -- Use loop to print the following pattern:
        for(a=0;a<=10; a++)
            console.log(`${a} x ${a} = ${a*a}`)

    //Exercise 6 -- Using loop print the given pattern using console.log(): (See pattern provided in .md file)
        console.log(`i    i^2   i^3`)
        for(a=0; a<=10;a++)
            console.log(`${a}    ${Math.pow(a,2)}    ${Math.pow(a,3)}`)

    //Exercise 7 -- Use for loop to iterate from 0 to 100 and print only even numbers
        for(a=0;a<=100;a++)
        {
            if(a%2==0)
                console.log(a);
        }

    //Exercise 8 -- Use for loop to iterate from 0 to 100 and print only odd numbers
        for(a=0;a<=100;a++)
        {
            if(!(a%2==0))
                console.log(a);
        }

    //Exercise 9 -- Use for loop to iterate from 0 to 100 and print only prime numbers
    // function to check if a given number is prime
        function isPrime(n)
        {
            if(n == 1 || n == 0)        // since 0 and 1 is not prime return false.
                return false;  
        
            for(var i = 2; i < n; i++)  // Run a loop from 2 to n-1
            {
                if(n % i == 0)          // if the number is divisible by i, then n is not a prime number.
                    return false;
            }
            return true;                // otherwise, n is prime number.
        }
 
        for(var i = 1; i <= 100; i++)   // check for every number from 1 to N
        {
            if(isPrime(i))              // check if current number is prime
                console.log(`Prime number: ${i}`);
        }
        
    //Exercise 10 -- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
    //The sum of all numbers from 0 to 100 is 5050.
        var sum = 0;
        for(a=0;a<=100;a++)
            sum = sum + a;

        console.log(sum);

    //Exercise 11 -- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    //The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
        var evenSum = 0;
        var oddSum = 0;

        for(a=0;a<=100;a++)
        {
            if(a%2==0)
                evenSum=evenSum+a;
            else
                oddSum=oddSum+a;
        }

        console.log(`oddSum: ${oddSum}`);
        console.log(`evenSum: ${evenSum}`);

    //Exercise 12 -- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
    //Print sum of evens and sum of odds as array
    // [2550, 2500]
        var evenSum = 0;
        var oddSum = 0;

        var myArray = [0,0];

        for(a=0;a<=100;a++)
        {
            if(a%2==0)
                myArray[0]=myArray[0]+a;
            else
                myArray[1]=myArray[1]+a;
        }

        console.log(myArray);

    //Exercise 13 -- Develop a small script which generate array of 5 random numbers
        function generateNumArray(numbersToGenerate)
        {
            var myArray = [];
            var looper=1;
            var num =0;

            while(looper<=numbersToGenerate)
            {
                num = Math.floor(Math.random()*11);
                myArray.push(num);
                looper++;
            }
            return myArray;
        }
        
        console.log(generateNumArray(5));

    //Exercise 14 -- Develop a small script which generate array of 5 random numbers and the numbers must be unique
        var uniqueArray = [];

        while(uniqueArray.length<5)
        {
            var randomNum = Math.floor(Math.random() * 100) + 1;
            if(uniqueArray.indexOf(randomNum) === -1) 
                uniqueArray.push(randomNum);
        }
        console.log(uniqueArray);

    //Exercise 15 -- Develop a small script which generate a six characters random id:
    // 5j2khz
        function makeRandomID(length)
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
            return resultID;
        }
        console.log(makeRandomID(6));
    
//Exercises Level 2
    //Exercise 1 -- Develop a small script whichs generate any number of characters random id 
    //Used function from Exercises Level 1, Exercise 15
        console.log(makeRandomID(12));
        
    //Exercise 2 -- Write a script which generates a random hexadecimal number.
    // '#ee33df'
        function randomHex()
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
            return resultID;
        }
        console.log('#'+randomHex());

    //Exercise 3 -- Write a script which generates a random rgb color number.
    // rgb(240,180,80)
        function randomRGB()
        {
            return Math.floor(Math.random()*256);
        }
        console.log(`rgb(${randomRGB()},${randomRGB()},${randomRGB()})`);   
        

    //Exercise 4 -- Using the countries array, create the following new array.
    // ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
        const countriesList = [
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
        ];
        
        for(let i = 0; i < countriesList.length; i++)
            countriesList[i]=(countriesList[i].toUpperCase());

        console.log(countriesList);

    //Exercise 5 -- Using the above countries array, create an array for countries length'.
    // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
        var companiesLength = [];

        for(a=0; a<countriesList.length; a++)
            companiesLength[a] = (countriesList[a]).length;

        console.log(companiesLength);
        
    //Exercise 6 -- Use the countries array to create the following array of arrays:
    //   [  ['Albania', 'ALB', 7],
    //      ['Bolivia', 'BOL', 7],
    //      ['Canada', 'CAN', 6],
    //      ['Denmark', 'DEN', 7],
    //      ['Ethiopia', 'ETH', 8],
    //      ['Finland', 'FIN', 7],
    //      ['Germany', 'GER', 7],
    //      ['Hungary', 'HUN', 7],
    //      ['Ireland', 'IRE', 7],
    //      ['Iceland', 'ICE', 7],
    //      ['Japan', 'JAP', 5],
    //      ['Kenya', 'KEN', 5]   ]

    var newCountriesArray = [];
    var tempString;

    for(a=0; a<countriesList.length;a++)    //for each item in array
    {
        var tempArray = countriesList[a].split("");
        tempString = "";

        newCountriesArray[a] = (countriesList[a]);
        for(b=0; b<tempArray.length; b++)    //for each letter of each word in array
        {
            if(b==0 || b==1 || b==2)
                tempString = tempString + tempArray[b];
        }
        newCountriesArray[a] = [`${countriesList[a]},${tempString},${tempArray.length}`]
    }
    
    console.log(newCountriesArray);

    //Exercise 7 -- In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
        var itemsContainingLand = [];
        for(a=0;a<countriesList.length;a++)
        {
            console.log(countriesList[a]);
            if(countriesList[a].includes('LAND'))
                itemsContainingLand.push(countriesList[a]);
        }
        if(itemsContainingLand.length == 0)
            console.log(`All these countries are without land`);
        else
            console.log(itemsContainingLand);


    //Exercise 8 -- In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ia', print 'These are no countries ending with ia'.
    // ['Albania', 'Bolivia','Ethiopia']
        console.log(countriesList);
        var temporaryString='';
        var itemsContaininingIA = [];
            for(a=0; a<countriesList.length;a++)
            {
                temporaryString = (countriesList[a].toString()).slice(countriesList[a].length-2,countriesList[a].length);
                if(temporaryString == 'IA')
                    itemsContaininingIA.push(countriesList[a]);
            }

            if(itemsContaininingIA.length > 0)
                console.log(`${itemsContaininingIA}`);
            else
                console.log(`There are no countries ending with ia`);

    //Exercise 9 -- Using the above countries array, finds the country containing the biggest number of characters and prints the result to console
    // Ethiopia
        var longestStringLength = 0;
        var longestStringIndex = "";

        for(a=0;a<countriesList.length;a++)
        {
            if(countriesList[a].length > longestStringLength)
            {
                longestStringLength = countriesList[a].length;
                longestStringIndex = a;
            }
            else
                continue;
        }
        console.log(`Longest String in array is: ${countriesList[longestStringIndex]}`)

    
    //Exercise 10 -- Using the above countries array, find the country or countries containing only 5 characters.
    // ['Japan', 'Kenya']
        var tempArray = [];

        for(a=0;a<countriesList.length;a++)
        {
            if(countriesList[a].length == 5)
                tempArray.push(countriesList[a]);
            else
                continue;
        }
        
        console.log(tempArray);

    //Exercise 11 -- Find the longest word in the webTechs array
        const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'];

        var wordCounter = 0;
        var index = 0;
        for(a=0;a<webTechs.length;a++)
        {
            if(webTechs[a].length > wordCounter)
            {  
                wordCounter = webTechs[a].length;
                index = a;
            }
            else
                continue;
        }

        console.log(`The longest word in the webTechs array is: ${webTechs[index]}`);

    //Exercise 12 -- Use the webTechs array to create the following array of arrays: and prints the result to console
    // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
        console.log(webTechs);
        var newArray = [];
        console.log(`test`)
        for(a=0; a<webTechs.length; a++)
        {
            newArray.push([webTechs[a],webTechs[a].toString().length])
        }
        console.log(newArray);

    //Exercise 13 -- An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
        const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
        tempString = '';

        for(a=0; a<mernStack.length;a++)    //for each item in array
        {
            tempArray = mernStack[a].split("");
            
            console.log(tempArray);
            for(b=0; b<tempArray.length; b++)    //for each letter of each word in array
            {
                if(b == 0)
                    tempString = tempString + tempArray[b];
                else
                    continue;
            }
        }
        console.log(tempString);
        
    //Exercise 14 -- Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
        const myfullStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

        for(a=0;a<myfullStack.length;a++)
            console.log(myfullStack[a]);

    //Exercise 15 -- This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
        let fruitArray = ['banana', 'orange', 'mango', 'lemon'];
        let tempFruitArray = [];

        for(a=fruitArray.length-1;a>=0;a--)
            tempFruitArray.push(fruitArray[a]);

        fruitArray = tempFruitArray;

        console.log(fruitArray);
        
    //Exercise 16 -- Print all the elements of array as shown below.
    //   const fullStack = [
    //     ['HTML', 'CSS', 'JS', 'React'],
    //     ['Node', 'Express', 'MongoDB']
    //   ]
    //   HTML
    //   CSS
    //   JS
    //   REACT
    //   NODE
    //   EXPRESS
    //   MONGODB
        const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']];
        
        for(a=0;a<fullStack.length;a++)
        {
            for(b=0;b<fullStack[a].length;b++)
                console.log(fullStack[a][b]);
        }

//Exercises Level 3 -- USES COUNTRIES ARRAY FROM COUNTRIES.JS
    //Exercise 1 -- Copy countries array(Avoid mutation)
        var newArray = countries.slice(0, countries.length);
        console.log(newArray);

    //Exercise 2 -- Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
        var sortedCountries = countries;
        sortedCountries.sort();
        console.log(sortedCountries);

    //Exercise 3 -- Sort the webTechs array and mernStack array and prints the result to console
        console.log(webTechs.sort());   //Sorts webTechs array
        console.log(mernStack.sort());  //Sorts mernStack array

    //Exercise 4 -- Extract all the countries containing the word 'land' from the countries array and print it as array
        var landArray2 = [];

        for(a=0;a<countries.length;a++)
        {
            if(countries[a].toString().includes('land'))
                landArray2.push(countries[a]);
        }
        console.log(landArray2);

    //Exercise 5 -- Find the country containing the highest number of characters in the countries array
        var highestIndex = 0;
        var highestCountOfCharacters = 0;

        for(a=0; a<countries.length; a++)
        {
            if(countries[a].length > highestCountOfCharacters)
            {
                highestCountOfCharacters = countries[a].length;
                highestIndex = a;
            }
        }
        console.log(`The country with the highest number of characters in the country array is: ${countries[highestIndex]}`);

    //Exericse 6 -- Extract all the countries contain the word 'land' from the countries array and print it as array
        var landArray = [];

        for(a=0;a<countries.length;a++)
        {
            if(countries[a].toString().includes('land'))
                landArray.push(countries[a]);
        }
        console.log(landArray);

    //Exericse 7 -- Extract all the countries containing only four characters from the countries array and print it as array
        var tempCountriesList= [];
        for(a=0;a<countries.length; a++)
        {
            if(countries[a].length == 4)
            {
                tempCountriesList.push(countries[a]);
            }
        }
        console.log(tempCountriesList);

    //Exercise 8 -- Extract all the countries containing two or more words from the countries array and print it as array
        var twoLetterCountries = [];
        for(a=0; a<countries.length; a++)
        {
            if(countries[a].toString().includes(' '))
                twoLetterCountries.push(countries[a]);
        }
        console.log(twoLetterCountries);
        
    //Exercise 9 -- Reverse the countries array and capitalize each country and stored it as an array
        countries.reverse();
        for(a=0; a<countries.length; a++)
        {
            countries[a] = countries[a].toUpperCase();
        }
        console.log(countries);