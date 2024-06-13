import React from "react";
import { Container } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import Navbar from "../components/NavbarAfterLogin/Navbar2";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import seminar1 from "../assets/img/Seminar1.jpg";
import seminar2 from "../assets/img/Seminar2.jpg";

import { CiLocationOn } from "react-icons/ci";
import Footer from "../components/Footer";
const Seminar = () => {
  return (
    <main className="d-flex flex-column" style={{ backgroundColor: "#FAFAFA" }}>
      <Navbar />

      <Container className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
          <SearchInput className="mt-0" />

          <Row>
            <Col>
              <a href="/seminarcareer">
                {" "}
                {/* Ganti "/tiketinfoconcert" dengan path yang sesuai */}
                <Card
                  style={{
                    width: "18rem",
                    height: "100%",
                    borderColor: "#4f4cee",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={seminar1}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <Card.Body>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#4f4cee",
                      }}
                    >
                      Seminar
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "3rem",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        style={{
                          width: "2.5rem",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "border",
                        }}
                      >
                        Jun 23
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          Eza Hazami
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>Rp. 10.000</p>

                        <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                          <CiLocationOn />
                          Zoom
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>

            <Col>
              <a href="/Seminarug">
                <Card
                  style={{
                    width: "18rem",
                    height: "100%",
                    borderColor: "#4f4cee",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img variant="top" src={seminar2} />
                  <Card.Body>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#4f4cee",
                      }}
                    >
                      Seminar
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "3rem",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        style={{
                          width: "2.5rem",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "border",
                        }}
                      >
                        Jun 25
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          Webinar Nasional - Konseling Adiktif
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>Rp. 40.000 - 50.000</p>

                        <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                          <CiLocationOn />
                          Zoom
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
          {/*  */}
        </div>
      </Container>

      <Footer />
    </main>
  );
};

export default Seminar;
