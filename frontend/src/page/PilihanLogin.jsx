import React from "react";
import { Container, Card, Button } from "react-bootstrap"; // Pastikan Button telah diimpor
import NavbarComponents from "../../src/components/NavbarBefore/Navbar";
import imgLogo from "../assets/img/login.png";

import { Link } from "react-router-dom";

const RectangleBox = () => {
  return (
    <Container className="d-flex justify-content-between align-items-center vh-100">
      <Card style={{ width: "500px", height: "200px" }}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center">
            Select login for admin or user
          </Card.Title>

          <div>
            <Link to="/loginadmin">
              {" "}
              {/* Menggunakan Link untuk mengarahkan pengguna ke halaman registrasi */}
              <Button
                variant="primary"
                className="mr-2"
                style={{ width: "120px" }}
              >
                Admin
              </Button>
            </Link>
            <Link to="/Login">
              {" "}
              {/* Menggunakan Link untuk mengarahkan pengguna ke halaman login */}
              <Button
                variant="success"
                style={{ width: "120px", marginLeft: "10px" }}
              >
                User
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <div>
        <img src={imgLogo} alt="footer 1" className="object-fit-contain" />
      </div>
    </Container>
  );
};

export default RectangleBox;
