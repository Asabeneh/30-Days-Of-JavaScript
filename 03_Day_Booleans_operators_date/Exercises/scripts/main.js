//Exercises Level 1

    //Exercise 1 -- Declares variables, and uses the typeof method to print the type of each variable to console 
        let firstName = "Brendan"
        let lastName = "Klein"
        let country = "USA"      
        let city  = "Livonia"
        let age = 23;
        let isMarried = false;
        let thisYear = 2023;

        console.log("Type of firstName is:"+typeof firstName);
        console.log("Type of lastName is "+typeof lastName);
        console.log("Type of country is "+typeof country);
        console.log("Type of city is "+typeof city);
        console.log("Type of age is "+typeof age);
        console.log("Type of isMarried is "+typeof isMarried);
        console.log("Type of year is "+typeof thisYear);

    //Exercise 2 -- Checks to see if type of '10' (string) is equal to 10 (number) and prints the result to console
        let ten = '10';
        
        if(typeof(ten) == 10)
            console.log("true");
        else
            console.log("false");

    //Exercise 3 -- Checks to see if parseInt('9.8') is equal to 10 and prints the result to console
        let originalValue = '9.8';
        
        if(parseInt(originalValue) == 10)
            console.log(true)
        else
            console.log(false);

    //Exercise 4 -- Write three JavaScript statement which provide true results, and three that provide false results and prints them to console
        console.log(undefined == null); //true
        console.log(5<10);              //true
        console.log(1 === 1);           //true

        console.log(5 !== 5);           //false
        console.log(10<2);              //false
        console.log(false);             //false

    //Exercise 5 -- Figure out the result of the following comparison expression first without using console.log(). 
    //              After you decide the result confirm it using console.log()

        //      4 > 3        true
        //      4 >= 3       true
        //      4 < 3        false
        //      4 <= 3       false
        //      4 == 4       true
        //      4 === 4      true
        //      4 != 4       false
        //      4 !== 4      false
        //      4 != '4'     true
        //      4 == '4'     false
        //      4 === '4'    true

        console.log(4 > 3);
        console.log(4 >= 3);
        console.log(4 < 3);
        console.log(4 <= 3);
        console.log(4 == 4);
        console.log(4 === 4);
        console.log(4 != 4);
        console.log(4 !== 4);
        console.log(4 != '4');
        console.log(4 == '4');
        console.log(4 === '4');

        let python = 'python';
        let jargon = 'jargon';
        console.log((python.length+1 == jargon.length-1));

    //Exercise 6 --   Figure out the result of the following expressions first without using console.log(). 
    //                After you decide the result confirm it by using console.log()
        // 4 > 3 && 10 < 12                                 true
        // 4 > 3 && 10 > 12                                 false
        // 4 > 3 || 10 < 12                                 true
        // 4 > 3 || 10 > 12                                 true
        // !(4 > 3)                                         false
        // !(4 < 3)                                         true
        // !(false)                                         true
        // !(4 > 3 && 10 < 12)                              false
        // !(4 > 3 && 10 > 12)                              true
        // !(4 === '4')                                     true
        // There is no 'on' in both dragon and python       false

        console.log(4 > 3 && 10 < 12);
        console.log(4 > 3 && 10 > 12);
        console.log(4 > 3 || 10 < 12);
        console.log(4 > 3 || 10 > 12);
        console.log(!(4 > 3));
        console.log(!(4 < 3));
        console.log(!(false));
        console.log(!(4 > 3 && 10 < 12));
        console.log(!(4 > 3 && 10 > 12));
        console.log(!(4 === '4'));

        let pythonString = 'python';
        let dragon = 'dragon';

        console.log(!(pythonString.includes('on') && dragon.includes('on')));

    //Exercise 7 -- Answer the following questions with JavaScript code and print the results to console

        //Creates date object and sets it equal to now
        const now = new Date();

        //What is the year today?
        console.log(now.getFullYear());

        //What is the month today as a number?
        console.log(now.getMonth()+1);

        //What is the date today?
        console.log(now.getDate());

        //What is the day today as a number?
        console.log(now.getDay());

        //What is the hours now?
        console.log(now.getHours());

        //What is the minutes now?
        console.log(now.getMinutes());

        //Find out the numbers of seconds elapsed from January 1, 1970 to now.
        console.log(now.getTime());

