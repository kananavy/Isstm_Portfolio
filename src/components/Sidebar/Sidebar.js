// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaList, FaCog, FaChartBar } from 'react-icons/fa';
import '../../styles/Sidebar/Sidebar.css';
import isstmLogo from '../../assets/logo.png';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar text-white p-3" style={{ width: '250px' }}>
      <div className="sidebar-header">
      <img
          src={isstmLogo}
          alt="Logo ISSTM"
          style={{ width: '120px', height: 'auto' }}
        />
      </div>

      <ul className="sidebar-menu">
        <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>
          <Link to="/" className="menu-link">
            <FaHome className="menu-icon" />
            <span>Accueil</span>
          </Link>
        </li>
        <li className={`menu-item ${isActive('/utilisateurs') ? 'active' : ''}`}>
          <Link to="/utilisateurs" className="menu-link">
            <FaUser className="menu-icon" />
            <span>Utilisateurs</span>
          </Link>
        </li>
        <li className={`menu-item ${isActive('/etudiants') ? 'active' : ''}`}>
          <Link to="/etudiants" className="menu-link">
            <FaList className="menu-icon" />
            <span>Liste des étudiants</span>
          </Link>
        </li>
        <li className={`menu-item ${isActive('/statistiques') ? 'active' : ''}`}>
          <Link to="/statistiques" className="menu-link">
            <FaChartBar className="menu-icon" />
            <span>Statistiques</span>
          </Link>
        </li>
        <li className={`menu-item ${isActive('/parametres') ? 'active' : ''}`}>
          <Link to="/parametres" className="menu-link">
            <FaCog className="menu-icon" />
            <span>Paramètres</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
