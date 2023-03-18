import React, { useState,useEffect } from 'react'

export default function Admin() {

    const [creds,setCreds] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/signup')
          .then(response => response.json())
          .then(creds => setCreds(creds))
          .catch(error => console.error(error));
      }, []);

  return (
    <div>
        <table className='table table-hover mt-5 mx-5'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
            {creds.map(user=>(
                <tr key={user.__id}>
                    <th>{user.name}</th>
                </tr>
            ))}
            
        </table>
    </div>
  );
};
