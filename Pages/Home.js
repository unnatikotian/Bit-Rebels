import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
export default function Home() {
 


  useEffect(() => {
    // Retrieve user data from server
    axios.get('http://localhost:8000/signup')
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
        <div className='container4'>
            <div className='ct5'>
              <p className='text ty mx-5 fs-2 text-dark'>Welcome to Swasth-E</p>
              <p className='text mx-5 fs-5'>Your Destination for Secure Login and Token Generation</p>
              <div className='btns mt-5'>
                <button className='btn ot btn-light bg-transparent h-25 p-3 mx-5 mt-2 '>Make Appointment</button>
                <Link className='btn ot btn-light bg-transparent h-25 p-3 mt-2 ' to='/contact'>Contact Us</Link>

              </div>
            </div>

        </div>

        <div className='cd'>
          <h2 className='text-center  tc'>Key Features</h2>
          <Card/>
        </div>
        
    </div>
  )
}
