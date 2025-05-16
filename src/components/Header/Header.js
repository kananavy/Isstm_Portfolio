import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Header/Header.css';
import { FaPowerOff } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header({ isSidebarOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Récupérer l'utilisateur depuis le localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.name || user.email || 'Utilisateur'); // Prend 'nom', sinon 'email'
    } else {
      setUsername(''); // Aucun utilisateur connecté
    }
  }, []);

  const initial = username ? username.charAt(0).toUpperCase() : '?';

  const handleToggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // important si tu stockes l'utilisateur
    navigate('/');
  };

  // Fermer le menu si clic hors zone
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="breadcrumbs">
        {/* Tu peux mettre ici un titre ou chemin dynamique */}
      </div>

      <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div ref={dropdownRef} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Cercle initiale */}
          <div
            onClick={handleToggleMenu}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#0d6efd',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              userSelect: 'none',
              cursor: 'pointer',
            }}
            title={username}
          >
            {initial}
          </div>

          {/* Nom utilisateur */}
          <span className="user-name"> {username}</span>

          {/* Bouton déconnexion */}
          <button className="notification-btn" aria-label="Déconnexion" onClick={handleLogout}>
            <FaPowerOff />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
