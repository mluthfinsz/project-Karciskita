import React from "react";
import NavbarComponents from "../../src/components/NavbarBefore/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

import footer1 from "../assets/img/create1.png";
import footer2 from "../assets/img/create2.png";
import footer3 from "../assets/img/create3.png";

const CreateEvent = () => {
  return (
    <main>
      <NavbarComponents login />

      <h1 className="mt-3">Create Your Event With Us!</h1>

      <Container
        className="w-25 mt-5 p-5 h-100 mb-5"
        style={{
          border: "1px solid black",
          boxShadow:
            "0px 4px 4px rgba(0,0,0,0.25) , 0px 4px 4px rgba(0,0,0,0.25) ",
        }}
      >
        <Form className="d-flex flex-column">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Organization or Agency Name</Form.Label>
            <Form.Control type="text" className="border border-black" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Principle Name</Form.Label>
            <Form.Control type="name" className="border border-black" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" className="border border-black" />
            <Form.Text className="text-muted ">
              *Your event progress will be sent to your email address, please
              make sure your email address is correct.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Whatsapp Number</Form.Label>
            <Form.Control type="name" className="border border-black" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="name" className="border border-black" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Category</Form.Label>
            <Form.Control type="name" className="border border-black" />
          </Form.Group>

          <div className="d-flex gap-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" className="border border-black" />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Event Location</Form.Label>
              <Form.Control type="location" className="border border-black" />
            </Form.Group>
          </div>

          <Button
            href="/createSuccess"
            variant="primary"
            type="submit"
            className="mx-auto align-self-center px-5"
            style={{ backgroundColor: "#4F4CEE" }}
          >
            Submit
          </Button>
        </Form>
      </Container>

      <Container className="d-flex justify-content-center gap-3 ">
        <img src={footer1} alt="footer 1" className="object-fit-contain" />
        <img src={footer2} alt="footer 2" className="object-fit-contain" />
        <img src={footer3} alt="footer 3" className="object-fit-contain" />
      </Container>
    </main>
  );
};

export default CreateEvent;
