import React, { useState } from 'react';
import NavbarComponents from '../../src/components/NavbarBefore/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import imgLogo from '../assets/img/login.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/register', {
        email,
        telephone,
        password,
      });
      history('/login');
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <main>
      <NavbarComponents />

      <Container className="d-flex justify-content-between align-items-center">
        <img src={imgLogo} alt="logo karcis" className="object-fit-contain" />

        <Form
          className="p-5 rounded-2 d-flex flex-column align-content-center justify-content-center"
          style={{
            border: '5px solid #4F4CEE',
            marginTop: '10%',
            width: '40%',
          }}
          onSubmit={handleRegister}
        >
          <h1 style={{ fontFamily: 'Roboto Slab' }}>Register</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form.Group className="mb-3 mt-5" style={{ border: '1px solid #4F4CEE', borderRadius: '5px' }} controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" style={{ border: '1px solid #4F4CEE', borderRadius: '5px' }} controlId="formBasicTelephone">
            <Form.Control type="number" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" style={{ border: '1px solid #4F4CEE', borderRadius: '5px' }} controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" style={{ border: '1px solid #4F4CEE', borderRadius: '5px' }} controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" className="w-100 mt-5 align-self-center" type="submit" style={{ backgroundColor: '#4F4CEE' }}>
            Register
          </Button>

          <Link className="text-center mt-5 text-black" to="/login" style={{ textDecoration: 'none' }}>
            Already have an account?
            <span style={{ color: '#4F4CEE' }}>Login Here</span>
          </Link>
        </Form>
      </Container>
    </main>
  );
};

export default Register;
