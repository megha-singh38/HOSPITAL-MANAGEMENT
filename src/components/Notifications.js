import React from 'react';

const Notifications = ({ goToDashboard }) => {
  const notifications = [
    { icon: 'fa-calendar', title: 'Appointment Reminder', description: 'Your appointment with Dr. Amit Patel is tomorrow at 9:30 AM', time: '2 hours ago' },
    { icon: 'fa-pills', title: 'Medication Reminder', description: 'Time to take your Paracetamol - 2 tablets', time: '4 hours ago' },
    { icon: 'fa-check-circle', title: 'Test Results Ready', description: 'Your blood test results are now available', time: '1 day ago' },
    { icon: 'fa-user-md', title: 'New Doctor Available', description: 'Dr. Rohit Verma is now accepting appointments', time: '2 days ago' },
    { icon: 'fa-star', title: 'Rate Your Experience', description: 'Please rate your recent visit with Dr. Sunita Gupta', time: '3 days ago' }
  ];

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Notifications</h2>
      </header>
      
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-card">
            <i className={`fas ${notification.icon}`}></i>
            <div className="notification-content">
              <h4>{notification.title}</h4>
              <p>{notification.description}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
