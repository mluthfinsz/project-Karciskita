import React from "react";
import NavbarComponents from "../../src/components/NavbarBefore/Navbar";
import HeadingAbout from "../components/HeadingAbout";
import TrustedCardAbout from "../components/TrustedCardAbout";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";

import bg from "./../assets/img/bgAbout.png";
import Footer from "../components/Footer";

const AboutBeforeLoginPage = () => {
  return (
    <main>
      {/* Navbar */}
      <NavbarComponents />

      {/* Hero */}
      <HeadingAbout />

      {/* Trusted By & Serving */}
      <TrustedCardAbout />

      {/* About Us */}
      <AboutUs />

      {/* Our Services */}
      <OurServices />

      <h1 style={{ fontFamily: "sans-serif", marginTop: "2rem" }}>
        Be a part of KarcisKita Team!
      </h1>

      <img src={bg} alt="bg image" style={{ width: "100%", height: "100%" }} />

      <Footer />
    </main>
  );
};

export default AboutBeforeLoginPage;
