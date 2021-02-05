/* Day 1: Exercises

Write a single line comment which says, comments can make code readable

Write another single comment which says, Welcome to 30DaysOfJavaScript

Write a multiline comment which says, comments can make code readable, easy to reuse and informative

Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

Declare four variables without assigning values

Declare four variables with assigned values

Declare variables to store your first name, last name, marital status, country and age in multiple lines

Declare variables to store your first name, last name, marital status, country and age in a single line

Declare two variables myAge and yourAge and assign them initial values and log to the browser console. */



// Comments can make code readable

// Welcome to my exercises

/* Comments make code readable, easy to reuse and informative */

var str = 'String'
var boo = true
var boo2 = false
var und = undefined
var nullType = null

console.log(typeof str)
console.log(typeof boo)
console.log(typeof boo2)
console.log(typeof und)
console.log(typeof nullType)

var value1 = undefined
var value2 = undefined
var value3 = undefined
var value4 = undefined

const firstName = 'Eray'
const lastName = 'Gundogmus'
const maritalStatus = 'Single'
const country = 'Turkey'

const person = {
    firstName: "Eray", lastName: "Gundogmus", maritalStatus: "single", country: "turkey"}
console.log(person)

let myAge = 24 
let yourAge = 250

if (myAge < yourAge){
    console.log('You are older than me.')
} else {
    console.log('I am older than you.')
}

