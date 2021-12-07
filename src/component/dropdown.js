import React from "react";
let Dropdown1=({year,setStartYear})=>{
    console.log(year);
return (
    <>
    <select onChange={(e)=>setStartYear(e.target.value)} style={{width:"100px",height:"40px"}}>
        {year.map(item=><option value={item} defaultValue={2017}>{item}</option>)}
        </select>
    </>
)
}
let Dropdown2=({year,setLastYear})=>{
    console.log(year);
return (
    <>
    <select onChange={(e)=>setLastYear(e.target.value)} style={{width:"100px",height:"40px"}}>
        {year.map(item=><option value={item} defaultValue={2021}>{item}</option>)}
        </select>
    </>
)
}

let Dropdown3=()=>{
    return <select style={{width:"200px",height:"40px"}}>
        <option>Movies</option>
        <option>Tv Series</option>
        </select>
}
let Dropdown4=()=>{
    return <select style={{width:"200px",height:"40px"}}>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>thriller</option>
        </select>
}
export {Dropdown1,Dropdown2,Dropdown3,Dropdown4};