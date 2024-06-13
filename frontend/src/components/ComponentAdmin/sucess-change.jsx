import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../components/ComponentAdmin/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Success from "../../assets/img/success.png";

function SuccessChangeModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} className="text-center">
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <div className="text-sucess">
          <h3 className="special-text">
            <b>Success!</b>
          </h3>
          <p>Your password has been successfully changed.</p>
        </div>
        <img src={Success} style={{ width: "100%" }} alt="" />
      </Modal.Body>
    </Modal>
  );
}

export default SuccessChangeModal;
