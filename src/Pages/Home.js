import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

import './Home.css'
export default function Home() {


  useEffect(() => {
    // Retrieve user data from server
    axios.get('http://localhost:8000/signup')
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
        
            {(localStorage.getItem("authToken"))?
            <h1 className='tt'>Welcome</h1>
        
            :<h1 className='tt'>Register Now </h1>
            }
        
    </div>
  )
}
