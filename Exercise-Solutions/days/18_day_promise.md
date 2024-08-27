  # Day 18  - Promise
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>


 #### [Home](../README.md) | [<< Day 17](./17_day_wep%20storege.md) | [Day 19 >>](./19_day_clouse.md)

## Exercise Solutions

### Exercises: Level 1

1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
```js
// app.js
const countriesAPI = 'https://restcountries.com/v2/all'

fetch('https://restcountries.com/v2/all')
.then(response => response.json())
.then(data => {
  data.forEach(country => {
    const name = country.name;
    const capital = country.capital;
    const languages = country.languages.map(language => language.name);
    const population = country.population;
    const region = country.region;
    console.log(`${name}, başkenti ${capital}'dir. Nüfusu ${population} ve bölgesi ${region}. Konuşulan diller: ${languages.join(', ')}`);
  });
});
```

### Exercises: Level 2

1. Print out all the cat names in to catNames variable.
```js
// app.js

fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(data => {
    const catNames = data.map(cat => cat.name);
    console.log(catNames);
  });

```
### Exercises: Level 3

1. Read the cats api and find the average weight of cat in metric unit.
```js
// app.js
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(data => {
    const weights = data.map(cat => cat.weight.metric);
    console.log(weights);
  });

```
2. Read the countries api and find out the 10 largest countries
```js
// app.js
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => b.area - a.area);
    const top10 = data.slice(0, 10);
    top10.forEach(country => {
      const name = country.name;
      const capital = country.capital;
      const languages = country.languages.map(language => language.name);
      const population = country.population;
      const region = country.region;
      console.log(`${name}, başkenti ${capital}'dir. Nüfusu ${population} ve bölgesi ${region}. Konuşulan diller: ${languages.join(', ')}`);
    });
  });

```
3. Read the countries api and count total number of languages in the world used as officials.

```js
// app.js
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    const languages = new Set();
    data.forEach(country => {
      country.languages.forEach(language => {
        languages.add(language.name);
      });
    });
    console.log(`Dünya genelinde resmi olarak kullanılan dillerin toplam sayısı: ${languages.size}`);
  });

```
 #### [Home](../README.md) | [<< Day 17](./17_day_wep%20storege.md) | [Day 19 >>](./19_day_clouse.md)