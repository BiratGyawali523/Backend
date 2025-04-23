import React, { useState } from 'react'

const UseState2 = () => {

    const [counter, setcounter] = useState(0)
  return (
    <div>
         <h1>{`the value is ${counter}`}</h1>
        <br />

        

        <button onClick={()=>{
            setcounter(counter + 1)
            
        }}>Mul</button>
            
        
        
       <button onClick={()=>{
           
        }}>Div</button>
    
    </div>
  )
}

export default UseState2