import React, { useState, useContext } from "react";
import "./Login.css";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleChange = (e) =>{
     setCredentials(prev =>({...prev , [e.target.id] : e.target.value }))
  }


  const handleClick = async(e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/auth/login" , credentials);
      dispatch({type:"LOGIN_SUCCESS" , payload:res.data.details});
      navigate("/")
    }
    catch(err){
      dispatch({type:"LOGIN_FAILURE" , payload:err.response.data})
    }
  }
 



  return (
    <div className="login-container" id="login">
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <input
              className="input-field"
              type="text"
              placeholder="username"
              id="username"
            
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <button diabled={loading} className="button" type="button" onClick={handleClick}>
            Login
          </button>
          {error && <span>{error.message}</span>}
        </form>
      </div>
    </div>
  );
}

export default Login;
