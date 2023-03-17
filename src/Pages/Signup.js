import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let Navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    type:"",
    pass: "",
    cpass: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        type: details.type,
        pass: details.pass,
        cpass: details.cpass,
      }),
    });

    const json = await (await response).json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid details");
    }

    if (json.success) {
      Navigate('/login')
    }
  };

  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="sign">
        <div className="container1">
          <div className="imgtxt ">
            <img
              src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?w=2000"
              className="rounded"
              width={60}
              height={60}
              alt="sc"
            ></img>
            <h4 className="title text-center mt-3 mx-2">E-Hospital</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mt-5">
              <input
                type="text"
                className="form-control fc"
                value={details.name}
                onChange={onChange}
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
                value={details.email}
                onChange={onChange}
                name="email"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email Address</label>
            </div>

            <div className="form mt-4 mx-5">
              <label htmlFor="">Sign In As:</label>
              <div class="form-check form-check-inline mx-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  value ='User'
                  id="inlineRadio1"
                  onChange={onChange}
                  checked = {details.type==='User'}

                />
                <label class="form-check-label" for="inlineRadio1">
                  User
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="inlineRadio2"
                  value='Admin'
                  onChange={onChange}
                  checked={details.type==='Admin'}
                />
                <label class="form-check-label" for="inlineRadio2">
                  Admin
                </label>
              </div>
            </div>



            <div className="form-floating mt-4">
              <input
                type="password"
                className="form-control fc"
                onChange={onChange}
                value={details.pass}
                name="pass"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Password</label>
            </div>

            <div className="form-floating mt-4">
              <input
                type="password"
                className="form-control fc"
                onChange={onChange}
                value={details.cpass}
                name="cpass"
                id="floatingInput"
                placeholder="name@example.com"
              />

              <div className="form mt-4">
                <label htmlFor="img">Upload photo: </label>
                <input type="file" name="img" id="img" accept="image/*" className="mx-4" />
              </div>

              <label for="floatingInput">Confirm Password</label>
              <button type="submit" name="sub" className="btn btn-grad mt-4">
                Register
              </button>
              
              <p id="emailHelp3" class="form-text mt-3 ">
                Already a user? <Link to="/login">Login!</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
