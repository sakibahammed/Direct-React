const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCoutries(data))
}

const displayCoutries = countries =>{
    const allCountriesHTML = countries.map(country =>getCountryHTML(country) )
    // console.log(allCountriesHTML[0])

    const country = document.getElementById('countries');
    country.innerHTML = allCountriesHTML.join(' ')
}


const getCountryHTML = country =>{
    return `
        
    <div class = "country"> 
        <h3>${country.name.common} </h3>
       <img src = " ${country.flags.png}">
    </div>

    `
}

loadCountries()