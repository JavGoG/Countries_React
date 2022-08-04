import React from "react";
import CountryItem from "./CountryItem";
import CountriesTotalPop from "./CountryTotalPop";

const CountriesList = ({countries, onCountryClick}) => {
    const countryItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index}/>
    })
    const totalPop = countries.reduce(
        (previousValue, currentValue) => previousValue + currentValue.population, 0
    );
    const handleClick =(event)=>{
        event.preventDefault();
        onCountryClick(event.target.selector.selectedIndex)
    }
    return (
    <>
        <CountriesTotalPop totalPop={totalPop}/>
        <form onSubmit={handleClick}>
            <select name="selector">{countryItems}</select>
            <button>select</button>
            </form>

        </>
    )
}

export default CountriesList;