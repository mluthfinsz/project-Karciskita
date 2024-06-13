import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../ComponentAdmin/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AddParticipantModal({ show, handleClose }) {
  const [participantName, setParticipantName] = useState("");
  const [participantEmail, setParticipantEmail] = useState("");
  const [participantPhone, setParticipantPhone] = useState("");
  const [participantTicket, setParticipantTicket] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setParticipantName("");
    setParticipantEmail("");
    setParticipantPhone("");
    setParticipantTicket("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="tittle-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Add Participant</b>
          </Modal.Title>
        </Modal.Header>
      </div>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="participantName" className="mb-3">
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter participant name"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="participantEmail" className="mb-3">
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter participant email"
              value={participantName}
              onChange={(e) => setParticipantEmail(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="participantPhone" className="mb-3">
            <Form.Label>
              <b>Phone Number</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter participant phone number"
              value={participantPhone}
              onChange={(e) => setParticipantPhone(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="participantTicket" className="mb-3">
            <Form.Label>
              <b>Ticket Categories</b>
            </Form.Label>
            <Form.Select
              value={participantTicket}
              onChange={(e) => setParticipantTicket(e.target.value)}
              required
              className="form-control"
            >
              <option value="">Select ticket</option>
              <option value="1">Festival Standing (Cat 1)</option>
              <option value="2">Festival Standing (Cat 2)</option>
              <option value="3">Festival Standing (Cat 3)</option>
              <option value="4">Numbered Seating (Cat 4)</option>
              <option value="5">Numbered Seating (Cat 5)</option>
            </Form.Select>
          </Form.Group>

          <div className="text-center mt-4 mb-2">
            <Button type="submit" className="btn btn-primary button-modal">
              Add Participant
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddParticipantModal;
