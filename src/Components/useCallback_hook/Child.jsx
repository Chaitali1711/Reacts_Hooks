import React, { useEffect } from 'react'

function Child({Somefn}) {
    useEffect(()=>{
        console.log("This is called")
    },[Somefn])
  return (
    <div>{Somefn()}</div>
  )
}

export default Child