import React, { useState } from 'react';

const SymptomChecker = ({ goToDashboard }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const symptoms = ['Headache', 'Fever', 'Cough', 'Fatigue'];

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptom)) {
        return prev.filter(s => s !== symptom);
      } else {
        return [...prev, symptom];
      }
    });
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Symptom Checker</h2>
      </header>
      
      <div className="symptom-input">
        <h3 style={{ padding: '20px 20px 0', fontSize: '18px', fontWeight: 600 }}>What symptoms are you experiencing?</h3>
        <div className="symptoms-grid">
          {symptoms.map((symptom) => (
            <button
              key={symptom}
              className="symptom-btn"
              onClick={() => toggleSymptom(symptom)}
              style={{
                borderColor: selectedSymptoms.includes(symptom) ? '#5E8FEF' : '#E8E8E8',
                color: selectedSymptoms.includes(symptom) ? '#5E8FEF' : '#333'
              }}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
