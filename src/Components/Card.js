import React from 'react'
import './card.css'
export default function Card()
 {
  return (
    <div className='cards'>
        <div class="card" style={{width: "18rem"}}>
            <img src="https://www.loginradius.com/blog/static/3b4c33cef1861297f7da778dff9074a7/a3513/login-security.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title fs-4">Secure Login</h5>
                <p class="card-text mt-5 fs-5">Patients can login securely with the help of Facial Recognition.</p>
            </div>
        </div>
        <div class="card" style={{width: "18rem"}}>
            <img src="https://blog.logrocket.com/wp-content/uploads/2022/08/json-web-token.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title fs-4">Token Generation</h5>
                <p class="card-text mt-5 fs-5">Tokens will be generated for each patient after login.</p>
            </div>
        </div>
    </div>
  )
}
