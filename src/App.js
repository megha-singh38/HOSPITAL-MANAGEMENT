import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import DoctorsList from './components/DoctorsList';
import AppointmentQueue from './components/AppointmentQueue';
import MedicalRecords from './components/MedicalRecords';
import DiagnosticsTests from './components/DiagnosticsTests';
import MedicineOrders from './components/MedicineOrders';
import MedicalHistory from './components/MedicalHistory';
import SymptomChecker from './components/SymptomChecker';
import HealthVitals from './components/HealthVitals';
import Reminders from './components/Reminders';
import PatientProfile from './components/PatientProfile';
import Notifications from './components/Notifications';
import Feedback from './components/Feedback';
import LocationModal from './components/LocationModal';
import ConfirmationModal from './components/ConfirmationModal';

function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [currentLocation, setCurrentLocation] = useState('Andheri West, Mumbai');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const goToScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  const goToBooking = (doctor = null) => {
    setSelectedDoctor(doctor);
    setCurrentScreen('booking');
  };

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time for your appointment.');
      return;
    }
    setShowConfirmationModal(true);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return (
          <Dashboard
            currentLocation={currentLocation}
            onLocationClick={() => setShowLocationModal(true)}
            goToBooking={goToBooking}
            goToScreen={goToScreen}
          />
        );
      case 'booking':
        return (
          <Booking
            doctor={selectedDoctor}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateSelect={setSelectedDate}
            onTimeSelect={setSelectedTime}
            onBookAppointment={bookAppointment}
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'doctorsList':
        return (
          <DoctorsList
            goToBooking={goToBooking}
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'appointmentQueue':
        return (
          <AppointmentQueue
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'medicalRecords':
        return (
          <MedicalRecords
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'diagnosticsTests':
        return (
          <DiagnosticsTests
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'medicineOrders':
        return (
          <MedicineOrders
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'medicalHistory':
        return (
          <MedicalHistory
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'symptomChecker':
        return (
          <SymptomChecker
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'healthVitals':
        return (
          <HealthVitals
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'reminders':
        return (
          <Reminders
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'patientProfile':
        return (
          <PatientProfile
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'notifications':
        return (
          <Notifications
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      case 'feedback':
        return (
          <Feedback
            goToDashboard={() => goToScreen('dashboard')}
          />
        );
      default:
        return (
          <Dashboard
            currentLocation={currentLocation}
            onLocationClick={() => setShowLocationModal(true)}
            goToBooking={goToBooking}
            goToScreen={goToScreen}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderScreen()}
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onSelectLocation={(location) => {
          setCurrentLocation(location);
          setShowLocationModal(false);
        }}
      />
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => {
          setShowConfirmationModal(false);
          goToScreen('dashboard');
        }}
        date={selectedDate}
        time={selectedTime}
      />
    </div>
  );
}

export default App;
