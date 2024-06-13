import React from "react";
import NavbarComponents from "../../src/components/NavbarAfterLogin/Navbar2";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentConfirm = () => {
  return (
    <main>
      <NavbarComponents login />

      <h2 className="text-center mt-5" style={{ color: "#4F4CEE" }}>
        Payment Confirmation
      </h2>
      <Container>
        <h5>Send Proof of Your Payment Here</h5>

        <Form className=" mt-0 p-5 rounded-2 d-flex flex-column align-content-center justify-content-center text-black gap-5">
          {/* Nama */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Account Name</Form.Label>
            <Form.Control
              style={{
                border: "2px solid #4F4CEE",
                borderRadius: "5px",
                placeContent: "#4F4CEE",
              }}
              type="text"
            />
          </Form.Group>
          {/* Email */}
          <Form.Group
            style={{ border: "none", borderRadius: "5px" }}
            controlId="formBasicEmail"
          >
            <Form.Label>Bank</Form.Label>
            <Form.Control
              type="email"
              style={{ border: "2px solid #4F4CEE" }}
            />
          </Form.Group>
          {/* Telephone */}
          <Form.Group
            style={{ border: "none", borderRadius: "5px" }}
            controlId="formBasicEmail"
          >
            <Form.Label>Payment Amount</Form.Label>
            <Form.Control
              type="number"
              style={{ border: "2px solid #4F4CEE" }}
            />
          </Form.Group>

          {/* Telephone */}
          <Form.Group
            style={{ border: "none", borderRadius: "5px" }}
            controlId="formBasicEmail"
          >
            <Form.Label>Proof of payment</Form.Label>
            <Form.Control type="file" style={{ border: "2px solid #4F4CEE" }} />
          </Form.Group>

          <Link
            to="/paymentsuccess"
            className="align-self-end px-4 py-2 rounded-2"
            type="submit"
            style={{
              backgroundColor: "#4F4CEE",
              color: "white",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Send
          </Link>
        </Form>
      </Container>
    </main>
  );
};

export default PaymentConfirm;
