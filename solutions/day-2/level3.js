// 1.question
let word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(word.match(/love/gi).length);
// 2.question
let word1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(word1.match(/because/gi).length);
// 3.question
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/[^a-zA-Z0-9]/g, ''));
// 4.question
let word2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let arr = +(word2.replace(/[^0-9]/g, ''));
console.log(arr);