import React from 'react';
import { Container } from 'react-bootstrap';
import aboutImg from '../assets/img/aboutUs.png';

const AboutUs = () => {
  return (
    <Container style={{ display: 'flex', alignItems: 'center' }}>
      <img src={aboutImg} alt="about us images" className="w-50 mt-5" />

      <div style={{ marginLeft: '2rem' }}>
        <h1 style={{ textAlign: 'left' }}>About Us</h1>
        <p style={{ textAlign: 'justify', lineHeight: '1.8rem' }}>
          Our platform is dedicated to providing a user-friendly and efficient ticket purchasing experience for entertainment events. We focus on identifying key features for a smooth and enjoyable process, designing an easy-to-use
          interface for all users, developing effective search and filter options, and ensuring security in every payment transaction. We believe this dedication will enhance your experience in buying tickets for entertainment events.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
