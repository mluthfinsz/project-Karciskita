import React from "react";
import { Container } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import Navbar2 from "../../src/components/NavbarAfterLogin/Navbar2";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import workshop1 from "../assets/img/workshop1.png";
import workshop2 from "../assets/img/workshop2.png";
import workshop3 from "../assets/img/workshop3.png";

import { CiLocationOn } from "react-icons/ci";
import Footer from "../components/Footer";
const OthersAfterLogin = () => {
  return (
    <main className="d-flex flex-column" style={{ backgroundColor: "#FAFAFA" }}>
      <Navbar2 login />

      <Container className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <div className="d-grid g-3 gap-3">
          <SearchInput className="mt-0" />

          <Row>
            <Col>
              <a href="/workshoppertama">
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
                    src={workshop1}
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
                      Workshop
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
                        Jun 20
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          Intro to UI/UX Design
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>
                          Rp. 200.000 - 550.000
                        </p>

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
              <a href="/workshopkedua">
                <Card
                  style={{
                    width: "18rem",
                    height: "100%",
                    borderColor: "#4f4cee",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img variant="top" src={workshop2} />
                  <Card.Body>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#4f4cee",
                      }}
                    >
                      Workshop
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
                        Jun 20
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          Skills U: UI/UX Design
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>
                          Rp. 200.000 - 550.000
                        </p>

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
              <a href="/workshopketiga">
                <Card
                  style={{
                    width: "18rem",
                    height: "100%",
                    borderColor: "#4f4cee",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img variant="top" src={workshop3} />
                  <Card.Body>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#4f4cee",
                      }}
                    >
                      Workshop
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
                        jun 20
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          UI/UX Design Workshop
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>
                          Rp. 200.000 - 550.000
                        </p>

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

export default OthersAfterLogin;
