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
     <nav class="navbar navbar-expand-lg navbar-light" >

<div class="container-fluid fs-5">
<a class="navbar-brand" href="/">
  <img src="/Images/Swasth-E.jpeg" className='rounded' alt="Bootstrap" width="70" height="70"/>
  Swasth-E
</a>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
   
    {(localStorage.getItem("authToken"))?
    <>
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/">Appointment</Link>
      </li>
    </>
      
    : " "}
    </ul>



    {(!localStorage.getItem("authToken"))?

    <div className='d-flex '>
      <Link className='   mx-3  nav-link active' to='/login'>Login</Link>
   
      <Link className=' mx-5 nav-link active' to='/signup'>Sign Up</Link>
    
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
