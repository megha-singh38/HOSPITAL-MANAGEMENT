import React, { useState } from 'react';

const Booking = ({ doctor, selectedDate, selectedTime, onDateSelect, onTimeSelect, onBookAppointment, goToDashboard }) => {
  const [dates] = useState([22, 23, 24, 25, 26, 27, 28]);
  const [timeSlots] = useState([
    '8:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '2:00 PM'
  ]);

  const defaultDoctor = {
    name: 'Dr. Amit Patel',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=180&h=220&fit=crop&crop=face',
    rating: 4.9
  };

  const displayDoctor = doctor || defaultDoctor;

  return (
    <div className="screen booking">
      {/* Header */}
      <header className="booking-header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="share-btn">
          <i className="fas fa-share"></i>
        </button>
      </header>

      {/* Doctor Profile */}
      <section className="doctor-profile">
        <div className="profile-content">
          <div className="profile-info">
            <div className="rating-badge">
              <i className="fas fa-star"></i>
              <span>{displayDoctor.rating}</span>
            </div>
            <h2>{displayDoctor.name}</h2>
            <p>{displayDoctor.specialty}</p>
          </div>
          <div className="doctor-image">
            <img src={displayDoctor.image} alt={displayDoctor.name} />
          </div>
        </div>
      </section>

      {/* Date Selection */}
      <section className="date-selection">
        <h3 className="section-title">Select Date</h3>
        <div className="calendar-header">
          <button className="nav-arrow">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="month-year">November 2025</span>
          <button className="nav-arrow">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="weekdays">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="dates-grid">
          {dates.map((date) => (
            <button
              key={date}
              className={`date-btn ${selectedDate === date ? 'selected' : ''}`}
              onClick={() => onDateSelect(date)}
            >
              {date}
            </button>
          ))}
        </div>
      </section>

      {/* Time Slots */}
      <section className="time-slots">
        <h3 className="section-title">Select Time</h3>
        <div className="slots-header">
          <button className="nav-arrow">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slots-count">{timeSlots.length} Slots</span>
          <button className="nav-arrow">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="slots-grid">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
              onClick={() => onTimeSelect(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="booking-footer">
        <button className="message-btn">
          <i className="fas fa-comment"></i>
        </button>
        <button className="book-btn" onClick={onBookAppointment}>
          Book an Appointment
        </button>
      </footer>
    </div>
  );
};

export default Booking;
