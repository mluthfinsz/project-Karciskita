import React from "react";
import Layout from "../components/ComponentAdmin/layout";
import LineChart from "../components/ComponentAdmin/line-chart";
import "../page/page.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mt-2">
        <h2>
          <b>Dashboard</b>
        </h2>
        <section id="data">
          <div className="dash-data">
            <div className="row d-flex align-items-center py-2 ps-2 row-dash">
              <div className="col-sm d-flex align-items-center">
                <i className="bi bi-calendar-week-fill icon-data"></i>
                <div className="text-container">
                  <b>1</b>
                  <span>Running Event</span>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center py-2 ps-2 row-dash">
              <div className="col-sm d-flex align-items-center">
                <i className="bi bi-ticket-perforated-fill icon-data"></i>
                <div className="text-container">
                  <b>1</b>
                  <span>Ticket Sold</span>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center py-2 ps-2 row-dash">
              <div className="col-sm d-flex align-items-center">
                <i className="bi bi-coin icon-data"></i>
                <div className="text-container">
                  <b>19.815.000</b>
                  <span>Total Cash</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="chart" className="mt-3 mb-3">
          <h4 className="ps-4">
            <b>Ticket Sold</b>
          </h4>
          <LineChart></LineChart>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
