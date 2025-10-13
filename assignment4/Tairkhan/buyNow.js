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

    // Initialize all features when DOM is loaded
    initPopupForm();
    initColorChanger();
});

function validateForm() {
    let isValid = true;
    
    // Clear previous error messages
    clearErrorMessages();
    
    // Validate First Name
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

// Task 4: Change Background Color
function initColorChanger() {
    const colorButton = document.createElement('button');
    colorButton.id = 'color-changer';
    colorButton.className = 'btn btn-warning position-fixed';
    colorButton.style.cssText = `
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        font-size: 0.8rem;
        border: none;
        cursor: pointer;
    `;
    colorButton.textContent = '🎨';
    colorButton.title = 'Change background color';
    
    const colors = [
        '#f8f9fa', 
        '#e9ecef', 
        '#dee2e6', 
        '#ffffff', 
        '#f1f3f4',
        '#e3f2fd',
        '#f3e5f5'
    ];
    let currentColorIndex = 0;
    
    colorButton.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
        
        // Show current color name
        showColorToast(colors[currentColorIndex]);
    });
    
    document.body.appendChild(colorButton);
}

function showColorToast(color) {
    const colorNames = {
        '#f8f9fa': 'Light Gray',
        '#e9ecef': 'Silver',
        '#dee2e6': 'Gray',
        '#ffffff': 'White',
        '#f1f3f4': 'Cloud White',
        '#e3f2fd': 'Light Blue',
        '#f3e5f5': 'Light Purple'
    };
    
    // Remove existing toast if any
    const existingToast = document.querySelector('.color-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'color-toast';
    toast.textContent = `Background: ${colorNames[color] || color}`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}