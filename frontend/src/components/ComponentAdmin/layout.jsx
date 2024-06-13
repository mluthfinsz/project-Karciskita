import React, { useState, useEffect } from "react";
import Profil from "../ComponentAdmin/profil";
import Sidebar from "../ComponentAdmin/sidebar";
import NavbarAdmin from "../ComponentAdmin/navbar-admin";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <Profil />
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
          }}
        >
          <NavbarAdmin />
        </div>
      )}
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        {!isMobile && (
          <div
            className="column is-2"
            style={{
              padding: 0,
              position: "fixed",
              top: 80,
              left: 0,
              height: "100vh",
              overflowY: "auto",
              display: "flex",
            }}
          >
            <Sidebar />
          </div>
        )}
        <div
          className={`column has-background-light ${isMobile ? "" : "ml-2"}`}
          style={{
            marginLeft: isMobile ? "0" : "21%",
            width: isMobile ? "100%" : "79%",
            paddingTop: isMobile ? "60px" : "0",
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
