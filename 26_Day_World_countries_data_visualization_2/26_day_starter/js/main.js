console.log(countries)
// alert('Open the console and check if the countries has been loaded')

let startingword = document.querySelector("#startingword");
let anyword = document.querySelector("#anyword");
let filter = document.querySelector("#filter");
let searchbar = document.querySelector(".searchbar");

let startingwordappuie = 0;
let anywordappuie =  0;
let filterappuie =  0;


let h5 = document.querySelector("h5");
let searchkey = document.querySelector(".searchkey");
let searchresult = document.querySelector(".searchresult");

startingword.addEventListener("click", e=>{

    if(startingwordappuie==0)
    {
        startingword.style.backgroundColor = "rgb(80, 32, 165)";
        anyword.style.backgroundColor = "rgb(127, 84, 214)";
        filter.style.backgroundColor = "rgb(127, 84, 214)";

        startingwordappuie = 1;
        anywordappuie =  0;
        filterappuie =  0;

        if(searchbar.value!="")
        {
            divcountries.innerHTML = "";
            let count = 0;
            countries.forEach(function(value){
                if(value.toLocaleLowerCase().startsWith(searchbar.value.toLocaleLowerCase()))
                {
                    element = document.createElement("div");
                    element.textContent = value;
                    element.className = "card";
                    divcountries.appendChild(element);
                    count++;
                }
            })
            searchkey.textContent = searchbar.value;
            searchresult.textContent = count;
            h5.style.display = "block";
        }
    }
    else if(startingwordappuie==1)
    {
        startingword.style.backgroundColor = "rgb(127, 84, 214)";
        anyword.style.backgroundColor = "rgb(127, 84, 214)";
        filter.style.backgroundColor = "rgb(127, 84, 214)";

        startingwordappuie = 0;
        anywordappuie =  0;
        filterappuie =  0;

        restoreList();
    }
    
});

anyword.addEventListener("click", e=>{

    if(anywordappuie==0)
    {
        anyword.style.backgroundColor = "rgb(80, 32, 165)";
        startingword.style.backgroundColor = "rgb(127, 84, 214)";
        filter.style.backgroundColor = "rgb(127, 84, 214)";

        startingwordappuie = 0;
        anywordappuie =  1;
        filterappuie =  0;

        let count = 0;

        divcountries.innerHTML = "";
        countries.forEach(function(value){
            if(value.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()))
            {
                element = document.createElement("div");
                element.textContent = value;
                element.className = "card";
                divcountries.appendChild(element);
                count++;
            }
        })
        searchkey.textContent = searchbar.value;
        searchresult.textContent = count;
        h5.style.display = "block";
    }
    else if(anywordappuie==1)
    {
        anyword.style.backgroundColor = "rgb(127, 84, 214)";
        startingword.style.backgroundColor = "rgb(127, 84, 214)";
        filter.style.backgroundColor = "rgb(127, 84, 214)";
        startingwordappuie = 0;
        anywordappuie =  0;
        filterappuie =  0;

        restoreList();
    }
    
});

filter.addEventListener("click", e=>{

    if(filterappuie ==  0)
    {
        filter.style.backgroundColor = "rgb(80, 32, 165)";
        startingword.style.backgroundColor = "rgb(127, 84, 214)";
        anyword.style.backgroundColor = "rgb(127, 84, 214)";
        startingwordappuie = 0;
        anywordappuie =  0;
        filterappuie =  1;

        let count = 0;

        divcountries.innerHTML = "";
        let liste = countries;
        liste.sort();
        liste.forEach(function(value){
            if(value.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()))
            {
                element = document.createElement("div");
                element.textContent = value;
                element.className = "card";
                divcountries.appendChild(element);
                count++;
            }
        })
        searchkey.textContent = searchbar.value;
        searchresult.textContent = count;
        h5.style.display = "block";
    }
    else if(filterappuie ==  1)
    {
        filter.style.backgroundColor = "rgb(127, 84, 214)";
        startingword.style.backgroundColor = "rgb(127, 84, 214)";
        anyword.style.backgroundColor = "rgb(127, 84, 214)";
        startingwordappuie = 0;
        anywordappuie =  0;
        filterappuie =  0;

        restoreList();
    }
    
});

let divcountries = document.querySelector(".countries");
let element;


searchbar.addEventListener("keypress", e=>{
    console.log(e)
    if(e.key=="Enter")
    {
        let count = 0;
        divcountries.innerHTML = "";
        countries.forEach(function(value){
            if(value.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()))
            {
                element = document.createElement("div");
                element.textContent = value;
                element.className = "card";
                divcountries.appendChild(element);
                count++;
            }
            searchkey.textContent = searchbar.value;
            searchresult.textContent = count;
            h5.style.display = "block";
        })
    }
    
})

function restoreList()
{
    divcountries.innerHTML = "";
    countries.forEach(function(value){
        if(value.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()))
        {
            element = document.createElement("div");
            element.textContent = value;
            element.className = "card";
            divcountries.appendChild(element);
        }
    })
    h5.style.display = "none";
}