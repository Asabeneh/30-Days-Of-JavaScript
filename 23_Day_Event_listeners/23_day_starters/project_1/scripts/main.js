// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// function isPrime(number)
// {   
//     if(number==0 || number==1)
//     {
//         return false
//     }
//     for(var i = 2; i < number; i++)
//     {
//         if(number%i==0)
//         {
//             return false;
//         }
//     }
//     return true;
// }

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

// function modPow(base, exponent, modulus) {
//     let result = 1;
//     while (exponent > 0) {
//       if (exponent % 2 === 1) {
//         result = (result * base) % modulus;
//       }
//       exponent = exponent >> 1;
//       base = (base * base) % modulus;
//     }
//     return result;
//   }

// function isPrime(n) {
//     if (n <= 1 || n === 4) return false;
//     if (n <= 3) return true;
  
//     let d = n - 1;
//     let s = 0;
  
//     while (d % 2 === 0) {
//       d /= 2;
//       s++;
//     }
  
//     for (let i = 0; i < 8; i++) {
//       let a = Math.floor(2 + Math.random() * (n - 2));
//       let x = modPow(a, d, n);
//       let y = 0;
  
//       for (let j = 0; j < s; j++) {
//         y = (x * x) % n;
//         if (y === 1 && x !== 1 && x !== n - 1) return false;
//         x = y;
//       }
  
//       if (y !== 1) return false;
//     }
//     return true;
//   }


function isEven(number)
{
    if(number%2==0)
    {
        return true;
    }
    return false;
}


let button = document.querySelector("button");
let paragraph = document.querySelector("p");
let input = document.querySelector("input");

let generatednumber = document.querySelector(".generatednumber")

let numbers = [];

button.addEventListener('click', e => {
    let regex = /^\d+$/gi
    // console.log(input.value.match(regex))

    if(input.value == "")
    {
        paragraph.textContent = "Enter number value inside the input field to generate numbers"
    }
    else if(!input.value.match(regex))
    {
        paragraph.textContent = "Input value must be a number"
    }
    else{
        paragraph.textContent = "";

        console.time("answer time");
        for(let i = 0; i < input.value; i++)
        {
            numbers.push(document.createElement("div"));
            if(isEven(i)==true)
            {
                numbers[i].className = "number even"
            }
            else{
                numbers[i].className = "number odd"
            }

            if(isPrime(i)==true)
            {
                numbers[i].className = "number prime"
            }

            numbers[i].textContent = i;

        }
        console.timeEnd("answer time");

        generatednumber.innerHTML = ""
        for(let i = 0; i < input.value; i++)
        {
            generatednumber.appendChild(numbers[i]);
        }
    }


});
