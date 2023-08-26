//Exercises Level 1

    //Exercise 1 -- Declares variable challenge and sets its value
    var challenge = '30 Days Of JavaScript';

    //Exercise 2 -- Prints string challenge in console
    console.log(challenge);

    //Exercise 3 -- Prints the length of string challenge in console
    console.log("Challenge Length: "+challenge.length);

    //Exercise 4 -- Changes contents of variable challenge to all uppercase string, and prints it to console
    var challengeUpper = challenge.toUpperCase();
    console.log(challengeUpper);

    //Exercise 5 -- Changes contents of variable challenge to all lowercase string, and prints it to console
    var challengeLower = challenge.toLowerCase();
    console.log(challengeLower);

    //Exercise 6 -- Cuts out first WORD of string in challenge variable using substring, and prints it to console
    var challengeWithoutDays = (challenge.substring(0,2) + challenge.substring(7,challenge.length));
    console.log(challengeWithoutDays);

    //Exercise 7 -- Slices out the phrase "Days Of JavaScript" from challenge string
    var challengePhraseString = challenge.substring(3,challenge.length);
    console.log(challengePhraseString);
    
    //Exercise 8 -- Checks to see if challenge contains word Script using includes method 
    console.log(challenge.includes('Script'));

    //Exercise 9 -- Splits challenge into an array using the split method and prints it to console
    console.log(challenge.split(''));

    //Exercise 10 -- Splits challenge into an array using the split method at the space and prints it to console
    console.log(challenge.split(' '));

    //Exercise 11 -- Splits the string 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' at the comma, changes it into an array, and prints it to console
    var techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
    let techCompaniesArray = techCompanies.split(', ');
    console.log(techCompaniesArray);

    //Exercise 12 -- Changes original '30 Days of JavaScript' string to '30 Days of Python' using the replace method
    var challengePython = challenge.replace('JavaScript','Python');
    console.log(challengePython);

    //Exercise 13 -- Figures out the character at character index 15 in challenge string using CharAt() method and prints it to console
    console.log(challenge.charAt(15));

    //Exercise 14 -- Figures out the character ASCII code of J in challenge string using charCodeAt(), using 2 different methods and prints it to console
    console.log(challenge.charCodeAt(challenge.indexOf('J')));
    console.log(challenge.charCodeAt(11));

    //Exercise 15 -- Figures out the first index of 'a' in challenge string and prints it to console
    console.log(challenge.indexOf('a'));

    //Exercise 16 -- Figures out the last index of 'a' in challenge string using lastIndexOf method and prints it to console
    console.log(challenge.lastIndexOf('a'));

    //Exercise 17 -- Declares sentance, finds first position of word because in sentance variable and prints it to console
    var sentance = 'You cannot end a sentence with because because because is a conjunction';
    console.log(sentance.indexOf('because'));

    //Exercise 18 -- Finds the last position of the word because in sentance variable using lastIndexOf and prints it to console
    console.log(sentance.lastIndexOf('because'));

    //Exercise 19 -- Uses search to find the first position of the word because in the sentance variable and prints it to console
    console.log(sentance.search('because'));

    //Exercise 20 -- Declares new extra stringChallenge variable, removes trailing and leading white spaces around variable using trim() method, and prints the end result to console
    var stringChallenge = ' 30 Days Of JavaScript ';
    console.log(stringChallenge.trim(' '));

    //Exercise 21 -- Used startsWith() method with challenge string, generates a true result, and prints it to console
    console.log(challenge.startsWith('30 Days Of'));    

    //Exercise 22 -- Used endsWith() method with challenge string, generates a true result, and prints it to console
    console.log(challenge.endsWith('Of JavaScript'));

    //Exercise 23 -- Used match() method with challenge string and regrex to find all the 'a's in challenge string
    let pattern =  /a/gi;
    console.log(challenge.match(pattern));

    //Exercise 24 -- Uses concat tomerge '30 Days of' and 'JavaScript' strings to a single string and prints it to console with a space in between
    var string1 = '30 Days of';    var string2 = 'JavaScript';
    console.log(string1.concat(" "+string2));

    //Exercise 25 -- Uses repeat method to print challenge variable 2 times to console
    console.log(challenge.repeat(2));

