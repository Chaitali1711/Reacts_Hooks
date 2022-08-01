import React, { useCallback, useState } from 'react'
import Child from './Child'

function Usecallback() {
  const [toggle,setToggle]=useState(false);
  const [title,setTitle] = useState("Page Title");
  let Somefn = useCallback(()=>{
    return title
  },[title])
  return (
    <div>
        {/* {title} */}
      <Child Somefn = {Somefn}/>
        <button onClick={()=>setToggle(!toggle)}>Click to toggle</button>
      {toggle && <p>Toggle state</p>}
    </div>


  )
}

export default Usecallback