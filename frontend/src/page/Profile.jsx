import React from "react";
import NavbarComponents from "../../src/components/NavbarAfterLogin/Navbar2";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import bg from "../assets/img/icons/profile.png";

const Profile = () => {
  return (
    <main>
      <NavbarComponents login />

      <Container
        className="d-flex mt-5 p-5 justify-content-between "
        style={{ backgroundColor: "#4F4CEE" }}
      >
        <div className="d-flex flex-column gap-3 align-items-center">
          <img src={bg} alt="icon" className="bg-white p-5 rounded-4" />

          <Button
            style={{
              backgroundColor: "white",
              color: "#4F4CEE",
              fontWeight: "600",
              width: "60%",
            }}
          >
            Edit Photo
          </Button>

          <Button
            style={{
              backgroundColor: "white",
              color: "#4F4CEE",
              fontWeight: "600",
              width: "60%",
            }}
          >
            Logout
          </Button>
        </div>

        <Form
          className=" mt-0 p-5 text-white rounded-2 d-flex flex-column align-content-center justify-content-center gap-0"
          style={{ border: "5px solid #4F4CEE", width: "70%" }}
        >
          {/* Nama */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              id="placeholder"
              style={{
                border: "1px solid #4F4CEE",
                borderRadius: "5px",
                placeContent: "#4F4CEE",
              }}
              type="text"
              placeholder="Zulyan Firdaus"
            />
          </Form.Group>{" "}
          {/* Email */}
          <Form.Group
            style={{ border: "1px solid #4F4CEE", borderRadius: "5px" }}
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="placeholder"
              type="email"
              placeholder="zulyanfirdaus8@gmail.com"
            />
          </Form.Group>{" "}
          {/* Telephone */}
          <Form.Group
            style={{ border: "1px solid #4F4CEE", borderRadius: "5px" }}
            controlId="formBasicEmail"
          >
            <Form.Label>No Telephone</Form.Label>
            <Form.Control
              id="placeholder"
              type="number"
              placeholder="083168792435"
            />
          </Form.Group>
          {/* Alamat */}
          <Form.Group
            style={{ border: "1px solid #4F4CEE", borderRadius: "5px" }}
            controlId="formBasicEmail"
          >
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              id="placeholder"
              type="text"
              placeholder="Jl. MassiveChallenge No 8"
            />
          </Form.Group>
          {/* Tanggal Lahir */}
          <Form.Group
            className="mb-3"
            style={{ border: "1px solid #4F4CEE", borderRadius: "5px" }}
            controlId="formBasicPassword"
          >
            <Form.Label>Tanggal Lahir (DD / MM / YY)</Form.Label>

            <Form.Control
              id="placeholder"
              type="text"
              placeholder="08 - 08 - 2003"
            />
          </Form.Group>
          <Button
            variant="primary"
            className="align-self-end"
            type="submit"
            style={{
              backgroundColor: "white",
              color: "#4F4CEE",
              fontWeight: "500",
            }}
          >
            Update Profile
          </Button>
        </Form>
      </Container>

      <Footer />
    </main>
  );
};

export default Profile;
