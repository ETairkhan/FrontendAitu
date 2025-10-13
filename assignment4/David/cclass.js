// Task 1: Form Validation
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and page redirection

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    console.log('Form submitted', { name, email, phone });

    if (!name || !email || !phone) {
        alert('Пожалуйста, заполните все поля!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Неверный формат email!');
    } else if (!/^\+?\d{1,4}?[\s.-]?\(?\d{1,3}?\)?[\s.-]?\d{1,3}[\s.-]?\d{1,4}$/.test(phone)) {
        alert('Неверный формат телефона!');
    } else {
        alert('Форма успешно отправлена!');
    }
});

// Task 2: Accordion for FAQs
document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', function() {
        let collapse = this.getAttribute('data-bs-target');
        let content = document.querySelector(collapse);
        content.classList.toggle('collapse');
        console.log(`Toggling collapse for: ${collapse}`);
    });
});

// Task 3: Popup Subscription or Contact Form
document.getElementById('popup-btn').addEventListener('click', function() {
    document.getElementById('popup-form').style.display = 'flex';
    console.log('Popup opened');
});

// Close popup when clicking the close button
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup-form').style.display = 'none';
    console.log('Popup closed');
});

// Close popup when clicking outside the popup area
document.getElementById('popup-form').addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup-form')) {
        document.getElementById('popup-form').style.display = 'none';
        console.log('Popup closed by clicking outside');
    }
});

// Task 4: Change Background Color with JavaScript
document.getElementById('change-bg-btn').addEventListener('click', function() {
    let randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    document.body.style.backgroundColor = randomColor;
    console.log('Background color changed to:', randomColor);
});

// Task 5: Display Current Date and Time
function updateDateTime() {
    let now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString();
    console.log('Current Date and Time:', now.toLocaleString());
}

setInterval(updateDateTime, 1000);  // Updates every second
