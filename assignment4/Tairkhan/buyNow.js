// buynow.js - Form Validation, Popup Form, Background Color Change

// Task 1: Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('enquiry-form');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm();
        });
    }

    
    initPopupForm();
    initColorChanger();
    initStarRating();
});

// Task: Star rating widget behavior
function initStarRating() {
    const stars = document.querySelectorAll('#star-rating .star');
    const ratingInput = document.getElementById('rating-value');
    const ratingLabel = document.getElementById('rating-label');
    if (!stars || stars.length === 0 || !ratingInput) return;

    let currentRating = parseInt(ratingInput.value, 10) || 0;

    // Update visual state of stars
    function updateStars(rating) {
        stars.forEach(star => {
            const val = parseInt(star.getAttribute('data-value'), 10);
            if (val <= rating) {
                star.textContent = '★';
                star.classList.add('text-warning');
                star.setAttribute('aria-pressed', 'true');
                star.setAttribute('aria-checked', 'true');
            } else {
                star.textContent = '☆';
                star.classList.remove('text-warning');
                star.setAttribute('aria-pressed', 'false');
                star.setAttribute('aria-checked', 'false');
            }
        });

        if (ratingLabel) {
            ratingLabel.textContent = rating > 0 ? `${rating} / ${stars.length} star${rating > 1 ? 's' : ''}` : 'No rating';
        }
    }

    // Set rating persistently
    function setRating(rating) {
        currentRating = rating;
        ratingInput.value = rating;
        updateStars(rating);
    }

    // Attach event listeners
    stars.forEach(star => {
        const val = parseInt(star.getAttribute('data-value'), 10);

        star.addEventListener('click', function() {
            setRating(val);
        });

        // Hover preview
        star.addEventListener('mouseenter', function() {
            updateStars(val);
        });

        star.addEventListener('mouseleave', function() {
            updateStars(currentRating);
        });

        // Keyboard accessibility: Enter or Space sets the rating
        star.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setRating(val);
            }
        });
    });

    // Initialize visuals
    updateStars(currentRating);
}

