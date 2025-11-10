// Task 1: Form Validation
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and page redirection

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

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
    });
});




// Task 5: Display Current Date and Time
function updateDateTime() {
    let now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString();
}

setInterval(updateDateTime, 1000);  // Updates every second


document.getElementById('change-bg-btn')?.addEventListener('click', function() {
        let randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        document.body.style.backgroundColor = randomColor;

        let textColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        document.body.style.color = textColor; });

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to toggle theme
    function toggleTheme() {
        document.documentElement.setAttribute('data-theme', 
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
        
        // Update button text/icon
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        themeToggleBtn.innerHTML = isDark ? '☀️ <span class="visually-hidden">Switch to light mode</span>' : 
                                          '🌙 <span class="visually-hidden">Switch to dark mode</span>';
        themeToggleBtn.setAttribute('aria-pressed', isDark);
        
        // Save preference to localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const isDark = savedTheme === 'dark';
        themeToggleBtn.innerHTML = isDark ? '☀️ <span class="visually-hidden">Switch to light mode</span>' : 
                                          '🌙 <span class="visually-hidden">Switch to dark mode</span>';
        themeToggleBtn.setAttribute('aria-pressed', isDark);
    } else {
        const isDark = prefersDarkScheme.matches;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeToggleBtn.innerHTML = isDark ? '☀️ <span class="visually-hidden">Switch to light mode</span>' : 
                                          '🌙 <span class="visually-hidden">Switch to dark mode</span>';
        themeToggleBtn.setAttribute('aria-pressed', isDark);
    }

    // Add click handler
    themeToggleBtn.addEventListener('click', toggleTheme);
});
