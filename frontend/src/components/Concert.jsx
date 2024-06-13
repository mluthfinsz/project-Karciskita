import React from "react";
import Card from "react-bootstrap/Card";
import { CiLocationOn } from "react-icons/ci";
import img from "../assets/img/seminar.png";
import { concert } from "../constants";

const Concert = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem",
      }}
    >
      {concert.map((item) => {
        return (
          <li key={item.id}>
            <Card
              style={{
                width: "15rem",
                height: "100%",
                borderColor: "#4f4cee",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
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
                    {item.date}
                  </p>

                  <div>
                    <Card.Title style={{ fontSize: "14px" }}>
                      {item.title}
                    </Card.Title>
                    <p style={{ fontSize: "12px" }}>
                      Rp.{item.minPrice} - {item.maxPrice}
                    </p>
                    <p style={{ fontSize: "12px", marginTop: "-5%" }}>
                      <CiLocationOn />
                      {item.location}
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

export default Concert;
