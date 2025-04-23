import React, { useState } from 'react'
import CompA from './CompA'
import { createContext } from 'react'
import CompC from './CompC';
export const nameContext=createContext();

const Props = () => {

    const [name, setname] = useState("Birat");
    
  return (
    <div>
        <nameContext.Provider value={name}>
          <CompA />
        </nameContext.Provider>
      
        {/* <CompA name = "Birat" age = "2"/> */}
        {/* <CompA age = "21" /> */}
        {/* <CompB name = "Virat" age = "5"/>
        <CompC name = "B" age = "7"/> */}

    </div>
  )
}

export default Props