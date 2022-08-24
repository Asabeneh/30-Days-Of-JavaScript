console.log("The quote 'There is no exercise better for the heart \
than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. \
Charity and love are the same -- with charity you give love, \
so don't just give money but reach out your hand instead.")

console.log("Check if typeof '10' is exactly equal to 10. If not make it exactly equal", parseInt('10') == 10)

console.log("Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10:", Math.ceil(parseFloat('9.8')) == 10)

console.log("Check if 'on' is found in both python and jargon", "python".includes("on") && "jargon".includes("on"))

sentence = "I hope this course is not full of jargon. Check if jargon is in the sentence: "
console.log(sentence, sentence.includes("jargon"))

console.log("Generate a random number between 0 and 100 inclusively", Math.floor(Math.random()*101))

console.log("Generate a random number between 50 and 100 inclusively.", Math.floor(Math.random()*51) + 50)

console.log("Generate a random number between 0 and 255 inclusively.", Math.floor(Math.random()*250))

console.log("Access the 'JavaScript' string characters using a random number.", "Javascript"[Math.floor(Math.random()*"Javascript".length)])

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n")

let str = 'You cannot end a sentence with because because because is a conjunction'
console.log("Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'", str.substr(str.indexOf("because because because"), "because because because".length))