import React from 'react'
import CompB from './CompB'
import CompC from './CompC'

// const CompA = (props) => {
//     const {name, age} = props;
//   return (
//     <div>
//         <h1>Name:{name}</h1>
//         <h1>Age:{age}</h1>
//     </div>
//   )
// }

const CompA = () => {
    
  return (
    <div>

      CompA

      <CompB></CompB>
        
        {/* <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <CompB name = {name} age = {age}/> */}
        {/* <CompC /> */}
    </div>
  )
}

export default CompA