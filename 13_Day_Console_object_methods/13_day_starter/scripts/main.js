console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercises:Level 1

//     Display the countries array as a table
        console.table(countries)
//     Display the countries object as a table
        console.table(countries[0])
//     Use console.group() to group logs
        console.group('Countries')
        console.table(countries)
        console.groupEnd()

// Exercises:Level 2

//     10 > 2 * 10 use console.assert()
        console.assert( 10 > 2 * 10, "error message");

//     Write a warning message using console.warn()
       console.warn("bibitiko 19cm")

//     Write an error message using console.error()
       console.error("bibitiko 19cm")

// Exercises:Level 3

//     Check the speed difference among the following loops: while, for, for of, forEach

console.group('while loop')
    console.time('while loop')
    var i = 0;
    while(i < countries.length)
    {
        
        console.log(countries[i])
        i++;
    }
    console.groupEnd('while loop')

console.timeEnd('while loop')

console.group('for loop')
console.time('for loop')
for(var i = 0; i < countries.length; i++){
    console.log(countries[i])
}
console.groupEnd('for loop')
console.timeEnd('for loop')

console.group('forEach loop')
console.time('forEach loop')
countries.forEach(function(value){
    console.log(value);
})
console.groupEnd('forEach loop')
console.timeEnd('forEach loop')


