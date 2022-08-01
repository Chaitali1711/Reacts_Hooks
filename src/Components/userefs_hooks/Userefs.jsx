import React, { useRef } from "react";

function Userefs() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "bob";
    // console.log(inputRef.current.focus())
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text"  placeholder="Ex..."  ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
      <hr/>

    </div>
  );
}

export default Userefs;