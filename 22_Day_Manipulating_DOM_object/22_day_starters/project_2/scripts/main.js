const countryContainer = document.getElementById("country-container");

// Loop through the array and create a box for each country
countries.forEach(country => {
    const countryBox = document.createElement("div");
    countryBox.textContent = country;
    countryBox.classList.add("country-box");
    countryContainer.appendChild(countryBox);
});