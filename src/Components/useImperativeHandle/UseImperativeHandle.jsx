import React ,{useRef} from 'react'
import ChildBtn from './ChildBtn'

function UseImperativeHandle() {
    const btnRef=useRef(null)
  return (
    <div>

        <button onClick={()=>{
            btnRef.current.alterText()
        }}>Parent button</button>
        <ChildBtn ref={btnRef}/>
    </div>
  )
}

export default UseImperativeHandle