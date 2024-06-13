import React from "react";
import Layout from "../components/ComponentAdmin/layout";
import LineChart from "../components/ComponentAdmin/line-chart";
import "./page.css";

const Cash = () => {
  const sampleData = [
    {
      id: 1,
      name: "Luthfi S.",
      email: "luthfi@example.com",
      ticket: "Numbered Seating",
      via: "DANA",
      buyAt: "2024-05-10 11:14:21",
      pay: "200.000",
      paymentStatus: "Paid",
    },
    {
      id: 2,
      name: "Ardiansyah",
      email: "ardi@example.com",
      ticket: "Numbered Seating",
      via: "DANA",
      buyAt: "2024-05-11 11:14:23",
      pay: "500.000",
      paymentStatus: "Paid",
    },
    {
      id: 3,
      name: "Chairunisa",
      email: "chai@example.com",
      ticket: "Festival Standing",
      via: "DANA",
      buyAt: "2024-05-11 11:14:23",
      pay: "1.000.000",
      paymentStatus: "Pending",
    },
  ];

  const total = 19815000;
  const pending = 0;
  const paid = 19815000;

  function formatRupiah(number) {
    return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Layout>
      <div className="container mt-2">
        <h2>
          <b>Cash Info Username</b>
        </h2>
        <section id="data">
          <div className="dash-data">
            <div className="row d-flex align-items-center py-2 ps-2 row-dash">
              <div className="col-sm d-flex align-items-center">
                <i className="bi bi-bank2 icon-data"></i>
                <div className="text-container">
                  Total
                  <span>
                    <b>{formatRupiah(total)}</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center py-2 ps-2 row-dash">
              <div className="col-sm d-flex align-items-center">
                <i className="bi bi-stopwatch-fill icon-data"></i>
                <div className="text-container">
                  Pending
                  <span>
                    <b>{formatRupiah(pending)}</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center py-2 ps-2 row-dash">
              <div className="col-sm d-flex align-items-center">
                <i className="bi bi-cash-stack icon-data"></i>
                <div className="text-container">
                  Paid
                  <span>
                    <b>{formatRupiah(paid)}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cash-tabel">
          <div className="table-container mt-4 ps-3">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Ticket</th>
                  <th>Payment Via</th>
                  <th>Buy At</th>
                  <th>Phone Number</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? "even" : "odd"}
                  >
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.ticket}</td>
                    <td>{item.via}</td>
                    <td>{item.buyAt}</td>
                    <td>{formatRupiah(item.pay)}</td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cash;
