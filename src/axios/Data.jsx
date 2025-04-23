import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Data = () => {

    const [data, setdata] = useState([])
    const [error, setError] = useState("")

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>setdata(res.data))
        .catch((err)=>{
            setError(err.message);
        });
    },[])
  return (
    <div>
        {
            data.map((elem)=>{
                
                return <div key={elem.id}>
                    <h1>{`Key${elem.id}`}</h1>
                    {elem.address.geo.lat}</div>
            })
        }
    </div>
  )
}

export default Data