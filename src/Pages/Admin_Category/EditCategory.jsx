import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const [categoryname, setcategoryname] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5173/Category`).then(res=>console.log(res.data)).catch((err)=>{
            console.log(err.message);
    })}, [])

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5173/Category`,{
                "category_name": categoryname,
            });
            setcategoryname("");
            navigate("/category/showcategory");
        } catch (e) {
            console.log("error");
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
                    <button className="btn btn-primary w-100 py-3" type="submit">Add Category</button>
                </form>
            </main>
        </div>
    )
}

const EditCategory = () => {
  return (
    <div>
      <AddCategory />
    </div>
  )
}

export default EditCategory