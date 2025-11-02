import React, { useState } from 'react';

const Feedback = ({ goToDashboard }) => {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    alert('Feedback submitted successfully!');
    goToDashboard();
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Feedback</h2>
      </header>
      
      <div className="feedback-form">
        <h3>Rate your experience</h3>
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={star <= rating ? 'fas fa-star' : 'far fa-star'}
              onClick={() => setRating(star)}
            ></i>
          ))}
        </div>
        <textarea 
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button className="submit-btn" onClick={handleSubmit}>Submit Feedback</button>
      </div>
    </div>
  );
};

export default Feedback;
