
  # Day 22  - Dom 2
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>


 #### [Home](../README.md) | [<< Day 21](./21_day_DOM.md) | [Day 23 >>](./23_day_event.md)

## Exercise Solutions

### Exercise Level 1

1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
- Even numbers background is green
- Odd numbers background is yellow
- Prime numbers background is red

```js
// app.js

// Bir asal sayı olup olmadığını kontrol eden bir fonksiyon tanımlayın
function isPrime(n) {
    // 0 ve 1 asal sayı değildir
    if (n === 0 || n === 1) {
      return false;
    }
    // 2 asal sayının tek çiftidir
    if (n === 2) {
      return true;
    }
    // Çift sayılar asal sayı olamaz
    if (n % 2 === 0) {
      return false;
    }
    // 3'ten n'in kareköküne kadar olan tek sayılara bölünebilir mi diye bakın
    let sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    // Hiçbir sayıya bölünemiyorsa, asal sayıdır
    return true;
  }
  
  // HTML'de bir tablo elemanı seçin
  let table = document.getElementById("table");
  
  // Tabloyu sıfırlayın
  table.innerHTML = "";
  
  // Satır ve sütun sayısını belirleyin
  let rows = 17;
  let cols = 6;
  
  // Her satır için bir döngü başlatın
  for (let i = 0; i < rows; i++) {
    // Bir tablo satırı oluşturun
    
    let tr = document.createElement("tr");
    
    // Her sütun için bir döngü başlatın
    for (let j = 0; j < cols; j++) {
      // Bir tablo hücresi oluşturun
      let td = document.createElement("td");
      
      // Hücredeki sayıyı hesaplayın
      let num = i * cols + j;
      
      // Hücreye sayıyı yazın
      td.textContent = num;
      
      // Sayının rengini belirleyin
      let color;
      if (isPrime(num)) {
        // Asal sayılar kırmızıdır
        color = "red";
      } else if (num % 2 === 0) {
        // Çift sayılar yeşildir
        color = "green";
      } else {
        // Tek sayılar sarıdır
        color = "yellow";
      }
      
      // Hücrenin arka plan rengini ayarlayın
      td.style.backgroundColor = color;
      
      // Hücreyi satıra ekleyin
      tr.appendChild(td);
    }
    
    // Satırı tabloya ekleyin
    table.appendChild(tr);  
  }
  ```

### Exercised Level 2

1. Use the countries array to display all the countries.See the design

```js
// app.js 

// Create an array of country names
let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon"];

// Select a div element in HTML
let div = document.getElementById("div");

// Clear the div content
div.innerHTML = "";

// Set the number of rows and columns
let rows = '6';
let cols = '6';

// Loop through each row
for (let i = 0; i < rows; i++) {
  // Create a paragraph element
  let p = document.createElement("p");
  
  // Loop through each column
  for (let j = 0; j < cols; j++) {
    // Get the index of the country in the array
    let index = i * cols + j;
    
    // Check if the index is valid
    if (index < countries.length) {
      // Get the country name
      let country = countries[index];
      
      // Create a span element
      let span = document.createElement("span");
      
      // Set the span content to the country name
      span.textContent = country;
      
      // Set the span style to have a border and some padding
      span.style.border = "1px solid black";
      span.style.padding = "5px";
    
      
      // Append the span to the paragraph
      p.appendChild(span);
    }
  }
 
  // Append the paragraph to the div
  div.appendChild(p);
}
```

### Exercie Level 3


 #### [Home](../README.md) | [<< Day 21](./21_day_DOM.md) | [Day 23 >>](./23_day_event.md)