import React, {forwardRef, useImperativeHandle, useState} from 'react'

const ChildBtn = forwardRef((props,ref) =>{
    const [text,showText]=useState(false);
    useImperativeHandle(ref,()=>({
        alterText(){
            showText(!text)
        }
    }))
  return (
    <div>
        <button>Child Button</button>
        {text && <p>This is Text</p>}
    </div>
  )
});

export default ChildBtn