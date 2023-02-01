// Exercise: Level 3
// DOM: Mini project 1

//     Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
//         The year color is changing every 1 second
//         The date and time background color is changing every on seconds
//         Completed challenge has background green
//         Ongoing challenge has background yellow
//         Coming challenges have background red

var wrapper = document.getElementsByClassName("wrapper");
for (let i = 0; i < wrapper.length; i++) {
    wrapper[i].style.width= "50%";
    wrapper[i].style.margin= "auto";
}

var h1 = document.getElementsByTagName("h1")
for (let i = 0; i < h1.length; i++) {
    h1[i].style.textAlign= "center";
    h1[i].style.fontFamily= "Montserrat";
    h1[i].style.fontWeight= "500";
}

var h2 = document.getElementsByTagName("h2")
for (let i = 0; i < h2.length; i++) {
    h2[i].style.textAlign= "center";
    h2[i].style.fontFamily= "Montserrat";
    h2[i].style.fontWeight= "300";
    h2[i].style.textDecoration= "underline";
}

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
var yearText = new Date();
year.textContent = yearText.getFullYear();

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



var challenges = document.querySelectorAll("li");
challenges.forEach(function(value){
    if(value.textContent.indexOf("Done")!=-1)
    {
        value.className = "done"
    }
    if(value.textContent.indexOf("Ongoing")!=-1)
    {
        value.className = "ongoing"
    }
    if(value.textContent.indexOf("Coming")!=-1)
    {
        value.className = "coming"
    }

    value.style.padding= "25px";
    value.style.margin= "3px";
    value.style.listStyleType= "none";
    value.style.fontFamily= "Montserrat";
    value.style.letterSpacing = "0.0625em";
});

var done = document.getElementsByClassName("done");
for (let i = 0; i < done.length; i++) {
    done[i].style.background= "rgb(33, 191,115)";
}

var ongoing = document.getElementsByClassName("ongoing");
for (let i = 0; i < ongoing.length; i++) {
    ongoing[i].style.background= "rgb(253, 219,58)";
}

var coming = document.getElementsByClassName("coming");
for (let i = 0; i < coming.length; i++) {
    coming[i].style.background= "rgb(253, 94, 83)";
}

