console.log(countries)

//Exercises Level 1

    //Exercise 1 -- Declares an empty array
        var emptyArray = [];

    //Exercise 2 -- Declare an array with more than 5 elements
        var names = ["Brendan", "Jacob", "Chloe", "Katherine", "Nicole", "Sienna"];

    //Exercise 3 -- Find the length of your array in #2 and prints it to console
        var lengthOfArray = names.length
        console.log(`Length of names array is: ${lengthOfArray}`);

    //Exercise 4 -- Gets the first, middle, and last item of the array from exercise 3 and print the result to console
        var firstElement = names[0];
        var middleElement;

        console.log(`First element: ${firstElement}`);

        (names.length%2==0)
            ?console.log(`Middle elements are ${names[Math.floor((names.length-1)/2)]} and ${names[Math.ceil((names.length-1)/2)]}`) //value is true
            :console.log(`${names[((names.length-1)/2)]}`);   //value is false

        var lastElement = names[names.length-1];

        console.log(`Last element: ${lastElement}`);

    //Exercise 5 -- Declare an array called mixedDataTypes, put different data types in 
    //the array and find the length of the array. The array size should be greater than 5
        var mixedDataTypes = [1, 2, 3, "myString", "yourString", true, false];

        console.log(`Length of mixedDataTypes is ${mixedDataTypes.length}`);
    
    //Exercise 6 -- Declares an array named itCompanies and assigned initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
        var itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
    
    //Exercise 7 -- Prints the array using console.log()
        console.log(itCompanies);

    //Exercise 8 -- Prints the number of companies in the itCompanies array
        console.log(`Number of itCompanies is ${itCompanies.length}`);

    //Exercise 9 -- Prints the first company, middle and last company (from itCompanies)
        var first = itCompanies[0];

        var middle;
        (itCompanies.length%2==0)
            ?console.log(`Middle elements are ${itCompanies[Math.floor((itCompanies.length-1)/2)]} and ${itCompanies[Math.ceil((itCompanies.length-1)/2)]}`) //value is true
            :console.log(`${itCompanies[((itCompanies.length-1)/2)]}`);   //value is false

        var last = itCompanies[itCompanies.length-1];
    
    //Exercise 10 -- Prints out each company
        for(var i=0;i<itCompanies.length;i++)
            console.log(itCompanies[i]);

    //Exercise 11 -- Changes each company name to uppercase one by one and print them out
        var uppercaseITCompanies = [];    

        for(var v=0; v<itCompanies.length; v++)
        {
            uppercaseITCompanies[v] = itCompanies[v].toUpperCase();
        }
        
        console.log(itCompanies.join(", "));

    //Exercise 12 -- Prints the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
        console.log(`${itCompanies.join(", ")} are big IT companies`);

    //Exercise 13 -- Checks to if a certain company exists in the itCompanies array. 
    //If it exists return the company else returns the company is not found
        function searchStringInArray (str, strArray) 
        {
            for (var j=0; j<strArray.length; j++) 
            {
                if ((strArray[j]).toLowerCase().match(str.toLowerCase())) 
                    return j;
            }
            return -1;
        }
        
        var userInput = prompt("Enter a company: ");
        userInput = userInput.toLowerCase();
        console.log(`Enter a company: ${userInput}`);

        var tempValue = searchStringInArray(userInput, itCompanies);

        if(tempValue>=0)
            console.log(`${itCompanies[tempValue]}`);
        else
            console.log('The company is not found');

    //Exercise 14 -- Filter out companies which have more than one 'o' without the filter method
        var tempItCompanies = [];
        var filterCounter = 0;

        for(var a=0; a<itCompanies.length; a++) //Searches through each index in itCompanies array
        {
            filterCounter = 0;

            for(var c=0; c< itCompanies[a].length; c++)    //Searches through each letter of each word in itCompanies array
            {
                if(itCompanies[a].charAt(c).toLowerCase() == 'o')
                    filterCounter = filterCounter +1;
            }

            if(filterCounter<=1)
                tempItCompanies.push(itCompanies[a]);
        }
        itCompanies = tempItCompanies
        console.log(itCompanies);

    //Exercise 15 -- Sort the array using sort() method and prints the result to console
        itCompanies.sort();
        console.log(`Sorted itCompanies array: ${itCompanies}`);

    //Exercise 16 -- Reverse the array using reverse() method and prints the result to console
        itCompanies.reverse();
        console.log(`Reversed itCompanies array: ${itCompanies}`);

    //Exercise 17 -- Slice out the first 3 companies from the array and prints the result to console
        console.log(itCompanies.slice(0,3));

    //Exercise 18 -- Slice out the last 3 companies from the array and prints the result to console
        console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));
        
    //Exercise 19 -- Slice out the middle IT company or companies from the array and prints the result to console
        if((itCompanies.length % 2) == 0)
        {
            var Variable1 = (Math.floor(itCompanies.length/2))-1;
            var Variable2 = (Math.ceil(itCompanies.length/2))+1;

            console.log(Variable1);
            console.log(Variable2);

            var tempVariable1 = itCompanies.slice(0,Variable1);
            var tempVariable2 = itCompanies.slice(Variable2, itCompanies.length)
            
            tempVariable1 = tempVariable1.concat(tempVariable2);
            console.log(tempVariable1);
        }
        else
        {
            var Variable1 = (Math.floor(itCompanies.length/2));
            var Variable2 = (Math.ceil(itCompanies.length/2));

            var tempVariable1 = itCompanies.slice(0,Variable1);
            var tempVariable2 = itCompanies.slice(Variable2, itCompanies.length)
            
            tempVariable1 = tempVariable1.concat(tempVariable2);
            console.log(tempVariable1)
        }

    //Exercise 20 -- Removes the first IT company from the array and prints the result to console
        console.log(`Splicing first element ${itCompanies.splice(0,1)} from itCompanies array`);
        console.log(itCompanies);

    //Exercise 21 -- Remove the middle IT company or companies from the array and prints the result to console
        console.log(itCompanies);    

        if (itCompanies.length % 2 == 0)
        {
            var string1 = itCompanies.slice(0,(Math.floor(itCompanies.length)/2)-1);
            console.log((Math.floor(itCompanies.length)/2)-1);
            var string2 = itCompanies.slice((Math.ceil(itCompanies.length)/2)+1);
            string2 = string2.toString();
            string1.push(string2);
            console.log(string1);
        }
        else
        {
            var string1 = itCompanies.slice(0, Math.floor((itCompanies.length-1)/2));
            console.log(string1);
            var string2 = itCompanies.slice( (Math.floor(itCompanies.length/2)+1),(Math.ceil(itCompanies.length/2)+1));
            string2 = string2.toString();

            string1.push(string2);
            console.log(string1);

            itCompanies = string1;
        }


    //Exercise 22 -- Remove the last IT company from the array and prints the result to console
        console.log(`Before removing last company from itCompanies array ${itCompanies}`);
        itCompanies.pop();
        console.log(`After removing last company from itCompanies array ${itCompanies}`);

    //Exercise 23 -- Removes all IT companies from itCompanies array and prints the result to console
        itCompanies = [];
        console.log(`${itCompanies}`);

