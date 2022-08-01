import React, {useReducer} from 'react'

function Usereducer() {
    
    
    let reducer=(state,action)=>{
        switch (action.type) {
            case "increment":
                return ({count:state.count+1,showText:state.showText});
            case "showText":
                return ({count:state.count,showText:!state.showText});
            default:
                return state;
            }
    }
    const [state, dispatch] = useReducer(reducer,{count:0,showText:true});
  return (
    <div>
        <span>{state.count} </span>
        <button className='btn' onClick={()=>{
            dispatch({type:"increment"});
            dispatch({type:"showText"});
        }}>Click me </button>
        {state.showText && <p>This is Text</p>}
    </div>
  )
}

export default Usereducer