//Exercises Level 2

    //Exercise 1 -- Prompts the user to enter base and height of the triangle and calculates the area of a triangle (area = 0.5 x b x h).
        function userPrompt(option)
        {
            if(option==1) //Option 1 passed to funtion --> Looking for height
                return prompt('Enter height of triange');
            else if(option==2) //Option 2 passed to funtion --> Looking for base
                return prompt('Enter base of triange');
            else
                return;
        }
        let height = userPrompt(1);
        let base = userPrompt(2);

        console.log("Enter height: "+height);
        console.log("Enter base: "+base);
        let area = 0.5*base*height
        console.log('Area of the triange is: '+area);

    //Exercise 2 -- Prompt the user to enter side a, side b, and side c of the triangle and and calculates the perimeter of the triangle (perimeter = a + b + c)
        function perimeterPrompt(option)
        {
            if(option==1)      //Option 1 passed to funtion --> Looking for side A
                return prompt('Enter side A of triange');
            else if(option==2) //Option 2 passed to funtion --> Looking for side B
                return prompt('Enter side B of triange');
            else if(option==3) //Option 3 passed to funtion --> Looking for side C
                return prompt('Enter side C of triange');
            else
                return;
        }
        var sideA = Number(perimeterPrompt(1));
        var sideB = Number(perimeterPrompt(2));
        var sideC = Number(perimeterPrompt(3));

        console.log("Enter sideA: "+sideA);
        console.log("Enter sideB: "+sideB);
        console.log("Enter sideC: "+sideC);

        let Totalperimeter = parseInt(sideA+sideB+sideC);
        console.log('Perimeter of the triange is: '+Totalperimeter);

    //Exercise 3 -- Calculates the Area and Perimeter of a rectangle after prompting user for the input
        function rectangleArea(length, width)
        {
            return (length*width);
        }
    
        function rectanglePerimeter(length, width)
        {
            return  (2*(length + width));
        }
        
        var length = Number(prompt('Enter length of rectangle:')); 
        var width = Number(prompt('Enter width of rectangle:'));

        console.log('Enter length of rectangle: '+length);
        console.log('Enter width of rectangle: '+width);

        console.log("Area of rectangle: "+rectangleArea(length, width));
        console.log("Perimeter of rectangle: "+rectanglePerimeter(length, width));

    //Exercise 4 -- Calculates the area and circumference of a circle using the user entered radius
        var radius = Number(prompt('Enter radius of circle:'));
        console.log('Enter radius of circle: '+radius);

        let circleArea = Number((3.14*radius*radius));
        let circleCircumference = Number((2*3.14*radius));

        console.log('Area of circle: '+circleArea);
        console.log('Circumference of circle: '+circleCircumference);
        