//Exercises Level 2

    //Exercise 1 -- Create a separate countries.js file and store the countries array in to this file
    //create a separate file web_techs.js and store the webTechs array in to this file. Access both files in main.js file
        console.log(countries);
        console.log(webTechs);

    //Exercise 2 -- First remove all the punctuations and change the string to array and count the number of words in the array
        let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

        text = text.replace(/[,.!?]/g,"");
        var newArray = text.split(" ");

        console.log(newArray);
        console.log(`Length of text array: ${newArray.length}`);
        
    //Exercise 3 -- In the following shopping cart add, remove, edit items
        const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
        
        //add 'Meat' in the beginning of your shopping cart if it has not been already added
            var tempString = shoppingCart.toString();

            if(!tempString.includes('Meat'))
                shoppingCart.unshift('Meat');

            console.log(shoppingCart);

        //add Sugar at the end of you shopping cart if it has not been already added
            tempString = shoppingCart.toString();

            if(!tempString.includes('Sugar'))
                shoppingCart.push('Sugar');            

        //remove 'Honey' if you are allergic to honey
            //I am not allergic to honey, so I did not remove from array

        //modify Tea to 'Green Tea'
            var teaIndex = shoppingCart.indexOf('Tea');
            shoppingCart[teaIndex] = 'Green Tea';

        console.log(shoppingCart);

    //Exercise 4 -- In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
        //Uses searchStringInArray function from Exercises Level 1, Exercise 13
        var tempIndex = searchStringInArray('Ethiopia', countries);

        if(tempIndex>=0)
            console.log(`${(countries[tempIndex]).toUpperCase()}`);  //Prints country if found in countries array
        else
        {
            countries.push('Ethiopia');                             //Adds to end of array if not found
            console.log(countries);
        }

    //Exercise 5 -- In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
        //Uses searchStringInArray function from Exercises Level 1, Exercise 13 and tempIndex from Exercises Level 2, Exercise 4
        tempIndex = searchStringInArray('Sass', webTechs);

        if(tempIndex>=0)
            console.log('Sass is a CSS preprocess');
        else
        {
            webTechs.push('Sass');
            console.log(webTechs);
        }

    //Exercise 6 -- Concatenate the given two variables and store it in a fullStack variable, and prints fullStack to console
        const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
        const backEnd = ['Node','Express', 'MongoDB'];
        const fullStack = frontEnd.concat(backEnd);

        console.log(fullStack);

