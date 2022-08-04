import React from "react";
import FavouriteItem from "./FavouriteItem";

const FavouriteList = ({favourites})=>{
    const favouriteItems = favourites.map((favourite, index)=>{
        return <FavouriteItem favourite={favourite} key={index}/>
    
    })
    return (<>
    <h3>Favourite countries list:</h3>
        {favouriteItems}
    </>)
}

export default FavouriteList;
