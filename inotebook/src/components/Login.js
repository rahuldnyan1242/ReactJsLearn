import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({email:"", password: ""});
    let history = useHistory();
    const {showAlert} = props;

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        localStorage.setItem("token", json.authtoken);
        if(json.success) {
            history.push('/')
            showAlert("Logged in successfully", "success");
        }else {
            localStorage.removeItem("token");
            // history.push('/login')
            showAlert("Invalid Credentials.", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div style={{marginTop:"4rem"}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmitClick}>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onChange}/>
                </div>
                <button disabled={credentials.email.length===0 || credentials.password.length===0} type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login
