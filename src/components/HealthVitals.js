import React from 'react';

const HealthVitals = ({ goToDashboard }) => {
  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Health Vitals</h2>
      </header>
      
      <div className="vitals-cards">
        <div className="vital-card">
          <h4>Blood Pressure</h4>
          <div className="vital-value">120/80</div>
          <div className="vital-chart"></div>
        </div>
        <div className="vital-card">
          <h4>Heart Rate</h4>
          <div className="vital-value">72 bpm</div>
          <div className="vital-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default HealthVitals;
