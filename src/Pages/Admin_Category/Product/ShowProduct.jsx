import React, { useEffect, useState } from 'react'
import { getproducts } from '../../../Services/ProductService'
import { Link } from 'react-router-dom';

const ShowProduct = () => {
    const [product,setProduct]=useState([]);
    const getProduct=async()=>{
        const data=await getproducts();
        setProduct(data)
    };
    useEffect(()=>{
        getProduct();
    },[]);
  return (
    <div>
      <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Category Name</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
    {
        category.map(item=>{
            return(
                <tr>
                <td>{item._id}</td>
                <td>{item.category_name}</td>
                <td>
                  <Link to={`/category/editcategory/${item._id}`}>
                  <button>Edit</button>
                  </Link>
                                  
                <button onClick={()=>{
                    handleDelete(item._id)
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

export default ShowProduct