import React from 'react';

const LocationModal = ({ isOpen, onClose, onSelectLocation }) => {
  const locations = [
    { name: 'Andheri West', city: 'Mumbai, Maharashtra' },
    { name: 'Bandra East', city: 'Mumbai, Maharashtra' },
    { name: 'Powai', city: 'Mumbai, Maharashtra' },
    { name: 'Koramangala', city: 'Bangalore, Karnataka' },
    { name: 'Connaught Place', city: 'New Delhi, Delhi' }
  ];

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // Simulate reverse geocoding
          const randomLocation = locations[Math.floor(Math.random() * locations.length)];
          onSelectLocation(`${randomLocation.name}, ${randomLocation.city.split(',')[1].trim()}`);
        },
        () => {
          alert('Unable to get your location. Please select manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content location-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Select Location</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="location-search">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search area, city..." />
          </div>
          <button className="current-location-btn" onClick={handleGetCurrentLocation}>
            <i className="fas fa-crosshairs"></i>
            Use Current Location
          </button>
        </div>
        <div className="location-list">
          {locations.map((location, index) => (
            <div
              key={index}
              className="location-item"
              onClick={() => onSelectLocation(`${location.name}, ${location.city.split(',')[1].trim()}`)}
            >
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>{location.name}</h4>
                <p>{location.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
