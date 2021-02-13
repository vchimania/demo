import React,{useState,useEffect} from 'react';

const Search=()=>{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((r)=>r.json())
        .then((arr)=>{
            setArr(arr.drinks);
        })
    },[])
    return(
        <div>
            {arr.map((drinks,idx)=>(
                <div key={idx}>
                    {drinks.strTags}
                    {drinks.strInstructions}
                    {/* <img src={drinks.strDrinkThumb} /> */}
                    </div>
            ))}
            </div>
    )
}
export default Search;