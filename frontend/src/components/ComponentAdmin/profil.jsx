// src/components/ProfilAdmin.js
import React from 'react';
import '../ComponentAdmin/component.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuthContext } from '../../context/context';
const ProfilAdmin = ({ children }) => {
  const { user } = useAuthContext(); // Ambil informasi pengguna dari AuthContext

  return (
    <div className="profile-wrapper">
      <div className="col is-fixed-top has-shadow col-profile" role="navigation">
        <div className="profile-container">
          <div className="profile-image">
            <i className="bi bi-person-fill"></i>
          </div>
          <span className="username">
            <b>{user ? user.email : 'Username'}</b>
          </span>
        </div>
      </div>
      <div className="profile-content">{children}</div>
    </div>
  );
};

export default ProfilAdmin;
