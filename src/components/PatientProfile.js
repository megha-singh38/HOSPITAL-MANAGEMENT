import React, { useState } from 'react';

const PatientProfile = ({ goToDashboard }) => {
  const [formData, setFormData] = useState({
    fullName: 'Rajesh Kumar',
    age: 28,
    gender: 'male',
    bloodGroup: 'A+',
    mobile: '+91 98765 43210',
    email: 'rajesh.kumar@gmail.com',
    address: 'A-204, Shanti Apartments\nAndheri West, Mumbai - 400058\nMaharashtra, India'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert('Profile saved successfully!');
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={goToDashboard}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Profile</h2>
      </header>
      
      <div className="profile-section">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
          alt="User" 
          className="profile-avatar"
        />
        <h3>{formData.fullName}</h3>
        <p>Patient ID: #12345</p>
      </div>
      
      <div className="profile-form">
        <div className="form-group">
          <label>Full Name *</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Age *</label>
          <input 
            type="number" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Gender *</label>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                checked={formData.gender === 'male'}
                onChange={handleChange}
              /> 
              Male
            </label>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              /> 
              Female
            </label>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              /> 
              Other
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label>Blood Group</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Mobile Number *</label>
          <input 
            type="tel" 
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Email ID</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Full Address *</label>
          <textarea 
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button className="save-btn" onClick={handleSave}>Save Profile</button>
      </div>
    </div>
  );
};

export default PatientProfile;
