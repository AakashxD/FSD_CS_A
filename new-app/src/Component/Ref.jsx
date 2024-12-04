import React, { useEffect, useRef, useState } from 'react'
// return an object (current ) => redenring
const Ref = () => { 

  const[inputvalue,setInputValue]=useState("");
  const refvalue=useRef(0);
//   const [count , setCount ]=useState(0)
//    useEffect(()=>{
//         setCount(count+1);
//         if(inputvalue==""){
//               setCount(0);
//         }
//    },[inputvalue]);

  return (
    <div>Ref
        <input type="text" name='val' value={inputvalue} onChange={(e)=>{
            setInputValue(e.target.value);
        }}/>
        <h3>Render {refvalue.current=refvalue.current+1}</h3>
    </div>
  )
}

export default Ref