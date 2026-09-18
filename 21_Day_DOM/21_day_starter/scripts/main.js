// Exercise: Level 1

//     1- Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstp = document.querySelector('p')
console.log(firstp)

//     2- Get each of the the paragraph using document.querySelector('#id') and by their id
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
console.log(p1)
console.log(p2)
console.log(p3)

//     3- Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const paragraphes = document.querySelectorAll('p')
console.log(paragraphes)



//     4- Loop through the nodeList and get the text content of each paragraph
paragraphes.forEach(function(value){
    console.log(value.textContent)
})
//     5- Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphes[3].textContent = "Fourth Paragraph";

//     6- Set id and class attribute for all the paragraphs using different attribute setting methods
paragraphes.forEach(function(value){
    value.className = "sampleclasse"
})

// Exercise: Level 2

//     1- Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
paragraphes[0].style.color = "white";
paragraphes[0].style.background = "black";
paragraphes[0].style.border = "solid";
paragraphes[0].style.borderColor = "red";
paragraphes[0].style.fontSize = "30px";
paragraphes[0].style.fontFamily = "Segoe UI";


//     2- Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for(var i = 0; i < paragraphes.length; i++)
{
    if(i==0 || i==2)
    {
        paragraphes[i].style.color = "green"; 
    }
    if(i==1 || i==3)
    {
        paragraphes[i].style.color = "red";  
    }
}

//     3- Set text content, id and class to each paragraph
