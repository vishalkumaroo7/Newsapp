import React, { useEffect, useState } from 'react'

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const[name,setName]=useState('');

  function callThisOnUnmout(){

  }
  useEffect(()=>{
console.log("name updated");
return callThisOnUnmout;


  },[name]);

  useEffect(()=>{
console.log('first time mounted');
  },[])

  useEffect(()=>{
console.log('counter updated');
  },[counter])

  return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
