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
    // Update doctor distances based on selected location
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

function saveProfile() {
    alert('Profile saved successfully!');
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