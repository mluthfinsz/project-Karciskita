import React from "react";
import { Container } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import NavbarComponents from "../../src/components/NavbarAfterLogin/Navbar2";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import konser1 from "../assets/img/konser1.jpg";
import konser2 from "../assets/img/konser2.jpg";
import konser3 from "../assets/img/konser3.jpg";

import { CiLocationOn } from "react-icons/ci";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ResultAfterLogin = () => {
  return (
    <main className="d-flex flex-column" style={{ backgroundColor: "#FAFAFA" }}>
      <NavbarComponents login />

      <Container className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <div className="d-grid g-3 gap-3">
          <SearchInput className="mt-0" />

          <Row>
            <Col>
              <a href="/concertsoundfest">
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
                    src={konser1}
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
                      Concert Music
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
                        Jul 27
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          Soundfest
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>
                          Rp. 200.000 - 350.000
                        </p>

                        <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                          <CiLocationOn />
                          Parking Ground Summarecon Mall Bekasi
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>

            <Col>
              <a href="/concertbigbang">
                <Card
                  style={{
                    width: "18rem",
                    height: "100%",
                    borderColor: "#4f4cee",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img variant="top" src={konser2} />
                  <Card.Body>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#4f4cee",
                      }}
                    >
                      Concert Music
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
                        Dec 21
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          Bigbang Festival Jakarta 2024
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>
                          Rp. 150.000 - 1.000.000
                        </p>

                        <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                          <CiLocationOn />
                          JIExpo, Kemayoran, Jakarta - Indonesia
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>

            <Col>
              <a href="/concertjava">
                <Card
                  style={{
                    width: "18rem",
                    height: "100%",
                    borderColor: "#4f4cee",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img variant="top" src={konser3} />
                  <Card.Body>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#4f4cee",
                      }}
                    >
                      Concert Music
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
                        May 24
                      </p>

                      <div>
                        <Card.Title style={{ fontSize: "14px" }}>
                          Java Jazz Festival 2024
                        </Card.Title>
                        <p style={{ fontSize: "13px" }}>
                          Rp. 350.000 - 500.000
                        </p>

                        <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                          <CiLocationOn />
                          JIExpo, Kemayoran, Jakarta - Indonesia
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

export default ResultAfterLogin;
