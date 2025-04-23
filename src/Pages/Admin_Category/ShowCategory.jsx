import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ShowCategory = () => {
    const [category, setcategory] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5173/Category`)
        .then(res=>setdata(res.data))
        .catch((err)=>{
            console.log(err.message);
        })
    }, [])
    const handleDelete = async (id)=>{
        try {
            await axios.delete(`http://localhost:5173/Category/${id}`);
            setcategory(category.filter((id)    ))
            
        } catch (e) {
            console.log("error");
        }
    }
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        category.map((item) =>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.Category}</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={()=>{
                            handleDelete(item.id);
                        }}>Delete</button>
                    </td>
              </tr>
              )
          })
      }
    </tbody>
 
</table>
    </div>
  )
}

export default ShowCategory