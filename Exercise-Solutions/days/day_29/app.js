const header = document.getElementById("header")

let sentences="30 DAYS OF JAVASCRİPT CHALLENGE 2023 NEVZAT ATALAY"

function displayLetters(){
const container = document.getElementById("container").style.setProperty("background-color", randomColor())

    let words = sentences.split(" ")
    let p = ""    
    for(i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            p+= `<span style="color:${randomColor()}">${words[i][j]}</span>`
        }
    }
    console.log(p)
    return header.innerHTML=p
}

function randomColor() {
    let hexa = "#"
    let letters = "0123456789ABCDEF"

    for(let i=0; i<6; i++){
       let randomNumber = Math.floor(Math.random() * letters.length)
       hexa += letters[randomNumber]
   }
   return hexa
}

setInterval(displayLetters,1000)