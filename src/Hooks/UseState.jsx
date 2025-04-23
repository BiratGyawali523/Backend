import React, { useEffect, useState } from 'react'

const UseState = () => {

    const [name, setname] = useState("name")
    const [counter, setcounter] = useState(0)
    useEffect(()=>{
      console.log(`counter value = ${counter}`);
    },[counter]);


  return (
    <div>

        {name}

        <h1>{`the value is ${counter}`}</h1>
        <br />

        <button onClick={()=>{
            setcounter(counter + 1)
        }}>Add</button>
            
        
        
       <button onClick={()=>{
           setcounter(counter-1)
        }}>Sub</button>
    
        

    </div>
  )
}

export default UseState