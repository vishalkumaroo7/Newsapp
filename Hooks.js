import React,{useState} from 'react'

function Hooks() {
    const [counter, setCounter] = useState(0);
  return (
    
 <div>
      <p>{counter}</p>
      {/* <input type="text" onChange={(e)=>setName(e.target.value)}/> */}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    
    </div>
  )
}

export default Hooks