// Screen Navigation
function goToBooking() {
    document.getElementById('dashboard').classList.remove('active');
    document.getElementById('booking').classList.add('active');
}

function goToDashboard() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById('dashboard').classList.add('active');
}

// Date Selection
document.addEventListener('DOMContentLoaded', function() {
    const dateButtons = document.querySelectorAll('.date-btn');
    const timeSlots = document.querySelectorAll('.time-slot');
    const filterTabs = document.querySelectorAll('.tab');
    const bookmarkBtns = document.querySelectorAll('.bookmark-btn');

    // Date selection functionality
    dateButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            dateButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Time slot selection functionality
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            timeSlots.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Filter tabs functionality
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Bookmark functionality
    bookmarkBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#5E8FEF';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '#666';
            }
        });
    });
});

// Book Appointment
function bookAppointment() {
    const selectedDate = document.querySelector('.date-btn.selected');
    const selectedTime = document.querySelector('.time-slot.selected');
    
    if (!selectedDate || !selectedTime) {
        alert('Please select both date and time for your appointment.');
        return;
    }
    
    // Show confirmation modal
    document.getElementById('confirmationModal').classList.add('active');
    
    // Update modal content with selected details
    const modalContent = document.querySelector('.modal-content p');
    modalContent.textContent = `Appointment booked for ${selectedDate.textContent} at ${selectedTime.textContent} with Dr. Amit Patel`;
}

// Close Modal
function closeModal() {
    document.getElementById('confirmationModal').classList.remove('active');
    // Optionally go back to dashboard
    goToDashboard();
}

// Close modal when clicking outside
document.getElementById('confirmationModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Add smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add click animations to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.doctor-card, .appointment-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Search functionality (basic)
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    // This would typically filter doctors or services
    console.log('Searching for:', searchTerm);
});

// Time-based greeting
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('timeGreeting');
    if (greetingElement) {
        if (hour < 12) {
            greetingElement.textContent = 'Good morning!';
        } else if (hour < 17) {
            greetingElement.textContent = 'Good afternoon!';
        } else {
            greetingElement.textContent = 'Good evening!';
        }
    }
}

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showDoctorDetails(doctorId) {
    window.open('doctor-details.html', '_blank');
}

function toggleFilters() {
    const chips = document.getElementById('filterChips');
    chips.style.display = chips.style.display === 'none' ? 'flex' : 'none';
}

function toggleFavorite(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.style.color = '#FF4757';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.style.color = '#FF4757';
    }
}

// Location Functions
function showLocationModal() {
    document.getElementById('locationModal').classList.add('active');
}

function closeLocationModal() {
    document.getElementById('locationModal').classList.remove('active');
}

function selectLocation(locationName) {
    document.getElementById('currentLocation').textContent = locationName;
    closeLocationModal();
    // Update doctors list based on location
    updateDoctorsByLocation(locationName);
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Simulate reverse geocoding
            const locations = [
                'Andheri West, Mumbai',
                'Bandra East, Mumbai', 
                'Powai, Mumbai',
                'Koramangala, Bangalore',
                'Connaught Place, Delhi'
            ];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            selectLocation(randomLocation);
        }, function() {
            alert('Unable to get your location. Please select manually.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function updateDoctorsByLocation(location) {
    const clinicLocation = document.getElementById('clinicLocation');
    if (clinicLocation) {
        const distances = ['1.2 km', '2.5 km', '3.8 km', '5.1 km', '7.3 km'];
        const randomDistance = distances[Math.floor(Math.random() * distances.length)];
        const distanceSpan = document.querySelector('.distance');
        if (distanceSpan) {
            distanceSpan.textContent = randomDistance + ' away';
        }
    }
    console.log('Updated doctors for location:', location);
}

// Emergency Functions
function callEmergency() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert(`Emergency SOS activated!\nLocation shared: ${position.coords.latitude}, ${position.coords.longitude}\nAmbulance dispatched.`);
        });
    } else {
        alert('Emergency SOS activated!\nCalling 108 - Ambulance Service');
    }
}

