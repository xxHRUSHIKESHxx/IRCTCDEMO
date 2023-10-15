import React, { useState } from 'react';
import './Register.css';

const Register=() => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="registration">
    <div className="registration-form">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        <a href="/login">already have account</a>
      </form>
    </div>
    </div>
  );
}

export default Register;
