import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div>
        <div className="container1 cc">
          <div className="imgtxt ">
            <img
              src='/Images/Swasth-E.jpeg'
              className="rounded"
              width={200}
              height={200}
              alt="sc"
            ></img>
          </div>
          <h3 className='text tu'>Contact Us</h3>
          <form onSubmit>
            <div className="form-floating mt-5">
              <input
                type="text"
                className="form-control fc"
                name="name"
                id="floatingInput"
                placeholder="Your Name"
              />
              <label for="floatingInput">Name</label>
            </div>

            <div className="form-floating mt-4">
              <input
                type="email"
                className="form-control fc"
                name="email"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email Address</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control mt-4 h-75 ta"  placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
            <input type="submit" name="" id="" className='btn btc-grad  mt-4' />

    </form>

          </div>
    </div>
  )
}
