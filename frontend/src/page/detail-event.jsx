import React, { useState } from "react";
import Profil from "../components/ComponentAdmin/profil";
import fotoevent from "../assets/img/event foto.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddCategoryModal from "../components/ComponentAdmin/add-category";
import "./page.css";

const DetailEvent = () => {
  const ticketCategories = [
    {
      name: "Festival Standing",
      type: "CAT 1",
      price: 2600000,
      target: "0/100",
    },
    {
      name: "Festival Standing",
      type: "CAT 2",
      price: 1900000,
      target: "0/100",
    },
    {
      name: "Festival Standing",
      type: "CAT 3",
      price: 1350000,
      target: "0/100",
    },
    {
      name: "Numbered Seating",
      type: "CAT 4",
      price: 2250000,
      target: "0/100",
    },
    {
      name: "Numbered Seating",
      type: "CAT 5",
      price: 1600000,
      target: "0/100",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <Profil>
      <nav aria-label="breadcrumb" className="ms-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/event">Event Manager</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Detail Event
          </li>
        </ol>
      </nav>

      <div className="container mt-2">
        <section id="event-description">
          <div className="row detail-event">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <img
                src={fotoevent}
                alt="Event Banner"
                style={{ width: "100%" }}
                className="event-banner"
              />
              <div className="col-md-6 d-flex justify-content-start button-container">
                <button
                  type="button"
                  className="btn btn-primary button-participant mt-3"
                >
                  <i className="bi bi-pencil-square icon-button"></i> Edit
                  Banner Event
                </button>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3>
                <b>The Life Is But A Dream</b>
              </h3>
              <p>
                <i className="bi bi-geo-alt"></i> Stadion Madya Gelora Bung
                Karno Jakarta
              </p>
              <p>
                <i className="bi bi-calendar-week"></i> 25 May 2024
              </p>
              <p className="text-justify">
                The heavy metal band from the United States, Avenged Sevenfold
                will hold its concert entitled The Life Is But A Dream on May
                25, 2024 at the Madya Gelora Bung Karno Stadium, Jakarta.
              </p>
              <div className="col-md-6 d-flex justify-content-start button-container">
                <button
                  type="button"
                  className="btn btn-primary button-participant"
                >
                  <i className="bi bi-pencil-square icon-button"></i> Edit
                  Detail Event
                </button>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider mt-4 mb-4" />

        <section id="event-ticket">
          <div className="event-ticket-container d-flex align-items-center justify-content-between">
            <div className="left-side">
              <h4>
                <b>Ticket Category</b>
              </h4>
            </div>

            <div className="right-side">
              <div className="add-category">
                <Button
                  variant="primary"
                  onClick={handleShowModal}
                  className="btn btn-primary button-category"
                >
                  <i className="bi bi-plus ticket-button"></i>
                </Button>
              </div>
              <AddCategoryModal
                show={showModal}
                handleClose={handleCloseModal}
              />
            </div>
          </div>

          <div className="row mt-3 ">
            {ticketCategories.map((category, index) => (
              <div key={index} className="col-md-4 mb-3 ">
                <div className="categories text-center">
                  <h6>
                    <b>{category.name}</b>
                  </h6>
                  <p>{category.type}</p>
                  <h5 className="harga">
                    <b>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(category.price)}
                    </b>
                  </h5>
                  <p className="pt-4" style={{ fontSize: "13px" }}>
                    Target {category.target}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Profil>
  );
};

export default DetailEvent;
