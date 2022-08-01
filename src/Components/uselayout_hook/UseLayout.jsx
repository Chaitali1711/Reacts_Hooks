import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayout() {
    const inputRef=useRef(null);
    useLayoutEffect(()=>{
        console.log("Layout",inputRef.current.value)
    },[]);

    useEffect(()=>{
        inputRef.current.value="Hello"
        // console.log("Effect",inputRef.current.value)
    },[])

  return (
    <div>
        <input type="text" value="User" ref={inputRef}/>
    </div>
  )
}

export default UseLayout