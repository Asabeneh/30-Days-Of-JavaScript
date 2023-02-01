var challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log("challenge's length is:", challenge.length);
challenge = challenge.toUpperCase();
console.log("toUpperCase: ", challenge);
challenge = challenge.toLowerCase();
console.log("toLowerCase: ", challenge);

challenge = "30 Days Of JavaScript";
var cut1 = challenge.substring(0,2);
console.log("Cut (slice) out the first word: ", cut1)
var cut2 = challenge.substring(3, challenge.length);
console.log(cut2);
console.log(challenge.includes("Script"));
var split = challenge.split(" ");
console.log("split: ", split);
split = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(", ");
console.log("split: ", split);
var replace = challenge.replace("JavaScript", "Python");
console.log("replace: ", replace);
console.log("charAt(15): ", challenge.charAt(15));
console.log("charCode of J: ", challenge.charCodeAt(11));
console.log("indexOf a: ", challenge.indexOf("a"));
console.log("lastIndexOf a: ", challenge.lastIndexOf("a"));
console.log("first occurrence of the word because: ", 'You cannot end a sentence with because because because is a conjunction'.search("because"));
console.log("trim: ", ' 30 Days Of JavaScript '.trim());
console.log("startsWith(30): ", challenge.startsWith("30"));
console.log("endsWith(JavaScript): ", challenge.endsWith("JavaScript"));
console.log("match: ", challenge.match("a"));
console.log("concat: ", '30 Days of'.concat('JavaScript'));
console.log("repeat: ", challenge.repeat(2));

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
console.log("typeof('10'): ", typeof('10'), typeof(10), typeof(parseInt('10')));
console.log("parseFloat('9.8'): ", parseFloat('9.8'), Math.round(parseFloat('9.8')));
console.log("python".search('on'), "jargon".search('on'));
console.log("I hope this course is not full of jargon.".search("jargon"));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*50+50));
console.log(Math.floor(Math.random()*255));
console.log("JavaScript"[Math.floor("JavaScript".length*Math.random())]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

var phrase = 'You cannot end a sentence with because because because is a conjunction'; 
console.log(phrase.indexOf("because"));
console.log(phrase.lastIndexOf("because"));
console.log(phrase.lastIndexOf("because")+"because".length);
console.log(phrase.substring(phrase.indexOf("because"), phrase.lastIndexOf("because")+"because".length));

phrase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
phrase = phrase.toLowerCase();
console.log(phrase.match(/love/gi), phrase.match(/love/gi).length);
phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.match(/because/gi), phrase.match(/because/gi).length);

var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
sentence = sentence.replace(/[^a-zA-Z ]/g, "");
console.log(sentence);

sentence =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
sentence = sentence.match(/\d+/g);
console.log(Number(sentence[0]*12) + Number(sentence[1]) + Number(sentence[2]*12));