// sclass.js - Accordion FAQ, Display Current Date and Time

// Task 2: Accordion for FAQs
function createAccordion() {
    const accordionSection = document.createElement('section');
    accordionSection.className = 'py-5 bg-white';
    accordionSection.innerHTML = `
        <div class="container">
            <h2 class="text-center mb-5 display-5 fw-normal">Frequently Asked Questions</h2>
            <div class="accordion" id="faqAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                            What is the fuel efficiency of Mercedes-Benz S-Class?
                        </button>
                    </h2>
                    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            The Mercedes-Benz S-Class offers excellent fuel efficiency for its class, with combined consumption ranging from 8.5 to 9.2 L/100km depending on the engine and driving conditions.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            What warranty does Mercedes-Benz provide?
                        </button>
                    </h2>
                    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Mercedes-Benz offers a comprehensive warranty package including 4-year/unlimited kilometer warranty, 24-hour roadside assistance, and various service packages.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            What advanced safety features are included?
                        </button>
                    </h2>
                    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            The S-Class includes PRE-SAFE® system, Active Distance Assist, Active Steering Assist, Active Lane Keeping Assist, and numerous other advanced driver assistance systems.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            Can I customize my S-Class interior?
                        </button>
                    </h2>
                    <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Yes, Mercedes-Benz offers extensive customization options including various leather upholstery, wood trims, ambient lighting colors, and advanced entertainment systems.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                            What is the maintenance schedule?
                        </button>
                    </h2>
                    <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Maintenance intervals are flexible based on driving conditions, typically ranging from 15,000 to 25,000 kilometers. The vehicle's onboard system will indicate when service is due.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert accordion after the cards section
    const cardsSection = document.querySelector('.cards-section');
    if (cardsSection) {
        cardsSection.parentNode.insertBefore(accordionSection, cardsSection.nextSibling);
    }
}

// Custom accordion functionality for specifications
function createCustomAccordion() {
    const customAccordionSection = document.createElement('section');
    customAccordionSection.className = 'py-5 bg-light';
    customAccordionSection.innerHTML = `
        <div class="container">
            <h2 class="text-center mb-5 display-5 fw-normal">Technical Specifications</h2>
            <div class="accordion" id="specsAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#specs1" aria-expanded="false" aria-controls="specs1">
                            Performance Specifications
                        </button>
                    </h2>
                    <div id="specs1" class="accordion-collapse collapse" data-bs-parent="#specsAccordion">
                        <div class="accordion-body">
                            <ul class="list-unstyled mb-0">
                                <li><strong>Engine:</strong> 3.0L Inline-6 Turbo</li>
                                <li><strong>Power:</strong> 435 horsepower</li>
                                <li><strong>Torque:</strong> 520 Nm</li>
                                <li><strong>0-100 km/h:</strong> 4.9 seconds</li>
                                <li><strong>Top Speed:</strong> 250 km/h (electronically limited)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#specs2" aria-expanded="false" aria-controls="specs2">
                            Dimensions & Weight
                        </button>
                    </h2>
                    <div id="specs2" class="accordion-collapse collapse" data-bs-parent="#specsAccordion">
                        <div class="accordion-body">
                            <ul class="list-unstyled mb-0">
                                <li><strong>Length:</strong> 5,289 mm</li>
                                <li><strong>Width:</strong> 1,921 mm</li>
                                <li><strong>Height:</strong> 1,503 mm</li>
                                <li><strong>Wheelbase:</strong> 3,216 mm</li>
                                <li><strong>Curb Weight:</strong> 2,070 kg</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#specs3" aria-expanded="false" aria-controls="specs3">
                            Technology Features
                        </button>
                    </h2>
                    <div id="specs3" class="accordion-collapse collapse" data-bs-parent="#specsAccordion">
                        <div class="accordion-body">
                            <ul class="list-unstyled mb-0">
                                <li>MBUX Infotainment System with 12.8" OLED display</li>
                                <li>Augmented Reality Navigation</li>
                                <li>Burmester® 4D Surround Sound System</li>
                                <li>DIGITAL LIGHT with projection function</li>
                                <li>Active Ambient Lighting with 263 LEDs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert custom accordion after the main accordion
    const existingAccordion = document.querySelector('#faqAccordion');
    const parent = existingAccordion ? existingAccordion.closest('section').parentNode : document.querySelector('main');
    
    if (parent) {
        parent.insertBefore(customAccordionSection, document.querySelector('.py-5.bg-light'));
    }
}

// Task 5: Display Current Date and Time in Footer
function createDateTimeDisplay() {
    // Create datetime container for footer
    const datetimeContainer = document.createElement('div');
    datetimeContainer.className = 'datetime-footer bg-dark text-light py-3';
    datetimeContainer.innerHTML = `
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="datetime-content">
                        <div class="current-datetime mb-2">
                            <strong class="text-info">Current Date & Time:</strong>
                            <span id="current-datetime" class="ms-2 text-white"></span>
                        </div>
                        <div class="page-loaded">
                            <strong class="text-success">Page Loaded:</strong>
                            <span id="page-loaded-time" class="ms-2 text-white">${new Date().toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-md-end">
                    <div class="footer-info">
                        <p class="mb-1 text-muted">&copy; ${new Date().getFullYear()} Mercedes-Benz. All rights reserved.</p>
                        <p class="mb-0 small text-muted">This page is for demonstration purposes only.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert into footer
    const footer = document.querySelector('footer');
    if (footer) {
        // Remove any existing content from footer
        footer.innerHTML = '';
        footer.appendChild(datetimeContainer);
    }
    
    updateDateTime();
    
    // Update time every second
    setInterval(updateDateTime, 1000);
}

function updateDateTime() {
    const now = new Date();
    
    // Format options for current datetime
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    const datetimeElement = document.getElementById('current-datetime');
    
    if (datetimeElement) {
        datetimeElement.textContent = formattedDateTime;
    }
}

// Enhanced footer with additional information
function enhanceFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        // Add some interactive elements
        const interactiveSection = document.createElement('div');
        interactiveSection.className = 'interactive-footer bg-secondary text-white py-4';
        interactiveSection.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-3 mb-lg-0">
                        <h5 class="mb-3">Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="../David/cclass.html" class="text-light text-decoration-none">C-Class</a></li>
                            <li><a href="../Bibarys/Eclass.html" class="text-light text-decoration-none">E-Class</a></li>
                            <li><a href="../Tairkhan/sclass.html" class="text-light text-decoration-none">S-Class</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 mb-3 mb-lg-0">
                        <h5 class="mb-3">Resources</h5>
                        <ul class="list-unstyled">
                            <li><a href="../Bibarys/news.html" class="text-light text-decoration-none">News & Updates</a></li>
                            <li><a href="../David/special.html" class="text-light text-decoration-none">Special Offers</a></li>
                            <li><a href="../Tairkhan/buyNow.html" class="text-light text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <h5 class="mb-3">Team Members</h5>
                        <p class="mb-2 text-light">Tairkhan | David | Yeraly | Bibarys</p>
                        <p class="mb-0 text-muted">SE-2412</p>
                    </div>
                </div>
            </div>
        `;
        
        footer.parentNode.insertBefore(interactiveSection, footer);
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    createAccordion();
    createCustomAccordion();
    createDateTimeDisplay();
    enhanceFooter();
});