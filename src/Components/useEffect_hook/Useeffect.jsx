import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Useeffect() {
  
      const [count, setCount] = useState(0);
      const [data,setData]=useState("");

useEffect(() => {
  document.title = `You clicked ${count} times`;

  axios.get("http://localhost:3005/customer").then((response)=>{
  setData(response.data[0].address.city)
  console.log(response.data[0].name);
}
  )
},[]);

return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <hr/>
    <h5>City : {data}</h5>

  </div>
);
  
}

export default Useeffect