//Exercises Level 2

    //Exercise 1 -- Prints out given quote to console
    console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

    //Exercise 2 -- Prints out given quote to console
    console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

    //Exercise 3 -- Checks typeOf '10' and makes it exactly equal to 10 (number) if it is not
    var tempNum = '10';
    var typeOfNum = (typeof tempNum);

    if(typeOfNum != 'number') {
        tempNum = parseInt(tempNum);
        //At this point tempNum is a number if it was originally a string
    }
    else{
        console.log(tempNum);
    }
    
    //Exercise 4 -- Checks typeOf '9.8' and makes it exactly equal to 10 (number) if it is not
    var tempNum2 = ('9.8');
    var typeOfNum2 = (typeof tempNum2);

    if((typeof tempNum2) != 'number') {
        tempNum2 = (Math.round(tempNum2));
        //At this point tempNum is a number if it was originally a string
    }
    else{
        console.log(tempNum2);
    }

    //Exercise 5 -- Checks to see if the string 'on' is found in both python and jargon and prints yes or no to console
    var string1 = 'python';
    var string2 = 'jargon';
    var on  = 'on';

    if(string1.includes(on) && string2.includes(on))
        console.log('Yes! '+string1+" and "+string2+" both include the word on!");
    else
        console.log('No! '+string1+" and "+string2+" both do not include the word on!")

    //Exercise 6 -- Checks to see if the string 'jargon' is included in the string "I hope this course is not full of jargon" and prints responce in console
    var mainString = "I hope this course is not full of jargon";
    var jargonString = "jargon";

        if(mainString.includes(jargonString))
        console.log('Yes!  jargon is included in the original string');
    else
        console.log('No!  jargon is not included in the original string')

    //The getRandomInt function generates a number inclusively within the given range and is used for problems 7,8, and 9
    function getRandomInt(min, max){
        return Math.floor(Math.random()* (max-min+1))+min;
    }

    //Exercise 7 -- Generates a random number between 0 and 100 inclusively and prints it to console
    console.log(getRandomInt(0,100));

    //Exercise 8 -- Generates a random number between 50 and 100 inclusively and prints it to console
    console.log(getRandomInt(50,100));
    
    //Exercise 9 -- Generates a random number between 0 and 255 inclusively and prints it to console
    console.log(getRandomInt(0,255));
    
    //Exercise 10 -- Accesses the 'JavaScript' string character using a random number (Not sure what this question was asking to be honest...)
    var javaScriptString = 'JavaScript';
    var totalStringLength = javaScriptString.length;

    function randomNum(){
        return Math.floor(Math.random()* (totalStringLength+1));
    }

    console.log("Random number: "+javaScriptString.charAt(randomNum()));


    //Exercise 11 -- Uses console.log() and escape characters to print the following pattern.
    console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
    console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
    
    //Exercise 12 -- Uses substr to slice out the phrase 'because because because' from the following sentence:'You cannot end a sentence with because because because is a conjunction' and prints it to console
    var phrase1 = 'You cannot end a sentence with because because because is a conjunction';
    var phrase2 = 'because because because';

    var numSliceCharacters = phrase2.length;
    var sliceIndex = phrase1.search(phrase2);
    var temp1 = phrase1.substr(0,sliceIndex-1);
    var temp2 = phrase1.substr(sliceIndex+numSliceCharacters, phrase1.length);
    console.log(temp1 + temp2);


//Exercises Level 3

    //Exercise 1 -- Counts the number of times the word love appears in the given string and prints it to console... "Love is the best thing in this world. Some found their love and some are still looking for their love."
    var string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    string = string.toLowerCase();
    var searchPattern = /love/gi;
    var patternArray = string.match(searchPattern);
    console.log("Love appears "+patternArray.length+" times in given string");
    
    //Exercise 2 -- Counts the number of times the word because appears in the given string and prints it to console...
    var matchString = 'You cannot end a sentence with because because because is a conjunction';
    var searchString = 'because'; 
    var searchPattern2 = /because/gi;
    var patternArray2 = matchString.match(searchPattern2);
    console.log("Because appears "+patternArray2.length+" times in given string");

    //Exercise 3 -- Cleans the given sentance using regular expressions and the replace function.  Then, counts each occurence of words used in the sentance and prints it to console
    var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

    var wordCounts = { };

    sentence = (sentence.replace(/[@%$&#;.!?]/g, "")).toLowerCase();
    console.log(sentence);
    var words = sentence.split(" ");

    for(var i = 0; i < words.length; i++)
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;

    console.log(wordCounts);

    //Exercise 4 -- Calculates the total income of the person by extracting the numbers from the provided sentance.
    var mySentance = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';
    mySentance = mySentance.match(/\d+/g, "");
    var totalSalary = 0;

    console.log(mySentance);
    
    for(i=0; i < mySentance.length; i++)
    {
        if(i==2)
            totalSalary = totalSalary + parseInt(mySentance[i]*12);
        else
            totalSalary = totalSalary + parseInt(mySentance[i]);       
    }

    console.log("Total yearly salary is: "+totalSalary+" euros");
