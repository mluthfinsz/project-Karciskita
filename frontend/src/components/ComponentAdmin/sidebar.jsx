import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.css";
import logo from "../../assets/img/karcis.png";
import ChangePasswordModal from "../../page/change";
import LogoutModal from "../ComponentAdmin/logout-modal";

const Sidebar = () => {
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleCloseChangeModal = () => setShowChangeModal(false);
  const handleShowChangeModal = () => setShowChangeModal(true);

  const handleCloseLogoutModal = () => setShowLogoutModal(false);
  const handleShowLogoutModal = () => setShowLogoutModal(true);

  return (
    <div>
      <div className="menu">
        <aside className="has-shadow" id="sidebar">
          <div className="col text-center mb-3">
            <img src={logo} alt="" style={{ width: "90%" }} />
          </div>

          <div className="sidebar-section">
            <ul className="menu-list">
              <li>
                <NavLink to={"/dashboard"}>
                  <i className="bi bi-bar-chart-line-fill icon-sidebar"></i>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to={"/event"}>
                  <i className="bi bi-archive-fill icon-sidebar"></i>Event
                  Manager
                </NavLink>
              </li>
              <li>
                <NavLink to={"/participant"}>
                  <i className="bi bi-people-fill icon-sidebar"></i>Participant
                  Manager
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <ul className="menu-list">
              {/*<li>
                <NavLink to={"/voucher"}>
                  <i className="bi bi-ticket-detailed-fill icon-sidebar"></i>
                  Voucher
                </NavLink>
  </li> */}
              <li>
                <NavLink to={"/cash"}>
                  <i className="bi bi-currency-dollar icon-sidebar"></i>Cash
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <ul className="menu-list">
              <li>
                <NavLink onClick={handleShowChangeModal}>
                  <i className="bi bi-unlock-fill icon-sidebar"></i>Change
                  Password
                </NavLink>
                <ChangePasswordModal
                  show={showChangeModal}
                  handleClose={handleCloseChangeModal}
                />
              </li>
              <li>
                <NavLink onClick={handleShowLogoutModal}>
                  <i className="bi bi-box-arrow-right icon-sidebar"></i> Logout
                </NavLink>
                <LogoutModal
                  show={showLogoutModal}
                  handleClose={handleCloseLogoutModal}
                />
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
