let data = [
    { id: 1, name: "Martha Yohanes", createdat: "2020-01-30 01:09", country: "Finland", score: 85 },
    { id: 2, name: "John Smith", createdat: "2020-01-30 01:10", country: "Usa", score: 84 },
    { id: 3, name: "David Smith", createdat: "2020-01-30 01:09", country: "United Kingdom", score: 80 },
    { id: 4, name: "Asabeneh Yetayeh", createdat: "2020-01-30 01:09", country: "Finland", score: 75 },
    { id: 5, name: "Mathias Elias", createdat: "2020-01-30 01:09", country: "Sweden", score: 70 }
];

function addScore(id, score)
{
    data.forEach(function(value){
        if(value.id==id)
        {
            // console.log("tafiditra");
            value.score+=score;
        }
    })
}
function reduceScore(id, score)
{
    data.forEach(function(value){
        if(value.id==id)
        {
            // console.log("tafiditra");
            value.score-=score;
        }
    })
}
function deleteRecord(id)
{
    data = data.filter(function(value){
        return value.id != id;
    })
}

function addRecord(name, country, score)
{
    data.push({ id: getLastId(data)+1, name: name,  createdat: (new Date()).toLocaleString(), country: country, score: score });
}

function getLastId(data)
{
    if(data.length==0)
    {
        return 0;
    }
    let retour = data[data.length-1].id;
    return retour;
}

function sortData(data)
{
    data.sort(function(a,b){
        if(a.score<b.score) return 1
        else if(a.score>b.score) return -1
        return 0;
    })
}

function updateButton()
{
    let element = document.querySelectorAll("button");
    let buttondelete = [];
    let buttonplus = [];
    let buttonminus = [];
    element.forEach(function(value){
        if(value.className=="delete")
        {
            buttondelete.push(value);
            value.addEventListener("click", function() {
                // Imprime l'élément parent du bouton
                // console.log(this.parentNode);
                let id = this.parentNode.parentNode.children[0].value;
                deleteRecord(id, 5);
                update();
                console.log(id)
            });
        }
        else if(value.className=="plus"){
            buttonplus.push(value);
            value.addEventListener("click", function() {
                // Imprime l'élément parent du bouton
                // console.log(this.parentNode);
                let id = this.parentNode.parentNode.children[0].value;
                console.log(id)
                addScore(id, 5);
                update();
            });
        }
        else if(value.className=="minus"){
            buttonminus.push(value);
            value.addEventListener("click", function() {
                // Imprime l'élément parent du bouton
                // console.log(this.parentNode);
                let id = this.parentNode.parentNode.children[0].value;
                console.log(id)
                reduceScore(id, 5);
                update();
            });
        }   
    })
}

function updateBoard()
{
    sortData(data);

    let leaderboard = document.querySelector(".leaderboard");
    let content = document.querySelector(".content");
    content.innerHTML = "";
        

    let board;
    let inputhidden;
    let upname;
    let player;
    let name;
    let time;
    let country;
    let score;
    let options;
    let buttondelete;
    let buttonplus;
    let buttonminus;

    let element;

    data.forEach(function(value){
        board = document.createElement("div");
        board.className = "board";

        inputhidden = document.createElement("input");
        inputhidden.type = "hidden";
        inputhidden.name = "id";
        inputhidden.value = value.id;
        board.appendChild(inputhidden);

        upname = document.createElement("div");
        upname.className = "upname";
        player = document.createElement("div");
        player.className = "player";
        name = document.createElement("p");
        name.className = "name";
        name.textContent = value.name;
        time = document.createElement("p");
        time.className = "time";
        time.textContent = moment(new Date(value.createdat)).format('lll');
        player.appendChild(name);
        player.appendChild(time);
        upname.appendChild(player);
        board.appendChild(upname);
        
        country = document.createElement("div");
        country.className = "country";
        country.textContent = value.country;
        board.appendChild(country);

        score = document.createElement("div");
        score.className = "score";
        score.textContent = value.score;
        board.appendChild(score);

        options = document.createElement("div");
        options.className = "options";
        buttondelete = document.createElement("button");
        buttondelete.className = "delete";
        element = document.createElement("i");
        element.className = "fa fa-trash";
        buttondelete.appendChild(element);
        buttonplus = document.createElement("button");
        buttonplus.className = "plus";
        buttonplus.textContent = "+5";
        buttonminus = document.createElement("button");
        buttonminus.className = "minus";
        buttonminus.textContent = "-5";
        options.appendChild(buttondelete);
        options.appendChild(buttonplus);
        options.appendChild(buttonminus);
        board.appendChild(options);

        content.appendChild(board);
        leaderboard.appendChild(content);
    })
}



function update()
{
    updateBoard()
    updateButton();
}



update();

let inputname = document.querySelector("#inputname");
let inputsurname = document.querySelector("#inputsurname");
let inputcountry = document.querySelector("#inputcountry");
let inputscore = document.querySelector("#inputscore");
let addsubmit = document.querySelector("#addsubmit");
let errormessage = document.querySelector("#errormessage");
addsubmit.addEventListener("click", function(e){
    if(inputname.value=="" || inputsurname.value=="" || 
    inputcountry.value=="" || inputscore.value=="")
    {
        errormessage.textContent = "veillez remplir les champs";
        errormessage.style.display = "block";
    }
    else{
        errormessage.style.display = "none";
        addRecord(`${inputname.value} ${inputsurname.value}`, inputcountry.value, +(inputscore.value));
        update();
    }
    return e;
})