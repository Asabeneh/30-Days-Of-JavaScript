const exercise02 = require('../02_Day_Data_types/day02exercise')
describe("Test Day 02 Exercise - Level 1", ()=>{
    it("Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'",()=>{
        console.log(exercise02.challenge);
        expect(exercise02.challenge).toBe("30 Days Of JavaScript")
    })
    
    it.todo("Print the string on the browser console using console.log()")
    
    it.todo("Print the length of the string on the browser console using console.log()")
    it('Change all the string characters to capital letters using toUpperCase() method', ()=>{
        expect(exercise02.exec04).toBe("30 DAYS OF JAVASCRIPT")
    })
    it("Change all the string characters to lowercase letters using toLowerCase() method",()=>{
        expect(exercise02.exec05).toBe("30 days of javascript")
    })
    it("Cut (slice) out the first word of the string using substr() or substring() method", ()=>{
        expect(exercise02.exec06).toBe('30')
    })
    it("Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.",()=>{
        expect(exercise02.exec07).toBe('Days Of JavaScript')
    })

    it("Check if the string contains a word Script using includes() method", ()=>{
        expect(exercise02.exec08).toBe(true)
    })
    it("Split the string into an array using split() method", ()=>{
        const result = exercise02.exec09 instanceof Array
        expect(result).toBe(true)
    })
    it("Split the string 30 Days Of JavaScript at the space using split() method", ()=>{
        expect(exercise02.exec10).toEqual([ '30', 'Days', 'Of', 'JavaScript' ])
    })
    it("'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.", ()=>{
        expect(exercise02.exec11).toEqual([ 'Facebook',
        ' Google',
        ' Microsoft',
        ' Apple',
        ' IBM',
        ' Oracle',
        ' Amazon' ])
    })
    // Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
    // What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
    // What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
    // Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
    // Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
    // Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    // Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    // Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    // Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
    // Use startsWith() method with the string 30 Days Of JavaScript and make the result true
    // Use endsWith() method with the string 30 Days Of JavaScript and make the result true
    // Use match() method to find all the a’s in 30 Days Of JavaScript
    // Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
    // Use repeat() method to print 30 Days Of JavaScript 2 times
})
