import React from "react";
import Card from "react-bootstrap/Card";
import { CiLocationOn } from "react-icons/ci";
import img from "../assets/img/seminar.png";

const Seminar = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem",
      }}
    >
      {Array.from({ length: 4 }).map((item, index) => {
        return (
          <li key={index} style={{ flex: "0 0 15rem", marginBottom: "2rem" }}>
            <Card
              style={{
                width: "15rem",
                height: "100%",
                borderColor: "#4f4cee",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Card.Img variant="top" src={img} />
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
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      width: "2.5rem",
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: "border",
                    }}
                  >
                    March 31
                  </p>

                  <div>
                    <Card.Title style={{ fontSize: "14px" }}>
                      Academi Career Talk{" "}
                    </Card.Title>
                    <p style={{ fontSize: "12px" }}>Free Register</p>
                    <p style={{ fontSize: "12px", marginTop: "-5%" }}>
                      <CiLocationOn />
                      Zoom Meeting
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default Seminar;
