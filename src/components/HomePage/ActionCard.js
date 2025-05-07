import React from 'react';
import './ActionCard.css'; // Styles spécifiques

function ActionCard({ title, links = [] }) { // Valeur par défaut pour links
  return (
    <div className="action-card">
      <h3 className="action-card-title">{title}</h3>
      <ul className="action-card-list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionCard;
