import React from "react";
import NavbarComponents from "../components/NavbarAfterLogin/Navbar2";
import { Container } from "react-bootstrap";

import footer1 from "../assets/img/create1.png";
import footer2 from "../assets/img/create2.png";
import footer3 from "../assets/img/create3.png";
import successBooking from "../assets/img/successBooking.png";

const CreateEventSuccess = () => {
  return (
    <main style={{ height: "100vh" }}>
      <NavbarComponents />

      <div
        className="mx-auto d-flex flex-column align-items-center gap-3"
        style={{ width: "fit-content", marginTop: "5%" }}
      >
        <h1
          style={{
            border: "1px solid #4F4CEE",
            padding: "5px 3rem",
            boxShadow: "10px 10px 2px #4F4CEE",
            borderRadius: "4px",
          }}
        >
          Success!
        </h1>
        <p
          className="text-center w-50 "
          style={{ color: "#4F4CEE", fontWeight: "500" }}
        >
          Your Event has been submitted, check your email for next information.
        </p>
        <img src={successBooking} alt="" />
      </div>

      <Container
        className="d-flex justify-content-center gap-3"
        style={{ marginTop: "10%" }}
      >
        <img src={footer1} alt="footer 1" className="object-fit-contain" />
        <img src={footer2} alt="footer 2" className="object-fit-contain" />
        <img src={footer3} alt="footer 3" className="object-fit-contain" />
      </Container>
    </main>
  );
};

export default CreateEventSuccess;
