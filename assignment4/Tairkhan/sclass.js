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

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    createAccordion();
    createCustomAccordion();
    // Initialize theme (day/night) and hook up toggle
    initTheme();
});

// -----------------------
// Theme (Day/Night) toggle with Local Storage
// -----------------------
const THEME_KEY = 'site-theme';

function applyTheme(theme){
    // theme: 'dark' or 'light'
    if(!theme) theme = 'light';
    document.body.classList.toggle('dark', theme === 'dark');

    const btn = document.getElementById('theme-toggle');
    if(btn){
        btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        // Update button icon for clarity
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
        const sr = document.createElement('span');
        sr.className = 'visually-hidden';
        sr.textContent = ' Toggle theme';
        btn.appendChild(sr);
    }
}

function toggleTheme(){
    const current = localStorage.getItem(THEME_KEY) || (document.body.classList.contains('dark') ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
}

function initTheme(){
    // On load: read saved preference, otherwise respect OS preference
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effective = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(effective);

    // Attach click handler
    const btn = document.getElementById('theme-toggle');
    if(btn){
        btn.addEventListener('click', toggleTheme);
        // keyboard accessibility: Enter/Space
        btn.addEventListener('keydown', function(e){
            if(e.key === 'Enter' || e.key === ' '){
                e.preventDefault();
                toggleTheme();
            }
        });
    }
}

