import React, { useState } from "react";
import NavbarComponents from "../components/NavbarAfterLogin/Navbar2";
import { Button, Container } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";

import a7x from "../assets/img/seminar1.1.jpg";
import Footer from "../components/Footer";

const TicketInfo = () => {
  const [ticket, setTicket] = useState({
    cat1: 0,
    cat2: 0,
    cat3: 0,
    cat4: 0,
    cat5: 0,
  });

  const [isChosen, setIsChosen] = useState(false);

  const addTicket = (category) => {
    setTicket((prevTicket) => ({
      ...prevTicket,
      [category]: prevTicket[category] + 1,
    }));
  };

  const subtractTicket = (category) => {
    setTicket((prevTicket) => ({
      ...prevTicket,
      [category]: Math.max(prevTicket[category] - 1, 0),
    }));
  };

  const handleChooseTickets = () => {
    setIsChosen(true);
  };

  const calculateTotal = () => {
    const prices = {
      cat1: 10000,
      cat1: 10000,
    };

    return Object.keys(ticket).reduce((total, category) => {
      return total + ticket[category] * prices[category];
    }, 0);
  };

  const selectedTickets = Object.keys(ticket).filter(
    (category) => ticket[category] > 0
  );

  return (
    <main>
      <NavbarComponents login />

      <Container className="mt-5">
        <h5>Ticket Options</h5>

        <div className="mt-5 d-flex justify-content-between gap-3">
          <img
            src={a7x}
            alt="a7x image"
            style={{ width: "300px", height: "auto" }}
          />

          <div className="w-100">
            <h5 className="align-items-baseline">
              Mengatasi Kegelisahan dan Menyikapi Tren Switch Career
            </h5>
            <div>
              <p className="gap-3 d-flex align-items-center">
                <CiLocationOn />
                Zoom
              </p>

              <p className="gap-3 d-flex align-items-center">
                <MdOutlineDateRange />
                23 Jun{" "}
              </p>

              <p style={{ width: "40rem" }}>
                Punya keinginan untuk switch career? Atau sudah terlanjur switch
                career tapi belum ada tujuan selanjutnya? Ayo bergabung dalam
                webinar kami yang akan mengeksplorasi segala hal
                tentang switch karier.
              </p>
            </div>
          </div>
        </div>

        <hr
          style={{
            color: "#4f4cee",
            border: "1px solid #4f4cee",
            margin: "5rem 0",
          }}
        />

        <ul
          className="list-unstyled d-flex gap-5 flex-wrap"
          style={{ justifyContent: "center" }}
        >
          {[
            {
              id: "cat1",
              title: "Tren Switch Career ",
              price: "Rp10.000",
            },
          ].map((category) => (
            <li
              key={category.id}
              className="rounded-3 d-flex justify-content-between p-4 align-items-center flex-column"
              style={{
                height: "20rem",
                width: "25%",
                border: "2px solid #4f4cee",
              }}
            >
              <div>
                <h5>{category.title}</h5>
                <p className="text-center text-sm-center">
                  {" "}
                  {category.id.toUpperCase()}{" "}
                </p>
              </div>

              <div>
                <h5>{category.price}</h5>

                <div className="d-flex justify-content-between align-content-center align-items-center">
                  <button
                    className="px-2 bg-white rounded-2"
                    style={{ borderColor: "#4f4cee" }}
                    onClick={() => subtractTicket(category.id)}
                  >
                    -
                  </button>
                  <p className="mt-3 opacity-50">{ticket[category.id]}</p>
                  <button
                    className="px-2 bg-white rounded-2"
                    style={{ borderColor: "#4f4cee" }}
                    onClick={() => addTicket(category.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {isChosen ? (
          <div
            className="d-flex flex-wrap justify-content-between mt-5 rounded-2 "
            style={{
              border: "1px solid #4f4cee",
              padding: "1rem",
              color: "#4f4cee",
            }}
          >
            <div
              className="d-flex flex-column align-items-center"
              style={{ flex: 1 }}
            >
              <h6>Qty</h6>
              {selectedTickets.map((category) => (
                <p key={category}>{ticket[category]}</p>
              ))}
            </div>
            <div
              className="d-flex flex-column align-items-center"
              style={{ flex: 1 }}
            >
              <h6>Tipe Cat</h6>
              {selectedTickets.map((category) => (
                <p key={category}>{category.toUpperCase()}</p>
              ))}
            </div>
            <div
              className="d-flex flex-column align-items-center"
              style={{ flex: 1 }}
            >
              <h6>Price Total (IDR)</h6>
              {selectedTickets.map((category) => (
                <p key={category}>
                  Rp
                  {(
                    ticket[category] *
                    {
                      cat1: 10000,
                    }[category]
                  ).toLocaleString()}
                </p>
              ))}
            </div>
            <div
              className="d-flex flex-column align-items-center"
              style={{ flex: 1 }}
            >
              {selectedTickets.map((category) => (
                <Button
                  href="/confirmprogress"
                  key={category}
                  style={{
                    backgroundColor: "#4f4cee",
                    border: "none",
                    marginBottom: "0.5rem",
                  }}
                >
                  Buy Tickets
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <Button
            style={{
              backgroundColor: "white",
              border: "1px solid #4f4cee",
              color: "#4f4cee",
              width: "100%",
              marginTop: "2%",
              padding: "1rem",
              fontWeight: "500",
            }}
            onClick={handleChooseTickets}
          >
            Choose your ticket and quantity.
          </Button>
        )}
      </Container>

      <Footer />
    </main>
  );
};

export default TicketInfo;
