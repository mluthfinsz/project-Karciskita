import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../../components/ComponentAdmin/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "../../assets/img/logout.png";

function LogoutModal({ show, handleClose }) {
  const navigate = useNavigate();

  const handleNo = () => {
    handleClose(); // Tutup modal
  };

  const handleYes = () => {
    handleClose(); // Tutup modal
    navigate("/"); // Arahkan kembali ke halaman login menggunakan useNavigate
  };

  return (
    <Modal show={show} onHide={handleClose} className="text-center">
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <img src={Logout} style={{ width: "40%" }} alt="" />
        <div className="text-sucess">
          <h3 className="special-text">
            <b>Logout?</b>
          </h3>
          <p>Are you sure you want to leave?</p>
        </div>

        <div className="row">
          <div className="button-logout mt-2">
            <Button
              type="button"
              className="btn btn-primary no-button"
              onClick={handleNo}
            >
              No
            </Button>
          </div>
          <div className="button-logout">
            <Button
              type="button"
              className="btn btn-outline-primary yes-button"
              onClick={handleYes}
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LogoutModal;
