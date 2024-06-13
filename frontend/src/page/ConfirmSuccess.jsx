import React, { useState } from "react";
import NavbarComponents from "../../src/components/NavbarAfterLogin/Navbar2";
import { Button, Container, Form, Card, Image } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import singerImage from "../assets/img/a7x.png"; // Pastikan path ke gambar benar
import { Link } from "react-router-dom";

const ConfirmSuccess = () => {
  // State untuk menyimpan detail tiket yang dipilih
  const [ticketDetails] = useState({
    eventTitle: "Soundfest",
    location: "Stadion Madya Gelora Bung Karno ",
    date: "25 May 2024",
    tickets: [{ category: "CAT 1", quantity: 2, price: 300000 }],
    serviceFee: "-",
    adminFee: "-",
  });

  const calculateTotal = () => {
    const ticketTotal = ticketDetails.tickets.reduce(
      (total, ticket) => total + ticket.quantity * ticket.price,
      0
    );
    return ticketTotal + ticketDetails.serviceFee + ticketDetails.adminFee;
  };

  return (
    <main>
      <NavbarComponents login />

      <Container className="d-flex gap-5 justify-content-between mt-5">
        <Button
          className="bg-white"
          style={{ border: "1px solid #4F4CEE", width: "3rem", height: "3rem" }}
        >
          <IoArrowBack color="#4F4CEE" />
        </Button>

        <div>
          <h2>Buyer Contact Information</h2>

          <p
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#0400ff32",
              color: "#4F4CEE",
            }}
          >
            E-Ticket will be sent to your email address, please make sure your
            email address is correct.
          </p>

          <Form className=" mt-0 p-5 rounded-2 d-flex flex-column align-content-center justify-content-center text-black gap-5">
            {/* Nama */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  placeContent: "#4F4CEE",
                }}
                type="text"
                placeholder="Zulyan Firdaus"
              />
            </Form.Group>
            {/* Email */}
            <Form.Group
              style={{ border: "none", borderRadius: "5px" }}
              controlId="formBasicEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="zulyanfirdaus8@gmail.com"
                style={{ border: "1px solid black" }}
              />
            </Form.Group>
            {/* Telephone */}
            <Form.Group
              style={{ border: "none", borderRadius: "5px" }}
              controlId="formBasicEmail"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="083168792435"
                style={{ border: "1px solid black" }}
              />
            </Form.Group>
            <Link
              to="/paymentconfirm"
              className="align-self-end px-4 py-2 rounded-2"
              type="submit"
              style={{
                backgroundColor: "#4F4CEE",
                color: "white",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Continue to Payment
            </Link>
          </Form>
        </div>

        <div style={{ borderLeft: "1px solid black" }} className="p-4 w-50">
          <h5>Event Details</h5>
          <Card className="p-3 border-0">
            <Card.Body>
              <div className="d-flex">
                <Image
                  src={singerImage}
                  rounded
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "1rem",
                  }}
                />
                <div>
                  <Card.Title>{ticketDetails.eventTitle}</Card.Title>
                  <Card.Text className="d-flex align-items-center">
                    <CiLocationOn style={{ marginRight: "0.5rem" }} />
                    <span>{ticketDetails.location}</span>
                  </Card.Text>
                  <Card.Text className="d-flex align-items-center">
                    <MdOutlineDateRange style={{ marginRight: "0.5rem" }} />
                    <span>{ticketDetails.date}</span>
                  </Card.Text>
                </div>
              </div>
              <hr
                style={{ border: "1px dashed black ", borderStyle: "dotted" }}
              />
              <h5>Order Summary</h5>
              {ticketDetails.tickets.map((ticket, index) => (
                <div key={index} className="d-flex justify-content-between">
                  <div>
                    {ticket.quantity} x {ticket.category}
                  </div>
                  <div>
                    Rp{(ticket.quantity * ticket.price).toLocaleString()}
                  </div>
                </div>
              ))}
              <hr
                style={{ border: "1px dashed black ", borderStyle: "dotted" }}
              />
              <div className="d-flex justify-content-between">
                <div>Service & Handling</div>
                <div>{ticketDetails.serviceFee.toLocaleString()}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Admin Fee</div>
                <div>{ticketDetails.adminFee.toLocaleString()}</div>
              </div>
              <hr
                style={{ border: "1px dashed black ", borderStyle: "dotted" }}
              />
              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>Rp{calculateTotal().toLocaleString()}</h5>
              </div>
            </Card.Body>
          </Card>

          <p
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#0400ff32",
              color: "#4F4CEE",
            }}
          >
            Immediately make payment to Bank Central Asia account number
            10119078 A/N Massive Challenge Group Eight
          </p>
        </div>
      </Container>
    </main>
  );
};

export default ConfirmSuccess;
