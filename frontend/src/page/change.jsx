import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import "../components/ComponentAdmin/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SuccessChangeModal from "../components/ComponentAdmin/sucess-change";

function ChangePasswordModal({ show, handleClose }) {
  const [changeEmail, setChangeEmail] = useState("");
  const [changeOldPassword, setOldPassword] = useState("");
  const [changeNewPassword, setNewPassword] = useState("");
  const [changeConfirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming the change password logic goes here and is successful
    setChangeEmail("");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    handleClose();
    setShowSuccessModal(true); // Show the success modal after form submission
  };

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="tittle-modal">
          <Modal.Header closeButton>
            <Modal.Title>
              <b>Change Password</b>
            </Modal.Title>
          </Modal.Header>
        </div>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="changeEmail" className="mb-3">
              <Form.Label>
                <b>Email</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email here"
                value={changeEmail}
                onChange={(e) => setChangeEmail(e.target.value)}
                required
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="changeOldPassword" className="mb-3">
              <Form.Label>
                <b>Old Password</b>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Input old password"
                  value={changeOldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={toggleOldPasswordVisibility}
                >
                  <i
                    className={
                      showOldPassword ? "bi bi-eye" : "bi bi-eye-slash"
                    }
                  ></i>
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="changeNewPassword" className="mb-3">
              <Form.Label>
                <b>New Password</b>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Input new password"
                  value={changeNewPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={toggleNewPasswordVisibility}
                >
                  <i
                    className={
                      showNewPassword ? "bi bi-eye" : "bi bi-eye-slash"
                    }
                  ></i>
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="changeConfirmPassword" className="mb-3">
              <Form.Label>
                <b>Confirm New Password</b>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={changeConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <i
                    className={
                      showConfirmPassword ? "bi bi-eye" : "bi bi-eye-slash"
                    }
                  ></i>
                </Button>
              </InputGroup>
            </Form.Group>

            <div className="text-center mt-4">
              <Button type="submit" className="btn btn-primary button-modal">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <SuccessChangeModal
        show={showSuccessModal}
        handleClose={handleCloseSuccessModal}
      />
    </>
  );
}

export default ChangePasswordModal;
