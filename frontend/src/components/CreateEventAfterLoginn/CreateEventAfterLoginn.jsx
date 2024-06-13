import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import footer1 from "../../assets/img/create1.png";
import footer2 from "../../assets/img/create2.png";
import footer3 from "../../assets/img/create3.png";
import "./createevent.css";

const CreateEventAfter = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [principleName, setPrincipleName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang diinput
  };

  return (
    <main>
      <h1 className="text-center">Create Your Event With Us!</h1>
      <Container className="mt-4 container-margin-top">
        <div className="border p-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              controlId="organizationName"
              className="create-event-input"
            >
              <Form.Label>Organization or Agency Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="principleName"
              className="create-event-input"
            >
              <Form.Label>Principle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={principleName}
                onChange={(e) => setPrincipleName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email" className="create-event-input">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                *Your event progress will be sent to your email address, please
                make sure your email address is correct.
              </Form.Text>
            </Form.Group>

            <Form.Group
              controlId="whatsappNumber"
              className="create-event-input"
            >
              <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="eventName" className="create-event-input">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="eventCategory"
              className="create-event-input"
            >
              <Form.Label>Event Category</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={eventCategory}
                onChange={(e) => setEventCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="eventDate" className="create-event-input">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="eventLocation"
              className="create-event-input"
            >
              <Form.Label>Event Location</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </Form.Group>

            <div style={{ textAlign: "center" }}>
              <Button href="/createSuccess" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <Container className="d-flex justify-content-center gap-3 ">
        <img src={footer1} alt="footer 1" className="object-fit-contain" />
        <img src={footer2} alt="footer 2" className="object-fit-contain" />
        <img src={footer3} alt="footer 3" className="object-fit-contain" />
      </Container>
    </main>
  );
};

export default CreateEventAfter;
