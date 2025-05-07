import React from 'react';
import './StatsCard.css'; // Styles spécifiques

function StatsCard({ title, value }) {
  // Gérer les retours à la ligne dans la valeur
  const valueLines = value.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="stats-card">
      <p className="stats-card-value">{valueLines}</p>
      <h4 className="stats-card-title">{title}</h4>
    </div>
  );
}

function StatsCard({ title, value }) {
  // Gérer les retours à la ligne dans la valeur
  const valueLines = value.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="stats-card">
      <p className="stats-card-value">{valueLines}</p>
      <h4 className="stats-card-title">{title}</h4>
    </div>
  );
}

export default StatsCard;
