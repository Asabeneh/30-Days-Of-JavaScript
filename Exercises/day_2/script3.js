//Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let str_1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

function number_of_word(str, word){
    str = str.toLowerCase();
    word = word.toLowerCase();
    let res = 0;
    while (str.includes(word)) {
        res++;
        str = str.replace(word, "");
    }
    return res;
}

function use_match(str, word){
    str = str.toLowerCase();
    word = word.toLowerCase();
    let res = 0;
    while (str.match(word)) {
        res++;
        str = str.replace(word, "");
    }
    return res;

}

console.log(number_of_word(str_1, "love"))
console.log(use_match(str_1, "love"))

let income_text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let income_arr = income_text.split(" ")

let income = 0

income_arr.forEach(count_money)

function count_money(value)
{
    if(parseFloat(value) == value)
    income += parseFloat(value)
}

console.log(income) 