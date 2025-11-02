import React from 'react';

const MedicalHistory = ({ goToDashboard }) => {
  const historyItems = [
    { date: 'Nov 2025', title: 'Cardiology Consultation', description: 'Regular checkup with Dr. Sarah Wilson' }
  ];

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Medical History</h2>
      </header>
      
      <div className="timeline">
        {historyItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;
