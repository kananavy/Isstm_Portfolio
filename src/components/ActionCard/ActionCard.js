import React from 'react';
import '../../styles/ActionCard/ActionCard.css'; // ✅ Import correct du style

function ActionCard({ title, links = [] }) {
  return (
    <div className="action-card card shadow-sm border-0 rounded-3 p-4 mb-4">
      <h3 className="action-card-title text-primary mb-3">{title}</h3>
      <ul className="action-card-list list-group list-group-flush">
        {links.map((link, index) => (
          <li key={index} className="action-card-list-item list-group-item border-0 bg-light rounded-2 mb-2">
            <a href={link.href} className="text-decoration-none text-dark d-flex align-items-center">
              <i className="bi bi-link me-2"></i>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionCard;
