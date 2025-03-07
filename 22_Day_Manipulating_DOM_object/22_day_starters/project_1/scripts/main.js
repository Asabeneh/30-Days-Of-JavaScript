// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function isPrime(number)
{   
    if(number==0 || number==1)
    {
        return false
    }
    for(var i = 2; i < number; i++)
    {
        if(number%i==0)
        {
            return false;
        }
    }
    return true;
}
function isEven(number)
{
    if(number%2==0)
    {
        return true;
    }
    return false;
}

var numbers = [];
for(var i = 0; i <= 101; i++ )
{
    numbers.push(document.createElement("div"));
    if(isEven(i)==true)
    {
        numbers[i].style.background = "rgb(33,191,115)";
    }
    else{
        numbers[i].style.background = "rgb(253,219,58)";
    }

    if(isPrime(i)==true)
    {
        numbers[i].style.background = "rgb(253,94,83)";
    }

    numbers[i].textContent = i;
    numbers[i].style.color = "white";
    numbers[i].style.fontSize = "50px";
    numbers[i].style.padding = "20px";
    numbers[i].style.margin = "5px";
    numbers[i].style.width = "11%";
    numbers[i].style.textAlign = "center";
}
console.log(numbers)

var wrapper = document.getElementsByClassName("wrapper")
wrapper[0].style.display = "flex"
wrapper[0].style.flexWrap = "wrap"
wrapper[0].style.width = "50%"
wrapper[0].style.margin = "auto"
for(var i = 0; i < numbers.length; i++ )
{
    wrapper[0].appendChild(numbers[i])
}