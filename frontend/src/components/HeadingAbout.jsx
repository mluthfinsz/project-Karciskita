import React from 'react';
import { Button, Container } from 'react-bootstrap';
import heroImg from '../assets/img/human-right.png';
import heroImg2 from '../assets/img/karciskita logo.png';

const HeadingAbout = () => {
  return (
    <Container style={{ display: 'flex', marginTop: '2rem', justifyContent: 'space-between', justifyItems: 'center', alignItems: 'center' }}>
      <div style={{ width: '70%' }}>
        <h2 style={{ maxWidth: '75rem', fontSize: '64px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
          Unlock the Ultimate Event Experience with
          <span style={{ color: '#4F4CEE' }}> KarcisKita.</span>
        </h2>

        <p style={{ maxWidth: '35rem' }}>With our commitment to providing the best user experience, we aim to become the top choice for users in searching for and purchasing tickets to their favorite entertainment events.</p>

        <Button style={{ backgroundColor: '#4F4CEE', padding: '10px 30px', fontWeight: '500' }}>Create Event</Button>
      </div>

      <div style={{ position: 'relative', width: '50%', display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
        <img src={heroImg} alt="hero image" />
        <img src={heroImg2} alt="hero image" style={{ position: 'absolute', top: '14rem', right: '12rem', width: '15rem' }} />
      </div>
    </Container>
  );
};

export default HeadingAbout;
