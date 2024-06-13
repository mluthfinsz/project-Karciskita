// src/components/AppNavbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/context';
import karciskitaImage from '../../assets/img/karciskita.png';
import './navbar2.css';

function AppNavbar() {
  const { user, logout } = useAuthContext();

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" style={{ width: '150px' }}>
        <img src={karciskitaImage} width="150" height="auto" style={{ marginLeft: '15px' }} className="d-inline-block align-top" alt="Karciskita" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/AfterLogin" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/resultAfterLogin" className="nav-link">
            Concert
          </Nav.Link>
          <Nav.Link as={Link} to="/seminarafter" className="nav-link">
            Seminar
          </Nav.Link>
          <Nav.Link as={Link} to="/createeventafter" className="nav-link">
            Create Event
          </Nav.Link>
          <Nav.Link as={Link} to="/OthersAfterLogin" className="nav-link">
            Others
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* Tampilkan username di dalam tombol dropdown jika sudah login */}
      {user ? (
        <Nav className="ml-auto">
          <NavDropdown title={user.email} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/login" onClick={logout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        <Nav className="ml-auto">
          <Button
            variant="outline-primary"
            as={Link}
            to="/register"
            className="signup-btn"
            style={{ width: '110px' }} // Menetapkan lebar tombol
          >
            Signup
          </Button>
          <Button
            variant="outline-primary"
            as={Link}
            to="/pilihanlogin"
            className="login-btn"
            style={{ width: '110px' }} // Menetapkan lebar tombol
          >
            Login
          </Button>
        </Nav>
      )}
    </Navbar>
  );
}

export default AppNavbar;
