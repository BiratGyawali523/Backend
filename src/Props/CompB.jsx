import React from 'react'
import CompC from './CompC'

const CompB = () => {
  return (
    <div>
        CompB
        {/* <div>Name from B:{name}</div>
        <div>Age from B:{age}</div> */}
        <CompC></CompC>
    </div>
  )
}

export default CompB