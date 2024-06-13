import React from "react";
import Container from "react-bootstrap/Container";

import bg from "./../assets/img/bg.png";
import Navbar from "../../src/components/NavbarAfterLogin/Navbar2";
import SearchInput from "./../components/SearchInput";
import UpComingEvents from "./../components/UpComingEvents";
import TopSelling from "./../components/TopSelling";
import Seminar from "./../components/Seminar";
import Concert from "../components/Concert";
import Footer from "../components/Footer";

const SearchAfterLoginPage = () => {
  return (
    <main style={{ position: "relative", backgroundColor: "#FAFAFA" }}>
      <Navbar login />

      <img
        src={bg}
        alt="bg image"
        style={{ width: "100%", height: "100%", backgroundColor: "white" }}
      />

      <Container>
        <h1 className="h1-horizontal" style={{ marginTop: "-25%" }}>
          Exclusive events, priceless moments
        </h1>
        {/* Search */}
        <SearchInput />

        {/* Upcoming */}
        <h2 style={{ marginTop: "3rem", fontWeight: "bold" }}>
          Up coming events
        </h2>
        <UpComingEvents />

        {/* Top Selling */}
        <h2 style={{ marginTop: "3rem", fontWeight: "bold" }}>Top Selling</h2>
        <TopSelling />

        {/* Seminar */}
        <h2 style={{ marginTop: "3rem", fontWeight: "bold" }}>Seminar</h2>
        <Seminar />

        {/* Concert */}
        <h2 style={{ marginTop: "3rem", fontWeight: "bold" }}>Concert</h2>
        <Concert />
      </Container>

      <Footer />
    </main>
  );
};

export default SearchAfterLoginPage;
