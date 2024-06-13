import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import karciskitaImage from "../../assets/img/karciskita.png"; //
import "./navbar.css"; //

function AppNavbar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      {/* Gambar di sebelah kiri */}
      <Navbar.Brand as={Link} to="/" style={{ width: "150px" }}>
        {" "}
        {/* Mengatur lebar logo */}
        <img
          src={karciskitaImage}
          width="150" // Menetapkan lebar gambar
          height="auto" // Biarkan tinggi gambar disesuaikan secara proporsional
          style={{ marginLeft: "15px" }} // Menggunakan float dan menambahkan margin kiri
          className="d-inline-block align-top"
          alt="Karciskita"
        />
      </Navbar.Brand>

      {/* Tautan menu di tengah */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/result" className="nav-link">
            Concert
          </Nav.Link>
          <Nav.Link as={Link} to="/seminarbefore" className="nav-link">
            Seminar
          </Nav.Link>
          <Nav.Link as={Link} to="/CreateEventBaru" className="nav-link">
            Create Event
          </Nav.Link>
          <Nav.Link as={Link} to="/othersbeforelogin" className="nav-link">
            Others
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* Tombol Signup dan Login di sebelah kanan */}
      <Nav className="ml-auto">
        <Button
          variant="outline-primary"
          as={Link}
          to="/register"
          className="signup-btn"
          style={{ width: "110px" }} // Menetapkan lebar tombol
        >
          Signup
        </Button>
        <Button
          variant="outline-primary"
          as={Link}
          to="/pilihanlogin"
          className="login-btn"
          style={{ width: "110px" }} // Menetapkan lebar tombol
        >
          Login
        </Button>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
