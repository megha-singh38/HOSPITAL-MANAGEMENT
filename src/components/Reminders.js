import React from 'react';

const Reminders = ({ goToDashboard }) => {
  const reminders = [
    { icon: 'fa-pills', title: 'Take Medication', description: 'Paracetamol - 2 tablets', time: '8:00 AM' },
    { icon: 'fa-calendar', title: 'Appointment', description: 'Dr. Amit Patel - Cardiology', time: '2:00 PM' },
    { icon: 'fa-pills', title: 'Take Medication', description: 'Ibuprofen - 1 tablet', time: '6:00 PM' },
    { icon: 'fa-vial', title: 'Lab Test', description: 'Blood Test - Fasting required', time: 'Tomorrow 9:00 AM' }
  ];

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Reminders</h2>
      </header>
      
      <div className="reminders-list">
        {reminders.map((reminder, index) => (
          <div key={index} className="reminder-card">
            <i className={`fas ${reminder.icon}`}></i>
            <div className="reminder-info">
              <h4>{reminder.title}</h4>
              <p>{reminder.description}</p>
              <span className="reminder-time">{reminder.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;
