import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logoFooter from "../assets/img/karcisKitaFooter.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#4f4cee",
        marginTop: "5rem",
        height: "30rem",
        paddingTop: "6rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Container style={{ color: "white" }}>
        <Row>
          <Col>
            <div className="footer-logo">
              <img src={logoFooter} alt="Logo" style={{ width: "150px" }} />
            </div>
          </Col>
          <Col>
            <h5>About</h5>
            <ul
              className="list-unstyled"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <li>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                  href="about"
                >
                  About KarcisKita
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Partner with Us</h5>
            <ul
              className="list-unstyled"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <li>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                  href="CreateEventBaru"
                >
                  Create Event
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Support</h5>
            <ul
              className="list-unstyled"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <li>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                  href="privacy"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <ul
              className="list-unstyled"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <li>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                  href="#email"
                >
                  +62 81335467980
                </a>
              </li>
              <li>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "300",
                  }}
                  href="#location"
                >
                  massive_grup8@gmail.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <hr
        style={{
          border: "0",
          borderTop: "2px solid white",
          margin: "0 0 0px 0",
        }}
      />
      <Container style={{ marginBottom: "2%" }}>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto" className="d-flex justify-content-end gap-3">
            <a href="https://facebook.com" style={{ color: "white" }}>
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" style={{ color: "white" }}>
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" style={{ color: "white" }}>
              <FaInstagram size={24} />
            </a>
          </Col>
          <Col xs="auto" className="text-white">
            <div>© 2024 KarcisKita incorporated</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
