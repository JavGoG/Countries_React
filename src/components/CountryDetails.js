import React from "react";

const CountryDetails = ({selectedCountry, borderingCountries, addFavourites}) => {
    const handleClick =()=>{
        addFavourites(selectedCountry);
    }
    const unpacked = borderingCountries.map((country, index)=>{
        return <li key={index}>{country.name.common}</li>})

    const totalPop = borderingCountries.reduce((now, next) => now + next.population, 0)

    const noBorderingCounties = <li>"there are no bordering countries"</li>;

    return (
        <>
            <h3>The selected country is: {selectedCountry.name.common} {selectedCountry.flag}</h3>
            <p>And the population is: {selectedCountry.population}</p>
            <p>The capital is: {selectedCountry.capital}</p>
            <p>The region is: {selectedCountry.region}</p>
            <button onClick={handleClick} > Add to Favourite country</button>
            <p>Bordering Countries are: </p>
            <ul>{unpacked ? unpacked : noBorderingCounties}</ul> 
            <p>Total Neighbour population: {totalPop}</p>
        </>
    )
}

export default CountryDetails;