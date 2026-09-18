console.log(countries)
// alert('Open the console and check if the countries has been loaded')


// Exercises: Level 1
// 1) Explain the difference between forEach, map, filter, and reduce.

// forEach permet de parcourir chaque élément d'un tableau
// map permet de parcourir et de changer les éléments
// filter permet de filter les éléments d'un tableau avec une condition (par exemple prendre les noms qui ont que 5 lettres)
// reduce...

const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 3) Use forEach to console.log each country in the countries array.

countries2.forEach(function(element){
    console.log(element);
});

// 4) Use forEach to console.log each name in the names array.

names.forEach(function(element){
    console.log(element);
});


// 5) Use forEach to console.log each number in the numbers array.

numbers.forEach(function(element){
    console.log(element);
});

// 6) Use map to create a new array by changing each country to uppercase in the countries array.

var temp = countries2.map(function(country){
    return country.toUpperCase();
});
console.log(temp);

// 7) Use map to create an array of countries length from countries array.

temp = countries2.map(function(country){
    return country.length;
});
console.log(temp);

// 8) Use map to create a new array by changing each number to square in the numbers array

temp = numbers.map(function(number){
    return number*number;
});
console.log(temp);

// 9) Use map to change to each name to uppercase in the names array

temp = names.map(function(name){
    return name.toUpperCase();
});
console.log(temp);

// 10) Use map to map the products array to its corresponding prices.

temp = products.map(function(product){
    return product.price;
})
console.log(temp);

// 11) Use filter to filter out countries containing land.

temp = countries.filter(function(country){
    return country.name.indexOf("land")!=-1;
})

console.log(temp);

// 12) Use filter to filter out countries having six character.

temp = countries.filter(function(country){
    return country.name.length==6;
})

console.log(temp);

// 13) Use filter to filter out countries containing six letters and more in the country array.

temp = countries.filter(function(country){
    return country.name.length>=6;
})

console.log(temp);

// 14) Use filter to filter out country start with 'E';

temp = countries.filter(function(country){
    return country.name.startsWith("E")==true;
})
console.log(temp);

// 15) Use filter to filter out only prices with values.

temp = products.filter(function(product){
    return typeof product.price == "number";
})
console.log(temp);

// 16) Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(tab){
    return tab.filter(function(t){ return typeof t == "string" });
}

// Use reduce to sum all the numbers in the numbers array.
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// Explain the difference between some and every
// Use some to check if some names' length greater than seven in names array
// Use every to check if all the countries contain the word land
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array

temp = countries.find(function(country){
    return country.name.length==6;
})
console.log(temp);

// Use findIndex to find the position of the first country containing only six letters in the countries array

temp = countries.findIndex(function(country){
    return country.name.length==6;
})
console.log(temp);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

temp = countries.find(function(country){
    return country.name=="Norway";
})
console.log(temp);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

temp = countries.find(function(country){
    return country.name=="Russia";
})
console.log(temp);


// Exercises: Level 2

//     1- Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
//     2- Find the sum of price of products using only reduce reduce(callback))
//     3- Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
//     4- Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
//     5- Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
//     6- Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
//     7- Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// Exercises: Level 3

//     1) Use the countries information, in the data folder. Sort countries by name, by capital, by population

        countries.sort(function(a,b){
            if(a.name<b.name){   
                return -1
            } 
            if(a.name>b.name) return 1
            return 0;
        });

        console.log(countries);

        countries.sort(function(a,b){
            if(a.capital<b.capital){   
                return -1
            } 
            if(a.capital>b.capital) return 1
            return 0;
        });

        console.log(countries);

        countries.sort(function(a,b){
            if(a.population<b.population){   
                return -1
            } 
            if(a.population>b.population) return 1
            return 0;
        });

        console.log(countries);

//     *** Find the 10 most spoken languages:
    
function mostSpokenLanguages(countries, number){

    var temp = [];

    for(var i = 0; i < countries.length; i++)
    {
        for(var j = 0; j < countries[i].languages.length; j++)
        {
            var element = countries[i].languages[j];
            var count = 0;
            count = countries.filter(function(value){
                return value.languages.indexOf(element)!=-1;
            }).length;
            // console.log(count);
            temp.push({country: element, count: count}); 
        }
    }

    var retour = temp.filter(function(value, index, self){
        // console.log("indexOf", temp.indexOf(value));
        return self.indexOf(value)==self.findIndex(function(t){
            return value.country == t.country && t.count==value.count
        });
    });

    retour.sort(function(a, b){
        if(a.count<b.count) return 1
        if(a.count>b.count) return -1
        return 0
    });

    return retour.slice(0, number);
};    

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));


// *** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countries, number){
    var temp = countries.filter(function(value){
        return typeof value.population == 'number';
    }).sort(function(a, b){
        if(a.population<b.population) return 1
        if(a.population>b.population) return -1
        return 0;
    });

    return temp.slice(0, number).map(function(value){
        return {country: value.name, population: value.population
        }
    });
}


console.log(mostPopulatedCountries(countries, 10))