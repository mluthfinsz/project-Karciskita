import React from "react";
import Layout from "../components/ComponentAdmin/layout";
import { Link } from "react-router-dom";
import "./page.css";
import fotoevent from "../assets/img/event foto.png";

const Event = () => {
  return (
    <Layout>
      <div className="container-event mt-2 ps-3">
        <h2>
          <b>Event Manager</b>
        </h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card" style={{ width: "80%" }}>
              <img src={fotoevent} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">
                  <b>The Life Is But A Dream</b>
                </h5>
                <p class="card-text">
                  <Link to="/detail-event" className="btn btn-primary">
                    Detail Event
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Event;
