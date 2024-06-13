import React from "react";
import Layout from "../component/layout";
import { Link } from "react-router-dom";
import "./page.css";

const Voucher = () => {
  const sampleData = [
    {
      id: 1,
      vouchercode: "99supersale",
      nominal: "99.000",
      minimal: "600.000",
      uses: "2",
      max_uses: "Unlimited",
      availfor: "Total Transaction",
      status: "Online",
    },
    {
      id: 2,
      vouchercode: "payday",
      nominal: "50.000",
      minimal: "500.000",
      uses: "80",
      max_uses: "Unlimited",
      availfor: "Total Transaction",
      status: "Offline",
    },
    {
      id: 3,
      vouchercode: "specialday",
      nominal: "10.000",
      minimal: "200.000",
      uses: "4",
      max_uses: "Limited For 10 Transaction",
      availfor: "Total Transaction",
      status: "Online",
    },
  ];

  return (
    <Layout>
      <div className="container-participant mt-4 ps-3">
        <div className="left-side d-flex align-items-center">
          <div className="search-container d-flex">
            <form action="/action_data.php">
              <button type="submit" className="btn-primary button-participant">
                <i className="bi bi-search"></i>
              </button>
              <input
                type="text"
                placeholder="Search"
                name="search"
                className="search-input"
              />
            </form>
          </div>

          <div className="filter ms-2">
            <button type="button" className="btn-primary button-participant">
              <i className="bi bi-filter-square-fill icon-button"></i>All
              Categories
            </button>
          </div>
        </div>

        <div className="add-voucher">
          <Link
            to="/add-voucher"
            className="btn-primary button-participant"
            style={{ textDecoration: "none" }}
          >
            <i className="bi bi-person-plus-fill icon-button"></i>Add Voucher
          </Link>
        </div>
      </div>

      <div className="table-container mt-4 ps-3">
        <table className="custom-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Voucher Code</th>
              <th>Nominal</th>
              <th>Minimal Buy</th>
              <th>Voucher Uses</th>
              <th>Max Uses</th>
              <th>Available For</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "even" : "odd"}>
                <td>{index + 1}</td>
                <td>{item.vouchercode}</td>
                <td>{item.nominal}</td>
                <td>{item.minimal}</td>
                <td>{item.uses}</td>
                <td>{item.max_uses}</td>
                <td>{item.availfor}</td>
                <td>
                  <span
                    className={
                      item.status === "Online"
                        ? "online-status"
                        : item.status === "Offline"
                        ? "offline-status"
                        : ""
                    }
                  >
                    {item.status === "Online"
                      ? "Online"
                      : item.status === "Offline"
                      ? "Offline"
                      : item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Voucher;