function validateForm() {
    let isValid = true;
    
   
    clearErrorMessages();
    
   
    const firstName = document.getElementById('firstname');
    if (!firstName.value.trim()) {
        showError(firstName, 'First name is required');
        isValid = false;
    }
    
    // Validate Last Name
    const lastName = document.getElementById('lastname');
    if (!lastName.value.trim()) {
        showError(lastName, 'Last name is required');
        isValid = false;
    }
    
    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Phone
    const phone = document.getElementById('phone');
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phone.value.trim()) {
        showError(phone, 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate Subject
    const subject = document.getElementById('subject');
    if (!subject.value) {
        showError(subject, 'Please select a subject');
        isValid = false;
    }
    
    // Validate Message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }
    
    // Validate Consent
    const consent = document.getElementById('consent');
    if (!consent.checked) {
        showError(consent, 'You must agree to the privacy policy');
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        showSuccessMessage();
        document.getElementById('enquiry-form').reset();
    }
    
    return isValid;
}

function showError(input, message) {
    const formGroup = input.closest('.mb-3') || input.closest('.col-md-6') || input.closest('.form-check');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-danger small mt-1';
    errorDiv.textContent = message;
    
    // Add error class to input
    input.classList.add('is-invalid');
    
    formGroup.appendChild(errorDiv);
}

function clearErrorMessages() {
    // Remove all error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    // Remove invalid classes
    const invalidInputs = document.querySelectorAll('.is-invalid');
    invalidInputs.forEach(input => input.classList.remove('is-invalid'));
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <h3>Thank You!</h3>
            <p>Your enquiry has been submitted successfully. We'll get back to you shortly.</p>
            <button class="btn btn-primary">OK</button>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Add event listener to OK button
    successDiv.querySelector('button').addEventListener('click', function() {
        successDiv.remove();
    });
}

// Task 3: Popup Subscription Form
function initPopupForm() {
    // Create popup structure
    const popupHTML = `
        <div id="popup-overlay" class="popup-overlay">
            <div class="popup-content">
                <button id="close-popup" class="close-btn">&times;</button>
                <h3 class="mb-4">Subscribe to Our Newsletter</h3>
                <p class="text-muted mb-4">Stay updated with the latest Mercedes-Benz news and offers</p>
                <form id="subscribe-form" class="subscribe-form">
                    <div class="form-group mb-3">
                        <label for="popup-email" class="form-label">Email Address *</label>
                        <input type="email" id="popup-email" class="form-control" required>
                        <div class="error-message text-danger small mt-1"></div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="popup-name" class="form-label">Full Name</label>
                        <input type="text" id="popup-name" class="form-control">
                    </div>
                    <div class="form-check mb-4">
                        <input type="checkbox" id="popup-consent" class="form-check-input" required>
                        <label for="popup-consent" class="form-check-label small">
                            I agree to receive marketing communications
                        </label>
                    </div>
                    <button type="submit" class="submit-btn btn btn-primary w-100">Subscribe Now</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    // Add subscribe button to hero section
    const heroSection = document.querySelector('.hero .btn-group');
    if (heroSection) {
        const subscribeBtn = document.createElement('button');
        subscribeBtn.type = 'button';
        subscribeBtn.className = 'btn btn-success';
        subscribeBtn.textContent = 'Subscribe';
        subscribeBtn.addEventListener('click', showPopup);
        heroSection.appendChild(subscribeBtn);
    }
    
    // Event listeners for popup
    document.getElementById('close-popup').addEventListener('click', closePopup);
    document.getElementById('popup-overlay').addEventListener('click', function(e) {
        if (e.target === this) closePopup();
    });
    
    // Subscribe form validation
    document.getElementById('subscribe-form').addEventListener('submit', function(e) {
        e.preventDefault();
        validateSubscribeForm();
    });
}

function showPopup() {
    const popup = document.getElementById('popup-overlay');
    const isDark = document.body.classList.contains('dark');
    
    // Apply theme styles directly when showing popup
    const popupContent = popup.querySelector('.popup-content');
    if (isDark) {
        popupContent.style.cssText = `
            background: #1e1e1e;
            color: #e6eef6;
            border: 1px solid #444;
        `;
        // Apply styles to all form elements...
    } else {
        popupContent.style.cssText = `
            background: #ffffff;
            color: #333333;
            border: 1px solid #e0e0e0;
        `;
    }
    
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closePopup() {
    const popup = document.getElementById('popup-overlay');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('subscribe-form').reset();
    
    // Clear errors
    const errorMessages = popup.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = '');
    const invalidInputs = popup.querySelectorAll('.is-invalid');
    invalidInputs.forEach(input => input.classList.remove('is-invalid'));
}

function validateSubscribeForm() {
    const email = document.getElementById('popup-email');
    const consent = document.getElementById('popup-consent');
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('#subscribe-form .error-message').forEach(error => error.textContent = '');
    email.classList.remove('is-invalid');
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.nextElementSibling.textContent = 'Please enter a valid email address';
        email.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate consent
    if (!consent.checked) {
        isValid = false;
        // You might want to show an error for consent as well
    }
    
    if (isValid) {
        alert('Thank you for subscribing to our newsletter!');
        closePopup();
    }
    
    return isValid;
}





// Task: Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Apply the saved theme (if any)
    const savedTheme = localStorage.getItem('theme') || 'light'; // default to light
    document.body.classList.toggle('dark', savedTheme === 'dark');

    // Add event listener for the theme toggle button
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', toggleTheme);

    // Set the initial text of the theme toggle button based on the current theme
    if (savedTheme === 'dark') {
        themeToggleButton.textContent = '🌙';  // Dark mode
    } else {
        themeToggleButton.textContent = '☀️';  // Light mode
    }
});

function toggleTheme() {
    // Toggle dark mode
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark', newTheme === 'dark');

    // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);

    // Change the icon of the button based on the new theme
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.textContent = newTheme === 'dark' ? '🌙' : '☀️';
}
