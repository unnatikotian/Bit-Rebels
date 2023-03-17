import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
export default function Login() {

    let Navigate = useNavigate()
    const [details, setDetails] = useState({email:"",pass:""});


      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
           
          },
          body: JSON.stringify({email:details.email,pass:details.pass})
        })
    
        const json =   await response.json()
        console.log(json);
        
        if (!json.success) {
          alert("Enter valid details");
        }
        if(json.success){
          localStorage.setItem("authToken",json.authToken)
          console.log(localStorage.getItem("authToken"))
            Navigate('/')
        }
      };
    
      const onChange = (event) => {
        setDetails({...details,[event.target.name]: event.target.value });
      };
  
  return (

    


    <div className='log'>
    <form onSubmit={handleSubmit}>

        <div className='container'>

                <div className='c1'>
                <h1 id='h' >Login</h1>

                    <div class="form-floating mt-5">
                        <input type="email" class="form-control" name='email' value={details.email}  onChange={onChange}  id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">Email address</label>


                    </div>


                    <div class="form-floating mt-5">
                        <input type="password" class="form-control" name='pass' value={details.pass} onChange={onChange} id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Password</label>

                      
                      <button className='btn btn-primary'>Open Webcam</button>

                    </div>
                    <input type="submit" name="" id="" className='btn btc mt-4' />


                        <p id="emailHelp2" class="form-text mt-4 text-center ">New here? <Link to="/signup">Register Now!</Link>.</p>

                </div>
                
                

        </div>
        </form>

    </div>
    )
}
