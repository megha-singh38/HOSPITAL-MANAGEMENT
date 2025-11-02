import React from 'react';

const AppointmentQueue = ({ goToDashboard }) => {
  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Queue Status</h2>
      </header>
      
      <div className="queue-status">
        <div className="current-patient">
          <h3>Currently Serving</h3>
          <div className="patient-number">15</div>
        </div>
        <div className="your-turn">
          <h3>Your Number</h3>
          <div className="patient-number your">23</div>
          <p>8 patients ahead</p>
          <p className="wait-time">~40 min wait</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentQueue;
