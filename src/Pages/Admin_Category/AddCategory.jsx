import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const AddCategory = () => {
    const [categoryname, setcategoryname] = useState("")
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5173/Category`,{
                "category_name": categoryname,
            });
            setcategoryname("")
            Navigate("/category/showcategory")
        } catch (e) {
            console.log("error")
        }
    }
    useEffect(()=>{
        console.log(categoryname);
    },[categoryname])
  return (
    <div>
    <main className="form-signin w-25 m-auto">
  <form onSubmit={handleSubmit}>    
    <h1 className="h3 mb-3 fw-normal">Add Category</h1>

    <div className="form-floating">
      <input type="text" className="form-control"
      value={categoryname}
      onChange={(e)=>{
        setcategoryname(e.target.value);
      }}
      id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Company Name</label>
    </div>
    {/* <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div> */}

    {/* <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div> */}
    <button className="btn btn-primary w-100 py-3" type="submit">Add Category</button>
    {/* <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p> */}
  </form>
</main>
    </div>
  )
}

export default AddCategory