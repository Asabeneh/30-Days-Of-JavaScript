const playerWrapper = document.getElementById("player-wrapper");
const personName = document.getElementById("input-first-name");
const personLastName = document.getElementById("input-lastname");
const personCountrt = document.getElementById("country");
const personScore = document.getElementById("score");

const form = document.getElementById("form")

class Players {
  constructor(firstName, lastname, country, score) {
    this.firstNamename = firstName;
    this.lastname = lastname;
    this.country = country;
    this.score = score;
    this.fullName=firstName + "   " + lastname
  }
  display() {
    playerWrapper.innerHTML += `<ul>
            <li>${this.fullName}</li>
            <li>${this.country}</li>
            <li>${this.score}</li>
            <div class="button-wrapper">
            <button><i class="fa-solid fa-trash-can"></i></button>
            <button><i class="fa-solid fa-plus">5</i></button>
            <button><i class="fa-solid fa-minus">5</i></button>
        </div>
        </ul>`;
  }
}

const player1 = new Players("nevzat", "Atalay", "Turkey", 100);
const player2 = new Players("ali", "veli", "Turkey", 100);
player1.display()
player2.display()


function getInformation() {
const form = document.getElementById("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault()
 if(personName.value.length>0 && personLastName.value.length>0 && personCountrt.value.length>0 && personScore.value.length>0){
  const player=new Players(personName.value,personLastName.value,personCountrt.value,personScore.value)
  player.display()
 }else{
  alert("Lütfen eksik bilgileri tamamlayınız.")
 }
  
  personName.value=""
  personLastName.value=""
  personCountrt.value=""
  personScore.value=""
  })
}
getInformation();

function editPerson(){
  playerWrapper.addEventListener("click",(e)=>{
    if(e.target.className=="fa-solid fa-trash-can"){
      const ul = e.target.parentElement.parentElement.parentElement
      ul.remove()
    }
  })
}
editPerson()

function editPersonScore() {
  playerWrapper.addEventListener("click", (e) => {
     if (e.target.className === "fa-solid fa-plus") {
       let li = e.target.parentElement.parentElement.parentElement.children[2];
       let num = parseInt(li.innerText);
       if(num<100){
        num += 5;
        li.innerText = num
       }else{
        alert("You have max score")
       }

     } else if (e.target.className === "fa-solid fa-minus") {
       let li = e.target.parentElement.parentElement.parentElement.children[2];
       let num = parseInt(li.innerText)
      if(num>5){
        num-=5
        li.innerText=num
      }else{
        alert("You have minimum score")
      }
     }
  });
 }
 
 editPersonScore();