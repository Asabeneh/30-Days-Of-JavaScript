 # Day 12 - Regex
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>

 #### [Home](../README.md) | [<< Day 11](./11_day_des_spreading.md) | [Day 13 >>](./13_day_consol_objmth.md)


## Exercise Solutions
 
 ### Exercises Level 1

 
 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
```js
// app.js
let text ="He earns 4000 euro from salary per month, 10000 euro  annual bonus, 5500 euro online courses per month."
let pattern = /\d+/g
let numbers = text.match(pattern)
numbers = numbers.map(Number)
let montlySalary = numbers[0]
let bonus = numbers[1]
let montCourses = numbers[2]
console.log(`Annual income is ${(montlySalary*12) + (bonus) + (montCourses *12)}`)

```


2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
```js
// app.js
```

3. Write a pattern which identify if a string is a valid JavaScript variable

```js
// app.js
function isValidVariableName(str) {
    // Birinci karakterin harf, alt çizgi veya dolar işareti olup olmadığını kontrol eden bir kalıp
    var firstCharPattern = /^[a-zA-Z_$]/;
    // Diğer karakterlerin harf, rakam, alt çizgi veya dolar işareti olup olmadığını kontrol eden bir kalıp
    var otherCharPattern = /^[a-zA-Z0-9_$]*$/;
    // Dizenin rezerve edilmiş bir kelime olup olmadığını kontrol eden bir dizi
    var reservedWords = ["var", "let", "const", "function", "if", "else"];
    // Dizenin boş olmadığını, birinci karakterin kalıpla eşleştiğini, diğer karakterlerin kalıpla eşleştiğini ve rezerve edilmiş kelimeler arasında olmadığını kontrol eder
    return str && firstCharPattern.test(str) && otherCharPattern.test(str) && !reservedWords.includes(str);
  }
console.log(isValidVariableName('21dzfgdf'))

```

### Exercises Level 2

1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

```
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
```

```js
// app.js
function tenMostFrequentWords(paragraph) {
    // Paragrafı kelimelere ayırırken noktalama işaretlerini ve büyük harfleri yok sayar
    var words = paragraph.toLowerCase().replace(/[.,]/g, '').split(/\s/);
    // Her kelimenin frekansını tutan bir nesne oluşturur
    var freqMap = {};
    words.forEach(function(word) {
      // Kelime nesnede yoksa 0, varsa mevcut değerine 1 ekler
      freqMap[word] = (freqMap[word] || 0) + 1;
    });
    // Nesneyi bir diziye dönüştürür ve frekansa göre azalan şekilde sıralar
    var sorted = Object.entries(freqMap).sort(function(a, b) {
      return b[1] - a[1];
    });
    // Sadece ilk 10 elemanı alır ve kelimeleri bir dizi olarak döndürür
    return sorted.slice(0, 10).map(function(pair) {
      return pair[0];
    });
  }
console.log( tenMostFrequentWords(paragraph))

```
### Exercises Level 3


1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.


 #### [Home](../README.md) | [<< Day 11](./11_day_des_spreading.md) | [Day 13 >>](./13_day_consol_objmth.md)

