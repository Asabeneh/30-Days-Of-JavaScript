console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercises

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1

//     1- Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(function(value){
        console.log(value.name, value.capital, value.languages, value.population, value.area);
    })
  })
  .catch(error => console.error(error))

// Exercises: Level 2

//     1- Print out all the cat names in to catNames variable.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(function(value){
        console.log(value.name);
    })
  })
  .catch(error => console.error(error))

// Exercises: Level 3

//     Read the cats api and find the average weight of cat in metric unit.
//     Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    var tenlargest = data;
    tenlargest.sort(function(a,b){
      if(a.area<b.area) return 1
      if(a.area<b.area) return -1
      return 0;  
    });
    console.log("ten largest: ", tenlargest.slice(0,10))
  })
  .catch(error => console.error(error))

//     Read the countries api and count total number of languages in the world used as officials.

