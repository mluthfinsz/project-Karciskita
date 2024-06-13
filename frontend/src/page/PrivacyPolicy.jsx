import React from "react";
import Navbar from "../components/NavbarAfterLogin/Navbar2";
import PrivacyPolicyPage from "../components/Privacy";
import ImgPrivacy from "../components/ImgPrivacy";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <ImgPrivacy />

      <PrivacyPolicyPage />
    </>
  );
}
