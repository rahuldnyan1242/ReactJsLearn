import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let history = useHistory();
  const { name, email, password } = credentials;
  const {showAlert} = props;

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    localStorage.setItem("token", json.authtoken);
    if (json.success) {
      history.push('/login')
      showAlert("Sing up successfully", "success");
    }else {
        showAlert("Invalid Credentials.", "danger")
    }
  }

  const onChange = (e) => {
    console.log("onChange password :", credentials.password); 
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div style={{marginTop:"5rem"}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmitClick}>
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder="Enter Name" onChange={onChange} required />
        </div><div className="form-group my-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} required />
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onChange} minLength={5} required />
        </div><div className="form-group my-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="cpassword" className="form-control" id="cpassword" name='cpassword' placeholder="Confirm Password" onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup