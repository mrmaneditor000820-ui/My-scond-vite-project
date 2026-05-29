import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './homepage/Home'
import Navbar from './navbar/Navbar';


function Router() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/Home" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Router;