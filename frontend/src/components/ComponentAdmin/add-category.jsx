import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../ComponentAdmin/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AddCategoryModal({ show, handleClose }) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [categoryTarget, setCategoryTarget] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoryName("");
    setCategoryPrice("");
    setCategoryTarget("");
    setCategoryDesc("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="tittle-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Add Ticket Category</b>
          </Modal.Title>
        </Modal.Header>
      </div>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="categoryName" className="mb-3">
            <Form.Label>
              <b>Ticket Category Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ticket category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="categoryPrice" className="mb-3">
            <Form.Label>
              <b>Price</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ticket price"
              value={categoryPrice}
              onChange={(e) => setCategoryPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="categoryTarget" className="mb-3">
            <Form.Label>
              <b>Target Ticket To Sell</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ticket to sell"
              value={categoryTarget}
              onChange={(e) => setCategoryTarget(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="categoryDesc" className="mb-3">
            <Form.Label>
              <b>Ticket Description</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              rows={4}
              placeholder="Write your ticket description here"
              value={categoryDesc}
              onChange={(e) => setCategoryDesc(e.target.value)}
              required
            />
          </Form.Group>
          <div className="text-center mt-4">
            <Button type="submit" className="btn btn-primary button-modal">
              Add Ticket
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddCategoryModal;
