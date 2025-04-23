import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import List from './List'
import App from './App'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Reg from './Pages/Reg'
import Login from './Pages/Login'
import UseState from './Hooks/UseState'
import Props from './Props/Props'
import Data from './axios/Data'
import ProductDetail from './comp/ProductDetail'
import ShowCategory from './Pages/Admin_Category/ShowCategory'
import AddCategory from './Pages/Admin_Category/AddCategory'
import EditCategory from './Pages/Admin_Category/EditCategory'
import ShowProduct from './Pages/Admin_Category/Product/ShowProduct'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<AboutUs />}/>
                <Route path="/reg" element = {<Reg />}/>
                <Route path="/Login" element = {<Login />}/>
                <Route path="/Use" element = {<UseState />}/>
                <Route path="/Props" element = {<Props />}/>
                <Route path="/Axios" element = {<Data />}/>
                <Route path="/Product" element = {<ProductDetail/>}/>
                <Route path="/Category" element = {<ShowCategory/>}/>
                <Route path="/Add" element = {<AddCategory/>}/>
                <Route path="/Edit" element = {<EditCategory/>}/>
                <Route path="/Show" element = {<ShowProduct/>}/>
                
                
                

                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes