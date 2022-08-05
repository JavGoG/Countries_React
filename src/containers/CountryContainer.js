import React, {useEffect, useState} from "react";
import CountriesList from "../components/CountryList";
import CountryDetails from "../components/CountryDetails";
import FavouriteList from "../components/FavouriteList";

const CountryContainer = () => {

    const[countries, setCountries]= useState([]);
    const[selectedCountry, setSelectedCountry]= useState(null)
    const[favourites, setFavourites]= useState([])
    const[borderingCountries, setBorderingCountries] = useState([])
    useEffect(() => {
        getCountries();
    }, [])
    
    useEffect(() => {
        getBorderingCountries(selectedCountry);
    },[selectedCountry]) 
    const getCountries = function (){
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(countries => setCountries(countries));
    }


    const addFavourites= (selectedCountry) =>{
        if (favourites.includes(selectedCountry)){
            return
        } else {
        const copyFavourites =[...favourites, selectedCountry]
        setFavourites(copyFavourites)
    }}

    const onCountryClick = (countryIndex) =>{
        setSelectedCountry(countries[countryIndex])
        // getBorderingCountries(selectedCountry)
    }
    
    const getBorderingCountries = (selectedCountry)=>{
        if (!selectedCountry) {
            return
        } else {
            const borderingCountriesCodes = selectedCountry.borders
            const borderingCountries = []
        if (!borderingCountriesCodes){
            setBorderingCountries([]) // new
        } else {
        for( const code of borderingCountriesCodes){
            const found = countries.find((country)=>country.cca3===code) 
            borderingCountries.push(found)
        }
        setBorderingCountries(borderingCountries);}
    }}

    return (<>
        <CountriesList countries={countries} onCountryClick={onCountryClick}/>
        {selectedCountry?<CountryDetails selectedCountry={selectedCountry} borderingCountries={borderingCountries} addFavourites={addFavourites}/>: null}
        {favourites?<FavouriteList favourites={favourites} />: null}
    </>)
}

export default CountryContainer