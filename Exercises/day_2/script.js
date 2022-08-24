console.log(chanllenge, `length is ${chanllenge.length}`);

chanllenge_was_lowered = chanllenge.toLocaleLowerCase();
console.log(`lower case of chanllenge is ${chanllenge_was_lowered}`);

chanllenge_was_uppered = chanllenge.toUpperCase();
console.log(`upper case of chanllenge is ${chanllenge_was_uppered}`);

first_str_of_challenge = chanllenge.substring(0, 1);
console.log(`first charactor of chanllenge is ${chanllenge_was_uppered}`);

console.log(`Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript: ${chanllenge.replace('Days Of JavaScript','')}`)

console.log(`Check if the string contains a word Script using includes() method: ${chanllenge.includes('Script')}`)

console.log(`Split the string into an array using split() method: ${chanllenge.split('')}`)

console.log(`Split the string 30 Days Of JavaScript at the space using split() method: ${chanllenge.split(' ')}`)

console.log(`'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array: ${'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')}`)

console.log(`Change 30 Days Of JavaScript to 30 Days Of Python using replace() method: ${chanllenge.replace('JavaScript', 'Python')}`)

console.log(`What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method: ${chanllenge.charAt(15)}`)

console.log(`What is the character code of J in '30 Days Of JavaScript' string using charCodeAt(): ${chanllenge.charCodeAt(chanllenge.indexOf('J'))}`)

console.log(`Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript: ${chanllenge.indexOf('a')}`)

console.log(`Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScriptL: ${chanllenge.lastIndexOf('a')}`)

console.log(`Use indexOf to find the position of the first occurrence of the word because in the following sentence: ${'You cannot end a sentence with because because because is a conjunction'.indexOf('because')}`)

console.log(`Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence: ${'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because')}`)

console.log(`Use search to find the position of the first occurrence of the word because in the following sentence: ${'You cannot end a sentence with because because because is a conjunction'.search('because')}`)

console.log(`Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g: ${' 30 Days Of JavaScript '.trim()}`)

console.log(`Use startsWith() method with the string 30 Days Of JavaScript and make the result true ${chanllenge.startsWith('30')}`)

console.log(`Use endsWith() method with the string 30 Days Of JavaScript and make the result true: ${chanllenge.endsWith('JavaScript')}`)

console.log(`Use match() method to find all the a’s in 30 Days Of JavaScript: ${chanllenge.match("a’s")}`)

console.log(`Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript': ${'30 Days of'.concat('JavaScript')}`)

console.log(`Use repeat() method to print 30 Days Of JavaScript 2 times: ${chanllenge.repeat(2)}`)