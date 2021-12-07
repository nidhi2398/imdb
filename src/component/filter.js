import React,{useEffect, useState} from "react";
import {Dropdown1,Dropdown2,Dropdown3,Dropdown4} from "./dropdown";
import "./filter.css";
let Filter=({setFilterD,wholeData})=>{
    const [startYear,setStartYear]=useState(0);
    const [lastYear,setLastYear]=useState(2090);
useEffect(()=>{
let arr=wholeData;
arr=arr.filter(item=>item.year[0]>=startYear && item.year[0]<=lastYear);
setFilterD([...arr]);
},[startYear,lastYear])
let year=[2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010];
    
return <div className="filter">
    <div >
    <h4 style={{color:"white"}}>Type</h4>
    <Dropdown3/>
    <h4 style={{color:"white"}}>Genre</h4>
    <Dropdown4/>
    <h4 style={{color:"white"}}>Year</h4>
    </div>
<Dropdown1 year={year} setStartYear={setStartYear} />
<Dropdown2 year={year} setLastYear={setLastYear}/>
</div>
}
export default Filter;