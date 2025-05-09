import React from 'react';
import '../../styles/Header/Header.css'; // ✅ Import correct du style
import { FaUserCircle, FaBell } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="breadcrumbs">
        <h2>Tableau de bord</h2>
        <span className="path">Administrateur / Aperçu</span>
      </div>

      <div className="header-right">
        <button className="notification-btn" aria-label="Notifications">
          <FaBell />
        </button>
        <div className="user-profile">
          <FaUserCircle className="user-icon" />
          <span className="user-name">Bienvenue, Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
