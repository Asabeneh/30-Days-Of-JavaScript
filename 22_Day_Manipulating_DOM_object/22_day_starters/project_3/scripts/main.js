// console.log(asabenehChallenges2020)

var wrapper = document.querySelector(".wrapper");
wrapper.style.width= "50%";
wrapper.style.margin= "auto";



var h1 = document.createElement("h1")
h1.textContent = asabenehChallenges2020.challengeTitle+" in ";
h1.style.textAlign= "center";
h1.style.fontFamily= "Montserrat";
h1.style.fontWeight= "500";
wrapper.appendChild(h1)

var h2 = document.createElement("h1")
h2.textContent = asabenehChallenges2020.challengeSubtitle;
h2.style.textAlign= "center";
h2.style.fontFamily= "Montserrat";
h2.style.fontWeight= "300";
h2.style.textDecoration= "underline";
wrapper.appendChild(h2)

var span = document.createElement("span")
span.id="year";
h1.appendChild(span)
span.textContent = asabenehChallenges2020.challengeYear

var p = document.createElement("p");
p.id="date";
wrapper.appendChild(p);


var date = document.querySelector("#date");
date.style.textAlign= "center";
date.style.fontFamily= "Montserrat";
date.style.fontWeight= "40";
date.style.width= "25%";
date.style.margin= "auto";
date.style.padding= "10px";

var year = document.querySelector("#year");
year.style.fontSize= "96px";
year.style.fontWeight= "700";

setInterval(function() {
    var currentTime = new Date();
    var formattedTime = currentTime.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    date.textContent = formattedTime;
    date.style.background = "rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")";
    year.style.color = "rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")";
}, 1000);

var ul = document.createElement("ul");
wrapper.appendChild(ul);

var li = [];
for(var i = 0; i < asabenehChallenges2020.challenges.length; i++)
{
    li.push(document.createElement("li"))
    // li[i].textContent = asabenehChallenges2020.challenges[i].name;
    li[i].className = asabenehChallenges2020.challenges[i].status;

    li[i].style.padding= "25px";
    li[i].style.margin= "3px";
    li[i].style.listStyleType= "none";
    li[i].style.fontFamily= "Montserrat";
    li[i].style.letterSpacing = "0.0625em";

}
for(var i = 0; i < li.length; i++)
{
    ul.appendChild(li[i])
}

// CHALLENGE INSERTION
var divchallenge;
var divchallengename;
var divchallengetopic;
var divchallengestatus;
var paragraph;
var dropdown;
for(var i = 0; i < li.length; i++)
{
    divchallenge = document.createElement("div");
    divchallenge.style.display = "flex";
    divchallenge.style.flexWrap = "wrap";
    divchallenge.style.justifyContent = "space-between";

    // challenge name
    divchallengename = document.createElement("div");
    divchallengename.style.width = "30%";
    paragraph = document.createElement("p");
    paragraph.textContent = asabenehChallenges2020.challenges[i].name;
    divchallengename.appendChild(paragraph)
    divchallenge.appendChild(divchallengename);

    // challenge topic
    divchallengetopic = document.createElement("div");
    divchallengetopic.style.width= "30%";
    paragraph = document.createElement("p");
    dropdown = document.createElement("a");
    dropdown.textContent = asabenehChallenges2020.challenges[i].topics[0];
    dropdown.className = "dropdown";
    dropdown.style.textDecoration = "none";
    dropdown.style.fontWeight = "bold";
    dropdown.style.color = "black";
    dropdown.href="javascript:void(0);";
    paragraph.appendChild(dropdown)

    divchallengetopic.appendChild(paragraph)
    for(var j = 0; j < asabenehChallenges2020.challenges[i].topics.length; j++)
    {
        paragraph = document.createElement("p");
        paragraph.textContent = asabenehChallenges2020.challenges[i].topics[j];
        paragraph.className = "dropdownitem"+i;
        paragraph.style.display = "none";
        divchallengetopic.appendChild(paragraph)
    }
    divchallenge.appendChild(divchallengetopic);

    // challengestatus
    divchallengestatus = document.createElement("div");
    divchallengestatus.style.width="10%";
    paragraph = document.createElement("p");
    paragraph.textContent = asabenehChallenges2020.challenges[i].status;
    divchallengestatus.appendChild(paragraph)
    divchallenge.appendChild(divchallengestatus);

    li[i].appendChild(divchallenge);
    
}


var done = document.getElementsByClassName("Done");
for (let i = 0; i < done.length; i++) {
    done[i].style.background= "rgb(33, 191,115)";
}

var ongoing = document.getElementsByClassName("Ongoing");
for (let i = 0; i < ongoing.length; i++) {
    ongoing[i].style.background= "rgb(253, 219,58)";
}

var coming = document.getElementsByClassName("Coming");
for (let i = 0; i < coming.length; i++) {
    coming[i].style.background= "rgb(253, 94, 83)";
}

// var dropdowns = document.querySelectorAll(".dropdown");
// console.log(dropdowns);

// for(var i = 0; i < dropdowns.length; i++)
// {
//     console.log(i)
//     dropdowns[i].onclick = function(){
//         var dropdownitems = document.querySelectorAll(".dropdownitem"+i); 
//         console.log(dropdownitems)
//     }
// }

let dropdowns = document.querySelectorAll(".dropdown");

for(let i = 0; i < dropdowns.length; i++)
{
    dropdowns[i].onclick = function(){
        let dropdownitems = document.querySelectorAll(".dropdownitem"+i); 
        for(let j = 0; j < dropdownitems.length; j++)
        {
            if(dropdownitems[j].style.display!="none")
            {
                dropdownitems[j].style.display = "none"
            }
            else
            {
                dropdownitems[j].style.display = "block"
            }
        }
    }
}