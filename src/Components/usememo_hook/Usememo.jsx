import React ,{useEffect, useMemo, useState} from 'react'
import axios from 'axios';

function Usememo() {

    const [text,setText]=useState(null);
    const [toggle,setToggle]=useState(false)
    
    useEffect(()=>{
        axios.get("http://localhost:3005/products").then((resp)=>{
            setText(resp.data);
        })
    },[])

function fnLongestPName(prods) {
if(!prods) return null;

    let longestName="";

    for(let i=0 ; i<prods.length; i++){

        let current= prods[i].productName;

        if(current.length > longestName.length)
            longestName=current;
    }
    console.log("tis was called")
    return longestName;
}
const getLongestName= useMemo(()=>fnLongestPName(text),[text]);
  return (
    <div>
        {getLongestName}
        <button onClick={()=>{setToggle(!toggle)}}>Click me </button>

        {toggle && <p>Toggle state called</p>}
    </div>
  )
}

export default Usememo