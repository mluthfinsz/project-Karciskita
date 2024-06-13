import React from "react";
import { Container, Image } from "react-bootstrap";
import privacyPolicyImage from "../assets/img/karciskita logo.png"; // Ganti dengan path yang benar ke gambar privasi Anda

const PrivacyPolicyPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Image
        src={privacyPolicyImage}
        alt="Privacy Policy"
        style={{ width: "200%", height: "auto", maxWidth: "300px" }}
        className="mx-auto" // Menambahkan kelas mx-auto untuk menengahkan gambar secara horizontal
      />
    </Container>
  );
};

export default PrivacyPolicyPage;
