import React, { useState } from 'react';

function Usestate() {
  const [count,setCount]=useState(0);
  const [fruit,setFruit]=useState('Grapes');
  const [word,setword]=useState('some word')
  return (
    <div>
      <div>
        <p>Usestate</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </div>
      <hr/>
      <div>
        <div className='my-3'><select id='fruits' onChange={()=>{setFruit(document.getElementById('fruits').value)}} >
          <option value='banana'>banana</option>
          <option value='apple'>apple</option>
          <option value='pineapple'>pineapple</option>
        </select>
        </div>
        <h5>You have selected Fruit: {fruit}</h5>
      </div>
      <hr/>
      <div>
      <input tye="text" placeholder='Enter something..'  onChange={(e)=>{setword(e.target.value)}}/>
      
      <span>{word}</span>

      </div>

    </div>
  )
}

export default Usestate