console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercises: Level 1

//     1) Calculate the total annual income of the person from the following text: 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
var txt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
var pattern = /\d+/gi;

const matches = txt.match(pattern)

console.log(matches)  

var annualincome = (+matches[0] * 12) + (+matches[1]) + (+matches[2] * 12);
console.log(annualincome) 


//     2) The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

//     Write a pattern which identify if a string is a valid JavaScript variable

//     is_valid_variable('first_name') # True
//     is_valid_variable('first-name') # False
//     is_valid_variable('1first_name') # False
//     is_valid_variable('firstname') # True

// Exercises: Level 2

//     1) Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

    var paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    function tenMostFrequentWords(string){
        var pattern = /\b[a-z]+\b/gi;
        var tab = string.match(pattern)

        var retour = tab.filter(function(value, index, self){
            return self.indexOf(value) == index;
        }).map(function(value){
            return { word: value, count: 0 }
        })

        for(var i = 0; i < retour.length; i++)
        {
            for(var j = 0; j < tab.length; j++)
            {
                if(retour[i].word == tab[j])
                {
                    retour[i].count++;
                }
            }
        }

        retour.sort(function(a, b){
            if(a.count<b.count) return 1
            if(a.count>b.count) return -1
            return 0
        })

        return retour.slice(0,10);
    }
    console.log(tenMostFrequentWords(paragraph))

    // Exercises: Level 3

    // 1) Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

    var sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    function cleanText(text){
        return text.replace(/[%$@#&;!?]/gi, '');
    }
    console.log(cleanText(sentence))

    function threeMostFrequentWords(string){
        var pattern = /\b[a-z]+\b/gi;
        var tab = string.match(pattern)

        var retour = tab.filter(function(value, index, self){
            return self.indexOf(value) == index;
        }).map(function(value){
            return { word: value, count: 0 }
        })

        for(var i = 0; i < retour.length; i++)
        {
            for(var j = 0; j < tab.length; j++)
            {
                if(retour[i].word == tab[j])
                {
                    retour[i].count++;
                }
            }
        }

        retour.sort(function(a, b){
            if(a.count<b.count) return 1
            if(a.count>b.count) return -1
            return 0
        })

        return retour.slice(0,3);
    }

    var farany = cleanText(sentence);
    console.log(threeMostFrequentWords(farany))