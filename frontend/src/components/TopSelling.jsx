import React from "react";
import { topSelling } from "../constants";
import Card from "react-bootstrap/Card";

const TopSelling = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem",
        justifyContent: "center",
      }}
    >
      {topSelling.map((item) => {
        return (
          <li key={item.id} style={{ flex: "0 0 25rem", marginBottom: "2rem" }}>
            <Card
              style={{
                width: "23rem", // tetapkan lebar absolut untuk card
                height: "27rem", // tetapkan tinggi absolut untuk card
                borderColor: "#4f4cee",

                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Card.Img
                variant="top"
                src={item.img}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <p
                style={{
                  color: "white",
                  position: "absolute",
                  left: 20,
                  bottom: 30,
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 20,
                  color: "#EB5757",
                }}
              >
                stock tickets is low!
              </p>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default TopSelling;
