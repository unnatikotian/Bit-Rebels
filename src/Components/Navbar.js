import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {

let Navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem("authToken")
    Navigate('/login')
  
  }
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-dark" >

<div class="container-fluid">
<a class="navbar-brand" href="/">
  <img src="https://w7.pngwing.com/pngs/175/27/png-transparent-uniform-logo-brand-web-page-industry-navbar-text-trademark-logo.png" className='rounded' alt="Bootstrap" width="50" height="40"/>
</a>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
    {(localStorage.getItem("authToken"))?
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" href="/">Orders</Link>
    </li>
    : " "}
    </ul>



    {(!localStorage.getItem("authToken"))?

    <div className='d-flex '>
      <Link className='btn p-2 text-primary bg-white mx-1  nav-link active' to='/login'>Login</Link>
   
      <Link className='btn p-2 text-primary bg-white mx-1 nav-link active' to='/signup'>Sign Up</Link>
    
    </div>
    :
    <div className='d-flex '>
      <Link className='btn p-2 text-primary bg-white mx-1  nav-link active' onClick={handleLogout} to='/login'>Logout</Link>
   
    
    </div>
    
    }

 
</div>
</div>
</nav>

<Outlet/>

    </>
   

  )
}
