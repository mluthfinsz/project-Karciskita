import React from "react";
import NavbarComponents from "../../src/components/NavbarAfterLogin/Navbar2";
import { Container, Button, Image } from "react-bootstrap";
import { FiPhone, FiMail } from "react-icons/fi";
import successImage from "../assets/img/success.png"; // Pastikan path ke gambar benar

const PaymentSuccess = () => {
  return (
    <main>
      <NavbarComponents login />

      <Container className="d-flex flex-column align-items-center mt-5">
        <h1
          style={{
            border: "1px solid #4F4CEE",
            padding: "5px 3rem",
            boxShadow: "10px 10px 2px #4F4CEE",
            borderRadius: "4px",
          }}
        >
          Completed!
        </h1>
        <Image src={successImage} className="my-4 object-fit-contain" />

        <div className="text-center" style={{ color: "#4F4CEE" }}>
          <h5 className="text-black">Tickets have been sent to</h5>
          <p>zulyanfirdaus8@gmail.com</p>
        </div>

        <p className="mt-5">Haven’t received tickets yet?</p>
        <Button
          style={{
            color: "#4F4CEE",
            border: "1px solid #4F4CEE",
            fontWeight: "500",
            backgroundColor: "white",
            marginBottom: "2rem",
          }}
        >
          Resend Tickets
        </Button>

        <p className="mt-4">Having trouble receiving the tickets?</p>

        <div
          className="d-flex align-items-center gap-5"
          style={{ color: "#4F4CEE" }}
        >
          <div className="d-flex align-items-center mt-2">
            <FiPhone style={{ marginRight: "0.5rem" }} />
            <span>+62 813 3546 7980</span>
          </div>
          <div className="d-flex align-items-center mt-2">
            <FiMail style={{ marginRight: "0.5rem" }} />
            <span>massive_grup8@gmail.com</span>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default PaymentSuccess;
