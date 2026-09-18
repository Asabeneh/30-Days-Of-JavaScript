// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

let data = [
    { planet: "earth", gravity: 1},
    { planet: "jupiter", gravity: 2.34},
    { planet: "mars", gravity: 0.38 },
    { planet: "mercury", gravity: 0.38},
    { planet: "moon", gravity: 0.166},
    { planet: "neptune", gravity: 1.19},
    { planet: "pluto", gravity: 0.06},
    { planet: "saturn", gravity: 1.06},
    { planet: "uranus", gravity: 0.92},
    { planet: "venus", gravity: 0.91}
]

// Weight on Other Planet = Weight on Earth x Multiple of Earth’s Gravity
// Body	Multiple of Earth’s Gravity
// Sun	27.01
// Mercury	0.38
// Venus	0.91
// Earth	1 (defined)
// Moon	0.166
// Mars	0.38
// Jupiter	2.34
// Saturn	1.06
// Uranus	0.92
// Neptune	1.19
// Pluto	0.06

function calculateWeight(weight, gravity)
{
    return weight * gravity;
}

let select = document.querySelector("select");
let element;
for(let i = 0; i < data.length; i++)
{
    element = document.createElement("option");
    element.textContent = data[i].planet;
    element.value = data[i].gravity;
    select.appendChild(element);
}

let inputmass = document.querySelector("#mass");
let button = document.querySelector("button");
let flexitemerror = document.querySelector(".flex-item.error");

let flexitemimage = document.querySelector(".flex-item.image");
let flexitemdescription = document.querySelector(".flex-item.description");

let weight = document.querySelector(".weight");

button.addEventListener("click", e => {
    if(inputmass.value == "")
    {
        flexitemerror.textContent = "You did not choose a planet yet";
        flexitemerror.style.display = "block";
        flexitemimage.style.display = "none";
        flexitemdescription.style.display = "none";
    }
    else if (isNaN(inputmass.value)) {
        flexitemerror.textContent = "Not a number";
        flexitemerror.style.display = "block";
        flexitemimage.style.display = "none";
        flexitemdescription.style.display = "none";
    }
    else if(select.value=="none")
    {
        flexitemerror.textContent = "Please select a planet";
        flexitemerror.style.display = "block";
        flexitemimage.style.display = "none";
        flexitemdescription.style.display = "none";
    }
    else{
        flexitemerror.style.display = "none";
        flexitemimage.style.display = "block";
        flexitemdescription.style.display = "block";

        for(let i = 0; i < data.length; i++)
        {
            if(select.value == data[i].gravity)
            {
                weight.textContent = calculateWeight(inputmass.value, select.value)+" N" ;
            }            
        }
    }
});

let planetimage = document.querySelector(".planet-image");

select.addEventListener("change", e => {
    console.log(e.target);
    for(let i = 0; i < data.length; i++)
    {
        if(e.target.value == data[i].gravity)
        {
            planetimage.src = "./images/"+data[i].planet+".png";
        }
    }
})