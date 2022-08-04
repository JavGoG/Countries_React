import React from "react";

const CountryItem = ({country})=>{
    return(
    <option value={country.index}>
        {country.name.common}
    </option>
    )
}
export default CountryItem;