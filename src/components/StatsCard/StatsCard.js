import React from 'react';
import '../../styles/StatsCard/StatsCard.css'; // ✅ Import correct du style

function StatsCard({ title, value }) {
  const valueLines = value.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="stats-card shadow-sm p-3 mb-4 rounded">
      <h4 className="stats-card-title">{title}</h4>
      <p className="stats-card-value">{valueLines}</p>
    </div>
  );
}

export default StatsCard;
