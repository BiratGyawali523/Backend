import React, { useContext } from 'react'
import { nameContext } from './Props'

const CompC = () => {

  const value= useContext(nameContext)
  return (
    <div>
        CompC{value}
        {/* <div>Name from C:{name}</div>
        <div>Age from C:{age}</div> */}

    </div>
  )
}

export default CompC