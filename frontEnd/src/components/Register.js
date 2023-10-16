import React, { useState } from 'react';
import './Register.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Register=() => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    emal:undefined,
    password: undefined,
  });
 
  const navigate = useNavigate()
  const handleChange = (e) =>{
     setCredentials(prev =>({...prev , [e.target.id] : e.target.value }))
  }

  const handleClick = async(e) => {
    e.preventDefault();
  
    try{
      const res = await axios.post("/auth/register" , credentials);
     
      navigate("/login")
    }
    catch(err){
     console.log(err);
    }
  }


  return (
    <div className="registration">
    <div className="registration-form">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="User Name"
            
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
           
            onChange={handleChange}
          />
        </div>
        <button className="register-button" onClick={handleClick}>
          Register
        </button>
        <a href="/login">already have account</a>
      </form>
    </div>
    </div>
  );
}

export default Register;
