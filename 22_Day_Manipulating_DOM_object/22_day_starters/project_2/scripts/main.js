console.log(countries)

var wrapper = document.querySelector(".countries-wrapper");
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.margin = "auto";
wrapper.style.width = "50%";

var wrapperelement = [];
for(var i = 0; i < countries.length; i++){
    wrapperelement.push(document.createElement("div"));
    wrapperelement[i].textContent = countries[i].toUpperCase();

    wrapperelement[i].style.margin = "5px";
    wrapperelement[i].style.border = "solid rgba(0,0,0,0.1)"
    wrapperelement[i].style.borderWidth = "2px"
    wrapperelement[i].style.width = "14%"
    wrapperelement[i].style.fontWeight = "bold"
    wrapperelement[i].style.fontSize = "12px"
    
    wrapperelement[i].style.paddingTop = "7%"
    wrapperelement[i].style.paddingBottom = "7%"

    wrapperelement[i].style.textAlign = "center"
    wrapper.appendChild(wrapperelement[i]);
}

console.log(wrapper)