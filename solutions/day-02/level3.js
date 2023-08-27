let love = "Love is the best thing in this world. Some found their love and some are still looking for their love"

console.log(love.match(/love/gi).length)

let because = "You cannot end a sentence with because because because is a conjunction"

console.log(because.match(/because/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching\n'

clean_sentence = sentence.replace(/\$|%|@|&|#|;/g, "")

console.log(clean_sentence)

let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."

let regex = /\d+/g;
let matches = text.match(regex)

let totalIncome = 0;
for (let i = 0; i < matches.length; i++) {
    totalIncome += parseInt(matches[i]);
}

totalIncome *= 12;

console.log('Total Annual Income:', totalIncome, 'euro');