import React, { useState } from 'react';
import { FaHome, FaUser, FaList, FaCog, FaChartBar } from 'react-icons/fa'; // Icônes de react-icons
import '../../styles/Sidebar/Sidebar.css'; // ✅ Import correct du style

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // État pour ouvrir/fermer la sidebar

  // Fonction pour basculer l'état de la sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? '☰' : '×'} {/* Symbole pour ouvrir/fermer */}
      </button>

      <div className="sidebar-header">
        <h2>ISSTM</h2>
        <p>Menu principal</p>
      </div>

      <ul className="sidebar-menu">
        <li className="menu-item">
          <FaHome className="menu-icon" />
          <span>Accueil</span>
        </li>
        <li className="menu-item">
          <FaUser className="menu-icon" />
          <span>Utilisateurs</span>
        </li>
        <li className="menu-item">
          <FaList className="menu-icon" />
          <span>Liste des étudiants</span>
        </li>
        <li className="menu-item">
          <FaChartBar className="menu-icon" />
          <span>Statistiques</span>
        </li>
        <li className="menu-item">
          <FaCog className="menu-icon" />
          <span>Paramètres</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
