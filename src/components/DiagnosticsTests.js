import React, { useState } from 'react';

const DiagnosticsTests = ({ goToDashboard }) => {
  const [bookedTests, setBookedTests] = useState(new Set());

  const tests = [
    { id: 1, name: 'Blood Test', description: 'Complete Blood Count', icon: 'fa-vial' },
    { id: 2, name: 'X-Ray', description: 'Chest X-Ray', icon: 'fa-x-ray' }
  ];

  const handleBookTest = (testId) => {
    setBookedTests(prev => {
      const newSet = new Set(prev);
      if (newSet.has(testId)) {
        newSet.delete(testId);
      } else {
        newSet.add(testId);
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
        <h2>Diagnostic Tests</h2>
      </header>
      
      <div className="tests-grid">
        {tests.map((test) => (
          <div key={test.id} className="test-card">
            <i className={`fas ${test.icon}`}></i>
            <h4>{test.name}</h4>
            <p>{test.description}</p>
            <button 
              className="book-test-btn"
              onClick={() => handleBookTest(test.id)}
              style={{ 
                background: bookedTests.has(test.id) ? '#7FD8BE' : '#5E8FEF'
              }}
            >
              {bookedTests.has(test.id) ? 'Booked' : 'Book Test'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosticsTests;
