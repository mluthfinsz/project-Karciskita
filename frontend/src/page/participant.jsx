import React, { useState } from "react";
import Layout from "../components/ComponentAdmin/layout";
import { Link } from "react-router-dom";
import AddParticipantModal from "../components/ComponentAdmin/add-participant";
import { Button } from "react-bootstrap";
import "./page.css";

const Participant = () => {
  const sampleData = [
    {
      id: 1,
      name: "Luthfi S.",
      email: "luthfi@example.com",
      ticket: "Numbered Seating",
      token: "XyZ123",
      buyAt: "2024-05-10 11:14:21",
      phoneNumber: "123-456-7890",
      paymentStatus: "Paid",
    },
    {
      id: 2,
      name: "Ardiansyah",
      email: "ardi@example.com",
      ticket: "Numbered Seating",
      token: "AbC456",
      buyAt: "2024-05-11 11:14:23",
      phoneNumber: "234-567-8901",
      paymentStatus: "Paid",
    },
    {
      id: 3,
      name: "Chairunisa",
      email: "chai@example.com",
      ticket: "Festival Standing",
      token: "AbC456",
      buyAt: "2024-05-11 11:14:23",
      phoneNumber: "234-567-8901",
      paymentStatus: "Pending",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <Layout>
      <div className="container-participant mt-4 ps-3 pe-3">
        <div className="left-side d-flex align-items-center mb-3">
          <div className="search-container d-flex">
            <form action="/action_data.php" className="d-flex">
              <button
                type="submit"
                className="btn btn-primary button-participant"
              >
                <i className="bi bi-search"></i>
              </button>
              <input
                type="text"
                placeholder="Search"
                name="search"
                className="form-control ms-2"
              />
            </form>
          </div>

          <div className="filter ms-2">
            <button
              type="button"
              className="btn btn-primary button-participant"
              style={{ textDecoration: "none", width: "150px" }}
            >
              <i className="bi bi-filter-square-fill icon-button"></i>
              All Categories
            </button>
          </div>
        </div>

        <div className="add-participant mb-3">
          <Button
            className="btn btn-primary button-participant"
            style={{ textDecoration: "none", width: "180px" }}
            onClick={handleShowModal}
          >
            <i className="bi bi-person-plus-fill icon-button"></i>
            Add Participant
          </Button>
        </div>
        <AddParticipantModal show={showModal} handleClose={handleCloseModal} />
      </div>

      <div className="table-container mt-4 ps-3 pe-3">
        <table className="table table-striped table-bordered custom-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Ticket</th>
              <th>Token</th>
              <th>Buy At</th>
              <th>Phone Number</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.ticket}</td>
                <td>{item.token}</td>
                <td>{item.buyAt}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <span
                    className={
                      item.paymentStatus === "Paid"
                        ? "paid-status"
                        : item.paymentStatus === "Pending"
                        ? "pending-status"
                        : ""
                    }
                  >
                    {item.paymentStatus === "Paid"
                      ? "Paid Off"
                      : item.paymentStatus === "Pending"
                      ? "Pending"
                      : item.paymentStatus}
                  </span>
                  <Link to="/proof" className="d-block">
                    Payment Proof
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Participant;
