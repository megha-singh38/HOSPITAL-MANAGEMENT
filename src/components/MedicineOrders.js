import React, { useState } from 'react';

const MedicineOrders = ({ goToDashboard }) => {
  const [cartItems, setCartItems] = useState(new Set());

  const medicines = [
    { id: 1, name: 'Paracetamol 500mg', description: 'Pain Relief', price: 125 },
    { id: 2, name: 'Ibuprofen 400mg', description: 'Anti-inflammatory', price: 152 },
    { id: 3, name: 'Amoxicillin 250mg', description: 'Antibiotic', price: 228 },
    { id: 4, name: 'Cetirizine 10mg', description: 'Antihistamine', price: 89 },
    { id: 5, name: 'Omeprazole 20mg', description: 'Acid Reducer', price: 186 }
  ];

  const handleAddToCart = (medicineId) => {
    setCartItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(medicineId)) {
        newSet.delete(medicineId);
      } else {
        newSet.add(medicineId);
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
        <h2>Medicine Orders</h2>
      </header>
      
      <div className="search-bar" style={{ margin: '20px' }}>
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search medicines..." />
      </div>
      
      <div className="medicine-list">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="medicine-card">
            <h4>{medicine.name}</h4>
            <p>{medicine.description}</p>
            <div className="price">₹{medicine.price}</div>
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(medicine.id)}
              style={{ 
                background: cartItems.has(medicine.id) ? '#7FD8BE' : '#5E8FEF'
              }}
            >
              {cartItems.has(medicine.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineOrders;
