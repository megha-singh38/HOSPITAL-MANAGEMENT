import React, { useState, useEffect } from 'react';

const Dashboard = ({ currentLocation, onLocationClick, goToBooking, goToScreen }) => {
  const [greeting, setGreeting] = useState('Good morning!');
  const [activeTab, setActiveTab] = useState('All');
  const [activeChip, setActiveChip] = useState('All');
  const [bookmarkedDoctors, setBookmarkedDoctors] = useState(new Set());

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning!');
    } else if (hour < 17) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good evening!');
    }
  }, []);

  const toggleBookmark = (e, doctorId) => {
    e.stopPropagation();
    setBookmarkedDoctors(prev => {
      const newSet = new Set(prev);
      if (newSet.has(doctorId)) {
        newSet.delete(doctorId);
      } else {
        newSet.add(doctorId);
      }
      return newSet;
    });
  };

  const popularDoctors = [
    {
      id: 1,
      name: 'Dr. Amit Patel',
      specialty: 'Cardiology',
      distance: '2.5 km away',
      rating: 4.9,
      reviews: 190,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Dr. Sunita Gupta',
      specialty: 'Dermatology',
      distance: '1.8 km away',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face'
    }
  ];

  return (
    <div className="screen">
      {/* Header */}
      <header className="header">
        <div className="user-profile">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
            alt="User" 
            className="avatar"
          />
          <div className="greeting">
            <p className="greeting-text">{greeting}</p>
            <h3 className="username">Rajesh Kumar 👋</h3>
          </div>
        </div>
        <div className="notification" onClick={() => goToScreen('notifications')}>
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="location-header">
          <div className="location-info" onClick={onLocationClick}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <span className="location-label">Your Location</span>
              <span className="location-name">{currentLocation}</span>
            </div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <h1>How are you feeling today?</h1>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search a doctor, medicine, etc..." />
          <i className="fas fa-microphone"></i>
        </div>
      </section>

      {/* Health Summary Cards */}
      <section className="health-summary">
        <div className="summary-cards">
          <div className="summary-card upcoming" onClick={() => goToScreen('appointmentQueue')}>
            <div className="card-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="card-content">
              <h4>Upcoming Appointment</h4>
              <p>Today, 2:30 PM</p>
              <span className="card-subtitle">Dr. Amit Patel</span>
            </div>
          </div>
          <div className="summary-card reports" onClick={() => goToScreen('medicalRecords')}>
            <div className="card-icon">
              <i className="fas fa-file-medical"></i>
            </div>
            <div className="card-content">
              <h4>Pending Reports</h4>
              <p>2 Reports</p>
              <span className="card-subtitle">Blood Test, X-Ray</span>
            </div>
          </div>
          <div className="summary-card medicine" onClick={() => goToScreen('reminders')}>
            <div className="card-icon">
              <i className="fas fa-pills"></i>
            </div>
            <div className="card-content">
              <h4>Medicine Reminder</h4>
              <p>3 Pending</p>
              <span className="card-subtitle">Next: 6:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Shortcuts */}
      <section className="quick-shortcuts">
        <h2>Quick Actions</h2>
        <div className="shortcuts-grid">
          <div className="shortcut-card" onClick={goToBooking}>
            <i className="fas fa-calendar-plus"></i>
            <span>Book Appointment</span>
          </div>
          <div className="shortcut-card" onClick={() => goToScreen('doctorsList')}>
            <i className="fas fa-user-md"></i>
            <span>Find Doctor</span>
          </div>
          <div className="shortcut-card" onClick={() => goToScreen('medicineOrders')}>
            <i className="fas fa-shopping-cart"></i>
            <span>Order Medicine</span>
          </div>
          <div className="shortcut-card" onClick={() => goToScreen('diagnosticsTests')}>
            <i className="fas fa-vial"></i>
            <span>Lab Test</span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-bar-enhanced">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search doctors, specialties..." />
            <button className="filter-btn">
              <i className="fas fa-filter"></i>
            </button>
          </div>
          <div className="filter-chips">
            {['All', 'Cardiologist', 'Dentist', 'Orthopedic', 'Dermatologist', 'Pediatrician'].map((chip) => (
              <button
                key={chip}
                className={`chip ${activeChip === chip ? 'active' : ''}`}
                onClick={() => setActiveChip(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section className="upcoming-appointments">
        <h2>Upcoming Appointments</h2>
        <div className="appointment-card">
          <div className="doctor-info">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face" 
              alt="Dr. Priya Sharma" 
              className="doctor-avatar"
            />
            <div className="doctor-details">
              <h3>Dr. Priya Sharma</h3>
              <p>Cardiology</p>
            </div>
            <button className="video-call-btn">
              <i className="fas fa-video"></i>
            </button>
          </div>
          <div className="appointment-time">
            <div className="date">
              <i className="fas fa-calendar"></i>
              <span>18 Nov, Monday</span>
            </div>
            <div className="time">
              <i className="fas fa-clock"></i>
              <span>8pm - 8:30 pm</span>
            </div>
          </div>
          <div className="appointment-actions">
            <button className="reschedule-btn" onClick={goToBooking}>Re-Schedule</button>
            <button className="view-profile-btn" onClick={goToBooking}>View Profile</button>
          </div>
        </div>
      </section>

      {/* Popular Doctors */}
      <section className="popular-doctors">
        <h2>Popular Doctors</h2>
        <div className="filter-tabs">
          {['All', 'Cardiology', 'Dermatology', 'Neurology'].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="doctors-grid">
          {popularDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card" onClick={() => goToBooking(doctor)}>
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-info">
                <h4>{doctor.name}</h4>
                <p>{doctor.specialty} • {doctor.distance}</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <span>{doctor.rating}</span>
                  <span className="reviews">({doctor.reviews} Reviews)</span>
                </div>
              </div>
              <button 
                className="bookmark-btn"
                onClick={(e) => toggleBookmark(e, doctor.id)}
              >
                <i className={bookmarkedDoctors.has(doctor.id) ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active" onClick={() => goToScreen('dashboard')}>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </button>
        <button className="nav-item" onClick={() => goToScreen('appointmentQueue')}>
          <i className="fas fa-calendar"></i>
          <span>Queue</span>
        </button>
        <button className="nav-item" onClick={() => goToScreen('medicalRecords')}>
          <i className="fas fa-file-medical"></i>
          <span>Records</span>
        </button>
        <button className="nav-item" onClick={() => goToScreen('patientProfile')}>
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
