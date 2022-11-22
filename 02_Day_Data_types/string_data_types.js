// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let quote = "Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.";

let pattern = /love/gi;
let getwords = quote.match(pattern);
 const numberOfLove = getwords.length;
 console.log(numberOfLove);
