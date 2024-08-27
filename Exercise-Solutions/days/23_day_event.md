# Day 23 - Event Listener

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)

#### [Home](../README.md) | [<< Day 22](./22_day_DOM2.md) | [Day 24 >>](../days/day_24/day_24.md)

## Exercise Solutions

### Exercise Level 1

1. Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.
```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sayıları Göster</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            text-align: center;
        }
        #result {
            border:1px solid;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
            margin-top: 20px;
        }
        li{
            border:1px solid;
            list-style: none;
            text-align: center;
            display: inline-block;
     }
     h5{
        margin-bottom: 20px;
     }
    </style>
</head>
<body>
<div class="container"><h1>Number Generator</h1>
    <h3>30DaysOfJavaScript:DOM Day 3</h3>
    <h5>Nevzat Atalay</h5>
    <input type="number" id="inputNumber" placeholder="Bir sayı girin">
    <button onclick="displayNumbers()">Göster</button>
    <div id="result"></div></div>

<script>
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function displayNumbers() {
        const inputNumber = document.getElementById('inputNumber').value;
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';  // Temizleme

        try {
            const num = parseInt(inputNumber);
            if (isNaN(num) || num < 0) {
                alert("Geçerli bir pozitif sayı giriniz.");
                return;
            }

            for (let i = 1; i <= num; i++) {
                let color = i % 2 === 1 ? 'yellow' : 'green';
                if (isPrime(i)) {
                    color = 'red';
                }
                resultDiv.innerHTML += `<li style="background-Color:${color}">${i}</li>`;
            }
        } catch (error) {
            alert("Bir hata oluştu. Lütfen geçerli bir sayı giriniz.");
        }
    }
</script>

</body>
</html>

```

2. Generating the keyboard code code using even listener. The image below.

```js
//app.js

const div =document.getElementById("div")
window.addEventListener("keydown", (e)=>{
const li =   document.createElement("li")
 div.innerHTML=""
  li.innerHTML= `Your pressed ${e.code}`
 div.appendChild(li)
})
```
#### [Home](../README.md) | [<< Day 22](./22_day_DOM2.md) | [Day 24 >>](../days/day_24/day_24.md)
