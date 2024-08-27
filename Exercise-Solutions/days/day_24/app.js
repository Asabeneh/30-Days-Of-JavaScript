// select element
const button = document.querySelector("#button")
const div = document.getElementById("wrapper")

div.style.display = "none"
// event listener
eventListener()
function eventListener() {
  button.addEventListener("click", showWrapper)
}


// calculate weight on planets
function calculateWeight() {

  const inputValue = document.querySelector("#input-value")
  const planet = document.querySelector("#planetName")

  if(!typeof inputValue === Number || inputValue.value == "" ){
    alert("geçersiz deger")
  }
else{
  
  const img = document.createElement("img")
  div.appendChild(img)

  let gravity;
  let planetName;

  switch (planet.value) {
    case "mercury":
      gravity = 3.7;
      planetName = "Merkür";
      img.src = "./images/mercury.png"
      break;
    case "venus":
      gravity = 8.87;
      planetName = "Venüs";
      img.src = "./images/venus.png"
      break;
    case "earth":
      gravity = 9.81;
      planetName = "Dünya";
      img.src = "./images/earth.png"
      break;
    case "mars":
      gravity = 3.711;
      planetName = "Mars";
      img.src = "./images/mars.png"
      break;
    case "jupiter":
      gravity = 24.79;
      planetName = "Jüpiter";
      img.src = "./images/jupiter.png"
      break;
    case "saturn":
      gravity = 10.44;
      planetName = "Satürn";
      img.src = "./images/saturn.png"
      break;
    case "uranus":
      gravity = 8.69;
      planetName = "Uranüs";
      img.src = "./images/uranus.png"
      break;
    case "neptune":
      gravity = 11.15;
      planetName = "Neptün";
      img.src = "./images/neptune.png"
      break;
  }
  const weightOnPlanet = (inputValue.value * gravity / 9.81).toFixed(2);
  const result = `Your weight in the ${planetName}'${weightOnPlanet} kilogram.`;

  let para = document.createElement("p")
  para.id = "demo"
  para.innerText = result
  div.appendChild(para)
}

}


function showWrapper() {

calculateWeight()
  
  if (div.style.display === "none") {
    div.style.display = "flex"  
  }
  else {
    div.style.display = " none"
    div.innerHTML = " "
  }
 
}


