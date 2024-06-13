import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./sidebar.css";
import logo from "../../assets/img/karciskita logo.png";
import ChangePasswordModal from "../../page/change";
import LogoutModal from "../ComponentAdmin/logout-modal";

const NavbarAdmin = () => {
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleCloseChangeModal = () => setShowChangeModal(false);
  const handleShowChangeModal = () => setShowChangeModal(true);

  const handleCloseLogoutModal = () => setShowLogoutModal(false);
  const handleShowLogoutModal = () => setShowLogoutModal(true);

  return (
    <div>
      <Navbar variant="dark" expand="lg" className="navbar-admin">
        <Navbar.Brand>
          <img
            src={logo}
            alt=""
            style={{ width: "30%" }}
            className="navbar-admin-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ml-auto navbar-admin-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to={"/dashboard"}>
              <i className="bi bi-bar-chart-line-fill icon-sidebar"></i>
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/event"}>
              <i className="bi bi-archive-fill icon-sidebar"></i>Event Manager
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/participant"}>
              <i className="bi bi-people-fill icon-sidebar"></i>Participant
              Manager
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/cash"}>
              <i className="bi bi-currency-dollar icon-sidebar"></i>Cash
            </Nav.Link>
            <Nav.Link onClick={handleShowChangeModal}>
              <i className="bi bi-unlock-fill"></i> Change Password
            </Nav.Link>
            <Nav.Link onClick={handleShowLogoutModal}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ChangePasswordModal
        show={showChangeModal}
        handleClose={handleCloseChangeModal}
      />
      <LogoutModal
        show={showLogoutModal}
        handleClose={handleCloseLogoutModal}
      />
    </div>
  );
};

export default NavbarAdmin;
