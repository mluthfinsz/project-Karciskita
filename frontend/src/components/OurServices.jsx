import React from "react";
import { Container } from "react-bootstrap";
import { OurService } from "../constants";

const OurServices = () => {
  return (
    <Container style={{ backgroundColor: "#4F4CEE" }}>
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "1rem" }}>
        Our Services
      </h1>

      <ul className="list-unstyled d-flex  align-items-start justify-content-center gap-5 p-5 position-relative">
        <div
          className="border-1 border-white position-absolute"
          style={{
            border: "1px solid white",
            height: "15rem",
            left: "25rem",
            top: "3rem",
          }}
        ></div>

        {OurService.map((item) => {
          return (
            <li
              key={item.id}
              className="d-flex justify-content-center flex-column align-items-center gap-2 text-white w-25 text-center h-25 justify-content-start"
            >
              <item.logo
                size={60}
                style={{ marginRight: "10px", color: "white" }}
              />
              <h5>{item.title}</h5>
              <p className="text-center">{item.decription}</p>
            </li>
          );
        })}

        <div
          className="border-1 border-white position-absolute"
          style={{
            border: "1px solid white",
            height: "15rem",
            right: "25rem",
            top: "3rem",
          }}
        ></div>
      </ul>
    </Container>
  );
};

export default OurServices;
