import React from "react";
import Card from "react-bootstrap/Card";
import { upComingEvents } from "../constants";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const UpComingEvents = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem",
      }}
    >
      {upComingEvents.map((item) => {
        return (
          <li key={item.id} style={{ flex: "0 0 15rem", marginBottom: "2rem" }}>
            <Card
              style={{
                width: "15rem", // ubah lebar kartu menjadi lebih kecil
                height: "100%", // biarkan tinggi kartu tetap 100%
                borderColor: "#4f4cee",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#4f4cee",
                  }}
                >
                  Concert Music
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem", // mengurangi jarak antar elemen
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      width: "2.5rem",
                      textAlign: "center",
                      fontSize: "12px", // mengurangi ukuran font tanggal
                      fontWeight: "border",
                    }}
                  >
                    {item.date}
                  </p>

                  <div>
                    <Card.Title style={{ fontSize: "14px" }}>
                      {item.singer}
                    </Card.Title>
                    <p style={{ fontSize: "12px" }}>
                      Rp. {item.minPrice} - {item.maxPrice}
                    </p>

                    <p style={{ fontSize: "12px", marginTop: "-5%" }}>
                      {" "}
                      {/* Mengurangi jarak antara lokasi */}
                      <CiLocationOn />
                      {item.location}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default UpComingEvents;
