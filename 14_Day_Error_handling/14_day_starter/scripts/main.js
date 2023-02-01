console.log(countries)
// alert('Open the console and check if the countries has been loaded')

var firstname = "Faliana";

try{
    console.log(firstname+" "+lastname)
}
catch(err){
    console.log(err)
}

try{
    if(1<2)
    {
        throw new Error("on a une erreur");
    }
}
catch(err){
    console.log(err)
}