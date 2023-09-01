function grades() {
    let score = parseInt(prompt("What is your score ?"));
    switch (true) {
        case (score >= 80 && score <= 100):
            alert(`A score of ${score} gets you an A!`);
            break;
        case (score >= 70 && score <= 79):
            alert(`A score of ${score} gets you a B!`);
            break;
        case (score >= 60 && score <= 69):
            alert(`A score of ${score} gets you a C!`);
            break;
        case (score >= 50 && score <= 59):
            alert(`A score of ${score} gets you a D!`);
            break;
        default:
            alert(`A score of ${score} gets you an F!`)
    }
}

function whatSeason() {
    let month = prompt("What month is it?").toLowerCase();
    if (month === "september" || month === "october" || month === "november") {
        alert("The current season is Autumn!");
    }
    else if (month === "december" || month === "january" || month === "february") {
        alert("The current season is Winter!");
    }
    else if (month === "march" || month === "april" || month === "may") {
        alert("The current season is Spring!");
    }
    else if (month === "june" || month === "july" || month === "august") {
        alert("The current season is Summer!");
    }
    else {
        alert("ignas.");
    }
}

function isWeekend() {
    let day = prompt("What day is it ?").toLowerCase()
    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            alert(`${day} is a working day.`);
            break;
        case "saturday":
        case "sunday":
            alert(`${day} is a weekend!`);
            break;
        default:
            alert("ignas");
    }
}