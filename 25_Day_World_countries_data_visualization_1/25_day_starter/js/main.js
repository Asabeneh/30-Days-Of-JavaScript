console.log(countries_data)
// alert('Open the console and check if the countries has been loaded')

let numberofcountries = document.querySelector(".numberofcountries");
numberofcountries.textContent = countries_data.length;

function portionOfPopulation(total, number)
{
    return number*100/total;
}

// POPULATION
let population = [];
population.push( { country: "World", population: 0, portion: 100} );

countries_data.forEach(function(value){
    population[0].population += value.population;
})
countries_data.forEach(function(value){
    population.push({ country: value.name, population: value.population, portion: portionOfPopulation(population[0].population, value.population) });
})

population.sort(function(a,b){
    if(a.population<b.population) return 1
    if(a.population>b.population) return -1
    return 0;
})

// LANGAGE
let temp = [];
countries_data.forEach(function(value){
    value.languages.forEach(function(langage){
        temp.push({ language: langage, count: 1, portion: 0 })
    })
})

for(let i = 0; i < temp.length; i++)
{
    for(let j = 0; j < temp.length; j++)
    {
        if((i!=j) && (temp[i].language==temp[j].language))
        {
            temp[i].count++;
            temp[j] = "";
        }      
    }
}

let languages = temp.filter(function(value){
    return value != "";
})
languages.sort(function(a,b){
    if(a.count<b.count) return 1
    if(a.count>b.count) return -1
    return 0;
})
languages.forEach(function(value){
    value.portion = portionOfPopulation(languages.length, value.count);
})

console.log(temp);
console.log(languages);

// CREATION AFFICHAGE

let grid = document.querySelector(".grid"); 

let pays;
let portion;
let baton;
let valeur;

for(let i = 0; i < 10; i++)
{
    pays = document.createElement("div");
    pays.textContent = population[i].country;
    pays.className = "pays";
    grid.appendChild(pays);

    portion = document.createElement("div");
    portion.className = "portion";
    baton = document.createElement("div");
    baton.className = "baton";
    baton.style.width = ""+population[i].portion+"%";
    portion.appendChild(baton)
    grid.appendChild(portion);



    valeur = document.createElement("div");
    valeur.textContent = population[i].population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    valeur.className = "valeur";
    grid.appendChild(valeur);
}


let buttonpopulation = document.querySelector(".population");
buttonpopulation.addEventListener("click", e => {
    grid.innerHTML = "";
    for(let i = 0; i < temp.length; i++)
    {
        pays = document.createElement("div");
        pays.textContent = population[i].country;
        pays.className = "pays";
        grid.appendChild(pays);

        portion = document.createElement("div");
        portion.className = "portion";
        baton = document.createElement("div");
        baton.className = "baton";
        baton.style.width = ""+population[i].portion+"%";
        portion.appendChild(baton)
        grid.appendChild(portion);

        valeur = document.createElement("div");
        valeur.textContent = population[i].population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        valeur.className = "valeur";
        grid.appendChild(valeur);

    }
})

let buttonlanguages = document.querySelector(".languages");
buttonlanguages.addEventListener("click", e => {
    grid.innerHTML = "";
    for(let i = 0; i < languages.length; i++)
    {
        pays = document.createElement("div");
        pays.textContent = languages[i].language;
        pays.className = "pays";
        grid.appendChild(pays);

        portion = document.createElement("div");
        portion.className = "portion";
        baton = document.createElement("div");
        baton.className = "baton";
        baton.style.width = ""+languages[i].portion+"%";
        portion.appendChild(baton)
        grid.appendChild(portion);

        valeur = document.createElement("div");
        valeur.textContent = languages[i].count;
        valeur.className = "valeur";
        grid.appendChild(valeur);
    }
})