// Doctor On-Call Functions
function startVideoCall() {
    alert('Connecting to doctor...\nVideo call will start in 30 seconds.');
    // Simulate payment and call connection
    setTimeout(() => {
        alert('Connected to Dr. Priya Sharma\nVideo consultation started.');
    }, 2000);
}

function startAudioCall() {
    alert('Connecting to doctor...\nAudio call will start in 15 seconds.');
}

// Pharmacy Functions
let cart = [];
let cartTotal = 0;

function addToCart(btn) {
    const medicineCard = btn.closest('.medicine-card');
    const name = medicineCard.querySelector('h4').textContent;
    const price = parseInt(medicineCard.querySelector('.price').textContent.replace('₹', ''));
    
    cart.push({name, price});
    cartTotal += price;
    
    btn.textContent = 'Added';
    btn.style.background = '#7FD8BE';
    
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartSummary = document.getElementById('cartSummary');
    const cartItems = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (cart.length > 0) {
        cartSummary.style.display = 'block';
        cartItems.innerHTML = cart.map(item => `<div>${item.name} - ₹${item.price}</div>`).join('');
        cartTotalElement.textContent = `Total: ₹${cartTotal}`;
    }
}

function checkout() {
    alert(`Order placed successfully!\nTotal: ₹${cartTotal}\nDelivery in 30-45 minutes`);
    cart = [];
    cartTotal = 0;
    document.getElementById('cartSummary').style.display = 'none';
}

// Prescription Upload
function uploadPrescription() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            // Simulate OCR processing
            setTimeout(() => {
                const extractedInfo = document.getElementById('extractedInfo');
                const medicineList = document.getElementById('medicineList');
                
                medicineList.innerHTML = `
                    <div class="extracted-medicine">
                        <h4>Paracetamol 500mg</h4>
                        <p>2 tablets, twice daily</p>
                    </div>
                    <div class="extracted-medicine">
                        <h4>Amoxicillin 250mg</h4>
                        <p>1 tablet, thrice daily</p>
                    </div>
                `;
                
                extractedInfo.style.display = 'block';
                alert('Prescription processed successfully!');
            }, 2000);
        }
    };
    input.click();
}

function addToReminders() {
    alert('Medicines added to reminders successfully!');
    showScreen('reminders');
}

// Medicine Reminder Functions
function addMedicineReminder() {
    const medicineName = prompt('Enter medicine name:');
    const dosage = prompt('Enter dosage:');
    if (medicineName && dosage) {
        alert(`Reminder set for ${medicineName} - ${dosage}`);
        // Add notification scheduling here
        scheduleNotification(medicineName, dosage);
    }
}

function scheduleNotification(medicine, dosage) {
    // Simulate push notification
    setTimeout(() => {
        if (Notification.permission === 'granted') {
            new Notification('Medicine Reminder 💊', {
                body: `Time to take ${medicine} - ${dosage}`,
                icon: '/favicon.ico'
            });
        }
    }, 5000); // Demo notification after 5 seconds
}

// Health Logs
function saveHealthLog() {
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const sugar = document.getElementById('sugarLevel').value;
    const temp = document.getElementById('temperature').value;
    const weight = document.getElementById('weight').value;
    
    if (systolic && diastolic) {
        alert(`Health log saved!\nBP: ${systolic}/${diastolic}\nSugar: ${sugar}\nTemp: ${temp}°F\nWeight: ${weight}kg`);
        // Clear form
        document.querySelectorAll('#dailyHealthLogs input').forEach(input => input.value = '');
    } else {
        alert('Please fill at least blood pressure values.');
    }
}

