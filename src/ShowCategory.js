import React, { useState } from 'react'

function ShowCategory() {
    var [arrCategory,setArrCategory]=useState([]);
    async function getCategoryFromApi(){
        let url ='https://dummyjson.com/products/categories';
        let response = await fetch(url,{method:"GET"});
        var data = await response.json();
        setArrCategory(data);
    }
    getCategoryFromApi();
  return (
   <>
   <label> Select Category</label>
   <select>
    {arrCategory.map((e,index)=>(<option key={index} value={e}>{e}</option>))}
    
   </select>
   </>
  )
}

export default ShowCategory