//Exercises Level 3

    //Exercise 1 -- The following is an array of 10 students ages:
        const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

        // Sort the array and find the min and max age
            ages.sort();
            console.log(`Min age of students: ${ages[0]}   Max age of students: ${ages[ages.length-1]}`);

        // Find the median age(one middle item or two middle items divided by two)
            var middleValueHolder = ((ages.length-1)/2);
            var median = 0;

            if(ages.length % 2 == 0)
                median = ((ages[Math.floor(middleValueHolder)]+ages[Math.ceil(middleValueHolder)])/2);
            else
                median = ages[Math.floor((ages.length-1)/2)];  //Tested and fully working

            console.log(median);

        // Find the average age(all items divided by number of items)
            var numAgeElements = ages.length;
            var averageAge = 0;

            for(var b=0; b<ages.length; b++)
                averageAge = averageAge + ages[b];

            averageAge = (averageAge/ages.length);
            console.log(`Average age is: ${averageAge}`);

        // Find the range of the ages(max minus min)
            var range = (ages[ages.length-1]-ages[0]);
            console.log(`Range of ages: ${range}`);
        
        // Compare the value of (min - average) and (max - average), use abs() method 
            var temp1 = Math.abs(ages[0] - averageAge);
            console.log(`abs(min - average): ${temp1}`);
            
            temp1 = (ages[ages.length-1] - averageAge)
            console.log(`(max - average): ${temp1}`);

    //Exercise 2 -- Two parts
        //Slice the first ten countries from the countries array and prints the result to console
            console.log(countries.slice(0,10));

        //Find the middle country(ies) in the countries array
            //Uses middleValueHolder variable from Exercises Level 3, Problem 1
            middleValueHolder = ((countries.length-1)/2);

            if(countries.length % 2 == 0)
                console.log(`'${countries[Math.floor(middleValueHolder)]}' and '${countries[Math.ceil(middleValueHolder)]}' are middle countries`);
            else
                console.log(`'${countries[Math.floor((countries.length-1)/2)]}' is the middle element in the array`);  //Tested and fully working

    //Exercise 3 -- Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.  Prints the result to the console
        //Uses middleValueHolder variable from Exercises Level 3, Problem 1
        middleValueHolder = ((countries.length-1)/2);

        console.log(countries.length);
        var firstCountriesArray = countries.slice(0, Math.floor(middleValueHolder)+1);
        var secondCountriesArray = countries.slice(Math.ceil(middleValueHolder)+1, countries.length);

        console.log(`FirstArray Length: ${firstCountriesArray.length}    SecondArray Length: ${secondCountriesArray.length}`);
        console.log(firstCountriesArray);
        console.log(secondCountriesArray);