import React from 'react';

const MedicalRecords = ({ goToDashboard }) => {
  const records = [
    { date: 'Nov 18, 2025', title: 'General Checkup', doctor: 'Dr. Amit Patel - Cardiology', status: 'Completed' },
    { date: 'Nov 15, 2025', title: 'Skin Consultation', doctor: 'Dr. Sunita Gupta - Dermatology', status: 'Completed' },
    { date: 'Nov 10, 2025', title: 'Neurological Exam', doctor: 'Dr. Vikram Singh - Neurology', status: 'Completed' },
    { date: 'Nov 5, 2025', title: 'Orthopedic Review', doctor: 'Dr. Neha Agarwal - Orthopedics', status: 'Completed' },
    { date: 'Oct 28, 2025', title: 'Pediatric Checkup', doctor: 'Dr. Ravi Mehta - Pediatrics', status: 'Completed' }
  ];

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Medical Records</h2>
      </header>
      
      <div className="records-list">
        {records.map((record, index) => (
          <div key={index} className="record-card">
            <div className="record-date">{record.date}</div>
            <h4>{record.title}</h4>
            <p>{record.doctor}</p>
            <div className={`record-status ${record.status.toLowerCase()}`}>{record.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecords;
