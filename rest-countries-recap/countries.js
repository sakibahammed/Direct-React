const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCoutries(data))
}

const displayCoutries = countries =>{
    console.log(countries)
    const allCountriesHTML = countries.map(country =>getCountryHTML(country) )
    // console.log(allCountriesHTML[0])

    const country = document.getElementById('countries');
    country.innerHTML = allCountriesHTML.join(' ')
}


// const getCountryHTML = country =>{
//     return `
        
//     <div class = "country"> 
//         <h3>${country.name.common} </h3>
//        <img src = " ${country.flags.png}">
//     </div>

//     `
// }





const getCountryHTML = ({name , flags,area,region}) =>{

    
    return `
        
    <div class = "country"> 
        <h3>${name.common} </h3>
        <p>${area}</p>
        <p> ${region}</p>
       <img src = " ${flags.png}">
    </div>

    `
}




loadCountries()