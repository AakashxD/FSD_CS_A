import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const [count1,setCount1]=useState(count);
    const counterInc=()=>{
    
           setCount(e=>e+1);

    }
    const counterDec=()=>{
    
      setCount(e=>e-1);
    }
    const counteDouble=()=>{
         
        setCount1(count*5);

      }

  return (
    <div>Counter {count}{count1}
        <button onClick={counterInc}>Increment</button>
        <button onClick={counterDec}>Decrement</button>
        <button onClick={counteDouble}>5 x Increase</button>
    </div>
  )
}

export default Counter;