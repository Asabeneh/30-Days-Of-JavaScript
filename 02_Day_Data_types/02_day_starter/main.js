// this is your main.js script
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,7))
console.log(challenge.substring(3))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(' '))
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))
console.log(challenge.replace("JavaScript", 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf("because"))
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"))
console.log('You cannot end a sentence with because because because is a conjunction'.search("because"))
console.log(' 30 Days Of JavaScript '.trim(' '))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))
console.log('30 Days of'.concat(' JavaScript'))
console.log(challenge.repeat(2))
//exercise 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
let num = "10"
num = parseInt(num)
console.log(typeof num)
console.log(typeof parseFloat('9.8'))
console.log("Python".includes('on'))
console.log("jargon".includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))
console.log(Math.floor(Math.random()*100))
console.log(Math.floor(Math.random(50) *100))
console.log(Math.floor(Math.random()*255))
let string = 'JavaScript'
console.log(string[Math.floor(Math.random()* string.length)])
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.replace(sentence.substring(31,54),""))
//exercise 3
let phase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(phase.match(/love/gi))
let phaseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(phaseSentence.match(/because/g))
const sen = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx = /[%+@+$+&+#+;+!]/g
console.log(sen.replace(regEx,''))
let moneySen ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(moneySen.match(/\d+/g))