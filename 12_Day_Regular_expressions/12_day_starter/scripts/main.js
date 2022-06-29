
console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//Exercises

//Exercises: Level 1

//1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

const pattern = /\d+/g
const matches = text.match(pattern);
console.log(matches)
let [salary, annualBonus, onlineCourses] = matches
console.log((+salary + + onlineCourses) * 12 + +annualBonus) // 124000


//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const textParticles = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
const patternParticles = /.\d+/g;
const points = textParticles.match(patternParticles);
console.log(points)

const sortedPoints = [];
for (let element of points) {
  sortedPoints.push(parseInt(element));
}
console.log(sortedPoints)

let distance = sortedPoints[sortedPoints.length - 1] -sortedPoints[0];
console.log(distance)

//3. Write a pattern which identify if a string is a valid JavaScript variable
function isValidVariable(str) {
    const pattern1 = /^\d/;
    const pattern2 = /[^A-Za-z0-9$_]/;
    bool1 = pattern1.test(str);
    bool2 = pattern2.test(str);
    if (bool1||bool2) {
      return 'Invalid';
    } else {
      return 'Valid';
    }
  }
  console.log(isValidVariable('first_name'))

  //Exercises: Level 2

  //1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

  paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

  /*[
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}] */

    function tenMostFrequentWords(str, number) {
        const pattern = /[^A-Za-z ]/g;
        const onlyWords = str.replace(pattern, '');
        const wordIndex = [...new Set(onlyWords.split(' '))];
        const wordsAndCounts = [];
        for (i = 0; i < wordIndex.length; i++) {
          let word = new RegExp(wordIndex[i], 'g');
          wordsAndCounts.push({word: wordIndex[i], count: onlyWords.match(word).length})
        }
        const sortedWordCounts = wordsAndCounts.sort((a, b) =>
          b.count - a.count
        );
        const printOut = sortedWordCounts.filter((object) =>
          sortedWordCounts.indexOf(object) < number);
        return printOut;
      }
      console.log(tenMostFrequentWords(paragraph, 10));

      // Exercises: Level 3
      
      //1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

      sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
      //console.log(cleanText(sentence))

/*js
 console.log(mostFrequentWords(cleanedText))
 [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]*/

 // cleaning the text
function cleanText(str) {
    const pattern = /[^A-Za-z ]/g;
    const cleanedText = str.replace(pattern, '');
    return cleanedText;
  }
  console.log(cleanText(sentence));

  function mostFrequentWords(str) {
    const cleanedText = cleanText(str);
    const wordIndex = [...new Set(cleanedText.split(' '))];
    const wordsAndCounts = [];
    for (i = 0; i < wordIndex.length; i++) {
      let word = new RegExp(wordIndex[i] + ' ', 'g');
      wordsAndCounts[i] = { word: wordIndex[i], count: cleanedText.match(word).length };
    }
    const sortedWordCounts = wordsAndCounts.sort((a, b) =>
      b.count - a.count
    );
    const printOut = sortedWordCounts.filter((object) =>
      sortedWordCounts.indexOf(object) < 3);
    return printOut;
  };
  console.log(mostFrequentWords(sentence));
    


