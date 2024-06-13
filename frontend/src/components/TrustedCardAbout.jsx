import React from 'react';
import { Container } from 'react-bootstrap';
import iconCreators from '../assets//img/icons/TrustedBy.png';
import iconTicket from '../assets//img/icons/ticket.png';

const TrustedCardAbout = () => {
  return (
    <Container style={{ display: 'flex', marginTop: '2rem', justifyContent: 'center', gap: '3rem' }}>
      <div style={{ backgroundColor: '#4F4CEE', width: '100%', borderRadius: '10px', height: '12rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
        <p style={{ fontFamily: 'sans-serif' }}>Trusted By</p>
        <h2>1.000 ++</h2>
        <p>
          <img src={iconCreators} alt="event creators" />
          <span className="ms-2" style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            Event Creators{' '}
          </span>
        </p>
      </div>

      <div style={{ backgroundColor: '#4F4CEE', width: '100%', borderRadius: '10px', height: '12rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
        <p style={{ fontFamily: 'sans-serif' }}>Trusted By</p>
        <h2>10.000 ++</h2>
        <p>
          <img src={iconTicket} alt="tickets" />
          <span className="ms-2" style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            Ticket Sold
          </span>
        </p>
      </div>
    </Container>
  );
};

export default TrustedCardAbout;
