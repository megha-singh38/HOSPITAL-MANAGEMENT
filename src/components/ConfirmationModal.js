import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, date, time }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <i className="fas fa-check-circle"></i>
          <h3>Appointment Booked!</h3>
        </div>
        <p>
          Your appointment with Dr. Amit Patel has been successfully booked for 
          November {date || '24'}, 2025 at {time || '9:30 AM'}.
        </p>
        <button className="modal-btn" onClick={onClose}>Done</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
