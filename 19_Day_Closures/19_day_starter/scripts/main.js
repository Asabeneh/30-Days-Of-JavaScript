console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercises: Level 1

//    1- Create a closure which has one inner function

function helloWorld(){
    function printHelloWorld(){
        return "Hello world";
    }
    return printHelloWorld();
}
var helloworld = helloWorld();
console.log(helloworld)

// Exercises: Level 2

//     1- Create a closure which has three inner functions
function powerShowcase(n)
{
    function powerOne()
    {
        return Math.pow(n,1);
    }
    function powerTwo()
    {
        return Math.pow(n,2);
    }
    function powerThree()
    {
        return Math.pow(n,3);
    }
    return {
        powerOne:  powerOne(),
        powerTwo: powerTwo(),
        powerThree: powerThree()
    }
}
var func = powerShowcase(2)
console.log(func)

// Exercises: Level 3

//     Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// j'en ai marre de cette question