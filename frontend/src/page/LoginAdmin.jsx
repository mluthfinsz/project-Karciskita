// src/components/LoginAdmin.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../context/context'; // Import useAuthContext
import logo from '../assets/img/karcis.png';
import ilustrasi from '../assets/img/login.png';
import './login.css';

const LoginAdmin = () => {
  const { login } = useAuthContext(); // Ambil fungsi login dari AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Login failed');
    }
  };

  return (
    <div className="content">
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <section id="header" className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h1 className="text-center">
                <b>Welcome Back!</b>
              </h1>
              <img src={ilustrasi} style={{ width: '90%' }} alt="Ilustrasi" />
            </div>
          </section>

          <section id="form" className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="form text-center">
              <form className="box" onSubmit={handleLogin}>
                <img src={logo} style={{ width: '40%' }} alt="Logo" />
                <h3 className="text-center">
                  <b>Log In</b>
                </h3>
                <p>Please enter your email and password to enter the admin page</p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="mb-3">
                  <label htmlFor="InputEmail" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control text-dark" id="InputEmail" aria-describedby="emailHelp" placeholder="Insert Email " value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputPassword" className="form-label ">
                    Password
                  </label>
                  <input type="password" className="form-control text-dark" id="InputPassword" placeholder="Insert Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group pt-3 pb-3">
                  <button type="submit" className="btn btn-light button-form">
                    <b>Login</b>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
