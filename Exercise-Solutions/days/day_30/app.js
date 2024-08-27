const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");
let ctx = document.getElementById('myChart');
const graphic = document.getElementById("graphic")
const icon = document.getElementById('icon')

let filteredCountries = [];
let countriesPopulation = [];
let  mostSpekingLangue = new Map();

calculateMostSpeakingLangues(countriesData)
createCardAndDisplay(sortCountriesToCountriName(countriesData))

// create carts and display in HTML function
function createCardAndDisplay(arr){
  let cards = [];
  arr.forEach((data) => {
    countriesPopulation.push(data.population)
    
    let card =  `
        <div class = "country-wrapper">
        <img src = "${data.flag}">
        <p class = "country-name">${data.name } </p>
        <ul>
        <li>Capital: ${data.capital} </li>
        <li>Langue: ${data.languages} </li>
        <li>Population: ${data.population} </li>
        <ul>
        </div>
        `; 
    cards.push(card)
  })
  main.innerHTML = ''
  main.innerHTML = cards
}

// buttons click events
form.addEventListener('click', (e) => {
  e.preventDefault()
  let element = e.target;
  if(!element.matches('button')) return;
  switch(element.id){
    
    // click reverse button
    case'reverseButton':
    if (input.value.length == 0){
      if(main.className == "main"){
        main.className = "main-reverse"
        createCardAndDisplay(sortCountriesToCountriName(countriesData).reverse())
      }
      else if(main.className == "main-reverse"){
        main.className = "main"
        createCardAndDisplay(sortCountriesToCountriName(countriesData))
      }
      else {
        main.className = 'main'
        createCardAndDisplay(sortCountriesToCountriName(countriesData))
      }
    }
    else {
      if(main.className == 'filtered-countries'){
        main.className = 'filtered-countries-reverse'
        createCardAndDisplay(filteredCountries.reverse())
      }
      else if(main.className == 'filtered-countries-reverse'){
        main.className = 'filtered-countries'
        createCardAndDisplay(filteredCountries.reverse())
      }
      else{
        main.className = 'filtered-countries';
        createCardAndDisplay(sortCountriesToCountriName(filteredCountries))
      }
    }
    break
    
    // click  capital button
    case'capitalButton':
    if(input.value.length == 0 ){
      if(main.className == "main-capital"){
        main.className = "main-capital-reverse"
        createCardAndDisplay(sortCountriesToCapitalName(sortCountriesToCountriName(countriesData)).reverse())
      }
      else if(main.className == "main-capital-reverse"){
        main.className = "main-capital"
        createCardAndDisplay(sortCountriesToCapitalName(sortCountriesToCountriName(countriesData)))
      }
      else {
        main.className = 'main-capital'
        createCardAndDisplay(sortCountriesToCapitalName(sortCountriesToCountriName(countriesData)))
      }
    }
    else {
      if(main.className == 'filtered-capital'){
        main.className = 'filtered-capital-reverse'
        createCardAndDisplay(sortCountriesToCapitalName(sortCountriesToCountriName(filteredCountries)).reverse())
      }
      else if (main.className == 'filtered-capital-reverse'){
        main.className = 'filtered-capital'
        createCardAndDisplay(sortCountriesToCapitalName(sortCountriesToCountriName(filteredCountries)))
      }
      else{
        main.className = 'filtered-capital'
        createCardAndDisplay(sortCountriesToCapitalName(sortCountriesToCountriName(filteredCountries)))
      }
    }
    break;
    
    // click population button
    case 'population-button':
    if (input.value.length == 0){
      if (main.className == 'main-population'){
        main.className = 'main-population-reverse'
        createCardAndDisplay(sortCountriesToPopulation(countriesData).reverse())
      }
      else if (main.className == 'main-population-reverse'){
        main.className = 'main-population'
        createCardAndDisplay(sortCountriesToPopulation(countriesData))
      }
      else {
        main.className = 'main-population'
        createCardAndDisplay(sortCountriesToPopulation(countriesData))
      }
    }
    else{
      if(main.className == 'filtered-population'){
        main.className = 'filtered-population-reverse'
        createCardAndDisplay(sortCountriesToPopulation(filteredCountries).reverse())
      }
      else if (main.className == 'filtered-population-reverse'){
        main.className = 'filtered-population'
        createCardAndDisplay(sortCountriesToPopulation(filteredCountries))
      } 
      else {
        main.className = 'filtered-population'
        createCardAndDisplay(sortCountriesToPopulation(filteredCountries))
      }
    }
  }
});

//input event listener
input.addEventListener('keyup', (e)=>{
  countriesPopulation = [];
  filteredCountries = [];
  
  e.preventDefault()
  let value = e.target.value.trim().toLowerCase()
  
  if (value.length > 0){
    sortCountriesToCountriName(countriesData).forEach((data) => {
      if(data.name.toLowerCase().trim().startsWith(value)){
        filteredCountries.push(data)
        countriesPopulation.push(data.population)
      }
    })
    main.className = 'filtered-countries'
    createCardAndDisplay(filteredCountries)
    updateGrapgic(sortArrayNames(filteredCountries),
    sortArrays(countriesPopulation))
  }
  else if (value.length == 0){
    main.className = 'main'
    createCardAndDisplay((sortCountriesToCountriName(countriesData)))
    updateGrapgic(sortArrayNames(countriesData).slice(0,8),
    sortArrays(countriesPopulation).slice(0,8))
  }
});

// return sort countries name function
function sortArrays(arr){
  return arr.sort((a, b) => {return b-a})
}
  
 // Return the names of countries sorted by country population
  function sortArrayNames (arr){
  let countriesName = [];
  sortCountriesToPopulation(arr).forEach((data)=>{
    countriesName.push(data.name)
  })
  return countriesName;
}

// return sort countries data array by countries name
function sortCountriesToCountriName(arr) {
  return arr.sort((a, b) =>{
    if(a.name < b.name) return -1;
    if(a.name > b.name) return +1;
    return 0;
  });
}

// return sort capital name
function sortCountriesToCapitalName(arr) {
  return arr.sort((a, b) =>{
    if(a.capital == undefined ) return -1
    if(a.capital < b.capital) return -1;
    if(a.capital > b.capital) return +1;
    return 0;
  });
}

// return sort populations
function sortCountriesToPopulation (arr) {
  return arr.sort((a, b) => {
    if(a.population < b.population) return +1
    if(a.population > b.population) return -1
    return 0;
  });
}

// Object for graphic 
let myCharts =  new Chart(ctx, {
    type: 'bar',
    data: {
      labels:sortArrayNames(countriesData).slice(0,8),
      datasets: [{
        label: '# of Votes',
        data:sortArrays(countriesPopulation).slice(0,8),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// update graphic when pressing keyboard
function  updateGrapgic(countriesNames, countriesPopulations) {
  myCharts.data.labels = countriesNames;
  myCharts.data.datasets[0].data = countriesPopulations;
  myCharts.update()
}

icon.addEventListener('click', ()=> {
  graphic.classList.toggle('graphic-wrapper')
})


function calculateMostSpeakingLangues(array) {

  array.forEach((data) =>{
    mostSpekingLangue.set(data.languages,data.name)
  })
}


