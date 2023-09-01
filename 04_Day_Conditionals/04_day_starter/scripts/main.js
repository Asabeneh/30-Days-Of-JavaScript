//Exercises Level 1

    //Exercise 1 -- Gets user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback telling them how long they have to wait to drive
        var age = prompt("Enter your age: ");
        let waitTime = 18-age;
        console.log("Enter your age: "+age);

        if(age>=18)
            console.log("You are old enough to drive");
        else
            console.log(`You have ${waitTime} years until you can drive`);

    //Exercise 2 -- Compares the values of myAge and yourAge using if … else. Based on the comparison and logs the result to console stating who is older (me or you).
        let myAge = 18;

        if (myAge>age)
            console.log('I am '+(myAge-age)+' year(s) older than you.');
        else if(myAge<age)
            console.log('You are '+(age-myAge)+' year(s) older than me.');
        else if(myAge==age)
            console.log('We are the same age.');
        else 
            console.log('Invalid age(s)');

    //Exercise 3 -- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    let a = 4
    let b = 3

        //Implementation 1 -- Used if/else 
            if (a > b) 
                console.log(`${a} is greater than ${b}`);
            else 
                console.log(`${a} is less than ${b}`);

        //Implementation 2 -- Ternary operator
            (a>b)
                ?console.log(`${a} is greater than ${b}`) //value is true
                :console.log(`${a} is less than ${b}`);   //value is false

    //Exercise 4 -- Even numbers are divisible by 2 and the remainder is zero. 
    //How do you check, if a number is even or not using JavaScript?
        var input = prompt("Enter a number: ");
        console.log(`Enter a number: ${input}`);

        if(input%2 == 0)
            console.log("Your number is divisible by 2!");
        else
            console.log("Your number is not divisible by 2!");

//Exercises Level 2

    //Exercise 1 -- Write a code which can gives grades to students according to theirs scores
        let grade = prompt("Enter grade: ");
        console.log(`Enter grade: ${grade}`);

        if(grade>100 || (typeof(grade) == NaN))
            console.log(`${grade} is an invalid grade`);
        else if(grade>=80 && grade <=100)
            console.log(`Assignment grade: A`);
        else if(grade>=70 && grade <=89)
            console.log(`Assignment grade: B`);
        else if(grade>=60 && grade <=69)
            console.log(`Assignment grade: C`);
        else if(grade>=50 && grade <=59)
            console.log(`Assignment grade: D`);
        else
            console.log(`Assignment grade: F`);

    //Exercise 2 -- Determines the season of the year given a user entered month
        // var enteredMonth = prompt('Enter month: ');
        // console.log(`Enter month: ${enteredMonth}`);
        // enteredMonth = enteredMonth.toLowerCase();

    //Exercise 3 -- Checks to see if a day is a weekend day or work day, from a user entered input.

//Exercises Level 3

    //Exercise 1 -- 

    //Exercise 2 --