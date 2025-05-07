import React from 'react';
import './Header.css'; // Styles spécifiques au Header

function Header() {
  return (
    <header className="header">
      {/* Ceci est souvent appelé "Breadcrumbs" */}
      <div className="breadcrumbs">
        <span>Administrateur</span> / <span>Aperçu</span>
      </div>
      {/* Pourrait contenir d'autres éléments : profil utilisateur, notifications... */}
    </header>
  );
}

export default Header;
