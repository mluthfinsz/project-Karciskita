import React, { useState } from 'react';
import NavbarComponents from '../../src/components/NavbarBefore/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import imgLogo from '../assets/img/login.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/afterlogin');
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <main>
      <NavbarComponents />

      <Container className="d-flex justify-content-between  align-items-center">
        <img src={imgLogo} alt="logo karcis" className="object-fit-contain" />

        <Form
          className="p-5 rounded-2 d-flex flex-column align-content-center justify-content-center"
          style={{
            border: '5px solid #4F4CEE',
            marginTop: '10%',
            width: '40%',
          }}
          onSubmit={handleLogin}
        >
          <h1 style={{ fontFamily: 'Roboto Slab' }}>Login</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form.Group className="mb-3 mt-5" style={{ border: '1px solid #4F4CEE', borderRadius: '5px' }} controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{
              border: '1px solid #4F4CEE',
              borderRadius: '5px',
              fontFamily: 'Roboto Slab',
            }}
            controlId="formBasicPassword"
          >
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" className="w-100 mt-5 align-self-center" type="submit" style={{ backgroundColor: '#4F4CEE', fontFamily: 'Roboto Slab' }}>
            <span className="text-white" style={{ textDecoration: 'none' }}>
              Sign In
            </span>
          </Button>

          <p className="text-center mt-3 text-black">
            Doesn’t have account?{' '}
            <a href="/register" style={{ color: '#4F4CEE', textDecoration: 'none' }}>
              Sign Up
            </a>
          </p>
        </Form>
      </Container>
    </main>
  );
};

export default Login;
