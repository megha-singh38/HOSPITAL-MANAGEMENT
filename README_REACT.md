# Hospital Management System - React Frontend

This is a React.js conversion of the Hospital Management System frontend, optimized for mobile devices with full responsive design.

## Features

- 📱 Fully responsive design optimized for mobile devices
- 🏥 Comprehensive hospital management features:
  - Appointment booking
  - Doctor search and listing
  - Medical records
  - Medicine ordering
  - Lab tests booking
  - Patient profile management
  - Notifications
  - Health reminders

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.js
│   ├── Booking.js
│   ├── DoctorsList.js
│   ├── AppointmentQueue.js
│   ├── MedicalRecords.js
│   ├── DiagnosticsTests.js
│   ├── MedicineOrders.js
│   ├── MedicalHistory.js
│   ├── SymptomChecker.js
│   ├── HealthVitals.js
│   ├── Reminders.js
│   ├── PatientProfile.js
│   ├── Notifications.js
│   ├── Feedback.js
│   ├── LocationModal.js
│   └── ConfirmationModal.js
├── App.js              # Main app component
├── App.css             # Main stylesheet
├── index.js            # Entry point
└── index.css           # Global styles
```

## Mobile Optimization

- Touch-friendly UI elements (minimum 44x44px tap targets)
- Responsive grid layouts that adapt to screen size
- Mobile-first CSS design
- Smooth scrolling and touch interactions
- Optimized font sizes and spacing for mobile devices

## Technologies Used

- React 18.2.0
- Font Awesome 6.0.0
- Google Fonts (Inter)
- CSS3 with Flexbox and Grid

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is part of the Hospital Management System.