//-------------COME BACK TO    //Exercise 5 -- Calculates slope, x-int and y-int using the provided math expression  ALSO UPDATE #5 when done
        // let expression = 'y = 2*x-2';

        //Calculates xInt
        

        //Calculates yInt
        // yInt = (expression.match(/[0-9x*-]/g, " ").join('')).replace('x','0');
        // console.log("YInt is: "+eval(yInt));



    //Exercise 6 -- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) and prints the result to console.
        let y2=10, y1=2, x2=6, x1=2;
        let exercise6Slope = ((y2-y1)/(x2-x1));
        console.log(`The value of the slope is: ${exercise6Slope}`);

    //Exercise 7 -- Compare the slope of above two questions.
        console.log(`Exercise 5 slope is: ${exercise5Slope} and exercise 6 slope is: ${exercise6Slope}`);

    //Exercise 8 -- Calculate the value of y (y = x2 + 6x + 9). 
    // Try to use different x values and figure out at what x value y is 0.
    // var mathExpression = 'x*2 + 6*x + 9';

    
    // function findAndReplace(parm)
    // {
    //     console.log(parm);
    //     return (mathExpression.replace('x',`(${parm})`).replace('x',`(${parm})`))
    // }


    // for (j=0; j<=1000; j++)
    // {
    //     console.log(eval(findAndReplace(j)))
    //     if(eval(findAndReplace(j))==0)
    //         console.log(`X equals ${j} when Y equals 0`);
    //     else
    //         continue;
    // }
    // for (j=0; j>=-1000; j--)
    // {
    //     if(eval(findAndReplace(j))==0)
    //         console.log(`X equals ${j} when Y equals 0`);
    //     else
    //         continue;
    // }


    //Exercise 9 -- Prompts a user to enter hours and rate per hour, and calculates pay of person including overtime
        var overtimeHours = 0;
        var workedHours = Number(prompt('Enter number of hours worked: '));
        var ratePerHour = Number(prompt('Enter rate per hour: '));

        console.log('Enter number of hours worked: '+workedHours);
        console.log('Enter rate per hour: '+ratePerHour);

        if(workedHours>40)
        {
            overtimeHours = (workedHours-40);
            workedHours = (workedHours - overtimeHours);
            totalPay = ((workedHours*ratePerHour) + ((ratePerHour*1.5)*overtimeHours))
        }
        else
            totalPay = (workedHours*ratePerHour);

        console.log(`Total Pay: ${totalPay}`);


    //Exercise 10 -- If the length of your name is greater than 7 say, your name is long else say your name is short.
        if(firstName.length > 7)
            console.log('Your name is long');
        else
            console.log('Your name is short')

    //Exercise 11  -- Compare your first name length and your family name length and say which one is longer
        if(firstName.length>lastName.length)
            console.log(`Your first name, ${firstName} is longer as your family name, ${lastName}`)
        else if(firstName.length<lastName.length)
            console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
        else
            console.log(`Your first name, ${firstName} is the same length as your family name, ${lastName}`);

    //Exercise 12 -- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
        let myAge = 250;
        let yourAge = 25;

        if (myAge>yourAge)
            console.log('I am '+(myAge-yourAge)+' year(s) older than you.');
        else if(myAge<yourAge)
            console.log('You are '+(yourAge-myAge)+' year(s) older than me.');
        else if(myAge==yourAge)
            console.log('We are the same age.');
        else 
            console.log('Invalid age(s)');

    //Exercise 13 -- Gets the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
        const year     =   now.getFullYear();
        const month    =   (now.getMonth()+1);
        const date     =   now.getDate();
        const hours    =   now.getHours();
        const minutes  =   now.getMinutes();
    
        var birthYear = prompt('Please enter birth year: ');

        var timeSinceBirth = year-birthYear;
        if(timeSinceBirth>=18)
           console.log("User is over the age of 18 and IS allowed to drive");
        else
           console.log("User is under the age of 18 and NOT allowed to drive");

    //Exercise 14 -- Prompt the user to enter number of years. 
    //               Uses the users input to calculate the number of seconds a person has/can live. 
        var input = prompt('Please enter number of years: ');
        console.log('Enter number of years: '+input);

        console.log('Number of years in seconds: '+input*31556952);

    //Exercise 15 -- Creates a human readable time format using the Date time object
        function zeroFiller(number)
        {
            if(number<10)
                return (number='0'+number);
            else
                return number;
        }

        //YYYY-MM-DD HH:mm
        console.log(`${year}-`+zeroFiller(month)+`-`+zeroFiller(date)+` `+zeroFiller(hours)+`:`+zeroFiller(minutes));

        //DD-MM-YYYY HH:mm
        console.log(zeroFiller(date)+`-`+zeroFiller(month)+`-${year} `+zeroFiller(hours)+`:`+zeroFiller(minutes));
        
        //DD/MM/YYYY HH:mm
        console.log(zeroFiller(date)+`/`+zeroFiller(month)+`/${year} `+zeroFiller(hours)+`:`+zeroFiller(minutes));

//Exercises Level 3

    //Exercise 1 -- Creates a human readable time format using the Date time object. 
    //                The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

    console.log(`${year}-`+zeroFiller(month)+`-`+zeroFiller(date)+` `+zeroFiller(hours)+`:`+zeroFiller(minutes))
