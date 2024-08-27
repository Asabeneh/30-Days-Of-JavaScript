const countryApiUrl = 'https://restcountries.com/v2/all';
const ctx = document.getElementById('population');
const ctxx = document.getElementById('langue');
const lan = document.getElementById("lan")
const country = document.getElementById("country")

let chartData = []; // Grafik verilerini saklamak için boş bir dizi
const countryName = []
let Word=0
// Grafik oluşturuluyor
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Country Poplulation',
      data: ["word"],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
  }
});


fetch(countryApiUrl)
  .then(response => response.json())
  .then(data => { 
    console.log(data)
    const arr= data.sort((a,b) =>b.population-a.population)
    arr.forEach((country, index) => {
        Word += country.population
        if (index < 10) {
        chartData.push(country.population);
        countryName.push(country.name)
      }
    });
    chartData.unshift(Word)
    countryName.unshift("word")
    console.log(Word)
    // Verileri güncelleyip grafik yeniden çiziliyor
    myChart.data.datasets[0].data = chartData;
    myChart.data.labels=countryName
    myChart.update();
  })
  .catch(err => console.log(err));



const langues = []
  const langue = new Chart(ctxx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Most Langue',
        data: [],
        borderWidth: 1
      }]
    },
    options: {
    indexAxis: 'y',
      
    }
  });

fetch(countryApiUrl)
.then((response)=> response.json())
.then((data)=>{
    const langs = data.map((country) => country.languages[0].name );
    console.log(typeof langs)
    const counts = {};
    langs.forEach((lang) => {
        if (counts[lang]) {
            counts[lang]++;
        } else {
            counts[lang] = 1;
        }
    });
    const sortedLangs = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(a => a[0]);
    
    langue.data.labels = sortedLangs.slice(0,10);
    langue.data.datasets[0].data = sortedLangs.map((lang) => counts[lang]);
    langue.update();
});

function displayCountry(){
 country.style.display="flex"
 lan.style.display="none"
}
function displayLan(){
  country.style.display="none"
  lan.style.display="flex"
 }