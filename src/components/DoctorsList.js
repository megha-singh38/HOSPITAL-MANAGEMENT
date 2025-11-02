import React, { useState } from 'react';

const DoctorsList = ({ goToBooking, goToDashboard }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [bookmarkedDoctors, setBookmarkedDoctors] = useState(new Set());

  const doctors = [
    { id: 1, name: 'Dr. Amit Patel', specialty: 'Cardiology', rating: 4.9, reviews: 190, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face' },
    { id: 2, name: 'Dr. Sunita Gupta', specialty: 'Dermatology', rating: 4.8, reviews: 156, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face' },
    { id: 3, name: 'Dr. Vikram Singh', specialty: 'Neurology', rating: 4.7, reviews: 203, image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face' },
    { id: 4, name: 'Dr. Neha Agarwal', specialty: 'Orthopedics', rating: 4.6, reviews: 178, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face' },
    { id: 5, name: 'Dr. Ravi Mehta', specialty: 'Pediatrics', rating: 4.9, reviews: 245, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face' },
    { id: 6, name: 'Dr. Kavita Joshi', specialty: 'Gastroenterology', rating: 4.5, reviews: 134, image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face' },
    { id: 7, name: 'Dr. Pooja Sharma', specialty: 'Gynecology', rating: 4.8, reviews: 189, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face' },
    { id: 8, name: 'Dr. Arjun Reddy', specialty: 'Ophthalmology', rating: 4.7, reviews: 167, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face' },
    { id: 9, name: 'Dr. Meera Nair', specialty: 'Psychiatry', rating: 4.6, reviews: 198, image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face' },
    { id: 10, name: 'Dr. Rohit Verma', specialty: 'Urology', rating: 4.4, reviews: 142, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face' }
  ];

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

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Doctors</h2>
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </header>
      
      <div className="filter-tabs" style={{ padding: '0 20px' }}>
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
      
      <div className="doctors-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card-list" onClick={() => goToBooking(doctor)}>
            <img src={doctor.image} alt={doctor.name} />
            <div className="doctor-info">
              <h4>{doctor.name}</h4>
              <p>{doctor.specialty}</p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <span>{doctor.rating} ({doctor.reviews} Reviews)</span>
              </div>
            </div>
            <button 
              className="bookmark-btn"
              onClick={(e) => toggleBookmark(e, doctor.id)}
              style={{ position: 'static', marginLeft: 'auto' }}
            >
              <i className={bookmarkedDoctors.has(doctor.id) ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