// AI Symptom Checker
function analyzeSymptoms() {
    const symptoms = document.getElementById('symptomInput').value;
    if (!symptoms) {
        alert('Please describe your symptoms.');
        return;
    }
    
    const aiResponse = document.getElementById('aiResponse');
    const analysisResult = document.getElementById('analysisResult');
    
    // Simulate AI analysis
    setTimeout(() => {
        let analysis = '';
        
        if (symptoms.toLowerCase().includes('fever')) {
            analysis = `
                <div class="condition">🌡️ <strong>Possible Condition:</strong> Viral Infection</div>
                <div class="urgency">⚠️ <strong>Urgency:</strong> Monitor for 24-48 hours</div>
                <div class="recommendation">👨‍⚕️ <strong>Recommendation:</strong> Consult General Physician if fever persists</div>
            `;
        } else if (symptoms.toLowerCase().includes('chest pain')) {
            analysis = `
                <div class="condition">❤️ <strong>Possible Condition:</strong> Cardiac or Respiratory Issue</div>
                <div class="urgency">🚨 <strong>Urgency:</strong> Seek immediate medical attention</div>
                <div class="recommendation">👨‍⚕️ <strong>Recommendation:</strong> Visit Emergency or Cardiologist</div>
            `;
        } else {
            analysis = `
                <div class="condition">🔍 <strong>Analysis:</strong> Multiple conditions possible</div>
                <div class="urgency">📋 <strong>Urgency:</strong> Schedule routine checkup</div>
                <div class="recommendation">👨‍⚕️ <strong>Recommendation:</strong> Consult General Physician</div>
            `;
        }
        
        analysisResult.innerHTML = analysis + '<p><em>Note: This is AI guidance only. Please consult a doctor for proper diagnosis.</em></p>';
        aiResponse.style.display = 'block';
    }, 2000);
}

// Request notification permission on load
document.addEventListener('DOMContentLoaded', function() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Button Functions
function bookTest(btn) {
    btn.textContent = 'Booked';
    btn.style.background = '#7FD8BE';
}

function addToCart(btn) {
    btn.textContent = 'Added';
    btn.style.background = '#7FD8BE';
}

function submitFeedback() {
    alert('Feedback submitted successfully!');
    goToDashboard();
}

let isEditing = false;

function toggleEdit() {
    const editBtn = document.getElementById('editBtn');
    const formActions = document.getElementById('formActions');
    const inputs = document.querySelectorAll('#patientProfile input, #patientProfile select, #patientProfile textarea');
    
    if (!isEditing) {
        // Enable editing
        inputs.forEach(input => input.disabled = false);
        editBtn.textContent = 'Cancel';
        editBtn.style.background = '#8B8B8B';
        formActions.style.display = 'flex';
        isEditing = true;
    } else {
        // Cancel editing
        inputs.forEach(input => input.disabled = true);
        editBtn.textContent = 'Edit';
        editBtn.style.background = '#5E8FEF';
        formActions.style.display = 'none';
        isEditing = false;
    }
}

function saveProfile() {
    const inputs = document.querySelectorAll('#patientProfile input, #patientProfile select, #patientProfile textarea');
    inputs.forEach(input => input.disabled = true);
    document.getElementById('editBtn').textContent = 'Edit';
    document.getElementById('editBtn').style.background = '#5E8FEF';
    document.getElementById('formActions').style.display = 'none';
    isEditing = false;
    alert('Profile updated successfully!');
}

function cancelEdit() {
    toggleEdit();
}

function toggleBookmark(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.style.color = '#5E8FEF';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.style.color = '#666';
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    
    // Filter chips interaction
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
    // Symptom checker
    document.querySelectorAll('.symptom-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.borderColor = '#5E8FEF';
            this.style.color = '#5E8FEF';
        });
    });
    
    // Rating stars
    document.querySelectorAll('.rating-stars i').forEach((star, index) => {
        star.addEventListener('click', function() {
            document.querySelectorAll('.rating-stars i').forEach((s, i) => {
                if (i <= index) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Add click handlers to all buttons
    document.querySelectorAll('.book-test-btn').forEach(btn => {
        btn.addEventListener('click', () => bookTest(btn));
    });
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(btn));
    });
    
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(btn);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Filter doctors based on search term
            console.log('Searching for:', searchTerm);
        });
    }
});