import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import axios from 'axios';

const GridCard = () => {
  const [product, setproduct] = useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:5174/Product")
    .then((res)=>setproduct(res.data))
    .catch((err)=> console.log(err.message));
  })
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-4 g-4">

          {product.map((item)=>{
            return(div) 
          })}
  
        <SingleCard />
        
</div>
    </div>
  )
}

export default GridCard